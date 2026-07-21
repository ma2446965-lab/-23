export interface TimestampParts {
  iso: string;
  utc: string;
  local: string;
}

/** Convert a Unix timestamp (seconds or milliseconds) to readable parts. */
export function timestampToDate(ts: number, inMillis = false): TimestampParts {
  const ms = inMillis ? ts : ts * 1000;
  const d = new Date(ms);
  if (isNaN(d.getTime())) throw new Error('Invalid timestamp');
  return {
    iso: d.toISOString(),
    utc: d.toUTCString(),
    local: d.toString(),
  };
}

/** Convert a date to a Unix timestamp (seconds or milliseconds). */
export function dateToTimestamp(d: Date, inMillis = false): number {
  const ms = d.getTime();
  return inMillis ? ms : Math.floor(ms / 1000);
}

export function currentTimestamp(inMillis = false): number {
  return dateToTimestamp(new Date(), inMillis);
}
