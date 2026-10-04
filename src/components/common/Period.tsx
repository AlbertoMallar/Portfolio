import { formatPeriod, type PortfolioPeriod } from "@/lib/dates";
import type { Locale } from "@/lib/locales";

type PeriodProps = Readonly<{
  period: PortfolioPeriod;
  locale: Locale;
  presentLabel: string;
}>;

export function Period({ period, locale, presentLabel }: PeriodProps) {
  const label = formatPeriod(period, locale, presentLabel);
  return label ? <p>{label}</p> : null;
}
