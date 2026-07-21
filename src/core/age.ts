export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalMonths: number;
  dayOfWeek: string;
  nextBirthdayInDays: number;
}

function parts(birth: Date, now: Date): { years: number; months: number; days: number } {
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  if (days < 0) {
    months--;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}

/** Calculate precise age between a birth date and a reference date. */
export function calcAge(birthDate: Date, now: Date = new Date()): AgeResult {
  const ms = now.getTime() - birthDate.getTime();
  const totalDays = Math.floor(ms / 86_400_000);
  const { years, months, days } = parts(birthDate, now);
  const totalMonths = years * 12 + months;
  const dayOfWeek = birthDate.toLocaleDateString('en-US', { weekday: 'long' });

  const next = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (next.getTime() <= now.getTime()) next.setFullYear(now.getFullYear() + 1);
  const nextBirthdayInDays = Math.ceil((next.getTime() - now.getTime()) / 86_400_000);

  return { years, months, days, totalDays, totalMonths, dayOfWeek, nextBirthdayInDays };
}
