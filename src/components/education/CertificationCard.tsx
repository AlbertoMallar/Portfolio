import { Period } from "@/components/common/Period";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/locales";
import type { Education, PortfolioContent } from "@/types/portfolio";

export function CertificationCard({
  item,
  locale,
  content,
  featured = false,
}: {
  item: Education;
  locale: Locale;
  content: PortfolioContent;
  featured?: boolean;
}) {
  return (
    <article
      className={`education-card ${featured ? "featured-education" : ""}`}
    >
      <div className="education-top">
        <span className="education-icon">
          <Icon
            name={item.kind === "certification" ? "layers" : "graduation"}
          />
        </span>
        <Period
          period={item}
          locale={locale}
          presentLabel={content.common.presentLabel}
        />
      </div>
      <p className="education-kind">
        {item.kind === "certification"
          ? content.ui.certification
          : content.ui.education}
      </p>
      <h3>{item.title[locale]}</h3>
      {item.institution ? (
        <p className="education-institution">{item.institution}</p>
      ) : null}
      {item.hours ? (
        <p className="education-hours">
          {item.hours} {content.common.hoursLabel}
        </p>
      ) : null}
      {item.description ? (
        <p className="education-description">{item.description[locale]}</p>
      ) : null}
      {item.credentialUrl ? (
        <a href={item.credentialUrl} className="text-link">
          {content.common.links.credential}
          <Icon name="external" />
        </a>
      ) : null}
    </article>
  );
}
