import { Section } from "@/components/ui/Section";
import { ProfileLinks } from "@/components/common/ProfileLinks";
import type { PortfolioContent, Profile, SectionContent } from "@/types/portfolio";

type ContactProps = Readonly<{
  content: SectionContent;
  common: PortfolioContent["common"];
  profile: Profile;
}>;

export function Contact({ content, common, profile }: ContactProps) {
  return (
    <Section id="contact" title={content.title} emptyMessage={common.pendingContent}>
      <div>
        {content.body ? <p>{content.body}</p> : null}
        {profile.location ? <p className="mt-2">{profile.location}</p> : null}
        {profile.email ? (
          <p className="mt-2"><a href={`mailto:${profile.email}`} className="underline">{profile.email}</a></p>
        ) : null}
        <ProfileLinks profile={profile} labels={common.links} />
      </div>
    </Section>
  );
}
