import Link from "next/link";
import { locales, type Locale } from "@/lib/locales";
import type { PortfolioContent } from "@/types/portfolio";

type LanguageSwitcherProps = Readonly<{
  locale: Locale;
  label: string;
  languageNames: PortfolioContent["common"]["languageNames"];
}>;

export function LanguageSwitcher({
  locale,
  label,
  languageNames,
}: LanguageSwitcherProps) {
  return (
    <nav aria-label={label}>
      <ul className="flex flex-wrap gap-4">
        {locales.map((language) => (
          <li key={language}>
            <Link
              href={`/${language}`}
              hrefLang={language}
              lang={language}
              aria-current={locale === language ? "page" : undefined}
              className="underline underline-offset-4"
            >
              {languageNames[language]}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
