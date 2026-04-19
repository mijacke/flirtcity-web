import Image from "next/image";
import type { CSSProperties } from "react";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const cardAssets = {
  modern: {
    asset: "/images/design/why-choose-flirtcity/bottom-2.svg",
    assetClassName:
      "left-1/2 bottom-0 top-auto w-[16.5em] -translate-x-1/2 max-[1025px]:w-[68%]",
    assetHeight: 290,
    assetWidth: 259,
    cardClassName:
      "h-[23.625em] p-[2.5em_1.875em]",
    mobileTitleClassName:
      "max-[1025px]:top-[1.5rem] max-[1025px]:bottom-auto max-[1025px]:left-1/2 max-[1025px]:w-[calc(100%-2.5rem)] max-[1025px]:max-w-none max-[1025px]:-translate-x-1/2 max-[1025px]:translate-y-0",
    titleClassName:
      "top-10 left-1/2 w-[calc(100%-3.75em)] max-w-[18.125em] -translate-x-1/2",
  },
  realProfiles: {
    asset: "/images/design/why-choose-flirtcity/top-1.svg",
    assetClassName:
      "left-[3.75em] w-[16.5em] max-[1025px]:top-0 max-[1025px]:left-1/2 max-[1025px]:w-[64%] max-[1025px]:-translate-x-1/2",
    assetHeight: 329,
    assetWidth: 259,
    cardClassName:
      "h-[23.8125em] p-[2.5em_3.75em]",
    mobileTitleClassName:
      "max-[1025px]:top-auto max-[1025px]:bottom-[1.5rem] max-[1025px]:left-1/2 max-[1025px]:w-[calc(100%-2.5rem)] max-[1025px]:max-w-none max-[1025px]:-translate-x-1/2 max-[1025px]:translate-y-0",
    titleClassName:
      "top-1/2 left-3/4 w-[calc(50%-1.5em)] max-w-[18.1875em] -translate-x-1/2 -translate-y-1/2",
  },
  safeEnvironment: {
    asset: "/images/design/why-choose-flirtcity/top-2.svg",
    assetClassName:
      "left-[1em] top-[5.4em] w-[20.75em] max-[1025px]:top-auto max-[1025px]:right-0 max-[1025px]:bottom-0 max-[1025px]:left-auto max-[1025px]:w-[88%] max-[1025px]:translate-x-0",
    assetHeight: 290,
    assetWidth: 332,
    cardClassName:
      "h-[23.625em] p-[2.5em_1.875em]",
    mobileTitleClassName:
      "max-[1025px]:top-[1.5rem] max-[1025px]:bottom-auto max-[1025px]:left-1/2 max-[1025px]:w-[calc(100%-2.5rem)] max-[1025px]:max-w-none max-[1025px]:-translate-x-1/2 max-[1025px]:translate-y-0",
    titleClassName:
      "top-10 left-1/2 w-[calc(100%-3.75em)] max-w-[18.125em] -translate-x-1/2",
  },
  smartMatches: {
    asset: "/images/design/why-choose-flirtcity/bottom-1.svg",
    assetClassName:
      "left-[60%] bottom-0 top-auto w-[27em] -translate-x-1/2 max-[1025px]:!hidden",
    assetHeight: 381,
    assetWidth: 430,
    cardClassName:
      "h-[23.8125em] p-[2.5em_3.75em]",
    mobileAsset: "/images/design/why-choose-flirtcity/smart-matches-mobile.svg",
    mobileAssetClassName:
       "!hidden max-[1025px]:!block max-[1025px]:top-0 max-[1025px]:right-0 max-[1025px]:left-auto max-[1025px]:w-[94%] max-[1025px]:translate-x-0",
    mobileAssetHeight: 292,
    mobileAssetWidth: 361,
    mobileTitleClassName:
      "max-[1025px]:top-auto max-[1025px]:bottom-[1.5rem] max-[1025px]:left-1/2 max-[1025px]:w-[calc(100%-2.5rem)] max-[1025px]:max-w-none max-[1025px]:-translate-x-1/2 max-[1025px]:translate-y-0",
    titleClassName:
      "top-1/2 left-[15%] w-[6.75em] -translate-x-1/2 -translate-y-1/2",
  },
  worksOnlyMobile: {
    asset: "/images/design/why-choose-flirtcity/middle-right.svg",
    assetClassName:
      "left-0 right-auto bottom-0 top-auto w-[21.875em] max-[1025px]:!hidden",
    assetHeight: 653,
    assetWidth: 350,
    cardClassName:
      "h-[49.125em] p-[2.5em_1.875em]",
    mobileAsset: "/images/design/why-choose-flirtcity/works-only-mobile.svg",
    mobileAssetClassName:
      "!hidden max-[1025px]:!block max-[1025px]:left-0 max-[1025px]:right-0 max-[1025px]:bottom-0 max-[1025px]:top-auto max-[1025px]:w-full max-[1025px]:translate-x-0",
    mobileAssetHeight: 283,
    mobileAssetWidth: 361,
    mobileTitleClassName:
      "max-[1025px]:top-[1.5rem] max-[1025px]:bottom-auto max-[1025px]:left-1/2 max-[1025px]:w-[calc(100%-2.5rem)] max-[1025px]:max-w-none max-[1025px]:-translate-x-1/2 max-[1025px]:translate-y-0",
    titleClassName:
      "top-10 left-1/2 w-[calc(100%-3.75em)] max-w-[18.125em] -translate-x-1/2",
  },
} as const;

