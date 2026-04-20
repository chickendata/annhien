import fs from "node:fs";
import path from "node:path";
import { collections } from "@/data/collections";
import { products } from "@/data/products";
import CollectionsGalleryTemplate from "@/components/templates/CollectionsGalleryTemplate";

function listStoreImages(): string[] {
  const dir = path.join(process.cwd(), "public", "HLC_Hair_Store");
  return fs
    .readdirSync(dir)
    .filter((f) => /^\d+\.(jpe?g|png|webp|svg)$/i.test(f))
    .sort()
    .map((f) => `/HLC_Hair_Store/${f}`);
}

export default async function CollectionsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const allImages = listStoreImages();
  return (
    <CollectionsGalleryTemplate
      collections={collections}
      products={products}
      allImages={allImages}
      locale={locale as "vi" | "en"}
    />
  );
}
