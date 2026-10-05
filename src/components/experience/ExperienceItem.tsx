import { Period } from "@/components/common/Period";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/locales";
import type { Experience, PortfolioContent } from "@/types/portfolio";

export function ExperienceItem({
  item,
  locale,
  common,
  subdued = false,
}: {
  item: Experience;
  locale: Locale;
  common: PortfolioContent["common"];
  subdued?: boolean;
}) {
  const body = (
    <>
      <p>{item.description?.[locale]}</p>
      {item.highlights?.length ? (
        <ul className="experience-highlights">
          {item.highlights.map((highlight) => (
            <li key={highlight[locale]}>{highlight[locale]}</li>
          ))}
        </ul>
      ) : null}
      {item.technologies?.length ? (
        <ul className="tags">
          {item.technologies.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
  return (
    <article
      className={`experience-item ${subdued ? "subdued-experience" : ""}`}
    >
      <div className="experience-date">
        <span className="timeline-dot" />
        <Period
          period={item}
          locale={locale}
          presentLabel={common.presentLabel}
        />
      </div>
      <div className="experience-content">
        <div className="experience-role">
          <h3>{item.role[locale]}</h3>
          {item.organization ? <span>{item.organization}</span> : null}
        </div>
        {item.context === "academic" ? (
          <p className="academic-context">{common.contextLabels.academic}</p>
        ) : null}
        {subdued ? (
          <details>
            <summary>
              {common.contextLabels.professional}
              <Icon name="chevron" />
            </summary>
            {body}
          </details>
        ) : (
          body
        )}
      </div>
    </article>
  );
}
