import { round2 } from '../lib/format';

export interface MortgageInput {
  /** Home price in currency units. */
  price: number;
  /** Down payment — amount or percent depending on `downPaymentIsPercent`. */
  downPayment: number;
  downPaymentIsPercent: boolean;
  /** Annual interest rate as a percentage, e.g. 6.5 for 6.5%. */
  annualRate: number;
  /** Loan term in years, e.g. 30. */
  termYears: number;
  /** Yearly property tax. */
  propertyTaxYear?: number;
  /** Yearly home insurance. */
  homeInsuranceYear?: number;
  /** Yearly private mortgage insurance. */
  pmiYear?: number;
  /** Monthly homeowners association fee. */
  hoaMonth?: number;
}

export interface AmortizationRow {
  month: number;
  payment: number;
  principal: number;
  interest: number;
  balance: number;
}

export interface MortgageResult {
  loanAmount: number;
  downPaymentAmount: number;
  monthlyPrincipalInterest: number;
  monthlyTax: number;
  monthlyInsurance: number;
  monthlyPMI: number;
  monthlyHOA: number;
  monthlyTotal: number;
  totalInterest: number;
  totalPaid: number;
  schedule: AmortizationRow[];
}

/**
 * Standard fixed-rate mortgage calculation with full amortization schedule.
 * Uses the standard formula: M = P * r / (1 - (1 + r)^-n).
 */
export function calcMortgage(input: MortgageInput): MortgageResult {
  const price = Math.max(0, input.price);
  const down = input.downPaymentIsPercent
    ? price * (input.downPayment / 100)
    : input.downPayment;
  const loanAmount = Math.max(0, price - down);

  const r = input.annualRate / 100 / 12;
  const n = Math.max(1, Math.round(input.termYears * 12));

  let mpi: number;
  if (r === 0) {
    mpi = loanAmount / n;
  } else {
    mpi = (loanAmount * r) / (1 - Math.pow(1 + r, -n));
  }
  mpi = round2(mpi);

  const monthlyTax = (input.propertyTaxYear ?? 0) / 12;
  const monthlyInsurance = (input.homeInsuranceYear ?? 0) / 12;
  const monthlyPMI = (input.pmiYear ?? 0) / 12;
  const monthlyHOA = input.hoaMonth ?? 0;
  const monthlyTotal = round2(mpi + monthlyTax + monthlyInsurance + monthlyPMI + monthlyHOA);

  const schedule: AmortizationRow[] = [];
  let balance = loanAmount;
  let totalInterest = 0;
  for (let m = 1; m <= n; m++) {
    const interest = balance * r;
    let principal = mpi - interest;
    if (m === n) principal = balance; // final payment clears remainder
    balance = Math.max(0, balance - principal);
    totalInterest += interest;
    schedule.push({
      month: m,
      payment: mpi,
      principal: round2(principal),
      interest: round2(interest),
      balance: round2(balance),
    });
  }

  const totalPaid = round2(
    mpi * n + monthlyTax * n + monthlyInsurance * n + monthlyPMI * n + monthlyHOA * n,
  );

  return {
    loanAmount: round2(loanAmount),
    downPaymentAmount: round2(down),
    monthlyPrincipalInterest: mpi,
    monthlyTax: round2(monthlyTax),
    monthlyInsurance: round2(monthlyInsurance),
    monthlyPMI: round2(monthlyPMI),
    monthlyHOA: round2(monthlyHOA),
    monthlyTotal,
    totalInterest: round2(totalInterest),
    totalPaid,
    schedule,
  };
}
