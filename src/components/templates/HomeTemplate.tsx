import HeroCarousel from "@/components/organisms/HeroCarousel";
import CollectionGrid from "@/components/organisms/CollectionGrid";
import NewArrivalsCarousel from "@/components/organisms/NewArrivalsCarousel";
import HairStyleGallery from "@/components/organisms/HairStyleGallery";
import StylistProgram from "@/components/organisms/StylistProgram";
import BlogLatest from "@/components/organisms/BlogLatest";
import { getNewArrivals } from "@/data/products";

export default function HomeTemplate({ locale }: { locale: "vi" | "en" }) {
  const newArrivals = getNewArrivals();
  return (
    <>
      <HeroCarousel />
      <CollectionGrid locale={locale} />
      <NewArrivalsCarousel products={newArrivals} locale={locale} />
      <HairStyleGallery />
      <StylistProgram />
      <BlogLatest locale={locale} />
    </>
  );
}
