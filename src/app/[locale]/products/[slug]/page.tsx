import { notFound } from "next/navigation";
import ProductTemplate from "@/components/templates/ProductTemplate";
import { getProduct, products, getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const related = getProductsByCollection(product.collectionSlug)
    .filter((p) => p.slug !== slug)
    .slice(0, 4);
  return <ProductTemplate product={product} related={related} locale={locale as "vi" | "en"} />;
}
