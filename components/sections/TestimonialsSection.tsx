"use client";

import { Building2, Quote, Star, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.testimonials.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.testimonials.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.testimonials.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.testimonials.description}
          </p>
        </div>

        {/* Testimonials Grid (6 Partner Testimonials) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.testimonials.items.map((item, idx) => (
            <div
              key={idx}
              className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-8 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[300px]"
            >
              <div>
                {/* Header: Rating Stars & Verified Partner Chip */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 shrink-0" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-[#c5e0fb]/30 text-[#0080ff] text-[11px] font-bold rounded-full">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Partner
                  </span>
                </div>

                <Quote className="w-8 h-8 text-[#0080ff] mb-3 opacity-30 shrink-0" />

                <p className="text-xs sm:text-sm text-[#222222] leading-relaxed italic mb-6 break-words">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Card Footer: Mitra / Partner Name & Sector (No Personal Names) */}
              <div className="pt-5 border-t border-[#8c9baa]/20 flex items-center gap-3.5 min-w-0">
                <div className="w-11 h-11 rounded-full bg-[#c5e0fb] flex items-center justify-center text-[#0080ff] shrink-0 group-hover:scale-105 transition-transform">
                  <Building2 className="w-5.5 h-5.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-sm font-bold text-ink truncate group-hover:text-[#0080ff] transition-colors">
                    {item.instansi}
                  </h3>
                  <p className="text-xs text-[#636f7b] font-medium truncate">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
