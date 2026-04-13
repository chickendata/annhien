import { img } from "@/lib/assets";

export type BlogPost = {
  slug: string;
  title: { vi: string; en: string };
  excerpt: { vi: string; en: string };
  body: { vi: string; en: string };
  image: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "how-to-choose-hair-extensions",
    title: {
      en: "How to Choose the Right Hair Extensions",
      vi: "Cách chọn tóc nối phù hợp",
    },
    excerpt: {
      en: "A quick guide to picking the right type, color, and length for your clients.",
      vi: "Hướng dẫn nhanh chọn loại, màu và độ dài phù hợp cho khách.",
    },
    body: {
      en: "Choosing the right hair extensions comes down to matching texture, grade, and length to your client's natural hair. Start with the grade: Remy vs non-Remy, then pick texture and color.",
      vi: "Chọn tóc nối phù hợp dựa vào việc khớp kết cấu, phân cấp và độ dài với tóc tự nhiên của khách. Bắt đầu với cấp: Remy và không Remy, sau đó chọn kết cấu và màu.",
    },
    image: img(10042),
    date: "2026-03-20",
  },
  {
    slug: "hair-care-101",
    title: {
      en: "Hair Care 101 for Extensions",
      vi: "Chăm sóc tóc nối cơ bản",
    },
    excerpt: {
      en: "Keep extensions soft and shiny with these five habits.",
      vi: "Giữ tóc nối mềm và bóng với 5 thói quen này.",
    },
    body: {
      en: "Brush gently with a loop brush, wash with sulfate-free shampoo, condition mid-to-ends, dry flat, and sleep with a silk pillowcase.",
      vi: "Chải nhẹ bằng lược vòng, gội bằng shampoo không sulfate, xả dưỡng từ giữa tới ngọn, phơi phẳng, và ngủ trên gối lụa.",
    },
    image: img(10043),
    date: "2026-03-12",
  },
  {
    slug: "understanding-hair-grades",
    title: {
      en: "Understanding Hair Grades",
      vi: "Hiểu về phân cấp tóc",
    },
    excerpt: {
      en: "What 8A, 10A, and 12A actually mean.",
      vi: "Ý nghĩa thực sự của 8A, 10A và 12A.",
    },
    body: {
      en: "The grade system is not regulated, but generally higher grades indicate longer, healthier cuticle-aligned hair from a single donor.",
      vi: "Hệ thống phân cấp không được quy định chính thức, nhưng cấp cao thường chỉ tóc dài hơn, khỏe hơn, biểu bì thẳng hàng, từ một người cho duy nhất.",
    },
    image: img(10044),
    date: "2026-02-28",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}
