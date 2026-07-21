export function toUpperCase(s: string): string {
  return s.toUpperCase();
}
export function toLowerCase(s: string): string {
  return s.toLowerCase();
}
export function toSentenceCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/(^\s*|[.!?]\s+)([a-z])/g, (_, p1, p2) => p1 + p2.toUpperCase());
}
export function toTitleCase(s: string): string {
  return s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
}
export function toCamelCase(s: string): string {
  return s
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => (c ? c.toUpperCase() : ''));
}
export function toSnakeCase(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}
export function toKebabCase(s: string): string {
  return s
    .trim()
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
export function toAlternatingCase(s: string): string {
  return s
    .split('')
    .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
    .join('');
}
