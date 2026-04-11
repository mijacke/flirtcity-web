import type { ReactNode } from "react";

type SectionHeadingProps = {
  align?: "center" | "left";
  description?: string;
  eyebrow?: ReactNode;
  title: ReactNode;
};

export default function SectionHeading({
  align = "center",
  description,
  eyebrow,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={`grid gap-4 ${
        align === "center" ? "text-center justify-items-center" : "text-left"
      }`}
    >
      {eyebrow ? (
        <p className="m-0 text-[0.85rem] font-semibold tracking-[0.18em] uppercase text-[var(--color-accent-cyan)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="m-0 max-w-[18ch] text-[clamp(2rem,2.25vw,2.25rem)] font-semibold leading-[1.22] tracking-[-0.18px]">
        {title}
      </h2>
      {description ? (
        <p className="m-0 max-w-[64ch] text-[clamp(1rem,1.2vw,1.125rem)] leading-[1.5] text-[var(--color-text-secondary)]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
