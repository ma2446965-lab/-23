import { round2 } from '../lib/format';

export interface CompoundInput {
  principal: number;
  monthlyContribution: number;
  /** Annual interest rate as a percentage. */
  annualRate: number;
  years: number;
  /** Compounding frequency per year (default 12 = monthly). */
  compoundsPerYear?: number;
}

export interface CompoundYearRow {
  year: number;
  contributions: number;
  interest: number;
  balance: number;
}

export interface CompoundResult {
  futureValue: number;
  totalContributions: number;
  totalInterest: number;
  byYear: CompoundYearRow[];
}

/** Future value of a lump sum plus recurring monthly contributions. */
export function calcCompoundInterest(input: CompoundInput): CompoundResult {
  const P = Math.max(0, input.principal);
  const PMT = Math.max(0, input.monthlyContribution);
  const annual = input.annualRate / 100;
  const n = input.compoundsPerYear && input.compoundsPerYear > 0 ? input.compoundsPerYear : 12;
  const t = Math.max(0, input.years);

  const r = annual / n; // periodic rate
  const periods = Math.round(n * t);
  const contribPerPeriod = PMT * (12 / n); // monthly contribution spread per period

  let bal = P;
  let totalContrib = P;
  let interestAcc = 0;
  const byYear: CompoundYearRow[] = [];

  for (let p = 1; p <= periods; p++) {
    const interest = bal * r;
    bal = bal + interest + contribPerPeriod;
    totalContrib += contribPerPeriod;
    interestAcc += interest;
    if (p % n === 0) {
      byYear.push({
        year: p / n,
        contributions: round2(totalContrib),
        interest: round2(interestAcc),
        balance: round2(bal),
      });
    }
  }

  const futureValue = round2(bal);
  const totalContributions = round2(totalContrib);
  const totalInterest = round2(interestAcc);

  return { futureValue, totalContributions, totalInterest, byYear };
}
