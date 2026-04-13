import { img } from "@/lib/assets";

export type Brand = {
  slug: string;
  name: string;
  logo: string;
};

export const brands: Brand[] = [
  { slug: "brand-1", name: "Brand One",   logo: img(10031) },
  { slug: "brand-2", name: "Brand Two",   logo: img(10032) },
  { slug: "brand-3", name: "Brand Three", logo: img(10033) },
  { slug: "brand-4", name: "Brand Four",  logo: img(10034) },
  { slug: "brand-5", name: "Brand Five",  logo: img(10035) },
  { slug: "brand-6", name: "Brand Six",   logo: img(10036) },
];
