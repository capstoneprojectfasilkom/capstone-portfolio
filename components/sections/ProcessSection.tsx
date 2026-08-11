"use client";

import { Search, Users, Code2, Rocket, ShieldCheck, Trophy, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const icons = [Search, Users, Code2, Rocket, ShieldCheck, Trophy];
const bgColors = [
  "bg-[#fff3c4]", // 1. Requirement
  "bg-[#c8f0d8]", // 2. Team
  "bg-[#ffd6e0]", // 3. Sprint
  "bg-[#c5e0fb]", // 4. Deployment
  "bg-[#e0d4ff]", // 5. HKI IP
  "bg-[#ffe0c4]", // 6. Expo Showcase
];
const iconColors = [
  "text-amber-800",
  "text-emerald-800",
  "text-rose-800",
  "text-blue-800",
  "text-indigo-800",
  "text-orange-800",
];

export default function ProcessSection() {
  const { t } = useLanguage();

  return (
    <section id="process" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.process.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.process.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.process.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.process.description}
          </p>
        </div>

        {/* 6-Step Process Grid (3 columns x 2 rows) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {t.process.steps.map((item, idx) => {
            const IconComp = icons[idx % icons.length];
            return (
              <div
                key={idx}
                className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-8 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[290px]"
              >
                <div>
                  {/* Step Header Badge */}
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className="step-badge max-w-[80%] min-w-0">
                      <span className="font-bold text-[#0080ff] shrink-0">STEP {item.step}</span>
                      <span className="text-[#8c9baa]">•</span>
                      <span className="text-xs text-[#636f7b] font-medium truncate">{item.badgeLabel}</span>
                    </div>
                    {/* Pastel Icon Circle */}
                    <div
                      className={`w-11 h-11 rounded-full ${bgColors[idx % bgColors.length]} flex items-center justify-center ${iconColors[idx % iconColors.length]} shrink-0 group-hover:scale-110 transition-transform`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg sm:text-xl font-bold text-ink mb-3 tracking-tight break-words">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#636f7b] leading-relaxed break-words">
                    {item.description}
                  </p>
                </div>

                {/* Key Highlight Footnote */}
                <div className="mt-6 pt-4 border-t border-[#8c9baa]/30 flex items-center justify-between text-xs font-semibold text-[#0080ff]">
                  <span className="truncate">{t.process.standardFlow}</span>
                  <span className="shrink-0 ml-2">→</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Full-width Key Differentiator Banner: Multi-semester Guarantee */}
        <div className="rounded-[32px] border-2 border-[#0080ff] bg-[#c5e0fb]/20 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#0080ff] text-white text-xs font-bold rounded-full mb-3 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.process.keyDiffTag}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-2 break-words">
              {t.process.keyDiffTitle}
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-[#636f7b] leading-relaxed break-words">
              {t.process.keyDiffDesc}
            </p>
          </div>
          <div className="shrink-0 self-stretch md:self-auto flex items-center">
            <span className="w-full md:w-auto inline-block text-center px-6 py-3 bg-[#0080ff] text-white text-xs sm:text-sm font-bold rounded-full shadow-md">
              {t.process.keyDiffBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
