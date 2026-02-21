"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/testimonials";
import { useTranslation } from "@/context/LanguageContext";

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { t: translate } = useTranslation();

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const prev = useCallback(() => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [testimonials.length]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isPaused, next]);

  const t = testimonials[active];

  return (
    <div
      className="max-w-4xl mx-auto"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative px-6 sm:px-14">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-all"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-11 h-11 sm:w-12 sm:h-12 bg-white rounded-full shadow-lg border border-slate-200 flex items-center justify-center text-slate-800 hover:bg-navy-deep hover:text-white hover:border-navy-deep transition-all"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div className="relative bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-sm border border-slate-200 overflow-hidden min-h-[280px] sm:min-h-[260px]">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-navy-deep via-orange-action to-navy-deep" />
          <div className="absolute top-6 left-8 sm:left-10 font-serif text-orange-action/15 text-[7rem] sm:text-[8rem] leading-none select-none pointer-events-none" aria-hidden="true">
            &ldquo;
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center p-8 sm:p-10 min-h-[280px] sm:min-h-[260px]"
            >
              <div className="text-center max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl text-slate-800 leading-relaxed italic mb-8">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-10 h-0.5 bg-orange-action rounded-full mb-3" />
                  <p className="text-slate-800 font-bold text-base">{t.author}</p>
                  <p className="text-navy-deep font-medium text-sm">{t.role}</p>
                  <p className="text-slate-400 text-xs">{t.company}</p>
                  {t.type && (
                    <span className={cn(
                      "mt-2 text-xs font-semibold px-2.5 py-0.5 rounded-full",
                      t.type === "candidate"
                        ? "bg-orange-100 text-orange-700"
                        : "bg-blue-100 text-blue-700"
                    )}>
                      {t.type === "candidate" ? translate("testimonials.jobSeeker") : translate("testimonials.employer")}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2.5 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={cn(
              "rounded-full transition-all duration-300",
              active === i
                ? "bg-navy-deep w-8 h-3 shadow-md shadow-blue-200"
                : "bg-slate-300 hover:bg-slate-400 w-3 h-3"
            )}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={active === i ? "true" : undefined}
          />
        ))}
      </div>
    </div>
  );
}
