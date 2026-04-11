import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DownloadCTA from "../components/sections/DownloadCTA";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Security from "../components/sections/Security";
import UserStories from "../components/sections/UserStories";
import WhyChoose from "../components/sections/WhyChoose";
import type { Locale } from "../i18n/config";
import { i18n } from "../i18n/config";
import { getDictionary } from "../locales/getDictionary";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang: rawLang } = await params;
  const locale = (i18n.locales as readonly string[]).includes(rawLang)
    ? (rawLang as Locale)
    : i18n.defaultLocale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Header dict={dict.header} />
      <main>
        <Hero dict={dict.hero} />
        <HowItWorks dict={dict.howItWorks} />
        <WhyChoose dict={dict.whyChoose} />
        <UserStories dict={dict.userStories} />
        <Security dict={dict.security} />
        <DownloadCTA dict={dict.downloadCta} />
      </main>
      <Footer dict={dict.footer} />
    </>
  );
}
