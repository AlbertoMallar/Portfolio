import { Icon } from "@/components/ui/Icon";
import type { PortfolioContent } from "@/types/portfolio";

export function About({ content }: { content: PortfolioContent }) {
  const section = content.sections.about;
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="section about-section"
    >
      <div className="about-main">
        <div>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2 id="about-title">{section.title}</h2>
          <div className="about-signature">
            Full Stack <span>×</span> AI Engineering
          </div>
        </div>
        <div className="about-body">
          {section.body?.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="capability-grid">
        {content.ui.aboutCapabilities.map((capability, index) => (
          <div key={capability.title}>
            <Icon
              name={index === 0 ? "layers" : index === 1 ? "brain" : "code"}
            />
            <h3>{capability.title}</h3>
            <p>{capability.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
