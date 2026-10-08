import type { Locale } from "@/lib/locales";

export const cvFiles: Partial<Record<Locale, `/cv/${string}.pdf`>> = {
  es: "/cv/Alberto_Mallar_CV_ES_2026.pdf",
  en: "/cv/Alberto_Mallar_CV_EN_2026.pdf",
};

// Solo las versiones en español e inglés están disponibles en public/cv.
export const availableCvLocales: readonly Locale[] = ["es", "en"];

export function getCvHref(locale: Locale): string | undefined {
  return availableCvLocales.includes(locale) ? cvFiles[locale] : undefined;
}
