"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import NavItem from "@/components/molecules/NavItem";
import { useUI } from "@/store/ui";

export type MobileNavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string }[];
};

export default function MobileNav({ navItems }: { navItems: MobileNavItem[] }) {
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
            <div key={item.label} className="flex flex-col">
              <NavItem href={item.href} label={item.label} className="block py-2" />
              {item.children && (
                <div className="ml-4 flex flex-col border-l border-[color:var(--border)] pl-3">
                  {item.children.map((child) => (
                    <NavItem
                      key={child.label}
                      href={child.href}
                      label={child.label}
                      className="block py-1.5 text-xs"
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>
    </div>
  );
}
