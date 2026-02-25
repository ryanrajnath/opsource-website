"use client";

import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, CheckCircle2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/context/LanguageContext";

type QuickApplyData = {
  name: string;
  email: string;
  phone: string;
  jobType: string;
  smsOptIn?: boolean;
  emailOptIn?: boolean;
};

export function QuickApplyCard() {
  const [submitted, setSubmitted] = useState(false);
  const { t, locale } = useTranslation();

  const quickApplySchema = useMemo(() => z.object({
    name: z.string().min(2, t("contact.quickApply.validation.nameRequired")),
    email: z.string().email(t("contact.quickApply.validation.emailRequired")),
    phone: z.string().min(7, t("contact.quickApply.validation.phoneRequired")),
    jobType: z.string().min(1, t("contact.quickApply.validation.jobTypeRequired")),
    smsOptIn: z.boolean().optional(),
    emailOptIn: z.boolean().optional(),
  }), [locale, t]);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuickApplyData>({
    resolver: zodResolver(quickApplySchema),
  });

  const onSubmit = async (data: QuickApplyData) => {
    console.log("Quick apply:", data);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-3" />
        <h3 className="text-lg font-bold text-slate-800 mb-1">{t("contact.quickApply.successTitle")}</h3>
        <p className="text-slate-600 text-sm">{t("contact.quickApply.successMessage")}</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-8">
      <div className="flex items-center gap-2 mb-1">
        <Zap className="w-5 h-5 text-orange-action" />
        <h3 className="text-lg font-bold text-slate-800 font-[family-name:var(--font-heading)]">{t("contact.quickApply.title")}</h3>
      </div>
      <p className="text-slate-600 text-sm mb-6">{t("contact.quickApply.subtitle")}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder={t("contact.quickApply.namePlaceholder")}
            {...register("name")}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all placeholder:text-slate-400"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name.message}</p>}
        </div>
        <div>
          <input
            type="email"
            placeholder={t("contact.quickApply.emailPlaceholder")}
            {...register("email")}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all placeholder:text-slate-400"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email.message}</p>}
        </div>
        <div>
          <input
            type="tel"
            placeholder={t("contact.quickApply.phonePlaceholder")}
            {...register("phone")}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all placeholder:text-slate-400"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone.message}</p>}
        </div>
        <div>
          <select
            {...register("jobType")}
            className="w-full px-4 py-3 rounded-lg border border-orange-200 text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-orange-action/50 focus:border-orange-action transition-all"
          >
            <option value="">{t("contact.quickApply.jobTypePlaceholder")}</option>
            <option value="warehouse">{t("contact.quickApply.jobTypeWarehouse")}</option>
            <option value="manufacturing">{t("contact.quickApply.jobTypeManufacturing")}</option>
            <option value="skilled-trades">{t("contact.quickApply.jobTypeSkilledTrades")}</option>
            <option value="maintenance">{t("contact.quickApply.jobTypeMaintenance")}</option>
            <option value="other">{t("contact.quickApply.jobTypeOther")}</option>
          </select>
          {errors.jobType && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.jobType.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              {...register("smsOptIn")}
              className="mt-0.5 w-4 h-4 rounded border-orange-300 text-orange-action focus:ring-orange-action/50 accent-orange-action"
            />
            <span className="text-xs text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">{t("contact.quickApply.smsOptIn")}</span>
          </label>
          <label className="flex items-start gap-2.5 cursor-pointer group">
            <input
              type="checkbox"
              {...register("emailOptIn")}
              className="mt-0.5 w-4 h-4 rounded border-orange-300 text-orange-action focus:ring-orange-action/50 accent-orange-action"
            />
            <span className="text-xs text-slate-600 leading-snug group-hover:text-slate-800 transition-colors">{t("contact.quickApply.emailOptIn")}</span>
          </label>
        </div>
        <Button type="submit" variant="orange" size="lg" disabled={isSubmitting} className="w-full">
          {isSubmitting ? t("common.submitting") : t("common.getCalledBack")} <Zap className="w-4 h-4" />
        </Button>
      </form>
    </div>
  );
}
