export interface TimeParts {
  h: number;
  m: number;
  s: number;
}

export function timeToSeconds(t: TimeParts): number {
  return t.h * 3600 + t.m * 60 + t.s;
}

export function secondsToTime(total: number): TimeParts {
  const sign = total < 0 ? -1 : 1;
  let s = Math.abs(Math.round(total));
  const h = Math.floor(s / 3600);
  s -= h * 3600;
  const m = Math.floor(s / 60);
  s -= m * 60;
  return { h: h * sign, m, s };
}

/** Add or subtract two durations (hh:mm:ss ± hh:mm:ss). */
export function combineTime(a: TimeParts, b: TimeParts, op: '+' | '-'): TimeParts {
  const va = timeToSeconds(a);
  const vb = timeToSeconds(b);
  return secondsToTime(op === '+' ? va + vb : va - vb);
}

/** Duration between two clock times. If end < start, assumes next day (+24h). */
export function durationBetween(start: TimeParts, end: TimeParts): TimeParts {
  let v = timeToSeconds(end) - timeToSeconds(start);
  if (v < 0) v += 24 * 3600;
  return secondsToTime(v);
}

export function parseTime(value: string): TimeParts | null {
  const m = value.match(/^(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?$/);
  if (!m) return null;
  const h = parseInt(m[1]!, 10);
  const min = parseInt(m[2]!, 10);
  const s = parseInt(m[3] ?? '0', 10);
  if (min > 59 || s > 59) return null;
  return { h, m: min, s };
}

export function formatTime(t: TimeParts): string {
  const pad = (n: number) => String(Math.abs(n)).padStart(2, '0');
  const sign = t.h < 0 ? '-' : '';
  return `${sign}${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`;
}
