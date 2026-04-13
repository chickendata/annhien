import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { collections } from "@/data/collections";
import CollectionTile from "@/components/molecules/CollectionTile";
import Heading from "@/components/atoms/Heading";

export default async function CollectionsIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Collection");
  const loc = locale as "vi" | "en";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Heading level={1} className="mb-8">{t("allTitle")}</Heading>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {collections.map((c) => (
          <CollectionTile key={c.slug} collection={c} locale={loc} />
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-[color:var(--muted)]">
        <Link href="/" className="underline hover:text-[color:var(--brand)]">{t("backHome")}</Link>
      </div>
    </div>
  );
}
