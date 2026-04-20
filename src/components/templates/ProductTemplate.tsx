"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";
import type { Collection } from "@/data/collections";
import ProductGallery from "@/components/organisms/ProductGallery";
import ProductCard from "@/components/organisms/ProductCard";
import AskQuestionModal from "@/components/organisms/AskQuestionModal";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import Icon from "@/components/atoms/Icon";
import QuantityStepper from "@/components/molecules/QuantityStepper";
import Breadcrumb, { type BreadcrumbItem } from "@/components/molecules/Breadcrumb";
import { useCart } from "@/store/cart";
import { useUI } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";

function formatDeliveryRange(locale: "vi" | "en"): string {
  const now = new Date();
  const from = new Date(now);
  from.setDate(now.getDate() + 3);
  const to = new Date(now);
  to.setDate(now.getDate() + 5);
  const fmt = new Intl.DateTimeFormat(locale === "vi" ? "vi-VN" : "en-US", {
    month: "short",
    day: "numeric",
  });
  return `${fmt.format(from)} – ${fmt.format(to)}`;
}

export default function ProductTemplate({
  product,
  collection,
  related,
  locale,
}: {
  product: Product;
  collection: Collection | null;
  related: Product[];
  locale: "vi" | "en";
}) {
  const t = useTranslations("Product");
  const tNav = useTranslations("Header.nav");

  const crumbs: BreadcrumbItem[] = [
    { label: tNav("home"), href: "/" },
    ...(collection
      ? [{ label: collection.name[locale], href: `/collections/${collection.slug}` }]
      : []),
    { label: product.name[locale] },
  ];
  const [qty, setQty] = useState(1);
  const [viewers, setViewers] = useState<number | null>(null);
  const [delivery, setDelivery] = useState<string | null>(null);
  const [askOpen, setAskOpen] = useState(false);
  const addToCart = useCart((s) => s.add);
  const openCart = useUI((s) => s.openCart);
  const wishlist = useWishlist();
  const isWish = wishlist.ids.includes(product.slug);

  useEffect(() => {
    const randomViewers = () => Math.floor(Math.random() * 41) + 10;
    setViewers(randomViewers());
    setDelivery(formatDeliveryRange(locale));
    const interval = setInterval(() => setViewers(randomViewers()), 10000);
    return () => clearInterval(interval);
  }, [locale, product.slug]);

  const onAdd = () => {
    addToCart(product.slug, qty);
    openCart();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name[locale]} />
        <div className="flex flex-col gap-5">
          <Breadcrumb items={crumbs} />
          <Heading level={1} className="text-3xl">{product.name[locale]}</Heading>
          <p className="leading-relaxed text-[color:var(--muted)]">{product.description[locale]}</p>

          <div className="mt-4 flex items-center gap-3">
            <QuantityStepper value={qty} onChange={setQty} />
            <Button size="lg" onClick={onAdd} className="flex-1">{t("addToCart")}</Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => wishlist.toggle(product.slug)}
              aria-label={t("wishlist")}
              className={isWish ? "text-[color:var(--brand)] border-[color:var(--brand)]" : ""}
            >
              <Icon name={isWish ? "heart-filled" : "heart"} size={18} />
            </Button>
          </div>

          <div className="mt-2 flex flex-col gap-3 border-y border-[color:var(--border)] py-4 text-sm">
            <div className="flex items-center gap-2 text-[color:var(--muted)]">
              <span
                aria-hidden
                className="inline-block h-2 w-2 animate-pulse rounded-full bg-[color:var(--brand)]"
              />
              <span>{viewers !== null ? t("viewing", { count: viewers }) : "\u00A0"}</span>
            </div>
            <div className="flex items-center gap-2 text-[color:var(--muted)]">
              <Icon name="truck" size={16} />
              <span>
                <span className="font-medium text-[color:var(--foreground)]">{t("estimateLabel")}:</span>{" "}
                {delivery ?? "\u00A0"}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setAskOpen(true)}
              className="inline-flex items-center gap-2 self-start text-left text-sm underline hover:text-[color:var(--brand)]"
            >
              {t("askQuestion")}
            </button>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20">
          <Heading level={3} className="mb-6">{t("related")}</Heading>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} locale={locale} />
            ))}
          </div>
        </section>
      )}

      <AskQuestionModal
        open={askOpen}
        onClose={() => setAskOpen(false)}
        productName={product.name[locale]}
      />
    </div>
  );
}
