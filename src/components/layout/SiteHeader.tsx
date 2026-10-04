import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent } from "@/types/portfolio";

type SiteHeaderProps = Readonly<{
  locale: Locale;
  content: PortfolioContent["common"];
}>;

export function SiteHeader({ locale, content }: SiteHeaderProps) {
  return (
    <header className="mx-auto max-w-4xl px-6 pt-6">
      <LanguageSwitcher
        locale={locale}
        label={content.languageLabel}
        languageNames={content.languageNames}
      />
    </header>
  );
}
