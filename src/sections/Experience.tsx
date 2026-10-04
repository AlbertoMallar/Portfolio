import { Section } from "@/components/ui/Section";
import { Period } from "@/components/common/Period";
import type { Locale } from "@/lib/locales";
import type { Experience as ExperienceEntry, PortfolioContent, SectionContent } from "@/types/portfolio";

type ExperienceProps = Readonly<{
  locale: Locale;
  content: SectionContent;
  common: PortfolioContent["common"];
  items: readonly ExperienceEntry[];
}>;

export function Experience({ locale, content, common, items }: ExperienceProps) {
  return (
    <Section id="experience" title={content.title} emptyMessage={common.pendingContent}>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id}>
              <h3 className="font-semibold">{item.role[locale]}</h3>
              {item.organization ? <p>{item.organization}</p> : null}
              <Period period={item} locale={locale} presentLabel={common.presentLabel} />
              {item.context === "academic" ? <p>{common.contextLabels.academic}</p> : null}
              {item.description ? <p>{item.description[locale]}</p> : null}
              {item.highlights?.length ? (
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  {item.highlights.map((highlight) => (
                    <li key={highlight[locale]}>{highlight[locale]}</li>
                  ))}
                </ul>
              ) : null}
              {item.technologies?.length ? (
                <ul className="mt-2 flex flex-wrap gap-3">
                  {item.technologies.map((technology) => <li key={technology}>{technology}</li>)}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : undefined}
    </Section>
  );
}
