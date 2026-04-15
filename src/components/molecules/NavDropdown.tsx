"use client";

import { useEffect, useRef, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import Icon from "@/components/atoms/Icon";
import { cn } from "@/lib/cn";

export type NavChild = { href: string; label: string };

export default function NavDropdown({
  href,
  label,
  items,
}: {
  href: string;
  label: string;
  items: NavChild[];
}) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive =
    pathname === href ||
    (href !== "/" && pathname.startsWith(href)) ||
    items.some((i) => pathname === i.href || pathname.startsWith(i.href));

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => {
        cancelClose();
        setOpen(true);
      }}
      onMouseLeave={scheduleClose}
      onFocus={() => {
        cancelClose();
        setOpen(true);
      }}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) scheduleClose();
      }}
    >
      <Link
        href={href}
        aria-haspopup="menu"
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1 text-sm font-medium uppercase tracking-wide transition-colors",
          isActive ? "text-[color:var(--brand)]" : "text-foreground hover:text-[color:var(--brand)]",
        )}
      >
        {label}
        <Icon name="chevron-down" size={14} className={cn("transition-transform", open && "rotate-180")} />
      </Link>

      {open && (
        <div
          role="menu"
          className="absolute left-0 top-full z-40 min-w-[200px] rounded-md border border-[color:var(--border)] bg-white py-2 shadow-lg"
        >
          {items.map((item) => {
            const active = pathname === item.href || pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={cn(
                  "block px-4 py-2 text-sm transition-colors",
                  active
                    ? "text-[color:var(--brand)]"
                    : "text-foreground hover:bg-[color:var(--surface)] hover:text-[color:var(--brand)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
