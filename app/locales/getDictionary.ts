import type { Locale } from "../i18n/config";

import type enDict from "./en.json";

export type Dictionary = typeof enDict;

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import("./en.json").then((mod) => mod.default),
};

/**
 * Loads the dictionary for the given locale.
 * Runs on the server only — zero client-side bundle impact.
 *
 * @example
 * ```tsx
 * // In a Server Component or page
 * const dict = await getDictionary("en");
 * return <h1>{dict.hero.heading}</h1>;
 * ```
 */
export async function getDictionary(locale: Locale = "en"): Promise<Dictionary> {
  const loader = dictionaries[locale] ?? dictionaries.en;
  return loader();
}
