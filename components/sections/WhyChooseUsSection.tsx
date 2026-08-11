"use client";

import { RefreshCcw, ShieldAlert, DollarSign, FileCode2 } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const pillarIcons = [RefreshCcw, ShieldAlert, DollarSign, FileCode2];
const bgColors = ["bg-[#fff3c4]", "bg-[#c8f0d8]", "bg-[#ffd6e0]", "bg-[#e0d4ff]"];
const iconColors = ["text-amber-800", "text-emerald-800", "text-rose-800", "text-purple-800"];

export default function WhyChooseUsSection() {
  const { t } = useLanguage();

  return (
    <section id="whyChooseUs" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.whyChooseUs.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.whyChooseUs.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.whyChooseUs.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.whyChooseUs.description}
          </p>
        </div>

        {/* 2x2 Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.whyChooseUs.pillars.map((adv, idx) => {
            const IconComp = pillarIcons[idx % pillarIcons.length];
            return (
              <div
                key={idx}
                className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-10 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[280px]"
              >
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full ${bgColors[idx % bgColors.length]} flex items-center justify-center ${iconColors[idx % iconColors.length]} shrink-0`}>
                      <IconComp className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>
                    <span className="text-xs font-bold tracking-wider text-[#0080ff] uppercase truncate">
                      PILAR 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-ink mb-4 tracking-tight group-hover:text-[#0080ff] transition-colors break-words">
                    {adv.title}
                  </h3>
                  <p className="text-xs sm:text-base text-[#636f7b] leading-relaxed break-words">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#8c9baa]/20 flex items-center justify-between text-xs font-bold text-ink">
                  <span className="truncate">{t.whyChooseUs.footerValidation}</span>
                  <span className="text-[#0080ff] shrink-0 ml-2">✓ Validated</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
