import Image from "next/image";
import { Link } from "@/i18n/navigation";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label="Wigs by An Nhiên" className={`inline-flex items-center ${className ?? ""}`}>
      <Image
        src="/logo.png"
        alt="Wigs by An Nhiên"
        width={240}
        height={160}
        priority
        className="h-11 w-auto"
      />
    </Link>
  );
}
