import HeroCarousel from "@/components/organisms/HeroCarousel";
import CollectionGrid from "@/components/organisms/CollectionGrid";
import NewArrivalsCarousel from "@/components/organisms/NewArrivalsCarousel";
import StylistProgram from "@/components/organisms/StylistProgram";
import BlogLatest from "@/components/organisms/BlogLatest";
import BrandsRow from "@/components/organisms/BrandsRow";
import { getNewArrivals } from "@/data/products";

export default function HomeTemplate({ locale }: { locale: "vi" | "en" }) {
  const newArrivals = getNewArrivals();
  return (
    <>
      <HeroCarousel />
      <CollectionGrid locale={locale} />
      <NewArrivalsCarousel products={newArrivals} locale={locale} />
      <StylistProgram />
      <BlogLatest locale={locale} />
      <BrandsRow />
    </>
  );
}
