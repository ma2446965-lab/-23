import { round2 } from '../lib/format';

export interface RetirementInput {
  currentAge: number;
  retirementAge: number;
  currentSavings: number;
  monthlyContribution: number;
  annualReturn: number; // percent
}

export interface RetirementResult {
  yearsToRetire: number;
  totalContributed: number;
  totalInterest: number;
  projectedBalance: number;
  monthlyAtRetirement: number; // 4% safe-withdrawal rule
  yearlyAtRetirement: number;
}

/** Project retirement savings using future-value of a lump sum + monthly annuity. */
export function calcRetirement(input: RetirementInput): RetirementResult {
  const years = Math.max(0, input.retirementAge - input.currentAge);
  const months = years * 12;
  const r = input.annualReturn / 100 / 12;

  const fvCurrent = r === 0 ? input.currentSavings : input.currentSavings * Math.pow(1 + r, months);
  const fvContrib =
    r === 0 ? input.monthlyContribution * months : input.monthlyContribution * ((Math.pow(1 + r, months) - 1) / r);

  const projectedBalance = fvCurrent + fvContrib;
  const totalContributed = input.currentSavings + input.monthlyContribution * months;
  const totalInterest = projectedBalance - totalContributed;
  const yearlyAtRetirement = projectedBalance * 0.04; // 4% rule

  return {
    yearsToRetire: years,
    totalContributed: round2(totalContributed),
    totalInterest: round2(totalInterest),
    projectedBalance: round2(projectedBalance),
    monthlyAtRetirement: round2(yearlyAtRetirement / 12),
    yearlyAtRetirement: round2(yearlyAtRetirement),
  };
}
