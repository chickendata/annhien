import { img } from "@/lib/assets";

export type HeroSlide = {
  image: string;
  titleKey: string;
  subtitleKey: string;
  ctaKey: string;
  href: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: img(10015),
    titleKey: "slide1Title",
    subtitleKey: "slide1Subtitle",
    ctaKey: "discover",
    href: "/collections",
  },
  {
    image: img(10017),
    titleKey: "slide2Title",
    subtitleKey: "slide2Subtitle",
    ctaKey: "discover",
    href: "/collections/bulk-hair",
  },
  {
    image: img(10019),
    titleKey: "slide3Title",
    subtitleKey: "slide3Subtitle",
    ctaKey: "discover",
    href: "/collections/wigs-hair",
  },
];
