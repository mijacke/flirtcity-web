import { MetadataRoute } from "next";

import { i18n } from "./i18n/config";

// Change this once you know the actual production domain string
export const BASE_URL = "https://flirtcity.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Generate a dynamic sitemap based on the available locales
  const routes = i18n.locales.map((lang) => ({
    url: `${BASE_URL}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
  }));

  return routes;
}
