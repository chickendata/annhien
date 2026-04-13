import { Link } from "@/i18n/navigation";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={className}>
      <span className="text-xl font-bold tracking-tight">
        An <span className="text-[color:var(--brand)]">Nhiên</span>
      </span>
    </Link>
  );
}
