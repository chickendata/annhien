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
        <li><strong>Instagram:</strong> <a href="https://www.instagram.com/wigsbyannhien.vn/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--brand)]">@wigsbyannhien.vn</a></li>
        <li><strong>Facebook:</strong> <a href="https://www.facebook.com/profile.php?id=61570713178382" target="_blank" rel="noopener noreferrer" className="underline hover:text-[color:var(--brand)]">Wigs by An Nhien</a></li>
      </ul>
    </StaticPageTemplate>
  );
}
