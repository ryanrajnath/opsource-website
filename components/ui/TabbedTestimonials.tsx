"use client";

import { useState } from "react";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";
import { useTranslation } from "@/context/LanguageContext";

interface TabbedTestimonialsProps {
  candidateTestimonials: Testimonial[];
  employerTestimonials: Testimonial[];
}

export function TabbedTestimonials({ candidateTestimonials, employerTestimonials }: TabbedTestimonialsProps) {
  const [activeTab, setActiveTab] = useState<"candidates" | "employers">("candidates");
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex items-center justify-center gap-2 mb-10">
        <button
          onClick={() => setActiveTab("candidates")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
            activeTab === "candidates"
              ? "bg-orange-action text-white shadow-[0_2px_10px_rgba(234,88,12,0.3)]"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          {t("testimonials.fromWorkers")}
        </button>
        <button
          onClick={() => setActiveTab("employers")}
          className={cn(
            "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200",
            activeTab === "employers"
              ? "bg-navy-deep text-white shadow-[0_2px_10px_rgba(30,58,138,0.3)]"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          )}
        >
          {t("testimonials.fromEmployers")}
        </button>
      </div>
      <div key={activeTab}>
        <TestimonialCarousel
          testimonials={activeTab === "candidates" ? candidateTestimonials : employerTestimonials}
        />
      </div>
    </div>
  );
}
