import Link from "next/link";
import { locales, type Locale } from "@/lib/locales";
import type { PortfolioContent } from "@/types/portfolio";

export function LanguageSwitcher({
  locale,
  label,
  languageNames,
}: {
  locale: Locale;
  label: string;
  languageNames: PortfolioContent["common"]["languageNames"];
}) {
  return (
    <nav aria-label={label} className="language-switcher">
      {locales.map((language) => (
        <Link
          key={language}
          href={`/${language}`}
          hrefLang={language}
          lang={language}
          aria-label={languageNames[language]}
          aria-current={locale === language ? "page" : undefined}
        >
          {language.toUpperCase()}
        </Link>
      ))}
    </nav>
  );
}
