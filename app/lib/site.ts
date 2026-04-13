const DEFAULT_SITE_URL = "https://flirtcity.com";

export function getSiteUrl() {
  const candidate = (process.env.SITE_URL ?? DEFAULT_SITE_URL).trim();

  try {
    const url = new URL(candidate);
    return url.toString().replace(/\/$/, "");
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export function getSiteUrlObject() {
  return new URL(getSiteUrl());
}
