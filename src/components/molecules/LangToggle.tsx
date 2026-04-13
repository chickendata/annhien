"use client";

import { useLocale } from "next-intl";
import { useTransition } from "react";
import { useRouter, usePathname } from "@/i18n/navigation";
import Icon from "@/components/atoms/Icon";

export default function LangToggle({ className }: { className?: string }) {
  const locale = useLocale() as "vi" | "en";
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const next = locale === "vi" ? "en" : "vi";

  const onToggle = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      onClick={onToggle}
      disabled={isPending}
      aria-label={`Switch to ${next.toUpperCase()}`}
      className={`inline-flex h-9 items-center gap-1.5 rounded-full border border-[color:var(--border)] px-3 text-xs font-semibold uppercase transition-colors hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] disabled:opacity-50 ${className ?? ""}`}
    >
      <Icon name="globe" size={14} />
      {locale.toUpperCase()}
    </button>
  );
}
