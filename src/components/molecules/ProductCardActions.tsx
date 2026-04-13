"use client";

import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { useCart } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useUI } from "@/store/ui";

export default function ProductCardActions({ slug }: { slug: string }) {
  const t = useTranslations("Product");
  const addToCart = useCart((s) => s.add);
  const openCart = useUI((s) => s.openCart);
  const openQuickView = useUI((s) => s.openQuickView);
  const wishlist = useWishlist();
  const isWish = wishlist.ids.includes(slug);

  const onAdd = () => {
    addToCart(slug, 1);
    openCart();
  };

  return (
    <div className="flex items-center gap-1">
      <Button
        size="sm"
        variant="icon"
        onClick={() => wishlist.toggle(slug)}
        aria-label={t("wishlist")}
        className={isWish ? "text-[color:var(--brand)]" : ""}
      >
        <Icon name={isWish ? "heart-filled" : "heart"} size={16} />
      </Button>
      <Button size="sm" variant="icon" onClick={() => openQuickView(slug)} aria-label={t("quickView")}>
        <Icon name="eye" size={16} />
      </Button>
      <Button size="sm" variant="icon" onClick={onAdd} aria-label={t("addToCart")}>
        <Icon name="cart" size={16} />
      </Button>
    </div>
  );
}
