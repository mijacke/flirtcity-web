"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";

type BlurImageProps = ImageProps & {
  /** Optional class applied to the skeleton placeholder layer. */
  skeletonClassName?: string;
  /** Disable the shimmer placeholder entirely. */
  disableSkeleton?: boolean;
};

/**
 * Next/Image wrapper that shows a subtle shimmer skeleton until the image
 * decodes. Keeps the same API as next/image; callers pass `fill` or
 * explicit width/height as usual. The skeleton respects the rounded corners
 * of the parent container via `inherit` border-radius.
 */
export default function BlurImage({
  alt,
  className,
  skeletonClassName,
  disableSkeleton = false,
  onLoad,
  ...imageProps
}: BlurImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!disableSkeleton && !loaded ? (
        <span
          aria-hidden="true"
          className={`skeleton-surface rounded-[inherit] ${skeletonClassName ?? ""}`}
        />
      ) : null}
      <Image
        alt={alt}
        {...imageProps}
        className={`${className ?? ""} transition-opacity duration-[600ms] ease-out ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={(event) => {
          setLoaded(true);
          onLoad?.(event);
        }}
      />
    </>
  );
}
