import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { BlogPost } from "@/data/blog";

export default function BlogCardMini({
  post,
  locale,
}: {
  post: BlogPost;
  locale: "vi" | "en";
}) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="relative mb-4 aspect-[4/3] overflow-hidden">
        <Image
          src={post.image}
          alt={post.title[locale]}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <p className="mb-2 text-xs uppercase tracking-wider text-[color:var(--muted)]">
        {new Date(post.date).toLocaleDateString(locale, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <h3 className="mb-2 text-lg font-medium leading-snug group-hover:text-[color:var(--brand)]">
        {post.title[locale]}
      </h3>
      <p className="text-sm leading-relaxed text-[color:var(--muted)]">{post.excerpt[locale]}</p>
    </Link>
  );
}
