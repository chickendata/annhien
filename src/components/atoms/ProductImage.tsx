import Image from "next/image";
import type { CSSProperties } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  watermark?: boolean;
  watermarkSize?: "sm" | "md" | "lg";
  watermarkPosition?: "bottom-right" | "center";
};

const SIZE_CLASS: Record<NonNullable<ProductImageProps["watermarkSize"]>, string> = {
  sm: "w-[38%]",
  md: "w-[32%]",
  lg: "w-[28%]",
};

const POSITION_STYLE: Record<
  NonNullable<ProductImageProps["watermarkPosition"]>,
  CSSProperties
> = {
  "bottom-right": { right: "4%", bottom: "4%" },
  center: { left: "50%", top: "50%", transform: "translate(-50%, -50%)" },
};

export default function ProductImage({
  src,
  alt,
  fill = true,
  sizes,
  className,
  priority,
  loading,
  fetchPriority,
  watermark = true,
  watermarkSize = "md",
  watermarkPosition = "bottom-right",
}: ProductImageProps) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        sizes={sizes}
        className={className}
        priority={priority}
        loading={loading}
        fetchPriority={fetchPriority}
      />
      {watermark && (
        <div
          aria-hidden
          className={`pointer-events-none absolute ${SIZE_CLASS[watermarkSize]} select-none`}
          style={{
            ...POSITION_STYLE[watermarkPosition],
            aspectRatio: "1280 / 853",
            opacity: 0.95,
            filter:
              "drop-shadow(0 1px 3px rgba(0,0,0,0.35)) drop-shadow(0 0 1px rgba(255,255,255,0.6))",
          }}
        >
          <Image
            src="/logo.png"
            alt=""
            fill
            sizes="200px"
            className="object-contain"
          />
        </div>
      )}
    </>
  );
}
