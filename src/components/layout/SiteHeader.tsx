import Link from "next/link";
import { LanguageSwitcher } from "@/components/common/LanguageSwitcher";
import { MobileMenu } from "@/components/layout/MobileMenu";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent } from "@/types/portfolio";

export function SiteHeader({
  locale,
  content,
  name,
}: {
  locale: Locale;
  content: PortfolioContent;
  name: string;
}) {
  const links = [
    { href: "#projects", label: content.navigation.projects },
    { href: "#about", label: content.navigation.about },
    { href: "#experience", label: content.navigation.experience },
    { href: "#contact", label: content.navigation.contact },
  ];
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href={`/${locale}`} className="brand" aria-label={name}>
          <span className="brand-mark">
            am<span>.</span>
          </span>
          <span className="brand-name">{name}</span>
        </Link>
        <nav className="desktop-nav" aria-label={content.navigation.label}>
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <LanguageSwitcher
            locale={locale}
            label={content.common.languageLabel}
            languageNames={content.common.languageNames}
          />
          <MobileMenu
            label={content.navigation.label}
            openLabel={content.navigation.menu}
            closeLabel={content.navigation.close}
            links={links}
          />
        </div>
      </div>
    </header>
  );
}
