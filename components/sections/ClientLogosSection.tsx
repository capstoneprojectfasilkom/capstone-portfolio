"use client";

import {
  Landmark,
  Coffee,
  HeartPulse,
  Stethoscope,
  Building2,
  ShieldCheck,
  BarChart3,
  GraduationCap,
  Store,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

// Industry icon mappings for each of the 9 mitra
const partnerIcons = [
  { icon: Store, bg: "bg-[#c5e0fb]", color: "text-[#0080ff]" }, // KPRI UNEJ (Koperasi)
  { icon: Coffee, bg: "bg-[#ffe0c4]", color: "text-amber-800" }, // Kopi Raisa (UMKM/Coffee)
  { icon: Landmark, bg: "bg-[#fff3c4]", color: "text-amber-900" }, // BAPPEDA Jember (Pemda)
  { icon: HeartPulse, bg: "bg-[#c8f0d8]", color: "text-emerald-800" }, // RSD Balung (RSUD)
  { icon: Stethoscope, bg: "bg-[#c8f0d8]", color: "text-teal-800" }, // RSD Kalisat (RSUD)
  { icon: Building2, bg: "bg-slate-200", color: "text-slate-800" }, // Nusantara Tama (Industri)
  { icon: ShieldCheck, bg: "bg-[#e0d4ff]", color: "text-indigo-800" }, // SPI UNEJ (Audit/Internal)
  { icon: BarChart3, bg: "bg-[#c5e0fb]", color: "text-blue-900" }, // BAPPERIDA Lumajang (Riset & Pemda)
  { icon: GraduationCap, bg: "bg-[#ffd6e0]", color: "text-rose-800" }, // FKIP UNEJ (Fakultas)
];

export default function ClientLogosSection() {
  const { t } = useLanguage();

  return (
    <section id="mitra" className="py-20 sm:py-24 border-y border-[#8c9baa]/30 bg-[#f8fafc]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.clients.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.clients.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.clients.headline}
          </h2>
          <p className="text-sm sm:text-base text-[#636f7b] break-words">
            {t.clients.subtitle}
          </p>
        </div>

        {/* 9 Cards Grid (3x3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.clients.items.map((client, idx) => {
            const iconObj = partnerIcons[idx % partnerIcons.length];
            const IconComp = iconObj.icon;

            return (
              <div
                key={idx}
                className="rounded-[24px] border border-[#8c9baa] bg-white p-6 sm:p-7 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[210px]"
              >
                <div>
                  {/* Card Top Row: Industry Icon Badge + Category Tag */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    {/* Pastel Industry Icon Badge */}
                    <div
                      className={`w-12 h-12 rounded-full ${iconObj.bg} flex items-center justify-center ${iconObj.color} shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="px-3 py-1 bg-slate-100 border border-[#8c9baa]/30 text-[#0080ff] text-[11px] font-bold rounded-full uppercase tracking-wider shrink-0">
                      {client.tag}
                    </span>
                  </div>

                  {/* Partner Title & Description */}
                  <h3 className="text-lg font-bold text-ink mb-1 group-hover:text-[#0080ff] transition-colors break-words">
                    {client.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#636f7b] leading-relaxed break-words">
                    {client.desc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="mt-5 pt-4 border-t border-[#8c9baa]/20 flex items-center justify-between text-xs text-[#8c9baa]">
                  <span className="flex items-center gap-1.5 font-medium text-[#636f7b]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0080ff]" />
                    Mitra Resmi Capstone
                  </span>
                  <span className="text-[11px] text-[#0080ff] font-bold">Verified</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
