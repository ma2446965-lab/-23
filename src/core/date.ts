const DAY = 86_400_000;

export function dateDifference(a: Date, b: Date): number {
  const ms = b.getTime() - a.getTime();
  return Math.round(ms / DAY);
}

export function addDays(d: Date, days: number): Date {
  return new Date(d.getTime() + days * DAY);
}

export function daysBetween(d1: string, d2: string): number | null {
  const a = new Date(d1 + 'T00:00:00');
  const b = new Date(d2 + 'T00:00:00');
  if (isNaN(a.getTime()) || isNaN(b.getTime())) return null;
  return dateDifference(a, b);
}

export function addDaysToDate(d: string, days: number): string | null {
  const a = new Date(d + 'T00:00:00');
  if (isNaN(a.getTime())) return null;
  return addDays(a, days).toISOString().slice(0, 10);
}
