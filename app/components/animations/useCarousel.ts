"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseCarouselOptions = {
  /** Number of slides. */
  count: number;
  /** Auto-advance interval in ms. Default 3600. */
  intervalMs?: number;
  /** Minimum horizontal swipe distance (px) to trigger a slide change. */
  swipeThreshold?: number;
};

type UseCarouselReturn = {
  activeIndex: number;
  setIndex: (index: number) => void;
  next: () => void;
  prev: () => void;
  /**
   * Spread these on the element that should react to swipe/drag gestures
   * (typically the slide wrapper, not the dots).
   */
  swipeHandlers: {
    onPointerDown: (e: React.PointerEvent) => void;
    onPointerUp: (e: React.PointerEvent) => void;
    onPointerCancel: () => void;
    style: React.CSSProperties;
  };
};

/**
 * Carousel controller that combines auto-advance and swipe/pointer gestures.
 *
 * Key behavior: the auto-advance timer restarts from zero whenever the active
 * index changes — from a dot click, a swipe, or the timer itself — so the user
 * always sees a full interval on the slide they just landed on.
 */
export function useCarousel({
  count,
  intervalMs = 3600,
  swipeThreshold = 40,
}: UseCarouselOptions): UseCarouselReturn {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStartRef = useRef<number | null>(null);

  const setIndex = useCallback(
    (index: number) => {
      if (count <= 0) return;
      const normalized = ((index % count) + count) % count;
      setActiveIndex(normalized);
    },
    [count],
  );

  const next = useCallback(() => {
    setActiveIndex((current) => (current + 1) % count);
  }, [count]);

  const prev = useCallback(() => {
    setActiveIndex((current) => (current - 1 + count) % count);
  }, [count]);

  // Auto-advance. Depends on activeIndex so any change (click, swipe, or
  // the previous tick) restarts the timer — the user always gets the full
  // interval on the slide they just landed on.
  useEffect(() => {
    if (count <= 1) return;
    const id = window.setInterval(() => {
      // Pause while the mobile menu (or any dialog) is open — slide
      // animations otherwise repaint behind a non-modal dialog.
      if (typeof document !== "undefined" && document.querySelector("dialog[open]")) return;
      setActiveIndex((current) => (current + 1) % count);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [count, intervalMs, activeIndex]);

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerStartRef.current = e.clientX;
  }, []);

  const onPointerUp = useCallback(
    (e: React.PointerEvent) => {
      const start = pointerStartRef.current;
      pointerStartRef.current = null;
      if (start === null) return;
      const delta = e.clientX - start;
      if (Math.abs(delta) < swipeThreshold) return;
      if (delta < 0) next();
      else prev();
    },
    [next, prev, swipeThreshold],
  );

  const onPointerCancel = useCallback(() => {
    pointerStartRef.current = null;
  }, []);

  return {
    activeIndex,
    setIndex,
    next,
    prev,
    swipeHandlers: {
      onPointerDown,
      onPointerUp,
      onPointerCancel,
      style: { touchAction: "pan-y" },
    },
  };
}
