"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionHeading from "../ui/SectionHeading";

import type { Dictionary } from "@/app/locales/getDictionary";

const avatarImages = [
  "/images/design/user-stories/avatar-1.png",
  "/images/design/user-stories/avatar-2.png",
  "/images/design/user-stories/avatar-3.png",
  "/images/design/user-stories/avatar-4.png",
] as const;

type UserStoriesProps = {
  dict: Dictionary["userStories"];
};

export default function UserStories({ dict }: UserStoriesProps) {
  const [activePager, setActivePager] = useState(0);

  /* Stable ref-based callback to avoid stale closures — replaces the
     experimental useEffectEvent that was here before. */
  const advanceRef = useRef(() => {
    setActivePager((current) => (current + 1) % 3);
  });

  const advancePager = useCallback(() => {
    advanceRef.current();
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(advancePager, 2600);
    return () => window.clearInterval(intervalId);
  }, [advancePager]);

  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="stories">
      <div className="section-shell section-stack">
        <div className="section-frame">
          <SectionHeading title={dict.sectionTitle} />

          <div className="grid grid-cols-4 gap-[1.875rem] mt-[1.875rem] max-xl:grid-cols-2 max-[720px]:grid-cols-1 max-[720px]:mt-11">
            {dict.stories.map((story, index) => (
              <motion.article
                key={story.title}
                className="grid content-start gap-5 min-h-[22.8125rem] p-[2.5rem_1.875rem] rounded-[1.25rem] border border-[var(--surface-panel-border-soft)] bg-[var(--surface-panel-bg)] max-[720px]:min-h-auto max-[720px]:p-6"
                initial={{ opacity: 0, y: 32 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                {/* Avatar + Stars */}
                <div className="flex items-center justify-center gap-2.5">
                  <div className="relative overflow-hidden w-[2.8125rem] h-[2.8125rem] rounded-full [&_img]:object-cover">
                    <Image alt={story.user} fill sizes="45px" src={avatarImages[index]} />
                  </div>
                  <div className="grid justify-items-start gap-1">
                    <span className="text-[var(--color-text-primary)] opacity-30 text-xs leading-none tracking-[-0.25px] text-left">
                      {story.user}
                    </span>
                    <div
                      className="flex gap-0.5 items-center"
                      role="img"
                      aria-label={dict.starRatingLabel}
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Image
                          alt=""
                          aria-hidden="true"
                          className="w-[0.6rem] h-[0.6rem]"
                          height={10}
                          key={starIndex}
                          src="/images/design/user-stories/icon_star.svg"
                          width={10}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <h3 className="pearl-text m-0 w-full text-[1.375rem] font-semibold leading-[1.181818] tracking-[-0.11px] text-center">
                  {story.title}
                </h3>
                <p className="m-0 w-full text-white/50 opacity-50 text-center text-[1.125rem] font-normal tracking-[-0.5px] leading-[1.333333] max-[720px]:text-base">
                  {story.quote}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Pager dots */}
          <div className="flex justify-center items-center gap-[0.6875rem] w-[5.5rem] mx-auto mt-[3.75rem] p-[0.9375rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)]" aria-hidden="true">
            {Array.from({ length: 3 }).map((_, index) => {
              const isActive = index === activePager;

              return (
                <motion.span
                  animate={{
                    opacity: isActive ? 1 : 0.5,
                    width: isActive ? 20 : 8,
                  }}
                  className="relative block w-2 h-2 overflow-hidden rounded-full bg-white/50"
                  key={index}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                >
                  {isActive ? (
                    <motion.span
                      animate={{ scaleX: [0.38, 1] }}
                      className="absolute inset-0 rounded-[inherit] bg-white origin-left"
                      initial={{ scaleX: 0.38 }}
                      transition={{ duration: 2.2, ease: "linear" }}
                    />
                  ) : null}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
