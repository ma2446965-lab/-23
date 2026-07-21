import { round2 } from '../lib/format';

export interface LoanInput {
  amount: number;
  /** Annual interest rate as a percentage. */
  annualRate: number;
  termYears: number;
  /** Optional extra principal paid each month. */
  extraMonthly?: number;
}

export interface LoanRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  extra: number;
  balance: number;
}

export interface LoanResult {
  monthlyPayment: number;
  totalInterest: number;
  totalPaid: number;
  payoffMonths: number;
  schedule: LoanRow[];
}

/** Amortizing loan with optional extra monthly principal payments. */
export function calcLoan(input: LoanInput): LoanResult {
  const r = input.annualRate / 100 / 12;
  const n = Math.max(1, Math.round(input.termYears * 12));
  const extra = input.extraMonthly ?? 0;

  let base: number;
  if (r === 0) {
    base = input.amount / n;
  } else {
    base = (input.amount * r) / (1 - Math.pow(1 + r, -n));
  }
  base = round2(base);

  const schedule: LoanRow[] = [];
  let balance = Math.max(0, input.amount);
  let totalInterest = 0;
  let totalPaid = 0;
  let m = 0;
  // guard against runaway loops when extra payments are large
  while (balance > 0.005 && m < n + 1200) {
    m++;
    const interest = balance * r;
    let principal = base - interest + extra;
    let payment = base + extra;
    if (principal >= balance) {
      principal = balance;
      payment = balance + interest;
    }
    balance = Math.max(0, balance - principal);
    totalInterest += interest;
    totalPaid += payment;
    schedule.push({
      month: m,
      payment: round2(payment),
      principal: round2(principal),
      interest: round2(interest),
      extra: round2(extra),
      balance: round2(balance),
    });
  }

  return {
    monthlyPayment: base,
    totalInterest: round2(totalInterest),
    totalPaid: round2(totalPaid),
    payoffMonths: m,
    schedule,
  };
}
