"use client";

import Image from "next/image";
import { ArrowRight, ClipboardCheck, UserCheck, Briefcase, Rocket, DoorOpen, Shield, CheckCircle2, FileText, ClipboardList, HardHat, BadgeCheck, ShieldCheck, GraduationCap, HeartHandshake } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { services } from "@/data/services";
import { useTranslation } from "@/context/LanguageContext";

const serviceKeys: Record<string, { titleKey: string; descKey: string; ctaKey: string; bulletsKey: string }> = {
  traditional: { titleKey: "services.serviceDetails.traditional.title", descKey: "services.serviceDetails.traditional.description", ctaKey: "services.serviceDetails.traditional.ctaText", bulletsKey: "services.serviceDetails.traditional.bullets" },
  "skilled-trades": { titleKey: "services.serviceDetails.skilledTrades.title", descKey: "services.serviceDetails.skilledTrades.description", ctaKey: "services.serviceDetails.skilledTrades.ctaText", bulletsKey: "services.serviceDetails.skilledTrades.bullets" },
  "direct-hire": { titleKey: "services.serviceDetails.directHire.title", descKey: "services.serviceDetails.directHire.description", ctaKey: "services.serviceDetails.directHire.ctaText", bulletsKey: "services.serviceDetails.directHire.bullets" },
  payroll: { titleKey: "services.serviceDetails.payroll.title", descKey: "services.serviceDetails.payroll.description", ctaKey: "services.serviceDetails.payroll.ctaText", bulletsKey: "services.serviceDetails.payroll.bullets" },
};

