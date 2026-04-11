import Image from "next/image";

import GradientText from "../ui/GradientText";
import StoreButton from "../ui/StoreButton";

import type { Dictionary } from "@/app/locales/getDictionary";

const matchItemAssets = [
  {
    className: "left-[69.1566%] top-[18.3333%] w-[6.8082%] h-[17.037%] rounded-[13.8px] max-xl:top-16 max-xl:right-[4.4rem] max-xl:left-auto max-xl:w-[8.6rem] max-xl:h-auto max-xl:p-[0.45rem_0.45rem_0.7rem] max-xl:gap-[0.35rem] max-[900px]:top-4 max-[900px]:right-0 max-[900px]:w-[6.2rem]",
    image: "/images/design/hero/hero-profile-top.png",
    showBadge: true,
    size: "large" as const,
  },
  {
    className: "left-[37.8298%] top-[81.4815%] w-[5.9201%] h-[14.8148%] rounded-[12px] max-xl:left-[11.5rem] max-xl:right-auto max-xl:top-auto max-xl:bottom-[10.75rem] max-xl:w-[4.4rem] max-xl:h-auto max-xl:p-[0.25rem_0.25rem_0.35rem] max-xl:gap-[0.15rem] max-[900px]:left-[1.2rem] max-[900px]:bottom-36",
    image: "/images/design/hero/hero-profile-bottom.png",
    showBadge: false,
    size: "small" as const,
  },
] as const;

/* ── Match Card Sub-component ── */
function MatchCard({
  asset,
  name,
  age,
  city,
  distance,
  newBadgeLabel,
}: {
  asset: (typeof matchItemAssets)[number];
  name: string;
  age: number;
  city: string;
  distance: string;
  newBadgeLabel: string;
}) {
  const isLarge = asset.size === "large";

  return (
    <article
      className={`absolute z-4 overflow-hidden bg-[rgba(23,7,43,0.96)] shadow-[0_16px_28px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.08)] ${asset.className}`}
    >
      {/* Image layer with gradient overlay */}
      <div className="relative w-full h-full [&_img]:object-cover after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(23,7,43,0)_0%,rgba(23,7,43,1)_100%),center/cover_no-repeat_url('/images/design/hero/photo-effect.png')] after:opacity-94 after:pointer-events-none">
        <Image
          alt={`Featured profile ${name}`}
          fill
          sizes={isLarge ? "131px" : "114px"}
          src={asset.image}
        />
      </div>

      {/* Content overlay */}
      <div
        className={`absolute right-0 bottom-0 left-0 grid justify-items-center content-end text-white ${isLarge
          ? "min-h-[92px] pb-[11.5px] gap-[4.6px]"
          : "min-h-[80px] pb-2.5 gap-1"
          }`}
      >
        <div className="flex items-center justify-center w-full">
          <span
            className={`font-semibold text-center text-white ${isLarge
              ? "text-[16.1px] leading-[1.142857] tracking-[-0.575px] max-xl:text-[0.72rem] max-xl:tracking-normal"
              : "text-[14px] leading-[1.142857] tracking-[-0.4px] max-xl:text-[0.72rem]"
              }`}
          >
            {name}, {age}
          </span>
        </div>
        <span
          className={`text-center text-white/50 ${isLarge
            ? "text-[12.65px] leading-[1.090909] tracking-[-0.575px] max-xl:text-[0.54rem] max-xl:leading-[1.2] max-xl:tracking-normal"
            : "text-[11px] leading-[1.090909] tracking-[-0.5px] max-xl:text-[0.54rem] max-xl:leading-[1.2] max-xl:tracking-normal"
            }`}
        >
          {city}
        </span>
        <span
          className={`inline-flex items-center justify-center text-white bg-white/15 backdrop-blur-[10px] ${isLarge
            ? "text-[12.65px] leading-[1.090909] tracking-[-0.575px] rounded-[36.8px] px-[6.9px] py-[3.45px]"
            : "text-[11px] leading-[1.090909] tracking-[-0.5px] rounded-[32px] px-1.5 py-[3px]"
            }`}
        >
          {distance}
        </span>
      </div>

      {/* NEW badge */}
      {asset.showBadge ? (
        <span className="absolute top-[4.6px] right-[4.6px] px-[5.75px] py-[4.6px] rounded-[11.5px] bg-[var(--color-accent-pink)] text-[11.5px] font-semibold leading-none max-xl:top-[0.3rem] max-xl:right-[0.3rem] max-xl:px-[0.28rem] max-xl:py-[0.16rem] max-xl:rounded-full max-xl:text-[0.45rem] max-xl:tracking-[0.06em]">
          {newBadgeLabel}
        </span>
      ) : null}
    </article>
  );
}

