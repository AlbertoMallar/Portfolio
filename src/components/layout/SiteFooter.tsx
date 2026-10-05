import { Icon } from "@/components/ui/Icon";
import type { PortfolioContent, Profile } from "@/types/portfolio";

export function SiteFooter({
  profile,
  ui,
}: {
  profile: Profile;
  ui: PortfolioContent["ui"];
}) {
  return (
    <footer className="site-footer site-container">
      <div>
        <span className="footer-name">© 2026 {profile.name}</span>
        <span>{ui.footer}</span>
      </div>
      <a href="#top">
        {ui.backToTop}
        <Icon name="arrow" />
      </a>
    </footer>
  );
}
