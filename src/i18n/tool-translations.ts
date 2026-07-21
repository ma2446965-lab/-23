/**
 * Tool-level translations.
 *
 * Key scheme used by the renderer + resolver in `index.ts`:
 *   tool.<slug>.title
 *   tool.<slug>.description
 *   tool.<slug>.intro
 *   tool.<slug>.howTo.<i>
 *   tool.<slug>.example
 *   tool.<slug>.assumptions.<i>
 *   tool.<slug>.faq.<i>.q / tool.<slug>.faq.<i>.a
 *
 * Only the keys we actually ship are present. Missing keys fall back to the
 * English `data-en` value rendered into the DOM, so partial coverage is safe.
 *
 * Coverage:
 *   - Titles:   ar, es, fr, de, pt  (cards + headings localize in these 5)
 *   - Desc:     ar                  (full Arabic experience)
 *   - Content:  ar                  (intro / how-to / FAQ fully Arabic)
 *   - Others:   UI shell only; tool copy falls back to English.
 */

export const TOOL_META: Record<string, Record<string, string>> = {
  ar: {
    'tool.mortgage-calculator.title': 'حاسبة الرهن العقاري',
    'tool.mortgage-calculator.description':
      'حاسبة رهن عقاري مجانية تعرض القسط الشهري والضرائب والتأمين وجدول الاستهلاك الكامل. قدّر تكلفة قرض منزلك في ثوانٍ.',
    'tool.loan-calculator.title': 'حاسبة القروض',
    'tool.loan-calculator.description':
      'احسب أقساط القرض وإجمالي الفائدة ومدة السداد لأي قرض شخصي أو للسيارة أو للطلاب مع دفعات إضافية اختيارية.',
    'tool.compound-interest-calculator.title': 'حاسبة الفائدة المركبة',
    'tool.compound-interest-calculator.description':
      'توقّع القيمة المستقبلية للمدخرات والاستثمارات مع مساهمات دورية ومعدلات وتواتر تركيب مخصص.',
    'tool.bmi-calculator.title': 'حاسبة مؤشر كتلة الجسم',
    'tool.bmi-calculator.description':
      'احسب مؤشر كتلة جسمك (BMI) بالوحدات المترية أو الإمبراطورية وشاهد نطاق وزنك الصحي.',
    'tool.age-calculator.title': 'حاسبة العمر',
    'tool.age-calculator.description':
      'احسب عمرك الدقيق بالسنوات والأشهر والأيام، مع إجمالي الأيام التي عشتها والأيام حتى عيد ميلادك القادم.',
    'tool.percentage-calculator.title': 'حاسبة النسبة المئوية',
    'tool.percentage-calculator.description':
      'حلّ مشاكل النسب المئوية فورًا: كم قيمة X% من Y، وX ما نسبة Y%، ونسبة الزيادة أو النقصان.',
    'tool.retirement-calculator.title': 'حاسبة التقاعد',
    'tool.retirement-calculator.description':
      'قدّر المبلغ الذي تحتاجه للتقاعد ورأس مالك المتوقع باستخدام مدخراتك الحالية والمساهمات الشهرية والعوائد المتوقعة.',
    'tool.investment-calculator.title': 'حاسبة الاستثمار',
    'tool.investment-calculator.description':
      'توقّع القيمة المستقبلية لاستثمار مقطوع مع مساهمات شهرية اختيارية ومعدل عائد مختار.',
    'tool.tax-calculator.title': 'حاسبة ضريبة الدخل',
    'tool.tax-calculator.description':
      'قدّر ضريبة الدخل الفيدرالية والولائية الأمريكية لدافع ضرائب أعزب عبر عدة ولايات باستخدام شرائح مبسّطة.',
    'tool.calorie-calculator.title': 'حاسبة السعرات الحرارية',
    'tool.calorie-calculator.description':
      'احسب معدل الأيض الأساسي (BMR) والسعرات اليومية (TDEE) للحفاظ على وزنك أو إنقاصه أو زيادته باستخدام معادلة Mifflin–St Jeor.',
    'tool.pregnancy-calculator.title': 'حاسبة الحمل',
    'tool.pregnancy-calculator.description':
      'احسب موعد الولادة المتوقع وتاريخ الحمل والعمر الحملي من تاريخ آخر دورة شهرية.',
    'tool.scientific-calculator.title': 'الآلة الحاسبة العلمية',
    'tool.scientific-calculator.description':
      'آلة حاسبة علمية مجانية تعمل في متصفحك مع الدوال المثلثية واللوغاريتمات والأسس والجذور والثوابت (π، e).',
    'tool.date-calculator.title': 'حاسبة التاريخ',
    'tool.date-calculator.description':
      'احسب عدد الأيام بين تاريخين، أو أضف وأطرح أيامًا من أي تاريخ.',
    'tool.time-calculator.title': 'حاسبة الوقت',
    'tool.time-calculator.description':
      'جمع أو طرح المدد الزمنية (ساعة:دقيقة:ثانية) واعثر على المدة بين وقتين.',
    'tool.unit-converter.title': 'محوّل الوحدات',
    'tool.unit-converter.description':
      'حوّل الطول والوزن والمساحة والحجم والسرعة بين الوحدات المترية والإمبراطورية فورًا.',
    'tool.temperature-converter.title': 'محوّل الحرارة',
    'tool.temperature-converter.description':
      'حوّل درجات الحرارة بين مئوية وفهرنهايت وكلفن فورًا مع زر للتبديل.',
    'tool.json-csv-converter.title': 'محوّل JSON ↔ CSV',
    'tool.json-csv-converter.description':
      'حوّل JSON إلى CSV والعكس بالكامل داخل متصفحك. دون رفع ملفات، ودون مغادرة جهازك للبيانات.',
    'tool.currency-converter.title': 'محوّل العملات',
    'tool.currency-converter.description':
      'حوّل بين عملات العالم بحاسبة بسيطة. أسعار ثابتة تعليمية — ليست بيانات سوق حية.',
    'tool.markdown-converter.title': 'محوّل Markdown ↔ HTML',
    'tool.markdown-converter.description':
      'حوّل Markdown إلى HTML والعكس في متصفحك بالكامل. دون رفع ملفات.',
    'tool.base64-converter.title': 'مشفّر/مشفّر عكسي Base64',
    'tool.base64-converter.description':
      'شفّر النص إلى Base64 وفك تشفيره مرة أخرى مع دعم كامل لـ UTF-8 في متصفحك.',
    'tool.url-converter.title': 'مشفّر/مشفّر عكسي URL',
    'tool.url-converter.description':
      'شفّر النص والروابط لاستخدامها بأمان، وفك تشفير النصوص المرمّزة في الروابط.',
    'tool.color-converter.title': 'محوّل الألوان',
    'tool.color-converter.description':
      'حوّل الألوان بين HEX وRGB وHSL مع معاينة حية. مثالي للتصميم وCSS.',
    'tool.timestamp-converter.title': 'محوّل الطوابع الزمنية',
    'tool.timestamp-converter.description':
      'حوّل الطوابع الزمنية ليونكس (ثوانٍ أو ملي ثانية) إلى تواريخ والتواريخ إلى طوابع.',
    'tool.password-generator.title': 'مولّد كلمات المرور',
    'tool.password-generator.description':
      'أنشئ كلمات مرور عشوائية قوية في متصفحك بطول ومجموعات أحرف قابلة للتعديل. دون تتبّع أو تخزين.',
    'tool.qr-code-generator.title': 'مولّد رمز الاستجابة السريعة (QR)',
    'tool.qr-code-generator.description':
      'أنشئ رمز QR قابلًا للتنزيل لأي نص أو رابط داخل متصفحك. دون تتبّع.',
    'tool.lorem-ipsum-generator.title': 'مولّد نص Lorem Ipsum',
    'tool.lorem-ipsum-generator.description':
      'أنشئ نص Lorem Ipsum كاملًا بعدد فقرات وجمل قابل للتخصيص لنماذج التصميم.',
    'tool.uuid-generator.title': 'مولّد UUID',
    'tool.uuid-generator.description':
      'أنشئ معرّفات UUID من الإصدار الرابع باستخدام مولّد أرقام عشوائية آمن تشفيريًا في متصفحك.',
    'tool.invoice-pdf-generator.title': 'مولّد فواتير PDF',
    'tool.invoice-pdf-generator.description':
      'أنشئ وحمّل فاتورة PDF احترافية ببنود وضريبة وإجماليات — دون تسجيل.',
    'tool.random-name-generator.title': 'مولّد الأسماء العشوائية',
    'tool.random-name-generator.description':
      'أنشئ أسماء كاملة عشوائية (الأول + الأخير) للاختبارات والشخصيات والعينات.',
    'tool.random-number-generator.title': 'مولّد الأرقام العشوائية',
    'tool.random-number-generator.description':
      'أنشئ عددًا صحيحًا عشوائيًا أو أكثر ضمن نطاق — ممتاز للاختيارات والعينات والألعاب.',
    'tool.text-case-converter.title': 'محوّل حالة النص',
    'tool.text-case-converter.description':
      'حوّل النص بين حروف كبيرة وصغيرة وصيغ العناوين والجمل وcamelCase وsnake_case وغيرها.',
    'tool.word-counter.title': 'عُدّاد الكلمات',
    'tool.word-counter.description':
      'عُد الكلمات والحروف والجمل والفقرات في نصك مع تقدير وقت القراءة.',
    'tool.character-counter.title': 'عُدّاد الأحرف',
    'tool.character-counter.description':
      'عُد الأحرف والأحرف بدون مسافات والكلمات والأسطر في أي نص فورًا.',
    'tool.slug-generator.title': 'مولّد الروابط (Slug)',
    'tool.slug-generator.description':
      'حوّل أي عنوان أو جملة إلى رابط (slug) نظيف وصديق لمحركات البحث لمنشوراتك وصفحاتك.',
  },
  es: {
    'tool.mortgage-calculator.title': 'Calculadora de hipotecas',
    'tool.loan-calculator.title': 'Calculadora de préstamos',
    'tool.compound-interest-calculator.title': 'Calculadora de interés compuesto',
    'tool.bmi-calculator.title': 'Calculadora de IMC',
    'tool.age-calculator.title': 'Calculadora de edad',
    'tool.percentage-calculator.title': 'Calculadora de porcentajes',
    'tool.retirement-calculator.title': 'Calculadora de jubilación',
    'tool.investment-calculator.title': 'Calculadora de inversiones',
    'tool.tax-calculator.title': 'Calculadora de impuesto sobre la renta',
    'tool.calorie-calculator.title': 'Calculadora de calorías',
    'tool.pregnancy-calculator.title': 'Calculadora de embarazo',
    'tool.scientific-calculator.title': 'Calculadora científica',
    'tool.date-calculator.title': 'Calculadora de fechas',
    'tool.time-calculator.title': 'Calculadora de tiempo',
    'tool.unit-converter.title': 'Conversor de unidades',
    'tool.temperature-converter.title': 'Conversor de temperatura',
    'tool.json-csv-converter.title': 'Conversor JSON ↔ CSV',
    'tool.currency-converter.title': 'Conversor de moneda',
    'tool.markdown-converter.title': 'Conversor Markdown ↔ HTML',
    'tool.base64-converter.title': 'Codificador / decodificador Base64',
    'tool.url-converter.title': 'Codificador / decodificador URL',
    'tool.color-converter.title': 'Conversor de colores',
    'tool.timestamp-converter.title': 'Conversor de marca de tiempo',
    'tool.password-generator.title': 'Generador de contraseñas',
    'tool.qr-code-generator.title': 'Generador de código QR',
    'tool.lorem-ipsum-generator.title': 'Generador de Lorem Ipsum',
    'tool.uuid-generator.title': 'Generador de UUID',
    'tool.invoice-pdf-generator.title': 'Generador de facturas PDF',
    'tool.random-name-generator.title': 'Generador de nombres aleatorios',
    'tool.random-number-generator.title': 'Generador de números aleatorios',
    'tool.text-case-converter.title': 'Conversor de mayúsculas y minúsculas',
    'tool.word-counter.title': 'Contador de palabras',
    'tool.character-counter.title': 'Contador de caracteres',
    'tool.slug-generator.title': 'Generador de slugs',
  },
  fr: {
    'tool.mortgage-calculator.title': "Calculatrice de prêt immobilier",
    'tool.loan-calculator.title': 'Calculatrice de prêt',
    'tool.compound-interest-calculator.title': "Calculatrice d'intérêts composés",
    'tool.bmi-calculator.title': 'Calculatrice d’IMC',
    'tool.age-calculator.title': 'Calculatrice d’âge',
    'tool.percentage-calculator.title': 'Calculatrice de pourcentage',
    'tool.retirement-calculator.title': 'Calculatrice de retraite',
    'tool.investment-calculator.title': 'Calculatrice d’investissement',
    'tool.tax-calculator.title': 'Calculatrice d’impôt sur le revenu',
    'tool.calorie-calculator.title': 'Calculatrice de calories',
    'tool.pregnancy-calculator.title': 'Calculatrice de grossesse',
    'tool.scientific-calculator.title': 'Calculatrice scientifique',
    'tool.date-calculator.title': 'Calculatrice de dates',
    'tool.time-calculator.title': 'Calculatrice de temps',
    'tool.unit-converter.title': 'Convertisseur d’unités',
    'tool.temperature-converter.title': 'Convertisseur de température',
    'tool.json-csv-converter.title': 'Convertisseur JSON ↔ CSV',
    'tool.currency-converter.title': 'Convertisseur de devises',
    'tool.markdown-converter.title': 'Convertisseur Markdown ↔ HTML',
    'tool.base64-converter.title': 'Encodeur / décodeur Base64',
    'tool.url-converter.title': 'Encodeur / décodeur URL',
    'tool.color-converter.title': 'Convertisseur de couleurs',
    'tool.timestamp-converter.title': 'Convertisseur d’horodatage',
    'tool.password-generator.title': 'Générateur de mot de passe',
    'tool.qr-code-generator.title': 'Générateur de code QR',
    'tool.lorem-ipsum-generator.title': 'Générateur Lorem Ipsum',
    'tool.uuid-generator.title': 'Générateur UUID',
    'tool.invoice-pdf-generator.title': 'Générateur de factures PDF',
    'tool.random-name-generator.title': 'Générateur de noms aléatoires',
    'tool.random-number-generator.title': 'Générateur de nombres aléatoires',
    'tool.text-case-converter.title': 'Convertisseur de casse de texte',
    'tool.word-counter.title': 'Compteur de mots',
    'tool.character-counter.title': 'Compteur de caractères',
    'tool.slug-generator.title': 'Générateur de slugs',
  },
  de: {
    'tool.mortgage-calculator.title': 'Hypothekenrechner',
    'tool.loan-calculator.title': 'Kreditrechner',
    'tool.compound-interest-calculator.title': 'Zinseszinsrechner',
    'tool.bmi-calculator.title': 'BMI-Rechner',
    'tool.age-calculator.title': 'Altersrechner',
    'tool.percentage-calculator.title': 'Prozentrechner',
    'tool.retirement-calculator.title': 'Rentenrechner',
    'tool.investment-calculator.title': 'Investitionsrechner',
    'tool.tax-calculator.title': 'Einkommensteuerrechner',
    'tool.calorie-calculator.title': 'Kalorienrechner',
    'tool.pregnancy-calculator.title': 'Schwangerschaftsrechner',
    'tool.scientific-calculator.title': 'Wissenschaftlicher Taschenrechner',
    'tool.date-calculator.title': 'Datumsrechner',
    'tool.time-calculator.title': 'Zeitrechner',
    'tool.unit-converter.title': 'Einheitenrechner',
    'tool.temperature-converter.title': 'Temperaturrechner',
    'tool.json-csv-converter.title': 'JSON-↔-CSV-Konverter',
    'tool.currency-converter.title': 'Währungsrechner',
    'tool.markdown-converter.title': 'Markdown-↔-HTML-Konverter',
    'tool.base64-converter.title': 'Base64-Kodierer / -Dekodierer',
    'tool.url-converter.title': 'URL-Kodierer / -Dekodierer',
    'tool.color-converter.title': 'Farbumrechner',
    'tool.timestamp-converter.title': 'Zeitstempel-Konverter',
    'tool.password-generator.title': 'Passwortgenerator',
    'tool.qr-code-generator.title': 'QR-Code-Generator',
    'tool.lorem-ipsum-generator.title': 'Lorem-Ipsum-Generator',
    'tool.uuid-generator.title': 'UUID-Generator',
    'tool.invoice-pdf-generator.title': 'Rechnungs-PDF-Generator',
    'tool.random-name-generator.title': 'Zufälliger Namensgenerator',
    'tool.random-number-generator.title': 'Zufallszahlengenerator',
    'tool.text-case-converter.title': 'Text-Groß-/Kleinschreibung-Konverter',
    'tool.word-counter.title': 'Wortzähler',
    'tool.character-counter.title': 'Zeichenzähler',
    'tool.slug-generator.title': 'Slug-Generator',
  },
  pt: {
    'tool.mortgage-calculator.title': 'Calculadora de hipoteca',
    'tool.loan-calculator.title': 'Calculadora de empréstimo',
    'tool.compound-interest-calculator.title': 'Calculadora de juros compostos',
    'tool.bmi-calculator.title': 'Calculadora de IMC',
    'tool.age-calculator.title': 'Calculadora de idade',
    'tool.percentage-calculator.title': 'Calculadora de porcentagem',
    'tool.retirement-calculator.title': 'Calculadora de aposentadoria',
    'tool.investment-calculator.title': 'Calculadora de investimento',
    'tool.tax-calculator.title': 'Calculadora de imposto de renda',
    'tool.calorie-calculator.title': 'Calculadora de calorias',
    'tool.pregnancy-calculator.title': 'Calculadora de gravidez',
    'tool.scientific-calculator.title': 'Calculadora científica',
    'tool.date-calculator.title': 'Calculadora de datas',
    'tool.time-calculator.title': 'Calculadora de tempo',
    'tool.unit-converter.title': 'Conversor de unidades',
    'tool.temperature-converter.title': 'Conversor de temperatura',
    'tool.json-csv-converter.title': 'Conversor JSON ↔ CSV',
    'tool.currency-converter.title': 'Conversor de moedas',
    'tool.markdown-converter.title': 'Conversor Markdown ↔ HTML',
    'tool.base64-converter.title': 'Codificador / decodificador Base64',
    'tool.url-converter.title': 'Codificador / decodificador URL',
    'tool.color-converter.title': 'Conversor de cores',
    'tool.timestamp-converter.title': 'Conversor de carimbo de tempo',
    'tool.password-generator.title': 'Gerador de senhas',
    'tool.qr-code-generator.title': 'Gerador de código QR',
    'tool.lorem-ipsum-generator.title': 'Gerador de Lorem Ipsum',
    'tool.uuid-generator.title': 'Gerador de UUID',
    'tool.invoice-pdf-generator.title': 'Gerador de faturas PDF',
    'tool.random-name-generator.title': 'Gerador de nomes aleatórios',
    'tool.random-number-generator.title': 'Gerador de números aleatórios',
    'tool.text-case-converter.title': 'Conversor de maiúsculas e minúsculas',
    'tool.word-counter.title': 'Contador de palavras',
    'tool.character-counter.title': 'Contador de caracteres',
    'tool.slug-generator.title': 'Gerador de slugs',
  },
};

