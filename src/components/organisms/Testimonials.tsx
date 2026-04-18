"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";

const ROTATE_MS = 5200;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[color:var(--brand)]"
          aria-hidden
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const t = useTranslations("Home.Testimonials");
  const items = useMemo(
    () =>
      t.raw("items") as Array<{ name: string; role: string; body: string }>,
    [t]
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused || !visible) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % items.length);
    }, ROTATE_MS);
    return () => window.clearInterval(id);
  }, [paused, visible, items.length]);

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative overflow-hidden bg-[color:var(--surface)] py-20 md:py-28"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="mx-auto max-w-3xl px-4 text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition:
            "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <Text variant="eyebrow" className="mb-3">
          {t("eyebrow")}
        </Text>
        <Heading level={2} className="mb-12">
          {t("title")}
        </Heading>

        <div className="relative min-h-[320px] md:min-h-[260px]">
          {items.map((item, i) => {
            const active = i === index;
            return (
              <article
                key={i}
                aria-hidden={!active}
                className="absolute inset-0 flex flex-col items-center px-2"
                style={{
                  opacity: active ? 1 : 0,
                  transform: active
                    ? "translateY(0) scale(1)"
                    : "translateY(16px) scale(0.98)",
                  transition:
                    "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
                  pointerEvents: active ? "auto" : "none",
                }}
              >
                <svg
                  width="36"
                  height="28"
                  viewBox="0 0 36 28"
                  className="mb-6 text-[color:var(--brand)]/30"
                  fill="currentColor"
                  aria-hidden
                >
                  <path d="M0 28V16C0 7.163 6.268 0 14 0v6c-4.418 0-8 4.477-8 10h8v12H0zm22 0V16c0-8.837 6.268-16 14-16v6c-4.418 0-8 4.477-8 10h8v12H22z" />
                </svg>

                <p className="mb-8 max-w-2xl text-lg leading-relaxed text-[color:var(--foreground)] md:text-xl">
                  {item.body}
                </p>

                <div className="mb-4">
                  <Stars />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-sm font-medium text-[color:var(--brand)]">
                    {initials(item.name)}
                  </div>
                  <div className="text-left">
                    <div className="text-sm font-medium">{item.name}</div>
                    <div className="text-xs text-[color:var(--muted)]">
                      {item.role}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div
          className="mt-10 flex items-center justify-center gap-2"
          role="tablist"
          aria-label="Testimonials navigation"
        >
          {items.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIndex(i)}
                className="group relative h-2 overflow-hidden rounded-full bg-black/10 transition-all"
                style={{ width: active ? 32 : 8 }}
              >
                <span
                  className="absolute inset-y-0 left-0 bg-[color:var(--brand)]"
                  style={{
                    width: active ? "100%" : "0%",
                    transition: active
                      ? `width ${ROTATE_MS}ms linear`
                      : "width 0.3s ease",
                    animationPlayState: paused ? "paused" : "running",
                  }}
                  key={`${i}-${active}-${paused}`}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
