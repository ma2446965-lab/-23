export interface JsonCsvOptions {
  delimiter?: string;
}

function csvEscape(value: string, delim: string): string {
  if (value.includes('"') || value.includes('\n') || value.includes(delim)) {
    return '"' + value.replace(/"/g, '""') + '"';
  }
  return value;
}

/** Convert an array of flat objects (or array of arrays) into CSV text. */
export function jsonToCsv(data: unknown, options: JsonCsvOptions = {}): string {
  const delim = options.delimiter ?? ',';
  const arr = (Array.isArray(data) ? data : [data]) as unknown[];
  if (arr.length === 0) return '';

  const first = arr[0];
  if (first && typeof first === 'object' && !Array.isArray(first)) {
    const headers = Object.keys(first as Record<string, unknown>);
    const lines = [headers.join(delim)];
    for (const row of arr) {
      const obj = row as Record<string, unknown>;
      lines.push(headers.map((h) => csvEscape(String(obj[h] ?? ''), delim)).join(delim));
    }
    return lines.join('\n');
  }

  const esc = (v: unknown) => csvEscape(String(v ?? ''), delim);
  return arr
    .map((row) => (Array.isArray(row) ? row.map(esc).join(delim) : esc(row)))
    .join('\n');
}

function parseCsv(text: string, delim: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let field = '';
  let inQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const c = text[i]!;
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          inQuotes = false;
        }
      } else {
        field += c;
      }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === delim) {
      row.push(field);
      field = '';
    } else if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (c !== '\r') {
      field += c;
    }
  }
  if (field !== '' || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

/** Parse CSV text into an array of objects (first row treated as header) or arrays. */
export function csvToJson(
  csv: string,
  delimiter = ',',
): Record<string, string>[] | string[][] {
  const rows = parseCsv(csv, delimiter).filter((r) => r.some((c) => c.trim() !== ''));
  if (rows.length === 0) return [];

  const header = rows[0]!;
  const hasHeader = header.some((h) => isNaN(Number(h)) && h.trim() !== '');

  if (hasHeader) {
    return rows.slice(1).map((r) => {
      const obj: Record<string, string> = {};
      header.forEach((h, i) => {
        obj[h] = r[i] ?? '';
      });
      return obj;
    });
  }
  return rows;
}
