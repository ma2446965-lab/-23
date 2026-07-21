/**
 * i18n language registry.
 *
 * The platform is static and client-rendered, so translations are applied in
 * the browser from bundled dictionaries. Adding a language is a two-step,
 * zero-build-config change:
 *   1. Add an entry to `LANGUAGES` below.
 *   2. Add its strings to `src/i18n/ui.ts` (UI shell) and, optionally,
 *      `src/i18n/tool-translations.ts` (tool titles / descriptions / content).
 *
 * `full: true` means the language also ships tool metadata + content
 * translations (not just the interface chrome).
 */

export type Dir = 'ltr' | 'rtl';

export interface LanguageMeta {
  /** BCP-47-ish code used as the dictionary key and <html lang>. */
  code: string;
  /** Endonym — the language name in its own script. */
  native: string;
  /** English name, shown as a secondary label. */
  english: string;
  /** Flag emoji for the switcher. */
  flag: string;
  dir: Dir;
  /** Ships tool-level translations (titles, descriptions, content). */
  full?: boolean;
}

export const DEFAULT_LOCALE = 'en';

export const LANGUAGES: LanguageMeta[] = [
  { code: 'en', native: 'English', english: 'English', flag: '🇬🇧', dir: 'ltr', full: true },
  { code: 'ar', native: 'العربية', english: 'Arabic', flag: '🇪🇬', dir: 'rtl', full: true },
  { code: 'es', native: 'Español', english: 'Spanish', flag: '🇪🇸', dir: 'ltr', full: true },
  { code: 'fr', native: 'Français', english: 'French', flag: '🇫🇷', dir: 'ltr', full: true },
  { code: 'de', native: 'Deutsch', english: 'German', flag: '🇩🇪', dir: 'ltr', full: true },
  { code: 'pt', native: 'Português', english: 'Portuguese', flag: '🇧🇷', dir: 'ltr', full: true },
  { code: 'hi', native: 'हिन्दी', english: 'Hindi', flag: '🇮🇳', dir: 'ltr' },
  { code: 'zh', native: '中文', english: 'Chinese', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ru', native: 'Русский', english: 'Russian', flag: '🇷🇺', dir: 'ltr' },
  { code: 'ja', native: '日本語', english: 'Japanese', flag: '🇯🇵', dir: 'ltr' },
  { code: 'it', native: 'Italiano', english: 'Italian', flag: '🇮🇹', dir: 'ltr' },
  { code: 'tr', native: 'Türkçe', english: 'Turkish', flag: '🇹🇷', dir: 'ltr' },
  { code: 'nl', native: 'Nederlands', english: 'Dutch', flag: '🇳🇱', dir: 'ltr' },
  { code: 'id', native: 'Bahasa Indonesia', english: 'Indonesian', flag: '🇮🇩', dir: 'ltr' },
  { code: 'vi', native: 'Tiếng Việt', english: 'Vietnamese', flag: '🇻🇳', dir: 'ltr' },
  { code: 'pl', native: 'Polski', english: 'Polish', flag: '🇵🇱', dir: 'ltr' },
  { code: 'ko', native: '한국어', english: 'Korean', flag: '🇰🇷', dir: 'ltr' },
  { code: 'fa', native: 'فارسی', english: 'Persian', flag: '🇮🇷', dir: 'rtl' },
];

const BY_CODE = new Map(LANGUAGES.map((l) => [l.code, l]));

export function getLang(code: string): LanguageMeta {
  return BY_CODE.get(code) ?? LANGUAGES[0]!;
}

export function isRTL(code: string): boolean {
  return getLang(code).dir === 'rtl';
}

export function getDir(code: string): Dir {
  return getLang(code).dir;
}

/** Inline-safe RTL check (used by the no-flash head script that can't import modules). */
export const RTL_CODES = ['ar', 'fa', 'he', 'ur', 'yi'];
