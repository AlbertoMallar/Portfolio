import { Section } from "@/components/ui/Section";
import { Period } from "@/components/common/Period";
import type { Locale } from "@/lib/locales";
import type { Education as EducationEntry, PortfolioContent, SectionContent } from "@/types/portfolio";

type EducationProps = Readonly<{
  locale: Locale;
  content: SectionContent;
  common: PortfolioContent["common"];
  items: readonly EducationEntry[];
}>;

export function Education({ locale, content, common, items }: EducationProps) {
  return (
    <Section id="education" title={content.title} emptyMessage={common.pendingContent}>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((item) => (
            <li key={item.id}>
              <h3 className="font-semibold">{item.title[locale]}</h3>
              {item.institution ? <p>{item.institution}</p> : null}
              <Period period={item} locale={locale} presentLabel={common.presentLabel} />
              {item.hours !== undefined ? <p>{item.hours} {common.hoursLabel}</p> : null}
              {item.description ? <p>{item.description[locale]}</p> : null}
              {item.credentialUrl ? (
                <a href={item.credentialUrl} className="underline">{common.links.credential}</a>
              ) : null}
            </li>
          ))}
        </ul>
      ) : undefined}
    </Section>
  );
}
