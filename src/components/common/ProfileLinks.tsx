import { Icon } from "@/components/ui/Icon";
import type { PortfolioContent, Profile } from "@/types/portfolio";

export function ProfileLinks({
  profile,
  labels,
}: {
  profile: Profile;
  labels: PortfolioContent["common"]["links"];
}) {
  return (
    <ul className="social-links">
      {profile.githubUrl ? (
        <li>
          <a href={profile.githubUrl}>
            <Icon name="github" />
            {labels.github}
            <Icon name="external" className="small-icon" />
          </a>
        </li>
      ) : null}
      {profile.linkedinUrl ? (
        <li>
          <a href={profile.linkedinUrl}>
            <Icon name="linkedin" />
            {labels.linkedin}
            <Icon name="external" className="small-icon" />
          </a>
        </li>
      ) : null}
    </ul>
  );
}
