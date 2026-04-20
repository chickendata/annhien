"use client";

import Icon from "@/components/atoms/Icon";

function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function getPages(current: number, total: number): (number | "…")[] {
  if (total <= 7) return range(1, total);
  if (current <= 4) return [...range(1, 5), "…", total];
  if (current >= total - 3) return [1, "…", ...range(total - 4, total)];
  return [1, "…", ...range(current - 1, current + 1), "…", total];
}

export default function Pagination({
  page,
  pageCount,
  onPageChange,
}: {
  page: number;
  pageCount: number;
  onPageChange: (next: number) => void;
}) {
  if (pageCount <= 1) return null;
  const pages = getPages(page, pageCount);

  const baseBtn =
    "inline-flex h-10 min-w-10 items-center justify-center border border-[color:var(--border)] bg-white px-3 text-sm transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-[color:var(--border)] disabled:hover:text-current";

  return (
    <nav aria-label="Pagination" className="mt-10 flex items-center justify-center gap-2">
      <button
        type="button"
        className={baseBtn}
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
        aria-label="Previous page"
      >
        <Icon name="chevron-left" size={16} />
      </button>
      {pages.map((p, i) =>
        p === "…" ? (
          <span key={`ellipsis-${i}`} className="px-2 text-sm text-[color:var(--muted)]">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            onClick={() => onPageChange(p)}
            aria-current={p === page ? "page" : undefined}
            className={
              p === page
                ? "inline-flex h-10 min-w-10 items-center justify-center border border-[color:var(--brand)] bg-[color:var(--brand)] px-3 text-sm font-medium text-white"
                : baseBtn
            }
          >
            {p}
          </button>
        ),
      )}
      <button
        type="button"
        className={baseBtn}
        onClick={() => onPageChange(page + 1)}
        disabled={page >= pageCount}
        aria-label="Next page"
      >
        <Icon name="chevron-right" size={16} />
      </button>
    </nav>
  );
}
