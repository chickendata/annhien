"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/atoms/Logo";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import Badge from "@/components/atoms/Badge";
import NavItem from "@/components/molecules/NavItem";
import NavDropdown from "@/components/molecules/NavDropdown";
import LangToggle from "@/components/molecules/LangToggle";
import MobileNav, { type MobileNavItem } from "@/components/organisms/MobileNav";
import { useCart, selectCartCount } from "@/store/cart";
import { useWishlist } from "@/store/wishlist";
import { useUI } from "@/store/ui";

export default function Header() {
  const t = useTranslations("Header");
  const cartCount = useCart(selectCartCount);
  const wishCount = useWishlist((s) => s.ids.length);
  const openCart = useUI((s) => s.openCart);
  const openSearch = useUI((s) => s.openSearch);
  const openMobileNav = useUI((s) => s.openMobileNav);

  const navItems: MobileNavItem[] = [
    { href: "/", label: t("nav.home") },
    { href: "/collections/bulk-hair", label: t("nav.bulk") },
    { href: "/collections/tape-hair", label: t("nav.tape") },
    { href: "/collections/wigs-hair", label: t("nav.wigs") },
    { href: "/collections/weft-hair", label: t("nav.weft") },
    { href: "/collections/closure-frontal", label: t("nav.closure") },
    { href: "/collections", label: t("nav.collections") },
    {
      href: "/about",
      label: t("nav.about"),
      children: [
        { href: "/blog", label: t("nav.blog") },
        { href: "/contact", label: t("nav.contact") },
        { href: "/faqs", label: t("nav.faqs") },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-30 border-b border-[color:var(--border)] bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">
        <div className="flex items-center gap-6">
          <Button variant="icon" size="sm" className="lg:hidden" onClick={openMobileNav} aria-label={t("menu")}>
            <Icon name="menu" size={20} />
          </Button>
          <Logo />
        </div>

        <nav className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown
                key={item.href}
                href={item.href}
                label={item.label}
                items={item.children}
              />
            ) : (
              <NavItem key={item.href} href={item.href} label={item.label} />
            ),
          )}
        </nav>

        <div className="flex items-center gap-1">
          <Button variant="icon" onClick={openSearch} aria-label={t("search")}>
            <Icon name="search" size={18} />
          </Button>
          <Link href="/wishlist" aria-label={t("wishlist")} className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[color:var(--surface)]">
            <Icon name="heart" size={18} />
            <Badge count={wishCount} />
          </Link>
          <button
            type="button"
            onClick={openCart}
            aria-label={t("cart")}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-[color:var(--surface)]"
          >
            <Icon name="cart" size={18} />
            <Badge count={cartCount} />
          </button>
          <LangToggle className="ml-2" />
        </div>
      </div>
      <MobileNav navItems={navItems} />
    </header>
  );
}
