import type { Locale } from "@/lib/locales";

export interface PortfolioPeriod {
  startDate?: string;
  endDate?: string;
  year?: number;
  ongoing?: boolean;
}

function formatDate(value: string, locale: Locale): string {
  if (!/^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/.test(value)) {
    throw new Error(`Invalid portfolio date: ${value}`);
  }

  const [year, month] = value.split("-");
  if (!month) return year;

  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(Number(year), Number(month) - 1)));
}

export function formatPeriod(
  period: PortfolioPeriod,
  locale: Locale,
  presentLabel: string,
): string | undefined {
  const start = period.startDate ?? period.year?.toString();
  if (!start) return undefined;

  const startLabel = formatDate(start, locale);
  const endLabel = period.endDate
    ? formatDate(period.endDate, locale)
    : period.ongoing
      ? presentLabel
      : undefined;

  return endLabel ? `${startLabel} – ${endLabel}` : startLabel;
}
