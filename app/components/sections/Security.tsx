import FadeIn from "../animations/FadeIn";
import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const securityIcons = [
  "/images/design/security/icon_verify-user.svg",
  "/images/design/security/icon_flag.svg",
  "/images/design/security/icon_shield.svg",
] as const;

type SecurityProps = {
  dict: Dictionary["security"];
};

export default function Security({ dict }: SecurityProps) {
  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)] max-[1251px]:overflow-x-clip" id="security">
      <div className="section-shell section-stack">
        <div className="section-frame grid">
          <FadeIn
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.58fr)] items-center gap-[clamp(1.5rem,3vw,3.75rem)] max-[1251px]:grid-cols-1 max-[1251px]:gap-12"
            offset={28}
          >
            {/* Left column — heading + items */}
            <div className="grid gap-[3.75rem] w-full max-[1251px]:gap-8">
              <div className="max-[1251px]:[&>div]:justify-items-center max-[1251px]:[&>div]:text-center">
                <SectionHeading
                  align="left"
                  title={dict.sectionTitle}
                />
              </div>

              <div className="grid gap-5 max-[1251px]:grid-cols-3 max-[1251px]:gap-4 max-[720px]:grid-cols-1">
                {dict.items.map((label, index) => (
                  <FadeIn
                    key={label}
                    className="flex items-center gap-[0.9375rem] p-[1.875rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)] border border-[var(--surface-panel-border)] max-[1251px]:p-[1.25rem_1.2rem] [&_p]:m-0 [&_p]:text-[1.375rem] [&_p]:font-semibold [&_p]:leading-[1.181818] [&_p]:tracking-[-0.11px] max-[1251px]:[&_p]:text-base"
                    delay={index * 0.08}
                    offset={24}
                    duration={0.45}
                  >
                    <img
                      alt=""
                      aria-hidden="true"
                      className="shrink-0 w-6 h-6"
                      height={24}
                      src={securityIcons[index]}
                      width={24}
                    />
                    <p>{label}</p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Right column — composition. Uses percentage positioning so it shrinks proportionally at any width. */}
            <FadeIn
              className="relative w-full aspect-[845/531] max-[1251px]:mx-auto max-[1251px]:w-full max-[1251px]:overflow-x-clip [&_img]:absolute [&_img]:max-w-none"
              duration={0.65}
            >
              <div className="absolute inset-0 origin-center max-[1251px]:scale-110">
                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[9.79%] left-[24.73%] w-[67.46%] h-auto rounded-[clamp(1.5rem,3.7vw,3.125rem)] z-0"
                  height={422}
                  fetchPriority="high"
                  src="/images/design/security/background-card.svg"
                  width={570}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[14.55%] left-[7.44%] w-[55.59%] h-auto rotate-[11.6206deg] origin-center opacity-92 blur-[0.2px] z-1"
                  height={491}
                  src="/images/design/security/logo_symbol-flirtcity.svg"
                  width={559}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[1.82%] left-[4.5%] w-[30.66%] h-auto z-2"
                  height={531}
                  fetchPriority="high"
                  src="/images/design/security/iPhone-security.svg"
                  width={259}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[30.69%] left-[27.98%] w-[27.81%] h-auto rounded-[clamp(0.75rem,1.95vw,1.6444rem)] z-3"
                  height={202}
                  src="/images/design/security/sheet-profile-verified.svg"
                  width={235}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[76.26%] left-[50.66%] w-[25.42%] h-auto z-3"
                  height={38}
                  src="/images/design/security/message.svg"
                  width={216}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[62.88%] left-[84.25%] w-[13.46%] h-auto rounded-[clamp(0.5rem,0.88vw,0.75rem)] z-3"
                  height={160}
                  src="/images/design/security/match-item.svg"
                  width={114}
                />

                <img
                  alt=""
                  aria-hidden="true"
                  className="top-[5.08%] left-[75.5%] w-[5.68%] h-auto z-3"
                  height={48}
                  src="/images/design/security/heart-top-right.svg"
                  width={48}
                />
              </div>
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
