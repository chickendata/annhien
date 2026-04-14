import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Logo from "@/components/atoms/Logo";
import Input from "@/components/atoms/Input";
import Button from "@/components/atoms/Button";
import SocialIcons from "@/components/molecules/SocialIcons";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="mt-16 border-t border-[color:var(--border)] bg-[color:var(--surface)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="[&_img]:h-20" />
          <p className="mt-4 text-sm leading-relaxed text-[color:var(--muted)]">
            {t("tagline")}
          </p>
          <SocialIcons className="mt-4" />
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">{t("shop")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/collections/bulk-hair" className="hover:text-[color:var(--brand)]">{t("links.bulk")}</Link></li>
            <li><Link href="/collections/tape-hair" className="hover:text-[color:var(--brand)]">{t("links.tape")}</Link></li>
            <li><Link href="/collections/wigs-hair" className="hover:text-[color:var(--brand)]">{t("links.wigs")}</Link></li>
            <li><Link href="/collections/weft-hair" className="hover:text-[color:var(--brand)]">{t("links.weft")}</Link></li>
            <li><Link href="/collections" className="hover:text-[color:var(--brand)]">{t("links.all")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">{t("help")}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-[color:var(--brand)]">{t("links.about")}</Link></li>
            <li><Link href="/contact" className="hover:text-[color:var(--brand)]">{t("links.contact")}</Link></li>
            <li><Link href="/faqs" className="hover:text-[color:var(--brand)]">{t("links.faqs")}</Link></li>
            <li><Link href="/blog" className="hover:text-[color:var(--brand)]">{t("links.blog")}</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">{t("newsletter")}</h4>
          <p className="mb-3 text-sm text-[color:var(--muted)]">{t("newsletterDesc")}</p>
          <form className="flex gap-2">
            <Input type="email" placeholder={t("emailPlaceholder")} required />
            <Button type="submit" size="md">{t("subscribe")}</Button>
          </form>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)]">
        <div className="mx-auto max-w-7xl px-4 py-8">
          <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest">{t("contact")}</h4>
          <div className="grid gap-6 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-1 font-medium">{t("factory")}</p>
              <p className="text-[color:var(--muted)]">Bình An, Đông Thọ, Yên Phong, Bắc Ninh</p>
            </div>
            <div>
              <p className="mb-1 font-medium">{t("officeHN")}</p>
              <p className="text-[color:var(--muted)]">P3110, Tầng 31, Toà B, Chung cư Samsora, Vạn Phúc, Hà Đông, Hà Nội</p>
            </div>
            <div>
              <p className="mb-1 font-medium">{t("officeHCM")}</p>
              <p className="text-[color:var(--muted)]">55 Đình Tân Khai, P. Bình Tân, TP. HCM</p>
            </div>
          </div>
          <div className="mt-6 flex flex-col gap-2 text-sm sm:flex-row sm:gap-8">
            <p>
              <span className="font-medium">{t("phone")}: </span>
              <a href="tel:0855276131" className="hover:text-[color:var(--brand)]">0855.276.131</a>
            </p>
            <p>
              <span className="font-medium">{t("email")}: </span>
              <a href="mailto:wigsbyannhien26@gmail.com" className="hover:text-[color:var(--brand)]">wigsbyannhien26@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-[color:var(--border)] py-4 text-center text-xs text-[color:var(--muted)]">
        © {new Date().getFullYear()} An Nhiên. {t("rights")}
      </div>
    </footer>
  );
}
