"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MapPin, Mail, Linkedin, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import { getTeamMemberBySlug, team } from "@/data/team";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { useTranslation } from "@/context/LanguageContext";
import { notFound } from "next/navigation";

const tierLabel: Record<string, string> = {
  owner: "Owner",
  executive: "Executive Leadership",
  coordinator: "Operations Team",
  manager: "Branch & Regional Management",
};

export default function TeamMemberPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();
  const member = getTeamMemberBySlug(slug);

  if (!member) {
    notFound();
  }

  // Find adjacent team members for prev/next navigation
  const currentIndex = team.findIndex((m) => m.slug === slug);
  const prev = currentIndex > 0 ? team[currentIndex - 1] : null;
  const next = currentIndex < team.length - 1 ? team[currentIndex + 1] : null;

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-slate-surface via-navy-deep to-slate-surface overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-orange-action/5 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          {/* Breadcrumb */}
          <ScrollReveal>
            <nav className="flex items-center gap-2 text-sm text-slate-400 mb-10">
              <Link href="/about" className="hover:text-white transition-colors inline-flex items-center gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                {t("about.hero.title")}
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
              <span className="text-slate-300">{member.name}</span>
            </nav>
          </ScrollReveal>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            {/* Photo */}
            <ScrollReveal direction="scale">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={224}
                    height={224}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 w-14 h-14 bg-orange-action rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl font-bold font-[family-name:var(--font-heading)]">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Info */}
            <ScrollReveal className="flex-1 text-center md:text-left">
              <p className="text-orange-action text-sm font-semibold uppercase tracking-wider mb-2">
                {tierLabel[member.tier]}
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-2 font-[family-name:var(--font-heading)]">
                {member.name}
              </h1>
              <p className="text-xl text-blue-200 font-medium mb-4">{member.title}</p>

              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-slate-400">
                {member.location && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-orange-action" />
                    {member.location}
                  </span>
                )}
                {member.email && (
                  <a href={`mailto:${member.email}`} className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    <Mail className="w-4 h-4 text-orange-action" />
                    {member.email}
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
                    <Linkedin className="w-4 h-4 text-orange-action" />
                    LinkedIn
                  </a>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Bio Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main bio */}
            <div className="flex-1">
              <ScrollReveal>
                <h2 className="text-2xl font-bold text-slate-800 mb-6 font-[family-name:var(--font-heading)]">
                  About {member.name.split(" ")[0]}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {member.bio}
                </p>
              </ScrollReveal>
            </div>

            {/* Sidebar */}
            {member.specialties && member.specialties.length > 0 && (
              <div className="lg:w-72 shrink-0">
                <ScrollReveal delay={0.1}>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                    <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Areas of Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((s) => (
                        <span
                          key={s}
                          className="inline-block bg-white border border-slate-200 rounded-full px-3 py-1.5 text-sm font-medium text-slate-700"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Prev / Next Navigation */}
      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-stretch">
            {/* Previous */}
            <div className="flex-1 border-r border-slate-200">
              {prev ? (
                <Link
                  href={`/about/${prev.slug}`}
                  className="group flex items-center gap-4 py-8 pr-6 hover:bg-white transition-colors h-full"
                >
                  <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-orange-action transition-colors shrink-0" />
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Previous</p>
                    <p className="font-semibold text-slate-800 group-hover:text-orange-action transition-colors truncate">{prev.name}</p>
                    <p className="text-sm text-slate-500 truncate">{prev.title}</p>
                  </div>
                </Link>
              ) : (
                <div className="py-8" />
              )}
            </div>

            {/* Next */}
            <div className="flex-1">
              {next ? (
                <Link
                  href={`/about/${next.slug}`}
                  className="group flex items-center justify-end gap-4 py-8 pl-6 hover:bg-white transition-colors text-right h-full"
                >
                  <div className="min-w-0">
                    <p className="text-xs text-slate-400 uppercase tracking-wider mb-1">Next</p>
                    <p className="font-semibold text-slate-800 group-hover:text-orange-action transition-colors truncate">{next.name}</p>
                    <p className="text-sm text-slate-500 truncate">{next.title}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-orange-action transition-colors shrink-0" />
                </Link>
              ) : (
                <div className="py-8" />
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Back to Team CTA */}
      <section className="py-12 bg-white border-t border-slate-100">
        <div className="text-center">
          <Link
            href="/about#leadership"
            className="inline-flex items-center gap-2 text-navy-deep hover:text-orange-action font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            View Full Team
          </Link>
        </div>
      </section>
    </>
  );
}
