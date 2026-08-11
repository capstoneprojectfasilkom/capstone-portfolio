"use client";

import { Globe, Smartphone, Layout, Cpu, Wrench } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const serviceIcons = [Globe, Smartphone, Layout, Cpu, Wrench];
const bgColors = ["bg-[#fff3c4]", "bg-[#c8f0d8]", "bg-[#ffd6e0]", "bg-[#e0d4ff]", "bg-[#ffe0c4]"];
const iconColors = ["text-amber-800", "text-emerald-800", "text-rose-800", "text-purple-800", "text-orange-800"];

export default function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.services.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.services.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.services.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.services.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, idx) => {
            const IconComp = serviceIcons[idx % serviceIcons.length];
            return (
              <div
                key={idx}
                className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-8 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[300px]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-6">
                    <div className={`w-12 h-12 rounded-full ${bgColors[idx % bgColors.length]} flex items-center justify-center ${iconColors[idx % iconColors.length]} shrink-0`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold tracking-wider text-[#8c9baa] uppercase truncate">
                      {service.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-ink mb-3 tracking-tight group-hover:text-[#0080ff] transition-colors break-words">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#636f7b] leading-relaxed break-words">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#8c9baa]/20 flex items-center justify-between text-xs font-semibold text-[#0080ff]">
                  <span>{t.services.consultAction}</span>
                  <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                </div>
              </div>
            );
          })}

          {/* CTA Box in Grid */}
          <div className="rounded-[32px] border border-[#0080ff] bg-[#0080ff] text-white p-6 sm:p-8 flex flex-col justify-between shadow-custom-glow min-h-[300px]">
            <div>
              <div className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full mb-4">
                {t.services.customTag}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 break-words">
                {t.services.customTitle}
              </h3>
              <p className="text-sm opacity-90 leading-relaxed break-words">
                {t.services.customDesc}
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center justify-center px-6 py-3 bg-white text-[#0080ff] font-bold text-sm rounded-[1600px] hover:bg-slate-100 transition-colors whitespace-nowrap"
            >
              {t.services.customCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
