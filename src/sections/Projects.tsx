import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, Project, SectionId } from "@/types/portfolio";

export function Projects({
  id = "projects",
  locale,
  content,
  items,
  compact = false,
}: {
  id?: Extract<SectionId, "projects" | "ai-work" | "other-projects">;
  locale: Locale;
  content: PortfolioContent;
  items: readonly Project[];
  compact?: boolean;
}) {
  return (
    <Section
      id={id}
      content={content.sections[id]}
      className={id === "ai-work" ? "ai-section" : ""}
    >
      <div
        className={`project-grid ${id === "ai-work" || compact ? "three-columns" : ""}`}
      >
        {items.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            common={content.common}
            ui={content.ui}
            compact={compact}
          />
        ))}
      </div>
    </Section>
  );
}
