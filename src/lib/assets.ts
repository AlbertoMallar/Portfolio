import type { Locale } from "@/lib/locales";

export const cvFiles: Partial<Record<Locale, `/cv/${string}.pdf`>> = {
  es: "/cv/AlbertoMallarCV_ES.pdf",
  en: "/cv/AlbertoMallarCV_EN.pdf",
  de: "/cv/AlbertoMallarCV_EN.pdf",
};

// El portfolio alemán utiliza el CV en inglés disponible en public/cv.
export const availableCvLocales: readonly Locale[] = ["es", "en", "de"];

export function getCvHref(locale: Locale): string | undefined {
  return availableCvLocales.includes(locale) ? cvFiles[locale] : undefined;
}
