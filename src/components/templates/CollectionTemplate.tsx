"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/data/products";
import type { Collection } from "@/data/collections";
import ProductCard from "@/components/organisms/ProductCard";
import ProductFilterBar, { SortOption } from "@/components/organisms/ProductFilterBar";
import Heading from "@/components/atoms/Heading";

export default function CollectionTemplate({
  collection,
  products,
  locale,
}: {
  collection: Collection | null;
  products: Product[];
  locale: "vi" | "en";
}) {
  const [sort, setSort] = useState<SortOption>("featured");

  const sorted = useMemo(() => {
    const copy = [...products];
    switch (sort) {
      case "price-asc": return copy.sort((a, b) => a.price - b.price);
      case "price-desc": return copy.sort((a, b) => b.price - a.price);
      case "newest": return copy.sort((a, b) => Number(!!b.isNew) - Number(!!a.isNew));
      default: return copy;
    }
  }, [products, sort]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <div className="mb-8">
        <Heading level={1}>{collection ? collection.name[locale] : ""}</Heading>
      </div>
      <ProductFilterBar sort={sort} onSortChange={setSort} count={sorted.length} />
      <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
        {sorted.map((p) => (
          <ProductCard key={p.slug} product={p} locale={locale} />
        ))}
      </div>
    </div>
  );
}