type CardKey = keyof typeof cardAssets;

function WhyChooseCard({
  cardKey,
  className = "",
  title,
  delay = 0,
}: {
  cardKey: CardKey;
  className?: string;
  title: string;
  delay?: number;
}) {
  const card = cardAssets[cardKey];

  return (
    <FadeIn
      as="article"
      className={`relative overflow-hidden rounded-[1.25em] bg-[var(--surface-panel-bg)] border border-[var(--surface-panel-border)] max-[1025px]:aspect-square max-[1025px]:h-auto max-[1025px]:p-0 ${card.cardClassName} ${className}`}
      delay={delay}
      offset={36}
    >
      <h3
        className={`absolute z-2 m-0 text-[1.375em] font-semibold leading-[1.181818] tracking-[-0.11px] text-center max-[1025px]:text-[clamp(1.125rem,2.6vw,1.375rem)] ${card.titleClassName} ${card.mobileTitleClassName}`}
      >
        {title}
      </h3>
      <div className="absolute inset-0 pointer-events-none">
        <Image
          alt=""
          aria-hidden="true"
          className={`absolute block max-w-none h-auto ${card.assetClassName}`}
          height={card.assetHeight}
          src={card.asset}
          width={card.assetWidth}
        />
        {"mobileAsset" in card ? (
          <Image
            alt=""
            aria-hidden="true"
            className={`absolute max-w-none h-auto ${card.mobileAssetClassName}`}
            height={card.mobileAssetHeight}
            src={card.mobileAsset}
            width={card.mobileAssetWidth}
          />
        ) : null}
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
            className="grid grid-cols-[minmax(0,1fr)_var(--card-w)_var(--card-w)] gap-[var(--card-gap)] min-[1282px]:grid-rows-[23.8125em_23.8125em] min-[1282px]:[font-size:clamp(0.84rem,0.6095vw+0.352rem,1rem)] max-[1281px]:grid-cols-[minmax(0,1fr)_var(--card-w)] max-[1281px]:grid-rows-[23.8125em_23.8125em_23.625em] max-[1281px]:gap-5 max-[1025px]:mx-auto max-[1025px]:w-full max-[1025px]:max-w-[46rem] max-[1025px]:grid-cols-2 max-[1025px]:grid-rows-none max-[1025px]:[font-size:1rem] max-[720px]:grid-cols-1 max-[720px]:max-w-[21.875rem] max-[720px]:[font-size:clamp(0.75rem,calc((100vw-2rem)/21.875),1rem)]"
            style={
              {
                "--card-w": "21.875em",
                "--card-gap": "1.875em",
              } as CSSProperties
            }
          >
            <WhyChooseCard
              cardKey="realProfiles"
              className="min-[1282px]:col-start-1 min-[1282px]:row-start-1 max-[1281px]:col-start-1 max-[1281px]:row-start-1 max-[1025px]:order-1 max-[1025px]:col-start-auto max-[1025px]:row-start-auto"
              title={dict.cards.realProfiles}
            />
            <WhyChooseCard
              cardKey="worksOnlyMobile"
              className="min-[1282px]:col-start-3 min-[1282px]:row-start-1 min-[1282px]:row-span-2 max-[1281px]:col-start-2 max-[1281px]:row-start-1 max-[1281px]:row-span-2 max-[1025px]:order-5 max-[1025px]:col-start-auto max-[1025px]:row-start-auto max-[1025px]:row-span-1"
              delay={0.22}
              title={dict.cards.worksOnlyMobile}
            />
            <div className="grid gap-[var(--card-gap)] min-[1282px]:col-start-2 min-[1282px]:row-start-1 min-[1282px]:row-span-2 max-[1281px]:col-start-1 max-[1281px]:row-start-3 max-[1281px]:col-span-2 max-[1281px]:grid-cols-[var(--card-w)_var(--card-w)] max-[1281px]:justify-start max-[1025px]:contents">
              <WhyChooseCard
                cardKey="safeEnvironment"
                className="max-[1025px]:order-3 max-[720px]:!order-2"
                title={dict.cards.safeEnvironment}
                delay={0.12}
              />
              <WhyChooseCard
                cardKey="modern"
                className="max-[1025px]:order-4"
                title={dict.cards.modern}
                delay={0.18}
              />
            </div>
            <WhyChooseCard
              cardKey="smartMatches"
              className="min-[1282px]:col-start-1 min-[1282px]:row-start-2 max-[1281px]:col-start-1 max-[1281px]:row-start-2 max-[1025px]:order-2 max-[720px]:!order-3 max-[1025px]:col-start-auto max-[1025px]:row-start-auto"
              delay={0.08}
              title={dict.cards.smartMatches}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
