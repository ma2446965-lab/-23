export type TempUnit = 'C' | 'F' | 'K';

export const TEMP_LABELS: Record<TempUnit, string> = {
  C: 'Celsius (°C)',
  F: 'Fahrenheit (°F)',
  K: 'Kelvin (K)',
};

/** Convert a temperature value between Celsius, Fahrenheit and Kelvin. */
export function convertTemperature(value: number, from: TempUnit, to: TempUnit): number {
  if (from === to) return value;

  let c: number;
  if (from === 'C') c = value;
  else if (from === 'F') c = ((value - 32) * 5) / 9;
  else c = value - 273.15; // Kelvin → Celsius

  if (to === 'C') return c;
  if (to === 'F') return (c * 9) / 5 + 32;
  return c + 273.15; // → Kelvin
}
