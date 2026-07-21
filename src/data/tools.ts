import type { CategoryMeta, ToolMeta } from './types';

export const categories: CategoryMeta[] = [
  {
    slug: 'calculators',
    title: 'Calculators',
    description:
      'Free, accurate online calculators for mortgages, loans, investments, health and everyday math. Fast results, no sign-up required.',
    icon: '🧮',
  },
  {
    slug: 'converters',
    title: 'Converters',
    description:
      'Convert units, temperatures and data formats instantly. Clean, client-side converters for length, weight, area, volume, speed, and JSON ↔ CSV.',
    icon: '🔄',
  },
  {
    slug: 'generators',
    title: 'Generators',
    description:
      'Handy free generators that run entirely in your browser — strong random passwords, and more — with nothing stored or tracked.',
    icon: '⚡',
  },
];

export const tools: ToolMeta[] = [
  // ----------------------------- CALCULATORS -----------------------------
  {
    slug: 'mortgage-calculator',
    category: 'calculators',
    title: 'Mortgage Calculator',
    description:
      'Free mortgage calculator with monthly payment, taxes, insurance and a full amortization schedule. Estimate your home loan costs in seconds.',
    keywords: ['mortgage calculator', 'home loan calculator', 'monthly mortgage payment', 'amortization schedule'],
    icon: '🏠',
    component: 'mortgage-calculator',
    related: ['loan-calculator', 'compound-interest-calculator', 'percentage-calculator'],
    content: {
      intro:
        'Our mortgage calculator estimates your monthly principal & interest payment and your all-in monthly housing cost, including property tax, home insurance, PMI and HOA fees when you enter them. It also builds a complete month-by-month amortization schedule so you can see exactly how each payment is split between interest and principal.',
      howTo: [
        'Enter the home price and your down payment (as a dollar amount or a percentage).',
        'Enter the annual interest rate and choose a loan term (10, 15, 20 or 30 years).',
        'Optionally expand “Advanced options” to add yearly property tax, insurance, PMI and monthly HOA.',
        'Read your monthly payment and total cost, then open the amortization schedule for the full breakdown.',
      ],
      example:
        'A $300,000 home with a 20% down payment ($60,000), a 6.5% rate and a 30-year term costs about $1,896/month in principal & interest.',
      assumptions: [
        'Assumes a fixed-rate loan with interest compounded monthly.',
        'Estimates only — does not include one-time closing costs or rate changes.',
        'Taxes, insurance and PMI are entered as annual figures and divided by 12.',
      ],
    },
    faq: [
      { q: 'How is the monthly mortgage payment calculated?', a: 'We use the standard amortization formula M = P·r / (1 − (1 + r)^−n), where P is the loan amount, r is the monthly interest rate, and n is the number of monthly payments.' },
      { q: 'Why does a larger down payment lower my payment?', a: 'A larger down payment reduces the loan principal P, which lowers both the monthly principal & interest and the total interest paid over the life of the loan.' },
      { q: 'What is PMI and when do I need it?', a: 'Private Mortgage Insurance protects the lender when your down payment is below ~20% of the home price. Enter your yearly PMI cost to see its effect on your monthly payment.' },
      { q: 'Does this include property taxes and insurance?', a: 'Only if you enter them. Add yearly tax and insurance amounts under “Advanced options” to see your true all-in monthly housing cost.' },
    ],
  },
  {
    slug: 'loan-calculator',
    category: 'calculators',
    title: 'Loan Calculator',
    description:
      'Calculate loan payments, total interest and payoff time for any personal, auto or student loan, with optional extra monthly payments.',
    keywords: ['loan calculator', 'personal loan calculator', 'auto loan calculator', 'extra payment calculator'],
    icon: '💳',
    component: 'loan-calculator',
    related: ['mortgage-calculator', 'compound-interest-calculator', 'percentage-calculator'],
    content: {
      intro:
        'The loan calculator works for any fixed-rate loan. Enter the amount, annual interest rate and term to see your monthly payment, total interest and total repaid. Add an extra monthly principal payment to see how much sooner you can pay off the loan and how much interest you save.',
      howTo: [
        'Enter the loan amount, annual interest rate and term in years.',
        'Optionally add an extra monthly payment to pay the loan off faster.',
        'Press Calculate to see your payment, payoff time and total interest.',
        'Open the amortization schedule to view every payment.',
      ],
      example:
        'A $10,000 loan at 5% for 5 years costs about $188.71/month. Adding $50/month extra pays it off in roughly 4 years and saves interest.',
      assumptions: [
        'Assumes a fixed interest rate for the entire term.',
        'Interest is compounded monthly.',
        'Extra payments are applied to principal and begin with the first payment.',
      ],
    },
    faq: [
      { q: 'How do extra payments save money?', a: 'Extra payments reduce the principal balance sooner, which lowers the interest charged on future payments and shortens the loan term.' },
      { q: 'Can I use this for auto or student loans?', a: 'Yes. Any installment loan with a fixed rate and term works — auto, personal, student or business loans.' },
      { q: 'Why is my first payment mostly interest?', a: 'Early payments go mostly to interest because the outstanding balance is largest at the start; over time more of each payment goes to principal.' },
    ],
  },
  {
    slug: 'compound-interest-calculator',
    category: 'calculators',
    title: 'Compound Interest Calculator',
    description:
      'Project the future value of savings and investments with regular contributions, custom rates and compounding frequency.',
    keywords: ['compound interest calculator', 'investment calculator', 'savings calculator', 'future value calculator'],
    icon: '📈',
    component: 'compound-interest-calculator',
    related: ['loan-calculator', 'mortgage-calculator', 'percentage-calculator'],
    content: {
      intro:
        'See how money grows over time with compound interest. Add an initial principal and a recurring monthly contribution, choose an annual rate and compounding frequency, and get the projected future value plus a year-by-year breakdown of contributions versus interest earned.',
      howTo: [
        'Enter your initial principal and the monthly contribution you plan to add.',
        'Set the expected annual interest rate and the number of years.',
        'Choose how often interest compounds (annually, quarterly, monthly or daily).',
        'Review the future value, total contributions and interest earned.',
      ],
      example:
        'Investing $1,000 up front plus $100/month at 6% compounded monthly for 10 years grows to about $17,600, of which roughly $5,600 is interest.',
      assumptions: [
        'Assumes a constant annual rate and contributions made at the end of each period.',
        'Does not account for taxes, fees, inflation or market volatility.',
        'More frequent compounding slightly increases the final value.',
      ],
    },
    faq: [
      { q: 'What is compounding frequency?', a: 'It is how often earned interest is added to your balance so it can earn interest itself. Monthly compounding is common for savings accounts.' },
      { q: 'Are returns guaranteed?', a: 'No. This calculator models a fixed rate for illustration; real investments fluctuate and are not guaranteed.' },
      { q: 'How are contributions treated?', a: 'Contributions are added each period and then earn interest from that point forward.' },
    ],
  },
  {
    slug: 'bmi-calculator',
    category: 'calculators',
    title: 'BMI Calculator',
    description:
      'Calculate your Body Mass Index (BMI) in metric or imperial units and see your healthy weight range.',
    keywords: ['bmi calculator', 'body mass index', 'bmi chart', 'healthy weight calculator'],
    icon: '⚖️',
    component: 'bmi-calculator',
    related: ['percentage-calculator', 'age-calculator'],
    content: {
      intro:
        'Body Mass Index (BMI) is a simple screening measure of body fat based on height and weight. Enter your weight and height in metric or imperial units to get your BMI, the standard weight category, and the healthy weight range for your height.',
      howTo: [
        'Choose metric (kg/cm) or imperial (lb/in) units.',
        'Enter your weight and height.',
        'Read your BMI, category (underweight, normal, overweight, obese) and healthy range.',
      ],
      example: 'A person who is 175 cm tall and weighs 70 kg has a BMI of about 22.9, which is in the normal range.',
      assumptions: [
        'Uses the standard formula BMI = weight(kg) / height(m)².',
        'BMI is a screening tool only and does not distinguish muscle from fat.',
        'Athletes and older adults may need additional assessment.',
      ],
    },
    faq: [
      { q: 'What BMI range is considered healthy?', a: 'A BMI between 18.5 and 24.9 is generally considered a normal, healthy weight.' },
      { q: 'Is BMI accurate for everyone?', a: 'No. BMI does not account for muscle mass, bone density or fat distribution, so it can misclassify very muscular individuals.' },
      { q: 'Should I use metric or imperial?', a: 'Either — the result is the same. Pick the units you are most comfortable entering.' },
    ],
  },
  {
    slug: 'age-calculator',
    category: 'calculators',
    title: 'Age Calculator',
    description:
      'Calculate your exact age in years, months and days, plus total days lived and days until your next birthday.',
    keywords: ['age calculator', 'exact age calculator', 'how old am i', 'date difference calculator'],
    icon: '🎂',
    component: 'age-calculator',
    related: ['bmi-calculator', 'percentage-calculator'],
    content: {
      intro:
        'Find your exact age down to the day. Enter your date of birth (and optionally a different “as of” date) to see your age in years, months and days, the total number of days you have lived, and how many days remain until your next birthday.',
      howTo: [
        'Enter your date of birth.',
        'Optionally change the “as of” date to calculate age on a different day.',
        'Read your precise age and supporting figures.',
      ],
      example: 'Someone born on January 1, 1990 is exactly 30 years old on January 1, 2020 — 10,957 days later.',
      assumptions: [
        'Uses the Gregorian calendar.',
        'Accounts for leap years when counting total days.',
        'The “as of” date must be on or after the birth date.',
      ],
    },
    faq: [
      { q: 'How are years, months and days calculated?', a: 'We count completed years, then remaining completed months within the current year, then remaining days — the standard calendar method.' },
      { q: 'Why does the total days figure matter?', a: 'Total days gives a precise, unambiguous measure of elapsed time that is not affected by varying month lengths.' },
      { q: 'Can I calculate age for a past date?', a: 'Yes — set the “as of” date to any date on or after your birth date.' },
    ],
  },
  {
    slug: 'percentage-calculator',
    category: 'calculators',
    title: 'Percentage Calculator',
    description:
      'Solve percentage problems instantly: what is X% of Y, X is what % of Y, and percentage increase or decrease.',
    keywords: ['percentage calculator', 'percent of', 'percentage increase', 'what is x percent of y'],
    icon: '％',
    component: 'percentage-calculator',
    related: ['mortgage-calculator', 'loan-calculator', 'bmi-calculator'],
    content: {
      intro:
        'A fast percentage calculator for the four most common tasks: finding a percentage of a number, finding what percent one number is of another, finding the whole from a part and a percent, and computing percentage change between two values.',
      howTo: [
        'Pick the type of percentage problem from the dropdown.',
        'Fill in the two values shown for that problem.',
        'Read the result immediately as you type.',
      ],
      example: '20% of 250 is 50. Going from 100 to 150 is a 50% increase.',
      assumptions: [
        'Standard percentage arithmetic: part/whole × 100.',
        'The “whole” or denominator cannot be zero.',
        'Results are rounded for display but computed at full precision.',
      ],
    },
    faq: [
      { q: 'How do I find what percent X is of Y?', a: 'Divide X by Y and multiply by 100. For example, 50 is 25% of 200.' },
      { q: 'What is percentage change?', a: 'It is (new − original) / original × 100. A positive result is an increase; negative is a decrease.' },
      { q: 'Can I calculate a discount?', a: 'Yes — a discount from $100 to $80 is a −20% change, or 80% of the original price.' },
    ],
  },

  // ----------------------------- CONVERTERS -----------------------------
  {
    slug: 'unit-converter',
    category: 'converters',
    title: 'Unit Converter',
    description:
      'Convert length, weight, area, volume and speed between metric and imperial units instantly.',
    keywords: ['unit converter', 'conversion calculator', 'metric to imperial', 'length converter'],
    icon: '📏',
    component: 'unit-converter',
    related: ['temperature-converter', 'json-csv-converter'],
    content: {
      intro:
        'Convert between common measurement units with a single tap. Switch categories for length, weight/mass, area, volume and speed, choose your from and to units, enter a value, and get the converted result — all computed locally in your browser.',
      howTo: [
        'Select a category (length, weight, area, volume or speed).',
        'Choose the “from” and “to” units from the dropdowns.',
        'Type a value, or use “Swap units” to reverse the conversion.',
      ],
      example: '1 kilometer = 1000 meters = 0.621 miles. 1 kilogram = 2.205 pounds.',
      assumptions: [
        'Uses internationally accepted conversion factors.',
        'All calculations run client-side for privacy and speed.',
        'Results are shown to full precision and rounded for readability.',
      ],
    },
    faq: [
      { q: 'Which units are supported?', a: 'Length, weight/mass, area, volume and speed, including both metric and imperial units such as meters, feet, kilograms, pounds, liters and gallons.' },
      { q: 'Is the conversion accurate?', a: 'Yes — it uses standard, fixed conversion factors, so results are exact to the limits of decimal display.' },
      { q: 'Do you store my inputs?', a: 'No. All conversions happen in your browser; nothing is sent to a server.' },
    ],
  },
  {
    slug: 'temperature-converter',
    category: 'converters',
    title: 'Temperature Converter',
    description:
      'Convert temperatures between Celsius, Fahrenheit and Kelvin instantly with a swap button.',
    keywords: ['temperature converter', 'celsius to fahrenheit', 'fahrenheit to celsius', 'kelvin converter'],
    icon: '🌡️',
    component: 'temperature-converter',
    related: ['unit-converter', 'json-csv-converter'],
    content: {
      intro:
        'Quickly convert any temperature between Celsius (°C), Fahrenheit (°F) and Kelvin (K). Type a value and pick your units, or hit “Swap” to reverse the direction.',
      howTo: [
        'Select the “from” and “to” temperature scales.',
        'Enter a temperature value.',
        'Use “Swap” to flip the conversion direction.',
      ],
      example: '100 °C = 212 °F = 373.15 K. 32 °F = 0 °C.',
      assumptions: [
        'Uses the exact linear relations between the scales.',
        'Computation is instant and runs in your browser.',
      ],
    },
    faq: [
      { q: 'What is the formula from Celsius to Fahrenheit?', a: '°F = (°C × 9/5) + 32. For example, 0 °C = 32 °F and 100 °C = 212 °F.' },
      { q: 'How do I convert to Kelvin?', a: 'Kelvin = Celsius + 273.15. Absolute zero is 0 K, or −273.15 °C.' },
      { q: 'Why are there three scales?', a: 'Celsius and Fahrenheit are common in daily use, while Kelvin is the scientific absolute temperature scale.' },
    ],
  },
  {
    slug: 'json-csv-converter',
    category: 'converters',
    title: 'JSON ↔ CSV Converter',
    description:
      'Convert JSON to CSV and CSV back to JSON entirely in your browser. No uploads, no data leaves your device.',
    keywords: ['json to csv', 'csv to json', 'json converter', 'data format converter'],
    icon: '🗂️',
    component: 'json-csv-converter',
    related: ['unit-converter', 'temperature-converter'],
    content: {
      intro:
        'Turn a JSON array of objects into CSV, or parse CSV back into JSON. Everything runs locally in your browser, so your data never leaves your device — ideal for quick spreadsheet imports and exports.',
      howTo: [
        'Select the direction: JSON → CSV or CSV → JSON.',
        'Paste your input into the top box.',
        'Press Convert to fill the output box, then copy it.',
      ],
      example: '[{"name":"Alice","score":92}] becomes: name,score\\nAlice,92',
      assumptions: [
        'JSON → CSV expects an array of flat objects (or an array of arrays).',
        'CSV → JSON treats the first row as column headers.',
        'Quoted fields and commas inside values are handled correctly.',
      ],
    },
    faq: [
      { q: 'Is my data private?', a: 'Yes. All parsing happens in your browser; nothing is uploaded to any server.' },
      { q: 'What JSON shape works best?', a: 'An array of flat objects, like [{ "a": 1, "b": 2 }], converts cleanly to CSV with one column per key.' },
      { q: 'Can it handle commas inside values?', a: 'Yes. Values containing commas or quotes are wrapped in double quotes and escaped per the CSV standard.' },
    ],
  },

  // ----------------------------- GENERATORS -----------------------------
  {
    slug: 'password-generator',
    category: 'generators',
    title: 'Password Generator',
    description:
      'Generate strong, random passwords in your browser with adjustable length and character sets. No tracking, no storage.',
    keywords: ['password generator', 'strong password', 'random password', 'secure password generator'],
    icon: '🔐',
    component: 'password-generator',
    related: ['json-csv-converter'],
    content: {
      intro:
        'Create secure random passwords using your browser’s cryptographic random number generator. Choose the length and which character types to include, exclude similar characters to avoid confusion, and copy the result instantly. Nothing is stored or sent anywhere.',
      howTo: [
        'Set the password length with the slider.',
        'Tick the character sets you want (uppercase, lowercase, numbers, symbols).',
        'Optionally exclude similar characters (e.g., l, 1, O, 0).',
        'Press Generate and copy your password.',
      ],
      example: 'A 16-character password with all four sets has about 95 bits of entropy — far beyond what is practical to brute-force.',
      assumptions: [
        'Randomness comes from the browser’s crypto.getRandomValues API.',
        'Entropy is estimated as length × log2(pool size).',
        'Generated passwords are not saved or transmitted.',
      ],
    },
    faq: [
      { q: 'How strong is a generated password?', a: 'Strength depends on length and character variety. Aim for at least 12–16 characters with mixed types for strong, resistant passwords.' },
      { q: 'Is this password generator safe?', a: 'It uses a cryptographic random source and runs entirely in your browser. We never see or store your password.' },
      { q: 'What does “exclude similar” do?', a: 'It removes easily confused characters such as i, l, 1, O, 0 and | to reduce typos when reading the password.' },
    ],
  },

  // ----------------------------- MORE CALCULATORS -----------------------------
  {
    slug: 'retirement-calculator',
    category: 'calculators',
    title: 'Retirement Calculator',
    description:
      'Estimate how much you need to save for retirement and your projected nest egg using current savings, monthly contributions and expected returns.',
    keywords: ['retirement calculator', 'retirement savings', '401k calculator', 'pension calculator'],
    icon: '🌅',
    component: 'retirement-calculator',
    related: ['investment-calculator', 'compound-interest-calculator', 'loan-calculator', 'mortgage-calculator'],
    content: {
      intro:
        'Plan your retirement by projecting the future value of your current savings plus ongoing monthly contributions. We also estimate the monthly income your portfolio could provide using the widely used 4% safe-withdrawal rule.',
      howTo: [
        'Enter your current age and the age you plan to retire.',
        'Add your current savings and the amount you can contribute each month.',
        'Set an expected annual return and read your projected balance and retirement income.',
      ],
      example: 'Saving $500/month from age 30 to 65 at 7% could grow to roughly $840,000.',
      assumptions: [
        'Assumes a constant annual return compounded monthly.',
        'The 4% rule is a guideline, not a guarantee of sustainable income.',
        'Ignores inflation, taxes and investment fees.',
      ],
    },
    faq: [
      { q: 'What is the 4% rule?', a: 'It suggests you can withdraw about 4% of your portfolio in the first year of retirement, adjusted for inflation, with low risk of running out over 30 years.' },
      { q: 'Why start early?', a: 'Compound growth means contributions made decades earlier earn far more than equal amounts saved later.' },
      { q: 'Does this include Social Security?', a: 'No. Add any expected Social Security or pension income separately when planning your needs.' },
    ],
  },
  {
    slug: 'investment-calculator',
    category: 'calculators',
    title: 'Investment Calculator',
    description:
      'Project the future value of a lump-sum investment with optional monthly contributions and a chosen annual return.',
    keywords: ['investment calculator', 'future value calculator', 'roi calculator', 'compound growth'],
    icon: '📊',
    component: 'investment-calculator',
    related: ['retirement-calculator', 'compound-interest-calculator', 'percentage-calculator'],
    content: {
      intro:
        'See how an initial investment grows over time with regular monthly contributions. The calculator shows your future value, total contributed and total interest earned, plus a year-by-year breakdown.',
      howTo: [
        'Enter your starting amount and any monthly contribution.',
        'Choose an expected annual return and the number of years.',
        'Review the projected future value and growth table.',
      ],
      example: 'Investing $5,000 plus $200/month at 8% for 20 years grows to about $143,000.',
      assumptions: [
        'Assumes a constant annual return compounded monthly.',
        'Does not account for taxes, fees or market volatility.',
      ],
    },
    faq: [
      { q: 'What return should I assume?', a: 'Historically broad stock indices have averaged ~7–10% before inflation, but past performance does not guarantee future results.' },
      { q: 'Is this the same as the compound calculator?', a: 'It is similar; this tool is framed for investing and adds a yearly growth table.' },
      { q: 'Should I include inflation?', a: 'For real purchasing power, use a return rate net of expected inflation.' },
    ],
  },
  {
    slug: 'tax-calculator',
    category: 'calculators',
    title: 'Income Tax Calculator',
    description:
      'Estimate your U.S. federal and state income tax for a single filer across several states using simplified brackets.',
    keywords: ['income tax calculator', 'federal tax calculator', 'state tax calculator', 'take home pay'],
    icon: '🧾',
    component: 'tax-calculator',
    related: ['percentage-calculator', 'mortgage-calculator', 'salary-calculator'],
    content: {
      intro:
        'Get a quick estimate of U.S. federal and state income tax for a single filer. Choose your state to compare how location affects your tax bill and take-home pay.',
      howTo: [
        'Enter your annual taxable income.',
        'Select a state from the dropdown.',
        'Read your estimated federal, state and total tax plus effective rate.',
      ],
      example: 'A $75,000 income in a no-tax state owes far less than the same income in a high-tax state.',
      assumptions: [
        'Uses simplified, illustrative brackets (single filer) — not official tax advice.',
        'Excludes deductions, credits, capital gains and other income types.',
        'Rates change yearly; verify with IRS and state sources.',
      ],
    },
    faq: [
      { q: 'Is this official tax advice?', a: 'No. It is an educational estimate. Consult a tax professional and official publications for filing.' },
      { q: 'Why only single filer?', a: 'To keep the calculator simple; joint and other statuses use different brackets.' },
      { q: 'Which states are included?', a: 'A representative set of states with flat or bracketed rates, plus states with no income tax.' },
    ],
  },
  {
    slug: 'calorie-calculator',
    category: 'calculators',
    title: 'Calorie Calculator',
    description:
      'Calculate your BMR and daily calorie needs (TDEE) to maintain, lose or gain weight using the Mifflin–St Jeor equation.',
    keywords: ['calorie calculator', 'bmr calculator', 'tdee calculator', 'maintenance calories'],
    icon: '🔥',
    component: 'calorie-calculator',
    related: ['bmi-calculator', 'percentage-calculator', 'pregnancy-calculator'],
    content: {
      intro:
        'Estimate your Basal Metabolic Rate (BMR) and Total Daily Energy Expenditure (TDEE) from your age, sex, height, weight and activity level. Use the results to plan calories for maintaining, losing or gaining weight.',
      howTo: [
        'Select your sex, age and units (metric or imperial).',
        'Enter your weight and height and choose an activity level.',
        'Read your BMR and calorie targets for maintain/lose/gain.',
      ],
      example: 'A moderately active 30-year-old, 70 kg, 175 cm may need about 2,300 calories to maintain.',
      assumptions: [
        'Uses the Mifflin–St Jeor equation, a common BMR estimate.',
        'TDEE multipliers are approximations of real activity.',
        'Not a substitute for advice from a dietitian or doctor.',
      ],
    },
    faq: [
      { q: 'What is BMR?', a: 'Basal Metabolic Rate is the calories your body burns at rest to maintain vital functions.' },
      { q: 'How do I lose weight safely?', a: 'A moderate deficit (about 500 kcal/day) typically leads to ~1 lb/week loss; consult a professional.' },
      { q: 'Why does activity matter?', a: 'More active people burn more calories daily, raising their TDEE.' },
    ],
  },
  {
    slug: 'pregnancy-calculator',
    category: 'calculators',
    title: 'Pregnancy Calculator',
    description:
      'Calculate your due date, conception date and current gestational age from your last menstrual period (LMP).',
    keywords: ['pregnancy calculator', 'due date calculator', 'gestational age', 'conception date'],
    icon: '🤰',
    component: 'pregnancy-calculator',
    related: ['age-calculator', 'bmi-calculator', 'calorie-calculator'],
    content: {
      intro:
        'Estimate key pregnancy dates from the first day of your last menstrual period. The calculator provides your due date, estimated conception date, current gestational age and trimester.',
      howTo: [
        'Enter the first day of your last menstrual period.',
        'Read your estimated due date and conception date.',
        'See your current gestational age and trimester.',
      ],
      example: 'An LMP of Jan 1 typically gives a due date around Oct 8 (280 days later).',
      assumptions: [
        'Assumes a 28-day cycle and conception about 14 days after LMP.',
        'A guide only — ultrasounds provide more precise dating.',
        'Consult your healthcare provider for medical guidance.',
      ],
    },
    faq: [
      { q: 'How is the due date calculated?', a: 'By adding 280 days (40 weeks) to the first day of your last period.' },
      { q: 'How accurate is it?', a: 'It is an estimate; only about 5% of babies arrive exactly on the due date.' },
      { q: 'What if my cycles are irregular?', a: 'An early ultrasound is more reliable for dating in that case.' },
    ],
  },
  {
    slug: 'scientific-calculator',
    category: 'calculators',
    title: 'Scientific Calculator',
    description:
      'A free online scientific calculator with trig, logarithms, powers, roots, parentheses and constants (π, e).',
    keywords: ['scientific calculator', 'online calculator', 'trig calculator', 'math calculator'],
    icon: '🧮',
    component: 'scientific-calculator',
    related: ['percentage-calculator', 'compound-interest-calculator'],
    content: {
      intro:
        'A full-featured scientific calculator that runs in your browser. Use it for trigonometry (sin, cos, tan), logarithms, square roots, powers and constants like π and e.',
      howTo: [
        'Type an expression or build one with the buttons.',
        'Use functions like sqrt(, sin(, log( and constants pi, e.',
        'Press = to evaluate; C clears and ⌫ deletes the last character.',
      ],
      example: 'sqrt(16) + 2^3 equals 4 + 8 = 12.',
      assumptions: [
        'Trigonometric functions use radians by default in expressions.',
        'Division by zero or invalid input returns an error.',
      ],
    },
    faq: [
      { q: 'Are trig functions in degrees or radians?', a: 'Expressions use radians. Convert degrees by multiplying with pi/180.' },
      { q: 'Can I use parentheses?', a: 'Yes, parentheses and operator precedence are fully supported.' },
      { q: 'Is my input stored?', a: 'No — evaluation happens entirely on your device.' },
    ],
  },
  {
    slug: 'date-calculator',
    category: 'calculators',
    title: 'Date Calculator',
    description:
      'Calculate the number of days between two dates, or add and subtract days from any date.',
    keywords: ['date calculator', 'days between dates', 'add days to date', 'date difference'],
    icon: '📅',
    component: 'date-calculator',
    related: ['age-calculator', 'time-calculator', 'pregnancy-calculator'],
    content: {
      intro:
        'Find the exact number of days between two calendar dates, or add/subtract a number of days from a start date. Useful for project timelines, deadlines and planning.',
      howTo: [
        'Pick two dates to see the difference in days and weeks.',
        'Or enter a start date and a number of days to add/subtract.',
        'Read the resulting date instantly.',
      ],
      example: 'From Jan 1 to Dec 31 is 364 days (365 in a leap year).',
      assumptions: [
        'Uses the Gregorian calendar.',
        'Counts whole calendar days between dates.',
      ],
    },
    faq: [
      { q: 'Does it include leap years?', a: 'Yes, the calculation is based on real calendar dates.' },
      { q: 'Can I subtract days?', a: 'Yes — enter a negative number of days to go backward.' },
      { q: 'Is it useful for business days?', a: 'It counts all days; for working days you would exclude weekends manually.' },
    ],
  },
  {
    slug: 'time-calculator',
    category: 'calculators',
    title: 'Time Calculator',
    description:
      'Add or subtract time durations (hh:mm:ss) and find the duration between two clock times.',
    keywords: ['time calculator', 'add time', 'time duration', 'hours minutes seconds'],
    icon: '⏱️',
    component: 'time-calculator',
    related: ['date-calculator', 'age-calculator'],
    content: {
      intro:
        'Add or subtract hours, minutes and seconds, and compute the duration between two times of day. Great for scheduling, timesheets and event planning.',
      howTo: [
        'Enter a start time and a duration to add or subtract.',
        'Or enter two clock times to find the duration between them.',
        'Read the result in hh:mm:ss format.',
      ],
      example: '09:00:00 + 2h 30m = 11:30:00.',
      assumptions: [
        'Duration between times assumes the end is later the same day, else +24h.',
        'Input format is hh:mm:ss.',
      ],
    },
    faq: [
      { q: 'What if the end time is earlier?', a: 'The calculator treats it as the next day and adds 24 hours.' },
      { q: 'Can I subtract time?', a: 'Yes, choose the subtract operation with a duration.' },
      { q: 'Does it handle seconds?', a: 'Yes, down to seconds in hh:mm:ss.' },
    ],
  },

  // ----------------------------- MORE CONVERTERS -----------------------------
  {
    slug: 'currency-converter',
    category: 'converters',
    title: 'Currency Converter',
    description:
      'Convert between world currencies with a simple calculator. Educational static rates — not live market data.',
    keywords: ['currency converter', 'money converter', 'exchange rate calculator'],
    icon: '💱',
    component: 'currency-converter',
    related: ['unit-converter', 'percentage-calculator', 'investment-calculator'],
    content: {
      intro:
        'Convert amounts between major world currencies. Rates are static and educational only — they do not reflect live market prices.',
      howTo: [
        'Enter the amount to convert.',
        'Choose the source and target currencies.',
        'Read the converted amount; use Swap to reverse.',
      ],
      example: '100 USD ≈ 92 EUR using the example static rate.',
      assumptions: [
        'Rates are fixed illustrative values, not live feeds.',
        'For real transactions use a live rate source.',
      ],
    },
    faq: [
      { q: 'Are rates live?', a: 'No. They are static examples for learning the conversion math.' },
      { q: 'Which currencies are supported?', a: 'A set of major world currencies including USD, EUR, GBP, JPY, CAD and more.' },
      { q: 'Where do I get live rates?', a: 'Use a financial data provider or your bank for current exchange rates.' },
    ],
  },
  {
    slug: 'markdown-converter',
    category: 'converters',
    title: 'Markdown ↔ HTML Converter',
    description:
      'Convert Markdown to HTML and HTML back to Markdown entirely in your browser. No uploads.',
    keywords: ['markdown to html', 'html to markdown', 'markdown converter', 'md converter'],
    icon: '📝',
    component: 'markdown-converter',
    related: ['json-csv-converter', 'slug-generator', 'text-case-converter'],
    content: {
      intro:
        'Turn Markdown into clean HTML or convert HTML back into Markdown. Everything runs locally in your browser, so your content never leaves your device.',
      howTo: [
        'Select the direction: Markdown → HTML or HTML → Markdown.',
        'Paste your input into the top box.',
        'Press Convert and copy the output.',
      ],
      example: 'Typing "# Hello" produces an <h1>Hello</h1> heading.',
      assumptions: [
        'Supports a common Markdown subset (headings, bold, italic, code, links, lists, quotes, rules).',
        'HTML → Markdown is a best-effort conversion of common tags.',
      ],
    },
    faq: [
      { q: 'Is my text private?', a: 'Yes, all conversion happens in your browser.' },
      { q: 'Which Markdown features work?', a: 'Headings, bold/italic, inline code, links, unordered/ordered lists, blockquotes and horizontal rules.' },
      { q: 'Can it convert full HTML pages?', a: 'It handles HTML fragments; complex pages may need cleanup.' },
    ],
  },
  {
    slug: 'base64-converter',
    category: 'converters',
    title: 'Base64 Encoder / Decoder',
    description:
      'Encode text to Base64 and decode Base64 back to text, with full UTF-8 support, in your browser.',
    keywords: ['base64 encoder', 'base64 decoder', 'base64 converter', 'encode text'],
    icon: '🔣',
    component: 'base64-converter',
    related: ['url-converter', 'json-csv-converter'],
    content: {
      intro:
        'Quickly encode text into Base64 or decode Base64 back into readable text. The tool is UTF-8 safe and runs entirely on your device.',
      howTo: [
        'Choose encode or decode.',
        'Paste your text or Base64 string.',
        'Press Convert and copy the result.',
      ],
      example: 'Hello becomes SGVsbG8= in Base64.',
      assumptions: [
        'Standard Base64 encoding with UTF-8 handling.',
        'Invalid Base64 input will show an error.',
      ],
    },
    faq: [
      { q: 'Is Base64 encryption?', a: 'No, it is an encoding — easily reversed. Never use it to protect secrets.' },
      { q: 'Does it support accents and emojis?', a: 'Yes, UTF-8 handling keeps non-ASCII characters intact.' },
      { q: 'Is my data uploaded?', a: 'No, conversion happens locally in your browser.' },
    ],
  },
  {
    slug: 'url-converter',
    category: 'converters',
    title: 'URL Encoder / Decoder',
    description:
      'Encode text and URLs for safe use in links, and decode URL-encoded strings back to readable text.',
    keywords: ['url encoder', 'url decoder', 'percent encoding', 'encode url'],
    icon: '🔗',
    component: 'url-converter',
    related: ['base64-converter', 'slug-generator'],
    content: {
      intro:
        'Make text safe to use inside URLs by percent-encoding special characters, or decode a URL-encoded string back to its original form.',
      howTo: [
        'Choose encode or decode.',
        'Paste your text or encoded string.',
        'Press Convert and copy the output.',
      ],
      example: 'A space becomes %20; "a & b" becomes a%20%26%20b.',
      assumptions: [
        'Uses standard percent-encoding (encodeURIComponent).',
        'Reserved characters are encoded appropriately.',
      ],
    },
    faq: [
      { q: 'When do I need URL encoding?', a: 'Whenever text with spaces or special characters goes into a query string or path.' },
      { q: 'What gets encoded?', a: 'Spaces, &, =, ?, # and other characters unsafe in URLs.' },
      { q: 'Is this the same as Base64?', a: 'No — it is percent-encoding specifically for URLs.' },
    ],
  },
  {
    slug: 'color-converter',
    category: 'converters',
    title: 'Color Converter',
    description:
      'Convert colors between HEX, RGB and HSL with a live preview. Perfect for design and CSS.',
    keywords: ['color converter', 'hex to rgb', 'rgb to hsl', 'color picker'],
    icon: '🎨',
    component: 'color-converter',
    related: ['unit-converter', 'slug-generator'],
    content: {
      intro:
        'Convert any color between HEX, RGB and HSL formats and see a live preview. Edit any field and the others update automatically.',
      howTo: [
        'Type a HEX value, or enter RGB / HSL values.',
        'Watch the other formats and the preview update live.',
        'Copy the format you need for your project.',
      ],
      example: '#4f46e5 = rgb(79, 70, 229) = hsl(243, 79%, 59%).',
      assumptions: [
        'Standard sRGB color space conversions.',
        'HEX is interpreted as #RRGGBB.',
      ],
    },
    faq: [
      { q: 'What is HSL good for?', a: 'HSL makes it intuitive to lighten, darken or shift hue compared to hex.' },
      { q: 'Why does my color look different?', a: 'Screens render colors differently; values are mathematically exact.' },
      { q: 'Can I paste a 3-digit hex?', a: 'Yes, short hex like #f00 is expanded automatically.' },
    ],
  },
  {
    slug: 'timestamp-converter',
    category: 'converters',
    title: 'Timestamp Converter',
    description:
      'Convert Unix timestamps (seconds or milliseconds) to dates and dates back to timestamps.',
    keywords: ['timestamp converter', 'unix timestamp', 'epoch converter', 'date to timestamp'],
    icon: '⏲️',
    component: 'timestamp-converter',
    related: ['date-calculator', 'time-calculator'],
    content: {
      intro:
        'Translate between Unix epoch timestamps and human-readable dates. Convert both directions and switch between seconds and milliseconds.',
      howTo: [
        'Enter a timestamp with its unit (seconds or milliseconds) to see ISO, UTC and local time.',
        'Or pick a date and time to get the timestamp in both units.',
        'Use “current time” to grab the present epoch.',
      ],
      example: '1700000000 (seconds) = 2023-11-14 22:13:20 UTC.',
      assumptions: [
        'Assumes the standard Unix epoch (1970-01-01 UTC).',
        'Local time depends on your browser timezone.',
      ],
    },
    faq: [
      { q: 'Seconds or milliseconds?', a: 'Both are supported — choose the unit that matches your data.' },
      { q: 'What is Unix time?', a: 'The number of seconds (or ms) since 1970-01-01 00:00:00 UTC.' },
      { q: 'Why do I see a different local time?', a: 'Local display uses your device timezone.' },
    ],
  },

  // ----------------------------- MORE GENERATORS -----------------------------
  {
    slug: 'qr-code-generator',
    category: 'generators',
    title: 'QR Code Generator',
    description:
      'Generate a downloadable QR code for any text or URL, right in your browser. No tracking.',
    keywords: ['qr code generator', 'free qr code', 'qr code maker', 'qr code download'],
    icon: '🔳',
    component: 'qr-code-generator',
    related: ['slug-generator', 'password-generator'],
    content: {
      intro:
        'Create a QR code for a link, contact info or any text and download it as a PNG. Generation happens locally using your browser.',
      howTo: [
        'Type or paste the text or URL.',
        'Choose a size and press Generate.',
        'Download the QR code as a PNG image.',
      ],
      example: 'Paste a URL to make a scannable code for business cards or posters.',
      assumptions: [
        'Generated on-device; nothing is uploaded.',
        'Very long inputs may produce a dense code — test scannability.',
      ],
    },
    faq: [
      { q: 'Is my data sent anywhere?', a: 'No, the QR code is rendered locally in your browser.' },
      { q: 'What can a QR code store?', a: 'URLs, text, contact details and more, up to capacity limits.' },
      { q: 'Can I change colors?', a: 'This simple generator uses standard black-on-white for maximum scannability.' },
    ],
  },
  {
    slug: 'lorem-ipsum-generator',
    category: 'generators',
    title: 'Lorem Ipsum Generator',
    description:
      'Generate placeholder Lorem Ipsum text with customizable paragraphs and sentences for mockups and design.',
    keywords: ['lorem ipsum generator', 'placeholder text', 'dummy text', 'lipsum'],
    icon: '📄',
    component: 'lorem-ipsum-generator',
    related: ['word-counter', 'character-counter'],
    content: {
      intro:
        'Create Lorem Ipsum placeholder text for wireframes, designs and demos. Choose the number of paragraphs and sentences per paragraph.',
      howTo: [
        'Set how many paragraphs and sentences you need.',
        'Optionally start with the classic “Lorem ipsum dolor sit amet”.',
        'Generate and copy the text.',
      ],
      example: '3 paragraphs × 5 sentences gives a realistic block of filler text.',
      assumptions: [
        'Randomized within the classic Lorem Ipsum word bank.',
        'For real content, replace with meaningful copy before launch.',
      ],
    },
    faq: [
      { q: 'What is Lorem Ipsum for?', a: 'It is filler text used to show layout and typography without distracting from design.' },
      { q: 'Can I change the length?', a: 'Yes, control paragraphs and sentences per paragraph.' },
      { q: 'Is it meaningful?', a: 'No — it is intentionally nonsensical placeholder text.' },
    ],
  },
  {
    slug: 'uuid-generator',
    category: 'generators',
    title: 'UUID Generator',
    description:
      'Generate RFC 4122 v4 UUIDs using your browser’s cryptographically secure random generator.',
    keywords: ['uuid generator', 'guid generator', 'random uuid', 'unique id'],
    icon: '🆔',
    component: 'uuid-generator',
    related: ['password-generator', 'random-name-generator'],
    content: {
      intro:
        'Create unique version-4 UUIDs for database keys, API tokens or test data. IDs are generated with a cryptographically secure source.',
      howTo: [
        'Choose how many UUIDs you need.',
        'Press Generate to create them.',
        'Copy the list for use in your project.',
      ],
      example: 'A single UUID looks like 3f1c2b9a-7d4e-4b2a-9c1f-2e8b6d4a1c9f.',
      assumptions: [
        'RFC 4122 v4 using Web Crypto randomness.',
        'Generated locally; not stored or transmitted.',
      ],
    },
    faq: [
      { q: 'What is a UUID?', a: 'A universally unique identifier — a 128-bit value with astronomically low collision odds.' },
      { q: 'Are they truly unique?', a: 'Practically unique; random v4 UUIDs have about 2^122 possible values.' },
      { q: 'Can I use them as primary keys?', a: 'Yes, UUIDs are commonly used as database primary keys.' },
    ],
  },
  {
    slug: 'invoice-pdf-generator',
    category: 'generators',
    title: 'Invoice PDF Generator',
    description:
      'Create and download a professional invoice PDF with line items, tax and totals — no sign-up.',
    keywords: ['invoice generator', 'invoice pdf', 'free invoice', 'make invoice'],
    icon: '🧾',
    component: 'invoice-pdf-generator',
    related: ['percentage-calculator', 'qr-code-generator'],
    content: {
      intro:
        'Build a clean invoice with your details, line items and tax rate, then download it as a PDF. Everything is generated in your browser.',
      howTo: [
        'Enter your business details, client and invoice number.',
        'Add line items with description, quantity and price.',
        'Set a tax rate and download the PDF.',
      ],
      example: 'Two line items plus a 0% tax produce a subtotal, tax and total on the PDF.',
      assumptions: [
        'Totals computed from your inputs (subtotal + tax).',
        'Layout is basic; customize the template for branding.',
      ],
    },
    faq: [
      { q: 'Is my invoice data stored?', a: 'No — the PDF is built locally and downloaded directly.' },
      { q: 'Can I add more line items?', a: 'The template includes three rows; duplicate the row markup to add more.' },
      { q: 'Is this legally binding?', a: 'It produces a document; legal validity depends on your jurisdiction and details.' },
    ],
  },
  {
    slug: 'random-name-generator',
    category: 'generators',
    title: 'Random Name Generator',
    description:
      'Generate random full names (first + last) for tests, characters, samples and placeholders.',
    keywords: ['random name generator', 'fake name generator', 'name picker'],
    icon: '🪪',
    component: 'random-name-generator',
    related: ['uuid-generator', 'password-generator'],
    content: {
      intro:
        'Produce random names by combining first and last names from a sample list. Handy for test data, writing and demos.',
      howTo: [
        'Choose how many names you need.',
        'Press Generate to create them.',
        'Copy the list for your project.',
      ],
      example: 'Generating 10 names yields 10 random “First Last” pairs.',
      assumptions: [
        'Names are randomly combined from sample lists.',
        'Not based on real individuals; for illustration only.',
      ],
    },
    faq: [
      { q: 'Are these real people?', a: 'No, they are randomly assembled from sample name lists.' },
      { q: 'Can I use them in production?', a: 'Yes for test/demo data; avoid implying real identities.' },
      { q: 'How many can I generate?', a: 'Up to 100 at a time.' },
    ],
  },
  {
    slug: 'random-number-generator',
    category: 'generators',
    title: 'Random Number Generator',
    description:
      'Generate one or many random integers within a range — great for picks, samples and games.',
    keywords: ['random number generator', 'random integer', 'pick a number', 'rng'],
    icon: '🎲',
    component: 'random-number-generator',
    related: ['uuid-generator', 'percentage-calculator'],
    content: {
      intro:
        'Draw random integers between any minimum and maximum. Generate a single value or a batch for raffles, sampling and testing.',
      howTo: [
        'Set a minimum and maximum (min ≤ max).',
        'Choose how many numbers to generate.',
        'Press Generate and copy the results.',
      ],
      example: 'Min 1, Max 100, count 5 → five random numbers between 1 and 100.',
      assumptions: [
        'Uniform random distribution within the inclusive range.',
        'Not cryptographically secure — do not use for security keys.',
      ],
    },
    faq: [
      { q: 'Is it fair?', a: 'Numbers are drawn with uniform probability across the range.' },
      { q: 'Can I generate decimals?', a: 'This tool returns integers; for decimals use a similar approach with rounding.' },
      { q: 'Is it secure enough for passwords?', a: 'No — use the Password Generator for secrets.' },
    ],
  },
  {
    slug: 'text-case-converter',
    category: 'generators',
    title: 'Text Case Converter',
    description:
      'Convert text between UPPERCASE, lowercase, Title Case, sentence case, camelCase, snake_case and more.',
    keywords: ['text case converter', 'uppercase lowercase', 'title case', 'camel case'],
    icon: '🔠',
    component: 'text-case-converter',
    related: ['slug-generator', 'word-counter'],
    content: {
      intro:
        'Transform any text into the case you need — uppercase, lowercase, title, sentence, camelCase, snake_case, kebab-case or alternating — with one click.',
      howTo: [
        'Type or paste your text.',
        'Click the case style you want.',
        'Copy the converted output.',
      ],
      example: 'the quick brown fox → The Quick Brown Fox (Title Case).',
      assumptions: [
        'Conversion is text-based and language-agnostic.',
        'Title case capitalizes most words by simple rules.',
      ],
    },
    faq: [
      { q: 'What is camelCase?', a: 'No spaces, first word lowercase, each subsequent word capitalized (e.g. myVariableName).' },
      { q: 'What is the difference between snake and kebab?', a: 'snake_case uses underscores; kebab-case uses hyphens.' },
      { q: 'Is my text uploaded?', a: 'No, conversion runs in your browser.' },
    ],
  },
  {
    slug: 'word-counter',
    category: 'generators',
    title: 'Word Counter',
    description:
      'Count words, characters, sentences and paragraphs in your text with an estimated reading time.',
    keywords: ['word counter', 'character counter', 'word count tool', 'reading time'],
    icon: '🔢',
    component: 'word-counter',
    related: ['character-counter', 'lorem-ipsum-generator'],
    content: {
      intro:
        'Paste any text to get an instant count of words, characters, sentences and paragraphs, plus an estimated reading time. Ideal for essays, articles and SEO.',
      howTo: [
        'Paste or type your text into the box.',
        'See the live statistics update as you type.',
        'Use the counts for editing and length targets.',
      ],
      example: 'A 500-word article has about a 2-minute read.',
      assumptions: [
        'Words split on whitespace; sentences on punctuation.',
        'Reading time uses ~200 words per minute.',
      ],
    },
    faq: [
      { q: 'How is reading time estimated?', a: 'By dividing the word count by an average of 200 words per minute.' },
      { q: 'Does it count punctuation as characters?', a: 'Yes, characters include all typed symbols and spaces.' },
      { q: 'Is it useful for SEO?', a: 'Yes, tracking word counts helps meet content-length goals.' },
    ],
  },
  {
    slug: 'character-counter',
    category: 'generators',
    title: 'Character Counter',
    description:
      'Count characters, characters without spaces, words and lines in any text instantly.',
    keywords: ['character counter', 'char count', 'letter counter', 'character limit'],
    icon: '🔡',
    component: 'character-counter',
    related: ['word-counter', 'text-case-converter'],
    content: {
      intro:
        'Quickly count the characters in your text, including and excluding spaces, plus words and lines. Useful for tweets, meta descriptions and limits.',
      howTo: [
        'Type or paste your text.',
        'See live character counts update.',
        'Use it to stay within length limits.',
      ],
      example: 'A 160-character SMS fits about 160 characters including spaces.',
      assumptions: [
        'Counts every character including spaces and line breaks.',
        '“No spaces” removes whitespace from the total.',
      ],
    },
    faq: [
      { q: 'Why count without spaces?', a: 'Many limits (like SMS or meta tags) care about total characters, but no-space helps compare density.' },
      { q: 'Does it count emojis?', a: 'Emojis count as characters; some may be multiple code points.' },
      { q: 'Is it good for Twitter/X limits?', a: 'Yes, it helps you stay within post character limits.' },
    ],
  },
  {
    slug: 'slug-generator',
    category: 'generators',
    title: 'Slug Generator',
    description:
      'Turn any title or sentence into a clean, URL-friendly slug for posts, pages and filenames.',
    keywords: ['slug generator', 'url slug', 'permalink generator', 'seo slug'],
    icon: '🪧',
    component: 'slug-generator',
    related: ['text-case-converter', 'markdown-converter'],
    content: {
      intro:
        'Convert headings and sentences into SEO-friendly slugs — lowercase, hyphenated and stripped of special characters. Great for permalinks and filenames.',
      howTo: [
        'Type a title or phrase.',
        'Press Generate to create the slug.',
        'Copy it for your URL or file name.',
      ],
      example: '“How to Bake a Cake!” → how-to-bake-a-cake.',
      assumptions: [
        'Lowercases text and replaces non-alphanumerics with hyphens.',
        'Accented characters are normalized to ASCII.',
      ],
    },
    faq: [
      { q: 'What makes a good slug?', a: 'Short, descriptive, lowercase, hyphen-separated and containing your target keyword.' },
      { q: 'Are accented characters kept?', a: 'They are converted to their ASCII equivalents (é → e).' },
      { q: 'Why use hyphens not underscores?', a: 'Search engines treat hyphens as word separators; underscores are not.' },
    ],
  },
];

export function getTool(slug: string): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolMeta[] {
  return tools.filter((t) => t.category === category);
}