/* ------------------------------------------------------------------ *
 * Arabic tool content (intro / how-to / FAQ). Concise MSA.
 * Uniform keys per tool: intro, howTo.0..3, faq.0..3.q / .a
 * ------------------------------------------------------------------ */
export const TOOL_CONTENT: Record<string, Record<string, string>> = {
  ar: {
    // 1. Mortgage
    'tool.mortgage-calculator.intro':
      'تقدّر حاسبتنا قسطك الشهري للأصل والفائدة وتكلفتك السكنية الكاملة شهريًا، بما في ذلك ضريبة العقار والتأمين وغيرها عند إدخالها، وتبني جدول استهلاك شهريًا كاملًا.',
    'tool.mortgage-calculator.howTo.0': 'أدخل سعر المنزل ودفعة المقدّم (مبلغًا أو نسبة مئوية).',
    'tool.mortgage-calculator.howTo.1': 'أدخل معدل الفائدة السنوي واختر مدة القرض (10 أو 15 أو 20 أو 30 سنة).',
    'tool.mortgage-calculator.howTo.2': 'أضف اختياريًا الضريبة والتأمين وغيرهما من الإعدادات المتقدمة.',
    'tool.mortgage-calculator.howTo.3': 'اقرأ قسطك الشهري والتكلفة الإجمالية وافتح جدول الاستهلاك.',
    'tool.mortgage-calculator.faq.0.q': 'كيف تُحسب الدفعة الشهرية للرهن؟',
    'tool.mortgage-calculator.faq.0.a':
      'نستخدم معادلة الاستهلاك القياسية M = P·r / (1 − (1 + r)^−n) حيث P هو مبلغ القرض وr معدل الفائدة الشهري وn عدد الدفعات.',
    'tool.mortgage-calculator.faq.1.q': 'لماذا تقلل الدفعة المقدّمة الأكبر من قسطي؟',
    'tool.mortgage-calculator.faq.1.a': 'الدفعة المقدّمة الأكبر تخفض أصل القرض فتقل الفائدة والقسط الشهري.',
    'tool.mortgage-calculator.faq.2.q': 'ما هو تأمين الرهن الخاص (PMI) ومتى أحتاجه؟',
    'tool.mortgage-calculator.faq.2.a': 'يحمي المُقرض عندما تقل دفعة المقدّم عن 20% من سعر المنزل.',
    'tool.mortgage-calculator.faq.3.q': 'هل يشمل هذا الضرائب والتأمين؟',
    'tool.mortgage-calculator.faq.3.a': 'فقط إن أدخلتها ضمن الإعدادات المتقدمة.',

    // 2. Loan
    'tool.loan-calculator.intro':
      'تعمل هذه الحاسبة لأي قرض بفائدة ثابتة: أدخل المبلغ والفائدة والمدة لترى القسط والفائدة الكلية ومدة السداد، مع دفعة إضافية اختيارية.',
    'tool.loan-calculator.howTo.0': 'أدخل مبلغ القرض ومعدل الفائدة السنوي ومدته بالسنوات.',
    'tool.loan-calculator.howTo.1': 'أضف اختياريًا دفعة شهرية إضافية للسداد المبكر.',
    'tool.loan-calculator.howTo.2': 'اضغط احسب لرؤية القسط ومدة السداد وإجمالي الفائدة.',
    'tool.loan-calculator.howTo.3': 'افتح جدول الاستهلاك لعرض كل دفعة.',
    'tool.loan-calculator.faq.0.q': 'كيف توفّر الدفعات الإضافية المال؟',
    'tool.loan-calculator.faq.0.a': 'تقلل أصل الرصيد فتنخفض الفائدة المستقبلية وتقصر مدة القرض.',
    'tool.loan-calculator.faq.1.q': 'هل أنفعها للسيارة أو الدراسة؟',
    'tool.loan-calculator.faq.1.a': 'نعم، أي قرض بفائدة ومدة ثابتتين يناسبها ذلك.',
    'tool.loan-calculator.faq.2.q': 'لماذا دفعتي الأولى معظمها فائدة؟',
    'tool.loan-calculator.faq.2.a': 'لأن الرصيد الأكبر في البداية فيذهب الجزء الأكبر للفائدة.',
    'tool.loan-calculator.faq.3.q': 'هل الحسابات دقيقة؟',
    'tool.loan-calculator.faq.3.a': 'تقديرية لقرض بفائدة ثابتة وتُجمع الفائدة شهريًا.',

    // 3. Compound Interest
    'tool.compound-interest-calculator.intro':
      'شاهد نمو المال عبر الزمن بالفائدة المركبة: أضف أصلًا ومساهمة شهرية ومعدلًا وتواترًا، لتحصل على القيمة المستقبلية.',
    'tool.compound-interest-calculator.howTo.0': 'أدخل الأصل الأولي والمساهمة الشهرية المخططة.',
    'tool.compound-interest-calculator.howTo.1': 'حدّد المعدل السنوي المتوقع وعدد السنوات.',
    'tool.compound-interest-calculator.howTo.2': 'اختر تواتر تركيب الفائدة (سنويًا أو ربعيًا أو شهريًا أو يوميًا).',
    'tool.compound-interest-calculator.howTo.3': 'راجع القيمة المستقبلية وإجمالي المساهمات والفائدة.',
    'tool.compound-interest-calculator.faq.0.q': 'ما تواتر تركيب الفائدة؟',
    'tool.compound-interest-calculator.faq.0.a': 'كم مرة تُضاف الفائدة للرصيد لتدرّ عليه فائدة بدوره.',
    'tool.compound-interest-calculator.faq.1.q': 'هل العوائد مضمونة؟',
    'tool.compound-interest-calculator.faq.1.a': 'لا، النموذج يفترض معدلًا ثابتًا لأغراض التوضيح فقط.',
    'tool.compound-interest-calculator.faq.2.q': 'كيف تُعامل المساهمات؟',
    'tool.compound-interest-calculator.faq.2.a': 'تُضاف كل فترة ثم تدرّ فائدة من تلك اللحظة.',
    'tool.compound-interest-calculator.faq.3.q': 'هل يؤثر التواتر على النتيجة؟',
    'tool.compound-interest-calculator.faq.3.a': 'التركيب الأكثر تواترًا يزيد القيمة النهائية قليلًا.',

    // 4. BMI
    'tool.bmi-calculator.intro':
      'مؤشر كتلة الجسم (BMI) مقياس بسيط للدهون بناءً على الطول والوزن. أدخل وزنك وطولك لترى مؤشرك ونطاق وزنك الصحي.',
    'tool.bmi-calculator.howTo.0': 'اختر الوحدات المترية (كجم/سم) أو الإمبراطورية (رطل/بوصة).',
    'tool.bmi-calculator.howTo.1': 'أدخل وزنك وطولك.',
    'tool.bmi-calculator.howTo.2': 'اقرأ مؤشرك والفئة ونطاق وزنك الصحي.',
    'tool.bmi-calculator.howTo.3': 'جرّب تغيير الوحدات فلا يتغير الناتج.',
    'tool.bmi-calculator.faq.0.q': 'ما نطاق الوزن الصحي؟',
    'tool.bmi-calculator.faq.0.a': 'مؤشر بين 18.5 و24.9 يُعد وزنًا طبيعيًا صحيًا عادةً.',
    'tool.bmi-calculator.faq.1.q': 'هل BMI دقيق للجميع؟',
    'tool.bmi-calculator.faq.1.a': 'لا، فهو لا يفرّق بين العضل والدهون.',
    'tool.bmi-calculator.faq.2.q': 'أي وحدات أستخدم؟',
    'tool.bmi-calculator.faq.2.a': 'النتيجة واحدة؛ اختر الأيسر لك إدخالًا.',
    'tool.bmi-calculator.faq.3.q': 'هل يناسب الرياضيين؟',
    'tool.bmi-calculator.faq.3.a': 'قد يخطئ في تصنيف ذوي العضلات العالية.',

    // 5. Age
    'tool.age-calculator.intro':
      'اعرف عمرك الدقيق حتى اليوم: أدخل تاريخ ميلادك لترى عمرك بالسنوات والأشهر والأيام وإجمالي الأيام وأيامًا حتى عيد ميلادك.',
    'tool.age-calculator.howTo.0': 'أدخل تاريخ ميلادك.',
    'tool.age-calculator.howTo.1': 'غيّر تاريخ "حتى تاريخ" لحساب العمر يومًا آخر.',
    'tool.age-calculator.howTo.2': 'اقرأ عمرك الدقيق والأرقام المساندة.',
    'tool.age-calculator.howTo.3': 'جرّب تاريخ ميلاد قديمًا لترى الفرق.',
    'tool.age-calculator.faq.0.q': 'كيف تُحسب السنوات والأشهر والأيام؟',
    'tool.age-calculator.faq.0.a': 'نحسب السنوات المكتملة ثم الأشهر ثم الأيام بالطريقة التقويمية.',
    'tool.age-calculator.faq.1.q': 'لماذا يهم إجمالي الأيام؟',
    'tool.age-calculator.faq.1.a': 'يقدم مقياسًا دقيقًا لا يتأثر باختلاف أطوال الشهور.',
    'tool.age-calculator.faq.2.q': 'هل أحسب عمرًا لتاريخ ماضٍ؟',
    'tool.age-calculator.faq.2.a': 'نعم، اضبط "حتى تاريخ" على أي يوم بعد الميلاد.',
    'tool.age-calculator.faq.3.q': 'هل يراعي السنوات الكبيسة؟',
    'tool.age-calculator.faq.3.a': 'نعم، عند عد الأيام الإجمالية.',

    // 6. Percentage
    'tool.percentage-calculator.intro':
      'حاسبة سريعة لأشهر أربع مهام: إيجاد نسبة من عدد، وكم تمثّل قيمة من أخرى، وإيجاد الأصل، ونسبة التغير.',
    'tool.percentage-calculator.howTo.0': 'اختر نوع المسألة من القائمة.',
    'tool.percentage-calculator.howTo.1': 'املأ القيمتين المطلوبتين.',
    'tool.percentage-calculator.howTo.2': 'اقرأ الناتج فورًا أثناء الكتابة.',
    'tool.percentage-calculator.howTo.3': 'جرّب أنواعًا مختلفة لمسائل متنوعة.',
    'tool.percentage-calculator.faq.0.q': 'كيف أعرف نسبة X من Y؟',
    'tool.percentage-calculator.faq.0.a': 'اقسم X على Y واضرب في 100.',
    'tool.percentage-calculator.faq.1.q': 'ما نسبة التغير؟',
    'tool.percentage-calculator.faq.1.a': '(الجديد − الأصل) / الأصل × 100، وموجبها زيادة وسالبها نقصان.',
    'tool.percentage-calculator.faq.2.q': 'هل أحسب خصمًا؟',
    'tool.percentage-calculator.faq.2.a': 'نعم، من 100 إلى 80 هو تغير −20%.',
    'tool.percentage-calculator.faq.3.q': 'هل النتائج دقيقة؟',
    'tool.percentage-calculator.faq.3.a': 'تُحسب بدقة كاملة وتُقرب للعرض فقط.',

    // 7. Retirement
    'tool.retirement-calculator.intro':
      'خطّط لتقاعدك بتوقّع قيمة مدخراتك الحالية ومساهماتك الشهرية، مع تقدير الدخل الشهري بقاعدة السحب الآمن 4%.',
    'tool.retirement-calculator.howTo.0': 'أدخل عمرك الحالي والعمر المتوقع للتقاعد.',
    'tool.retirement-calculator.howTo.1': 'أضف مدخراتك الحالية والمبلغ الشهري.',
    'tool.retirement-calculator.howTo.2': 'حدّد العائد السنوي المتوقع.',
    'tool.retirement-calculator.howTo.3': 'اقرأ رصيدك المتوقع ودخلك التقاعدي.',
    'tool.retirement-calculator.faq.0.q': 'ما قاعدة 4%؟',
    'tool.retirement-calculator.faq.0.a': 'تقترح سحب نحو 4% من المحفظة سنويًا مع تعديلها للتضخم.',
    'tool.retirement-calculator.faq.1.q': 'لماذا البدء مبكرًا؟',
    'tool.retirement-calculator.faq.1.a': 'النمو المركب يجعل المساهمات المبكرة أعلى عائدًا بكثير.',
    'tool.retirement-calculator.faq.2.q': 'هل يشمل الضمان الاجتماعي؟',
    'tool.retirement-calculator.faq.2.a': 'لا، أضفه separate عند تخطيط احتياجاتك.',
    'tool.retirement-calculator.faq.3.q': 'هل يراعي التضخم؟',
    'tool.retirement-calculator.faq.3.a': 'لا، النموذج يتجاهل التضخم والضرائب.',

    // 8. Investment
    'tool.investment-calculator.intro':
      'شاهد نمو استثمار مبدئي مع مساهمات شهرية: القيمة المستقبلية وإجمالي المساهمات والفائدة مع جدول سنوي.',
    'tool.investment-calculator.howTo.0': 'أدخل المبلغ الأولي والمساهمة الشهرية.',
    'tool.investment-calculator.howTo.1': 'اختر العائد السنوي وعدد السنوات.',
    'tool.investment-calculator.howTo.2': 'راجع القيمة المستقبلية وجدول النمو.',
    'tool.investment-calculator.howTo.3': 'جرّب عوائد مختلفة لرؤية الأثر.',
    'tool.investment-calculator.faq.0.q': 'أي عائد أفترض؟',
    'tool.investment-calculator.faq.0.a': 'تاريخيًا نحو 7–10% قبل التضخم، لكن لا ضمان.',
    'tool.investment-calculator.faq.1.q': 'هل يشبه حاسبة الفائدة؟',
    'tool.investment-calculator.faq.1.a': 'نعم، لكنه موجّه للاستثمار مع جدول نمو.',
    'tool.investment-calculator.faq.2.q': 'هل أراعي التضخم؟',
    'tool.investment-calculator.faq.2.a': 'للقوة الشرائية الحقيقية استخدم معدلًا بعد التضخم.',
    'tool.investment-calculator.faq.3.q': 'هل النتائج مضمونة؟',
    'tool.investment-calculator.faq.3.a': 'لا، تقديرية ولا تضمن عوائد السوق.',

    // 9. Tax
    'tool.tax-calculator.intro':
      'قدّر ضريبة الدخل الفيدرالية والولائية الأمريكية لدافع أعزب عبر ولايات عدة لمقارنة أثر المكان على ضريبتك ودخلك الصافي.',
    'tool.tax-calculator.howTo.0': 'أدخل دخلك السنوي الخاضع للضريبة.',
    'tool.tax-calculator.howTo.1': 'اختر الولاية من القائمة.',
    'tool.tax-calculator.howTo.2': 'اقرأ ضريبتك الفيدرالية والولائية وإجمالي الضريبة والفعلي.',
    'tool.tax-calculator.howTo.3': 'جرّب ولايات مختلفة للمقارنة.',
    'tool.tax-calculator.faq.0.q': 'هل هذه نصيحة ضريبية رسمية؟',
    'tool.tax-calculator.faq.0.a': 'لا، تقدير تعليمي استشر مختصًا رسميًا.',
    'tool.tax-calculator.faq.1.q': 'لماذا للأعزب فقط؟',
    'tool.tax-calculator.faq.1.a': 'للبساطة؛ الحالات الأخرى لها شرائح مختلفة.',
    'tool.tax-calculator.faq.2.q': 'أي ولايات مشمولة؟',
    'tool.tax-calculator.faq.2.a': 'مجموعة ممثلة من ولايات بأسعار ثابتة أو شرائح.',
    'tool.tax-calculator.faq.3.q': 'هل الأسعار حديثة؟',
    'tool.tax-calculator.faq.3.a': 'شرائح مبسّطة تتغير سنويًا، تحقق من مصادر IRS.',

    // 10. Calorie
    'tool.calorie-calculator.intro':
      'قدّر معدل الأيض الأساسي (BMR) وإجمالي طاقتك اليومية (TDEE) من عمرك وجنسك وطولك ووزنك ونشاطك لتخطيط سعراتك.',
    'tool.calorie-calculator.howTo.0': 'اختر جنسك وعمرك ووحداتك.',
    'tool.calorie-calculator.howTo.1': 'أدخل وزنك وطولك ومستوى نشاطك.',
    'tool.calorie-calculator.howTo.2': 'اقرأ BMR وأهداف سعراتك للحفظ/النقص/الزيادة.',
    'tool.calorie-calculator.howTo.3': 'جرّب مستويات نشاط مختلفة.',
    'tool.calorie-calculator.faq.0.q': 'ما BMR؟',
    'tool.calorie-calculator.faq.0.a': 'السعرات التي يحرقها جسمك أثناء الراحة للوظائف الحيوية.',
    'tool.calorie-calculator.faq.1.q': 'كيف أنقص بأمان؟',
    'tool.calorie-calculator.faq.1.a': 'عجز معتدل (~500 سعرة/يوم) يقود لخسارة نحو رطل أسبوعيًا.',
    'tool.calorie-calculator.faq.2.q': 'لماذا يهم النشاط؟',
    'tool.calorie-calculator.faq.2.a': 'الأكثر نشاطًا يحرق سعرات أكثر فيرفع TDEE.',
    'tool.calorie-calculator.faq.3.q': 'هل يصلح للرياضيين؟',
    'tool.calorie-calculator.faq.3.a': 'تقديري؛ يفيد التخطيط العام لا البديل الطبي.',

    // 11. Pregnancy
    'tool.pregnancy-calculator.intro':
      'قدّر تواريخ الحمل المهمة من أول يوم لآخر دورة شهرية: موعد الولادة وتاريخ الحمل والعمر الحملي والثلث.',
    'tool.pregnancy-calculator.howTo.0': 'أدخل أول يوم لآخر دورة شهرية.',
    'tool.pregnancy-calculator.howTo.1': 'اقرأ موعد الولادة وتاريخ الحمل المتوقعين.',
    'tool.pregnancy-calculator.howTo.2': 'شاهد عمرك الحملي والثلث الحالي.',
    'tool.pregnancy-calculator.howTo.3': 'جرّب تاريخ دورة مختلفًا.',
    'tool.pregnancy-calculator.faq.0.q': 'كيف يُحسب موعد الولادة؟',
    'tool.pregnancy-calculator.faq.0.a': 'بإضافة 280 يومًا (40 أسبوعًا) لبداية آخر دورة.',
    'tool.pregnancy-calculator.faq.1.q': 'ما مدى دقته؟',
    'tool.pregnancy-calculator.faq.1.a': 'تقديري؛ نحو 5% فقط يولدون تمامًا في الموعد.',
    'tool.pregnancy-calculator.faq.2.q': 'ماذا إن كانت دورتي غير منتظمة؟',
    'tool.pregnancy-calculator.faq.2.a': 'السونار المبكر أكثر موثوقية حينها.',
    'tool.pregnancy-calculator.faq.3.q': 'هل يحدد الثلث؟',
    'tool.pregnancy-calculator.faq.3.a': 'نعم، بناءً على عدد الأسابيع المنقضية.',

    // 12. Scientific
    'tool.scientific-calculator.intro':
      'آلة حاسبة علمية كاملة في متصفحك: دوال مثلثية ولوغاريتمات وجذور وأسس وثوابت مثل π وe.',
    'tool.scientific-calculator.howTo.0': 'اكتب تعبيرًا أو ابنه بالأزرار.',
    'tool.scientific-calculator.howTo.1': 'استخدم دوالًا مثل sqrt( وsin( وlog( وثوابت pi وe.',
    'tool.scientific-calculator.howTo.2': 'اضغط = للتقييم، وC للمسح و⌫ لحذف حرف.',
    'tool.scientific-calculator.howTo.3': 'جرّب أقواسًا وتعبيرات مركبة.',
    'tool.scientific-calculator.faq.0.q': 'الدوال المثلثية بالدرجات أم بالراديان؟',
    'tool.scientific-calculator.faq.0.a': 'التعبيرات تستخدم الراديان؛ اضرب بالدرجات في pi/180.',
    'tool.scientific-calculator.faq.1.q': 'هل يمكن استخدام الأقواس؟',
    'tool.scientific-calculator.faq.1.a': 'نعم، الأقواس وأسبقية العمليات مدعومة كاملًا.',
    'tool.scientific-calculator.faq.2.q': 'هل يُحفظ إدخالي؟',
    'tool.scientific-calculator.faq.2.a': 'لا، التقييم يتم على جهازك فقط.',
    'tool.scientific-calculator.faq.3.q': 'هل يدعم الثوابت؟',
    'tool.scientific-calculator.faq.3.a': 'نعم، π وe متاحان داخل التعبيرات.',

    // 13. Date
    'tool.date-calculator.intro':
      'اعرف عدد الأيام الدقيق بين تاريخين، أو أضف واطرح أيامًا من تاريخ. مفيد للمواعيد النهائية والخطط.',
    'tool.date-calculator.howTo.0': 'اختر تاريخين لرؤية الفرق بالأيام والأسابيع.',
    'tool.date-calculator.howTo.1': 'أو أدخل تاريخًا وعدد أيام للجمع/الطرح.',
    'tool.date-calculator.howTo.2': 'اقرأ التاريخ الناتج فورًا.',
    'tool.date-calculator.howTo.3': 'جرّب طرح أيام سلبية للرجوع للوراء.',
    'tool.date-calculator.faq.0.q': 'هل يراعي السنوات الكبيسة؟',
    'tool.date-calculator.faq.0.a': 'نعم، الحساب على تواريخ التقويم الحقيقية.',
    'tool.date-calculator.faq.1.q': 'هل يمكن طرح أيام؟',
    'tool.date-calculator.faq.1.a': 'نعم، أدخل عدد أيام سالبًا للرجوع.',
    'tool.date-calculator.faq.2.q': 'هل ينفع لأيام العمل؟',
    'tool.date-calculator.faq.2.a': 'يعد كل الأيام؛ استبعد عطلة نهاية الأسبوع يدويًا.',
    'tool.date-calculator.faq.3.q': 'ما وحدته؟',
    'tool.date-calculator.faq.3.a': 'أيام تقويم كاملة بين التاريخين.',

    // 14. Time
    'tool.time-calculator.intro':
      'اجمع أو اطرح الساعات والدقائق والثواني، واعثر على المدة بين وقتين. ممتاز للجداول والمواعيد.',
    'tool.time-calculator.howTo.0': 'أدخل وقتًا ومدة للجمع أو الطرح.',
    'tool.time-calculator.howTo.1': 'أو أدخل وقتين لإيجاد المدة بينهما.',
    'tool.time-calculator.howTo.2': 'اقرأ الناتج بصيغة س س:د د:ث ث.',
    'tool.time-calculator.howTo.3': 'جرّب الطرح لرؤية الفرق.',
    'tool.time-calculator.faq.0.q': 'ماذا إن كان وقت النهاية أبكر؟',
    'tool.time-calculator.faq.0.a': 'يُعامله اليوم التالي ويضيف 24 ساعة.',
    'tool.time-calculator.faq.1.q': 'هل يمكن طرح الوقت؟',
    'tool.time-calculator.faq.1.a': 'نعم، اختر عملية الطرح مع مدة.',
    'tool.time-calculator.faq.2.q': 'هل يدعم الثواني؟',
    'tool.time-calculator.faq.2.a': 'نعم، حتى الثواني بصيغة س س:د د:ث ث.',
    'tool.time-calculator.faq.3.q': 'ما صيغة الناتج؟',
    'tool.time-calculator.faq.3.a': 'ساعة:دقيقة:ثانية (hh:mm:ss).',

    // 15. Unit
    'tool.unit-converter.intro':
      'حوّل بين وحدات القياس الشائعة بلمسة: الطول والوزن والمساحة والحجم والسرعة، وتُحسب كلها محليًا في متصفحك.',
    'tool.unit-converter.howTo.0': 'اختر الفئة (طول أو وزن أو مساحة أو حجم أو سرعة).',
    'tool.unit-converter.howTo.1': 'اختر وحدتي "من" و"إلى".',
    'tool.unit-converter.howTo.2': 'اكتب قيمة أو استخدم "تبديل الوحدات".',
    'tool.unit-converter.howTo.3': 'جرّب فئات مختلفة للتحويل.',
    'tool.unit-converter.faq.0.q': 'ما الوحدات المدعومة؟',
    'tool.unit-converter.faq.0.a': 'الطول والوزن والمساحة والحجم والسرعة بمترية وإمبراطورية.',
    'tool.unit-converter.faq.1.q': 'هل التحويل دقيق؟',
    'tool.unit-converter.faq.1.a': 'نعم، باستخدام عوامل ثابتة قياسية.',
    'tool.unit-converter.faq.2.q': 'هل تُحفظ مدخلاتي؟',
    'tool.unit-converter.faq.2.a': 'لا، كل التحويلات في متصفحك.',
    'tool.unit-converter.faq.3.q': 'هل يدعم التحويل العكسي؟',
    'tool.unit-converter.faq.3.a': 'نعم، زر التبديل يقلب الاتجاه.',

    // 16. Temperature
    'tool.temperature-converter.intro':
      'حوّل أي حرارة بين مئوية (°C) وفهرنهايت (°F) وكلفن (K) فورًا مع زر تبديل.',
    'tool.temperature-converter.howTo.0': 'اختر مقياسي "من" و"إلى".',
    'tool.temperature-converter.howTo.1': 'أدخل قيمة الحرارة.',
    'tool.temperature-converter.howTo.2': 'استخدم "تبديل" لعكس الاتجاه.',
    'tool.temperature-converter.howTo.3': 'جرّب القيم المتطرفة.',
    'tool.temperature-converter.faq.0.q': 'ما صيغة مئوية إلى فهرنهايت؟',
    'tool.temperature-converter.faq.0.a': '°F = (°C × 9/5) + 32.',
    'tool.temperature-converter.faq.1.q': 'كيف أحوّل إلى كلفن؟',
    'tool.temperature-converter.faq.1.a': 'كلفن = مئوية + 273.15.',
    'tool.temperature-converter.faq.2.q': 'لماذا ثلاث مقاييس؟',
    'tool.temperature-converter.faq.2.a': 'اثنان للاستخدام اليومي وواحد علمي مطلق.',
    'tool.temperature-converter.faq.3.q': 'هل فورية؟',
    'tool.temperature-converter.faq.3.a': 'نعم، تعمل في متصفحك مباشرة.',

    // 17. JSON-CSV
    'tool.json-csv-converter.intro':
      'حوّل مصفوفة كائنات JSON إلى CSV أو العكس، كله في متصفحك دون رفع ملفات أو مغادرة البيانات لجهازك.',
    'tool.json-csv-converter.howTo.0': 'اختر الاتجاه: JSON → CSV أو CSV → JSON.',
    'tool.json-csv-converter.howTo.1': 'الصق مدخلاتك في الصندوق العلوي.',
    'tool.json-csv-converter.howTo.2': 'اضغط تحويل لملء المخرجات ثم انسخها.',
    'tool.json-csv-converter.howTo.3': 'جرّب اتجاهًا عكسيًا.',
    'tool.json-csv-converter.faq.0.q': 'هل بياناتي خاصة؟',
    'tool.json-csv-converter.faq.0.a': 'نعم، كل التحليل في متصفحك.',
    'tool.json-csv-converter.faq.1.q': 'أي شكل JSON الأفضل؟',
    'tool.json-csv-converter.faq.1.a': 'مصفوفة كائنات مسطحة تتحول نظيفًا لعمود لكل مفتاح.',
    'tool.json-csv-converter.faq.2.q': 'هل يدعم الفواصل داخل القيم؟',
    'tool.json-csv-converter.faq.2.a': 'نعم، تُحاط بالاقتباس وفق معيار CSV.',
    'tool.json-csv-converter.faq.3.q': 'هل يدعم المصفوفات؟',
    'tool.json-csv-converter.faq.3.a': 'يتوقع مصفوفة كائنات مسطحة أو مصفوفة مصفوفات.',

    // 18. Currency
    'tool.currency-converter.intro':
      'حوّل المبالغ بين عملات العالم بحاسبة بسيطة. الأسعار ثابتة وتعليمية فقط ولا تعكس السوق الحي.',
    'tool.currency-converter.howTo.0': 'أدخل المبلغ المحوّل.',
    'tool.currency-converter.howTo.1': 'اختر العملة المصدر والهدف.',
    'tool.currency-converter.howTo.2': 'اقرأ المبلغ المحوّل واستخدم التبديل للعكس.',
    'tool.currency-converter.howTo.3': 'جرّب عملات مختلفة.',
    'tool.currency-converter.faq.0.q': 'هل الأسعار حية؟',
    'tool.currency-converter.faq.0.a': 'لا، قيم ثابتة توضيحية للتعلم فقط.',
    'tool.currency-converter.faq.1.q': 'ما العملات المدعومة؟',
    'tool.currency-converter.faq.1.a': 'مجموعة رئيسية من العملات مثل USD وEUR وGBP وJPY وCAD.',
    'tool.currency-converter.faq.2.q': 'أين أجد أسعارًا حية؟',
    'tool.currency-converter.faq.2.a': 'استخدم مزوّد بيانات مالية أو بنكك.',
    'tool.currency-converter.faq.3.q': 'هل يصلح للتجارة؟',
    'tool.currency-converter.faq.3.a': 'لا، تعليمي فقط؛ استخدم مصدرًا حيًا للتعاملات.',

    // 19. Markdown
    'tool.markdown-converter.intro':
      'حوّل Markdown إلى HTML نظيف أو العكس في متصفحك بالكامل، دون رفع ملفات ودون مغادرة النص لجهازك.',
    'tool.markdown-converter.howTo.0': 'اختر الاتجاه: Markdown → HTML أو HTML → Markdown.',
    'tool.markdown-converter.howTo.1': 'الصق مدخلاتك في الصندوق العلوي.',
    'tool.markdown-converter.howTo.2': 'اضغط تحويل وانسخ المخرجات.',
    'tool.markdown-converter.howTo.3': 'جرّب عناوين وقوائم.',
    'tool.markdown-converter.faq.0.q': 'هل نصي خاص؟',
    'tool.markdown-converter.faq.0.a': 'نعم، كل التحويل في متصفحك.',
    'tool.markdown-converter.faq.1.q': 'أي ميزات Markdown تعمل؟',
    'tool.markdown-converter.faq.1.a': 'العناوين والخط الغامق والمائل والشيفرة والروابط والقوائم.',
    'tool.markdown-converter.faq.2.q': 'هل يدعم صفحات HTML كاملة؟',
    'tool.markdown-converter.faq.2.a': 'يتعامل مع أجزاء HTML؛ الصفحات المعقدة قد تحتاج تنظيفًا.',
    'tool.markdown-converter.faq.3.q': 'هل التحويل ثنائي الاتجاه؟',
    'tool.markdown-converter.faq.3.a': 'نعم، في الاتجاهين.',

    // 20. Base64
    'tool.base64-converter.intro':
      'شفّر النص إلى Base64 أو فك تشفيره بأمان كامل لـ UTF-8 في متصفحك.',
    'tool.base64-converter.howTo.0': 'اختر التشفير أو فك التشفير.',
    'tool.base64-converter.howTo.1': 'الصق نصك أو سلسلة Base64.',
    'tool.base64-converter.howTo.2': 'اضغط تحويل وانسخ الناتج.',
    'tool.base64-converter.howTo.3': 'جرّب نصًا بأحرف خاصة.',
    'tool.base64-converter.faq.0.q': 'هل Base64 تشفير؟',
    'tool.base64-converter.faq.0.a': 'لا، ترميز يُعكس بسهولة؛ لا تستخدمه لحماية أسرار.',
    'tool.base64-converter.faq.1.q': 'هل يدعم الحركات والرموز؟',
    'tool.base64-converter.faq.1.a': 'نعم، UTF-8 يحفظ الأحرف غير اللاتينية.',
    'tool.base64-converter.faq.2.q': 'هل تُرفع بياناتي؟',
    'tool.base64-converter.faq.2.a': 'لا، التحويل محلي في متصفحك.',
    'tool.base64-converter.faq.3.q': 'متى أستخدمه؟',
    'tool.base64-converter.faq.3.a': 'لإدراج بيانات في نصوص أو روابط بأمان.',

    // 21. URL
    'tool.url-converter.intro':
      'اجعل النص آمنًا داخل الروابط عبر ترميز النسبة المئوية، أو فك ترميز سلسلة مرمّزة إلى نصها الأصلي.',
    'tool.url-converter.howTo.0': 'اختر التشفير أو فك التشفير.',
    'tool.url-converter.howTo.1': 'الصق نصك أو السلسلة المرمّزة.',
    'tool.url-converter.howTo.2': 'اضغط تحويل وانسخ المخرجات.',
    'tool.url-converter.howTo.3': 'جرّب مسافات ورموزًا خاصة.',
    'tool.url-converter.faq.0.q': 'متى أحتاج ترميز الروابط؟',
    'tool.url-converter.faq.0.a': 'كلما دخل نص بمسافات أو رموز خاصة في رابط.',
    'tool.url-converter.faq.1.q': 'ماذا يُرمَّز؟',
    'tool.url-converter.faq.1.a': 'المسافات و& و= و؟ و# وغيرها.',
    'tool.url-converter.faq.2.q': 'هل يشبه Base64؟',
    'tool.url-converter.faq.2.a': 'لا، ترميز النسبة المئوية مخصص للروابط.',
    'tool.url-converter.faq.3.q': 'هل فوري؟',
    'tool.url-converter.faq.3.a': 'نعم، يعمل في متصفحك مباشرة.',

    // 22. Color
    'tool.color-converter.intro':
      'حوّل أي لون بين HEX وRGB وHSL مع معاينة حية. عدّل أي حقل فيتحدث البقية تلقائيًا.',
    'tool.color-converter.howTo.0': 'اكتب قيمة HEX أو أدخل RGB / HSL.',
    'tool.color-converter.howTo.1': 'شاهد بقية الصيغ والمعاينة تتحدث حيًا.',
    'tool.color-converter.howTo.2': 'انسخ الصيغة التي تحتاجها لمشروعك.',
    'tool.color-converter.howTo.3': 'جرّب ألوانًا مختلفة.',
    'tool.color-converter.faq.0.q': 'لماذا HSL مفيد؟',
    'tool.color-converter.faq.0.a': 'يسهّل تفتيح اللون أو تغميقه أو تغيير تدرجه.',
    'tool.color-converter.faq.1.q': 'لماذا يختلف لوني؟',
    'tool.color-converter.faq.1.a': 'الشاشات تعرض الألوان differently؛ القيم دقيقة رياضيًا.',
    'tool.color-converter.faq.2.q': 'هل ألصق HEX قصيرًا؟',
    'tool.color-converter.faq.2.a': 'نعم، مثل #f00 يُمدّ تلقائيًا.',
    'tool.color-converter.faq.3.q': 'ما الفضاء اللوني؟',
    'tool.color-converter.faq.3.a': 'تحويلات sRGB القياسية.',

    // 23. Timestamp
    'tool.timestamp-converter.intro':
      'ترجم بين طوابع يونكس والطوابع الزمنية والتواريخ المقروءة، في الاتجاهين وبين ثوانٍ وملي ثانية.',
    'tool.timestamp-converter.howTo.0': 'أدخل طابعًا بوحدته لرؤية ISO وUTC والتوقيت المحلي.',
    'tool.timestamp-converter.howTo.1': 'أو اختر تاريخًا ووقتًا للحصول على الطابع.',
    'tool.timestamp-converter.howTo.2': 'استخدم "الوقت الحالي" لالتقاط اللحظة.',
    'tool.timestamp-converter.howTo.3': 'جرّب ثوانٍ وملي ثانية.',
    'tool.timestamp-converter.faq.0.q': 'ثوانٍ أم ملي ثانية؟',
    'tool.timestamp-converter.faq.0.a': 'كلاهما مدعوم؛ اختر الوحدة المناسبة.',
    'tool.timestamp-converter.faq.1.q': 'ما وقت يونكس؟',
    'tool.timestamp-converter.faq.1.a': 'عدد الثواني (أو ms) منذ 1970-01-01 00:00:00 UTC.',
    'tool.timestamp-converter.faq.2.q': 'لماذا يختلف توقيتي المحلي؟',
    'tool.timestamp-converter.faq.2.a': 'العرض المحلي يستخدم منطقة جهازك.',
    'tool.timestamp-converter.faq.3.q': 'هل يدعم المناطق؟',
    'tool.timestamp-converter.faq.3.a': 'نعم، بالتوقيت المحلي لجهازك.',

    // 24. Password
    'tool.password-generator.intro':
      'أنشئ كلمات مرور عشوائية قوية باستخدام مولّد أرقام عشوائية تشفيري في متصفحك، مع طول ومجموعات أحرف قابلة للتعديل.',
    'tool.password-generator.howTo.0': 'حدّد الطول عبر المزلق.',
    'tool.password-generator.howTo.1': 'حدّد مجموعات الأحرف المطلوبة.',
    'tool.password-generator.howTo.2': 'استبعد الأحرف المتشابهة لتقليل اللبس.',
    'tool.password-generator.howTo.3': 'اضغط توليد وانسخ كلمة المرور.',
    'tool.password-generator.faq.0.q': 'ما قوة كلمة المرور المولّدة؟',
    'tool.password-generator.faq.0.a': 'تعتمد على الطول والتنوع؛ نهدف لـ12–16 حرفًا على الأقل.',
    'tool.password-generator.faq.1.q': 'هل المولّد آمن؟',
    'tool.password-generator.faq.1.a': 'يستخدم مصدرًا عشوائيًا تشفيريًا ولا نرى كلماتك.',
    'tool.password-generator.faq.2.q': 'ماذا يفعل "استبعاد المتشابه"؟',
    'tool.password-generator.faq.2.a': 'يحذف أحرفًا ملتبسة مثل i وl و1 وO و0.',
    'tool.password-generator.faq.3.q': 'هل تُحفظ كلماتي؟',
    'tool.password-generator.faq.3.a': 'لا، تُولّد ولا تُخزّن ولا تُرسل.',

    // 25. QR
    'tool.qr-code-generator.intro':
      'أنشئ رمز QR لأي رابط أو نص أو معلومات واتصل به كصورة PNG، كله في متصفحك دون تتبّع.',
    'tool.qr-code-generator.howTo.0': 'اكتب أو الصق النص أو الرابط.',
    'tool.qr-code-generator.howTo.1': 'اختر الحجم واضغط توليد.',
    'tool.qr-code-generator.howTo.2': 'حمّل الرمز كصورة PNG.',
    'tool.qr-code-generator.howTo.3': 'جرّب روابط مختلفة.',
    'tool.qr-code-generator.faq.0.q': 'هل تُرسل بياناتي؟',
    'tool.qr-code-generator.faq.0.a': 'لا، الرمز يُرسم محليًا في متصفحك.',
    'tool.qr-code-generator.faq.1.q': 'ماذا يخزّن الرمز؟',
    'tool.qr-code-generator.faq.1.a': 'روابط ونصوصًا ومعلومات اتصال ضمن حدود السعة.',
    'tool.qr-code-generator.faq.2.q': 'هل أغيّر الألوان؟',
    'tool.qr-code-generator.faq.2.a': 'هذا المولّد البسيط يستخدم الأسود على الأبيض للقراءة.',
    'tool.qr-code-generator.faq.3.q': 'هل يصلح للطباعة؟',
    'tool.qr-code-generator.faq.3.a': 'نعم، حمّله بأعلى دقة ممكنة.',

    // 26. Lorem Ipsum
    'tool.lorem-ipsum-generator.intro':
      'أنشئ نص Lorem Ipsum للنماذج والتصاميم بعدد فقرات وجمل قابل للتخصيص.',
    'tool.lorem-ipsum-generator.howTo.0': 'حدّد عدد الفقرات والجمل لكل فقرة.',
    'tool.lorem-ipsum-generator.howTo.1': 'اختر البدء بالنص الكلاسيكي اختياريًا.',
    'tool.lorem-ipsum-generator.howTo.2': 'ولّد وانسخ النص.',
    'tool.lorem-ipsum-generator.howTo.3': 'جرّب أطوالًا مختلفة.',
    'tool.lorem-ipsum-generator.faq.0.q': 'لماذا Lorem Ipsum؟',
    'tool.lorem-ipsum-generator.faq.0.a': 'نص تعبئة لإظهار التخطيط بلا تشتيت.',
    'tool.lorem-ipsum-generator.faq.1.q': 'هل أغيّر الطول؟',
    'tool.lorem-ipsum-generator.faq.1.a': 'نعم، تحكّم بالفقرات والجمل.',
    'tool.lorem-ipsum-generator.faq.2.q': 'هل له معنى؟',
    'tool.lorem-ipsum-generator.faq.2.a': 'لا، عبارة عن كلمات غير مفهومة عمدًا.',
    'tool.lorem-ipsum-generator.faq.3.q': 'هل يصلح للإنتاج؟',
    'tool.lorem-ipsum-generator.faq.3.a': 'استبدله بنص حقيقي قبل الإطلاق.',

    // 27. UUID
    'tool.uuid-generator.intro':
      'أنشئ معرّفات UUID من الإصدار الرابع بأرقام عشوائية آمنة تشفيريًا لمفاتيح قواعد البيانات ورموز الواجهات.',
    'tool.uuid-generator.howTo.0': 'اختر كم معرّفًا تحتاج.',
    'tool.uuid-generator.howTo.1': 'اضغط توليد لإنشائها.',
    'tool.uuid-generator.howTo.2': 'انسخ القائمة لاستخدامها.',
    'tool.uuid-generator.howTo.3': 'جرّب أعدادًا مختلفة.',
    'tool.uuid-generator.faq.0.q': 'ما UUID؟',
    'tool.uuid-generator.faq.0.a': 'معرّف فريد عالميًا بقيمة 128 بت واحتمال تطابق شبه معدوم.',
    'tool.uuid-generator.faq.1.q': 'هل فريدة فعلًا؟',
    'tool.uuid-generator.faq.1.a': 'عمليًا نعم؛ v4 له نحو 2^122 قيمة ممكنة.',
    'tool.uuid-generator.faq.2.q': 'هل تصلح مفتاحًا رئيسيًا؟',
    'tool.uuid-generator.faq.2.a': 'نعم، تُستخدم شائعًا كمفاتيح لقواعد البيانات.',
    'tool.uuid-generator.faq.3.q': 'هل تُحفظ؟',
    'tool.uuid-generator.faq.3.a': 'لا، تُولّد محليًا.',

    // 28. Invoice PDF
    'tool.invoice-pdf-generator.intro':
      'أنشئ فاتورة PDF احترافية ببنود وضريبة وإجماليات، ثم حمّلها؛ كله في متصفحك دون تسجيل.',
    'tool.invoice-pdf-generator.howTo.0': 'أدخل بيانات شركتك وعملائك ورقم الفاتورة.',
    'tool.invoice-pdf-generator.howTo.1': 'أضف بنودًا (وصفًا وكمية وسعرًا).',
    'tool.invoice-pdf-generator.howTo.2': 'حدّد نسبة الضريبة وحمّل PDF.',
    'tool.invoice-pdf-generator.howTo.3': 'جرّب بنودًا متعددة.',
    'tool.invoice-pdf-generator.faq.0.q': 'هل تُحفظ بياناتي؟',
    'tool.invoice-pdf-generator.faq.0.a': 'لا، تُبنى محليًا وتُحمّل مباشرة.',
    'tool.invoice-pdf-generator.faq.1.q': 'هل أضيف بنودًا أكثر؟',
    'tool.invoice-pdf-generator.faq.1.a': 'القالب بثلاثة صفوف؛ كرّر الصف لإضافة المزيد.',
    'tool.invoice-pdf-generator.faq.2.q': 'هل ملزمة قانونًا؟',
    'tool.invoice-pdf-generator.faq.2.a': 'تنتج مستندًا؛ صلاحيته حسب ولايتك.',
    'tool.invoice-pdf-generator.faq.3.q': 'ما صيغة الخرج؟',
    'tool.invoice-pdf-generator.faq.3.a': 'ملف PDF جاهز للطباعة.',

    // 29. Random Name
    'tool.random-name-generator.intro':
      'أنشئ أسماء عشوائية بدمج الأسماء الأول والأخير من قائمة عيّنات، مفيدة للبيانات التجريبية والشخصيات.',
    'tool.random-name-generator.howTo.0': 'اختر كم اسمًا تحتاج.',
    'tool.random-name-generator.howTo.1': 'اضغط توليد لإنشائها.',
    'tool.random-name-generator.howTo.2': 'انسخ القائمة لمشروعك.',
    'tool.random-name-generator.howTo.3': 'جرّب أعدادًا مختلفة.',
    'tool.random-name-generator.faq.0.q': 'هل هؤلاء أشخاص حقيقيون؟',
    'tool.random-name-generator.faq.0.a': 'لا، مركّبة عشوائيًا من قوائم عيّنات.',
    'tool.random-name-generator.faq.1.q': 'هل أستخدمها في الإنتاج؟',
    'tool.random-name-generator.faq.1.a': 'نعم لبيانات تجريبية؛ تجنّب الإيحاء بهويات حقيقية.',
    'tool.random-name-generator.faq.2.q': 'كم يمكن توليده؟',
    'tool.random-name-generator.faq.2.a': 'حتى 100 دفعة واحدة.',
    'tool.random-name-generator.faq.3.q': 'هل تتكرر؟',
    'tool.random-name-generator.faq.3.a': 'قد تتكرر بالصدفة في أعداد كبيرة.',

    // 30. Random Number
    'tool.random-number-generator.intro':
      'اسحب أعدادًا صحيحة عشوائية بين أي حدّين، مفردة أو مجموعة للسحوبات والعيّنات والألعاب.',
    'tool.random-number-generator.howTo.0': 'حدّد حدًّا أدنى وأعلى (الأدنى ≤ الأعلى).',
    'tool.random-number-generator.howTo.1': 'اختر كم عددًا تولّده.',
    'tool.random-number-generator.howTo.2': 'اضغط توليد وانسخ النتائج.',
    'tool.random-number-generator.howTo.3': 'جرّب نطاقات مختلفة.',
    'tool.random-number-generator.faq.0.q': 'هل هو عادل؟',
    'tool.random-number-generator.faq.0.a': 'الأعداد موزّعة باحتمال متساوٍ في النطاق.',
    'tool.random-number-generator.faq.1.q': 'هل أولّد عشريًا؟',
    'tool.random-number-generator.faq.1.a': 'هذا يعيد أعدادًا صحيحة؛ استخدم تقريبًا للعشري.',
    'tool.random-number-generator.faq.2.q': 'هل يصلح للأسرار؟',
    'tool.random-number-generator.faq.2.a': 'لا، استخدم مولّد كلمات المرور للأسرار.',
    'tool.random-number-generator.faq.3.q': 'هل يكرر القيم؟',
    'tool.random-number-generator.faq.3.a': 'قد يتكرر بالصدفة في مجموعات كبيرة.',

    // 31. Text Case
    'tool.text-case-converter.intro':
      'حوّل أي نص إلى الحالة التي تحتاجها: كبيرة أو صغيرة أو عناوين أو جمل أو camelCase أو snake_case بنقرة.',
    'tool.text-case-converter.howTo.0': 'اكتب أو الصق نصك.',
    'tool.text-case-converter.howTo.1': 'انقر أسلوب الحالة المطلوب.',
    'tool.text-case-converter.howTo.2': 'انسخ الناتج المحوّل.',
    'tool.text-case-converter.howTo.3': 'جرّب أساليب متعددة.',
    'tool.text-case-converter.faq.0.q': 'ما camelCase؟',
    'tool.text-case-converter.faq.0.a': 'بلا مسافات، أول كلمة صغيرة وما بعدها كبير.',
    'tool.text-case-converter.faq.1.q': 'ما الفرق بين snake وkebab؟',
    'tool.text-case-converter.faq.1.a': 'snake_case يستخدم شرطة سفلية وkebab-case واصلة.',
    'tool.text-case-converter.faq.2.q': 'هل يُحفظ نصي؟',
    'tool.text-case-converter.faq.2.a': 'لا، التحويل في متصفحك.',
    'tool.text-case-converter.faq.3.q': 'هل يدعم العربية؟',
    'tool.text-case-converter.faq.3.a': 'التحويل نصي ومحايد لكل اللغات.',

    // 32. Word Counter
    'tool.word-counter.intro':
      'الصق أي نص لعدّ الكلمات والحروف والجمل والفقرات مع تقدير وقت القراءة، مثالي للمقالات وكلمات SEO.',
    'tool.word-counter.howTo.0': 'الصق أو اكتب نصك في الصندوق.',
    'tool.word-counter.howTo.1': 'شاهد الإحصاءات تتحدث حيًا.',
    'tool.word-counter.howTo.2': 'استخدم الأعداد لأهداف التحرير.',
    'tool.word-counter.howTo.3': 'جرّب نصوصًا بأطوال مختلفة.',
    'tool.word-counter.faq.0.q': 'كيف يُقدّر وقت القراءة؟',
    'tool.word-counter.faq.0.a': 'بقسمة عدد الكلمات على 200 كلمة/دقيقة.',
    'tool.word-counter.faq.1.q': 'هل تُحسب علامات الترقيم أحرفًا؟',
    'tool.word-counter.faq.1.a': 'نعم، تشمل كل الرموز والمسافات.',
    'tool.word-counter.faq.2.q': 'هل يفيد SEO؟',
    'tool.word-counter.faq.2.a': 'نعم، يتابع الطول لتحقيق أهداف المحتوى.',
    'tool.word-counter.faq.3.q': 'هل دقيق؟',
    'tool.word-counter.faq.3.a': 'يقدّر بالقواعد الشائعة للكلمات والجمل.',

    // 33. Character Counter
    'tool.character-counter.intro':
      'اعُد الأحرف بسرعة شاملةً وتلك بلا مسافات، مع الكلمات والأسطر، مفيد للتغريدات وأوصاف meta.',
    'tool.character-counter.howTo.0': 'اكتب أو الصق نصك.',
    'tool.character-counter.howTo.1': 'شاهد أعداد الأحرف تتحدث حيًا.',
    'tool.character-counter.howTo.2': 'استخدمه للبقاء ضمن الحدود.',
    'tool.character-counter.howTo.3': 'جرّب نصوصًا قصيرة.',
    'tool.character-counter.faq.0.q': 'لماذا العد بلا مسافات؟',
    'tool.character-counter.faq.0.a': 'حدود كثيرة تهتم بالإجمالي لكن بلا مسافات تقارن الكثافة.',
    'tool.character-counter.faq.1.q': 'هل يعدّ الرموز التعبيرية؟',
    'tool.character-counter.faq.1.a': 'نعم، قد تكون وحدات رمزية متعددة.',
    'tool.character-counter.faq.2.q': 'هل يفيد حدود X؟',
    'tool.character-counter.faq.2.a': 'نعم، يساعدك على البقاء ضمن حدود المنشور.',
    'tool.character-counter.faq.3.q': 'هل دقيق؟',
    'tool.character-counter.faq.3.a': 'يعد كل حرف بما فيه المسافات.',

    // 34. Slug
    'tool.slug-generator.intro':
      'حوّل العناوين والجمل إلى روابط (slug) صديقة لمحركات البحث: صغيرة ومفصولة بشرطات وبلا رموز خاصة.',
    'tool.slug-generator.howTo.0': 'اكتب عنوانًا أو عبارة.',
    'tool.slug-generator.howTo.1': 'اضغط توليد لإنشاء الرابط.',
    'tool.slug-generator.howTo.2': 'انسخه لرابطك أو ملفك.',
    'tool.slug-generator.howTo.3': 'جرّب عناوين بأحرف خاصة.',
    'tool.slug-generator.faq.0.q': 'ما الرابط الجيد؟',
    'tool.slug-generator.faq.0.a': 'قصير ووصفي وحروف صغيرة مفصولة بشرطات وكلمة مفتاحية.',
    'tool.slug-generator.faq.1.q': 'هل تُبقى الأحرف المش accent؟',
    'tool.slug-generator.faq.1.a': 'تُحوّل إلى ما يقابلها من ASCII (é → e).',
    'tool.slug-generator.faq.2.q': 'لماذا شرطات لا شرطات سفلية؟',
    'tool.slug-generator.faq.2.a': 'محركات البحث تعامل الشرطة فاصل كلمات لا السفلية.',
    'tool.slug-generator.faq.3.q': 'هل فوري؟',
    'tool.slug-generator.faq.3.a': 'نعم، يعمل في متصفحك مباشرة.',
  },
};
