"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import QuantityStepper from "@/components/molecules/QuantityStepper";
import { useCart } from "@/store/cart";
import { useUI } from "@/store/ui";
import { getProduct } from "@/data/products";

export default function CartDrawer() {
  const open = useUI((s) => s.cartOpen);
  const close = useUI((s) => s.closeCart);
  const { items, updateQty, remove } = useCart();
  const t = useTranslations("Cart");
  const locale = useLocale() as "vi" | "en";

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
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <aside className="absolute right-0 top-0 flex h-full w-[420px] max-w-full flex-col bg-white">
        <header className="flex h-16 items-center justify-between border-b border-[color:var(--border)] px-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide">{t("title")}</h2>
          <Button variant="icon" onClick={close} aria-label="Close">
            <Icon name="close" size={18} />
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {items.length === 0 ? (
            <p className="py-16 text-center text-sm text-[color:var(--muted)]">{t("empty")}</p>
          ) : (
            <ul className="flex flex-col gap-4">
              {items.map((item) => {
                const product = getProduct(item.slug);
                if (!product) return null;
                return (
                  <li key={item.slug} className="flex gap-3">
                    <Link href={`/products/${product.slug}`} onClick={close} className="relative h-20 w-20 flex-shrink-0 overflow-hidden bg-[color:var(--surface)]">
                      <Image src={product.images[0]} alt={product.name[locale]} fill sizes="80px" className="object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <Link href={`/products/${product.slug}`} onClick={close} className="text-sm font-medium hover:text-[color:var(--brand)] line-clamp-2">
                        {product.name[locale]}
                      </Link>
                      <div className="mt-auto flex items-center justify-between">
                        <QuantityStepper value={item.quantity} onChange={(q) => updateQty(item.slug, q)} />
                        <Button variant="icon" size="sm" onClick={() => remove(item.slug)} aria-label={t("remove")}>
                          <Icon name="trash" size={16} />
                        </Button>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-[color:var(--border)] px-4 py-4">
            <Link href="/cart" onClick={close} className="block">
              <Button size="lg" className="w-full">{t("viewCart")}</Button>
            </Link>
          </footer>
        )}
      </aside>
    </div>
  );
}
