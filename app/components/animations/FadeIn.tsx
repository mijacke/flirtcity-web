"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { PropsWithChildren } from "react";

type MotionTag = "div" | "article" | "section" | "span" | "ul" | "li";

const motionComponents = {
  article: motion.article,
  div: motion.div,
  li: motion.li,
  section: motion.section,
  span: motion.span,
  ul: motion.ul,
} as const;

type FadeInProps = PropsWithChildren<{
  className?: string;
  delay?: number;
  duration?: number;
  as?: MotionTag;
  /** Slide direction. Omit for a pure opacity fade. */
  direction?: "up" | "down" | "left" | "right";
  /** Slide distance in pixels (default 28). */
  offset?: number;
  /** Viewport root-margin for triggering (default "-72px"). */
  viewportMargin?: string;
  /** Use spring easing instead of the default easeOut curve. */
  spring?: boolean;
}>;

const directionMap = {
  up: { axis: "y", sign: 1 },
  down: { axis: "y", sign: -1 },
  left: { axis: "x", sign: 1 },
  right: { axis: "x", sign: -1 },
} as const;

/**
 * Lightweight client-side reveal wrapper. Fades (and optionally slides) its
 * children into view on scroll. Respects `prefers-reduced-motion` — users who
 * opt out see the content immediately with no transform or delay.
 */
export default function FadeIn({
  as = "div",
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.55,
  offset = 28,
  viewportMargin = "-72px",
  spring = false,
}: FadeInProps) {
  const Component = motionComponents[as];
  const prefersReduced = useReducedMotion();
  const { axis, sign } = directionMap[direction];

  const initial = prefersReduced
    ? { opacity: 1 }
    : { opacity: 0, [axis]: sign * offset };

  const animate = prefersReduced
    ? { opacity: 1 }
    : { opacity: 1, [axis]: 0 };

  const transition = prefersReduced
    ? { duration: 0 }
    : spring
    ? { delay, type: "spring" as const, stiffness: 140, damping: 20, mass: 0.6 }
    : { delay, duration, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] };

  return (
    <Component
      className={className}
      initial={initial}
      transition={transition}
      viewport={{ margin: viewportMargin, once: true }}
      whileInView={animate}
    >
      {children}
    </Component>
  );
}

/* ─── Stagger primitives ───────────────────────────────────────────────── */

type StaggerProps = PropsWithChildren<{
  as?: MotionTag;
  className?: string;
  /** Delay between each child's reveal (seconds). */
  stagger?: number;
  /** Delay before the first child (seconds). */
  initialDelay?: number;
  viewportMargin?: string;
  /** Whether to trigger on scroll into view or immediately on mount. */
  trigger?: "scroll" | "mount";
}>;

/**
 * Parent wrapper that orchestrates a staggered reveal of its `StaggerItem`
 * children. Children must use `StaggerItem` (or any motion element that
 * inherits `show` / `hidden` variants) for the animation to chain.
 */
export function Stagger({
  as = "div",
  children,
  className,
  stagger = 0.08,
  initialDelay = 0,
  viewportMargin = "-72px",
  trigger = "scroll",
}: StaggerProps) {
  const Component = motionComponents[as];
  const prefersReduced = useReducedMotion();

  const variants: Variants = {
    hidden: {},
    show: {
      transition: prefersReduced
        ? { staggerChildren: 0 }
        : { delayChildren: initialDelay, staggerChildren: stagger },
    },
  };

  const mountProps =
    trigger === "mount"
      ? { animate: "show" as const }
      : { whileInView: "show" as const, viewport: { margin: viewportMargin, once: true } };

  return (
    <Component
      className={className}
      initial="hidden"
      variants={variants}
      {...mountProps}
    >
      {children}
    </Component>
  );
}

type StaggerItemProps = PropsWithChildren<{
  as?: MotionTag;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
  offset?: number;
}>;

export function StaggerItem({
  as = "div",
  children,
  className,
  direction = "up",
  offset = 24,
}: StaggerItemProps) {
  const Component = motionComponents[as];
  const prefersReduced = useReducedMotion();
  const { axis, sign } = directionMap[direction];

  const hiddenOffset = prefersReduced ? 0 : sign * offset;
  const variants: Variants = {
    hidden: {
      opacity: prefersReduced ? 1 : 0,
      x: axis === "x" ? hiddenOffset : 0,
      y: axis === "y" ? hiddenOffset : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: prefersReduced
        ? { duration: 0 }
        : { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <Component className={className} variants={variants}>
      {children}
    </Component>
  );
}
