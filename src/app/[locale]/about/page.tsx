import { getTranslations } from "next-intl/server";
import StaticPageTemplate from "@/components/templates/StaticPageTemplate";

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <StaticPageTemplate title={t("title")}>
      <p>{t("p1")}</p>
      <p>{t("p2")}</p>
      <p>{t("p3")}</p>
    </StaticPageTemplate>
  );
}
