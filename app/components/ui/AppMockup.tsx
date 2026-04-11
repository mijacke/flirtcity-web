import Image from "next/image";

type AppMockupProps = {
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  src: string;
  variant?: "card" | "phone";
  width: number;
  height: number;
};

const variantStyles = {
  phone: "max-w-[min(100%,540px)] rounded-[2.25rem] shadow-[var(--shadow-card)]",
  card: "rounded-[1.5rem] shadow-[var(--shadow-soft)]",
} as const;

export default function AppMockup({
  alt,
  className,
  imageClassName,
  priority = false,
  src,
  variant = "phone",
  width,
  height,
}: AppMockupProps) {
  return (
    <div className={`relative overflow-hidden w-full ${variantStyles[variant]} ${className ?? ""}`}>
      <Image
        alt={alt}
        className={`w-full h-auto ${imageClassName ?? ""}`}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 80vw, (max-width: 1280px) 40vw, 520px"
        src={src}
        width={width}
      />
    </div>
  );
}
