import { getTranslations } from "next-intl/server";
import StaticPageTemplate from "@/components/templates/StaticPageTemplate";

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  return (
    <StaticPageTemplate title={t("title")}>
      <p>{t("intro")}</p>
      <ul>
        <li><strong>Email:</strong> info@annhien.com</li>
        <li><strong>WhatsApp:</strong> +84 000 000 000</li>
        <li><strong>Instagram:</strong> @annhien</li>
      </ul>
    </StaticPageTemplate>
  );
}
