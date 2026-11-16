import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";
import type { PortfolioContent } from "@/types/portfolio";

export function Highlights({
  id,
  content,
  items,
  icons,
}: {
  id: "capabilities" | "evidence";
  content: PortfolioContent;
  items: readonly { title: string; body: string }[];
  icons: readonly IconName[];
}) {
  return (
    <Section
      id={id}
      content={content.sections[id]}
      className="highlights-section"
    >
      <div
        className={`capability-grid ${id === "capabilities" ? "four-columns" : ""}`}
      >
        {items.map((item, index) => (
          <div key={item.title}>
            <Icon name={icons[index] ?? "code"} />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
