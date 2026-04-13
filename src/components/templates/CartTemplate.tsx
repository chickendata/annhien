"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Heading from "@/components/atoms/Heading";
import Price from "@/components/atoms/Price";
import QuantityStepper from "@/components/molecules/QuantityStepper";
import { useCart } from "@/store/cart";
import { getProduct } from "@/data/products";
import { formatPrice } from "@/lib/assets";

export default function CartTemplate() {
  const t = useTranslations("Cart");
  const locale = useLocale() as "vi" | "en";
  const { items, updateQty, remove, clear } = useCart();

  const total = items.reduce((sum, i) => {
    const p = getProduct(i.slug);
    return sum + (p?.price ?? 0) * i.quantity;
  }, 0);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <Heading level={1} className="mb-8">{t("pageTitle")}</Heading>
      {items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="mb-4 text-[color:var(--muted)]">{t("empty")}</p>
          <Link href="/collections">
            <Button size="lg">{t("continueShopping")}</Button>
          </Link>
        </div>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <ul className="flex flex-col divide-y divide-[color:var(--border)]">
            {items.map((item) => {
              const product = getProduct(item.slug);
              if (!product) return null;
              return (
                <li key={item.slug} className="flex gap-4 py-6">
                  <Link href={`/products/${product.slug}`} className="relative h-28 w-28 flex-shrink-0 overflow-hidden bg-[color:var(--surface)]">
                    <Image src={product.images[0]} alt={product.name[locale]} fill sizes="112px" className="object-cover" />
                  </Link>
                  <div className="flex flex-1 flex-col">
                    <Link href={`/products/${product.slug}`} className="font-medium hover:text-[color:var(--brand)]">
                      {product.name[locale]}
                    </Link>
                    <Price amount={product.price} className="mt-1 text-sm" />
                    <div className="mt-auto flex items-center justify-between">
                      <QuantityStepper value={item.quantity} onChange={(q) => updateQty(item.slug, q)} />
                      <div className="flex items-center gap-4">
                        <span className="font-medium">{formatPrice(product.price * item.quantity)}</span>
                        <Button variant="icon" size="sm" onClick={() => remove(item.slug)} aria-label={t("remove")}>
                          <Icon name="trash" size={16} />
                        </Button>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <aside className="h-fit border border-[color:var(--border)] p-6">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide">{t("summary")}</h2>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt>{t("subtotal")}</dt>
                <dd>{formatPrice(total)}</dd>
              </div>
              <div className="flex justify-between text-[color:var(--muted)]">
                <dt>{t("shipping")}</dt>
                <dd>{t("calculatedAtCheckout")}</dd>
              </div>
            </dl>
            <div className="my-4 border-t border-[color:var(--border)]" />
            <div className="mb-4 flex justify-between text-base font-semibold">
              <span>{t("total")}</span>
              <span>{formatPrice(total)}</span>
            </div>
            <Button size="lg" className="w-full">{t("checkout")}</Button>
            <Button size="sm" variant="ghost" className="mt-3 w-full" onClick={clear}>{t("clearCart")}</Button>
          </aside>
        </div>
      )}
    </div>
  );
}
