"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Heading from "@/components/atoms/Heading";
import Button from "@/components/atoms/Button";
import ProductCard from "@/components/organisms/ProductCard";
import { useWishlist } from "@/store/wishlist";
import { products } from "@/data/products";

export default function WishlistTemplate() {
  const t = useTranslations("Wishlist");
  const locale = useLocale() as "vi" | "en";
  const ids = useWishlist((s) => s.ids);
  const items = products.filter((p) => ids.includes(p.slug));

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Heading level={1} className="mb-8">{t("pageTitle")}</Heading>
      {items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="mb-4 text-[color:var(--muted)]">{t("empty")}</p>
          <Link href="/collections">
            <Button size="lg">{t("browse")}</Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
