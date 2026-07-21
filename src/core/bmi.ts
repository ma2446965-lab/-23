import { round1 } from '../lib/format';

export type BmiUnit = 'metric' | 'imperial';

export interface BmiInput {
  /** Weight in kg (metric) or lb (imperial). */
  weight: number;
  /** Height in cm (metric) or inches (imperial). */
  height: number;
  unit: BmiUnit;
}

export interface BmiResult {
  bmi: number;
  category: string;
  healthyMin: number;
  healthyMax: number;
}

const CATEGORIES: { max: number; label: string }[] = [
  { max: 18.5, label: 'Underweight' },
  { max: 25, label: 'Normal weight' },
  { max: 30, label: 'Overweight' },
  { max: Infinity, label: 'Obese' },
];

export function calcBmi(input: BmiInput): BmiResult {
  let weightKg = input.weight;
  let heightM: number;

  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.45359237;
    heightM = input.height * 0.0254;
  } else {
    heightM = input.height / 100;
  }

  const bmi = weightKg / (heightM * heightM);
  const category = CATEGORIES.find((c) => bmi < c.max)?.label ?? 'Obese';
  const healthyMin = 18.5 * heightM * heightM;
  const healthyMax = 24.9 * heightM * heightM;

  return {
    bmi: round1(bmi),
    category,
    healthyMin: round1(healthyMin),
    healthyMax: round1(healthyMax),
  };
}
