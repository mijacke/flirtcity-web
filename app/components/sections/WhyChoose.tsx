import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const cardAssets = {
  modern: {
    asset: "/images/design/why-choose-flirtcity/bottom-2.svg",
    assetClassName: "left-1/2 bottom-0 top-auto w-[16.1875rem] -translate-x-1/2 max-[800px]:left-1/2 max-[800px]:top-1/2 max-[800px]:-translate-x-1/2 max-[800px]:-translate-y-1/2 max-[800px]:w-auto max-[800px]:max-w-[min(100%,24rem)]",
    assetHeight: 290,
    assetWidth: 259,
    cardClassName: "h-[23.625rem] p-[2.5rem_1.875rem] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-6 max-[800px]:h-auto max-[800px]:min-h-[23rem] max-[800px]:p-[1.875rem_1.5rem]",
    titleClassName: "top-10 left-[1.875rem] w-[18.125rem] max-[800px]:static max-[800px]:w-full max-[800px]:transform-none",
  },
  realProfiles: {
    asset: "/images/design/why-choose-flirtcity/top-1.svg",
    assetClassName: "left-[3.75rem] w-[16.1875rem] max-[800px]:left-1/2 max-[800px]:top-1/2 max-[800px]:-translate-x-1/2 max-[800px]:-translate-y-1/2 max-[800px]:w-auto max-[800px]:max-w-[min(100%,24rem)]",
    assetHeight: 329,
    assetWidth: 259,
    cardClassName: "h-[23.8125rem] p-[2.5rem_3.75rem] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-6 max-[800px]:h-auto max-[800px]:min-h-[23rem] max-[800px]:p-[1.875rem_1.5rem]",
    titleClassName: "top-[11.03125rem] left-[20.5625rem] w-[18.1875rem] -translate-y-1/2 max-[800px]:static max-[800px]:w-full max-[800px]:transform-none",
  },
  safeEnvironment: {
    asset: "/images/design/why-choose-flirtcity/top-2.svg",
    assetClassName: "left-4 top-[5.4rem] w-[20.75rem] max-[800px]:left-1/2 max-[800px]:top-1/2 max-[800px]:-translate-x-1/2 max-[800px]:-translate-y-1/2 max-[800px]:w-auto max-[800px]:max-w-[min(100%,24rem)]",
    assetHeight: 290,
    assetWidth: 332,
    cardClassName: "h-[23.625rem] p-[2.5rem_1.875rem] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-6 max-[800px]:h-auto max-[800px]:min-h-[23rem] max-[800px]:p-[1.875rem_1.5rem]",
    titleClassName: "top-10 left-[1.875rem] w-[18.125rem] max-[800px]:static max-[800px]:w-full max-[800px]:transform-none",
  },
  smartMatches: {
    asset: "/images/design/why-choose-flirtcity/bottom-1.svg",
    assetClassName: "left-[60%] bottom-0 top-auto w-[26.875rem] -translate-x-1/2 max-[800px]:left-1/2 max-[800px]:top-1/2 max-[800px]:-translate-x-1/2 max-[800px]:-translate-y-1/2 max-[800px]:w-auto max-[800px]:max-w-[min(100%,24rem)]",
    assetHeight: 381,
    assetWidth: 430,
    cardClassName: "h-[23.8125rem] p-[2.5rem_3.75rem] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-6 max-[800px]:h-auto max-[800px]:min-h-[23rem] max-[800px]:p-[1.875rem_1.5rem]",
    titleClassName: "top-[10.15625rem] left-[3.75rem] w-[7.25rem] -translate-y-1/2 max-[800px]:static max-[800px]:w-full max-[800px]:transform-none",
  },
  worksOnlyMobile: {
    asset: "/images/design/why-choose-flirtcity/middle-right.svg",
    assetClassName: "left-0 right-auto bottom-0 top-auto w-[21.875rem] max-xl:left-1/2 max-xl:top-[4.5rem] max-xl:w-72 max-xl:-translate-x-1/2 max-[800px]:left-1/2 max-[800px]:top-1/2 max-[800px]:-translate-x-1/2 max-[800px]:-translate-y-1/2 max-[800px]:w-auto max-[800px]:max-w-[min(100%,18rem)]",
    assetHeight: 653,
    assetWidth: 350,
    cardClassName: "h-[49.125rem] p-[2.5rem_1.875rem] max-xl:col-span-full max-xl:h-[28rem] max-[800px]:flex max-[800px]:flex-col max-[800px]:items-center max-[800px]:gap-6 max-[800px]:h-auto max-[800px]:min-h-[32rem] max-[800px]:p-[1.875rem_1.5rem]",
    titleClassName: "top-10 left-[1.875rem] w-[18.125rem] max-xl:left-1/2 max-xl:-translate-x-1/2 max-[800px]:static max-[800px]:w-full max-[800px]:transform-none",
  },
} as const;

type CardKey = keyof typeof cardAssets;

function WhyChooseCard({
  cardKey,
  title,
  delay = 0,
}: {
  cardKey: CardKey;
  title: string;
  delay?: number;
}) {
  const card = cardAssets[cardKey];

  return (
    <FadeIn
      as="article"
      className={`relative overflow-hidden rounded-[1.25rem] bg-[var(--surface-panel-bg)] border border-[var(--surface-panel-border)] ${card.cardClassName}`}
      delay={delay}
      offset={36}
    >
      <h3 className={`absolute z-2 m-0 text-[1.375rem] font-semibold leading-[1.181818] tracking-[-0.11px] text-center ${card.titleClassName}`}>
        {title}
      </h3>
      <div className="absolute inset-0 pointer-events-none max-[800px]:relative max-[800px]:w-full max-[800px]:h-72 max-[800px]:[&.tall]:h-96">
        <Image
          alt=""
          aria-hidden="true"
          className={`absolute block max-w-none h-auto ${card.assetClassName}`}
          height={card.assetHeight}
          src={card.asset}
          width={card.assetWidth}
        />
      </div>
    </FadeIn>
  );
}

type WhyChooseProps = {
  dict: Dictionary["whyChoose"];
};

export default function WhyChoose({ dict }: WhyChooseProps) {
  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="features">
      <div className="section-shell section-stack">
        <div className="section-frame grid gap-20 max-[800px]:gap-[3.75rem]">
          <SectionHeading title={dict.sectionTitle} />

          <div className="grid grid-cols-[1fr_21.875rem_21.875rem] gap-[1.875rem] max-xl:grid-cols-2 max-[800px]:grid-cols-1">
            <div className="grid gap-[1.875rem] min-w-0">
              <WhyChooseCard cardKey="realProfiles" title={dict.cards.realProfiles} />
              <WhyChooseCard cardKey="smartMatches" title={dict.cards.smartMatches} delay={0.08} />
            </div>

            <div className="grid gap-[1.875rem]">
              <WhyChooseCard cardKey="safeEnvironment" title={dict.cards.safeEnvironment} delay={0.12} />
              <WhyChooseCard cardKey="modern" title={dict.cards.modern} delay={0.18} />
            </div>

            <WhyChooseCard cardKey="worksOnlyMobile" title={dict.cards.worksOnlyMobile} delay={0.22} />
          </div>
        </div>
      </div>
    </section>
  );
}
