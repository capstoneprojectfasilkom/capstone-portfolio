"use client";

import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-[#0080ff] text-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
          {t.stats.map((stat, idx) => (
            <div key={idx} className="pt-6 lg:pt-0 px-2 sm:px-4">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-lg font-bold text-white mb-1 break-words">
                {stat.label}
              </div>
              <div className="text-xs sm:text-sm text-white/80 font-medium break-words">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
