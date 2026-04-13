"use client";

import { useTranslations } from "next-intl";

export type SortOption = "featured" | "price-asc" | "price-desc" | "newest";

export default function ProductFilterBar({
  sort,
  onSortChange,
  count,
}: {
  sort: SortOption;
  onSortChange: (next: SortOption) => void;
  count: number;
}) {
  const t = useTranslations("Collection");

  return (
    <div className="flex flex-col gap-3 border-b border-[color:var(--border)] pb-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-sm text-[color:var(--muted)]">{t("results", { count })}</p>
      <label className="flex items-center gap-2 text-sm">
        <span className="text-[color:var(--muted)]">{t("sortBy")}</span>
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="h-9 border border-[color:var(--border)] bg-white px-2 text-sm"
        >
          <option value="featured">{t("sort.featured")}</option>
          <option value="newest">{t("sort.newest")}</option>
          <option value="price-asc">{t("sort.priceAsc")}</option>
          <option value="price-desc">{t("sort.priceDesc")}</option>
        </select>
      </label>
    </div>
  );
}
