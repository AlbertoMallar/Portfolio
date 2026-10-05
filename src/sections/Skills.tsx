import { TechnologyIcon } from "@/components/common/TechnologyIcon";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, SkillGroup } from "@/types/portfolio";

export function Skills({
  locale,
  content,
  core,
  items,
}: {
  locale: Locale;
  content: PortfolioContent;
  core: readonly string[];
  items: readonly SkillGroup[];
}) {
  return (
    <Section id="skills" content={content.sections.skills}>
      <h3 className="minor-heading">{content.ui.coreTechnologies}</h3>
      <ul className="core-technologies">
        {core.map((name) => (
          <li key={name}>
            <TechnologyIcon name={name} />
            <span>{name}</span>
          </li>
        ))}
      </ul>
      <h3 className="minor-heading additional-title">
        {content.ui.additionalTechnologies}
      </h3>
      <div className="skill-groups">
        {items.map((group) => (
          <div
            key={group.id}
            className={group.id === "ai-engineering" ? "wide-skill-group" : ""}
          >
            <h4>{group.title[locale]}</h4>
            <ul>
              {group.items.map((item) => {
                const label =
                  typeof item === "string" ? item : item.label[locale];
                return (
                  <li key={typeof item === "string" ? item : item.id}>
                    <TechnologyIcon
                      name={typeof item === "string" ? item : item.id}
                    />
                    <span>{label}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
