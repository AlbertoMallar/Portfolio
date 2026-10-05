import { ExperienceItem } from "@/components/experience/ExperienceItem";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/locales";
import type { Experience as Entry, PortfolioContent } from "@/types/portfolio";

export function Experience({
  locale,
  content,
  items,
}: {
  locale: Locale;
  content: PortfolioContent;
  items: readonly Entry[];
}) {
  const primary = items.filter((item) => item.id !== "property-management");
  const additional = items.filter((item) => item.id === "property-management");
  return (
    <Section id="experience" content={content.sections.experience}>
      <div className="timeline">
        {primary.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            locale={locale}
            common={content.common}
          />
        ))}
      </div>
      <div className="additional-experience">
        <p className="minor-heading">{content.ui.previousExperience}</p>
        {additional.map((item) => (
          <ExperienceItem
            key={item.id}
            item={item}
            locale={locale}
            common={content.common}
            subdued
          />
        ))}
      </div>
    </Section>
  );
}
