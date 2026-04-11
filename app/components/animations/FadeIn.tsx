"use client";

import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  /** HTML tag to render. Defaults to "div". */
  as?: "div" | "article" | "section" | "span";
  /** Direction to slide from. Omit for a simple opacity fade. */
  direction?: "up" | "down" | "left" | "right";
  /** Slide distance in pixels (default 32). */
  offset?: number;
  /** Viewport margin for triggering (default "-80px"). */
  viewportMargin?: string;
}>;

const directionMap = {
  up: { y: 1 },
  down: { y: -1 },
  left: { x: 1 },
  right: { x: -1 },
} as const;

/**
 * Lightweight client-side animation wrapper.
 * Wraps children in a framer-motion element that fades (and optionally slides)
 * into view. All wrapped content can remain as Server Components.
 */
export default function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.55,
  offset = 32,
  viewportMargin = "-80px",
}: FadeInProps) {
  const Component = motion.create(as);
  const dir = directionMap[direction];

  const initialProps = {
    opacity: 0,
    ...("x" in dir ? { x: dir.x * offset } : {}),
    ...("y" in dir ? { y: dir.y * offset } : {}),
  };

  const animateProps = {
    opacity: 1,
    ...("x" in dir ? { x: 0 } : {}),
    ...("y" in dir ? { y: 0 } : {}),
  };

  return (
    <Component
      className={className}
      initial={initialProps}
      animate={undefined}
      transition={{ delay, duration }}
      viewport={{ margin: viewportMargin, once: true }}
      whileInView={animateProps}
    >
      {children}
    </Component>
  );
}
