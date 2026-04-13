import { brands } from "@/data/brands";
import BrandLogo from "@/components/molecules/BrandLogo";

export default function BrandsRow() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <div className="flex flex-wrap items-center justify-center gap-8">
        {brands.map((b) => (
          <BrandLogo key={b.slug} brand={b} />
        ))}
      </div>
    </section>
  );
}
