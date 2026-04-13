import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "icon" | "outline";
type Size = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  size?: Size;
};

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[color:var(--brand)] text-white hover:bg-[color:var(--brand-hover)]",
  secondary:
    "bg-black text-white hover:bg-neutral-800",
  ghost:
    "bg-transparent text-foreground hover:bg-[color:var(--surface)]",
  outline:
    "border border-[color:var(--border)] bg-transparent text-foreground hover:bg-[color:var(--surface)]",
  icon:
    "bg-transparent text-foreground hover:bg-[color:var(--surface)] rounded-full",
};

const sizeClass: Record<Size, string> = {
  sm: "h-8 px-3 text-xs",
  md: "h-10 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const iconSizeClass: Record<Size, string> = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-12 w-12",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "primary", size = "md", className, ...rest },
  ref,
) {
  const isIcon = variant === "icon";
  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[color:var(--brand)] disabled:opacity-50 disabled:pointer-events-none",
        isIcon ? iconSizeClass[size] : sizeClass[size],
        variantClass[variant],
        className,
      )}
      {...rest}
    />
  );
});

export default Button;
