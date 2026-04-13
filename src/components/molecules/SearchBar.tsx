"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";

export default function SearchBar({
  autoFocus,
  onSubmitted,
}: {
  autoFocus?: boolean;
  onSubmitted?: () => void;
}) {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const t = useTranslations("Search");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    router.push(`/search?q=${encodeURIComponent(q)}`);
    onSubmitted?.();
  };

  return (
    <form onSubmit={onSubmit} className="flex w-full items-center gap-2">
      <Input
        autoFocus={autoFocus}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={t("placeholder")}
        className="h-12 text-base"
      />
      <Button type="submit" size="lg" variant="primary" aria-label={t("submit")}>
        <Icon name="search" size={18} />
      </Button>
    </form>
  );
}
