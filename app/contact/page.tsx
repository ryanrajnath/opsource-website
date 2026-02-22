"use client";

import { Phone, Mail, MapPin, Clock, ExternalLink, MessageSquare } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { QuickApplyCard } from "@/components/ui/QuickApplyCard";
import { company } from "@/data/company";
import { EXTERNAL_URLS } from "@/lib/constants";
import { useTranslation } from "@/context/LanguageContext";

const infoCards = [
  { icon: Phone, labelKey: "contact.infoCards.callUs", value: company.phone, href: `tel:${company.phoneTel}` },
  { icon: Mail, labelKey: "contact.infoCards.emailUs", value: company.email, href: `mailto:${company.email}` },
  { icon: MapPin, labelKey: "contact.infoCards.visitUs", value: company.address.full, href: `https://maps.google.com/?q=${encodeURIComponent(company.address.full)}` },
  { icon: Clock, labelKey: "contact.infoCards.hours", value: `${company.hours.weekdays}\n${company.hours.friday}`, href: undefined as string | undefined },
];

const quickLinks = [
  { labelKey: "contact.quickLinks.searchOpenJobs", href: EXTERNAL_URLS.jobPortal, external: true },
  { labelKey: "contact.quickLinks.employeePortal", href: EXTERNAL_URLS.employeePortal, external: true },
  { labelKey: "contact.quickLinks.directHire", href: EXTERNAL_URLS.directHire, external: true },
];

export default function ContactPage() {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-action/5 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 font-[family-name:var(--font-heading)]">{t("contact.hero.title")}</h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">{t("contact.hero.subtitle")}</p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.labelKey} delay={i * 0.05}>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                    <div className="w-12 h-12 bg-navy-deep/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-navy-deep" />
                    </div>
                    <h3 className="font-bold text-slate-800 mb-1">{t(card.labelKey)}</h3>
                    {card.href ? (
                      <a href={card.href} target={card.href.startsWith("http") ? "_blank" : undefined} rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined} className="text-navy-deep text-sm hover:text-orange-action transition-colors">
                        {card.value}
                      </a>
                    ) : (
                      <p className="text-slate-500 text-sm whitespace-pre-line">{card.value}</p>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Text to Apply Banner */}
          <ScrollReveal className="mb-20">
            <div className="bg-gradient-to-r from-navy-deep to-slate-surface rounded-xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="text-white text-center sm:text-left">
                <h2 className="text-3xl sm:text-4xl font-bold mb-2 font-[family-name:var(--font-heading)]">{t("contact.textBanner.title")}</h2>
                <p className="text-blue-200 text-sm">{t("contact.textBanner.subtitle")}</p>
              </div>
              <a
                href="sms:8668708133?body=Hi%2C%20I%27m%20looking%20for%20work%20in%20"
                className="inline-flex items-center gap-2 bg-orange-action hover:bg-orange-action-dark text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors shadow-[0_4px_20px_rgba(234,88,12,0.3)] shrink-0"
              >
                <MessageSquare className="w-6 h-6" />
                {t("contact.textBanner.cta")}
              </a>
            </div>
          </ScrollReveal>

          {/* Form + Quick Links Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="bg-white border border-slate-200 rounded-xl p-8 sm:p-10 shadow-sm">
                  <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mb-2 font-[family-name:var(--font-heading)]">{t("contact.form.title")}</h2>
                  <div className="w-16 h-1 bg-orange-action rounded-full mb-8" />
                  <ContactForm />
                </div>
              </ScrollReveal>
            </div>

            {/* Sidebar: Quick Apply + Quick Links + Immediate Help */}
            <div>
              <ScrollReveal direction="right">
                <div className="mb-8">
                  <QuickApplyCard />
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-8 mb-8">
                  <h3 className="text-lg font-bold text-slate-800 mb-6 font-[family-name:var(--font-heading)]">{t("contact.quickLinks.title")}</h3>
                  <div className="space-y-4">
                    {quickLinks.map((link) => (
                      <a
                        key={link.labelKey}
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 text-navy-deep hover:text-orange-action transition-colors group"
                      >
                        <div className="w-9 h-9 bg-navy-deep/10 rounded-lg flex items-center justify-center group-hover:bg-orange-action/10 transition-colors">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                        <span className="font-semibold text-sm">{t(link.labelKey)}</span>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-navy-deep to-slate-surface rounded-xl p-8 text-white">
                  <h3 className="text-lg font-bold mb-3 font-[family-name:var(--font-heading)]">{t("contact.immediateHelp.title")}</h3>
                  <p className="text-blue-200 text-sm mb-6">{t("contact.immediateHelp.subtitle")}</p>
                  <a
                    href={`tel:${company.phoneTel}`}
                    className="inline-flex items-center gap-2 bg-orange-action hover:bg-orange-action-dark text-white px-5 py-3 rounded-lg font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {company.phone}
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
