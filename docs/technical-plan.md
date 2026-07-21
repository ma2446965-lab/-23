# الخطة التقنية الكاملة — منصة أدوات SEO برمجية (Programmatic SEO)

> **الدور:** Software Architect / Full-Stack Engineer
> **الهدف:** منصة ويب تضم مئات الأدوات المجانية، Static تقريباً، دخلها من Google AdSense فقط، نمو عضوي عبر محركات البحث.
> **الجمهور:** الولايات المتحدة، كندا، المملكة المتحدة، أستراليا، أوروبا (كلمات مفتاحية CPC مرتفع).
> **تاريخ الإصدار:** 2026-07-21

---

## ٠. ملخص تنفيذي (Executive Summary)

المشروع عبارة عن **موقع أدوات (Tools/Utilities site)** بطبيعة محتوى **ثابت (Static)** بنسبة ~95%: كل العمليات الحسابية والتحويل تحدث على **Client Side**، ولا توجد قاعدة بيانات ولا backend معقّد. هذا النوع من المواقع هو المكان المثالي لاستخدام معمارية **Jamstack / SSG** مع **Islands Architecture**.

القرار المعماري المركزي: **Astro** كإطار أساسي + **Vanilla TS/Alpine.js** (أو Preact بسيط) للأجزاء التفاعلية فقط. السبب: أعلى درجات Lighthouse، أقل JavaScript مُسلَّم للمتصفح، تكلفة استضافة شبه صفرية، وسهولة إضافة مئات الصفحات عبر Content Collections.

> **تنبيه أمان مهم:** التوكن `ghp_...` الذي شاركته ظاهر في سجل Git المحلي فقط (داخل remote URL) وليس في محتوى الملفات. أنصح بشدة بـ **إلغاء هذا التوكن (revoke) وعمل واحد جديد** بعد رفع أول commit، لأن مشاركته في الدردشة تعني أنه لم يعد سرّياً.

---

## أولاً: اختيار الـ Tech Stack

### ١.١ جدول المقارنة

| المعيار | Astro | Next.js | Nuxt | SvelteKit | Remix |
|---|---|---|---|---|---|
| نمط التصيير الافتراضي | Static (SSG) بصفر JS | SSR/SSG/ISR (فيه React runtime) | SSR/SSG | SSG/SSR | SSR |
| حجم JS المُسلَّم | **أدنى ≈ 0KB افتراضياً** | متوسط–مرتفع (React) | متوسط | منخفض | متوسط |
| سرعة التحميل (CWV) | **ممتازة (Lighthouse 95–100)** | جيدة (90+) | جيدة | ممتازة | جيدة |
| ملاءمة SEO العضوي | **ممتازة** | ممتازة | ممتازة | ممتازة | جيدة |
| تكلفة الاستضافة | **شبه صفر (Static host/CDN)** | تتصاعد مع serverless | متوسطة | منخفضة | متوسطة |
| سهولة إضافة صفحات بمئات | **ممتاز (Content Collections)** | جيد | جيد | جيد | متوسط |
| دعم Markdown/MDX | **ممتاز مدمج** | يحتاج إعداد | جيد | جيد | محدود |
| وقت البناء (1000 صفحة) | **~18s** | ~52s | متوسط | سريع | متوسط |
| تعقيد المشروع | **منخفض** | مرتفع | متوسط | منخفض | متوسط |
| إمكانية استخدام React/Vue/Svelte | **نعم (متعدد الأطر)** | React فقط | Vue فقط | Svelte فقط | React فقط |
| الحاجة لـ backend | لا | أحياناً | أحياناً | لا | نعم (أغلب الحالات) |

