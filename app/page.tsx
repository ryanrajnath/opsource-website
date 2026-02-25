"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, Users, MapPin, ArrowRight, Flame, Clock, BadgeDollarSign, Gift, Zap } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ScrollParallax } from "@/components/ui/ScrollParallax";
import { ScrollLinkedCounter } from "@/components/ui/ScrollLinkedCounter";
import { MagneticTilt } from "@/components/ui/MagneticTilt";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { useActiveSection } from "@/hooks/useActiveSection";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { TabbedTestimonials } from "@/components/ui/TabbedTestimonials";
import { LocationMap } from "@/components/ui/LocationMap";
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

const SECTION_IDS = ["open-jobs", "pay-ranges", "locations", "testimonials", "credibility", "referral"];

export default function HomePage() {
  const { t } = useTranslation();
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [quickApplyOpen, setQuickApplyOpen] = useState(false);
  const [jobFilter, setJobFilter] = useState("all");
  const activeSection = useActiveSection(SECTION_IDS);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <>
      {/* === 1. URGENCY BANNER === */}
      <UrgencyBanner isOpen={quickApplyOpen} onToggle={setQuickApplyOpen} />

      {/* === 2. SPLIT-AUDIENCE HERO === */}
      <section className="relative bg-gradient-to-br from-slate-surface via-slate-surface to-[#0c2461] overflow-hidden">
        {/* Video background — mobile (portrait crop) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 md:hidden"
          src="/hero-video-mobile.mp4"
        />
        {/* Video background — desktop (landscape) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 hidden md:block"
          src="/hero-video.mp4"
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-slate-surface/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-surface/40 via-transparent to-slate-surface/90" />
        <ScrollParallax yRange={[0, -80]} scaleRange={[1, 1.15]} opacityRange={[0.8, 0.4]} className="absolute top-1/3 left-1/2">
          <div className="-translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-orange-action/10 rounded-full blur-[120px]" />
        </ScrollParallax>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
          <div className="text-center mb-8">
            <SectionLabel className="mb-4">{t("home.hero.sectionLabel")}</SectionLabel>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 font-[family-name:var(--font-heading)]">
              {t("home.hero.title")}{" "}
              <span className="text-orange-action">{t("home.hero.titleHighlight")}</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto">
              {t("home.hero.subtitle")}
            </p>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-10">
            {[
              { value: "3", suffix: t("home.trustBadges.daySuffix"), label: t("home.trustBadges.placement") },
              { value: "10", suffix: "+", label: t("home.trustBadges.locations") },
              { value: "20", suffix: "+", label: t("home.trustBadges.years") },
              { value: "5k", suffix: "+", label: t("home.trustBadges.placed") },
            ].map((badge) => (
              <div key={badge.label} className="text-center">
                <p className="text-2xl sm:text-3xl font-extrabold text-white font-[family-name:var(--font-mono)]">
                  {badge.value}<span className="text-orange-action">{badge.suffix}</span>
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-medium">{badge.label}</p>
              </div>
            ))}
          </div>

          {/* Split Panels */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <MagneticTilt intensity={6}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-orange-action/20 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-orange-action" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">{t("home.splitPanels.findJob.title")}</h2>
                <p className="text-slate-400 text-sm mb-6">{t("home.splitPanels.findJob.description")}</p>
                <Button href={EXTERNAL_URLS.jobPortal} variant="orange" size="lg" external className="w-full">
                  {t("common.searchJobs")} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </MagneticTilt>

            <MagneticTilt intensity={6}>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 group h-full">
                <div className="w-16 h-16 bg-navy-deep/30 rounded-xl flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-3 font-[family-name:var(--font-heading)]">{t("home.splitPanels.buildTeam.title")}</h2>
                <p className="text-slate-400 text-sm mb-6">{t("home.splitPanels.buildTeam.description")}</p>
                <Button href="/services" variant="navy" size="lg" className="w-full">
                  {t("common.ourServices")} <ArrowRight className="w-5 h-5" />
                </Button>
              </div>
            </MagneticTilt>
          </div>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="hidden lg:block bg-orange-action sticky top-14 z-40 shadow-md relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2.5">
            <ul className="flex flex-wrap items-center gap-1 sm:gap-2">
              {[
                { href: "#open-jobs", id: "open-jobs", labelKey: "home.quickNav.openJobs", num: "1" },
                { href: "#pay-ranges", id: "pay-ranges", labelKey: "home.quickNav.payRanges", num: "2" },
                { href: "#locations", id: "locations", labelKey: "home.quickNav.locations", num: "3" },
                { href: "#testimonials", id: "testimonials", labelKey: "home.quickNav.testimonials", num: "4" },
                { href: "#credibility", id: "credibility", labelKey: "home.quickNav.credibility", num: "5" },
                { href: "#referral", id: "referral", labelKey: "home.quickNav.referral", num: "6" },
              ].map((item, i, arr) => {
                const isActive = activeSection === item.id;
                return (
                <li key={item.href} className="flex items-center">
                  <a
                    href={item.href}
                    className={cn(
                      "group relative inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-semibold rounded-lg transition-colors duration-200",
                      isActive
                        ? "text-orange-action"
                        : "text-white/80 hover:bg-white/15 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white rounded-lg shadow-md"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                    <span className={cn(
                      "relative w-5 h-5 flex items-center justify-center rounded text-[11px] font-bold transition-colors",
                      isActive ? "bg-orange-action/15 text-orange-action" : "bg-white/15 text-white group-hover:bg-white/30"
                    )}>{item.num}</span>
                    <span className="relative">{t(item.labelKey)}</span>
                  </a>
                  {i < arr.length - 1 && (
                    <span className="hidden sm:block w-px h-4 bg-white/30 ml-1 sm:ml-2" />
                  )}
                </li>
              )})}
            </ul>

            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setTimeout(() => setQuickApplyOpen(true), 300);
              }}
              className="inline-flex items-center gap-2 bg-white text-orange-action font-bold px-5 py-2 rounded-lg text-sm hover:bg-orange-50 transition-colors shrink-0 shadow-sm"
            >
              <Zap className="w-4 h-4" />
              {t("urgencyBanner.quickApply")}
            </button>
          </div>
        </div>
        {/* Scroll progress bar */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/80 origin-left"
          style={{ scaleX }}
        />
      </nav>

      {/* === 3. FEATURED JOBS === */}
      <section id="open-jobs" className="py-20 sm:py-28 bg-slate-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <SectionLabel className="mb-3">{t("home.featuredJobs.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.featuredJobs.title")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("home.featuredJobs.subtitle")}</p>
          </ScrollReveal>

          <ScrollReveal className="mb-10">
            <JobTypeFilter active={jobFilter} onChange={setJobFilter} />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {featuredJobs.filter((job) => jobFilter === "all" || job.type === jobFilter).map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 0.05}>
                  <a
                    href={EXTERNAL_URLS.jobPortal}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative h-full"
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

      {/* === 4. PAY RANGES === */}
      <section id="pay-ranges" className="py-20 sm:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel className="mb-3">{t("home.payRanges.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.payRanges.title")}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t("home.payRanges.subtitle")}</p>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {payRanges.map((range, i) => (
              <ScrollReveal key={range.role} delay={i * 0.05}>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-5 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:bg-gradient-to-b hover:from-orange-50/60 hover:to-white group h-full">
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

      {/* === 5. LOCATIONS PREVIEW === */}
      <section id="locations" className="py-10 sm:py-14 bg-slate-50 scroll-mt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-6 sm:mb-8">
            <SectionLabel className="mb-2">{t("home.locationsPreview.sectionLabel")}</SectionLabel>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2 font-[family-name:var(--font-heading)]">{t("home.locationsPreview.title")}</h2>
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto">{t("home.locationsPreview.subtitle")}</p>
          </ScrollReveal>

          {/* Desktop: side by side | Mobile: map then list */}
          <div className="grid lg:grid-cols-[5fr_7fr] gap-4 lg:gap-8 items-center">
            {/* Left: City list grouped by state */}
            <ScrollReveal className="order-2 lg:order-1">
              <div className="space-y-4">
                {/* South Carolina */}
                <div>
                  <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">South Carolina</h4>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                    {locations.filter(l => l.state === "SC").map(loc => (
                      <Link
                        key={loc.id}
                        href={`/locations#${loc.id}`}
                        className={`group flex items-center gap-1.5 py-1 px-1.5 rounded transition-all duration-200 ${
                          hoveredLocation === loc.id
                            ? "bg-navy-deep/10 text-navy-deep"
                            : "text-slate-600 hover:text-navy-deep hover:bg-slate-100"
                        }`}
                        onMouseEnter={() => setHoveredLocation(loc.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        <MapPin className={`w-3 h-3 shrink-0 transition-colors duration-200 ${
                          hoveredLocation === loc.id ? "text-orange-action" : "text-slate-400 group-hover:text-orange-action"
                        }`} />
                        <span className="text-[13px] font-medium">
                          {loc.city}
                          {loc.isHQ && <span className="text-[9px] text-orange-action font-bold ml-1">HQ</span>}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* North Carolina */}
                <div>
                  <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">North Carolina</h4>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                    {locations.filter(l => l.state === "NC").map(loc => (
                      <Link
                        key={loc.id}
                        href={`/locations#${loc.id}`}
                        className={`group flex items-center gap-1.5 py-1 px-1.5 rounded transition-all duration-200 ${
                          hoveredLocation === loc.id
                            ? "bg-navy-deep/10 text-navy-deep"
                            : "text-slate-600 hover:text-navy-deep hover:bg-slate-100"
                        }`}
                        onMouseEnter={() => setHoveredLocation(loc.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        <MapPin className={`w-3 h-3 shrink-0 transition-colors duration-200 ${
                          hoveredLocation === loc.id ? "text-orange-action" : "text-slate-400 group-hover:text-orange-action"
                        }`} />
                        <span className="text-[13px] font-medium">{loc.city}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Tennessee */}
                <div>
                  <h4 className="text-xs font-bold text-navy-deep uppercase tracking-wider mb-2">Tennessee</h4>
                  <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
                    {locations.filter(l => l.state === "TN").map(loc => (
                      <Link
                        key={loc.id}
                        href={`/locations#${loc.id}`}
                        className={`group flex items-center gap-1.5 py-1 px-1.5 rounded transition-all duration-200 ${
                          hoveredLocation === loc.id
                            ? "bg-navy-deep/10 text-navy-deep"
                            : "text-slate-600 hover:text-navy-deep hover:bg-slate-100"
                        }`}
                        onMouseEnter={() => setHoveredLocation(loc.id)}
                        onMouseLeave={() => setHoveredLocation(null)}
                      >
                        <MapPin className={`w-3 h-3 shrink-0 transition-colors duration-200 ${
                          hoveredLocation === loc.id ? "text-orange-action" : "text-slate-400 group-hover:text-orange-action"
                        }`} />
                        <span className="text-[13px] font-medium">{loc.city}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 pt-1">
                  {t("home.locationsPreview.walkInsWelcomeAll")}{" "}
                  <Link href="/contact" className="text-navy-deep font-semibold hover:text-orange-action transition-colors">
                    {t("home.locationsPreview.contactOnSite")}
                  </Link>
                </p>
              </div>
            </ScrollReveal>

            {/* Right: Map — constrained height on mobile */}
            <ScrollReveal className="order-1 lg:order-2" direction="scale">
              <div className="max-h-[250px] sm:max-h-none">
                <LocationMap hoveredCity={hoveredLocation} onHoverCity={setHoveredLocation} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* === 6. TESTIMONIALS === */}
      <section id="testimonials" className="py-20 sm:py-28 bg-white scroll-mt-28">
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

      {/* === 7. CREDIBILITY BAR (merged Stats + Client Logos) === */}
      <section id="credibility" className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-16 sm:py-20 scroll-mt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.05}>
                <div>
                  <p className="text-4xl sm:text-5xl font-extrabold text-white font-[family-name:var(--font-mono)]">
                    <ScrollLinkedCounter target={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-blue-200 mt-2 text-sm sm:text-base font-medium">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Divider */}
          <div className="w-20 h-px bg-white/20 mx-auto mb-10" />

          {/* Client logos label */}
          <ScrollReveal>
            <p className="text-center text-blue-200 text-sm font-medium mb-6">{t("home.clients.title")}</p>
          </ScrollReveal>
        </div>

        {/* Infinite scrolling marquee — full width */}
        <div className="relative overflow-hidden py-5">


            <div className="flex animate-marquee hover:[animation-play-state:paused]">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex shrink-0 items-center gap-8 sm:gap-12 lg:gap-16 px-4 sm:px-6 lg:px-8">
                  {[
                    { src: "/logos/bmw.svg", alt: "BMW Manufacturing" },
                    { src: "/logos/michelin.svg", alt: "Michelin North America" },
                    { src: "/logos/zf-group.svg", alt: "ZF Group" },
                    { src: "/logos/bosch.svg", alt: "Bosch" },
                    { src: "/logos/oshkosh.svg", alt: "Oshkosh Defense" },
                    { src: "/logos/magna.svg", alt: "Magna" },
                    { src: "/logos/isuzu.svg", alt: "Isuzu North America" },
                    { src: "/logos/techtronic.svg", alt: "Techtronic Industries" },
                    { src: "/logos/freightliner.svg", alt: "Freightliner / Daimler" },
                    { src: "/logos/milliken.svg", alt: "Milliken & Company" },
                    { src: "/logos/nutra.svg", alt: "Nutra Manufacturing" },
                    { src: "/logos/fujifilm.svg", alt: "Fujifilm" },
                    { src: "/logos/renfro.svg", alt: "Renfro Industrial" },
                    { src: "/logos/ge-vernova.svg", alt: "GE Vernova" },
                  ].map((logo) => (
                    <img
                      key={`${setIndex}-${logo.alt}`}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-8 sm:h-10 lg:h-12 w-auto shrink-0 opacity-70 hover:opacity-100 transition-all duration-500"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

        {/* Employer services link */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="text-blue-200 hover:text-white text-sm font-medium inline-flex items-center gap-1.5 transition-colors group/link"
          >
            {t("home.statsBar.employersLink")} <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* === 8. REFER A FRIEND === */}
      <section id="referral" className="py-16 sm:py-20 scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-2xl p-8 sm:p-12 text-center">
              <div className="w-14 h-14 bg-orange-action/15 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Gift className="w-7 h-7 text-orange-action" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("home.referFriend.title")}</h2>
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
