"use client";

import { motion } from "framer-motion";

const STORE_BUTTONS = {
  appStore: {
    alt: "Download on the App Store",
    height: 48,
    src: "/images/design/hero/app-store.svg",
    width: 144,
  },
  googlePlay: {
    alt: "Get it on Google Play",
    height: 48,
    src: "/images/design/hero/google-play.svg",
    width: 160,
  },
} as const;

type StoreButtonProps = {
  className?: string;
  href?: string;
  priority?: boolean;
  size?: "compact" | "default";
  store: keyof typeof STORE_BUTTONS;
};

const sizeStyles = {
  default: {
    appStore: "w-[clamp(10rem,10.5vw,12.6rem)]",
    googlePlay: "w-[clamp(11.2rem,11.75vw,14.0875rem)]",
  },
  compact: {
    appStore: "w-36",
    googlePlay: "w-[10.0625rem]",
  },
} as const;

export default function StoreButton({
  className,
  href = "#",
  priority = false,
  size = "default",
  store,
}: StoreButtonProps) {
  const asset = STORE_BUTTONS[store];

  return (
    <motion.a
      data-size={size}
      data-store={store}
      className={`inline-flex items-center justify-center origin-center ${sizeStyles[size][store]} ${className ?? ""}`}
      href={href}
      transition={{ stiffness: 380, type: "spring" }}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        alt={asset.alt}
        className={`block w-full h-auto ${size === "compact" ? "object-contain" : ""}`}
        height={asset.height}
        fetchPriority={priority ? "high" : "auto"}
        src={asset.src}
        width={asset.width}
      />
    </motion.a>
  );
}
