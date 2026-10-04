import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/locales";
import type { SectionContent, SkillGroup } from "@/types/portfolio";

type SkillsProps = Readonly<{
  locale: Locale;
  content: SectionContent;
  emptyMessage: string;
  items: readonly SkillGroup[];
}>;

export function Skills({ locale, content, emptyMessage, items }: SkillsProps) {
  return (
    <Section id="skills" title={content.title} emptyMessage={emptyMessage}>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((group) => (
            <li key={group.id}>
              <h3 className="font-semibold">{group.title[locale]}</h3>
              <ul className="mt-2 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <li key={typeof skill === "string" ? skill : skill.id}>
                    {typeof skill === "string" ? skill : skill.label[locale]}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      ) : undefined}
    </Section>
  );
}
