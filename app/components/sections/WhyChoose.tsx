import Image from "next/image";
import type { CSSProperties } from "react";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const cardAssets = {
  modern: {
    asset: "/images/design/why-choose-flirtcity/bottom-2.svg",
    assetClassName:
      "left-1/2 bottom-0 top-auto w-[16.1875em] -translate-x-1/2 max-[1280px]:static max-[1280px]:transform-none max-[1280px]:w-auto max-[1280px]:max-h-full max-[1280px]:max-w-[min(100%,18rem)]",
    assetHeight: 290,
    assetWidth: 259,
    cardClassName:
      "h-[23.625em] p-[2.5em_1.875em] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:gap-4 max-[1280px]:h-auto max-[1280px]:min-h-[22rem] max-[1280px]:p-[1.75rem_1.5rem]",
    titleClassName:
      "top-10 left-[1.875em] w-[18.125em] max-[1280px]:static max-[1280px]:w-full max-[1280px]:transform-none",
  },
  realProfiles: {
    asset: "/images/design/why-choose-flirtcity/top-1.svg",
    assetClassName:
      "left-[3.75em] w-[16.1875em] max-[1280px]:static max-[1280px]:transform-none max-[1280px]:w-auto max-[1280px]:max-h-full max-[1280px]:max-w-[min(100%,18rem)]",
    assetHeight: 329,
    assetWidth: 259,
    cardClassName:
      "h-[23.8125em] p-[2.5em_3.75em] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:gap-4 max-[1280px]:h-auto max-[1280px]:min-h-[22rem] max-[1280px]:p-[1.75rem_1.5rem]",
    titleClassName:
      "top-[11.03125em] left-[20.5625em] w-[18.1875em] -translate-y-1/2 max-[1280px]:static max-[1280px]:w-full max-[1280px]:transform-none",
  },
  safeEnvironment: {
    asset: "/images/design/why-choose-flirtcity/top-2.svg",
    assetClassName:
      "left-[1em] top-[5.4em] w-[20.75em] max-[1280px]:static max-[1280px]:transform-none max-[1280px]:w-auto max-[1280px]:max-h-full max-[1280px]:max-w-[min(100%,20rem)]",
    assetHeight: 290,
    assetWidth: 332,
    cardClassName:
      "h-[23.625em] p-[2.5em_1.875em] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:gap-4 max-[1280px]:h-auto max-[1280px]:min-h-[22rem] max-[1280px]:p-[1.75rem_1.5rem]",
    titleClassName:
      "top-10 left-[1.875em] w-[18.125em] max-[1280px]:static max-[1280px]:w-full max-[1280px]:transform-none",
  },
  smartMatches: {
    asset: "/images/design/why-choose-flirtcity/bottom-1.svg",
    assetClassName:
      "left-[60%] bottom-0 top-auto w-[26.875em] -translate-x-1/2 max-[1280px]:static max-[1280px]:transform-none max-[1280px]:w-auto max-[1280px]:max-h-full max-[1280px]:max-w-[min(100%,22rem)]",
    assetHeight: 381,
    assetWidth: 430,
    cardClassName:
      "h-[23.8125em] p-[2.5em_3.75em] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:gap-4 max-[1280px]:h-auto max-[1280px]:min-h-[22rem] max-[1280px]:p-[1.75rem_1.5rem]",
    titleClassName:
      "top-[10.15625em] left-[3.75em] w-[7.25em] -translate-y-1/2 max-[1280px]:static max-[1280px]:w-full max-[1280px]:transform-none",
  },
  worksOnlyMobile: {
    asset: "/images/design/why-choose-flirtcity/middle-right.svg",
    assetClassName:
      "left-0 right-auto bottom-0 top-auto w-[21.875em] max-[1280px]:static max-[1280px]:transform-none max-[1280px]:w-auto max-[1280px]:max-h-full max-[1280px]:max-w-[min(100%,16rem)]",
    assetHeight: 653,
    assetWidth: 350,
    cardClassName:
      "h-[49.125em] p-[2.5em_1.875em] max-[1280px]:flex max-[1280px]:flex-col max-[1280px]:items-center max-[1280px]:text-center max-[1280px]:gap-4 max-[1280px]:h-auto max-[1280px]:min-h-[22rem] max-[1280px]:p-[1.75rem_1.5rem] max-[1280px]:col-span-2 max-[720px]:col-span-1",
    titleClassName:
      "top-10 left-[1.875em] w-[18.125em] max-[1280px]:static max-[1280px]:w-full max-[1280px]:transform-none",
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
      className={`relative overflow-hidden rounded-[1.25em] bg-[var(--surface-panel-bg)] border border-[var(--surface-panel-border)] ${card.cardClassName}`}
      delay={delay}
      offset={36}
    >
      <h3
        className={`absolute z-2 m-0 text-[1.375em] font-semibold leading-[1.181818] tracking-[-0.11px] text-center max-[1280px]:text-[1.25rem] ${card.titleClassName}`}
      >
        {title}
      </h3>
      <div className="absolute inset-0 pointer-events-none max-[1280px]:static max-[1280px]:flex-1 max-[1280px]:flex max-[1280px]:items-end max-[1280px]:justify-center max-[1280px]:w-full max-[1280px]:min-h-0 max-[1280px]:overflow-hidden">
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
        <div className="section-frame grid gap-[clamp(2.5rem,4vw,5rem)]">
          <SectionHeading title={dict.sectionTitle} />

          <div
            className="grid grid-cols-[minmax(0,1fr)_var(--card-w)_var(--card-w)] gap-[var(--card-gap)] min-[1281px]:[font-size:clamp(0.84rem,0.6095vw+0.352rem,1rem)] max-[1280px]:grid-cols-2 max-[1280px]:gap-5 max-[720px]:grid-cols-1 max-[720px]:max-w-[28rem] max-[720px]:mx-auto max-[720px]:w-full"
            style={
              {
                "--card-w": "21.875em",
                "--card-gap": "1.875em",
              } as CSSProperties
            }
          >
            {/* Desktop left column */}
            <div className="grid gap-[var(--card-gap)] min-w-0 max-[1280px]:contents">
              <WhyChooseCard cardKey="realProfiles" title={dict.cards.realProfiles} />
              <WhyChooseCard cardKey="smartMatches" title={dict.cards.smartMatches} delay={0.08} />
            </div>

            {/* Desktop middle column */}
            <div className="grid gap-[var(--card-gap)] max-[1280px]:contents">
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
