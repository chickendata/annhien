"use client";

import { useEffect, useMemo, useState } from "react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import type { Collection } from "@/data/collections";
import type { Product } from "@/data/products";
import ProductImage from "@/components/atoms/ProductImage";
import Pagination from "@/components/molecules/Pagination";
import Heading from "@/components/atoms/Heading";

const PAGE_SIZE = 12;

type Tile = {
  key: string;
  image: string;
  productSlug: string | null;
  alt: string;
  isNew: boolean;
};

export default function CollectionsGalleryTemplate({
  collections,
  products,
  allImages,
  locale,
}: {
  collections: Collection[];
  products: Product[];
  allImages: string[];
  locale: "vi" | "en";
}) {
  const t = useTranslations("Collection");
  const [activeSlug, setActiveSlug] = useState<string>("__all__");
  const [page, setPage] = useState(1);

  const imageToProduct = useMemo(() => {
    const map = new Map<string, Product>();
    for (const p of products) {
      for (const img of p.images) {
        if (!map.has(img)) map.set(img, p);
      }
    }
    return map;
  }, [products]);

  const allTiles: Tile[] = useMemo(
    () =>
      allImages.map((image, i) => {
        const p = imageToProduct.get(image);
        return {
          key: `${image}-${i}`,
          image,
          productSlug: p?.slug ?? null,
          alt: p ? p.name[locale] : "",
          isNew: !!p?.isNew,
        };
      }),
    [allImages, imageToProduct, locale],
  );

  const tiles =
    activeSlug === "__all__"
      ? allTiles
      : allTiles.filter((tile) => {
          const p = imageToProduct.get(tile.image);
          return p?.collectionSlug === activeSlug;
        });

  const pageCount = Math.max(1, Math.ceil(tiles.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [activeSlug]);

  const currentPage = Math.min(page, pageCount);
  const start = (currentPage - 1) * PAGE_SIZE;
  const visible = tiles.slice(start, start + PAGE_SIZE);

  const activeCollection =
    activeSlug === "__all__"
      ? null
      : collections.find((c) => c.slug === activeSlug) ?? null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Heading level={1} className="mb-8">
        {activeCollection ? activeCollection.name[locale] : t("allTitle")}
      </Heading>
      <div className="grid gap-8 md:grid-cols-[220px_1fr]">
        <aside className="md:sticky md:top-24 md:self-start">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-[color:var(--muted)]">
            {t("menuTitle")}
          </p>
          <ul className="flex flex-wrap gap-2 md:flex-col md:gap-0">
            <li>
              <button
                type="button"
                onClick={() => setActiveSlug("__all__")}
                className={menuClass(activeSlug === "__all__")}
              >
                {t("allOption")}
              </button>
            </li>
            {collections.map((c) => (
              <li key={c.slug}>
                <button
                  type="button"
                  onClick={() => setActiveSlug(c.slug)}
                  className={menuClass(activeSlug === c.slug)}
                >
                  {c.name[locale]}
                </button>
              </li>
            ))}
          </ul>
        </aside>

        <div>
          <p className="mb-4 text-sm text-[color:var(--muted)]">
            {t("results", { count: tiles.length })}
          </p>
          {visible.length === 0 ? (
            <p className="py-20 text-center text-sm text-[color:var(--muted)]">
              {t("empty")}
            </p>
          ) : (
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {visible.map((tile) => {
                const content = (
                  <>
                    <ProductImage
                      src={tile.image}
                      alt={tile.alt}
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      watermarkSize="md"
                    />
                    {tile.isNew && (
                      <span className="absolute left-3 top-3 bg-[color:var(--brand)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
                        New
                      </span>
                    )}
                  </>
                );
                return tile.productSlug ? (
                  <Link
                    key={tile.key}
                    href={`/products/${tile.productSlug}`}
                    className="group relative block aspect-square overflow-hidden bg-[color:var(--surface)]"
                  >
                    {content}
                  </Link>
                ) : (
                  <div
                    key={tile.key}
                    className="group relative block aspect-square overflow-hidden bg-[color:var(--surface)]"
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          )}
          <Pagination
            page={currentPage}
            pageCount={pageCount}
            onPageChange={(p) => {
              setPage(p);
              if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          />
        </div>
      </div>
    </div>
  );
}

function menuClass(active: boolean): string {
  const base = "w-full px-3 py-2 text-left text-sm transition md:border-l-2";
  return active
    ? `${base} md:border-[color:var(--brand)] font-medium text-[color:var(--brand)] bg-[color:var(--surface)] md:bg-transparent`
    : `${base} md:border-transparent text-[color:var(--foreground)] hover:text-[color:var(--brand)] hover:md:border-[color:var(--brand)]`;
}
