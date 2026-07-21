import { describe, it, expect } from 'vitest';
import { calcRetirement } from '../retirement';
import { calcInvestment } from '../investment';
import { calcTax } from '../tax';
import { calcCalories } from '../calorie';
import { calcPregnancy } from '../pregnancy';
import { evaluateExpression } from '../scientific';
import { daysBetween } from '../date';
import { parseTime, durationBetween, combineTime, formatTime } from '../time';
import { convertCurrency } from '../currency';
import { encodeBase64, decodeBase64 } from '../base64';
import { hexToRgb, rgbToHex, rgbToHsl } from '../color';
import { dateToTimestamp, timestampToDate } from '../timestamp';
import { slugify } from '../slug';
import { toKebabCase, toSnakeCase, toCamelCase, toUpperCase } from '../text-case';
import { analyzeText } from '../word-counter';
import { calcInvoice } from '../invoice';
import { generateUuid } from '../uuid';
import { markdownToHtml } from '../markdown';

describe('retirement', () => {
  it('projects a positive balance and 35 years', () => {
    const r = calcRetirement({ currentAge: 30, retirementAge: 65, currentSavings: 10000, monthlyContribution: 500, annualReturn: 7 });
    expect(r.yearsToRetire).toBe(35);
    expect(r.projectedBalance).toBeGreaterThan(0);
    expect(r.totalInterest).toBeGreaterThan(0);
  });
});

describe('investment', () => {
  it('grows and produces yearly rows', () => {
    const r = calcInvestment({ initial: 5000, monthlyContribution: 200, annualReturn: 8, years: 20 });
    expect(r.futureValue).toBeGreaterThan(5000);
    expect(r.byYear.length).toBe(20);
  });
});

describe('tax', () => {
  it('estimates federal + CA state tax', () => {
    const r = calcTax({ income: 75000, state: 'CA' });
    expect(r.federal).toBeCloseTo(11807.5, 1);
    expect(r.state).toBeGreaterThan(0);
    expect(r.effectiveRate).toBeGreaterThan(0);
  });
});

describe('calorie', () => {
  it('computes BMR via Mifflin-St Jeor', () => {
    const r = calcCalories({ weight: 70, height: 175, age: 30, gender: 'male', unit: 'metric', activity: 'moderate' });
    expect(r.bmr).toBeCloseTo(1648.75, 1);
    expect(r.tdee).toBeCloseTo(2555.6, 1);
  });
});

describe('pregnancy', () => {
  it('due date ~280 days after LMP', () => {
    const r = calcPregnancy(new Date('2025-01-01T00:00:00'));
    expect(r.dueDate >= '2025-10-07' && r.dueDate <= '2025-10-09').toBe(true);
    expect(r.conceptionDate >= '2025-01-14' && r.conceptionDate <= '2025-01-16').toBe(true);
  });
});

describe('scientific', () => {
  it('evaluates expressions', () => {
    expect(evaluateExpression('2 + 2 * 3')).toBe(8);
    expect(evaluateExpression('2 ^ 8')).toBe(256);
    expect(evaluateExpression('sqrt(16) + 2 ^ 3')).toBe(12);
    expect(evaluateExpression('10 - 3')).toBe(7);
    expect(evaluateExpression('-(2 + 3)')).toBe(-5);
    expect(evaluateExpression('pi')).toBeCloseTo(Math.PI, 5);
  });
});

describe('date', () => {
  it('counts days between dates (TZ-independent)', () => {
    expect(daysBetween('2025-01-01', '2025-12-31')).toBe(364);
  });
});

describe('time', () => {
  it('parses, combines and finds duration', () => {
    expect(parseTime('09:00:00')).toEqual({ h: 9, m: 0, s: 0 });
    expect(combineTime({ h: 9, m: 0, s: 0 }, { h: 2, m: 30, s: 0 }, '+')).toEqual({ h: 11, m: 30, s: 0 });
    expect(durationBetween({ h: 9, m: 0, s: 0 }, { h: 17, m: 30, s: 0 })).toEqual({ h: 8, m: 30, s: 0 });
    expect(formatTime({ h: 11, m: 30, s: 0 })).toBe('11:30:00');
  });
});

describe('currency', () => {
  it('converts using static rates', () => {
    expect(convertCurrency(100, 'USD', 'EUR')).toBeCloseTo(92, 1);
    expect(convertCurrency(100, 'EUR', 'USD')).toBeCloseTo(108.7, 1);
  });
});

describe('base64', () => {
  it('round-trips UTF-8 text', () => {
    expect(encodeBase64('Hello')).toBe('SGVsbG8=');
    expect(decodeBase64('SGVsbG8=')).toBe('Hello');
    const s = 'café 🚀';
    expect(decodeBase64(encodeBase64(s))).toBe(s);
  });
});

describe('color', () => {
  it('converts hex/rgb/hsl', () => {
    expect(hexToRgb('#ff0000')).toEqual({ r: 255, g: 0, b: 0 });
    expect(rgbToHex(255, 0, 0)).toBe('#FF0000');
    const hsl = rgbToHsl(255, 0, 0);
    expect(hsl.h).toBe(0);
    expect(hsl.s).toBe(100);
    expect(hsl.l).toBe(50);
  });
});

describe('timestamp', () => {
  it('converts epoch correctly', () => {
    expect(dateToTimestamp(new Date('1970-01-01T00:00:00Z'), false)).toBe(0);
    expect(timestampToDate(0, false).iso).toBe('1970-01-01T00:00:00.000Z');
  });
});

describe('slug', () => {
  it('slugifies text', () => {
    expect(slugify('How to Bake a Cake!')).toBe('how-to-bake-a-cake');
    expect(slugify('Café Déjà')).toBe('cafe-deja');
  });
});

describe('text case', () => {
  it('transforms case', () => {
    expect(toUpperCase('a')).toBe('A');
    expect(toKebabCase('Hello World')).toBe('hello-world');
    expect(toSnakeCase('Hello World')).toBe('hello_world');
    expect(toCamelCase('hello world')).toBe('helloWorld');
  });
});

describe('word counter', () => {
  it('counts words and sentences', () => {
    const s = analyzeText('Hello world. This is a test.');
    expect(s.words).toBe(6);
    expect(s.sentences).toBe(2);
  });
});

describe('invoice', () => {
  it('computes subtotal, tax and total', () => {
    const t = calcInvoice([{ description: 'x', qty: 2, price: 10 }, { description: 'y', qty: 1, price: 5 }], 10);
    expect(t.subtotal).toBe(25);
    expect(t.tax).toBe(2.5);
    expect(t.total).toBe(27.5);
  });
});

describe('uuid', () => {
  it('generates a valid v4 UUID', () => {
    const u = generateUuid();
    expect(u).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/);
  });
});

describe('markdown', () => {
  it('converts headings and bold', () => {
    expect(markdownToHtml('# Hi')).toContain('<h1>Hi</h1>');
    expect(markdownToHtml('a **b** c')).toContain('<strong>b</strong>');
  });
});
