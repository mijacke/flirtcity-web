"use client";

import GradientText from "../ui/GradientText";
import { Stagger, StaggerItem } from "../animations/FadeIn";

type HeroCopyProps = {
  heading: string;
  subheading: string;
  description: string;
  /**
   * Layout variant. The desktop copy sits in an absolute-positioned narrow
   * column; the mobile copy is centered in a stacked grid.
   */
  variant: "desktop" | "mobile";
};

const desktopClasses = {
  wrapper: "grid gap-[min(1.5rem,1.25vw)]",
  titleWrap: "grid gap-[min(0.625rem,0.52vw)]",
  heading:
    "m-0 w-full text-[clamp(34px,3.2292vw,62px)] font-medium leading-[1.15] tracking-[-0.01em]",
  subheading:
    "m-0 text-[clamp(22px,1.875vw,36px)] font-semibold leading-[1.22] tracking-[-0.005em]",
  description:
    "m-0 w-full text-[clamp(12px,0.8854vw,17px)] leading-[1.4] tracking-[-0.01em] text-white/92",
};

const mobileClasses = {
  wrapper: "grid gap-4 w-full max-w-[44rem]",
  titleWrap: "contents",
  heading:
    "m-0 text-[clamp(2rem,5.2vw,3.75rem)] font-medium leading-[1.15] tracking-[-0.01em]",
  subheading:
    "m-0 text-[clamp(1.5rem,3.4vw,2.25rem)] font-semibold leading-[1.2] tracking-[-0.005em]",
  description:
    "m-0 mx-auto max-w-[40rem] text-[clamp(0.95rem,1.8vw,1.125rem)] leading-[1.5] text-white/85",
};

export default function HeroCopy({ heading, subheading, description, variant }: HeroCopyProps) {
  const c = variant === "desktop" ? desktopClasses : mobileClasses;

  return (
    <Stagger className={c.wrapper} stagger={0.12} initialDelay={0.1} trigger="mount">
      <div className={c.titleWrap}>
        <StaggerItem>
          <h1 className={c.heading}>{heading}</h1>
        </StaggerItem>
        <StaggerItem>
          <p className={c.subheading}>
            <GradientText>{subheading}</GradientText>
          </p>
        </StaggerItem>
      </div>
      <StaggerItem>
        <p className={c.description}>{description}</p>
      </StaggerItem>
    </Stagger>
  );
}
