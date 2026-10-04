import { Section } from "@/components/ui/Section";
import { Period } from "@/components/common/Period";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, Project, SectionContent } from "@/types/portfolio";

type ProjectsProps = Readonly<{
  locale: Locale;
  content: SectionContent;
  common: PortfolioContent["common"];
  items: readonly Project[];
}>;

export function Projects({ locale, content, common, items }: ProjectsProps) {
  return (
    <Section id="projects" title={content.title} emptyMessage={common.pendingContent}>
      {items.length > 0 ? (
        <ul className="space-y-4">
          {items.map((project) => (
            <li key={project.id}>
              <h3 className="font-semibold">{project.title[locale]}</h3>
              <Period period={project} locale={locale} presentLabel={common.presentLabel} />
              {project.context ? <p>{common.contextLabels[project.context]}</p> : null}
              {project.shortDescription ? (
                <p>{project.shortDescription[locale]}</p>
              ) : null}
              {project.description ? <p className="mt-2">{project.description[locale]}</p> : null}
              {project.technologies.length > 0 ? (
                <ul className="mt-2 flex flex-wrap gap-3">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              ) : null}
              {project.liveUrl || project.repositoryUrl ? (
                <ul className="mt-2 flex flex-wrap gap-4">
                  {project.liveUrl ? (
                    <li><a href={project.liveUrl} className="underline">{common.links.live}</a></li>
                  ) : null}
                  {project.repositoryUrl ? (
                    <li><a href={project.repositoryUrl} className="underline">{common.links.repository}</a></li>
                  ) : null}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      ) : undefined}
    </Section>
  );
}
