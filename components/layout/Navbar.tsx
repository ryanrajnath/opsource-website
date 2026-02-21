"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown, Phone, Search } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { navigation } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { EXTERNAL_URLS } from "@/lib/constants";
import { useTranslation } from "@/context/LanguageContext";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

const navLabelKeys: Record<string, string> = {
  "About": "nav.about",
  "Locations": "nav.locations",
  "All Locations": "nav.allLocations",
  "Services": "nav.services",
  "All Services": "nav.allServices",
  "Traditional Staffing": "nav.traditionalStaffing",
  "Skilled Trades": "nav.skilledTrades",
  "Direct Hire": "nav.directHire",
  "Payroll Services": "nav.payrollServices",
  "Job Portal": "nav.jobPortal",
  "Employee Portal": "nav.employeePortal",
};

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { scrollY } = useScrollPosition();
  const scrolled = scrollY > 60;
  const { t } = useTranslation();

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300",
        scrolled ? "shadow-[0_4px_20px_rgba(0,0,0,0.1)]" : "shadow-sm"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="flex items-center justify-between h-14"
        >
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={EXTERNAL_URLS.logo}
              alt="OpSource Staffing"
              width={192}
              height={48}
              className="w-auto h-9"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-slate-700">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1 hover:text-navy-deep transition-colors">
                    {t(navLabelKeys[item.label] ?? "") || item.label}
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 transition-transform duration-200",
                        openDropdown === item.label && "rotate-180"
                      )}
                    />
                  </button>
                  {openDropdown === item.label && (
                    <div className="absolute top-full left-0 pt-2 w-56 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-slate-100 py-2">
                      {item.children.map((child, ci) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={cn(
                            "block px-4 py-2 text-sm hover:bg-slate-50 hover:text-navy-deep transition-colors",
                            ci === 0 && "font-semibold border-b border-slate-100 mb-1"
                          )}
                        >
                          {t(navLabelKeys[child.label] ?? "") || child.label}
                        </Link>
                      ))}
                    </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="hover:text-navy-deep transition-colors"
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {t(navLabelKeys[item.label] ?? "") || item.label}
                </Link>
              )
            )}
          </div>

          {/* Dual CTAs + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <Link
              href={EXTERNAL_URLS.jobPortal}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-orange-action text-white text-sm font-semibold px-4 py-2.5 rounded-lg hover:bg-orange-action-dark transition-colors shadow-[0_2px_10px_rgba(234,88,12,0.2)]"
            >
              <Search className="w-4 h-4" />
              {t("common.findAJob")}
            </Link>
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center gap-2 border-2 border-navy-deep text-navy-deep text-sm font-semibold px-4 py-2 rounded-lg hover:bg-navy-deep hover:text-white transition-colors"
            >
              {t("nav.needTalent")}
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navigation.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 rounded-lg hover:bg-slate-50 font-medium"
                    onClick={() => setMobileOpen(false)}
                  >
                    {t(navLabelKeys[item.label] ?? "") || item.label}
                  </Link>
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 rounded-lg hover:bg-slate-50 font-medium"
                  onClick={() => setMobileOpen(false)}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {t(navLabelKeys[item.label] ?? "") || item.label}
                </Link>
              )
            )}
            <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-200">
              <span className="text-sm text-slate-500 font-medium">Language</span>
              <LanguageToggle />
            </div>
            <div className="pt-3 space-y-2">
              <Link
                href={EXTERNAL_URLS.jobPortal}
                target="_blank"
                className="block px-4 py-3 bg-orange-action text-white text-center rounded-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {t("common.findAJob")}
              </Link>
              <Link
                href="/contact"
                className="block px-4 py-3 bg-navy-deep text-white text-center rounded-lg font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                {t("nav.needTalentMobile")}
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-2 flex items-center gap-2">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg bg-slate-100 text-slate-700"
          aria-label={mobileOpen ? t("nav.closeMenu") : t("nav.openMenu")}
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <a
          href="tel:8668708133"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-action text-white font-semibold py-2.5 rounded-lg text-sm shadow-[0_2px_10px_rgba(234,88,12,0.25)]"
        >
          <Phone className="w-4 h-4" />
          {t("common.callUs")}
        </a>
        <Link
          href={EXTERNAL_URLS.jobPortal}
          target="_blank"
          className="flex-1 flex items-center justify-center gap-2 border-2 border-navy-deep text-navy-deep font-semibold py-2.5 rounded-lg text-sm"
        >
          <Search className="w-3.5 h-3.5" />
          {t("common.findAJob")}
        </Link>
      </div>
    </nav>
  );
}
