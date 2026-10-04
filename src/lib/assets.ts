import type { Locale } from "@/lib/locales";

// Las rutas quedan listas para las futuras descargas. Los PDFs aún no existen.
export const cvFiles = {
  es: "/cv/alberto-mallar-cv-es.pdf",
  en: "/cv/alberto-mallar-cv-en.pdf",
} satisfies Record<Locale, `/cv/${string}.pdf`>;

// Habilitar un idioma solamente después de colocar su PDF real en public/cv/.
export const availableCvLocales: readonly Locale[] = [];

export function getCvHref(locale: Locale): string | undefined {
  return availableCvLocales.includes(locale) ? cvFiles[locale] : undefined;
}
