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
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="security">
      <div className="section-shell section-stack">
        <div className="section-frame grid">
          <FadeIn
            className="grid grid-cols-[33.4375rem_52.8125rem] items-center gap-[3.75rem] max-xl:grid-cols-1"
            offset={28}
          >
            {/* Left column */}
            <div className="grid gap-[3.75rem] w-[33.4375rem] max-xl:w-full max-[900px]:gap-10">
              <SectionHeading align="left" title={dict.sectionTitle} />

              <div className="grid gap-5">
                {dict.items.map((label, index) => (
                  <FadeIn
                    key={label}
                    className="flex items-center gap-[0.9375rem] w-[33.4375rem] p-[1.875rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)] border border-[var(--surface-panel-border)] max-xl:w-full max-[900px]:p-[1.25rem_1.2rem] [&_p]:m-0 [&_p]:text-[1.375rem] [&_p]:font-semibold [&_p]:leading-[1.181818] [&_p]:tracking-[-0.11px] max-[900px]:[&_p]:text-base"
                    delay={index * 0.08}
                    direction="left"
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

            {/* Right column — visual composition */}
            <FadeIn
              className="relative w-[52.8125rem] h-[33.1875rem] max-xl:mx-auto max-[900px]:w-[min(100%,42rem)] max-[900px]:h-[min(26.4rem,62vw)] max-sm:h-[21rem] [&_img]:absolute [&_img]:max-w-none"
              direction="right"
              duration={0.65}
            >
              <img
                alt=""
                aria-hidden="true"
                className="top-[3.1875rem] left-[13.0625rem] w-[35.625rem] h-auto rounded-[3.125rem] z-0 max-[900px]:left-[24.7337%] max-[900px]:top-[9.7935%] max-[900px]:w-[67.4556%] max-[900px]:h-auto"
                height={422}
                fetchPriority="high"
                src="/images/design/security/background-card.svg"
                width={570}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-10 w-[34.9375rem] h-auto rotate-[11.6206deg] origin-center opacity-92 blur-[0.2px] z-1 max-[900px]:left-[7.4429%] max-[900px]:top-[14.55%] max-[900px]:w-[55.5947%]"
                height={491}
                src="/images/design/security/logo_symbol-flirtcity.svg"
                width={559}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-[0.6rem] left-[2.375rem] w-[14.775rem] h-auto z-2 max-[900px]:left-[4.497%] max-[900px]:top-[1.8182%] max-[900px]:w-[30.6574%]"
                height={531}
                fetchPriority="high"
                src="/images/design/security/iPhone-security.svg"
                width={259}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-[10.2058rem] left-[14.375rem] w-[14.6875rem] h-auto rounded-[1.6444rem] z-3 max-[900px]:left-[27.9762%] max-[900px]:top-[30.693%] max-[900px]:w-[27.8107%]"
                height={202}
                src="/images/design/security/sheet-profile-verified.svg"
                width={235}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-[25.3203rem] left-[26.8047rem] w-[13.4531rem] h-auto z-3 max-[900px]:left-[50.6553%] max-[900px]:top-[76.2588%] max-[900px]:w-[25.4201%]"
                height={38}
                src="/images/design/security/message.svg"
                width={216}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-[20.875rem] left-[44.4583rem] w-[7.1042rem] h-auto rounded-[0.75rem] z-3 max-[900px]:left-[84.2485%] max-[900px]:top-[62.8788%] max-[900px]:w-[13.4615%]"
                height={160}
                src="/images/design/security/match-item.svg"
                width={114}
              />

              <img
                alt=""
                aria-hidden="true"
                className="top-[1.6875rem] left-[39.875rem] w-12 h-auto z-3 max-[900px]:left-[75.5029%] max-[900px]:top-[5.0847%] max-[900px]:w-[5.6805%]"
                height={48}
                src="/images/design/security/heart-top-right.svg"
                width={48}
              />
            </FadeIn>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
