"use client";

import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Building2, ArrowRight, MessageSquare, Navigation, Clock, ExternalLink } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { locations, type Location } from "@/data/locations";
import { company } from "@/data/company";
import { useTranslation } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

const hq = locations.find((l) => l.isHQ)!;
const branches = locations.filter((l) => !l.isHQ);

function LocationDetail({ loc, isHQ = false }: { loc: Location; isHQ?: boolean }) {
  const { t } = useTranslation();
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(loc.address)}`;
  const phoneTel = loc.phone.replace(/[^0-9]/g, "");

  return (
    <div className="flex flex-col h-full">
      <div className="space-y-4 flex-1">
        <div>
          {isHQ && (
            <span className="inline-flex items-center gap-1.5 text-orange-action text-xs font-bold uppercase tracking-widest mb-2">
              <Building2 className="w-3.5 h-3.5" />
              {t("locations.hq.label")}
            </span>
          )}
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 font-[family-name:var(--font-heading)] leading-tight">
            {loc.city}<span className="text-slate-400 font-bold">, {loc.state}</span>
          </h3>
          <p className="text-slate-500 mt-1">{loc.tagline}</p>
        </div>

        <div className="space-y-2.5">
          <a
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2.5 text-slate-600 hover:text-orange-action transition-colors group"
          >
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-navy-deep group-hover:text-orange-action transition-colors" />
            <span className="text-sm">{loc.address}</span>
          </a>
          <a
            href={`tel:${phoneTel}`}
            className="flex items-center gap-2.5 text-slate-600 hover:text-orange-action transition-colors group"
          >
            <Phone className="w-4 h-4 shrink-0 text-navy-deep group-hover:text-orange-action transition-colors" />
            <span className="text-sm font-medium">{loc.phone}</span>
          </a>
          <div className="flex items-center gap-2.5 text-slate-500">
            <Clock className="w-4 h-4 shrink-0 text-navy-deep" />
            <span className="text-sm">{company.hours.weekdays}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-2.5 mt-6 pt-5 border-t border-slate-100">
        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 bg-navy-deep text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy-deep-light transition-colors"
        >
          <Navigation className="w-3.5 h-3.5" />
          {t("common.getDirections")}
        </a>
        <a
          href={`sms:${phoneTel}`}
          className="inline-flex items-center gap-1.5 bg-orange-action/10 text-orange-action px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-action/20 transition-colors"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          {t("common.textToApply")}
        </a>
      </div>
    </div>
  );
}

export default function LocationsPage() {
  const { t } = useTranslation();
  const [activeLocation, setActiveLocation] = useState<string | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-surface via-navy-deep to-[#0c2461] overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-orange-action/8 rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-blue-500/8 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-action/3 rounded-full blur-[160px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-16 sm:pb-20">
          <div className="text-center mb-14 sm:mb-16">
            <ScrollReveal>
              <p className="text-orange-action text-sm font-semibold uppercase tracking-widest mb-4">{t("locations.hero.sectionLabel")}</p>
            </ScrollReveal>
            <ScrollReveal delay={0.05}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-5 font-[family-name:var(--font-heading)] leading-[1.1]">{t("locations.hero.title")}</h1>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <p className="text-lg sm:text-xl text-blue-200/80 max-w-2xl mx-auto leading-relaxed">{t("locations.hero.subtitle")}</p>
            </ScrollReveal>
          </div>

          {/* Quick stats */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { value: "3", labelKey: "locations.stats.states" },
              { value: "10+", labelKey: "locations.stats.branches" },
              { value: "100%", labelKey: "locations.stats.walkIns" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.labelKey} delay={i * 0.08}>
                <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl py-5 px-4 hover:bg-white/10 transition-all duration-300">
                  <div className="text-2xl sm:text-3xl font-extrabold text-orange-action mb-1 font-[family-name:var(--font-heading)]">{stat.value}</div>
                  <p className="text-blue-200/70 text-xs sm:text-sm font-medium">{t(stat.labelKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Location Quick-Jump */}
      <nav className="bg-white sticky top-14 z-40 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-2 overflow-x-auto scrollbar-hide">
            <a
              href={`#${hq.id}`}
              onClick={() => setActiveLocation(hq.id)}
              className={cn(
                "shrink-0 px-3 py-1.5 rounded-full text-sm font-semibold transition-all",
                activeLocation === hq.id
                  ? "bg-orange-action text-white"
                  : "text-slate-600 hover:bg-slate-100"
              )}
            >
              HQ
            </a>
            {branches.map((loc) => (
              <a
                key={loc.id}
                href={`#${loc.id}`}
                onClick={() => setActiveLocation(loc.id)}
                className={cn(
                  "shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  activeLocation === loc.id
                    ? "bg-navy-deep text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                )}
              >
                {loc.city}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* === Corporate HQ — Full-bleed feature === */}
      <section id={hq.id} className="scroll-mt-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <ScrollReveal>
            <div className="relative rounded-2xl overflow-hidden bg-slate-900">
              {/* Background image */}
              <div className="absolute inset-0">
                <Image
                  src={hq.image}
                  alt={`${hq.city}, ${hq.state}`}
                  fill
                  className="object-cover opacity-30"
                  sizes="100vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/60" />
              </div>

              {/* Content */}
              <div className="relative flex flex-col lg:flex-row">
                <div className="lg:w-1/2 p-8 sm:p-12 lg:p-16">
                  <span className="inline-flex items-center gap-2 bg-orange-action text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                    <Building2 className="w-3.5 h-3.5" />
                    {t("locations.hq.tag")}
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-3 font-[family-name:var(--font-heading)] leading-[1.1]">
                    {hq.city}<span className="text-orange-action">,</span> {hq.state}
                  </h2>
                  <p className="text-blue-200/80 text-lg mb-8">{hq.tagline}</p>

                  <div className="space-y-3 mb-8">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 text-slate-300 hover:text-orange-action transition-colors"
                    >
                      <MapPin className="w-5 h-5 mt-0.5 shrink-0" />
                      <span>{company.address.full}</span>
                    </a>
                    <a href={`tel:${company.phoneTel}`} className="flex items-center gap-3 text-slate-300 hover:text-orange-action transition-colors">
                      <Phone className="w-5 h-5 shrink-0" />
                      <span className="font-medium">{company.phone}</span>
                    </a>
                    <div className="flex items-center gap-3 text-slate-400">
                      <Clock className="w-5 h-5 shrink-0" />
                      <span>{company.hours.weekdays} | {company.hours.friday}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-orange-action text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-orange-action-dark transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      {t("common.walkInToday")}
                    </a>
                    <a
                      href="sms:8668708133"
                      className="inline-flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t("common.textToApply")}
                    </a>
                  </div>
                </div>

                {/* Right side image (desktop) */}
                <div className="hidden lg:block lg:w-1/2 relative min-h-[400px]">
                  <Image
                    src={hq.image}
                    alt={`${hq.city}, ${hq.state}`}
                    fill
                    className="object-cover"
                    sizes="50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-transparent w-24" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* === Branch Locations — Bento grid === */}
      <section id="all-branches" className="py-16 sm:py-24 bg-slate-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-14">
            <SectionLabel className="mb-3">{t("locations.branches.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-3 font-[family-name:var(--font-heading)]">{t("locations.branches.title")}</h2>
            <p className="text-slate-500 max-w-lg mx-auto">{t("common.walkInsWelcome")} &mdash; {company.hours.weekdays}</p>
          </ScrollReveal>

          {/* Bento grid: first 2 are featured (large), rest are compact */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
            {branches.slice(0, 2).map((loc, i) => (
              <ScrollReveal key={loc.id} delay={i * 0.08}>
                <div
                  id={loc.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 scroll-mt-28 h-full"
                >
                  {/* Image header */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.city}, ${loc.state}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                      <div>
                        <h3 className="text-2xl font-extrabold text-white font-[family-name:var(--font-heading)] drop-shadow-lg">
                          {loc.city}
                        </h3>
                        <p className="text-white/80 text-sm">{loc.state}</p>
                      </div>
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        {t("common.walkInsWelcome")}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <LocationDetail loc={loc} />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Remaining branches: 3-column compact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {branches.slice(2).map((loc, i) => (
              <ScrollReveal key={loc.id} delay={i * 0.05}>
                <div
                  id={loc.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 scroll-mt-28 h-full flex flex-col"
                >
                  {/* Compact image strip */}
                  <div className="relative h-36 overflow-hidden">
                    <Image
                      src={loc.image}
                      alt={`${loc.city}, ${loc.state}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-xl font-extrabold text-white font-[family-name:var(--font-heading)] drop-shadow-lg">
                      {loc.city}<span className="text-white/70 font-bold">, {loc.state}</span>
                    </h3>
                  </div>

                  {/* Compact info */}
                  <div className="p-5 flex flex-col flex-1">
                    <p className="text-slate-500 text-sm mb-3">{loc.tagline}</p>

                    <div className="space-y-2 flex-1">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start gap-2 text-slate-500 hover:text-orange-action transition-colors text-sm"
                      >
                        <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                        <span>{loc.address}</span>
                      </a>
                      <a
                        href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`}
                        className="flex items-center gap-2 text-slate-600 hover:text-orange-action transition-colors text-sm font-medium"
                      >
                        <Phone className="w-3.5 h-3.5 shrink-0" />
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-slate-100 text-slate-700 px-3 py-2 rounded-lg text-xs font-semibold hover:bg-navy-deep hover:text-white transition-colors"
                      >
                        <Navigation className="w-3 h-3" />
                        {t("common.getDirections")}
                      </a>
                      <a
                        href={`sms:${loc.phone.replace(/[^0-9]/g, "")}`}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 bg-orange-action/10 text-orange-action px-3 py-2 rounded-lg text-xs font-semibold hover:bg-orange-action hover:text-white transition-colors"
                      >
                        <MessageSquare className="w-3 h-3" />
                        {t("common.textToApply")}
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-20 sm:py-24">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-action/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{t("locations.cta.title")}</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">{t("locations.cta.subtitle")}</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="orange" size="lg">
                {t("common.contactUs")} <ArrowRight className="w-5 h-5" />
              </Button>
              <a
                href={`tel:${company.phoneTel}`}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {company.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
