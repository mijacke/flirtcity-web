import { notFound } from "next/navigation";

import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import DownloadCTA from "../components/sections/DownloadCTA";
import Hero from "../components/sections/Hero";
import HowItWorks from "../components/sections/HowItWorks";
import Security from "../components/sections/Security";
import UserStories from "../components/sections/UserStories";
import WhyChoose from "../components/sections/WhyChoose";
import { isLocale } from "../i18n/config";
import { getDictionary } from "../locales/getDictionary";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function Home({ params }: PageProps) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang);

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
