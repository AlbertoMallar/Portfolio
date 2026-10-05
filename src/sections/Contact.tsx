import { ProfileLinks } from "@/components/common/ProfileLinks";
import { Icon } from "@/components/ui/Icon";
import type { PortfolioContent, Profile } from "@/types/portfolio";

export function Contact({
  profile,
  content,
}: {
  profile: Profile;
  content: PortfolioContent;
}) {
  return (
    <section
      id="contact"
      className="contact-section"
      aria-labelledby="contact-title"
    >
      <p className="eyebrow">{content.sections.contact.eyebrow}</p>
      <div className="contact-grid">
        <div>
          <h2 id="contact-title">{content.sections.contact.title}</h2>
          <p>{content.sections.contact.body}</p>
        </div>
        <div className="contact-links">
          {profile.email ? (
            <a className="email-link" href={`mailto:${profile.email}`}>
              <span>{content.ui.emailLabel}</span>
              <strong>{profile.email}</strong>
              <Icon name="arrow" />
            </a>
          ) : null}
          <ProfileLinks profile={profile} labels={content.common.links} />
          <p className="contact-location">
            <Icon name="pin" />
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
