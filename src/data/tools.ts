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
];

export function getTool(slug: string): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: string): ToolMeta[] {
  return tools.filter((t) => t.category === category);
}
