"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTranslations } from "next-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperClass } from "swiper/types";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { heroSlides } from "@/data/hero";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

export default function HeroCarousel() {
  const t = useTranslations("Home.Hero");
  const swiperRef = useRef<SwiperClass | null>(null);

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-black">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        pagination={{
          clickable: true,
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        onSwiper={(s) => {
          swiperRef.current = s;
        }}
        className="hero-swiper h-full w-full"
      >
        {heroSlides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative h-full w-full">
              <Image
                src={slide.image}
                alt={t(slide.titleKey)}
                fill
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "auto"}
                sizes="100vw"
                className="object-cover opacity-70"
              />
              <div className="relative z-10 flex h-full items-center px-6 md:px-16">
                <div className="max-w-xl text-white">
                  <p className="mb-3 text-xs uppercase tracking-widest">{t(slide.subtitleKey)}</p>
                  <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">
                    {t(slide.titleKey)}
                  </h1>
                  <Link href={slide.href}>
                    <Button size="lg" variant="primary">
                      {t(slide.ctaKey)}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        type="button"
        onClick={() => swiperRef.current?.slidePrev()}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[color:var(--foreground)] md:left-6 md:h-12 md:w-12"
      >
        <Icon name="chevron-left" size={18} />
      </button>
      <button
        type="button"
        onClick={() => swiperRef.current?.slideNext()}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-[color:var(--foreground)] md:right-6 md:h-12 md:w-12"
      >
        <Icon name="chevron-right" size={18} />
      </button>
    </section>
  );
}
