import { describe, it, expect } from 'vitest';
import { calcMortgage } from '../mortgage';
import { calcLoan } from '../loan';
import { calcCompoundInterest } from '../compound-interest';
import { calcBmi } from '../bmi';
import { calcAge } from '../age';
import { percentOf, whatPercent, amountFromPercent, percentageChange } from '../percentage';
import { convertUnit } from '../unit-converter';
import { convertTemperature } from '../temperature';
import { jsonToCsv, csvToJson } from '../json-csv';
import { generatePassword } from '../password';

describe('mortgage', () => {
  it('computes monthly P&I for a standard 30y loan', () => {
    const r = calcMortgage({
      price: 300000,
      downPayment: 20,
      downPaymentIsPercent: true,
      annualRate: 6,
      termYears: 30,
    });
    expect(r.loanAmount).toBe(240000);
    expect(r.monthlyPrincipalInterest).toBeCloseTo(1438.92, 1);
    expect(r.schedule.length).toBe(360);
    expect(r.schedule[r.schedule.length - 1]!.balance).toBe(0);
  });
});

describe('loan', () => {
  it('amortizes with extra payments shortening term', () => {
    const base = calcLoan({ amount: 10000, annualRate: 5, termYears: 5 });
    const extra = calcLoan({ amount: 10000, annualRate: 5, termYears: 5, extraMonthly: 200 });
    expect(extra.payoffMonths).toBeLessThan(base.payoffMonths);
    expect(extra.totalInterest).toBeLessThan(base.totalInterest);
  });
});

describe('compound interest', () => {
  it('matches hand-computed future value', () => {
    const r = calcCompoundInterest({
      principal: 1000,
      monthlyContribution: 100,
      annualRate: 6,
      years: 1,
      compoundsPerYear: 12,
    });
    expect(r.futureValue).toBeCloseTo(2295.24, 1);
    expect(r.byYear.length).toBe(1);
  });
});

describe('bmi', () => {
  it('classifies normal weight (metric)', () => {
    const r = calcBmi({ weight: 70, height: 175, unit: 'metric' });
    expect(r.bmi).toBeCloseTo(22.9, 1);
    expect(r.category).toBe('Normal weight');
  });
  it('handles imperial units', () => {
    const r = calcBmi({ weight: 154, height: 69, unit: 'imperial' });
    expect(r.bmi).toBeGreaterThan(21);
    expect(r.bmi).toBeLessThan(24);
  });
});

describe('age', () => {
  it('computes years/months/days', () => {
    const birth = new Date(1990, 0, 1); // Jan 1 1990
    const now = new Date(2020, 0, 1); // Jan 1 2020
    const r = calcAge(birth, now);
    expect(r.years).toBe(30);
    expect(r.months).toBe(0);
    expect(r.days).toBe(0);
    expect(r.totalDays).toBe(30 * 365 + 7); // 7 leap days in range
  });
});

describe('percentage', () => {
  it('basic operations', () => {
    expect(percentOf(20, 50)).toBe(10);
    expect(whatPercent(25, 200)).toBe(12.5);
    expect(amountFromPercent(50, 25)).toBe(200);
    expect(percentageChange(100, 150)).toBe(50);
  });
});

describe('unit converter', () => {
  it('converts length and weight', () => {
    expect(convertUnit(1, 'length', 'km', 'm')).toBe(1000);
    expect(convertUnit(1, 'weight', 'lb', 'kg')).toBeCloseTo(0.45359237, 6);
  });
});

describe('temperature', () => {
  it('converts between scales', () => {
    expect(convertTemperature(100, 'C', 'F')).toBeCloseTo(212, 6);
    expect(convertTemperature(32, 'F', 'C')).toBeCloseTo(0, 6);
    expect(convertTemperature(0, 'C', 'K')).toBeCloseTo(273.15, 6);
  });
});

describe('json <-> csv', () => {
  it('round-trips objects', () => {
    const data = [
      { name: 'A', age: 1 },
      { name: 'B', age: 2 },
    ];
    const csv = jsonToCsv(data);
    expect(csv.split('\n')[0]).toBe('name,age');
    const back = csvToJson(csv) as Record<string, string>[];
    expect(back[0]!.name).toBe('A');
  });
  it('handles quoted fields with commas', () => {
    const csv = jsonToCsv([{ note: 'hello, world' }]);
    expect(csv).toContain('"hello, world"');
  });
});

describe('password', () => {
  it('respects length and includes required sets', () => {
    const r = generatePassword({
      length: 16,
      uppercase: true,
      lowercase: true,
      numbers: true,
      symbols: false,
      excludeSimilar: false,
    });
    expect(r.password.length).toBe(16);
    expect(r.entropyBits).toBeGreaterThan(0);
    expect(/[A-Z]/.test(r.password)).toBe(true);
    expect(/[0-9]/.test(r.password)).toBe(true);
  });
});
