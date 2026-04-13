import { getTranslations } from "next-intl/server";
import StaticPageTemplate from "@/components/templates/StaticPageTemplate";

export default async function FaqsPage() {
  const t = await getTranslations("Faqs");
  const items = ["q1", "q2", "q3", "q4"] as const;
  return (
    <StaticPageTemplate title={t("title")}>
      <dl className="space-y-6">
        {items.map((key) => (
          <div key={key}>
            <dt className="font-semibold">{t(`${key}.q`)}</dt>
            <dd className="mt-1 text-[color:var(--muted)]">{t(`${key}.a`)}</dd>
          </div>
        ))}
      </dl>
    </StaticPageTemplate>
  );
}
