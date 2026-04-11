import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";

import type { Locale } from "../i18n/config";
import { i18n } from "../i18n/config";
import { getDictionary } from "../locales/getDictionary";

import "../globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

/** Tell Next.js which locale paths to statically generate. */
export function generateStaticParams() {
  return i18n.locales.map((lang) => ({ lang }));
}

/** Dynamic, locale-aware SEO metadata. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale = (i18n.locales as readonly string[]).includes(lang)
    ? (lang as Locale)
    : i18n.defaultLocale;
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    keywords: [
      "LGBTQ+ dating",
      "gay dating app",
      "queer community",
      "dating app",
      "Flirtcity",
      "LGBTQ+ connections",
    ],
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
      type: "website",
      locale: lang,
      siteName: "Flirtcity",
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.ogTitle,
      description: dict.meta.ogDescription,
    },
  };
}

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;
  return (
    <html lang={lang} className={`${outfit.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
