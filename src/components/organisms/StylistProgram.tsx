"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { useTranslations } from "next-intl";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import FormField from "@/components/molecules/FormField";
import { img } from "@/lib/assets";

export default function StylistProgram() {
  const t = useTranslations("Home.Stylist");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative mt-16 overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Image src={img(10021)} alt="" fill sizes="100vw" className="object-cover opacity-40" />
      </div>
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 md:grid-cols-2">
        <div className="flex flex-col justify-center">
          <Text variant="eyebrow" className="mb-3 text-white/70">{t("eyebrow")}</Text>
          <Heading level={2} className="mb-4 text-white">{t("title")}</Heading>
          <p className="max-w-md text-base text-white/80">{t("description")}</p>
        </div>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 bg-white p-6 text-foreground">
          {submitted ? (
            <p className="py-8 text-center text-sm">{t("thanks")}</p>
          ) : (
            <>
              <FormField id="name" label={t("name")}>
                <Input id="name" name="name" required />
              </FormField>
              <FormField id="whatsapp" label={t("whatsapp")}>
                <Input id="whatsapp" name="whatsapp" required />
              </FormField>
              <FormField id="message" label={t("message")}>
                <Textarea id="message" name="message" rows={4} />
              </FormField>
              <Button type="submit" size="lg">{t("send")}</Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
