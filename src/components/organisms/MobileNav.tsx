"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import NavItem from "@/components/molecules/NavItem";
import { useUI } from "@/store/ui";

export default function MobileNav({
  navItems,
}: {
  navItems: Array<{ href: string; label: string }>;
}) {
  const open = useUI((s) => s.mobileNavOpen);
  const close = useUI((s) => s.closeMobileNav);
  const t = useTranslations("Header");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40 lg:hidden">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <aside className="absolute left-0 top-0 h-full w-80 max-w-[85%] overflow-y-auto bg-white">
        <div className="flex h-16 items-center justify-between border-b border-[color:var(--border)] px-4">
          <span className="text-sm font-semibold uppercase">{t("menu")}</span>
          <Button variant="icon" size="sm" onClick={close} aria-label="Close">
            <Icon name="close" size={18} />
          </Button>
        </div>
        <nav className="flex flex-col gap-1 p-4" onClick={close}>
          {navItems.map((item) => (
            <NavItem key={item.href} href={item.href} label={item.label} className="block py-2" />
          ))}
        </nav>
      </aside>
    </div>
  );
}
