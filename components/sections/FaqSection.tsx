"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function FaqSection() {
  const { t } = useLanguage();
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.faq.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.faq.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.faq.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.faq.description}
          </p>
        </div>

        {/* Accordion Container */}
        <div className="max-w-3xl mx-auto space-y-4">
          {t.faq.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-[20px] border border-[#8c9baa] bg-white overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-5 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between gap-4 font-bold text-ink text-sm sm:text-lg hover:text-[#0080ff] transition-colors"
                >
                  <span className="flex items-start sm:items-center gap-3 break-words min-w-0 flex-1">
                    <HelpCircle className="w-5 h-5 text-[#0080ff] shrink-0 mt-0.5 sm:mt-0" />
                    <span className="break-words">{item.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8c9baa] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#0080ff]" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-2 text-xs sm:text-base text-[#636f7b] leading-relaxed border-t border-[#8c9baa]/20 animate-in fade-in duration-200 break-words">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
