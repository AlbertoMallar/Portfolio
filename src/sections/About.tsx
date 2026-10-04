import { Section } from "@/components/ui/Section";
import type { SectionContent } from "@/types/portfolio";

type AboutProps = Readonly<{
  content: SectionContent;
  emptyMessage: string;
}>;

export function About({ content, emptyMessage }: AboutProps) {
  return (
    <Section id="about" title={content.title} emptyMessage={emptyMessage}>
      {content.body ? <p>{content.body}</p> : undefined}
    </Section>
  );
}
