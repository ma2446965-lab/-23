export function percentOf(percent: number, value: number): number {
  return (percent / 100) * value;
}

export function whatPercent(part: number, whole: number): number {
  if (whole === 0) return NaN;
  return (part / whole) * 100;
}

export function amountFromPercent(part: number, percent: number): number {
  if (percent === 0) return NaN;
  return part / (percent / 100);
}

export function percentageChange(oldValue: number, newValue: number): number {
  if (oldValue === 0) return NaN;
  return ((newValue - oldValue) / oldValue) * 100;
}
