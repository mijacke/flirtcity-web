"use client";

import { motion } from "framer-motion";

const STORE_BUTTONS = {
  appStore: {
    alt: "Download on the App Store",
    src: "/images/design/hero/app-store.svg",
    href: "https://apps.apple.com/app/id=com.jarwizz.flirtcity", // TODO: Update with actual App Store URL
  },
  googlePlay: {
    alt: "Get it on Google Play",
    src: "/images/design/hero/google-play.svg",
    href: "https://play.google.com/store/apps/details?id=com.jarwizz.flirtcity", // TODO: Update with actual Play Store URL
  },
} as const;

type StoreButtonProps = {
  className?: string;
  href?: string;
  priority?: boolean;
  size?: "compact" | "default";
  store: keyof typeof STORE_BUTTONS;
};

/**
 * Both store buttons share identical box dimensions so they always render
 * at the same visual size regardless of label length. The SVG (which already
 * includes the full gradient-bordered button chrome) is letterboxed inside
 * via `object-contain`, so differing intrinsic aspect ratios no longer leak.
 */
const sizeStyles = {
  default: "w-[clamp(10rem,11vw,13.25rem)] aspect-[3.05/1]",
  compact: "w-[10.0625rem] aspect-[3.05/1]",
} as const;

export default function StoreButton({
  className,
  href,
  priority = false,
  size = "default",
  store,
}: StoreButtonProps) {
  const asset = STORE_BUTTONS[store];
  const finalHref = href ?? asset.href;

  return (
    <motion.a
      data-size={size}
      data-store={store}
      className={`relative inline-flex items-center justify-center origin-center ${sizeStyles[size]} ${className ?? ""}`}
      href={finalHref}
      target="_blank"
      rel="noopener noreferrer"
      transition={{ stiffness: 380, type: "spring" }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        alt={asset.alt}
        className="block w-full h-full object-contain"
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        src={asset.src}
      />
    </motion.a>
  );
}
