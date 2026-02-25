"use client";

import { useState } from "react";
import { Flame, Zap, X, Send, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

interface UrgencyBannerProps {
  className?: string;
  isOpen?: boolean;
  onToggle?: (open: boolean) => void;
}

export function UrgencyBanner({ className, isOpen: externalIsOpen, onToggle }: UrgencyBannerProps) {
  const { t } = useTranslation();

  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const isOpen = externalIsOpen ?? internalIsOpen;
  const setIsOpen = (val: boolean) => {
    setInternalIsOpen(val);
    onToggle?.(val);
  };
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [jobType, setJobType] = useState("");
  const [smsOptIn, setSmsOptIn] = useState(false);
  const [emailOptIn, setEmailOptIn] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!name.trim()) {
      newErrors.name = t("contact.quickApply.validation.nameRequired");
    }
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = t("contact.quickApply.validation.emailRequired");
    }
    if (!phone.trim()) {
      newErrors.phone = t("contact.quickApply.validation.phoneRequired");
    }
    if (!jobType) {
      newErrors.jobType = t("contact.quickApply.validation.jobTypeRequired");
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    // Reset form after closing
    setTimeout(() => {
      setIsSubmitted(false);
      setName("");
      setEmail("");
      setPhone("");
      setJobType("");
      setSmsOptIn(false);
      setEmailOptIn(false);
      setErrors({});
    }, 300);
  };

  return (
    <div className="relative">
      {/* Orange Urgency Banner */}
      <div
        className={cn(
          "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-3 px-4",
          className
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm sm:text-base font-semibold flex-wrap">
          <Flame className="w-5 h-5 animate-pulse shrink-0" />
          <span>{t("urgencyBanner.headline")}</span>
          <span className="hidden sm:inline text-orange-200">|</span>
          <span className="hidden sm:inline text-orange-100 font-normal">
            {t("urgencyBanner.subtext")}
          </span>
          <span className="hidden sm:inline text-orange-200">|</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 transition-colors rounded-full px-4 py-1 text-sm font-bold tracking-wide"
          >
            <Zap className="w-4 h-4" />
            {t("urgencyBanner.quickApply")}
          </button>
          <Flame className="w-5 h-5 animate-pulse shrink-0" />
        </div>
      </div>

      {/* Quick Apply Slide-Down Panel */}
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-navy-deep text-white py-5 px-4">
          <div className="max-w-5xl mx-auto">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-auto text-white/60 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              /* Success State */
              <div className="flex flex-col items-center justify-center gap-2 py-4 text-center">
                <CheckCircle className="w-10 h-10 text-green-400" />
                <h3 className="text-xl font-bold">
                  {t("contact.quickApply.successTitle")}
                </h3>
                <p className="text-white/80 text-sm max-w-md">
                  {t("contact.quickApply.successMessage")}
                </p>
                <button
                  onClick={handleClose}
                  className="mt-2 text-sm text-orange-300 hover:text-orange-200 underline underline-offset-2"
                >
                  Close
                </button>
              </div>
            ) : (
              /* Form State */
              <div>
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold">
                    {t("contact.quickApply.title")}
                  </h3>
                  <p className="text-white/70 text-sm">
                    {t("contact.quickApply.subtitle")}
                  </p>
                </div>

                <form onSubmit={handleSubmit}>
                  {/* Desktop: single row | Mobile: stacked */}
                  <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-end">
                    {/* Name */}
                    <div className="flex-1 w-full sm:w-auto">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => {
                          setName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        placeholder={t("contact.quickApply.namePlaceholder")}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg bg-white/10 border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors",
                          errors.name ? "border-red-400" : "border-white/20"
                        )}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex-1 w-full sm:w-auto">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                          if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                        }}
                        placeholder={t("contact.quickApply.emailPlaceholder")}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg bg-white/10 border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors",
                          errors.email ? "border-red-400" : "border-white/20"
                        )}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex-1 w-full sm:w-auto">
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => {
                          setPhone(e.target.value);
                          if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                        }}
                        placeholder={t("contact.quickApply.phonePlaceholder")}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg bg-white/10 border text-white placeholder-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors",
                          errors.phone ? "border-red-400" : "border-white/20"
                        )}
                      />
                      {errors.phone && (
                        <p className="text-red-400 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>

                    {/* Job Type */}
                    <div className="flex-1 w-full sm:w-auto">
                      <select
                        value={jobType}
                        onChange={(e) => {
                          setJobType(e.target.value);
                          if (errors.jobType) setErrors((prev) => ({ ...prev, jobType: "" }));
                        }}
                        className={cn(
                          "w-full px-3 py-2 rounded-lg bg-white/10 border text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors appearance-none",
                          errors.jobType ? "border-red-400" : "border-white/20",
                          jobType ? "text-white" : "text-white/50"
                        )}
                      >
                        <option value="" disabled className="bg-gray-900 text-white/50">
                          {t("contact.quickApply.jobTypePlaceholder")}
                        </option>
                        <option value="warehouse" className="bg-gray-900 text-white">
                          {t("contact.quickApply.jobTypeWarehouse")}
                        </option>
                        <option value="manufacturing" className="bg-gray-900 text-white">
                          {t("contact.quickApply.jobTypeManufacturing")}
                        </option>
                        <option value="skilled-trades" className="bg-gray-900 text-white">
                          {t("contact.quickApply.jobTypeSkilledTrades")}
                        </option>
                        <option value="maintenance" className="bg-gray-900 text-white">
                          {t("contact.quickApply.jobTypeMaintenance")}
                        </option>
                        <option value="other" className="bg-gray-900 text-white">
                          {t("contact.quickApply.jobTypeOther")}
                        </option>
                      </select>
                      {errors.jobType && (
                        <p className="text-red-400 text-xs mt-1">{errors.jobType}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2.5 rounded-lg text-sm transition-colors whitespace-nowrap shrink-0 self-end"
                    >
                      <Send className="w-4 h-4" />
                      {t("contact.quickApply.title")}
                    </button>
                  </div>

                  {/* Opt-in checkboxes */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 mt-3">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={smsOptIn}
                        onChange={(e) => setSmsOptIn(e.target.checked)}
                        className="w-3.5 h-3.5 rounded border-white/30 bg-white/10 text-orange-action focus:ring-orange-400/50 accent-orange-action"
                      />
                      <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{t("contact.quickApply.smsOptIn")}</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={emailOptIn}
                        onChange={(e) => setEmailOptIn(e.target.checked)}
                        className="w-3.5 h-3.5 rounded border-white/30 bg-white/10 text-orange-action focus:ring-orange-400/50 accent-orange-action"
                      />
                      <span className="text-xs text-white/60 group-hover:text-white/80 transition-colors">{t("contact.quickApply.emailOptIn")}</span>
                    </label>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
