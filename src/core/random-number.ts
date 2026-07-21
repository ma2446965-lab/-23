export function randomInt(min: number, max: number): number {
  const lo = Math.ceil(Math.min(min, max));
  const hi = Math.floor(Math.max(min, max));
  return Math.floor(Math.random() * (hi - lo + 1)) + lo;
}

export function randomFloat(min: number, max: number, decimals = 2): number {
  const lo = Math.min(min, max);
  const hi = Math.max(min, max);
  const f = Math.pow(10, decimals);
  return Math.round((Math.random() * (hi - lo) + lo) * f) / f;
}
