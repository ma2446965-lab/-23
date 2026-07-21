/**
 * EDUCATIONAL, STATIC exchange rates — NOT live market data.
 * Used only to demonstrate currency conversion math.
 */
export const CURRENCY_RATES: Record<string, number> = {
  USD: 1,
  EUR: 0.92,
  GBP: 0.79,
  JPY: 155.3,
  CAD: 1.36,
  AUD: 1.52,
  CHF: 0.9,
  CNY: 7.24,
  INR: 83.3,
  MXN: 17.1,
  BRL: 5.05,
  ZAR: 18.7,
  SGD: 1.34,
  HKD: 7.82,
};

export function listCurrencies(): string[] {
  return Object.keys(CURRENCY_RATES);
}

export function convertCurrency(amount: number, from: string, to: string): number {
  const rf = CURRENCY_RATES[from];
  const rt = CURRENCY_RATES[to];
  if (!rf || !rt) throw new Error('Unsupported currency');
  return (amount / rf) * rt;
}
