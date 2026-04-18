"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

const ROTATE_MS = 3200;
const EXIT_MS = 480;
const ENTER_MS = 560;
const HOLD_MS = ROTATE_MS - EXIT_MS;
const INITIAL_DELAY_MS = 1500;

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(-2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export default function FloatingTestimonials() {
  const t = useTranslations("Home.Testimonials");
  const items = useMemo(
    () =>
      t.raw("items") as Array<{ name: string; role: string; body: string }>,
    [t]
  );

  const [mounted, setMounted] = useState(false);
  const [sectionInView, setSectionInView] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [paused, setPaused] = useState(false);

  const [displayIndex, setDisplayIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");

  useEffect(() => {
    const id = window.setTimeout(() => setMounted(true), INITIAL_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  useEffect(() => {
    const section = document.getElementById("testimonials");
    if (!section) return;
    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  /* After HOLD_MS in "in" phase, trigger exit */
  useEffect(() => {
    if (paused || phase !== "in") return;
    const id = window.setTimeout(() => setPhase("out"), HOLD_MS);
    return () => window.clearTimeout(id);
  }, [paused, phase, displayIndex]);

  /* After exit animation, swap content and re-enter */
  useEffect(() => {
    if (phase !== "out") return;
    const id = window.setTimeout(() => {
      setDisplayIndex((i) => (i + 1) % items.length);
      setPhase("in");
    }, EXIT_MS);
    return () => window.clearTimeout(id);
  }, [phase, items.length]);

  const visible = mounted && !sectionInView && !dismissed;
  const item = items[displayIndex];

  return (
    <div
      aria-hidden={!visible}
      aria-live="polite"
      className="pointer-events-none fixed bottom-4 left-4 z-40 w-[calc(100vw-2rem)] max-w-sm sm:bottom-6 sm:left-6"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition:
          "opacity 0.5s cubic-bezier(0.22,1,0.36,1), transform 0.5s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="pointer-events-auto relative overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.12)] ring-1 ring-black/5"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          aria-label="Dismiss"
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-2 z-10 flex h-6 w-6 items-center justify-center rounded-full text-[color:var(--muted)] transition-colors hover:bg-black/5 hover:text-[color:var(--foreground)]"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div
          className="flex gap-3 p-4 pr-8"
          style={{
            animationName: phase === "in" ? "ft-enter" : "ft-exit",
            animationDuration:
              phase === "in" ? `${ENTER_MS}ms` : `${EXIT_MS}ms`,
            animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            animationFillMode: "forwards",
            willChange: "opacity, transform, filter",
          }}
        >
          <div
            className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--brand)]/10 text-xs font-medium text-[color:var(--brand)]"
            style={{
              animationName: phase === "in" ? "ft-avatar-in" : "none",
              animationDuration: `${ENTER_MS}ms`,
              animationDelay: "80ms",
              animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              animationFillMode: "both",
            }}
          >
            {initials(item.name)}
          </div>
          <div className="min-w-0 flex-1">
            <div className="mb-0.5 flex items-center gap-1.5">
              <span className="truncate text-xs font-medium">{item.name}</span>
              <span className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-[color:var(--brand)]"
                    style={{
                      animationName: phase === "in" ? "ft-star-in" : "none",
                      animationDuration: "400ms",
                      animationDelay: `${160 + s * 50}ms`,
                      animationTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                      animationFillMode: "both",
                    }}
                    aria-hidden
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                  </svg>
                ))}
              </span>
            </div>
            <p className="line-clamp-3 text-xs leading-relaxed text-[color:var(--muted)]">
              &ldquo;{item.body}&rdquo;
            </p>
            <div className="mt-1 truncate text-[10px] uppercase tracking-wider text-[color:var(--muted)]/70">
              {item.role}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes ft-enter {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
            filter: blur(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }
        @keyframes ft-exit {
          from {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
          to {
            opacity: 0;
            transform: translateY(-14px) scale(0.97);
            filter: blur(5px);
          }
        }
        @keyframes ft-avatar-in {
          from {
            opacity: 0;
            transform: scale(0.6);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes ft-star-in {
          from {
            opacity: 0;
            transform: translateY(4px) scale(0.5);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
