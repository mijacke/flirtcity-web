import { MetadataRoute } from "next";

import { i18n } from "./i18n/config";
import { getSiteUrl } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();

  // Generate a dynamic sitemap based on the available locales
  const routes = i18n.locales.map((lang) => ({
    url: `${siteUrl}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  return routes;
}