/* ── Photo Asset Sub-component ── */
function PhotoAsset({
  alt,
  className,
  src,
  sizes,
  priority = false,
}: {
  alt: string;
  className: string;
  src: string;
  sizes: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`absolute z-0 overflow-hidden pointer-events-none after:content-[''] after:absolute after:inset-0 after:z-1 after:bg-[center/cover_no-repeat_url('/images/design/hero/photo-effect.png')] after:opacity-40 after:pointer-events-none ${className}`}
    >
      <Image
        alt={alt}
        className="object-cover"
        fill
        priority={priority}
        sizes={sizes}
        src={src}
      />
    </div>
  );
}

type HeroProps = {
  dict: Dictionary["hero"];
};

/* ── Main Hero Section ── */
export default function Hero({ dict }: HeroProps) {
  return (
    <section className="relative overflow-x-clip overflow-y-visible min-h-[min(1080px,56.25vw)] scroll-mt-[calc(var(--header-height)+1rem)] max-xl:min-h-auto max-[900px]:pt-[calc(var(--header-height)+1rem)]" id="about">
      <div className="relative h-[min(1080px,56.25vw)] max-xl:h-auto">
        <div className="relative w-[min(1920px,100vw)] aspect-[1920/1080] mx-auto max-xl:relative max-xl:left-auto max-xl:top-auto max-xl:transform-none max-xl:grid max-xl:grid-cols-1 max-xl:w-[min(100%,var(--content-width))] max-xl:h-auto max-xl:min-h-auto max-xl:pb-8 max-xl:mx-auto max-[900px]:gap-6">

          {/* Photo collage assets */}
          <PhotoAsset
            alt="Crystal texture"
            className="top-[-3.2407%] left-[26.5625%] w-[18.3854%] h-[19.8148%] rounded-b-[22px] opacity-78 max-xl:top-[-0.25rem] max-xl:left-1/2 max-xl:w-[13.2rem] max-xl:h-32 max-xl:-translate-x-1/2 max-sm:w-40 max-sm:h-[6.06rem]"
            priority
            sizes="18.3854vw"
            src="/images/design/hero/hero-prism-strip.jpg"
          />
          <PhotoAsset
            alt="Hands with rainbow bracelets"
            className="left-[-5.8854%] top-[20.6481%] w-[11.7708%] h-[19.8148%] rounded-[20px] opacity-88 max-xl:hidden"
            sizes="11.7708vw"
            src="/images/design/hero/hero-hands.png"
          />
          <PhotoAsset
            alt="Rainbow dancer"
            className="left-[4.1667%] top-[77.1296%] w-[16.5104%] h-[43.9815%] rounded-[20px] opacity-92 max-xl:hidden"
            sizes="16.5104vw"
            src="/images/design/hero/hero-dancer.jpg"
          />
          <PhotoAsset
            alt="Rainbow prism detail"
            className="top-[26.8519%] left-[91.1979%] w-[11.0417%] h-[26.2037%] rounded-[20px] opacity-88 max-xl:top-[5.6rem] max-xl:right-[-3.2rem] max-xl:left-auto max-xl:w-[10.2rem] max-xl:h-[13.61rem] max-[900px]:top-12 max-[900px]:right-[-2rem] max-[900px]:w-28 max-[900px]:h-[9.35rem] max-sm:hidden"
            sizes="11.0417vw"
            src="/images/design/hero/hero-prism-right.png"
          />
          <PhotoAsset
            alt="Portrait detail"
            className="top-[63.8889%] left-[74.3229%] w-[11.6146%] h-[28.1481%] rounded-[20px] max-xl:right-[4.6rem] max-xl:bottom-52 max-xl:left-auto max-xl:top-auto max-xl:w-[10.2rem] max-xl:h-[13.89rem] max-[900px]:right-4 max-[900px]:bottom-[8.6rem] max-[900px]:w-[7.4rem] max-[900px]:h-[10.1rem]"
            sizes="11.6146vw"
            src="/images/design/hero/hero-portrait-right.jpg"
          />
          <PhotoAsset
            alt="Friends together"
            className="top-[99.1667%] left-[59.5313%] w-[14.0104%] h-[14.2593%] rounded-[20px] max-xl:right-[16.2rem] max-xl:bottom-[4.5rem] max-xl:left-auto max-xl:top-auto max-xl:w-40 max-xl:h-[5.72rem] max-[900px]:right-28 max-[900px]:bottom-8 max-[900px]:w-32 max-[900px]:h-[4.58rem] max-sm:hidden"
            sizes="14.0104vw"
            src="/images/design/hero/hero-group.png"
          />

          {/* Logo symbol */}
          <div className="absolute top-[56.8519%] left-[59.9479%] w-[10.8854%] h-[14.7222%] z-4">
            <Image
              alt="Flirtcity decorative symbol"
              className="object-fill"
              fill
              sizes="10.8854vw"
              src="/images/design/hero/logo_symbol-flirtcity.png"
            />
          </div>

          <PhotoAsset
            alt="Small gem detail"
            className="top-[85.8333%] left-[82.8125%] w-[9.4271%] h-[18.8889%] rounded-[20px] max-xl:right-16 max-xl:bottom-[6.2rem] max-xl:left-auto max-xl:top-auto max-xl:w-[6.7rem] max-xl:h-[7.56rem] max-[900px]:right-3 max-[900px]:bottom-[2.6rem] max-[900px]:w-[5.25rem] max-[900px]:h-[5.92rem]"
            sizes="9.4271vw"
            src="/images/design/hero/hero-gem-small.png"
          />

          {/* Copy block */}
          <div className="absolute left-[12.5%] top-[29.9074%] z-2 grid w-[29.4792%] gap-6 max-xl:relative max-xl:top-auto max-xl:left-auto max-xl:w-[min(100%,42rem)] max-xl:justify-self-center max-xl:text-center max-xl:justify-items-center">
            <div className="grid gap-2.5">
              <h1 className="m-0 w-full text-[clamp(46px,3.2292vw,62px)] font-medium leading-[1.354838] tracking-[-0.5px] max-xl:text-[clamp(4rem,4.2vw,4.875rem)] max-sm:text-[3.5rem]">
                {dict.heading}
              </h1>
              <p className="m-0 text-[clamp(27px,1.875vw,36px)] font-semibold leading-[1.222222] tracking-[-0.18px] max-xl:text-[clamp(2rem,2.2vw,2.25rem)] max-sm:text-[1.85rem]">
                <GradientText>{dict.subheading}</GradientText>
              </p>
            </div>

            <p className="m-0 w-full text-[clamp(13px,0.8854vw,17px)] leading-[1.333333] tracking-[-0.5px] text-white/92 max-xl:text-[1.125rem] max-xl:max-w-[42rem] max-sm:text-base max-sm:leading-[1.5]">
              {dict.description}
            </p>
          </div>

          {/* Phone visual — replaced <img> with Next.js <Image> */}
          <div className="absolute left-[47.1875%] top-[22.375%] z-2 w-[18.6979%] h-[55.25%] max-xl:relative max-xl:left-auto max-xl:top-auto max-xl:w-[min(100%,46rem)] max-xl:min-h-[42rem] max-xl:justify-self-center max-[900px]:min-h-[34rem] max-sm:min-h-[31rem]">
            <Image
              alt="Secondary Flirtcity phone screen"
              className="absolute h-auto object-cover drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] left-[23.1755%] top-[15.1194%] z-2 w-[76.8245%] max-xl:left-[29rem] max-xl:top-36 max-xl:w-[16.7rem] max-[900px]:left-[calc(50%+2.7rem)] max-[900px]:top-20 max-[900px]:w-[11.5rem] max-sm:left-[calc(50%+2rem)] max-sm:w-[9.75rem]"
              height={920}
              priority
              src="/images/design/hero/hero-phone-back.png"
              width={360}
            />
            <Image
              alt="Primary Flirtcity phone screen"
              className="absolute h-auto object-cover drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] left-0 top-0 z-3 w-full max-xl:left-64 max-xl:top-[3.6rem] max-xl:w-96 max-[900px]:left-1/2 max-[900px]:top-8 max-[900px]:w-[17rem] max-[900px]:-translate-x-1/2 max-sm:w-[14.5rem]"
              height={920}
              priority
              src="/images/design/hero/hero-phone-front-cropped.png"
              width={360}
            />
          </div>

          {/* Match cards */}
          {dict.matchItems.map((item, index) => (
            <MatchCard
              key={`${item.name}-${item.age}`}
              asset={matchItemAssets[index]}
              name={item.name}
              age={item.age}
              city={item.city}
              distance={item.distance}
              newBadgeLabel={dict.newBadge}
            />
          ))}

          {/* Store buttons */}
          <div className="absolute left-[71.0938%] top-[47.7778%] z-4 flex gap-2.5 max-xl:top-[17rem] max-xl:right-[2.8rem] max-xl:left-auto max-xl:gap-2.5 max-[900px]:right-0 max-[900px]:top-[12.5rem] max-[900px]:flex-col max-sm:top-[10.8rem] max-sm:[&_a]:scale-90 max-sm:[&_a]:origin-top-right">
            <StoreButton size="compact" store="appStore" />
            <StoreButton size="compact" store="googlePlay" />
          </div>
        </div>
      </div>
    </section>
  );
}
