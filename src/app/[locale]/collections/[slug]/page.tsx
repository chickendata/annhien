import { notFound } from "next/navigation";
import CollectionTemplate from "@/components/templates/CollectionTemplate";
import { getCollection, collections } from "@/data/collections";
import { getProductsByCollection } from "@/data/products";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const items = getProductsByCollection(slug);
  return <CollectionTemplate collection={collection} products={items} locale={locale as "vi" | "en"} />;
}
