"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Icon from "@/components/atoms/Icon";
import FormField from "@/components/molecules/FormField";

type Status = "idle" | "sending" | "success" | "error";

export default function AskQuestionModal({
  open,
  onClose,
  productName,
}: {
  open: boolean;
  onClose: () => void;
  productName: string;
}) {
  const t = useTranslations("Product");
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  useEffect(() => {
    if (!open) setStatus("idle");
  }, [open]);

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
      console.error("EmailJS send failed", err);
      setStatus("error");
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative z-10 w-full max-w-md bg-white p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full hover:bg-[color:var(--surface)]"
        >
          <Icon name="close" size={18} />
        </button>
        <h2 className="mb-4 pr-10 text-xl font-semibold">{t("askTitle")}</h2>
        {status === "success" ? (
          <p className="py-8 text-center text-sm">{t("askThanks")}</p>
        ) : (
          <form ref={formRef} onSubmit={onSubmit} className="flex flex-col gap-4">
            <input type="hidden" name="product" value={productName} />
            <FormField id="ask-name" label={t("askName")}>
              <Input id="ask-name" name="name" required />
            </FormField>
            <FormField id="ask-email" label={t("askEmail")}>
              <Input id="ask-email" name="email" type="email" required />
            </FormField>
            <FormField id="ask-message" label={t("askMessage")}>
              <Textarea id="ask-message" name="message" rows={4} required />
            </FormField>
            {status === "error" && (
              <p className="text-sm text-[color:var(--brand)]">{t("askError")}</p>
            )}
            <Button type="submit" size="lg" disabled={status === "sending"}>
              {status === "sending" ? t("askSending") : t("askSubmit")}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
