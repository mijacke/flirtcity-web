import Image from "next/image";

import BlurImage from "../ui/BlurImage";
import StoreButton from "../ui/StoreButton";
import HeroCopy from "./HeroCopy";

import type { Dictionary } from "@/app/locales/getDictionary";

const matchItemAssets = [
  {
    className: "left-[70%] top-[20%] w-[7%] h-[17%] rounded-[13.8px]",
    image: "/images/design/hero/hero-profile-top.png",
    showBadge: true,
    size: "large" as const,
  },
  {
    className: "left-[37.5%] top-[77%] w-[6%] h-[14.5%] rounded-[12px]",
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
      <div className="relative w-full h-full [&_img]:object-cover after:content-[''] after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(23,7,43,0)_0%,rgba(23,7,43,1)_100%),center/cover_no-repeat_url('/images/design/hero/photo-effect.png')] after:opacity-94 after:pointer-events-none">
        <Image
          alt={`Featured profile ${name}`}
          fill
          sizes={isLarge ? "131px" : "114px"}
          src={asset.image}
        />
      </div>

      <div
        className={`absolute right-0 bottom-0 left-0 grid justify-items-center content-end text-white ${isLarge ? "min-h-[92px] pb-[11.5px] gap-[4.6px]" : "min-h-[80px] pb-2.5 gap-1"
          }`}
      >
        <span
          className={`font-semibold text-center text-white ${isLarge
            ? "text-[clamp(12px,0.84vw,16.1px)] leading-[1.14]"
            : "text-[clamp(11px,0.73vw,14px)] leading-[1.14]"
            }`}
        >
          {name}, {age}
        </span>
        <span
          className={`text-center text-white/50 ${isLarge
            ? "text-[clamp(10px,0.66vw,12.65px)] leading-[1.1]"
            : "text-[clamp(9px,0.57vw,11px)] leading-[1.1]"
            }`}
        >
          {city}
        </span>
        <span
          className={`inline-flex items-center justify-center text-white bg-white/15 backdrop-blur-[10px] ${isLarge
            ? "text-[clamp(10px,0.66vw,12.65px)] leading-[1.1] rounded-[36.8px] px-[6.9px] py-[3.45px]"
            : "text-[clamp(9px,0.57vw,11px)] leading-[1.1] rounded-[32px] px-1.5 py-[3px]"
            }`}
        >
          {distance}
        </span>
      </div>

      {asset.showBadge ? (
        <span className="absolute top-[4.6px] right-[4.6px] px-[5.75px] py-[4.6px] rounded-[11.5px] bg-[var(--color-accent-pink)] text-[clamp(9px,0.6vw,11.5px)] font-semibold leading-none">
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
      <BlurImage
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
    <section
      className="relative overflow-x-clip scroll-mt-[calc(var(--header-height)+1rem)]"
      id="about"
    >
      {/* ── Desktop absolute layout (≥1100px) ── */}
      <div className="relative min-h-[min(1080px,56.25vw)] pb-[clamp(7rem,12.5vw,14.75rem)] overflow-x-clip max-[1100px]:hidden">
        <div className="relative w-[min(1920px,100vw)] aspect-[1920/1080] mx-auto">
          {/* Decorative collage */}
          <PhotoAsset
            alt="Crystal texture"
            className="top-[-3%] left-[25%] w-[18%] h-[20%] rounded-b-[22px] opacity-78"
            priority
            sizes="18vw"
            src="/images/design/hero/hero-prism-strip.jpg"
          />
          <PhotoAsset
            alt="Hands with rainbow bracelets"
            className="left-[-5%] top-[20%] w-[11%] h-[20%] rounded-[20px] opacity-88"
            sizes="11vw"
            src="/images/design/hero/hero-hands.png"
          />
          <PhotoAsset
            alt="Rainbow dancer"
            className="left-[4%] top-[78%] w-[17%] h-[44%] rounded-[20px] opacity-92"
            sizes="17vw"
            src="/images/design/hero/hero-dancer.jpg"
          />
          <PhotoAsset
            alt="Rainbow prism detail"
            className="top-[27%] left-[92%] w-[12%] h-[26%] rounded-[20px] opacity-88"
            sizes="12vw"
            src="/images/design/hero/hero-prism-right.png"
          />
          <PhotoAsset
            alt="Small gem detail"
            className="top-[80%] left-[80%] w-[10%] h-[20%] rounded-[20px]"
            sizes="9.5vw"
            src="/images/design/hero/hero-gem-small.png"
          />
          <PhotoAsset
            alt="Portrait detail"
            className="top-[60%] left-[74%] w-[12%] h-[28%] rounded-[20px]"
            sizes="12vw"
            src="/images/design/hero/hero-portrait-right.jpg"
          />
          <PhotoAsset
            alt="Friends together"
            className="top-[90%] left-[56%] w-[13%] h-[13%] rounded-[20px]"
            sizes="14vw"
            src="/images/design/hero/hero-group.png"
          />

          {/* Logo symbol */}
          <div className="absolute top-[50%] left-[60%] w-[11%] h-[15%] z-4">
            <Image
              alt="Flirtcity decorative symbol"
              className="object-fill"
              fill
              sizes="11vw"
              src="/images/design/hero/logo_symbol-flirtcity.png"
            />
          </div>

          {/* Copy block */}
          <div className="absolute left-[12.5%] top-[29.9074%] z-2 w-[29.4792%]">
            <HeroCopy
              description={dict.description}
              heading={dict.heading}
              subheading={dict.subheading}
              variant="desktop"
            />
          </div>

          {/* Phone visual — back sized so visible phone matches front (front image has rotation alpha) */}
          <div className="absolute left-[45%] top-[22%] z-2 w-[21%] h-[60%]">
            <Image
              alt="Secondary Flirtcity phone screen"
              className="absolute h-auto object-cover drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] left-[36%] top-[12%] z-2 w-[64%]"
              height={618}
              priority
              src="/images/design/hero/hero-phone-back.png"
              width={302}
            />
            <Image
              alt="Primary Flirtcity phone screen"
              className="absolute h-auto object-cover drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] left-0 bottom-10 z-3 w-full"
              height={787}
              priority
              src="/images/design/hero/hero-phone-front-cropped.png"
              width={471}
            />
          </div>

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

          {/* Store buttons — original figma position (right side, mid-height) */}
          <div className="absolute left-[71.0938%] top-[47.7778%] z-4 flex gap-[min(0.625rem,0.52vw)]">
            <StoreButton size="compact" store="appStore" />
            <StoreButton size="compact" store="googlePlay" />
          </div>
        </div>
      </div>

      {/* ── Tablet / Mobile simplified layout (<1100px) ── */}
      <div className="hidden max-[1100px]:block">
        <div className="relative section-shell pt-[calc(var(--header-height)+clamp(4rem,9vw,7rem))] pb-[clamp(3.5rem,7vw,6rem)]">
          {/* Decorative collage — only prism-strip (top) and prism-right (right). Hidden on mobile <720px. */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 max-[720px]:hidden">
            <div className="relative section-frame h-full mx-auto">
              <PhotoAsset
                alt=""
                className="top-[-8%] left-[23%] w-[25%] aspect-[1] rounded-[1.2rem] opacity-85"
                sizes="14vw"
                src="/images/design/hero/hero-prism-strip.jpg"
              />
              <PhotoAsset
                alt=""
                className="top-[8%] right-[-2%] w-[14%] aspect-[1/1.4] rounded-[1.2rem] opacity-85"
                sizes="14vw"
                src="/images/design/hero/hero-prism-right.png"
              />
              <PhotoAsset
                alt="Hands with rainbow bracelets"
                className="left-[-5%] top-[20%] w-[11%] h-[20%] rounded-[20px] opacity-88"
                sizes="11vw"
                src="/images/design/hero/hero-hands.png"
              />
              <PhotoAsset
                alt="Rainbow dancer"
                className="left-[4%] top-[50%] w-[15%] h-[20%] rounded-[20px] opacity-92"
                sizes="17vw"
                src="/images/design/hero/hero-dancer.jpg"
              />
              <PhotoAsset
                alt="Small gem detail"
                className="top-[50%] left-[90%] w-[13%] h-[10%] rounded-[20px]"
                sizes="9.5vw"
                src="/images/design/hero/hero-gem-small.png"
              />
              <PhotoAsset
                alt="Portrait detail"
                className="top-[40%] left-[83%] w-[15%] h-[15%] rounded-[20px]"
                sizes="12vw"
                src="/images/design/hero/hero-portrait-right.jpg"
              />
              <PhotoAsset
                alt="Friends together"
                className="top-[80%] left-[15%] w-[20%] h-[7%] rounded-[20px]"
                sizes="14vw"
                src="/images/design/hero/hero-group.png"
              />
            </div>
          </div>

          <div className="relative section-frame grid gap-[clamp(2.5rem,5vw,4.5rem)] justify-items-center text-center">
            <HeroCopy
              description={dict.description}
              heading={dict.heading}
              subheading={dict.subheading}
              variant="mobile"
            />

            {/* Two overlapped phones — back sized so visible phone matches front */}
            <div className="relative mx-auto w-[min(100%,22rem)] aspect-[359/620]">
              <Image
                alt="Secondary Flirtcity phone screen"
                className="absolute left-[43%] top-[15%] w-[60%] h-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] z-1"
                height={618}
                priority
                src="/images/design/hero/hero-phone-back.png"
                width={302}
              />
              <Image
                alt="Primary Flirtcity phone screen"
                className="absolute right-[20%] bottom-15 w-full h-auto drop-shadow-[0_24px_40px_rgba(0,0,0,0.32)] z-2"
                height={787}
                priority
                src="/images/design/hero/hero-phone-front-cropped.png"
                width={471}
              />
            </div>

            {/* Two store buttons always side by side */}
            <div className="flex justify-center items-center gap-3 flex-nowrap">
              <StoreButton size="compact" store="appStore" />
              <StoreButton size="compact" store="googlePlay" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
