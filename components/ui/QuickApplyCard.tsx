"use client";

import { useState, useMemo, useRef, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Zap, CheckCircle2, AlertCircle, Paperclip, X } from "lucide-react";
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

const ACCEPTED_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

export function QuickApplyCard() {
  const [submitted, setSubmitted] = useState(false);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeError, setResumeError] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t, locale } = useTranslation();

  const quickApplySchema = useMemo(() => z.object({
    name: z.string().min(2, t("contact.quickApply.validation.nameRequired")),
    email: z.string().email(t("contact.quickApply.validation.emailRequired")),
    phone: z.string().min(7, t("contact.quickApply.validation.phoneRequired")),
    jobType: z.string().min(1, t("contact.quickApply.validation.jobTypeRequired")),
    smsOptIn: z.boolean().optional(),
    emailOptIn: z.boolean().optional(),
  }), [locale, t]);

  const validateFile = useCallback((file: File): string | null => {
    if (!ACCEPTED_TYPES.includes(file.type)) {
      return t("contact.quickApply.resumeInvalidType");
    }
    if (file.size > MAX_FILE_SIZE) {
      return t("contact.quickApply.resumeTooLarge");
    }
    return null;
  }, [t]);

  const handleFileSelect = useCallback((file: File) => {
    const error = validateFile(file);
    if (error) {
      setResumeError(error);
      setResumeFile(null);
    } else {
      setResumeError(null);
      setResumeFile(file);
    }
  }, [validateFile]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFileSelect(file);
  }, [handleFileSelect]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuickApplyData>({
    resolver: zodResolver(quickApplySchema),
  });

  const onSubmit = async (data: QuickApplyData) => {
    const res = await fetch("/api/quick-apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...data,
        resumeFileName: resumeFile?.name || null,
      }),
    });
    if (!res.ok) throw new Error("Submission failed");
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
        <div>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => fileInputRef.current?.click()}
            className={`relative w-full rounded-lg border-2 border-dashed cursor-pointer transition-all ${
              isDragging
                ? "border-orange-action bg-orange-100/60"
                : resumeFile
                ? "border-green-400 bg-green-50/50"
                : "border-orange-200 bg-white hover:border-orange-300 hover:bg-orange-50/30"
            } px-4 py-4 text-center`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) handleFileSelect(file);
              }}
            />
            {resumeFile ? (
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 min-w-0">
                  <Paperclip className="w-4 h-4 text-green-600 shrink-0" />
                  <span className="text-sm text-slate-700 truncate">{resumeFile.name}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setResumeFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  className="p-1 rounded-full hover:bg-red-100 text-slate-400 hover:text-red-500 transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-1">
                <Paperclip className="w-5 h-5 text-orange-300" />
                <p className="text-sm text-slate-500">{t("contact.quickApply.resumeDropzone")}</p>
                <p className="text-xs text-slate-400">{t("contact.quickApply.resumeFormats")}</p>
              </div>
            )}
          </div>
          {resumeError && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{resumeError}</p>}
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
