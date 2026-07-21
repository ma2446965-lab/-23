import { round2 } from '../lib/format';

export type FilingStatus = 'single';

export interface Bracket {
  upTo: number; // upper bound (Infinity for top)
  rate: number; // decimal, e.g. 0.22
}

export interface StateDef {
  name: string;
  flat?: number; // decimal flat rate
  brackets?: Bracket[];
}

// Simplified U.S. federal brackets (single filer, illustrative recent-year values).
export const FEDERAL_BRACKETS: Bracket[] = [
  { upTo: 11000, rate: 0.1 },
  { upTo: 44725, rate: 0.12 },
  { upTo: 95375, rate: 0.22 },
  { upTo: 182100, rate: 0.24 },
  { upTo: 231250, rate: 0.32 },
  { upTo: 578125, rate: 0.35 },
  { upTo: Infinity, rate: 0.37 },
];

// Representative state income-tax schemes (illustrative, not live/legal data).
export const STATES: Record<string, StateDef> = {
  none: { name: 'No state income tax', flat: 0 },
  CA: {
    name: 'California',
    brackets: [
      { upTo: 10099, rate: 0.01 },
      { upTo: 23942, rate: 0.02 },
      { upTo: 37788, rate: 0.04 },
      { upTo: 52455, rate: 0.06 },
      { upTo: 66295, rate: 0.08 },
      { upTo: 338689, rate: 0.093 },
      { upTo: 406364, rate: 0.103 },
      { upTo: 677275, rate: 0.113 },
      { upTo: Infinity, rate: 0.123 },
    ],
  },
  NY: {
    name: 'New York',
    brackets: [
      { upTo: 8500, rate: 0.04 },
      { upTo: 11700, rate: 0.045 },
      { upTo: 13900, rate: 0.0525 },
      { upTo: 80650, rate: 0.055 },
      { upTo: 215400, rate: 0.06 },
      { upTo: 1077550, rate: 0.0685 },
      { upTo: 5000000, rate: 0.0965 },
      { upTo: Infinity, rate: 0.103 },
    ],
  },
  IL: { name: 'Illinois', flat: 0.0495 },
  PA: { name: 'Pennsylvania', flat: 0.0307 },
  MA: { name: 'Massachusetts', flat: 0.05 },
  NJ: { name: 'New Jersey', flat: 0.0575 },
  GA: { name: 'Georgia', flat: 0.0549 },
  NC: { name: 'North Carolina', flat: 0.0475 },
  OH: { name: 'Ohio', flat: 0.0399 },
  AZ: { name: 'Arizona', flat: 0.025 },
  CO: { name: 'Colorado', flat: 0.044 },
  TX: { name: 'Texas', flat: 0 },
  FL: { name: 'Florida', flat: 0 },
  WA: { name: 'Washington', flat: 0 },
};

export function listStates(): { code: string; name: string }[] {
  return Object.entries(STATES).map(([code, def]) => ({ code, name: def.name }));
}

function bracketTax(taxable: number, brackets: Bracket[]): number {
  let tax = 0;
  let lower = 0;
  for (const b of brackets) {
    if (taxable <= lower) break;
    const taxableInBracket = Math.min(taxable, b.upTo) - lower;
    if (taxableInBracket > 0) tax += taxableInBracket * b.rate;
    lower = b.upTo;
  }
  return tax;
}

export interface TaxInput {
  income: number;
  state: string; // code from STATES
}

export interface TaxResult {
  federal: number;
  state: number;
  total: number;
  effectiveRate: number;
}

/** Estimate U.S. federal + state income tax (single filer, illustrative brackets). */
export function calcTax(input: TaxInput): TaxResult {
  const income = Math.max(0, input.income);
  const federal = bracketTax(income, FEDERAL_BRACKETS);

  const stateDef = STATES[input.state] ?? STATES.none!;
  const state = stateDef.flat !== undefined ? income * stateDef.flat : bracketTax(income, stateDef.brackets ?? []);

  const total = federal + state;
  return {
    federal: round2(federal),
    state: round2(state),
    total: round2(total),
    effectiveRate: income > 0 ? round2((total / income) * 100) : 0,
  };
}
