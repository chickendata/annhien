import { img } from "@/lib/assets";

export type Product = {
  slug: string;
  name: { vi: string; en: string };
  collectionSlug: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  description: { vi: string; en: string };
  isNew?: boolean;
};

export const products: Product[] = [
  {
    slug: "bulk-hair-1",
    name: { en: "Bulk Hair 1", vi: "Tóc số lượng lớn 1" },
    collectionSlug: "bulk-hair",
    price: 129,
    compareAtPrice: 159,
    images: [img(10011), img(10012), img(10013)],
    description: {
      en: "Premium bulk hair extensions, 100% human Remy hair, tangle-free and dye-friendly.",
      vi: "Tóc nối số lượng lớn cao cấp, 100% tóc người Remy, không rối và có thể nhuộm.",
    },
    isNew: true,
  },
  {
    slug: "bulk-hair-3",
    name: { en: "Bulk Hair 3", vi: "Tóc số lượng lớn 3" },
    collectionSlug: "bulk-hair",
    price: 149,
    images: [img(10012), img(10011)],
    description: {
      en: "Soft natural waves in bulk, ideal for wholesale stylists.",
      vi: "Sóng tự nhiên mềm mại, lý tưởng cho stylist bán buôn.",
    },
    isNew: true,
  },
  {
    slug: "bulk-hair-classic",
    name: { en: "Bulk Hair", vi: "Tóc số lượng lớn" },
    collectionSlug: "bulk-hair",
    price: 99,
    images: [img(10013)],
    description: {
      en: "Our classic bulk hair — the bestseller for three years running.",
      vi: "Tóc số lượng lớn kinh điển — sản phẩm bán chạy 3 năm liền.",
    },
  },
  {
    slug: "top-selling-bulk",
    name: { en: "Top Selling Bulk Hair Extensions", vi: "Tóc nối bán chạy nhất" },
    collectionSlug: "bulk-hair",
    price: 179,
    compareAtPrice: 229,
    images: [img(10011), img(10012)],
    description: {
      en: "The #1 pick of professional salons worldwide.",
      vi: "Lựa chọn số 1 của các salon chuyên nghiệp trên thế giới.",
    },
    isNew: true,
  },
  {
    slug: "wholesale-bulk-extensions",
    name: { en: "Wholesale Bulk Hair Extensions", vi: "Tóc nối bán buôn" },
    collectionSlug: "bulk-hair",
    price: 259,
    images: [img(10013), img(10021)],
    description: {
      en: "Hot selling at wholesale price. Minimum order 5 packs.",
      vi: "Bán chạy với giá bán buôn. Đặt tối thiểu 5 gói.",
    },
  },
  {
    slug: "tape-hair-1",
    name: { en: "Tape Hair 1", vi: "Tóc dán keo 1" },
    collectionSlug: "tape-hair",
    price: 89,
    images: [img(10005), img(10023)],
    description: {
      en: "Pre-taped hair extensions, easy application in under 30 minutes.",
      vi: "Tóc dán keo sẵn, thao tác dưới 30 phút.",
    },
    isNew: true,
  },
  {
    slug: "tape-hair-2",
    name: { en: "Tape Hair 2", vi: "Tóc dán keo 2" },
    collectionSlug: "tape-hair",
    price: 95,
    images: [img(10024)],
    description: {
      en: "Lightweight tape-in extensions, invisible under fine hair.",
      vi: "Tóc dán siêu nhẹ, vô hình dưới tóc mỏng.",
    },
  },
  {
    slug: "tape-hair-3",
    name: { en: "Tape Hair 3", vi: "Tóc dán keo 3" },
    collectionSlug: "tape-hair",
    price: 109,
    images: [img(10025)],
    description: {
      en: "Wavy tape-ins for voluminous looks.",
      vi: "Tóc dán xoăn cho vẻ bồng bềnh.",
    },
  },
  {
    slug: "closure-frontal-2",
    name: { en: "Closure & Frontal 2", vi: "Closure & Frontal 2" },
    collectionSlug: "closure-frontal",
    price: 139,
    compareAtPrice: 169,
    images: [img(10009), img(10026)],
    description: {
      en: "HD lace closure, 5×5, pre-plucked natural hairline.",
      vi: "Closure lace HD, 5×5, đường chân tóc tự nhiên.",
    },
    isNew: true,
  },
  {
    slug: "closure-frontal-3",
    name: { en: "Closure & Frontal 3", vi: "Closure & Frontal 3" },
    collectionSlug: "closure-frontal",
    price: 189,
    images: [img(10027)],
    description: {
      en: "13×4 lace frontal, melts seamlessly into skin.",
      vi: "Frontal lace 13×4, hoà vào da liền mạch.",
    },
  },
  {
    slug: "wigs-natural-straight",
    name: { en: "Natural Straight Wig", vi: "Tóc giả thẳng tự nhiên" },
    collectionSlug: "wigs-hair",
    price: 299,
    images: [img(10001), img(10028)],
    description: {
      en: "Full lace wig, pre-cut and ready to wear.",
      vi: "Tóc giả full lace, cắt sẵn và sẵn sàng đội.",
    },
  },
  {
    slug: "weft-hair-body-wave",
    name: { en: "Body Wave Weft", vi: "Tóc dệt sóng body" },
    collectionSlug: "weft-hair",
    price: 119,
    images: [img(10002), img(10029)],
    description: {
      en: "Machine-made weft, soft body wave.",
      vi: "Tóc dệt máy, sóng body mềm.",
    },
  },
  {
    slug: "wave-curly-deep",
    name: { en: "Deep Curly", vi: "Tóc xoăn xoắn sâu" },
    collectionSlug: "wave-curly",
    price: 149,
    images: [img(10003), img(10030)],
    description: {
      en: "Deep curly texture with bounce and shine.",
      vi: "Tóc xoăn sâu, đàn hồi và bóng.",
    },
  },
  {
    slug: "virgin-hair-raw",
    name: { en: "Raw Virgin Hair", vi: "Tóc nguyên bản thô" },
    collectionSlug: "virgin-hair",
    price: 229,
    images: [img(10004), img(10037)],
    description: {
      en: "Raw virgin hair from a single donor, cuticle intact.",
      vi: "Tóc nguyên bản từ một người cho, còn lớp biểu bì.",
    },
  },
  {
    slug: "ponytail-classic",
    name: { en: "Classic Ponytail", vi: "Tóc đuôi ngựa kinh điển" },
    collectionSlug: "ponytail-hair",
    price: 79,
    images: [img(10006), img(10038)],
    description: {
      en: "Clip-on ponytail, silky straight finish.",
      vi: "Tóc đuôi ngựa kẹp, thẳng mượt.",
    },
  },
  {
    slug: "keratin-i-tip",
    name: { en: "Keratin I-Tip", vi: "Keratin đầu I" },
    collectionSlug: "keratin-hair",
    price: 159,
    images: [img(10007), img(10039)],
    description: {
      en: "Keratin-bonded I-tip extensions, 100 strands per pack.",
      vi: "Tóc nối keratin đầu I, 100 sợi/gói.",
    },
  },
  {
    slug: "feather-ombre",
    name: { en: "Feather Ombre", vi: "Tóc lông vũ ombre" },
    collectionSlug: "feather-hair",
    price: 49,
    images: [img(10008), img(10040)],
    description: {
      en: "Feather-light strand extensions, ombre color.",
      vi: "Tóc lông vũ siêu nhẹ, màu ombre.",
    },
  },
  {
    slug: "clip-in-7pcs",
    name: { en: "Clip-in 7 Pieces Set", vi: "Bộ tóc kẹp 7 mảnh" },
    collectionSlug: "clip-in-hair",
    price: 129,
    images: [img(10010), img(10041)],
    description: {
      en: "7-piece clip-in set for full-head transformation.",
      vi: "Bộ 7 mảnh tóc kẹp, biến hoá toàn đầu.",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getNewArrivals(): Product[] {
  return products.filter((p) => p.isNew);
}

export function searchProducts(query: string, locale: "vi" | "en" = "en"): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name[locale].toLowerCase().includes(q) ||
      p.name.en.toLowerCase().includes(q) ||
      p.slug.includes(q) ||
      p.collectionSlug.includes(q),
  );
}
