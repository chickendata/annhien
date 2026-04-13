import { useTranslations } from "next-intl";
import type { Product } from "@/data/products";
import Heading from "@/components/atoms/Heading";
import ProductCard from "@/components/organisms/ProductCard";

export default function SearchResultsTemplate({
  query,
  results,
  locale,
}: {
  query: string;
  results: Product[];
  locale: "vi" | "en";
}) {
  const t = useTranslations("Search");

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Heading level={1} className="mb-2">{t("resultsFor", { query })}</Heading>
      <p className="mb-8 text-sm text-[color:var(--muted)]">{t("count", { count: results.length })}</p>
      {results.length === 0 ? (
        <p className="py-16 text-center text-[color:var(--muted)]">{t("noResults")}</p>
      ) : (
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {results.map((p) => (
            <ProductCard key={p.slug} product={p} locale={locale} />
          ))}
        </div>
      )}
    </div>
  );
}
