import type { Metadata } from "next";
import { Outfit, Montserrat } from "next/font/google";
import { notFound } from "next/navigation";

import { i18n, isLocale } from "../i18n/config";
import { getSiteUrlObject } from "../lib/site";
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

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);
  const metadataBase = getSiteUrlObject();

  return {
    metadataBase,
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      canonical: `/${lang}`,
    },
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
      url: `/${lang}`,
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

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <html lang={lang} className={`${outfit.variable} ${montserrat.variable}`}>
      <body>
        {children}
      </body>
    </html>
  );
}