export default function ServicesPage() {
  const { t } = useTranslation();

  const getBullets = (serviceId: string): string[] => {
    const keyMap: Record<string, string> = {
      traditional: "services.serviceDetails.traditional.bullets",
      "skilled-trades": "services.serviceDetails.skilledTrades.bullets",
      "direct-hire": "services.serviceDetails.directHire.bullets",
      payroll: "services.serviceDetails.payroll.bullets",
    };
    const base = keyMap[serviceId];
    if (!base) return [];
    return [0, 1, 2, 3].map((i) => t(`${base}.${i}`));
  };

  const candidateSteps = [
    { icon: DoorOpen, titleKey: "services.candidateJourney.step1.title", descKey: "services.candidateJourney.step1.description" },
    { icon: UserCheck, titleKey: "services.candidateJourney.step2.title", descKey: "services.candidateJourney.step2.description" },
    { icon: Shield, titleKey: "services.candidateJourney.step3.title", descKey: "services.candidateJourney.step3.description" },
    { icon: Rocket, titleKey: "services.candidateJourney.step4.title", descKey: "services.candidateJourney.step4.description" },
  ];

  const processSteps = [
    { icon: ClipboardCheck, titleKey: "services.recruitingProcess.step1.title", descKey: "services.recruitingProcess.step1.description" },
    { icon: UserCheck, titleKey: "services.recruitingProcess.step2.title", descKey: "services.recruitingProcess.step2.description" },
    { icon: Briefcase, titleKey: "services.recruitingProcess.step3.title", descKey: "services.recruitingProcess.step3.description" },
    { icon: Rocket, titleKey: "services.recruitingProcess.step4.title", descKey: "services.recruitingProcess.step4.description" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-action/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-[family-name:var(--font-heading)]">{t("services.hero.title")}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t("services.hero.subtitle")}</p>
        </div>
      </section>

      {/* Quick Nav */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-slate-200/60 sticky top-14 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-center gap-1 sm:gap-2 py-2.5 overflow-x-auto scrollbar-hide">
            {services.map((service, i) => {
              const keys = serviceKeys[service.id];
              return (
                <li key={service.id} className="flex items-center">
                  <a
                    href={`#${service.id}`}
                    className="group inline-flex items-center gap-2 whitespace-nowrap px-4 py-2 text-sm font-medium text-slate-500 rounded-lg hover:bg-navy-deep hover:text-white transition-all duration-200"
                  >
                    <span className="w-5 h-5 flex items-center justify-center rounded text-[11px] font-bold bg-slate-200 text-slate-500 group-hover:bg-white/20 group-hover:text-white transition-colors">{i + 1}</span>
                    {keys ? t(keys.titleKey) : service.title}
                  </a>
                  {i < services.length - 1 && (
                    <span className="hidden sm:block w-px h-4 bg-slate-200 ml-1 sm:ml-2" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Service Details */}
      {services.map((service, i) => {
        const isEven = i % 2 === 0;
        const isExternal = service.ctaUrl.startsWith("http");
        const keys = serviceKeys[service.id];
        const bullets = getBullets(service.id);
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-20 sm:py-28 scroll-mt-28 ${isEven ? "bg-white" : "bg-slate-50"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-12 lg:gap-16`}>
                <ScrollReveal direction={isEven ? "left" : "right"} className="flex-1">
                  <div className="relative rounded-xl overflow-hidden shadow-lg">
                    <Image
                      src={service.image}
                      alt={keys ? t(keys.titleKey) : service.title}
                      width={640}
                      height={400}
                      className="w-full h-64 sm:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </ScrollReveal>

                <ScrollReveal direction={isEven ? "right" : "left"} className="flex-1">
                  <SectionLabel className="mb-3">{`0${i + 1}`}</SectionLabel>
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{keys ? t(keys.titleKey) : service.title}</h2>
                  <div className="w-16 h-1 bg-orange-action rounded-full mb-6" />
                  <p className="text-slate-600 leading-relaxed mb-6">{keys ? t(keys.descKey) : service.longDescription}</p>
                  <ul className="space-y-2 mb-8">
                    {bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-slate-600 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-orange-action mt-0.5 shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    href={service.ctaUrl}
                    variant="orange"
                    size="md"
                    external={isExternal}
                  >
                    {keys ? t(keys.ctaKey) : service.ctaText} <ArrowRight className="w-4 h-4" />
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* Candidate Journey */}
      <section className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("services.candidateJourney.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("services.candidateJourney.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("services.candidateJourney.subtitle")}</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {candidateSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.titleKey} delay={i * 0.05}>
                  <div className="relative bg-white border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-action text-white rounded-full flex items-center justify-center text-sm font-bold font-[family-name:var(--font-mono)]">
                      {i + 1}
                    </div>
                    <div className="w-14 h-14 bg-orange-action/10 rounded-xl flex items-center justify-center mx-auto mb-5 mt-2">
                      <Icon className="w-7 h-7 text-orange-action" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{t(step.titleKey)}</h3>
                    <p className="text-slate-500 text-sm">{t(step.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button href="http://jobs.opsourcestaffing.com" variant="orange" size="lg" external>
              {t("common.browseOpenJobs")} <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-slate-500 text-sm mt-3">{t("services.candidateJourney.walkInNote")}</p>
          </div>
        </div>
      </section>

      {/* What to Bring */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-12">
            <SectionLabel className="mb-3">{t("services.whatToBring.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("services.whatToBring.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("services.whatToBring.subtitle")}</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: BadgeCheck, titleKey: "services.whatToBring.validId.title", descKey: "services.whatToBring.validId.description" },
              { icon: FileText, titleKey: "services.whatToBring.ssCard.title", descKey: "services.whatToBring.ssCard.description" },
              { icon: ClipboardList, titleKey: "services.whatToBring.workHistory.title", descKey: "services.whatToBring.workHistory.description" },
              { icon: HardHat, titleKey: "services.whatToBring.steelToeBoots.title", descKey: "services.whatToBring.steelToeBoots.description" },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.titleKey} delay={i * 0.05}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 bg-navy-deep/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-navy-deep" />
                    </div>
                    <h3 className="text-base font-bold text-slate-800 mb-1">{t(item.titleKey)}</h3>
                    <p className="text-slate-500 text-sm">{t(item.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recruiting Process */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="text-center mb-16">
            <SectionLabel className="mb-3">{t("services.recruitingProcess.sectionLabel")}</SectionLabel>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-4 font-[family-name:var(--font-heading)]">{t("services.recruitingProcess.title")}</h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">{t("services.recruitingProcess.subtitle")}</p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={step.titleKey} delay={i * 0.05}>
                  <div className="relative bg-slate-50 border border-slate-200 rounded-lg p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-action text-white rounded-full flex items-center justify-center text-sm font-bold font-[family-name:var(--font-mono)]">
                      {i + 1}
                    </div>
                    <div className="w-14 h-14 bg-navy-deep/10 rounded-xl flex items-center justify-center mx-auto mb-5 mt-2">
                      <Icon className="w-7 h-7 text-navy-deep" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{t(step.titleKey)}</h3>
                    <p className="text-slate-500 text-sm">{t(step.descKey)}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safety & Compliance */}
      <section className="bg-emerald-50 border-y border-emerald-200 py-10">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {[
              { icon: Shield, labelKey: "about.safety.oshaCompliant" },
              { icon: ShieldCheck, labelKey: "about.safety.drugFree" },
              { icon: GraduationCap, labelKey: "about.safety.safetyTraining" },
              { icon: HeartHandshake, labelKey: "about.safety.workersComp" },
            ].map((badge) => {
              const Icon = badge.icon;
              return (
                <span key={badge.labelKey} className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm">
                  <Icon className="w-5 h-5 text-emerald-600" />
                  {t(badge.labelKey)}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface py-20 sm:py-24">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-orange-action/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="scale">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-[family-name:var(--font-heading)]">{t("services.cta.title")}</h2>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">{t("services.cta.subtitle")}</p>
            <Button href="/contact" variant="orange" size="lg">
              {t("common.contactUsToday")} <ArrowRight className="w-5 h-5" />
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
