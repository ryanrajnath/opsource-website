"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { useTranslation } from "@/context/LanguageContext";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-extrabold text-orange-action font-[family-name:var(--font-mono)] mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">
          {t("notFound.title")}
        </h1>
        <p className="text-slate-500 mb-8">
          {t("notFound.description")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/" variant="orange" size="lg">
            {t("common.goHome")}
          </Button>
          <Button href="/contact" variant="navy-outline" size="lg">
            {t("common.contactUs")}
          </Button>
        </div>
      </div>
    </section>
  );
}
