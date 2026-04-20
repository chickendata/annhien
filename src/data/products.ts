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
    slug: "tape-hair-vivid-colors",
    name: { en: "Tape Hair Vivid Colors", vi: "Tóc dán màu nổi" },
    collectionSlug: "tape-hair",
    price: 119,
    images: [img(10069)],
    description: {
      en: "Tape-in extensions in vivid orange, 613 and grey shades.",
      vi: "Tóc dán keo màu cam, 613 và xám cá tính.",
    },
    isNew: true,
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
    slug: "closure-frontal-body-wave-brown",
    name: { en: "Body Wave Frontal — Brown", vi: "Frontal body wave — Nâu" },
    collectionSlug: "closure-frontal",
    price: 159,
    images: [img(10014)],
    description: {
      en: "13×4 body wave lace frontal in rich brown.",
      vi: "Frontal lace 13×4 sóng body, màu nâu.",
    },
    isNew: true,
  },
  {
    slug: "closure-frontal-body-wave-honey",
    name: { en: "Body Wave Frontal — Honey Blonde", vi: "Frontal body wave — Mật ong" },
    collectionSlug: "closure-frontal",
    price: 169,
    images: [img(10015)],
    description: {
      en: "Body wave lace frontal in a honey blonde tone.",
      vi: "Frontal lace sóng body, sắc vàng mật ong.",
    },
    isNew: true,
  },
  {
    slug: "closure-frontal-body-wave-burgundy",
    name: { en: "Body Wave Frontal — Burgundy", vi: "Frontal body wave — Đỏ rượu" },
    collectionSlug: "closure-frontal",
    price: 169,
    images: [img(10016), img(10017)],
    description: {
      en: "Body wave lace frontal in burgundy red — bold and camera-ready.",
      vi: "Frontal lace sóng body, màu đỏ rượu nổi bật.",
    },
    isNew: true,
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
    slug: "wigs-straight-natural-black",
    name: { en: "Silky Straight Black Wig", vi: "Tóc giả đen thẳng mượt" },
    collectionSlug: "wigs-hair",
    price: 319,
    images: [img(10049), img(10074), img(10082)],
    description: {
      en: "Jet black silky straight lace wig with natural parting.",
      vi: "Tóc giả lace đen thẳng mượt, đường rẽ tự nhiên.",
    },
    isNew: true,
  },
  {
    slug: "wigs-deep-curly-black",
    name: { en: "Deep Curly Black Wig", vi: "Tóc giả đen xoăn sâu" },
    collectionSlug: "wigs-hair",
    price: 349,
    images: [img(10066), img(10070), img(10071)],
    description: {
      en: "Defined deep-curly lace wig, bouncy and full-bodied.",
      vi: "Tóc giả lace xoăn sâu, đàn hồi và dày dặn.",
    },
    isNew: true,
  },
  {
    slug: "wigs-body-wave-model",
    name: { en: "Body Wave Lace Wig", vi: "Tóc giả sóng body" },
    collectionSlug: "wigs-hair",
    price: 359,
    images: [img(10059), img(10083), img(10065)],
    description: {
      en: "Hand-tied body wave lace wig — soft cascading waves.",
      vi: "Tóc giả lace sóng body, buông mềm mại.",
    },
    isNew: true,
  },
  {
    slug: "wigs-blonde-straight",
    name: { en: "Blonde Straight Lace Wig", vi: "Tóc giả vàng thẳng" },
    collectionSlug: "wigs-hair",
    price: 369,
    images: [img(10073), img(10076), img(10077), img(10078)],
    description: {
      en: "Platinum & honey blonde straight lace wigs in multiple shades.",
      vi: "Tóc giả lace thẳng tông vàng bạch kim và mật ong.",
    },
    isNew: true,
  },
  {
    slug: "wigs-ginger-vibrant",
    name: { en: "Ginger Orange Lace Wig", vi: "Tóc giả cam gừng" },
    collectionSlug: "wigs-hair",
    price: 329,
    images: [img(10072), img(10075), img(10081)],
    description: {
      en: "Vibrant ginger orange lace wig — statement color.",
      vi: "Tóc giả lace màu cam gừng nổi bật.",
    },
    isNew: true,
  },
  {
    slug: "wigs-red-burgundy",
    name: { en: "Red & Burgundy Body Wave Wig", vi: "Tóc giả đỏ & đỏ rượu sóng body" },
    collectionSlug: "wigs-hair",
    price: 339,
    images: [img(10054), img(10055), img(10079), img(10080)],
    description: {
      en: "Red and burgundy lace wigs — straight and body wave options.",
      vi: "Tóc giả lace màu đỏ và đỏ rượu, kiểu thẳng và sóng body.",
    },
    isNew: true,
  },
  {
    slug: "wigs-showcase",
    name: { en: "Wig Showroom Collection", vi: "Bộ sưu tập tóc giả showroom" },
    collectionSlug: "wigs-hair",
    price: 289,
    images: [img(10057), img(10058), img(10060), img(10061), img(10063)],
    description: {
      en: "A curated showcase of our in-store wig collection.",
      vi: "Tuyển chọn tóc giả trưng bày tại showroom.",
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
    slug: "weft-hair-highlight-piano",
    name: { en: "Highlight Piano Weft", vi: "Tóc dệt highlight piano" },
    collectionSlug: "weft-hair",
    price: 139,
    images: [img(10045), img(10056), img(10062), img(10067)],
    description: {
      en: "Multi-tonal highlight and balayage weft — salon-ready.",
      vi: "Tóc dệt highlight/balayage nhiều tông, sẵn cho salon.",
    },
    isNew: true,
  },
  {
    slug: "weft-hair-natural-dark",
    name: { en: "Natural Dark Weft", vi: "Tóc dệt tối tự nhiên" },
    collectionSlug: "weft-hair",
    price: 109,
    images: [img(10068)],
    description: {
      en: "Natural black and dark brown weft bundles.",
      vi: "Tóc dệt đen và nâu đậm tự nhiên.",
    },
    isNew: true,
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
    slug: "virgin-hair-bulk-bundles",
    name: { en: "Virgin Bulk Bundles", vi: "Tóc nguyên bản đóng bó lớn" },
    collectionSlug: "virgin-hair",
    price: 249,
    images: [img(10050), img(10051), img(10052), img(10053)],
    description: {
      en: "Untreated virgin bundles — straight and natural wave lots.",
      vi: "Tóc nguyên bản chưa qua xử lý — lô thẳng và sóng tự nhiên.",
    },
    isNew: true,
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
    slug: "keratin-i-tip-piano",
    name: { en: "Keratin I-Tip Piano", vi: "Keratin đầu I piano" },
    collectionSlug: "keratin-hair",
    price: 179,
    images: [img(10018), img(10020), img(10022)],
    description: {
      en: "Piano blend I-tip strands — black, 613 and honey.",
      vi: "Keratin đầu I phối màu piano — đen, 613 và mật ong.",
    },
    isNew: true,
  },
  {
    slug: "keratin-i-tip-brown",
    name: { en: "Keratin I-Tip Brown", vi: "Keratin đầu I nâu" },
    collectionSlug: "keratin-hair",
    price: 149,
    images: [img(10031), img(10036)],
    description: {
      en: "Natural brown I-tip keratin strands.",
      vi: "Keratin đầu I màu nâu tự nhiên.",
    },
    isNew: true,
  },
  {
    slug: "keratin-i-tip-blonde",
    name: { en: "Keratin I-Tip Blonde", vi: "Keratin đầu I vàng" },
    collectionSlug: "keratin-hair",
    price: 169,
    images: [img(10032), img(10033), img(10034), img(10035)],
    description: {
      en: "Blonde and mixed-tone I-tip keratin strands.",
      vi: "Keratin đầu I màu vàng và phối tông.",
    },
    isNew: true,
  },
  {
    slug: "keratin-u-tip",
    name: { en: "Keratin U-Tip", vi: "Keratin đầu U" },
    collectionSlug: "keratin-hair",
    price: 175,
    images: [img(10046), img(10047), img(10048)],
    description: {
      en: "U-tip keratin extensions — blonde, brown and ash highlight.",
      vi: "Keratin đầu U — vàng, nâu và ash highlight.",
    },
    isNew: true,
  },
  {
    slug: "keratin-tool-showcase",
    name: { en: "Keratin Application Set", vi: "Bộ dụng cụ nối keratin" },
    collectionSlug: "keratin-hair",
    price: 29,
    images: [img(10019)],
    description: {
      en: "Micro-ring loop tool for professional keratin installation.",
      vi: "Dụng cụ móc nối keratin chuyên nghiệp.",
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
  {
    slug: "clip-in-display-wall",
    name: { en: "Clip-in Showroom Wall", vi: "Clip-in trưng bày" },
    collectionSlug: "clip-in-hair",
    price: 139,
    images: [img(10064)],
    description: {
      en: "Clip-in extensions and wefts on our showroom display wall.",
      vi: "Clip-in và weft trên tường trưng bày showroom.",
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
