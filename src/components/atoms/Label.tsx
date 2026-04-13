import { LabelHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export default function Label({ className, ...rest }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("block text-xs font-medium uppercase tracking-wide text-[color:var(--muted)]", className)}
      {...rest}
    />
  );
}
