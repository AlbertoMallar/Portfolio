import type { Locale } from "@/lib/locales";

export const cvFiles: Partial<Record<Locale, `/cv/${string}.pdf`>> = {
  es: "/cv/AlbertoMallarCV_ES.pdf",
  en: "/cv/AlbertoMallarCV_EN.pdf",
};

// Solo las versiones en español e inglés están disponibles en public/cv.
export const availableCvLocales: readonly Locale[] = ["es", "en"];

export function getCvHref(locale: Locale): string | undefined {
  return availableCvLocales.includes(locale) ? cvFiles[locale] : undefined;
}
