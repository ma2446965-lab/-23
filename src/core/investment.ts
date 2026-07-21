import { round2 } from '../lib/format';

export interface InvestmentInput {
  initial: number;
  monthlyContribution: number;
  annualReturn: number; // percent
  years: number;
}

export interface InvestmentYearRow {
  year: number;
  contributed: number;
  interest: number;
  balance: number;
}

export interface InvestmentResult {
  futureValue: number;
  totalContributed: number;
  totalInterest: number;
  byYear: InvestmentYearRow[];
}

/** Project the growth of a lump-sum investment with optional monthly contributions. */
export function calcInvestment(input: InvestmentInput): InvestmentResult {
  const r = input.annualReturn / 100 / 12;
  const months = Math.round(input.years * 12);
  const pmt = input.monthlyContribution;

  let balance = input.initial;
  let contributed = input.initial;
  let interestAcc = 0;
  const byYear: InvestmentYearRow[] = [];

  for (let m = 1; m <= months; m++) {
    const interest = balance * r;
    balance = balance + interest + pmt;
    contributed += pmt;
    interestAcc += interest;
    if (m % 12 === 0) {
      byYear.push({
        year: m / 12,
        contributed: round2(contributed),
        interest: round2(interestAcc),
        balance: round2(balance),
      });
    }
  }

  return {
    futureValue: round2(balance),
    totalContributed: round2(contributed),
    totalInterest: round2(interestAcc),
    byYear,
  };
}
