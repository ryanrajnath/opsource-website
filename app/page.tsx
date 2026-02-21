"use client";

import Link from "next/link";
import { Search, Users, MapPin, ArrowRight, Flame, Clock, BadgeDollarSign, Gift } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TestimonialCarousel } from "@/components/ui/TestimonialCarousel";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { Button } from "@/components/ui/Button";
import { TabbedTestimonials } from "@/components/ui/TabbedTestimonials";
import { JobTypeFilter } from "@/components/ui/JobTypeFilter";
import { stats } from "@/data/stats";
import { testimonials } from "@/data/testimonials";
import { locations } from "@/data/locations";
import { payRanges } from "@/data/payRanges";
import { featuredJobs } from "@/data/featuredJobs";
import { EXTERNAL_URLS } from "@/lib/constants";
import { useTranslation } from "@/context/LanguageContext";

const candidateTestimonials = testimonials.filter((t) => t.type === "candidate");
const employerTestimonials = testimonials.filter((t) => t.type === "employer");

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      {/* === 1. URGENCY BANNER === */}
      <UrgencyBanner />

      {/* === 2. SPLIT-AUDIENCE HERO === */}
      <section className="relative bg-slate-surface overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-action/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-navy-deep/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
          <div className="text-center mb-12">
            <SectionLabel className="mb-4">{t("home.hero.sectionLabel")}</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 font-[family-name:var(--font-heading)]">
              {t("home.hero.title")}{" "}
              <span className="text-orange-action">{t("home.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* Split Panels */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]">
              <div className="w-16 h-16 bg-orange-action/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-orange-action" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">{t("home.splitPanels.findJob.title")}</h2>
              <p className="text-slate-400 text-sm mb-6">{t("home.splitPanels.findJob.description")}</p>
              <Button href={EXTERNAL_URLS.jobPortal} variant="orange" size="lg" external className="w-full">
                {t("common.searchJobs")} <ArrowRight className="w-5 h-5" />
              </Button>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 group hover:scale-[1.02]">
              <div className="w-16 h-16 bg-navy-deep/30 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">{t("home.splitPanels.buildTeam.title")}</h2>
              <p className="text-slate-400 text-sm mb-6">{t("home.splitPanels.buildTeam.description")}</p>
              <Button href="/services" variant="navy" size="lg" className="w-full">
                {t("common.ourServices")} <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* === 3. PAY RANGES === */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel className="mb-3">{t("home.payRanges.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.payRanges.title")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("home.payRanges.subtitle")}</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {payRanges.map((range, i) => (
              <ScrollReveal key={range.role} delay={i * 0.05}>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-b hover:from-orange-50/60 hover:to-white group">
                  <p className="text-2xl sm:text-3xl font-extrabold text-orange-action font-[family-name:var(--font-mono)]">
                    ${range.min}-{range.max}
                  </p>
                  <p className="text-xs text-slate-400 font-semibold mb-2">{range.suffix}</p>
                  <p className="text-slate-700 text-xs sm:text-sm font-medium leading-tight">{range.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-8">
            <Button href={EXTERNAL_URLS.jobPortal} variant="orange" size="md" external>
              {t("common.seeAllOpenPositions")} <ArrowRight className="w-4 h-4" />
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* === 4. JOB TYPE FILTER + FEATURED JOBS === */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <SectionLabel className="mb-3">{t("home.featuredJobs.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.featuredJobs.title")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("home.featuredJobs.subtitle")}</p>
          </ScrollReveal>

          <ScrollReveal className="mb-10">
            <JobTypeFilter />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {featuredJobs.map((job, i) => (
              <ScrollReveal key={job.id} delay={i * 0.05}>
                <a
                  href={EXTERNAL_URLS.jobPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
                >
                  {/* Left colored bar */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-navy-deep/30 group-hover:bg-orange-action transition-colors duration-300" />

                  <div className="p-6 pl-5">
                    {job.urgent && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-red-50 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">
                        <Flame className="w-3 h-3" /> {t("common.urgent")}
                      </span>
                    )}
                    <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-orange-action transition-colors font-[family-name:var(--font-heading)]">{job.title}</h3>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-1">
                      <MapPin className="w-3.5 h-3.5" /> {job.location}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-1">
                      <BadgeDollarSign className="w-3.5 h-3.5" /> {job.payRange}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm mb-4">
                      <Clock className="w-3.5 h-3.5" /> {job.shift}
                    </div>
                    <span className="text-orange-action font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      {t("common.applyNow")} <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <Button href={EXTERNAL_URLS.jobPortal} variant="orange" size="lg" external>
              {t("common.viewAllOpenJobs")} <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-slate-500 text-sm mt-3">{t("home.featuredJobs.walkInNote")}</p>
          </ScrollReveal>
        </div>
      </section>

      {/* === 5. CANDIDATE TESTIMONIALS (moved up for emotional proof) === */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("home.candidateTestimonials.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.candidateTestimonials.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("home.candidateTestimonials.subtitle")}</p>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <TestimonialCarousel testimonials={candidateTestimonials} />
          </ScrollReveal>
        </div>
      </section>

      {/* === 6. STATS BAR === */}
      <section className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div>
                  <p className="text-4xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-mono)]">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-blue-200 mt-2 text-sm sm:text-base font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Subtle employer services link */}
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-blue-200 hover:text-white text-sm font-medium inline-flex items-center gap-1.5 transition-colors group/link"
            >
              {t("home.statsBar.employersLink")} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* === 7. LOCATIONS PREVIEW === */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("home.locationsPreview.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.locationsPreview.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("home.locationsPreview.subtitle")}</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
            {locations.map((loc, i) => (
              <ScrollReveal key={loc.id} delay={i * 0.05}>
                <Link href={`/locations#${loc.id}`} className="group bg-white rounded-lg p-5 text-center border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block hover:scale-[1.02]">
                  <div className="w-10 h-10 bg-navy-deep/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-navy-deep group-hover:text-white transition-all text-navy-deep">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm">{loc.city}</h3>
                  <p className="text-xs text-slate-400">{loc.state}</p>
                  <p className="text-xs text-emerald-600 font-medium mt-1">{t("common.walkInsWelcome")}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <p className="text-slate-500">
              {t("home.locationsPreview.walkInsWelcomeAll")}{" "}
              <Link href="/contact" className="text-navy-deep font-semibold hover:text-orange-action transition-colors">
                {t("home.locationsPreview.contactOnSite")}
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* === 8. TABBED TESTIMONIALS (employer + candidate combined) === */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("home.tabbedTestimonials.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.tabbedTestimonials.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("home.tabbedTestimonials.subtitle")}</p>
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <TabbedTestimonials
              candidateTestimonials={candidateTestimonials}
              employerTestimonials={employerTestimonials}
            />
          </ScrollReveal>
        </div>
      </section>

      {/* === 9. REFER A FRIEND === */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8 sm:p-12 text-center">
              <div className="w-14 h-14 bg-orange-action/15 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-7 h-7 text-orange-action" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.referFriend.title")}</h2>
              <p className="text-slate-600 max-w-xl mx-auto mb-8">
                {t("home.referFriend.description")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button href="/contact" variant="orange" size="md">
                  {t("common.referAFriend")} <ArrowRight className="w-4 h-4" />
                </Button>
                <Button href="/contact" variant="ghost" size="md">
                  {t("common.learnMore")}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === 10. CTA BANNER === */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-20 sm:py-24">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-action/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{t("home.cta.title")}</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">{t("home.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href={EXTERNAL_URLS.jobPortal} variant="orange" size="lg" external>
                {t("common.findAJob")}
              </Button>
              <Button href="/contact" variant="navy-outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800">
                {t("common.requestTalent")}
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
