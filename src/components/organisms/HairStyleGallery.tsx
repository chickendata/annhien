"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import Icon from "@/components/atoms/Icon";
import ProductImage from "@/components/atoms/ProductImage";

const ALL_IMAGES = Array.from({ length: 16 }, (_, i) => ({
  src: `/Mautoc/mau_toc_${i + 1}.jpg`,
  alt: `Hair style ${i + 1}`,
  idx: i,
}));

/* Split into two rows */
const ROW_1 = ALL_IMAGES.filter((_, i) => i < 8);
const ROW_2 = ALL_IMAGES.filter((_, i) => i >= 8);

function FilmstripRow({
  images,
  direction,
  onClickImage,
}: {
  images: typeof ROW_1;
  direction: "left" | "right";
  onClickImage: (idx: number) => void;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  /* Pause on hover */
  const pause = () => {
    trackRef.current?.style.setProperty("animation-play-state", "paused");
  };
  const resume = () => {
    trackRef.current?.style.setProperty("animation-play-state", "running");
  };

  /* Duplicate images 3x for seamless loop */
  const tripled = [...images, ...images, ...images];

  return (
    <div className="filmstrip-row overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
      <div
        ref={trackRef}
        className={`filmstrip-track flex gap-4 ${direction === "left" ? "filmstrip-left" : "filmstrip-right"}`}
      >
        {tripled.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            type="button"
            onClick={() => onClickImage(img.idx)}
            className="filmstrip-card group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-lg"
          >
            <div className="relative h-[280px] w-[210px] overflow-hidden sm:h-[340px] sm:w-[255px] md:h-[400px] md:w-[300px]">
              <ProductImage
                src={img.src}
                alt={img.alt}
                sizes="300px"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                watermarkSize="md"
              />
              {/* Cinematic bars */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-black/30 to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-black/30 to-transparent" />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/20" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1.5 text-xs font-medium tracking-wide text-white uppercase backdrop-blur-sm">
                  <Icon name="eye" size={14} className="text-white" />
                  Xem
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default function HairStyleGallery() {
  const t = useTranslations("Home.Gallery");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  /* Fade-in section on scroll */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* Keyboard nav for lightbox */
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight")
        setLightbox((prev) =>
          prev !== null ? (prev + 1) % ALL_IMAGES.length : null
        );
      if (e.key === "ArrowLeft")
        setLightbox((prev) =>
          prev !== null
            ? (prev - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
            : null
        );
    },
    [lightbox]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  /* Lock body scroll when lightbox is open */
  useEffect(() => {
    if (lightbox !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  return (
    <>
      <section
        ref={sectionRef}
        className="overflow-hidden bg-black py-16 md:py-24"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(40px)",
          transition:
            "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        {/* Header */}
        <div className="mx-auto mb-10 max-w-7xl px-4 text-center md:mb-14">
          <Text variant="eyebrow" className="mb-3 text-white/50">
            {t("eyebrow")}
          </Text>
          <Heading level={2} className="text-white">
            {t("title")}
          </Heading>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/60">
            {t("description")}
          </p>
        </div>

        {/* Filmstrip rows */}
        <div className="flex flex-col gap-4">
          <FilmstripRow
            images={ROW_1}
            direction="left"
            onClickImage={setLightbox}
          />
          <FilmstripRow
            images={ROW_2}
            direction="right"
            onClickImage={setLightbox}
          />
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center text-white/70 transition-colors hover:text-white"
            onClick={() => setLightbox(null)}
          >
            <Icon name="close" size={28} />
          </button>

          <button
            type="button"
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition-colors hover:text-white md:left-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox(
                (lightbox - 1 + ALL_IMAGES.length) % ALL_IMAGES.length
              );
            }}
          >
            <Icon name="chevron-left" size={32} />
          </button>

          <div
            key={lightbox}
            className="lightbox-image relative h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <ProductImage
              src={ALL_IMAGES[lightbox].src}
              alt={ALL_IMAGES[lightbox].alt}
              sizes="100vw"
              className="object-contain"
              watermarkSize="lg"
            />
            <div className="absolute bottom-[3vh] left-1/2 -translate-x-1/2 text-xs tracking-widest text-white/60">
              {lightbox + 1} / {ALL_IMAGES.length}
            </div>
          </div>

          <button
            type="button"
            className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center text-white/60 transition-colors hover:text-white md:right-6"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % ALL_IMAGES.length);
            }}
          >
            <Icon name="chevron-right" size={32} />
          </button>
        </div>
      )}
    </>
  );
}
