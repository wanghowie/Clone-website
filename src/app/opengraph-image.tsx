import { siteConfig } from "@/data/site";
import { ogContentType, ogSize, renderOgImage } from "@/lib/og";

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOgImage({
    eyebrow: "Dauin · Negros Oriental · Philippines",
    title: "Dive, explore and meet the locals of Dauin.",
    subtitle: "Muck diving, Apo Island turtles and hot springs — plus the drivers, boatmen and guides who live here.",
  });
}
