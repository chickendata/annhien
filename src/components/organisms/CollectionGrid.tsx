import { useTranslations } from "next-intl";
import { collections } from "@/data/collections";
import CollectionTile from "@/components/molecules/CollectionTile";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

export default function CollectionGrid({ locale }: { locale: "vi" | "en" }) {
  const t = useTranslations("Home.Collections");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <Text variant="eyebrow" className="mb-2">{t("eyebrow")}</Text>
        <Heading level={2}>{t("title")}</Heading>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {collections.map((c) => (
          <CollectionTile key={c.slug} collection={c} locale={locale} />
        ))}
      </div>
    </section>
  );
}
