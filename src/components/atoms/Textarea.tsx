import { TextareaHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaHTMLAttributes<HTMLTextAreaElement>>(
  function Textarea({ className, ...rest }, ref) {
    return (
      <textarea
        ref={ref}
        className={cn(
          "w-full border border-[color:var(--border)] bg-white px-3 py-2 text-sm outline-none transition-colors focus:border-[color:var(--brand)]",
          className,
        )}
        {...rest}
      />
    );
  },
);

export default Textarea;
