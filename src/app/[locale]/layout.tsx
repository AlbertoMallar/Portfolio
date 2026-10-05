import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/SiteFooter";
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
      <body id="top">
        <a href="#main-content" className="skip-link">
          {content.common.skipToContent}
        </a>
        <SiteHeader locale={locale} content={content} name={profile.name} />
        {children}
        <SiteFooter profile={profile} ui={content.ui} />
      </body>
    </html>
  );
}
