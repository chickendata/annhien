import { formatPrice } from "@/lib/assets";
import { cn } from "@/lib/cn";

export default function Price({
  amount,
  compareAt,
  className,
}: {
  amount: number;
  compareAt?: number;
  className?: string;
}) {
  return (
    <span className={cn("inline-flex items-baseline gap-2", className)}>
      <span className="font-medium">{formatPrice(amount)}</span>
      {compareAt && compareAt > amount && (
        <span className="text-sm text-[color:var(--muted)] line-through">
          {formatPrice(compareAt)}
        </span>
      )}
    </span>
  );
}
