"use client";

import Image from "next/image";
import {
  Shield,
  Star,
  Heart,
  Users,
  Facebook,
  Linkedin,
  Mail,
  Factory,
  UtensilsCrossed,
  Truck,
  HardHat,
  Plane,
  FlaskConical,
  CheckCircle,
  Phone,
  MessageSquare,
  Quote,
} from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { owners, executives, coordinators, managers } from "@/data/team";
import { company } from "@/data/company";
import { EXTERNAL_URLS } from "@/lib/constants";
import { useTranslation } from "@/context/LanguageContext";

const coreValues = [
  { icon: Shield, titleKey: "about.values.integrity.title", descKey: "about.values.integrity.description", color: "navy-deep" as const },
  { icon: Star, titleKey: "about.values.excellence.title", descKey: "about.values.excellence.description", color: "orange-action" as const },
  { icon: Heart, titleKey: "about.values.loyalty.title", descKey: "about.values.loyalty.description", color: "navy-deep" as const },
  { icon: Users, titleKey: "about.values.servantLeadership.title", descKey: "about.values.servantLeadership.description", color: "orange-action" as const },
];

const stats = [
  { target: 20, suffix: "+", labelKey: "about.stats.yearsInBusiness" },
  { target: 10, suffix: "+", labelKey: "about.stats.locations" },
  { target: 1000, suffix: "+", labelKey: "about.stats.annualPlacements" },
  { target: 50, suffix: "+", labelKey: "about.stats.clientPartners" },
];

const industries = [
  { icon: Factory, nameKey: "about.industries.automotiveManufacturing", descKey: "about.industries.automotiveDesc", color: "navy-deep" as const },
  { icon: UtensilsCrossed, nameKey: "about.industries.foodBeverage", descKey: "about.industries.foodDesc", color: "orange-action" as const },
  { icon: Truck, nameKey: "about.industries.distributionLogistics", descKey: "about.industries.distributionDesc", color: "navy-deep" as const },
  { icon: HardHat, nameKey: "about.industries.construction", descKey: "about.industries.constructionDesc", color: "orange-action" as const },
  { icon: Plane, nameKey: "about.industries.aerospaceDefense", descKey: "about.industries.aerospaceDesc", color: "navy-deep" as const },
  { icon: FlaskConical, nameKey: "about.industries.pharmaChemical", descKey: "about.industries.pharmaDesc", color: "orange-action" as const },
];

const safetyBadges = [
  { icon: Shield, labelKey: "about.safety.oshaCompliant" },
  { icon: CheckCircle, labelKey: "about.safety.drugFree" },
  { icon: Shield, labelKey: "about.safety.safetyTraining" },
  { icon: CheckCircle, labelKey: "about.safety.workersComp" },
];

