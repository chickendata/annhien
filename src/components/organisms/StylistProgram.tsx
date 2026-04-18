"use client";

import Image from "next/image";
import { FormEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Heading from "@/components/atoms/Heading";
import Text from "@/components/atoms/Text";
import FormField from "@/components/molecules/FormField";
import { img } from "@/lib/assets";

type Status = "idle" | "sending" | "success" | "error";

export default function StylistProgram() {
  const t = useTranslations("Home.Stylist");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error("EmailJS env vars are missing");
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      formRef.current.reset();
      setStatus("success");
    } catch (err) {
      const e = err as { status?: number; text?: string; message?: string };
      console.error("EmailJS send failed", {
        status: e?.status,
        text: e?.text,
        message: e?.message,
        raw: err,
      });
      setStatus("error");
    }
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
        <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4 bg-white p-6 text-foreground">
          {status === "success" ? (
            <p className="py-8 text-center text-sm">{t("thanks")}</p>
          ) : (
            <>
              <FormField id="name" label={t("name")}>
                <Input id="name" name="name" required />
              </FormField>
              <FormField id="email" label={t("email")}>
                <Input id="email" name="email" type="email" required />
              </FormField>
              <FormField id="message" label={t("message")}>
                <Textarea id="message" name="message" rows={4} />
              </FormField>
              {status === "error" && (
                <p className="text-sm text-[color:var(--brand)]">{t("error")}</p>
              )}
              <Button type="submit" size="lg" disabled={status === "sending"}>
                {status === "sending" ? t("sending") : t("send")}
              </Button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}
