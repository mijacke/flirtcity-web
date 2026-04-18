"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { useCarousel } from "../animations/useCarousel";
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
  const { activeIndex, setIndex, swipeHandlers } = useCarousel({ count: storyCount });

  return (
    <section className="scroll-mt-[calc(var(--header-height)+1rem)]" id="stories">
      <div className="section-shell section-stack">
        <div className="section-frame grid gap-[clamp(2.5rem,4vw,5rem)] max-[711px]:block">
          <SectionHeading title={dict.sectionTitle} />

          {/* Grid ≥711px (4-col desktop, 2-col tablet) */}
          <div className="grid grid-cols-4 gap-[1.875rem] max-[1025px]:mx-auto max-[1025px]:w-full max-[1025px]:max-w-[46rem] max-[1025px]:grid-cols-2 max-[711px]:hidden">
            {dict.stories.map((story, index) => (
              <StoryCard key={story.title} story={story} index={index} label={dict.starRatingLabel} />
            ))}
          </div>

          {/* Carousel ≤710px */}
          <div
            className="hidden mx-auto w-[min(100%,21.875rem)] overflow-hidden select-none max-[711px]:mt-10 max-[711px]:block"
            {...swipeHandlers}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={dict.stories[activeIndex].title}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                transition={{ duration: 0.32, ease: "easeOut" }}
              >
                <StoryCard story={dict.stories[activeIndex]} index={activeIndex} label={dict.starRatingLabel} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pager dots — carousel only */}
          <div
            className="hidden justify-center items-center gap-[0.6875rem] mx-auto p-[0.9375rem] rounded-[1.25rem] bg-[var(--surface-panel-bg)] w-fit max-[711px]:mt-4 max-[711px]:flex"
          >
            {Array.from({ length: storyCount }).map((_, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show story ${index + 1}`}
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
      className="grid content-start gap-5 min-h-[22.8125rem] p-[2.5rem_1.875rem] rounded-[1.25rem] border border-[var(--surface-panel-border-soft)] bg-[var(--surface-panel-bg)] max-[1025px]:min-h-[20rem] max-[1025px]:p-[2rem_1.5rem] max-[711px]:aspect-square max-[711px]:min-h-0 max-[711px]:gap-4 max-[711px]:p-[1.75rem_1.5rem]"
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
      <p className="m-0 w-full text-white/50 opacity-50 text-center text-[1.125rem] font-normal tracking-[-0.5px] leading-[1.333333] max-[711px]:text-base">
        {story.quote}
      </p>
    </motion.article>
  );
}
