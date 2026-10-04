import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { profile } from "@/data/profile";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale, locales } from "@/lib/locales";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = await getDictionary(locale);
  return {
    title: `${profile.name} | ${content.metadata.title}`,
    description: content.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LayoutProps<"/[locale]">) {
  const { locale } = await params;

  if (!isLocale(locale)) notFound();

  const content = await getDictionary(locale);

  return (
    <html lang={locale}>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:block focus:p-4"
        >
          {content.common.skipToContent}
        </a>
        <SiteHeader locale={locale} content={content.common} />
        {children}
      </body>
    </html>
  );
}
