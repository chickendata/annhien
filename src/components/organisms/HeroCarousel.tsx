"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Icon from "@/components/atoms/Icon";
import { heroSlides } from "@/data/hero";

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const t = useTranslations("Home.Hero");

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (next: number) => setIndex((next + heroSlides.length) % heroSlides.length);

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-black">
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            src={slide.image}
            alt={t(slide.titleKey)}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover opacity-70"
          />
          <div className="relative z-10 flex h-full items-center px-6 md:px-16">
            <div className="max-w-xl text-white">
              <p className="mb-3 text-xs uppercase tracking-widest">{t(slide.subtitleKey)}</p>
              <h1 className="mb-6 text-4xl font-semibold leading-tight md:text-6xl">{t(slide.titleKey)}</h1>
              <Link href={slide.href}>
                <Button size="lg" variant="primary">{t(slide.ctaKey)}</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        type="button"
        onClick={() => go(index - 1)}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 hover:bg-white"
      >
        <Icon name="chevron-left" size={18} />
      </button>
      <button
        type="button"
        onClick={() => go(index + 1)}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center bg-white/80 hover:bg-white"
      >
        <Icon name="chevron-right" size={18} />
      </button>
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-1.5 w-8 transition ${i === index ? "bg-white" : "bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}
