"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import { useCarousel } from "../animations/useCarousel";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const stepAssets = [
  { image: "/images/design/how-it-works/step-1.svg", tone: "warm" },
  { image: "/images/design/how-it-works/step-2.svg", tone: "violet" },
  { image: "/images/design/how-it-works/step-3.svg", tone: "cyan" },
  { image: "/images/design/how-it-works/step-4.svg", tone: "rose" },
] as const;

const STEP_COUNT = stepAssets.length;

type HowItWorksProps = {
  dict: Dictionary["howItWorks"];
};

export default function HowItWorks({ dict }: HowItWorksProps) {
  const stepCount = dict.steps.length;
  const { activeIndex, setIndex, swipeHandlers } = useCarousel({ count: stepCount });

  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="how-it-works">
      <div className="section-shell section-stack relative max-[720px]:py-[clamp(2rem,7svh,3.25rem)]">
        <div className="section-frame grid gap-[clamp(2.5rem,4vw,5rem)] max-[720px]:gap-6">
          <SectionHeading title={dict.sectionTitle} />

          <svg
            aria-hidden="true"
            className="absolute w-0 h-0 overflow-hidden pointer-events-none"
            style={{ position: "absolute", width: 0, height: 0 }}
          >
            <defs>
              {Array.from({ length: STEP_COUNT }).map((_, index) => (
                <filter
                  key={index}
                  id={`how-it-works-outline-${index}`}
                  colorInterpolationFilters="sRGB"
                  height="130%"
                  width="130%"
                  x="-15%"
                  y="-15%"
                >
                  <feMorphology in="SourceAlpha" operator="dilate" radius="1" result="expanded" />
                  <feComposite in="expanded" in2="SourceAlpha" operator="out" result="outline" />
                  <feFlood floodColor="#ffffff" floodOpacity="0.15" result="outlineColor" />
                  <feComposite in="outlineColor" in2="outline" operator="in" />
                </filter>
              ))}
            </defs>
          </svg>

          {/* Grid ≥720px: 4 cols desktop, 2 cols tablet */}
          <div className="grid grid-cols-4 gap-[1.875rem] max-[1025px]:mx-auto max-[1025px]:w-full max-[1025px]:max-w-[46rem] max-[1025px]:grid-cols-2 max-[720px]:hidden">
            {dict.steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
          </div>

          {/* Carousel <720px */}
          <div className="hidden max-[720px]:mx-auto max-[720px]:block max-[720px]:w-full max-[720px]:max-w-[28rem]">
            <div className="overflow-hidden select-none" {...swipeHandlers}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={dict.steps[activeIndex].number}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  initial={{ opacity: 0 }}
                  transition={{ duration: 0.32, ease: "easeOut" }}
                >
                  <StepCard step={dict.steps[activeIndex]} index={activeIndex} />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center gap-[0.6875rem] mx-auto mt-4 p-[0.9375rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)] w-fit">
              {Array.from({ length: stepCount }).map((_, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Show step ${index + 1}`}
                    onClick={() => setIndex(index)}
                    className="relative block h-2 overflow-hidden rounded-full bg-white/50"
                    style={{ width: isActive ? 20 : 8, opacity: isActive ? 1 : 0.5 }}
                  >
                    {isActive ? (
                      <motion.span
                        key={activeIndex}
                        animate={{ scaleX: 1 }}
                        className="absolute inset-0 rounded-[inherit] bg-white origin-left"
                        initial={{ scaleX: 0 }}
                        transition={{ duration: 3.6, ease: "linear" }}
                      />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Individual card ── */
function StepCard({
  step,
  index,
}: {
  step: Dictionary["howItWorks"]["steps"][number];
  index: number;
}) {
  const asset = stepAssets[index];
  const filterId = `how-it-works-outline-${index}`;

  return (
    <FadeIn
      as="article"
      className="relative grid items-start gap-3 group max-[720px]:gap-2"
      delay={index * 0.08}
    >
      <div className="relative mx-auto w-[min(100%,21.875em)] aspect-[323/350]" data-tone={asset.tone}>
        <Image
          alt={step.title}
          className="absolute inset-0 block w-full h-full drop-shadow-[0_18px_34px_rgba(0,0,0,0.36)] transition-transform duration-[420ms] ease-out group-hover:scale-[1.015]"
          height={350}
          loading="lazy"
          sizes="(max-width: 720px) 90vw, (max-width: 1025px) 22rem, 22rem"
          src={asset.image}
          width={323}
        />
      </div>

      <div className="relative mx-auto w-[min(100%,21.875em)] min-h-[7em]">
        <svg
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[min(60%,13.4375em)] h-auto z-0 overflow-visible pointer-events-none select-none"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 215 158"
        >
          <text
            className="font-[var(--font-primary)] not-italic font-semibold text-[125px] leading-[158px] tracking-[-0.005em] fill-white"
            dominantBaseline="middle"
            filter={`url(#${filterId})`}
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            {step.number}
          </text>
        </svg>

        <h3 className="relative z-1 m-0 w-full grid grid-cols-[auto_minmax(0,1fr)] items-start gap-[0.5em] text-[1.375em] font-semibold leading-[1.181818] tracking-[-0.11px] text-left">
          <span className="text-[var(--color-text-primary)] whitespace-nowrap">{step.number}</span>
          <span className="min-w-0">{step.title}</span>
        </h3>
      </div>
    </FadeIn>
  );
}
