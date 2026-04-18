import HeroCarousel from "@/components/organisms/HeroCarousel";
import CollectionGrid from "@/components/organisms/CollectionGrid";
import NewArrivalsCarousel from "@/components/organisms/NewArrivalsCarousel";
import HairStyleGallery from "@/components/organisms/HairStyleGallery";
import Testimonials from "@/components/organisms/Testimonials";
import FloatingTestimonials from "@/components/organisms/FloatingTestimonials";
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
      <Testimonials />
      <StylistProgram />
      <BlogLatest locale={locale} />
      <FloatingTestimonials />
    </>
  );
}
