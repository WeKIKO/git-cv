import type { Project } from "./types";
import { safeExternalUrl } from "./url";

export const PROJECT_PLATFORMS = [
  { key: "android_url", label: "Android", destination: "Google Play", icon: "play" },
  { key: "ios_url", label: "iOS", destination: "App Store", icon: "appStore" },
  { key: "ipad_url", label: "iPad", destination: "App Store", icon: "appStore" },
  { key: "macos_url", label: "macOS", destination: "App Store", icon: "appStore" },
  { key: "windows_url", label: "Windows", destination: "스토어 / 배포 URL", icon: "windows" },
  { key: "web_url", label: "Web", destination: "배포 URL", icon: "web" },
] as const;

export function getPlatformLinks(project: Project) {
  return PROJECT_PLATFORMS.flatMap((platform) => {
    const href = safeExternalUrl(project[platform.key]);
    return href ? [{ ...platform, href }] : [];
  });
}
