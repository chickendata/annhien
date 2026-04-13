import { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type Level = 1 | 2 | 3 | 4;

const levelClass: Record<Level, string> = {
  1: "text-4xl md:text-5xl font-semibold leading-tight tracking-tight",
  2: "text-3xl md:text-4xl font-semibold leading-tight tracking-tight",
  3: "text-2xl font-semibold leading-snug",
  4: "text-lg font-medium",
};

export default function Heading({
  level = 2,
  as,
  className,
  ...rest
}: { level?: Level; as?: ElementType } & HTMLAttributes<HTMLHeadingElement>) {
  const Tag: ElementType = as ?? (`h${level}` as ElementType);
  return <Tag className={cn(levelClass[level], className)} {...rest} />;
}
