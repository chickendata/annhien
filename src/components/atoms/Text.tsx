import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Variant = "body" | "muted" | "small" | "eyebrow";

const variantClass: Record<Variant, string> = {
  body: "text-base leading-relaxed",
  muted: "text-sm text-[color:var(--muted)]",
  small: "text-xs",
  eyebrow: "text-xs uppercase tracking-widest text-[color:var(--muted)]",
};

export default function Text({
  variant = "body",
  className,
  ...rest
}: { variant?: Variant } & HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn(variantClass[variant], className)} {...rest} />;
}
