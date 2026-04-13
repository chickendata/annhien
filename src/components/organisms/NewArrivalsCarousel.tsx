"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";
import ProductCard from "@/components/organisms/ProductCard";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

export default function NewArrivalsCarousel({
  products,
  locale,
}: {
  products: Product[];
  locale: "vi" | "en";
}) {
  const t = useTranslations("Home.NewArrivals");
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: 1 | -1) => {
    if (!ref.current) return;
    const w = ref.current.clientWidth;
    ref.current.scrollBy({ left: dir * w * 0.8, behavior: "smooth" });
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <Text variant="eyebrow" className="mb-2">{t("eyebrow")}</Text>
          <Heading level={2}>{t("title")}</Heading>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => scroll(-1)} aria-label="Previous">
            <Icon name="chevron-left" size={16} />
          </Button>
          <Button variant="outline" size="sm" onClick={() => scroll(1)} aria-label="Next">
            <Icon name="chevron-right" size={16} />
          </Button>
        </div>
      </div>
      <div
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2"
      >
        {products.map((p) => (
          <div key={p.slug} className="w-[70%] flex-shrink-0 snap-start sm:w-[40%] md:w-[30%] lg:w-[22%]">
            <ProductCard product={p} locale={locale} />
          </div>
        ))}
      </div>
    </section>
  );
}
