import type { PropsWithChildren } from "react";

type GradientTextProps = PropsWithChildren<{
  className?: string;
}>;

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span className={`pearl-text ${className ?? ""}`}>
      {children}
    </span>
  );
}
