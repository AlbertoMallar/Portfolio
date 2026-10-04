import { ProfileLinks } from "@/components/common/ProfileLinks";
import type { PortfolioContent, Profile } from "@/types/portfolio";

type HeroProps = Readonly<{
  profile: Profile;
  content: PortfolioContent["hero"];
  common: PortfolioContent["common"];
  cvHref?: string;
}>;

export function Hero({ profile, content, common, cvHref }: HeroProps) {
  return (
    <section aria-labelledby="hero-title" className="py-6">
      <h1 id="hero-title" className="text-2xl font-semibold">
        {profile.name}
      </h1>
      <p className="mt-3 font-semibold">{content.title}</p>
      <p className="mt-3">{content.summary}</p>
      <div className="mt-3 flex flex-wrap gap-4">
        <a href="#projects" className="underline">{content.projectsLabel}</a>
        {cvHref ? (
          <a href={cvHref} download className="underline">{content.cvLabel}</a>
        ) : null}
      </div>
      <ProfileLinks profile={profile} labels={common.links} />
    </section>
  );
}
