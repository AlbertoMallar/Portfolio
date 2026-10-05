import Image from "next/image";
import { ProfileLinks } from "@/components/common/ProfileLinks";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/lib/locales";
import type { PortfolioContent, Profile } from "@/types/portfolio";

export function Hero({
  profile,
  locale,
  content,
  common,
  cvHref,
}: {
  profile: Profile;
  locale: Locale;
  content: PortfolioContent["hero"];
  common: PortfolioContent["common"];
  cvHref?: string;
}) {
  const [software, intelligence] = content.title.split(" & ");
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="hero-name">
          <span className="line-accent" />
          {profile.name}
        </p>
        <h1 id="hero-title">
          {software} &amp;
          <br />
          <span>
            {intelligence}
            <span className="title-period">.</span>
          </span>
        </h1>
        <p className="hero-summary">{content.summary}</p>
        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            {content.projectsLabel}
            <Icon name="arrow" />
          </a>
          {cvHref ? (
            <a href={cvHref} download className="button button-secondary">
              <Icon name="download" />
              {content.cvLabel}
            </a>
          ) : (
            <span className="cv-pending">
              <Icon name="download" />
              {content.cvPending}
            </span>
          )}
        </div>
        <ProfileLinks profile={profile} labels={common.links} />
      </div>
      <div className="hero-visual">
        <div className="portrait-frame">
          {profile.image ? (
            <Image
              src={profile.image.src}
              alt={profile.image.alt[locale]}
              fill
              sizes="(max-width: 700px) 85vw, (max-width: 1100px) 40vw, 430px"
              preload
              className="portrait"
            />
          ) : null}
          <div className="portrait-caption">
            <span>FULL STACK + AI</span>
            <span>
              <Icon name="pin" />
              {profile.location}
            </span>
          </div>
        </div>
        <span className="portrait-corner corner-top" aria-hidden="true" />
        <span className="portrait-corner corner-bottom" aria-hidden="true" />
        <div className="portrait-code" aria-hidden="true">
          <Icon name="code" />
          <span>web + intelligence</span>
        </div>
      </div>
      <div className="hero-domains">
        {content.domains.map((domain, index) => (
          <span key={domain}>
            <span className="domain-index">0{index + 1}</span>
            {domain}
          </span>
        ))}
      </div>
    </section>
  );
}
