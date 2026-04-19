"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { collections } from "@/data/collections";
import CollectionTile from "@/components/molecules/CollectionTile";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";

import "swiper/css";
import "swiper/css/navigation";

export default function CollectionGrid({ locale }: { locale: "vi" | "en" }) {
  const t = useTranslations("Home.Collections");
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="mb-10 text-center">
        <Text variant="eyebrow" className="mb-2">{t("eyebrow")}</Text>
        <Heading level={2}>{t("title")}</Heading>
      </div>
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          onSwiper={(s) => {
            swiperRef.current = s;
          }}
        >
          {collections.map((c) => (
            <SwiperSlide key={c.slug}>
              <CollectionTile collection={c} locale={locale} />
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
          aria-label="Previous"
          className="absolute -left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border)] bg-white shadow-sm transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] md:-left-5"
        >
          <Icon name="chevron-left" size={18} />
        </button>
        <button
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
          aria-label="Next"
          className="absolute -right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[color:var(--border)] bg-white shadow-sm transition hover:border-[color:var(--brand)] hover:text-[color:var(--brand)] md:-right-5"
        >
          <Icon name="chevron-right" size={18} />
        </button>
      </div>
    </section>
  );
}
