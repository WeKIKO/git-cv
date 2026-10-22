import { ArrowUpRight, Globe } from "lucide-react";
import { AppStoreIcon, GooglePlayIcon, WindowsIcon } from "@/components/ui/BrandIcons";
import { getPlatformLinks } from "@/lib/projectPlatforms";
import type { Project } from "@/lib/types";

const icons = { play: GooglePlayIcon, appStore: AppStoreIcon, windows: WindowsIcon, web: Globe };

/** No wrapper (or empty spacing) is rendered unless a usable URL exists. */
export function ProjectPlatformLinks({ project, className }: { project: Project; className?: string }) {
  const links = getPlatformLinks(project);
  if (!links.length) return null;
  const buttons = links.map(({ key, label, icon, href }) => {
    const Icon = icons[icon];
    return (
      <a key={key} href={href} target="_blank" rel="noopener noreferrer"
        className="btn btn-secondary btn-sm"
      >
        <Icon className="size-3.5 shrink-0" aria-hidden="true" />
        {label}
        <ArrowUpRight className="size-3" aria-hidden="true" />
      </a>
    );
  });
  return className ? <div className={className}>{buttons}</div> : <>{buttons}</>;
}
