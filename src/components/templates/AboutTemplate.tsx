import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import Button from "@/components/atoms/Button";
import Heading from "@/components/atoms/Heading";
import { img } from "@/lib/assets";

export default async function AboutTemplate() {
  const t = await getTranslations("About");

  return (
    <div className="flex flex-col">
      <section className="mx-auto max-w-4xl px-4 py-20 text-center">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
          {t("hero.eyebrow")}
        </p>
        <Heading level={1} className="mb-6 text-3xl leading-tight md:text-5xl">
          {t("hero.tagline")}
        </Heading>
        <p className="mx-auto max-w-2xl text-[color:var(--muted)]">{t("hero.description")}</p>
      </section>

      <section>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src="/About/10001.webp"
              alt={t("philosophy.title")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
              {t("philosophy.eyebrow")}
            </p>
            <Heading level={2} className="mb-5 text-3xl md:text-4xl">
              {t("philosophy.title")}
            </Heading>
            <p className="leading-relaxed text-[color:var(--muted)]">{t("philosophy.body")}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div className="md:order-2">
            <div className="relative aspect-[4/5] overflow-hidden bg-[color:var(--surface)]">
              <Image
                src="/About/10002.webp"
                alt={t("approach.title")}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:order-1">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
              {t("approach.eyebrow")}
            </p>
            <Heading level={2} className="mb-5 text-3xl md:text-4xl">
              {t("approach.title")}
            </Heading>
            <p className="leading-relaxed text-[color:var(--muted)]">{t("approach.body")}</p>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black">
        <Image
          src="/About/10004.webp"
          alt={t("statement.title")}
          fill
          sizes="100vw"
          className="object-cover opacity-50"
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 py-24 text-center text-white">
          <Heading level={2} className="mb-5 text-3xl md:text-5xl">
            {t("statement.title")}
          </Heading>
          <p className="leading-relaxed text-white/80">{t("statement.body")}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--brand)]">
            {t("values.eyebrow")}
          </p>
          <Heading level={2} className="text-3xl md:text-4xl">
            {t("values.title")}
          </Heading>
        </div>
        <div className="grid gap-10 sm:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-[color:var(--border)]">
                <ValueIcon index={i} />
              </div>
              <h3 className="mb-2 text-lg font-medium">{t(`values.items.${i}.title`)}</h3>
              <p className="text-sm text-[color:var(--muted)]">{t(`values.items.${i}.body`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center">
          <div>
            <Heading level={2} className="mb-5 text-3xl md:text-4xl">
              {t("cta.title")}
            </Heading>
            <p className="mb-6 leading-relaxed text-[color:var(--muted)]">{t("cta.body")}</p>
            <Link href="/collections">
              <Button size="lg">{t("cta.button")}</Button>
            </Link>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden">
            <Image
              src={img(10019)}
              alt={t("cta.title")}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:grid-cols-2 lg:grid-cols-4">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="mb-4 text-[color:var(--brand)]">
                <TrustIcon index={i} />
              </div>
              <h4 className="mb-1 text-sm font-semibold uppercase tracking-wide">
                {t(`trust.items.${i}.title`)}
              </h4>
              <p className="text-xs text-[color:var(--muted)]">{t(`trust.items.${i}.body`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <Heading level={2} className="mb-4 text-3xl md:text-4xl">
            {t("contact.title")}
          </Heading>
          <p className="mx-auto mb-8 max-w-xl text-[color:var(--muted)]">{t("contact.body")}</p>
          <div className="flex flex-col items-center justify-center gap-2 text-base sm:flex-row sm:gap-8">
            <a href="tel:0855276131" className="hover:text-[color:var(--brand)]">
              <span className="font-medium">{t("contact.phoneLabel")}: </span>0855.276.131
            </a>
            <a
              href="mailto:wigsbyannhien26@gmail.com"
              className="hover:text-[color:var(--brand)]"
            >
              <span className="font-medium">{t("contact.emailLabel")}: </span>
              wigsbyannhien26@gmail.com
            </a>
          </div>
          <div className="mt-8">
            <Link href="/contact">
              <Button size="lg" variant="outline">
                {t("contact.button")}
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function ValueIcon({ index }: { index: number }) {
  const common = {
    width: 28,
    height: 28,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M4 12c3-4 5-6 8-6s5 2 8 6c-3 4-5 6-8 6s-5-2-8-6z" />
        <path d="M9 12c1-1 2-2 3-2s2 1 3 2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M12 3v18" />
        <path d="M7 8c2 2 2 6 0 8" />
        <path d="M17 8c-2 2-2 6 0 8" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M4 8c4-3 12-3 16 0" />
      <path d="M4 14c4-3 12-3 16 0" />
      <path d="M4 20c4-3 12-3 16 0" />
    </svg>
  );
}

function TrustIcon({ index }: { index: number }) {
  const common = {
    width: 36,
    height: 36,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.4,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (index === 0) {
    return (
      <svg {...common}>
        <path d="M3 7h11v9H3z" />
        <path d="M14 10h4l3 3v3h-7" />
        <circle cx="7" cy="18" r="2" />
        <circle cx="17" cy="18" r="2" />
      </svg>
    );
  }
  if (index === 1) {
    return (
      <svg {...common}>
        <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  }
  if (index === 2) {
    return (
      <svg {...common}>
        <path d="M4 6h16v10a2 2 0 0 1-2 2h-5l-4 3v-3H6a2 2 0 0 1-2-2z" />
        <path d="M8 11h8M8 14h5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
      <path d="M7 15h3" />
    </svg>
  );
}
