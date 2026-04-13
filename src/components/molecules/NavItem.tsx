"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/cn";

export default function NavItem({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <Link
      href={href}
      className={cn(
        "text-sm font-medium uppercase tracking-wide transition-colors",
        isActive ? "text-[color:var(--brand)]" : "text-foreground hover:text-[color:var(--brand)]",
        className,
      )}
    >
      {label}
    </Link>
  );
}
