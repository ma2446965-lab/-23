# CalcUtils — Free Online Tools Platform

A static, SEO-first platform of free calculators, converters and generators.
Built with **Astro** + **TypeScript (strict)** + **Tailwind CSS v4**. All
computation runs **client-side**, so the site is fast, private and cheap to host.

> Target audience: United States, Canada, United Kingdom, Australia & Europe.
> Monetization: Google AdSense only. No database, no backend, no accounts.

---

## ✨ Features

- 34 production-ready tools across calculators, converters and generators (incl. Retirement, Investment, US Income Tax by state, Calorie, Pregnancy, Scientific, Date/Time, Currency, Markdown↔HTML, Base64, URL, Color, Timestamp, QR Code, Lorem Ipsum, UUID, Invoice PDF, Random Name/Number, Text Case, Word/Character Counter, Slug).
- 100% static output → deploys to any CDN/static host.
- Strong Core Web Vitals: zero JS by default, per-page code splitting (Astro Islands).
- Full technical SEO: canonical URLs, Open Graph, JSON-LD (`SoftwareApplication`,
  `FAQPage`, `BreadcrumbList`), `sitemap-index.xml`, `robots.txt`.
- Reserved, CLS-safe ad slots for Google AdSense.
- Accessibility-minded markup (labels, `aria-live`, skip link, semantic HTML).
- Strict TypeScript with unit tests for all calculation logic.

---

## 🧱 Tech Stack

| Layer | Choice |
|-------|--------|
| Framework | Astro 5 |
| Language | TypeScript (strict, `noUncheckedIndexedAccess`) |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Interactivity | Vanilla TS `<script>` islands (no UI framework runtime) |
| Content / registry | Typed `src/data/tools.ts` (config-driven) |
| Sitemap | `@astrojs/sitemap` |
| Tests | Vitest |
| Hosting | Cloudflare Pages (static) |

---

## 📁 Project Structure

```
src/
├─ layouts/        BaseLayout, ToolLayout, CategoryLayout
├─ components/
│  ├─ seo/         SeoHead (meta, OG, JSON-LD)
│  ├─ ads/         AdSlot (reserved, CLS-safe)
│  ├─ nav/         Header, Footer
│  ├─ tools/       The 10 interactive tool components
│  └─ Breadcrumbs, RelatedTools
├─ core/           Pure calculation logic (unit-tested)
├─ lib/            format, seo, dom helpers
├─ data/           tools.ts registry + types.ts
├─ consts.ts       Site constants & env
├─ styles/         global.css (Tailwind + design tokens)
└─ pages/          index, [category], [tool], legal, robots.txt.ts, 404
```

---

## 🚀 Getting Started

```bash
git clone <your-repo-url>
cd <repo>
npm install
npm run dev        # local dev server at http://localhost:4321
npm run build      # production build → dist/
npm run preview    # preview the build locally
npm test           # run unit tests for core logic
```

---

## ⚙️ Configuration

