"use client";

import Image from "next/image";
import { MapPin, Phone, Building2, ArrowRight, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { locations } from "@/data/locations";
import { company } from "@/data/company";
import { useTranslation } from "@/context/LanguageContext";

const hq = locations.find((l) => l.isHQ)!;
const branches = locations.filter((l) => !l.isHQ);

export default function LocationsPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-slate-surface via-navy-deep to-[#0c2461] overflow-hidden">
        {/* Decorative elements */}
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

          {/* Quick stats row */}
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

      {/* Quick Nav */}
      <nav className="hidden lg:block bg-orange-action sticky top-14 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 py-2.5">
            {[
              { href: `#${hq.id}`, num: "1", label: t("locations.quickNav.headquarters") },
              { href: "#all-branches", num: "2", label: t("locations.quickNav.allBranches") },
              ...branches.map((loc, i) => ({
                href: `#${loc.id}`,
                num: String(i + 3),
                label: loc.city,
              })),
            ].map((item, i, arr) => (
              <li key={item.href} className="flex items-center">
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 sm:gap-2 whitespace-nowrap px-2.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold text-white/90 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  <span className="w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center rounded text-[10px] sm:text-[11px] font-bold bg-white/20 text-white group-hover:bg-white/30 transition-colors">{item.num}</span>
                  {item.label}
                </a>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-white/30 ml-1 sm:ml-2" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Corporate HQ */}
      <section id={hq.id} className="py-20 sm:py-28 bg-white scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("locations.hq.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("locations.hq.title")}</h2>
            <div className="w-20 h-1 bg-orange-action mx-auto rounded-full" />
          </ScrollReveal>

          <ScrollReveal direction="scale">
            <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-50 to-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-1/2 relative">
                  <Image
                    src={hq.image}
                    alt={`${hq.city}, ${hq.state}`}
                    width={640}
                    height={400}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-orange-action text-white px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wider">
                    {t("locations.hq.tag")}
                  </div>
                </div>
                <div className="lg:w-1/2 p-8 sm:p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-2">
                    <Building2 className="w-5 h-5 text-orange-action" />
                    <span className="text-orange-action font-semibold text-sm uppercase tracking-wider">{t("locations.hq.label")}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 font-[family-name:var(--font-heading)]">{hq.city}, {hq.state}</h3>
                  <p className="text-slate-500 mb-6">{hq.tagline}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-navy-deep mt-0.5 shrink-0" />
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(company.address.full)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-orange-action transition-colors"
                      >
                        {company.address.full}
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-navy-deep shrink-0" />
                      <a href={`tel:${company.phoneTel}`} className="text-slate-600 hover:text-orange-action transition-colors">{company.phone}</a>
                    </div>
                  </div>
                  <div className="text-sm text-slate-500">
                    <p>{company.hours.weekdays}</p>
                    <p>{company.hours.friday}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 mt-6">
                    <a
                      href="https://maps.google.com/?q=135+North+Church+Street+Spartanburg+SC+29306"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-navy-deep text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-navy-deep-light transition-colors"
                    >
                      <MapPin className="w-4 h-4" />
                      {t("common.walkInToday")}
                    </a>
                    <a
                      href="sms:8668708133"
                      className="inline-flex items-center gap-1.5 bg-orange-action text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-orange-action-dark transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      {t("common.textToApply")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* All Branches */}
      <section id="all-branches" className="py-20 sm:py-28 bg-slate-50 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("locations.branches.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("locations.branches.title")}</h2>
            <div className="w-20 h-1 bg-orange-action mx-auto rounded-full" />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {branches.map((loc, i) => (
              <ScrollReveal key={loc.id} delay={i * 0.05}>
                <div id={loc.id} className="group bg-white border border-slate-200 rounded-lg overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 accent-bar-navy scroll-mt-28">
                  <div className="h-44 overflow-hidden relative">
                    <Image
                      src={loc.image}
                      alt={`${loc.city}, ${loc.state}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white">
                      <MapPin className="w-4 h-4" />
                      <span className="font-bold text-sm">{loc.city}, {loc.state}</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-1 font-[family-name:var(--font-heading)]">{loc.city}</h3>
                    <p className="text-slate-500 text-sm mb-2">{loc.tagline}</p>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 text-xs hover:text-navy-deep transition-colors flex items-start gap-1.5 mb-3"
                    >
                      <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0" />
                      <span>{loc.address}</span>
                    </a>
                    <div className="flex items-center gap-2 mb-2">
                      <Phone className="w-4 h-4 text-navy-deep" />
                      <a href={`tel:${loc.phone.replace(/[^0-9]/g, "")}`} className="text-navy-deep font-semibold text-sm hover:text-orange-action transition-colors">{loc.phone}</a>
                    </div>
                    <a
                      href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-navy-deep text-xs font-medium hover:text-orange-action transition-colors inline-flex items-center gap-1"
                    >
                      {t("common.getDirections")} <ArrowRight className="w-3 h-3" />
                    </a>
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs font-medium">
                        <MapPin className="w-3.5 h-3.5" />
                        {t("common.walkInsWelcome")}
                      </span>
                      <a
                        href="sms:8668708133"
                        className="inline-flex items-center gap-1.5 text-orange-action text-xs font-semibold hover:text-orange-action-dark transition-colors"
                      >
                        <MessageSquare className="w-3.5 h-3.5" />
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

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-20 sm:py-24">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-action/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{t("locations.cta.title")}</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">{t("locations.cta.subtitle")}</p>
            <Button href="/contact" variant="orange" size="lg">
              {t("common.contactUs")} <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
