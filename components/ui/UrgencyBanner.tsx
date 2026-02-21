"use client";

import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTranslation } from "@/context/LanguageContext";

interface UrgencyBannerProps {
  className?: string;
}

export function UrgencyBanner({ className }: UrgencyBannerProps) {
  const { t } = useTranslation();

  return (
    <div className={cn(
      "bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white py-3 px-4",
      className
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-sm sm:text-base font-semibold">
        <Flame className="w-5 h-5 animate-pulse" />
        <span>{t("urgencyBanner.headline")}</span>
        <span className="hidden sm:inline text-orange-200">|</span>
        <span className="hidden sm:inline text-orange-100 font-normal">{t("urgencyBanner.subtext")}</span>
        <Flame className="w-5 h-5 animate-pulse" />
      </div>
    </div>
  );
}