export default function AboutPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-action/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-[family-name:var(--font-heading)]">{t("about.hero.title")}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t("about.hero.subtitle")}</p>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="bg-orange-action sticky top-14 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex flex-wrap items-center justify-center gap-1 sm:gap-2 py-2.5">
            {[
              { href: "#stats", labelKey: "about.quickNav.stats", num: "1" },
              { href: "#leadership", labelKey: "about.quickNav.leadership", num: "2" },
              { href: "#industries", labelKey: "about.quickNav.industries", num: "3" },
              { href: "#values", labelKey: "about.quickNav.values", num: "4" },
              { href: "#safety", labelKey: "about.quickNav.safety", num: "5" },
              { href: "#difference", labelKey: "about.quickNav.difference", num: "6" },
            ].map((item, i, arr) => (
              <li key={item.href} className="flex items-center">
                <a
                  href={item.href}
                  className="group inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-semibold text-white/90 rounded-lg hover:bg-white/20 hover:text-white transition-all duration-200"
                >
                  <span className="w-5 h-5 flex items-center justify-center rounded text-[11px] font-bold bg-white/20 text-white group-hover:bg-white/30 transition-colors">{item.num}</span>
                  {t(item.labelKey)}
                </a>
                {i < arr.length - 1 && (
                  <span className="hidden sm:block w-px h-4 bg-white/30 ml-1 sm:ml-2" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* By the Numbers */}
      <section id="stats" className="scroll-mt-28 bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <ScrollReveal key={stat.labelKey} direction="up">
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-extrabold text-orange-action mb-2 font-[family-name:var(--font-heading)]">
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  </div>
                  <p className="text-slate-300 text-sm sm:text-base font-medium">{t(stat.labelKey)}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Team */}
      <section id="leadership" className="scroll-mt-28 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("about.team.leadershipLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("about.team.executiveTeam")}</h2>
            <div className="w-20 h-1 bg-orange-action mx-auto rounded-full" />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-16">
            {owners.map((member, i) => (
              <ScrollReveal key={member.name} direction="scale" delay={i * 0.05}>
                <div className="text-center w-48">
                  <Image src={member.image} alt={member.name} width={144} height={144} className="w-36 h-36 rounded-full mx-auto object-cover shadow-lg border-4 border-white mb-4 hover:ring-4 hover:ring-orange-action/20 transition-all" />
                  <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
                  <p className="text-navy-deep text-sm font-medium">{member.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {executives.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="text-center">
                  <Image src={member.image} alt={member.name} width={128} height={128} className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg border-4 border-white mb-4 hover:ring-4 hover:ring-orange-action/20 transition-all" />
                  <h3 className="font-bold text-slate-800">{member.name}</h3>
                  <p className="text-navy-deep text-sm">{member.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {coordinators.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="text-center w-48">
                  <Image src={member.image} alt={member.name} width={112} height={112} className="w-28 h-28 rounded-full mx-auto object-cover shadow-lg border-4 border-white mb-4 hover:ring-4 hover:ring-orange-action/20 transition-all" />
                  <h3 className="font-bold text-slate-800 text-sm">{member.name}</h3>
                  <p className="text-navy-deep text-xs">{member.title}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section id="industries" className="scroll-mt-28 py-20 sm:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("about.industries.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("about.industries.title")}</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">{t("about.industries.subtitle")}</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return (
                <ScrollReveal key={industry.nameKey} delay={i * 0.05}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 flex items-start gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 ${industry.color === "navy-deep" ? "bg-navy-deep/10" : "bg-orange-action/10"}`}>
                      <Icon className={`w-7 h-7 ${industry.color === "navy-deep" ? "text-navy-deep" : "text-orange-action"}`} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">{t(industry.nameKey)}</h3>
                      <p className="text-slate-500 text-sm">{t(industry.descKey)}</p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Managers */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("about.team.ourTeamLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("about.team.managers")}</h2>
            <div className="w-20 h-1 bg-orange-action mx-auto rounded-full" />
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
            {managers.map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.05}>
                <div className="bg-white border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 accent-bar-orange">
                  <Image src={member.image} alt={member.name} width={96} height={96} className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg border-4 border-white mb-4" />
                  <h3 className="font-bold text-slate-800 text-sm">{member.name}</h3>
                  <p className="text-navy-deep text-xs mb-3">{member.title}</p>
                  <div className="flex items-center justify-center gap-3 pt-3 border-t border-slate-100">
                    <a href="tel:8668708133" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-navy-deep hover:text-white transition-all" aria-label={`Call ${member.name}`}>
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a href="sms:8668708133" className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-orange-action hover:text-white transition-all" aria-label={`Text ${member.name}`}>
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section id="values" className="scroll-mt-28 py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("about.values.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("about.values.title")}</h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {coreValues.map((value, i) => {
              const Icon = value.icon;
              return (
                <ScrollReveal key={value.titleKey} direction={i % 2 === 0 ? "left" : "right"} delay={i * 0.05}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-5 ${value.color === "navy-deep" ? "bg-navy-deep/10" : "bg-orange-action/10"}`}>
                      <Icon className={`w-8 h-8 ${value.color === "navy-deep" ? "text-navy-deep" : "text-orange-action"}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{t(value.titleKey)}</h3>
                    <p className="text-slate-500 text-sm">{t(value.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section id="safety" className="scroll-mt-28 py-12 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-8">
            <SectionLabel className="mb-3">{t("about.safety.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 font-[family-name:var(--font-heading)]">{t("about.safety.title")}</h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {safetyBadges.map((badge) => {
                const Icon = badge.icon;
                return (
                  <div key={badge.labelKey} className="inline-flex items-center gap-2 bg-white border border-emerald-200 rounded-full px-5 py-2.5 text-sm font-medium text-emerald-800 shadow-sm">
                    <Icon className="w-4 h-4 text-emerald-600" />
                    {t(badge.labelKey)}
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Candidate Testimonial Highlight */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-8 sm:p-10 text-center relative">
              <Quote className="w-10 h-10 text-orange-action/20 mx-auto mb-4" />
              <blockquote className="text-xl sm:text-2xl font-medium text-slate-800 leading-relaxed mb-4 italic">
                {t("about.testimonialHighlight.quote")}
              </blockquote>
              <p className="text-slate-600 font-medium">{t("about.testimonialHighlight.author")}</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* OpSource Difference */}
      <section id="difference" className="scroll-mt-28 py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("about.difference.title")}</h2>
            <div className="w-20 h-1 bg-orange-action mx-auto rounded-full" />
          </ScrollReveal>
          <ScrollReveal>
            <div className="max-w-4xl mx-auto bg-white rounded-xl p-8 sm:p-12 shadow-sm border border-slate-200 flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-1 text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-800 italic mb-4 font-[family-name:var(--font-heading)]">{t("about.difference.quote")}</p>
                <p className="text-slate-600 leading-relaxed mb-6">{t("about.difference.mission")}</p>
                <div className="flex gap-4 justify-center lg:justify-start">
                  <a href={company.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-deep/10 rounded-lg flex items-center justify-center hover:bg-navy-deep hover:text-white transition-all text-navy-deep" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
                  <a href={company.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-navy-deep/10 rounded-lg flex items-center justify-center hover:bg-navy-deep hover:text-white transition-all text-navy-deep" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
                  <a href={`mailto:${company.email}`} className="w-10 h-10 bg-navy-deep/10 rounded-lg flex items-center justify-center hover:bg-navy-deep hover:text-white transition-all text-navy-deep" aria-label="Email"><Mail className="w-5 h-5" /></a>
                </div>
              </div>
              <div className="shrink-0">
                <Image src={EXTERNAL_URLS.badge} alt="OpSource Badge" width={160} height={160} className="w-40 h-40 object-contain" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
