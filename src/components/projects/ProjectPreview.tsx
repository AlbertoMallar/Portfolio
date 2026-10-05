import Image from "next/image";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, Project } from "@/types/portfolio";

export function ProjectPreview({
  project,
  locale,
  ui,
}: {
  project: Project;
  locale: Locale;
  ui: PortfolioContent["ui"];
}) {
  const image = project.images?.[0];
  if (image)
    return (
      <div className="project-preview real-preview">
        <Image
          src={image.src}
          alt={image.alt[locale]}
          fill
          sizes="(max-width: 700px) 100vw, 50vw"
        />
      </div>
    );
  if (project.preview)
    return (
      <div className="project-preview ai-preview">
        <span className="preview-label">
          <span className="tiny-dot" />
          {ui.schematic}
        </span>
        <ol className="workflow">
          {project.preview.steps.map((step, index) => (
            <li key={step[locale]}>
              <span className="workflow-number">0{index + 1}</span>
              <span>{step[locale]}</span>
              {index < project.preview!.steps.length - 1 ? (
                <Icon name="arrow" />
              ) : null}
            </li>
          ))}
        </ol>
        {project.preview.branches ? (
          <div className="workflow-branches">
            {project.preview.branches.map((branch) => (
              <code key={branch}>{branch}</code>
            ))}
          </div>
        ) : null}
        {project.preview.outputFields ? (
          <div className="output-fields">
            {project.preview.outputFields.map((field) => (
              <code key={field}>{field}</code>
            ))}
          </div>
        ) : null}
      </div>
    );
  return (
    <div className="project-preview site-placeholder">
      <div className="preview-browser">
        <span />
        <span />
        <span />
        <span className="preview-domain">
          {project.liveUrl
            ? new URL(project.liveUrl).hostname
            : project.title[locale]}
        </span>
      </div>
      <div className="placeholder-center">
        <Icon name="monitor" />
        <span className="placeholder-brand">{project.title[locale]}</span>
        <span className="preview-pending">{ui.previewPending}</span>
        <p>{ui.previewDescription}</p>
      </div>
    </div>
  );
}
