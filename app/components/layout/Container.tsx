import type { ElementType, ReactNode } from "react";

type ContainerProps = {
  /** Semantic HTML element to render. @default "div" */
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Add vertical section padding. @default false */
  padded?: boolean;
};

/**
 * Replaces the `section-shell` + `section-frame` CSS utility pattern
 * with a composable React component.
 *
 * - Outer: full-width with responsive horizontal padding
 * - Inner: max-width constrained content frame
 */
export default function Container({
  as: Tag = "div",
  children,
  className,
  padded = false,
}: ContainerProps) {
  return (
    <Tag
      className={`w-full mx-auto px-[var(--section-padding-inline)] ${
        padded ? "py-[var(--section-padding-block)]" : ""
      } ${className ?? ""}`}
    >
      <div className="w-full max-w-[var(--content-width)] mx-auto">
        {children}
      </div>
    </Tag>
  );
}
