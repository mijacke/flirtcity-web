import Image from "next/image";

import FadeIn from "../animations/FadeIn";

import type { Dictionary } from "@/app/locales/getDictionary";

type DownloadCTAProps = {
  dict: Dictionary["downloadCta"];
};

export default function DownloadCTA({ dict }: DownloadCTAProps) {
  const [line1, line2] = dict.description.split("\n");

  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="download">
      <div className="section-shell section-stack">
        <FadeIn
          className="section-frame relative isolate overflow-hidden min-h-[439.2px] py-20 rounded-[40px] border border-[var(--surface-panel-border)] max-[920px]:min-h-auto max-[920px]:px-6 max-[920px]:py-16 max-[920px]:rounded-[32px] max-sm:px-5 max-sm:py-12 max-sm:rounded-[2rem]"
          offset={36}
          duration={0.7}
        >
          {/* Background decorative logos */}
          <Image
            alt=""
            aria-hidden="true"
            className="absolute z-0 block pointer-events-none h-auto select-none max-w-none left-[-50rem] top-[-30rem] w-[120rem] h-[80rem] max-[920px]:left-[-22rem] max-[920px]:top-[-20rem] max-[920px]:w-[45rem] max-sm:left-[-16rem] max-sm:top-[-20rem] max-sm:w-[38rem]"
            height={812}
            priority
            src="/images/design/download-cta/cta-symbol-left.png"
            width={1067}
          />
          <Image
            alt=""
            aria-hidden="true"
            className="absolute z-0 block pointer-events-none h-auto select-none max-w-none right-[-40rem] w-[80rem] max-[920px]:left-auto max-[920px]:right-[-21rem] max-[920px]:top-auto max-[920px]:bottom-[-11rem] max-[920px]:w-[38rem] max-sm:right-[-24rem] max-sm:bottom-[-12rem] max-sm:w-[30rem]"
            height={689}
            priority
            src="/images/design/download-cta/cta-symbol-right.png"
            width={904}
          />

          {/* Content */}
          <div className="relative z-2 grid justify-items-center gap-[60px] w-full mx-auto max-[920px]:gap-11 max-sm:gap-9">
            <h2 className="m-0 w-full text-center text-white text-[36px] font-semibold leading-[1.222222] tracking-[-0.18px] max-[920px]:text-[2rem] max-sm:text-[2.25rem] max-sm:leading-[1.14]">
              {dict.heading}
            </h2>
            <p className="m-0 w-full text-center text-white text-[1.125rem] font-light leading-[1.333333] tracking-[-0.25px] max-[920px]:text-base">
              {line1}
              <br />
              {line2}
            </p>

            <div className="flex justify-center gap-3.5 w-[441px] h-[67.2px] max-[920px]:w-auto max-[920px]:h-auto max-sm:w-full max-sm:flex-wrap max-sm:h-auto">
              <a
                className="inline-flex items-center justify-center h-[67.2px] w-[201.6px] leading-none [&_img]:block [&_img]:w-full [&_img]:h-full [&_img]:object-contain max-sm:w-[min(100%,225.4px)] max-sm:h-auto"
                href="#"
                rel="noopener noreferrer"
              >
                <img
                  alt={dict.appStoreAlt}
                  className="w-full h-auto"
                  height={68}
                  fetchPriority="high"
                  src="/images/design/download-cta/app-store.svg"
                  width={202}
                />
              </a>
              <a
                className="inline-flex items-center justify-center h-[67.2px] w-[226px] leading-none [&_img]:block [&_img]:w-full [&_img]:h-full [&_img]:object-contain max-sm:w-[min(100%,225.4px)] max-sm:h-auto"
                href="#"
                rel="noopener noreferrer"
              >
                <img
                  alt={dict.googlePlayAlt}
                  className="w-full h-auto"
                  height={68}
                  fetchPriority="high"
                  src="/images/design/download-cta/google-play.svg"
                  width={226}
                />
              </a>
            </div>
          </div>

          {/* Screen-reader alternative content */}
          <div className="sr-only">
            <h2>{dict.heading}</h2>
            <p>{dict.description}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
