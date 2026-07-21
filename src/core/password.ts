export interface PasswordOptions {
  length: number;
  uppercase: boolean;
  lowercase: boolean;
  numbers: boolean;
  symbols: boolean;
  excludeSimilar: boolean;
}

export interface PasswordResult {
  password: string;
  entropyBits: number;
  strength: 'Weak' | 'Fair' | 'Strong' | 'Very Strong';
}

const SETS = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{};:,.?/',
};

const SIMILAR = new Set(['i', 'l', '1', 'I', 'o', 'O', '0', '|', '`']);

function removeSimilar(s: string): string {
  return s
    .split('')
    .filter((c) => !SIMILAR.has(c))
    .join('');
}

function shuffle(s: string, rng: () => number): string {
  const a = s.split('');
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    const tmp = a[i]!;
    a[i] = a[j]!;
    a[j] = tmp;
  }
  return a.join('');
}

/**
 * Generate a cryptographically-mixed password.
 * Pass a CSPRNG-based `rng` from the browser (crypto.getRandomValues) for real security.
 */
export function generatePassword(
  options: PasswordOptions,
  rng: () => number = Math.random,
): PasswordResult {
  const chosen: string[] = [];
  let pool = '';

  if (options.uppercase) {
    const s = options.excludeSimilar ? removeSimilar(SETS.uppercase) : SETS.uppercase;
    pool += s;
    chosen.push(s);
  }
  if (options.lowercase) {
    const s = options.excludeSimilar ? removeSimilar(SETS.lowercase) : SETS.lowercase;
    pool += s;
    chosen.push(s);
  }
  if (options.numbers) {
    const s = options.excludeSimilar ? removeSimilar(SETS.numbers) : SETS.numbers;
    pool += s;
    chosen.push(s);
  }
  if (options.symbols) {
    pool += SETS.symbols;
    chosen.push(SETS.symbols);
  }
  if (pool === '') {
    pool = SETS.lowercase;
    chosen.push(SETS.lowercase);
  }

  const len = Math.max(1, Math.min(128, Math.floor(options.length)));
  let out = '';
  // guarantee at least one character from each selected set
  for (const set of chosen) {
    out += set.charAt(Math.floor(rng() * set.length));
  }
  while (out.length < len) {
    out += pool.charAt(Math.floor(rng() * pool.length));
  }
  out = shuffle(out, rng).slice(0, len);

  const poolSize = pool.length;
  const entropyBits = Math.round(len * (Math.log(poolSize) / Math.log(2)));
  const strength: PasswordResult['strength'] =
    entropyBits < 40 ? 'Weak' : entropyBits < 60 ? 'Fair' : entropyBits < 80 ? 'Strong' : 'Very Strong';

  return { password: out, entropyBits, strength };
}
