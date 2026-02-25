"use client";

import { useEffect } from "react";
import { useTranslation } from "@/context/LanguageContext";

export function LangSync() {
  const { locale } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return null;
}