Copy `.env.example` to `.env` (or set in your host's dashboard):

```bash
cp .env.example .env
```

| Variable | Required | Description |
|----------|----------|-------------|
| `PUBLIC_SITE_URL` | Yes (build) | Absolute production URL, e.g. `https://www.calcutils.com` (no trailing slash). Used for canonical, sitemap & JSON-LD. |
| `PUBLIC_ADSENSE_CLIENT` | No | Your AdSense publisher ID, e.g. `ca-pub-1234567890`. When set, real ad slots render; otherwise placeholders show. |

> Never commit a real secret/token. These are **public** client vars by design.

---

## 🌐 Deploy to Cloudflare Pages

### Method A — Git integration (easiest, recommended)

1. Push this repo to GitHub/GitLab.
2. Cloudflare Dashboard → **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repository.
4. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** add `PUBLIC_SITE_URL` (= your domain).
5. Click **Save and Deploy**.
6. Every `git push` to `main` redeploys automatically.

### Method B — GitHub Actions (this repo includes `.github/workflows/deploy.yml`)

1. In Cloudflare: **My Profile → API Tokens → Create Token** (Edit Cloudflare Workers template).
2. Get your **Account ID** (Right sidebar → Workers & Pages).
3. In GitHub repo → **Settings → Secrets → Actions**, add:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
   - `PUBLIC_SITE_URL`
   - `PUBLIC_ADSENSE_CLIENT` (optional)
4. Push to `main` → the workflow builds, tests and deploys to a Pages project named `calcutils`.

---

## 🔗 Custom Domain & DNS

1. In Cloudflare Pages → your project → **Custom domains → Set up a domain**.
2. Add your domain (e.g. `www.calcutils.com`).
3. Cloudflare shows DNS records to add at your registrar:
   - **CNAME** `www` → `<project>.pages.dev`
   - Root `@` → use Cloudflare's recommended A/AAAA or CNAME flattening.
4. Enable **Always Use HTTPS** and **Automatic HTTPS Rewrites**.
5. Update `PUBLIC_SITE_URL` to the final domain and rebuild.

---

## 🔎 Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console).
2. **Add property → URL prefix** `https://www.calcutils.com`.
3. Verify ownership (HTML tag or DNS TXT — Cloudflare makes DNS easy).
4. After deploy, submit your sitemap: **Sitemaps → `sitemap-index.xml`**.
5. Monitor **Coverage** and **Core Web Vitals** reports; request indexing for key pages.

---

## 💰 Google AdSense

1. Build traffic & quality content first (unique tool descriptions + FAQs — already included).
2. Ensure legal pages exist: **Privacy Policy, Terms, About, Contact** (included).
3. Add your real `ads.txt` line in `public/ads.txt` (replace the placeholder).
4. In AdSense, get your **Publisher ID** (`ca-pub-...`).
5. Set `PUBLIC_ADSENSE_CLIENT` to that ID and redeploy → real ad slots appear.
   (For manual ad units, replace the placeholder `data-ad-slot` values in
   `src/components/ads/AdSlot.astro` / `src/consts.ts → AD_SLOTS` with the numeric
   slot IDs AdSense gives you.)
6. In AdSense → **Sites → Add site**, then wait for the review (days to a few weeks).
7. Keep ad density low (1–3 units/page) and never let ads mimic content or block navigation.

---

## ➕ Adding a New Tool (config-driven)

1. Add an entry to `src/data/tools.ts` (`tools` array) with `slug`, `category`,
   `title`, `description`, `keywords`, `faq`, `content` and `related` slugs.
2. Create `src/components/tools/MyTool.astro` with the form + a `<script>` that
   imports a pure function from `src/core/`.
3. Register the component in `src/pages/[category]/[tool].astro` (the `components` map).
4. (Optional) Add the pure logic + a Vitest test under `src/core/`.

No route files or duplication needed — the page is generated automatically.

---

## 🏎️ Performance & SEO Notes

- Zero JavaScript by default; only the active tool's small script loads (code-split).
- Ad placeholders reserve space → **no CLS**.
- System font stack (no web-font fetch) → faster LCP.
- All assets served via CDN with long cache headers.
- JSON-LD, canonical, OG and sitemap are generated for every page.

---

## 📄 License

MIT — free to use, modify and deploy.

---

## 🌐 Internationalization (i18n)

CalcUtils ships a **client-side, zero-backend i18n system** so the entire UI can
be switched to any of **18 world languages** from a single button in the header
(globe icon). State is persisted in `localStorage` + a cookie, and `<html
lang/dir>` flip instantly — including full **RTL** support for Arabic and
Persian.

### Coverage

| Scope | Languages |
| --- | --- |
| Full UI shell (nav, footer, buttons, headings, breadcrumbs, ad labels, theme/lang controls) | **18** — en, ar, es, fr, de, pt, hi, zh, ru, ja, it, tr, nl, id, vi, pl, ko, fa |
| Tool titles + descriptions | en, **ar**, es, fr, de, pt (6) |
| Full tool content (intro / how-to / FAQ) | **ar** (Arabic) — every one of the 34 tools |

Other languages translate the complete interface chrome and fall back to English
for tool-specific copy. This is intentional and fully graceful — no broken strings.

### How it works

1. Every translatable element opts in with `data-i18n="key"` (and a `data-en`
   English fallback). The language switcher writes `lang/dir` before first paint
   via an inline no-flash script, so there is no RTL flash.
2. `src/i18n/index.ts` scans the DOM, swaps text from bundled dictionaries, and
   re-applies on every locale change (it also dispatches a
   `calcutils:localechange` event tools can hook into).
3. Dictionaries live in `src/i18n/ui.ts` (shell) and
   `src/i18n/tool-translations.ts` (tool titles/descriptions/content).

### Adding a language

1. Add an entry to `LANGUAGES` in `src/i18n/config.ts`.
2. Translate the UI keys in `src/i18n/ui.ts` under that locale's code.
3. (Optional) Add tool titles/descriptions/content under the same code in
   `src/i18n/tool-translations.ts`. Missing keys fall back to English.

That's it — no build config, no backend, no route changes.

### Dark mode

A theme toggle (moon/sun) sits next to the language switcher. Preference is
saved in `localStorage` + cookie and respects `prefers-color-scheme` on first
visit. All colors are CSS variables, so light/dark is a single class flip.
