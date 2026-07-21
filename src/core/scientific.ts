/**
 * Safe mathematical expression evaluator for the scientific calculator.
 * Supports + - * / ^, parentheses, constants (pi, e) and functions
 * (sin, cos, tan, asin, acos, atan, sqrt, log, ln, exp, abs).
 * Uses shunting-yard; never eval()s raw input.
 */

const FUNCTIONS: Record<string, (x: number) => number> = {
  sin: Math.sin,
  cos: Math.cos,
  tan: Math.tan,
  asin: Math.asin,
  acos: Math.acos,
  atan: Math.atan,
  sqrt: Math.sqrt,
  log: Math.log10,
  ln: Math.log,
  exp: Math.exp,
  abs: Math.abs,
};

const CONSTANTS: Record<string, number> = { pi: Math.PI, e: Math.E };

const PRECEDENCE: Record<string, number> = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
const RIGHT_ASSOC = new Set(['^']);

function tokenize(expr: string): string[] {
  const e = expr.toLowerCase().replace(/\s+/g, '');
  const tokens: string[] = [];
  let i = 0;
  while (i < e.length) {
    const c = e[i]!;
    if (/[0-9.]/.test(c)) {
      let num = '';
      while (i < e.length && /[0-9.]/.test(e[i]!)) {
        num += e[i];
        i++;
      }
      tokens.push(num);
      continue;
    }
    if (/[a-z]/.test(c)) {
      let name = '';
      while (i < e.length && /[a-z]/.test(e[i]!)) {
        name += e[i];
        i++;
      }
      tokens.push(name);
      continue;
    }
    if ('+-*/^()'.includes(c)) {
      tokens.push(c);
      i++;
      continue;
    }
    i++; // ignore unknown chars
  }
  return tokens;
}

function toPostfix(tokens: string[]): string[] {
  const output: string[] = [];
  const stack: string[] = [];
  let prev = '';

  for (const tok of tokens) {
    if (/^[0-9.]+$/.test(tok) || tok in CONSTANTS) {
      output.push(tok);
    } else if (tok in FUNCTIONS) {
      stack.push(tok);
    } else if (tok === ',') {
      while (stack.length && stack[stack.length - 1] !== '(') output.push(stack.pop()!);
    } else if (tok in PRECEDENCE) {
      let op = tok;
      // unary minus / plus
      if ((op === '-' || op === '+') && (prev === '' || prev in PRECEDENCE || prev === '(')) {
        op = op === '-' ? 'u' : 'p';
        stack.push(op);
      } else {
        while (
          stack.length &&
          stack[stack.length - 1] !== '(' &&
          stack[stack.length - 1]! in PRECEDENCE &&
          (RIGHT_ASSOC.has(op)
            ? PRECEDENCE[stack[stack.length - 1]!]! > PRECEDENCE[op]
            : PRECEDENCE[stack[stack.length - 1]!]! >= PRECEDENCE[op])
        ) {
          output.push(stack.pop()!);
        }
        stack.push(op);
      }
    } else if (tok === '(') {
      stack.push(tok);
    } else if (tok === ')') {
      while (stack.length && stack[stack.length - 1] !== '(') output.push(stack.pop()!);
      stack.pop(); // remove '('
      if (stack.length && stack[stack.length - 1]! in FUNCTIONS) output.push(stack.pop()!);
    }
    prev = tok;
  }
  while (stack.length) output.push(stack.pop()!);
  return output;
}

export function evaluateExpression(expr: string): number {
  const tokens = tokenize(expr);
  const postfix = toPostfix(tokens);
  const stack: number[] = [];

  for (const tok of postfix) {
    if (/^[0-9.]+$/.test(tok)) {
      stack.push(parseFloat(tok));
    } else if (tok in CONSTANTS) {
      stack.push(CONSTANTS[tok]!);
    } else if (tok === 'u') {
      stack.push(-(stack.pop() ?? 0));
    } else if (tok === 'p') {
      // unary plus: no-op
    } else if (tok in FUNCTIONS) {
      const fn = FUNCTIONS[tok]!;
      stack.push(fn(stack.pop() ?? 0));
    } else if (tok in PRECEDENCE) {
      const b = stack.pop() ?? 0;
      const a = stack.pop() ?? 0;
      switch (tok) {
        case '+':
          stack.push(a + b);
          break;
        case '-':
          stack.push(a - b);
          break;
        case '*':
          stack.push(a * b);
          break;
        case '/':
          stack.push(a / b);
          break;
        case '^':
          stack.push(Math.pow(a, b));
          break;
      }
    }
  }
  const result = stack.pop();
  if (result === undefined || !Number.isFinite(result)) {
    throw new Error('Invalid expression');
  }
  return result;
}
