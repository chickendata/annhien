export type HeroSlide = {
  image: string;
  titleKey: string;
  subtitleKey: string;
  ctaKey: string;
  href: string;
};

export const heroSlides: HeroSlide[] = [
  {
    image: "/HLC_Hair_Store/banner_hero.png",
    titleKey: "slide1Title",
    subtitleKey: "slide1Subtitle",
    ctaKey: "discover",
    href: "/collections",
  },
  {
    image: "/HLC_Hair_Store/banner_hero2.png",
    titleKey: "slide2Title",
    subtitleKey: "slide2Subtitle",
    ctaKey: "discover",
    href: "/collections/wigs-hair",
  },
];
