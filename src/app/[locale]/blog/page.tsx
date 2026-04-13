import { getTranslations } from "next-intl/server";
import Heading from "@/components/atoms/Heading";
import BlogCardMini from "@/components/molecules/BlogCardMini";
import { blogPosts } from "@/data/blog";

export default async function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Blog");
  const loc = locale as "vi" | "en";

  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Heading level={1} className="mb-8">{t("title")}</Heading>
      <div className="grid gap-8 md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCardMini key={post.slug} post={post} locale={loc} />
        ))}
      </div>
    </div>
  );
}
