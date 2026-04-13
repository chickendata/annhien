import { useTranslations } from "next-intl";
import { blogPosts } from "@/data/blog";
import BlogCardMini from "@/components/molecules/BlogCardMini";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

export default function BlogLatest({ locale }: { locale: "vi" | "en" }) {
  const t = useTranslations("Home.Blog");

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <Text variant="eyebrow" className="mb-2">{t("eyebrow")}</Text>
        <Heading level={2}>{t("title")}</Heading>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCardMini key={post.slug} post={post} locale={locale} />
        ))}
      </div>
    </section>
  );
}
