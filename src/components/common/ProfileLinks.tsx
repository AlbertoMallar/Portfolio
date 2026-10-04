import type { PortfolioContent, Profile } from "@/types/portfolio";

type ProfileLinksProps = Readonly<{
  profile: Profile;
  labels: PortfolioContent["common"]["links"];
}>;

export function ProfileLinks({ profile, labels }: ProfileLinksProps) {
  if (!profile.githubUrl && !profile.linkedinUrl) return null;

  return (
    <ul className="mt-3 flex flex-wrap gap-4">
      {profile.githubUrl ? (
        <li><a href={profile.githubUrl} className="underline">{labels.github}</a></li>
      ) : null}
      {profile.linkedinUrl ? (
        <li><a href={profile.linkedinUrl} className="underline">{labels.linkedin}</a></li>
      ) : null}
    </ul>
  );
}
