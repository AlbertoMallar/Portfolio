import { CertificationCard } from "@/components/education/CertificationCard";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/locales";
import type { Education as Entry, PortfolioContent } from "@/types/portfolio";

export function Education({
  locale,
  content,
  items,
}: {
  locale: Locale;
  content: PortfolioContent;
  items: readonly Entry[];
}) {
  const ordered = [...items].sort(
    (a, b) =>
      Number(b.id === "henry-ai-engineering") -
      Number(a.id === "henry-ai-engineering"),
  );
  return (
    <Section id="education" content={content.sections.education}>
      <div className="education-grid">
        {ordered.map((item) => (
          <CertificationCard
            key={item.id}
            item={item}
            locale={locale}
            content={content}
            featured={item.id.startsWith("henry-")}
          />
        ))}
      </div>
    </Section>
  );
}
