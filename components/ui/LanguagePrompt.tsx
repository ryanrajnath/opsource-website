"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { useTranslation } from "@/context/LanguageContext";

export function LanguagePrompt() {
  const [show, setShow] = useState(false);
  const { locale, toggleLocale } = useTranslation();

  useEffect(() => {
    // Only show if user hasn't already chosen a language
    const hasChosen = localStorage.getItem("locale");
    const dismissed = localStorage.getItem("lang-prompt-dismissed");
    if (!hasChosen && !dismissed) {
      // Small delay so the page loads first
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const dismiss = () => {
    setShow(false);
    localStorage.setItem("lang-prompt-dismissed", "1");
  };

  const switchToSpanish = () => {
    if (locale === "en") toggleLocale();
    dismiss();
  };

  const keepEnglish = () => {
    localStorage.setItem("locale", "en");
    dismiss();
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-navy-deep to-slate-surface px-6 py-5 text-center relative">
          <button
            onClick={keepEnglish}
            className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <p className="text-3xl mb-1">🇺🇸 🇲🇽</p>
          <h3 className="text-white font-bold text-lg">Choose Your Language</h3>
          <p className="text-slate-300 text-sm">Elija su idioma</p>
        </div>

        {/* Buttons */}
        <div className="p-5 space-y-3">
          <button
            onClick={switchToSpanish}
            className="w-full flex items-center justify-center gap-3 bg-orange-action text-white font-bold py-3.5 rounded-xl text-base hover:bg-orange-action-dark transition-colors shadow-[0_2px_10px_rgba(234,88,12,0.25)]"
          >
            Español
          </button>
          <button
            onClick={keepEnglish}
            className="w-full flex items-center justify-center gap-3 border-2 border-navy-deep text-navy-deep font-bold py-3.5 rounded-xl text-base hover:bg-navy-deep hover:text-white transition-colors"
          >
            English
          </button>
        </div>
      </div>
    </div>
  );
}
