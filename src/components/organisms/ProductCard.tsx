import { Link } from "@/i18n/navigation";
import type { Product } from "@/data/products";
import ProductImage from "@/components/atoms/ProductImage";
import ProductCardActions from "@/components/molecules/ProductCardActions";

export default function ProductCard({
  product,
  locale,
}: {
  product: Product;
  locale: "vi" | "en";
}) {
  return (
    <article className="group flex flex-col">
      <Link href={`/products/${product.slug}`} className="relative block aspect-square overflow-hidden bg-[color:var(--surface)]">
        <ProductImage
          src={product.images[0]}
          alt={product.name[locale]}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          watermarkSize="md"
        />
        {product.isNew && (
          <span className="absolute left-3 top-3 bg-[color:var(--brand)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
            New
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col pt-3">
        <Link href={`/products/${product.slug}`} className="mb-1">
          <h3 className="text-sm font-medium hover:text-[color:var(--brand)] line-clamp-2">
            {product.name[locale]}
          </h3>
        </Link>
        <div className="mt-auto flex items-center justify-end pt-2">
          <ProductCardActions slug={product.slug} />
        </div>
      </div>
    </article>
  );
}
