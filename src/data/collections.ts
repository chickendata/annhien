import { img } from "@/lib/assets";

export type Collection = {
  slug: string;
  name: { vi: string; en: string };
  image: string;
};

export const collections: Collection[] = [
  { slug: "wigs-hair",           name: { en: "Wigs Hair",           vi: "Tóc giả nguyên đầu" }, image: img(10001) },
  { slug: "weft-hair",           name: { en: "Weft Hair",           vi: "Tóc dệt" },             image: img(10002) },
  { slug: "wave-curly",          name: { en: "Wave / Curly",        vi: "Tóc xoăn / gợn sóng" }, image: img(10003) },
  { slug: "virgin-hair",         name: { en: "Virgin Hair",         vi: "Tóc nguyên bản" },      image: img(10004) },
  { slug: "tape-hair",           name: { en: "Tape Hair",           vi: "Tóc dán keo" },         image: img(10005) },
  { slug: "ponytail-hair",       name: { en: "Ponytail Hair",       vi: "Tóc buộc đuôi ngựa" },  image: img(10006) },
  { slug: "keratin-hair",        name: { en: "Keratin Hair",        vi: "Tóc keratin" },         image: img(10007) },
  { slug: "feather-hair",        name: { en: "Feather Hair",        vi: "Tóc lông vũ" },         image: img(10008) },
  { slug: "closure-frontal",     name: { en: "Closure & Frontal",   vi: "Closure & Frontal" },   image: img(10009) },
  { slug: "clip-in-hair",        name: { en: "Clip in Hair",        vi: "Tóc kẹp" },             image: img(10010) },
  { slug: "bulk-hair",           name: { en: "Bulk Hair",           vi: "Tóc số lượng lớn" },    image: img(10011) },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
