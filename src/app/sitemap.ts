import type { MetadataRoute } from "next";
import { activities } from "@/data/activities";
import { locals } from "@/data/locals";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/things-to-do", "/locals", "/eat", "/stay", "/plan", "/join", "/about"];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route}` })),
    ...activities.map((activity) => ({ url: `${siteConfig.url}/things-to-do/${activity.slug}` })),
    ...locals
      .filter((local) => !local.isExample)
      .map((local) => ({ url: `${siteConfig.url}/locals/${local.slug}` })),
  ];
}
