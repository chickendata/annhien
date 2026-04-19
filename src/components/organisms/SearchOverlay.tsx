"use client";

import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import ProductImage from "@/components/atoms/ProductImage";
import { useUI } from "@/store/ui";
import { searchProducts } from "@/data/products";

export default function SearchOverlay() {
  const open = useUI((s) => s.searchOpen);
  const close = useUI((s) => s.closeSearch);
  const t = useTranslations("Search");
  const locale = useLocale() as "vi" | "en";
  const [query, setQuery] = useState("");
  const [prevOpen, setPrevOpen] = useState(open);

  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) setQuery("");
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  if (!open) return null;
  const results = searchProducts(query, locale).slice(0, 6);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/50 p-4 pt-[10vh]">
      <div className="absolute inset-0" onClick={close} />
      <div className="relative z-10 w-full max-w-2xl bg-white p-6 shadow-lg">
        <div className="flex items-center gap-2">
          <Icon name="search" size={20} />
          <Input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t("placeholder")}
            className="h-12 border-none text-base focus:ring-0"
          />
          <Button variant="icon" onClick={close} aria-label="Close">
            <Icon name="close" size={18} />
          </Button>
        </div>
        {query && (
          <div className="mt-4 border-t border-[color:var(--border)] pt-4">
            {results.length === 0 ? (
              <p className="py-8 text-center text-sm text-[color:var(--muted)]">{t("noResults")}</p>
            ) : (
              <ul className="flex flex-col gap-3">
                {results.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/products/${p.slug}`}
                      onClick={close}
                      className="flex items-center gap-3 p-2 hover:bg-[color:var(--surface)]"
                    >
                      <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden bg-[color:var(--surface)]">
                        <ProductImage src={p.images[0]} alt={p.name[locale]} sizes="56px" className="object-cover" watermarkSize="sm" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{p.name[locale]}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
