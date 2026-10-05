import type { SectionContent } from "@/types/portfolio";

export function SectionHeading({
  id,
  content,
}: {
  id: string;
  content: SectionContent;
}) {
  return (
    <div className="section-heading">
      {content.eyebrow ? <p className="eyebrow">{content.eyebrow}</p> : null}
      <div className="heading-row">
        <h2 id={`${id}-title`}>{content.title}</h2>
        {content.body ? <p>{content.body}</p> : null}
      </div>
    </div>
  );
}
