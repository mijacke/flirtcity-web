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
  const storyCount = dict.stories.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const userInteracted = useRef(false);
  const isSyncing = useRef(false);

  const scrollToIndex = useCallback((index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    isSyncing.current = true;
    scroller.scrollTo({ left: scroller.clientWidth * index, behavior: "smooth" });
    setActiveIndex(index);
    window.setTimeout(() => {
      isSyncing.current = false;
    }, 500);
  }, []);

  const handleScroll = useCallback(() => {
    const scroller = scrollerRef.current;
    if (!scroller || isSyncing.current) return;
    userInteracted.current = true;
    const width = scroller.clientWidth;
    if (width === 0) return;
    const next = Math.round(scroller.scrollLeft / width);
    setActiveIndex((prev) => (prev === next ? prev : next));
  }, []);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    scroller.addEventListener("scroll", handleScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  /* Auto-advance — pauses after user interacts */
  useEffect(() => {
    const id = window.setInterval(() => {
      if (userInteracted.current) return;
      setActiveIndex((current) => {
        const next = (current + 1) % storyCount;
        const scroller = scrollerRef.current;
        if (scroller && window.matchMedia("(max-width: 720px)").matches) {
          isSyncing.current = true;
          scroller.scrollTo({ left: scroller.clientWidth * next, behavior: "smooth" });
          window.setTimeout(() => {
            isSyncing.current = false;
          }, 500);
        }
        return next;
      });
    }, 3600);
    return () => window.clearInterval(id);
  }, [storyCount]);

  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="stories">
      <div className="section-shell section-stack">
        <div className="section-frame grid gap-[clamp(2.5rem,4vw,5rem)]">
          <SectionHeading title={dict.sectionTitle} />

          {/* Grid ≥720px (4-col desktop, 2-col tablet) */}
          <div className="grid grid-cols-4 gap-[1.875rem] max-[1100px]:grid-cols-2 max-[720px]:hidden">
            {dict.stories.map((story, index) => (
              <StoryCard key={story.title} story={story} index={index} label={dict.starRatingLabel} />
            ))}
          </div>

          {/* Carousel <720px */}
          <div className="hidden max-[720px]:block">
            <div
              ref={scrollerRef}
              className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden -mx-[var(--section-padding-inline)] px-[var(--section-padding-inline)] pb-4"
            >
              {dict.stories.map((story, index) => (
                <div key={story.title} className="snap-center shrink-0 w-full">
                  <StoryCard story={story} index={index} label={dict.starRatingLabel} />
                </div>
              ))}
            </div>
          </div>

          {/* Pager dots — show for all stories */}
          <div
            className="flex justify-center items-center gap-[0.6875rem] mx-auto p-[0.9375rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)] w-fit"
          >
            {Array.from({ length: storyCount }).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show story ${index + 1}`}
                  onClick={() => scrollToIndex(index)}
                  className="relative block h-2 overflow-hidden rounded-full bg-white/50"
                  style={{ width: isActive ? 20 : 8, opacity: isActive ? 1 : 0.5 }}
                >
                  {isActive ? (
                    <motion.span
                      animate={{ scaleX: [0.38, 1] }}
                      className="absolute inset-0 rounded-[inherit] bg-white origin-left"
                      initial={{ scaleX: 0.38 }}
                      transition={{ duration: 3.2, ease: "linear" }}
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function StoryCard({
  story,
  index,
  label,
}: {
  story: Dictionary["userStories"]["stories"][number];
  index: number;
  label: string;
}) {
  return (
    <motion.article
      className="grid content-start gap-5 min-h-[22.8125rem] p-[2.5rem_1.875rem] rounded-[1.25rem] border border-[var(--surface-panel-border-soft)] bg-[var(--surface-panel-bg)] max-[1100px]:min-h-[20rem] max-[1100px]:p-[2rem_1.5rem]"
      initial={{ opacity: 0, y: 32 }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="flex items-center justify-center gap-2.5">
        <div className="relative overflow-hidden w-[2.8125rem] h-[2.8125rem] rounded-full [&_img]:object-cover">
          <Image alt={story.user} fill sizes="45px" src={avatarImages[index]} />
        </div>
        <div className="grid justify-items-start gap-1">
          <span className="text-[var(--color-text-primary)] opacity-30 text-xs leading-none tracking-[-0.25px] text-left">
            {story.user}
          </span>
          <div className="flex gap-0.5 items-center" role="img" aria-label={label}>
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
  );
}
