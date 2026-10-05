import type { Locale } from "@/lib/locales";

export const cvFiles = {
  es: "/cv/alberto-mallar-cv-es.pdf",
  en: "/cv/alberto-mallar-cv-en.pdf",
} satisfies Record<Locale, `/cv/${string}.pdf`>;

// La versión inglesa pública está disponible. Habilitar español al agregar su PDF.
export const availableCvLocales: readonly Locale[] = ["en"];

export function getCvHref(locale: Locale): string | undefined {
  return availableCvLocales.includes(locale) ? cvFiles[locale] : undefined;
}
