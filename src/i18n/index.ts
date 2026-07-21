/**
 * Client-side i18n engine.
 *
 * The site is static, so all translation happens in the browser:
 *   1. Elements opt in with `data-i18n="key"` (or `data-i18n-html`).
 *   2. On load and on every locale change we swap their text from a bundled
 *      dictionary, falling back to `data-en` (the SSR English) when a key is
 *      missing for the active locale.
 *   3. <html lang/dir> update so layout + RTL flip instantly (no flash thanks
 *      to the inline head script in BaseLayout).
 *
 * The language switcher menu items carry `data-lang="<code>"`; the theme
 * toggle is `#theme-toggle`. Both are wired here so a single module powers
 * every page.
 */

import { UI } from './ui';
import { TOOL_META } from './tool-translations';
import { TOOL_CONTENT } from './tool-translations';
import { DEFAULT_LOCALE, getLang, isRTL } from './config';

type Dict = Record<string, string>;

const LOCALE_KEY = 'calcutils:locale';
const THEME_KEY = 'calcutils:theme';

/* Precompute the English merged dictionary (ultimate fallback). */
const EN: Dict = {
  ...(UI.en as Dict),
  ...(TOOL_META.en ?? {}),
  ...(TOOL_CONTENT.en ?? {}),
};

/* Per-locale merged dictionaries, lazily built and cached. */
const cache = new Map<string, Dict>();
function dictFor(locale: string): Dict {
  if (locale === 'en') return EN;
  if (cache.has(locale)) return cache.get(locale)!;
  const d: Dict = {
    ...((UI[locale] as Dict | undefined) ?? {}),
    ...((TOOL_META[locale] as Dict | undefined) ?? {}),
    ...((TOOL_CONTENT[locale] as Dict | undefined) ?? {}),
  };
  cache.set(locale, d);
  return d;
}

export function t(key: string, locale = currentLocale): string | null {
  const v = dictFor(locale)[key] ?? EN[key];
  return v ?? null;
}

/* ------------------------------------------------------------------ */
/* Storage                                                             */
/* ------------------------------------------------------------------ */
function readCookie(name: string): string | null {
  const m = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return m ? decodeURIComponent(m[2] ?? '') : null;
}
function writeCookie(name: string, value: string): void {
  document.cookie = `${name}=${encodeURIComponent(value)};path=/;max-age=31536000;samesite=lax`;
}

function storedLocale(): string {
  try {
    const l = localStorage.getItem(LOCALE_KEY) || readCookie(LOCALE_KEY);
    if (l && dictAvailable(l)) return l;
  } catch {
    /* ignore */
  }
  return DEFAULT_LOCALE;
}
function storedTheme(): 'light' | 'dark' | null {
  try {
    const th = localStorage.getItem(THEME_KEY) || readCookie(THEME_KEY);
    if (th === 'light' || th === 'dark') return th;
  } catch {
    /* ignore */
  }
  return null;
}

/** A locale is "available" if we ship UI strings for it. */
function dictAvailable(locale: string): boolean {
  return !!UI[locale];
}

/* ------------------------------------------------------------------ */
/* Applying translations                                               */
/* ------------------------------------------------------------------ */
let currentLocale = DEFAULT_LOCALE;

function applyTranslations(locale: string): void {
  currentLocale = locale;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n!;
    const val = t(key, locale) ?? el.dataset.en ?? el.textContent ?? key;
    if (el.hasAttribute('data-i18n-html')) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    const spec = el.dataset.i18nAttr;
    if (!spec) return;
    spec.split(';').forEach((pair) => {
      const parts = pair.split(':');
      const attr = parts[0]?.trim();
      const k = parts[1]?.trim();
      if (!attr || !k) return;
      const v = t(k, locale);
      if (v) el.setAttribute(attr, v);
    });
  });

  document.documentElement.lang = locale;
  document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr';
}

