import SearchResultsTemplate from "@/components/templates/SearchResultsTemplate";
import { searchProducts } from "@/data/products";

export default async function SearchPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ q?: string }>;
}) {
  const { locale } = await params;
  const { q = "" } = await searchParams;
  const loc = locale as "vi" | "en";
  const results = searchProducts(q, loc);
  return <SearchResultsTemplate query={q} results={results} locale={loc} />;
}
