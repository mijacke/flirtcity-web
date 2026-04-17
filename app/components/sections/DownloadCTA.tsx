"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import FadeIn from "../animations/FadeIn";

import type { Dictionary } from "@/app/locales/getDictionary";

type DownloadCTAProps = {
  dict: Dictionary["downloadCta"];
};

const storeButtonHover = {
  transition: { stiffness: 380, type: "spring" as const },
  whileHover: { scale: 1.03, y: -2 },
  whileTap: { scale: 0.98 },
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
          {/* Background decorative logo glows */}
          <div className="absolute inset-0 z-0 flex justify-center overflow-hidden pointer-events-none">
            <div className="relative h-full w-[1440px] shrink-0">
              <Image
                alt=""
                aria-hidden="true"
                className="absolute max-w-none select-none pointer-events-none"
                height={1500}
                priority
                src="/images/design/download-cta/logo-flirtcity-left.png"
                style={{ left: -500, top: -700, width: 1700, height: 1500 }}
                width={1700}
              />
              <Image
                alt=""
                aria-hidden="true"
                className="absolute max-w-none select-none pointer-events-none"
                height={1550}
                priority
                src="/images/design/download-cta/logo-flirtcity-right.png"
                style={{ left: 700, top: -100, width: 1600, height: 1550 }}
                width={1600}
              />
            </div>
          </div>

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

            <div className="flex flex-nowrap justify-center items-center gap-3 w-full max-w-[441px]">
              <motion.a
                className="inline-flex items-center justify-center origin-center flex-1 basis-0 min-w-0 h-auto leading-none [&_img]:block [&_img]:w-full [&_img]:h-auto"
                href="#"
                rel="noopener noreferrer"
                {...storeButtonHover}
              >
                <img
                  alt={dict.appStoreAlt}
                  className="w-full h-auto"
                  height={68}
                  fetchPriority="high"
                  src="/images/design/download-cta/app-store.svg"
                  width={202}
                />
              </motion.a>
              <motion.a
                className="inline-flex items-center justify-center origin-center flex-1 basis-0 min-w-0 h-auto leading-none [&_img]:block [&_img]:w-full [&_img]:h-auto"
                href="#"
                rel="noopener noreferrer"
                {...storeButtonHover}
              >
                <img
                  alt={dict.googlePlayAlt}
                  className="w-full h-auto"
                  height={68}
                  fetchPriority="high"
                  src="/images/design/download-cta/google-play.svg"
                  width={226}
                />
              </motion.a>
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

