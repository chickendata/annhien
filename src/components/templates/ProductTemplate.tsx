"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";
import ProductGallery from "@/components/organisms/ProductGallery";
import ProductCard from "@/components/organisms/ProductCard";
import Button from "@/components/atoms/Button";
import Price from "@/components/atoms/Price";
import Heading from "@/components/atoms/Heading";
import Icon from "@/components/atoms/Icon";
import QuantityStepper from "@/components/molecules/QuantityStepper";
import { useCart } from "@/store/cart";
import { useUI } from "@/store/ui";
import { useWishlist } from "@/store/wishlist";

export default function ProductTemplate({
  product,
  related,
  locale,
}: {
  product: Product;
  related: Product[];
  locale: "vi" | "en";
}) {
  const t = useTranslations("Product");
  const [qty, setQty] = useState(1);
  const addToCart = useCart((s) => s.add);
  const openCart = useUI((s) => s.openCart);
  const wishlist = useWishlist();
  const isWish = wishlist.ids.includes(product.slug);

  const onAdd = () => {
    addToCart(product.slug, qty);
    openCart();
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        <ProductGallery images={product.images} alt={product.name[locale]} />
        <div className="flex flex-col gap-5">
          <Heading level={1} className="text-3xl">{product.name[locale]}</Heading>
          <Price amount={product.price} compareAt={product.compareAtPrice} className="text-2xl" />
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
    </div>
  );
}
