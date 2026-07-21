import { round1, round2 } from '../lib/format';

export type CalorieUnit = 'metric' | 'imperial';
export type Gender = 'male' | 'female';
export type ActivityLevel = 'sedentary' | 'light' | 'moderate' | 'active' | 'very';

export interface CalorieInput {
  weight: number;
  height: number;
  age: number;
  gender: Gender;
  unit: CalorieUnit;
  activity: ActivityLevel;
}

export interface CalorieResult {
  bmr: number;
  tdee: number;
  maintain: number;
  lose: number; // 0.8× TDEE
  gain: number; // 1.15× TDEE
}

const ACTIVITY_FACTOR: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very: 1.9,
};

/** BMR via Mifflin–St Jeor equation, then TDEE with an activity multiplier. */
export function calcCalories(input: CalorieInput): CalorieResult {
  let weightKg = input.weight;
  let heightCm = input.height;
  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.45359237;
    heightCm = input.height * 2.54;
  }

  const base = 10 * weightKg + 6.25 * heightCm - 5 * input.age;
  const bmr = input.gender === 'male' ? base + 5 : base - 161;
  const tdee = bmr * ACTIVITY_FACTOR[input.activity];

  return {
    bmr: round2(bmr),
    tdee: round2(tdee),
    maintain: round2(tdee),
    lose: round2(tdee * 0.8),
    gain: round2(tdee * 1.15),
  };
}

export function bmiFromCalorieInput(input: CalorieInput): number {
  let weightKg = input.weight;
  let heightCm = input.height;
  if (input.unit === 'imperial') {
    weightKg = input.weight * 0.45359237;
    heightCm = input.height * 2.54;
  }
  return round1(weightKg / Math.pow(heightCm / 100, 2));
}
