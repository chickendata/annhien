"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import QuantityStepper from "@/components/molecules/QuantityStepper";
import { useUI } from "@/store/ui";
import { useCart } from "@/store/cart";
import { getProduct } from "@/data/products";

export default function QuickViewModal() {
  const slug = useUI((s) => s.quickViewSlug);
  const close = useUI((s) => s.closeQuickView);
  const openCart = useUI((s) => s.openCart);
  const addToCart = useCart((s) => s.add);
  const t = useTranslations("Product");
  const locale = useLocale() as "vi" | "en";
  const [qty, setQty] = useState(1);
  const [prevSlug, setPrevSlug] = useState(slug);

  if (slug !== prevSlug) {
    setPrevSlug(slug);
    setQty(1);
  }

  useEffect(() => {
    if (slug) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [slug]);

  if (!slug) return null;
  const product = getProduct(slug);
  if (!product) return null;

  const onAdd = () => {
    addToCart(slug, qty);
    close();
    openCart();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={close} />
      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-0 bg-white md:grid-cols-2">
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-2 top-2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white hover:bg-[color:var(--surface)]"
        >
          <Icon name="close" size={18} />
        </button>
        <div className="relative aspect-square bg-[color:var(--surface)]">
          <Image src={product.images[0]} alt={product.name[locale]} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
        </div>
        <div className="flex flex-col gap-4 p-6">
          <h2 className="text-2xl font-semibold">{product.name[locale]}</h2>
          <p className="text-sm leading-relaxed text-[color:var(--muted)]">{product.description[locale]}</p>
          <div className="mt-2 flex items-center gap-3">
            <QuantityStepper value={qty} onChange={setQty} />
            <Button size="lg" onClick={onAdd} className="flex-1">
              {t("addToCart")}
            </Button>
          </div>
          <Link href={`/products/${product.slug}`} onClick={close} className="text-sm underline hover:text-[color:var(--brand)]">
            {t("viewFullDetails")}
          </Link>
        </div>
      </div>
    </div>
  );
}
