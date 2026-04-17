import FadeIn from "../animations/FadeIn";
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
  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="how-it-works">
      <div className="section-shell section-stack relative">
        <div className="section-frame grid gap-[clamp(2.5rem,4vw,5rem)]">
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

          {/* Responsive grid: 4 cols ≥1100, 2 cols 720–1100, 1 col <720 */}
          <div className="grid grid-cols-4 gap-[clamp(1.25rem,2.6vw,3.125rem)] max-[1100px]:grid-cols-2 max-[720px]:grid-cols-1 max-[720px]:gap-6 max-[720px]:max-w-[22rem] max-[720px]:mx-auto">
            {dict.steps.map((step, index) => (
              <StepCard key={step.number} step={step} index={index} />
            ))}
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
      className="relative grid items-start gap-5 group"
      delay={index * 0.08}
    >
      <div
        className="relative min-h-[21.875rem] rounded-t-[3.75rem]"
        data-tone={asset.tone}
      >
        <img
          alt={step.title}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 block w-[min(100%,20.1875rem)] h-auto drop-shadow-[0_18px_34px_rgba(0,0,0,0.36)] transition-transform duration-[420ms] ease-out group-hover:scale-[1.015]"
          height={350}
          src={asset.image}
          width={323}
        />
      </div>

      <div className="relative w-full">
        <svg
          aria-hidden="true"
          className="absolute right-0 top-1/2 -translate-y-1/2 w-[min(60%,13.4375rem)] h-auto z-0 overflow-visible pointer-events-none select-none"
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

        <h3 className="relative z-1 m-0 w-full grid grid-cols-[auto_minmax(0,1fr)] items-start gap-2 text-[1.375rem] font-semibold leading-[1.181818] tracking-[-0.11px] text-left">
          <span className="text-[var(--color-text-primary)] whitespace-nowrap">{step.number}</span>
          <span className="min-w-0">{step.title}</span>
        </h3>
      </div>
    </FadeIn>
  );
}
