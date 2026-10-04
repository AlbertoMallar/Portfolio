import type { Locale } from "@/lib/locales";
import type { PortfolioContent } from "@/types/portfolio";

const dictionaries = {
  es: () => import("@/content/es").then((module) => module.default),
  en: () => import("@/content/en").then((module) => module.default),
} satisfies Record<Locale, () => Promise<PortfolioContent>>;

export async function getDictionary(locale: Locale): Promise<PortfolioContent> {
  return dictionaries[locale]();
}
