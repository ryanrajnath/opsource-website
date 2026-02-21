"use client";

import { useTranslation } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  variant?: "light" | "dark";
  className?: string;
}

export function LanguageToggle({ variant = "light", className }: LanguageToggleProps) {
  const { locale, toggleLocale } = useTranslation();

  return (
    <button
      onClick={toggleLocale}
      className={cn(
        "inline-flex items-center text-xs font-semibold px-2.5 py-1 rounded-full transition-colors cursor-pointer",
        variant === "light"
          ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
          : "bg-emerald-900/30 text-emerald-400 hover:bg-emerald-900/50",
        className
      )}
    >
      {locale === "en" ? "Español" : "English"}
    </button>
  );
}
