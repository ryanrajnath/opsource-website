"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/context/LanguageContext";

type ContactFormData = {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { t, locale } = useTranslation();

  const contactSchema = useMemo(() => z.object({
    name: z.string().min(2, t("contact.form.validation.nameRequired")),
    email: z.string().email(t("contact.form.validation.emailRequired")),
    phone: z.string().optional(),
    subject: z.string().min(1, t("contact.form.validation.subjectRequired")),
    message: z.string().min(10, t("contact.form.validation.messageRequired")),
  }), [locale, t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Submission failed");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-12">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-slate-800 mb-2">{t("contact.form.successTitle")}</h3>
        <p className="text-slate-500">{t("contact.form.successMessage")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">{t("contact.form.fullName")}</label>
          <input
            id="name"
            type="text"
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all"
            placeholder={t("contact.form.namePlaceholder")}
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.name.message}</p>
          )}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">{t("contact.form.email")}</label>
          <input
            id="email"
            type="email"
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all"
            placeholder={t("contact.form.emailPlaceholder")}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">{t("contact.form.phone")}</label>
          <input
            id="phone"
            type="tel"
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all"
            placeholder={t("contact.form.phonePlaceholder")}
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">{t("contact.form.subject")}</label>
          <select
            id="subject"
            {...register("subject")}
            className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all bg-white"
          >
            <option value="">{t("contact.form.selectSubject")}</option>
            <option value="job">{t("contact.form.subjectJob")}</option>
            <option value="hiring">{t("contact.form.subjectHiring")}</option>
            <option value="payroll">{t("contact.form.subjectPayroll")}</option>
            <option value="general">{t("contact.form.subjectGeneral")}</option>
          </select>
          {errors.subject && (
            <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.subject.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">{t("contact.form.message")}</label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full px-4 py-3 rounded-lg border border-slate-300 text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all resize-none"
          placeholder={t("contact.form.messagePlaceholder")}
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" />{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" variant="orange" size="lg" disabled={isSubmitting}>
        {isSubmitting ? t("common.sending") : t("common.sendMessage")} <ArrowRight className="w-5 h-5" />
      </Button>
    </form>
  );
}
