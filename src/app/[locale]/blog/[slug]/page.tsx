import Image from "next/image";
import { notFound } from "next/navigation";
import StaticPageTemplate from "@/components/templates/StaticPageTemplate";
import { blogPosts, getBlogPost } from "@/data/blog";

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const loc = locale as "vi" | "en";

  return (
    <StaticPageTemplate title={post.title[loc]}>
      <div className="relative mb-8 aspect-[16/9] overflow-hidden">
        <Image src={post.image} alt={post.title[loc]} fill sizes="(min-width: 768px) 800px, 100vw" className="object-cover" priority />
      </div>
      <p className="text-xs uppercase tracking-widest text-[color:var(--muted)]">
        {new Date(post.date).toLocaleDateString(loc, { year: "numeric", month: "long", day: "numeric" })}
      </p>
      <p className="mt-4 italic">{post.excerpt[loc]}</p>
      <p className="mt-4">{post.body[loc]}</p>
    </StaticPageTemplate>
  );
}
