import Image from "next/image";

import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const stepAssets = [
  { image: "/images/design/how-it-works/step-1.svg", tone: "warm" },
  { image: "/images/design/how-it-works/step-2.svg", tone: "violet" },
  { image: "/images/design/how-it-works/step-3.svg", tone: "cyan" },
  { image: "/images/design/how-it-works/step-4.svg", tone: "rose" },
] as const;

/** Maximum number of steps — controls how many shared SVG filters to define. */
const STEP_COUNT = stepAssets.length;

type HowItWorksProps = {
  dict: Dictionary["howItWorks"];
};

export default function HowItWorks({ dict }: HowItWorksProps) {
  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="how-it-works"> 
      <div className="section-shell section-stack relative pt-[calc(var(--section-padding-block)+clamp(5rem,5.2604vw,6.3125rem))] max-xl:pt-[calc(var(--section-padding-block)+3.5rem)] max-[720px]:pt-[calc(var(--section-padding-block)+2.5rem)]">
        <div className="section-frame">
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

          <div className="grid grid-cols-4 gap-[3.125rem] mt-20 max-xl:grid-cols-2 max-xl:gap-8 max-[720px]:grid-cols-1 max-[720px]:mt-12 max-[720px]:gap-6">
            {dict.steps.map((step, index) => {
              const asset = stepAssets[index];
              const filterId = `how-it-works-outline-${index}`;

              return (
                <FadeIn
                  key={step.number}
                  as="article"
                  className="relative grid items-start gap-5 group"
                  delay={index * 0.08}
                >
                  <div
                    className="relative overflow-hidden min-h-[21.875rem] rounded-t-[3.75rem] max-[720px]:min-h-72"
                    data-tone={asset.tone}
                  >
                    <div className="absolute inset-0 flex justify-center items-end">
                      <img
                        alt={step.title}
                        className="w-[min(100%,20.1875rem)] h-auto object-cover object-[center_top] drop-shadow-[0_18px_34px_rgba(0,0,0,0.36)] transition-transform duration-[420ms] ease-out group-hover:-translate-y-0.5 group-hover:scale-[1.015]"
                        height={350}
                        src={asset.image}
                        width={323}
                      />
                    </div>
                  </div>

                  <svg
                    aria-hidden="true"
                    className="absolute left-[114px] top-[284px] w-[215px] h-[158px] overflow-visible pointer-events-none select-none z-3 max-[720px]:left-auto max-[720px]:right-3 max-[720px]:top-auto max-[720px]:bottom-3 max-[720px]:scale-[0.72] max-[720px]:origin-bottom-right"
                    viewBox="0 0 215 158"
                  >
                    {/* Filter is referenced from the shared <defs> above */}
                    <text
                      className="font-[var(--font-primary)] not-italic font-semibold text-[125px] leading-[158px] tracking-[-0.005em] text-center fill-white max-[720px]:stroke-1"
                      dominantBaseline="middle"
                      filter={`url(#${filterId})`}
                      textAnchor="middle"
                      x="50%"
                      y="50%"
                    >
                      {step.number}
                    </text>
                  </svg>

                  <h3 className="m-0 w-full grid grid-cols-[auto_minmax(0,1fr)] items-start gap-2 text-[1.375rem] font-semibold leading-[1.181818] tracking-[-0.11px] text-left max-[720px]:text-[1.2rem]">
                    <span className="text-[var(--color-text-primary)] whitespace-nowrap">{step.number}</span>
                    <span className="min-w-0">{step.title}</span>
                  </h3>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
