import HomeTemplate from "@/components/templates/HomeTemplate";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return <HomeTemplate locale={locale as "vi" | "en"} />;
}
