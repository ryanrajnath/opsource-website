"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { company } from "@/data/company";
import { EXTERNAL_URLS } from "@/lib/constants";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-surface text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Logo + SEO + Links */}
          <div>
            <Link href="/" className="mb-6 block">
              <Image
                src={EXTERNAL_URLS.logo}
                alt="OpSource Staffing"
                width={160}
                height={40}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              {t("footer.seoDescription")}
            </p>
            <LanguageToggle variant="dark" />
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">{t("footer.company")}</h4>
                <nav className="space-y-2" aria-label="Company links">
                  <Link href="/about" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("nav.about")}</Link>
                  <Link href="/services" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("nav.services")}</Link>
                  <Link href="/locations" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("nav.locations")}</Link>
                  <Link href="/contact" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("common.contactUs")}</Link>
                </nav>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-3">{t("footer.resources")}</h4>
                <nav className="space-y-2" aria-label="Resource links">
                  <a href={EXTERNAL_URLS.jobPortal} target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("nav.jobPortal")}</a>
                  <a href={EXTERNAL_URLS.employeePortal} target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("nav.employeePortal")}</a>
                  <a href="https://www.opsourcedirect.com" target="_blank" rel="noopener noreferrer" className="block text-slate-400 hover:text-orange-action hover:underline underline-offset-4 transition-colors text-sm">{t("footer.opSourceDirect")}</a>
                </nav>
              </div>
            </div>
          </div>

          {/* Column 2: Corporate Office */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">{t("footer.corporateOffice")}</h3>
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-action mt-0.5 shrink-0" />
                <p>{company.address.street}<br />{company.address.city}, {company.address.state} {company.address.zip}</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-action shrink-0" />
                <a href={`tel:${company.phoneTel}`} className="hover:text-orange-action transition-colors">{company.phone}</a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-orange-action mt-0.5 shrink-0" />
                <p>{company.hours.weekdays}<br />{company.hours.friday}</p>
              </div>
            </div>
          </div>

          {/* Column 3: Social + Quote */}
          <div>
            <h3 className="text-lg font-bold mb-6 font-[family-name:var(--font-heading)]">{t("footer.connectWithUs")}</h3>
            <div className="flex gap-4">
              <a
                href={company.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-action transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={company.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-white/10 rounded-lg flex items-center justify-center hover:bg-orange-action transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <span
                className="w-11 h-11 bg-white/5 rounded-lg flex items-center justify-center text-slate-600 cursor-not-allowed"
                aria-label="Instagram (coming soon)"
                title={t("footer.comingSoon")}
              >
                <Instagram className="w-5 h-5" />
              </span>
            </div>
            <div className="mt-8 p-5 bg-white/5 rounded-lg border border-white/10">
              <p className="text-sm italic text-slate-400 leading-relaxed">
                &ldquo;{company.ceoQuote.text}&rdquo;
              </p>
              <p className="text-orange-action text-sm font-semibold mt-2">
                — {company.ceoQuote.author}, {company.ceoQuote.title}
              </p>
            </div>
          </div>
        </div>

        {/* Mini CTA Row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="http://jobs.opsourcestaffing.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-orange-action text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-orange-action-dark transition-colors"
          >
            {t("common.findAJob")}
          </a>
          <a
            href="tel:8668708133"
            className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-white/10 transition-colors"
          >
            <Phone className="w-4 h-4" />
            (866) 870-8133
          </a>
        </div>

        {/* Copyright + EEO */}
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-slate-500 space-y-2">
          <p>&copy; {new Date().getFullYear()} {t("footer.copyright")}</p>
          <p className="text-xs text-slate-600">
            {t("footer.eeoStatement")}
          </p>
        </div>
      </div>

      {/* Spacer for mobile sticky bottom bar */}
      <div className="h-20 lg:hidden" />
    </footer>
  );
}