*مصادر المقارنة: تحليلات أداء Astro مقابل Next.js لعام 2025–2026 [1](https://makersden.io/blog/nextjs-vs-astro-in-2025-which-framework-best-for-your-marketing-website) [2](https://eastondev.com/blog/en/posts/dev/20251202-astro-vs-nextjs-static-site/) [3](https://senorit.de/en/blog/astro-vs-nextjs-2025) [4](https://www.codebrand.us/blog/react-nextjs-astro-comparison-2025/).*

### ١.٢ القرار: **Astro**

**لماذا Astro وليس غيره في حالتنا:**

1. **الموقع Static بالكامل تقريباً** — لا توجد مصادقة، لا API ديناميكي، لا قاعدة بيانات. Astro يصيّر كل صفحة كـ HTML ثابت بصفر JavaScript افتراضياً [1](https://makersden.io/blog/nextjs-vs-astro-in-2025-which-framework-best-for-your-marketing-website). هذا يضمن أعلى درجات CWV وأفضل SEO.
2. **الأداء = تصنيف**: Google يستخدم سرعة الصفحة كإشارة تصنيف. مواقع المحتوى مع Astro أسرع بـ 2–3× من Next.js (40% أسرع، 90% أقل JavaScript) [2](https://eastondev.com/blog/en/posts/dev/20251202-astro-vs-nextjs-static-site/) [3](https://senorit.de/en/blog/astro-vs-nextjs-2025).
3. **قابلية التوسع لإضافة مئات الأدوات**: نظام `Content Collections` في Astro يتيح تعريف أداة جديدة بملف إعداد واحد + template موحد، مع type-safety وتوليد automatic routing.
4. **تكلفة الاستضافة شبه صفرية**: يمكن النشر على Cloudflare Pages / Netlify / GitHub Pages (Static) بدون خادم.

**لماذا ليس Next.js (رغم قوته):** Next.js ممتاز لتطبيقات ديناميكية (SaaS، e-commerce، auth)، لكنه يحمّل React runtime حتى للصفحات الثابتة [3](https://senorit.de/en/blog/astro-vs-nextjs-2025)، وهذا يضر بـ CWV ويزيد التعقيد والتكلفة دون مبرر لموقع أدوات static.

**لماذا ليس SvelteKit:** قريب جداً من Astro في الأداء، لكن Astro يتفوق في تجربة المحتوى الثابت + Markdown + Content Collections + الحياد إزاء الأطر (نقدر نخلط React/Vue/Svelte لاحقاً لو احتجنا).

**البديل المقترح إن تغيّرت المتطلبات:** لو قررت لاحقاً إضافة features ديناميكية حقيقية (حسابات تعتمد server، تتبّع مستخدمين، A/B testing) → انتقل لـ Next.js أو استخدم Astro + SSR adapter مع دوال serverless صغيرة (Hybrid).

### ١.٣ الـ Stack النهائي

| الطبقة | التقنية | السبب |
|---|---|---|
| Framework | **Astro 5.x** | SSG، Islands، Content Collections |
| لغة | **TypeScript** | type-safety، صيانة أفضل |
| تفاعل Client | **Vanilla TS + Alpine.js** (أو Preact islands عند الحاجة) | أقل JS، سهل |
| Styling | **Tailwind CSS** (مع CSS متغيّرات + critical CSS) | سرعة، Mobile-first، قابل للصيانة |
| QR / PDF | **qrcode** (client)، **jspdf** (client) | مكتبات خفيفة تعمل بالكامل في المتصفح |
| JSON/CSV | كود Vanilla (بدون مكتبة) | تجنّب الاعتماد على خدمات خارجية |
| Sitemap/Robot | `@astrojs/sitemap` | توليد تلقائي |
| Hosting | **Cloudflare Pages** (أو Netlify) | CDN عالمي، SSL مجاني، تكلفة صفر |
| CI/CD | GitHub Actions | بناء وطرح تلقائي عند push |
| Analytics | **Privacy-friendly** (Plausible self-host أو Cloudflare Web Analytics) | لا يُبطئ الصفحة، يحترم الخصوصية |

> **ملاحظة AdSense:** لا تستخدم Google Analytics الكلاسيكي بكثافة إن أثر على الأداء؛ استخدم GA4 بشكل خفيف أو بديل خفيف. الأداء له الأولوية.

---

## ثانياً: Architecture (البنية المعمارية)

### ٢.١ هيكل المجلدات (Folder Structure)

```
/
├─ src/
│  ├─ layouts/
│  │  ├─ BaseLayout.astro        # <html>, <head>, meta, OG, JSON-LD, breadcrumbs
│  │  ├─ ToolLayout.astro        # قالب الأداة (header, input, output, ads slots, related)
│  │  └─ CategoryLayout.astro    # قالب صفحة التصنيف
│  ├─ components/
│  │  ├─ ui/                     # أزرار، حقول، بطاقات، tabs
│  │  ├─ seo/                    # Head.astro, Breadcrumbs.astro, JsonLd.astro
│  │  ├─ ads/                    # AdSlot.astro (يحمّل AdSense بشكل غير مانع)
│  │  ├─ tool/                   # ToolHeader, ToolResult, CopyButton
│  │  └─ nav/                    # Header, Footer, CategoryNav, RelatedTools
│  ├─ content/
│  │  ├─ tools/                  # ملف إعداد لكل أداة (tool-name.mdx أو .yaml)
│  │  ├─ categories/             # تصنيفات (calculators, converters, generators)
│  │  └─ config.ts               # schema تعريف الـ collection
│  ├─ tools/                     # منطق الأدوات (pure TS functions)
│  │  ├─ calculators/            # mortgage.ts, loan.ts, bmi.ts ...
│  │  ├─ converters/             # unit.ts, json-csv.ts, base64.ts ...
│  │  └─ generators/             # password.ts, qr.ts, uuid.ts ...
│  ├─ pages/
│  │  ├─ index.astro             # الصفحة الرئيسية
│  │  ├─ [category]/index.astro  # صفحة التصنيف (dynamic route)
│  │  ├─ [category]/[tool]/      # صفحة الأداة (dynamic route) ← التوجيه التلقائي
│  │  ├─ sitemap-index.astro
│  │  ├─ robots.txt.ts
│  │  └─ 404.astro
│  ├─ utils/                     # formatCurrency, formatNumber, validation, i18n keys
│  ├─ styles/                    # global.css, tokens.css (design system)
│  └─ consts.ts                  # SITE_URL, SITE_NAME, NAV
├─ public/
│  ├─ favicon.svg, og-default.png, manifest.webmanifest
│  └─ ads.txt                    # مهم لـ AdSense (authorized sellers)
├─ scripts/                      # أدوات توليد (scaffold tool generator)
├─ astro.config.mjs
├─ tailwind.config.ts
├─ tsconfig.json
├─ package.json
└─ README.md
```

### ٢.٢ استراتيجية التوجيه (Routing Strategy)

- **Static + File-based routing** عبر Astro: `/[category]/[tool]/` ديناميكي يقرأ من Content Collections وقت البناء (getStaticPaths) → كل أداة لها URL مستقل ومُصيَّر مسبقاً (SSG).
- **الفوائد:** صفر JavaScript للتوجيه، فهرسة كاملة من أول يوم، سرعة قصوى.
- **مثال URLs:**
  - `/calculators/mortgage-calculator/`
  - `/converters/json-to-csv/`
  - `/generators/password-generator/`
- **اللاحقة `/`** في النهاية + `trailingSlash: 'always'` لاتساق canonical.
- **التصنيفات صفحات static** تُولَّد من البيانات، مع pagination عند تجاوز N أداة.

### ٢.٣ المكونات (Components) و Separation of Concerns

- **Pure logic** في `src/tools/*` (دوال TS نقية، testable، بدون DOM) → سهولة الصيانة + unit testing.
- **UI** في `src/components` (Astro components لا تُنتج JS إلا عند الحاجة).
- **التفاعل** فقط في الجزء المطلوب: مثلاً نتيجة الحاسبة تتفاعل عبر Alpine.js أو Preact island صغير (`client:visible`) → "Islands" تبقى JS محصورة.

### ٢.٤ الأدوات المشتركة (Shared Utilities)

- `format.ts`: تنسيق عملة/أرقام حسب locale (en-US, en-GB, en-CA, en-AU) — مهم لـ Tax Calculator حسب الولاية.
- `validation.ts`: تحقق من المدخلات (منع NaN، قيم سالبة).
- `seo.ts`: توليد title/description/canonical/OG برمجياً.
- `i18n.ts`: مفاتيح نصوص جاهزة للترجمة مستقبلاً (نبدأ en فقط).

### ٢.٥ القوالب (Layouts & Templates)

- **BaseLayout**: كل ما في `<head>` (meta, canonical, OG, Twitter, JSON-LD، Preconnect، font preload).
- **ToolLayout**: الهيكل الموحّد لأي أداة (h1، وصف، النموذج، النتيجة، فتحات الإعلانات، أدوات ذات صلة، breadcrumbs، FAQ).
- **CategoryLayout**: شبكة بطاقات الأدوات + وصف SEO + روابط داخلية.

### ٢.٦ الأصول (Assets) والتصميم

- **Design System** عبر CSS variables (tokens) في `tokens.css`: ألوان، spacing، radius، typography → اتساق بصري + صيانة سهلة.
- **Tailwind** للأدوات المساعدة مع **Purge** تلقائي → أصغر CSS.
- صور SVG (خفيفة، قابلة للتحجيم) بدلاً من PNG حيث يمكن.
- خط واحد فقط (مثلاً Inter) مع `font-display: swap` و subset.

### ٢.٧ الإعدادات (Configuration)

- `astro.config.mjs`: site URL، sitemap integration، trailingSlash، image service.
- متغيرات البيئة عبر `.env` (SITE_URL) — **لا تضع التوكن في الكود**.
- `content.config.ts`: تعريف schema للأدوات (zod) لفرض structure موحّد.

---

## ثالثاً: استراتيجية إضافة الأدوات (Tool Addition Strategy)

**الهدف:** إضافة أداة جديدة خلال دقائق بأقل تكرار كود.

### ٣.١ نظام Config-Driven

كل أداة = **ملف إعداد واحد** في `src/content/tools/` + (اختيارياً) ملف منطق في `src/tools/`.

**مثال:** `src/content/tools/mortgage-calculator.yaml`
```yaml
slug: mortgage-calculator
category: calculators
title: "Mortgage Calculator"
description: "Free mortgage calculator with amortization schedule. Estimate monthly payments, interest, and total cost."
keywords: ["mortgage calculator", "home loan calculator", "monthly payment"]
icon: "home"
faq:
  - q: "How is mortgage interest calculated?"
    a: "..."
related: ["loan-calculator", "compound-interest-calculator"]
component: "MortgageCalculator"   # اسم مكوّن الواجهة (إن تفاعلي)
```

### ٣.٢ التوجيه التلقائي (Automatic Routing)

صفحة `[tool].astro` تستخدم `getStaticPaths()` لقراءة كل أدوات الـ collection وتوليد صفحة لكل `slug` ضمن `category` → لا حاجة لإنشاء ملف route لكل أداة.

### ٣.٣ سكربت توليد (Scaffold Generator)

أداة CLI بسيطة `scripts/new-tool.mjs` تنشئ:
1. ملف الإعداد في `content/tools/`.
2. ملف المنطق في `tools/` (قالب جاهز).
3. تضيف الروابط تلقائياً في التنقّل.

```bash
node scripts/new-tool.mjs --category calculators --slug bmi-calculator --title "BMI Calculator"
```

### ٣.٤ مثال منطق نقي (Pure Function)

`src/tools/calculators/bmi.ts`
```ts
export interface BmiInput { weightKg: number; heightCm: number; }
export interface BmiResult { bmi: number; category: string; }
export function calcBmi({ weightKg, heightCm }: BmiInput): BmiResult {
  const h = heightCm / 100;
  const bmi = weightKg / (h * h);
  const category = bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal" : bmi < 30 ? "Overweight" : "Obese";
  return { bmi: Math.round(bmi * 10) / 10, category };
}
```
هذه الدالة **testable** عبر Vitest ولا تعتمد على DOM → جودة + صيانة.

---

## رابعاً: SEO Architecture

### ٤.١ On-Page SEO

| العنصر | التنفيذ |
|---|---|
| **URL Structure** | `/category/tool-name/` قصير، وصفي، بكلمات مفتاحية، kebab-case |
| **Title Tag** | `<Tool Name> | Free Online Tool — SiteName` (≤ 60 حرف) |
| **Meta Description** | وصفي بكلمة مفتاحية، ≤ 155 حرف، يولّد من الإعداد |
| **Canonical** | `<link rel="canonical">` يشير لنسخة www/non-www الثابتة |
| **Open Graph** | OG title/description/image/type=website لكل أداة |
| **Twitter Card** | summary_large_image |
| **JSON-LD** | `SoftwareApplication` + `FAQPage` (للـ rich results) [مهم جداً للأدوات] |
| **Sitemap** | توليد تلقائي عبر `@astrojs/sitemap` + index |
| **Robots.txt** | يسمح بكل شيء + يشير للـ sitemap + `ads.txt` |
| **Breadcrumbs** | هيكلية `BreadcrumbList` JSON-LD + روابط مرئية |
| **Internal Linking** | "Related Tools" + روابط التصنيف + footer nav |
| **Category Pages** | صفحة لكل تصنيف مع محتوى SEO أصيل (مقدمة + روابط) |
| **Related Tools** | 4–6 أدوات ذات صلة أسفل كل أداة (روابط داخلية قوية) |
| **Pagination** | `?page=` أو `/page/2/` عند كثرة الأدوات في التصنيف |
| **Heading Hierarchy** | H1 واحد = اسم الأداة، H2 للأقسام/FAQ |

**نصيحة Programmatic SEO:** أضف لكل أداة **محتوى أصيل قصير** (مقدمة + كيف تعمل + FAQ) وليس فقط الواجهة — Google يفضّل الصفحات ذات القيمة لا الـ "thin content". هذا حاسم لقبول AdSense أيضاً.

### ٤.٢ Off-Page SEO (بناء DA عضوياً وآمناً)

الاستراتيجية يجب أن تكون **white-hat** لتجنّب عقوبات Google:

1. **محتوى أصيل مميز (Topical Authority):** تغطية شاملة لكل تصنيف تبني سلطة الموقع موضوعياً.
2. **Digital PR عضوي:** نشر أدوات مفيدة في مجتمعات (Reddit ذات الصلة، Hacker News، Product Hunt) — روابط طبيعية.
3. **Guest Posts** على مدونات متخصصة (finance للحاسبات، dev للـ converters/generators) بروابط طبيعية.
4. **Resource Pages / Link Roundups:** التواصل مع أصحاب "best free tools" lists.
5. **HARO / featured snippets:** الإجابة على استفسارات الصحفيين.
6. **Social Sharing:** ملفات عامة على GitHub للمشروع (يضيف روابط + مصداقية).
7. **الصبر:** النمو العضوي يأخذ 6–12+ شهر؛ لا تشترِ backlinks (يضر بالـ rankings وAdSense).
8. **المراقبة:** Google Search Console لمراقبة الـ impressions/clicks/backlinks عبر Links report.

> القاعدة الذهبية: **روابط قليلة عالية الجودة أفضل من آلاف الروابط الرخيصة**. أي تكتيك ينتهك إرشادات Google (PBN، paid links مكشوفة، link farms) يهدّد الموقع بأكمله.

---

## خامساً: Monetization (استراتيجية الربح من AdSense)

### ٥.١ أماكن ونسب الإعلانات (بدون الإضرار بتجربة المستخدم)

| الموضع | النوع | ملاحظات |
|---|---|---|
| أعلى أسفل الـ Header (بعد الـ h1 بقليل) | Display/Rectangle | أعلى CTR، لكن ليس لاصق (non-sticky) |
| أسفل النتيجة/الأداة | In-Article / Rectangle | يظهر بعد استخدام الأداة |
| الشريط الجانبي (Desktop فقط) | Sticky Rectangle | مخفي على Mobile |
| بين "Related Tools" | Native/In-Feed | انسيابي |
| **الإجمالي** | **2–3 وحدات كحد أقصى لكل صفحة** | لا تبالغ |

- **التحميل:** إعلانات AdSense تُحمَّل بـ `async` ولا تمنع العرض (non-render-blocking). استخدم `client:visible` أو lazy mount لفتحة الإعلان السفلية.
- **لا إعلانات لاصقة (sticky interstitials)** ولا pop-ups — تضر بـ CWV وخرق Better Ads Standard.

### ٥.٢ سياسات وقواعد AdSense لمواقع الأدوات (للانتباه قبل التقديم)

مواقع الأدوات (Tools/Utilities) **مسموحة** في AdSense طالما ذات قيمة حقيقية، لكن يجب الانتباه [1](https://developers.google.com/adsense/platforms/transparent/approvals) [2](https://allinallseo.com/adsense-requirements-for-website-a-complete-guide-for-202-):

- **صفحات قانونية إلزامية:** Privacy Policy، About، Contact، Terms — ويجب أن تكون سهلة الوصول [2](https://allinallseo.com/adsense-requirements-for-website-a-complete-guide-for-2025/).
- **HTTPS إلزامي** [3](https://monetizationguy.com/articles/google-adsense-approval-guide-requirements-process-and-avoiding-rejections).
- **محتوى أصيل وكافٍ:** Google يفضّل مواقع ذات محتوى قيم (بعض المصادر يقترح ~20–25 صفحة/مقال جوهري كحد أدنى عملي للقبول) [3](https://monetizationguy.com/articles/google-adsense-approval-guide-requirements-process-and-avoiding-rejections). للأدوات: كل أداة يجب أن تحمل وصفاً + FAQ أصيلاً (ليس thin content).
- **لا يوجد حدّ أدنى رسمي للزيارات** للقبول، لكن 50–100 زائر/يوم يسرّع المراجعة [2](https://allinallseo.com/adsense-requirements-for-website-a-complete-guide-for-2025/) [4](https://educareerguides.com/adsense-approval-guide-2025-the-ultimate-blueprint-for-publishers/).
- **موقع بعمر 6 أشهر** يُفضَّل غالباً (خاصة لبعض المناطق) لكنه ليس مطلقاً [2](https://allinallseo.com/adsense-requirements-for-website-a-complete-guide-for-2025/).
- **الإعلانات يجب ألا تحاكي المحتوى** ولا تغطي عناصر التنقّل الحرجة [2](https://allinallseo.com/adsense-requirements-for-website-a-complete-guide-for-2025/).
- **ملف `ads.txt`** على الجذر ضروري لتفويض البائعين (authorized sellers) وإيقاف الاحتيال.
- **المراجعة** تستغرق أياماً إلى 2–4 أسابيع [1](https://developers.google.com/adsense/platforms/transparent/approvals). يظهر الكود (Auto ads في `<head>` أو وحدة إعلان في `<body>`) قبل المراجعة.

### ٥.٣ التوازن بين الإعلانات و SEO

- ابدأ بـ **إعلان واحد فقط** أول 3 أشهر لبناء سلطة الموقع و CJM جيدة.
- زِد تدريجياً إلى 2–3 بعد استقرار الزيارات.
- راقب **Core Web Vitals** بعد كل إضافة إعلان — إن هبطت الدرجات ارجع خطوة.
- المحتوى (SEO) هو المحرّك؛ الإعلانات راكب عليه. لا تسمح للإعلانات بأن تطغى.

---

## سادساً: Performance (الوصول لـ 90–100 في Lighthouse)

### ٦.١ عتبات Core Web Vitals (2025–2026) [1](https://bsscommerce.com/services/blog/core-web-vitals-explained) [2](https://seoscore.tools/blog/core-web-vitals/) [3](https://hostingguider.com/blog/core-web-vitals/)

| المقياس | Good | Needs Improvement | Poor |
|---|---|---|---|
| **LCP** (أكبر عنصر مرئي) | ≤ 2.5s | 2.5–4.0s | > 4.0s |
| **INP** (استجابة التفاعل — حلّ محل FID مارس 2024) | ≤ 200ms | 200–500ms | > 500ms |
| **CLS** (ثبات التخطيط) | ≤ 0.1 | 0.1–0.25 | > 0.25 |
| **TTFB** (مساعد) | ≤ 800ms | 800–1800ms | > 1800ms |

> يُقاس عند **الـ 75th percentile** لزيارات حقيقية (CrUX). CWV إشارة "tiebreaker" بين صفحات متشابهة [2](https://seoscore.tools/blog/core-web-vitals/).

### ٦.٢ التقنيات

- **تقليل JavaScript:** Astro بصفر JS افتراضياً + Islands فقط للتفاعل.
- **Code Splitting & Tree Shaking:** Astro/يقوم بذلك تلقائياً؛ استورد المكتبات (qrcode, jspdf) بشكل dynamic `import()` عند الحاجة فقط.
- **Lazy Loading:** `loading="lazy"` للصور؛ `client:visible` للجزر التفاعلية؛ تحميل إعلانات الأسفل عند الظهور.
- **Image Optimization:** SVG حيث يمكن؛ صور مضغوطة WebP/AVIF بحجم صحيح + `width/height` لمنع CLS.
- **Font Optimization:** خط واحد + `font-display: swap` + `preload` + `subset`.
- **Critical CSS:** Astro inline للـ CSS الحرج، وتأجيل المتبقي.
- **Caching:** رؤوس `Cache-Control` طويلة للأصول الثابتة عبر CDN (Cloudflare).
- **Preconnect/Preload:** `preconnect` لـ domains الخارجية (AdSense، analytics).
- **No Layout Shift:** احجز أبعاد كل عنصر (صور، إعلانات، iframes) مسبقاً.
- **Edge/CDN:** نشر Static على Cloudflare Pages → أقرب نقطة للمستخدم (يحسّن TTFB وLCP).

---

## سابعاً: استراتيجية التوسع (Scaling)

| الحجم | الإجراء | هل نعيد الهيكلة؟ |
|---|---|---|
| **10 أدوات** | الهيكل الأساسي + Template موحّد | لا |
| **100 أداة** | Content Collections + automatic routing تتولّد تلقائياً | لا |
| **500 أداة** | تقسيم sitemap لـ **sitemap index** (متعدد الملفات)؛ pagination للتصنيفات؛ مراجعة أداء build | لا (ربما زيادة موارد البناء) |
| **1000+ أداة** | **Incremental Build** (أدوات مثل `astro build` مع caching أو Netlify/Astro incremental)؛ فصل الأدوات في مجموعات content؛ CDN لتقديم static | لا — البنية مصمّمة لذلك من البداية |

**المفتاح:** لأن كل شيء **ملف إعداد + منطق نقي + template**، إضافة 900 أداة = 900 ملف إعداد فقط، بدون تكرار UI. البنية لا تتغيّر.

---

## ثامناً: خطة التنفيذ (المراحل)

**المرحلة 0 — الإعداد (أسبوع 1)**
- تهيئة Astro + Tailwind + TypeScript + sitemap.
- BaseLayout/ToolLayout/CategoryLayout.
- نظام Content Collections + schema.
- إعداد Cloudflare Pages + GitHub Actions CI.

**المرحلة 1 — النظام الأساسي (أسبوع 1–2)**
- مكوّنات UI المشتركة (input, button, card, tabs, ads slot).
- أدوات مشتركة (format, validation, seo, i18n).
- سكربت `new-tool` scaffold.

**المرحلة 2 — أول 10 أدوات (أسبوع 2–4)**
- اختر أعلى CPC: Mortgage, Loan, BMI, Percentage, JSON↔CSV, Base64, Password, QR, UUID, Word Counter.
- كل أداة: منطق نقي + إعداد + محتوى SEO + FAQ + JSON-LD.

**المرحلة 3 — تحسين SEO (أسبوع 4–5)**
- sitemap، robots.txt، ads.txt، canonical، OG، breadcrumbs، internal linking.
- صفحات About/Privacy/Contact/Terms.
- إرسال sitemap لـ GSC.

**المرحلة 4 — تحسين الأداء (أسبوع 5)**
- قياس Lighthouse على كل أداة؛ تحسين LCP/INP/CLS؛ lazy ads؛ font subset.

**المرحلة 5 — تجهيز الإطلاق (أسبوع 6)**
- ربط النطاق + SSL؛ تحقق GSC/Bing; إعلان واحد AdSense بعد القبول.

**المرحلة 6 — ما بعد الإطلاق (مستمر)**
- إضافة 5–10 أدوات أسبوعياً عبر السكربت.
- بناء backlinks عضوياً (Digital PR، communities، guest posts).
- مراقبة GSC + Lighthouse CI + AdSense RPM.

---

## تاسعاً: Best Practices (أفضل الممارسات)

**Architecture & Scalability**
- فصل المنطق (pure functions) عن الواجهة → testable + reusable.
- Config-driven إضافة الأدوات → zero duplication.
- Static-first؛ لا backend/DB إلا عند الضرورة القصوى.
- استخدم CDN edge للتقديم.

**Maintainability & Clean Code**
- TypeScript + Zod schemas لفرض structure.
- هیکل مجلدات واضح؛ اصطلاح تسمية موحّد.
- Unit tests (Vitest) للدوال الحسابية (خاصة المالية/الضريبية).
- README واضح + التزامات Git دلالية (conventional commits).

**SEO**
- كل أداة URL مستقل + محتوى أصيل + FAQ + JSON-LD.
- canonical/sitemap/robots صحيحة؛ internal linking قوي.
- لا thin content؛ لا cloaking؛ لا keyword stuffing.
- مراقبة GSC أسبوعياً.

**Accessibility (a11y)**
- semantic HTML؛ تباين ألوان كافٍ (WCAG AA)؛ labels لكل حقل؛ تنقّل بلوحة المفاتيح؛ `aria-live` للنتائج.

**Security**
- **لا تُعرض التوكنات/الأسرار في الكود أو Git** (استخدم GitHub Secrets للـ CI فقط).
- Validate كل مدخلات المستخدم على Client (منع XSS عبر sanitization عند عرض المخرجات).
- `Content-Security-Policy` header عبر Cloudflare.
- تحديث التبعيات دورياً (npm audit).
- لا تقبل إدخال URL/HTML خام من المستخدم وعرضه دون escape.

**Performance**
- صفر JS افتراضياً؛ Islands عند الحاجة؛ lazy/dynamic imports؛ font/image optimization؛ CDN caching.

---

## ملحق: القرارات النهائية

| القرار | الاختيار |
|---|---|
| Framework | Astro |
| Language | TypeScript |
| Styling | Tailwind + Design Tokens |
| Interactivity | Alpine.js / Preact islands (client:visible) |
| Routing | Static file-based + Content Collections |
| Hosting | Cloudflare Pages (Static) |
| CI/CD | GitHub Actions |
| Analytics | Privacy-friendly (Plausible/Cloudflare WA) |
| Ads | Google AdSense (1 → 3 وحدات تدريجياً) |
| Secrets | GitHub Secrets فقط، لا في Git |

> **التالي:** بعد مراجعتك لهذه الخطة، أستطيع البدء فوراً بتنفيذ **المرحلة 0 + 1 + 2** ورفعها للمستودع. أخبرني إن كان عندك تعديل على الـ Stack أو التصنيفات قبل أن أبدأ الكود.
