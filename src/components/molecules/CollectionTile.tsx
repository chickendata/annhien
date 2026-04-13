import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { Collection } from "@/data/collections";

export default function CollectionTile({
  collection,
  locale,
}: {
  collection: Collection;
  locale: "vi" | "en";
}) {
  return (
    <Link
      href={`/collections/${collection.slug}`}
      className="group block overflow-hidden bg-[color:var(--surface)]"
    >
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name[locale]}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="py-3 text-center">
        <span className="text-sm font-medium uppercase tracking-wide group-hover:text-[color:var(--brand)]">
          {collection.name[locale]}
        </span>
      </div>
    </Link>
  );
}
