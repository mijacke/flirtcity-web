import type { SVGProps } from "react";

type SocialIconProps = SVGProps<SVGSVGElement> & {
  /** The social network for which to render the icon. */
  network: "instagram" | "x" | "facebook" | "tiktok";
};

const paths: Record<SocialIconProps["network"], string> = {
  instagram:
    "M17.5 6.5h.01M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5a4.5 4.5 0 1 0 .001 9.001A4.5 4.5 0 0 0 12 7.5Z",
  x: "m4 4 6.54 8.73L4.36 20H7l4.72-5.53L16 20h4L13.2 11 19 4h-2.64l-4.21 4.93L8 4Z",
  facebook:
    "M14 8h3V3h-3a5 5 0 0 0-5 5v3H6v4h3v6h4v-6h3l1-4h-4V8a1 1 0 0 1 1-1Z",
  tiktok:
    "M13.8 3.2c.69 2.07 2.15 3.56 4 4.06v3.03c-1.42-.05-2.68-.5-3.78-1.36v5.56A5.3 5.3 0 1 1 8.7 9.3v3.1a2.2 2.2 0 1 0 2.2 2.2V3.2Z",
};

/**
 * Renders a social-network icon as an inline SVG.
 * Decorative by default (`aria-hidden`).
 */
export default function SocialIcon({
  network,
  className = "w-5 h-5",
  ...rest
}: SocialIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      {...rest}
    >
      <path
        d={paths[network]}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}
