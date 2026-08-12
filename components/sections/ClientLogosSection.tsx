"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ClientLogosSection() {
  const { t } = useLanguage();

  return (
    <section id="mitra" className="py-20 sm:py-28 border-y border-slate-200/80 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] relative overflow-hidden">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#0080ff]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-blue-600/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-[#0080ff] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <span>{t.clients.badgeTag}</span>
            <span className="opacity-40">•</span>
            <span>{t.clients.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4 text-balance break-words">
            {t.clients.headline}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed break-words">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Enhanced Partner Cards Grid (Displaying ONLY Logo & Name) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {t.clients.items.map((client, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl border border-slate-200/80 hover:border-[#0080ff]/40 p-5 sm:p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/[0.07] hover:-translate-y-1.5 overflow-hidden cursor-pointer min-h-[170px] sm:min-h-[190px]"
            >
              {/* Subtle card glow overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              {/* Logo Container */}
              <div className="relative w-full h-20 sm:h-24 flex items-center justify-center p-2 mb-3">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={140}
                  height={80}
                  className="max-h-full max-w-full w-auto h-auto object-contain filter transition-all duration-300 group-hover:scale-110 drop-shadow-sm"
                  unoptimized
                />
              </div>

              {/* Partner Name Label */}
              <h3 className="relative z-10 text-xs sm:text-sm font-bold text-slate-800 tracking-tight leading-snug group-hover:text-[#0080ff] transition-colors duration-300 line-clamp-2">
                {client.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
