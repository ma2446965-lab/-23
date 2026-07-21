export interface PregnancyResult {
  dueDate: string; // ISO yyyy-mm-dd
  conceptionDate: string;
  gestationalWeeks: number;
  gestationalDays: number;
  trimester: 1 | 2 | 3;
}

const DAY = 86_400_000;

function toISO(d: Date): string {
  return d.toISOString().slice(0, 10);
}

/** Pregnancy dates from the last menstrual period (LMP). */
export function calcPregnancy(lmp: Date, now: Date = new Date()): PregnancyResult {
  const due = new Date(lmp.getTime() + 280 * DAY);
  const conception = new Date(lmp.getTime() + 14 * DAY);

  const elapsed = now.getTime() - lmp.getTime();
  const totalDays = Math.floor(elapsed / DAY);
  const gestationalWeeks = Math.floor(totalDays / 7);
  const gestationalDays = totalDays - gestationalWeeks * 7;
  const trimester = totalDays < 98 ? 1 : totalDays < 196 ? 2 : 3;

  return {
    dueDate: toISO(due),
    conceptionDate: toISO(conception),
    gestationalWeeks,
    gestationalDays,
    trimester,
  };
}