export function setLocale(code: string): void {
  if (!dictAvailable(code)) code = DEFAULT_LOCALE;
  try {
    localStorage.setItem(LOCALE_KEY, code);
  } catch {
    /* ignore */
  }
  writeCookie(LOCALE_KEY, code);
  applyTranslations(code);
  syncSwitcher(code);
  window.dispatchEvent(new CustomEvent('calcutils:localechange', { detail: { locale: code } }));
}

/* ------------------------------------------------------------------ */
/* Theme                                                               */
/* ------------------------------------------------------------------ */
function applyTheme(theme: 'light' | 'dark'): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    /* ignore */
  }
  writeCookie(THEME_KEY, theme);
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    const isDark = theme === 'dark';
    btn.setAttribute('aria-pressed', String(isDark));
    const label = isDark ? t('theme.light') : t('theme.dark');
    const txt = btn.querySelector('.theme-toggle__label');
    if (txt && label) txt.textContent = label;
    const icon = btn.querySelector('.theme-toggle__icon');
    if (icon) icon.textContent = isDark ? '☀️' : '🌙';
  }
}

function toggleTheme(): void {
  const isDark = document.documentElement.classList.contains('dark');
  applyTheme(isDark ? 'light' : 'dark');
}

/* ------------------------------------------------------------------ */
/* Switcher UI sync                                                    */
/* ------------------------------------------------------------------ */
function syncSwitcher(locale: string): void {
  const meta = getLang(locale);
  const btn = document.getElementById('lang-button');
  if (btn) {
    const flag = btn.querySelector('.lang-button__flag');
    const name = btn.querySelector('.lang-button__name');
    if (flag) flag.textContent = meta.flag;
    if (name) name.textContent = meta.native;
  }
  document.querySelectorAll<HTMLElement>('[data-lang]').forEach((item) => {
    const active = item.dataset.lang === locale;
    item.toggleAttribute('aria-current', active);
    item.classList.toggle('is-active', active);
  });
}

/* ------------------------------------------------------------------ */
/* Boot                                                                */
/* ------------------------------------------------------------------ */
function boot(): void {
  // Initial locale (inline head script may have already set lang/dir).
  const initial = storedLocale();
  applyTranslations(initial);
  syncSwitcher(initial);

  // Theme: inline script may have set .dark already; ensure storage + button.
  const theme = storedTheme();
  if (theme) {
    applyTheme(theme);
  } else if (!document.documentElement.classList.contains('dark')) {
    applyTheme('light');
  }

  // Language menu toggling.
  const btn = document.getElementById('lang-button');
  const menu = document.getElementById('lang-menu');
  if (btn && menu) {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const open = menu.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });
    document.addEventListener('click', (e) => {
      if (!menu.contains(e.target as Node) && !btn.contains(e.target as Node)) {
        menu.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Language selection.
  document.querySelectorAll<HTMLElement>('[data-lang]').forEach((item) => {
    item.addEventListener('click', () => {
      const code = item.dataset.lang!;
      setLocale(code);
      menu?.classList.remove('is-open');
      btn?.setAttribute('aria-expanded', 'false');
    });
  });

  // Theme toggle.
  document.getElementById('theme-toggle')?.addEventListener('click', toggleTheme);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', boot);
} else {
  boot();
}

/* Public API for tool components that render dynamic output. */
declare global {
  interface Window {
    __i18n?: {
      t: (key: string, locale?: string) => string | null;
      getLocale: () => string;
      setLocale: (code: string) => void;
      isRTL: () => boolean;
      formatNumber: (value: number, opts?: Intl.NumberFormatOptions) => string;
    };
  }
}

window.__i18n = {
  t,
  getLocale: () => currentLocale,
  setLocale,
  isRTL: () => isRTL(currentLocale),
  formatNumber: (value: number, opts?: Intl.NumberFormatOptions) =>
    new Intl.NumberFormat(currentLocale, opts).format(value),
};
