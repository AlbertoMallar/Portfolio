import { Period } from "@/components/common/Period";
import { Icon } from "@/components/ui/Icon";
import { ProjectPreview } from "@/components/projects/ProjectPreview";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, Project } from "@/types/portfolio";

export function ProjectCard({
  project,
  locale,
  common,
  ui,
  compact = false,
}: {
  project: Project;
  locale: Locale;
  common: PortfolioContent["common"];
  ui: PortfolioContent["ui"];
  compact?: boolean;
}) {
  return (
    <article
      className={`project-card ${project.category === "ai-engineering" ? "ai-card" : ""} ${compact ? "compact-card" : ""}`}
    >
      {!compact ? (
        <ProjectPreview project={project} locale={locale} ui={ui} />
      ) : (
        <div className="compact-icon">
          <Icon
            name={project.category === "ai-engineering" ? "terminal" : "code"}
          />
        </div>
      )}
      <div className="project-content">
        <div className="project-meta">
          <span>
            {project.context === "professional" ? ui.production : ui.academic}
          </span>
          <Period
            period={project}
            locale={locale}
            presentLabel={common.presentLabel}
          />
        </div>
        <h3>{project.title[locale]}</h3>
        {project.shortDescription ? (
          <p className="project-description">
            {project.shortDescription[locale]}
          </p>
        ) : null}
        <ul className="tags">
          {project.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
        {project.description ? (
          <details className="project-details">
            <summary>
              {ui.details}
              <Icon name="chevron" />
            </summary>
            <p>{project.description[locale]}</p>
          </details>
        ) : null}
        <div className="project-links">
          {project.liveUrl ? (
            <a href={project.liveUrl}>
              {common.links.live}
              <Icon name="external" />
            </a>
          ) : null}
          {project.repositoryUrl &&
          project.repositoryVisibility !== "private" ? (
            <a href={project.repositoryUrl}>
              <Icon name="github" />
              {common.links.repository}
              <Icon name="external" />
            </a>
          ) : null}
          {project.repositoryVisibility === "private" ? (
            <span className="private-label">{ui.privateRepository}</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
