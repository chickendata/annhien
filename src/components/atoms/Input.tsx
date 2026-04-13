import { InputHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...rest }, ref) {
    return (
      <input
        ref={ref}
        className={cn(
          "h-10 w-full border border-[color:var(--border)] bg-white px-3 text-sm outline-none transition-colors focus:border-[color:var(--brand)]",
          className,
        )}
        {...rest}
      />
    );
  },
);

export default Input;
