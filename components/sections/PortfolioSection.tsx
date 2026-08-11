"use client";

import { useState } from "react";
import Image from "next/image";
import { FolderKanban, ArrowRight, Monitor } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function PortfolioSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState("all");
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  const projects = t.portfolio.projects.map((p) => {
    let catFilter = "web";
    if (p.category === "Mobile App") catFilter = "mobile";
    else if (p.category === "Enterprise System") catFilter = "enterprise";
    else if (p.category === "GIS & Data Analytics") catFilter = "analytics";
    else if (p.category === "System Integration") catFilter = "integration";

    return {
      ...p,
      thumbnail: p.image || `/images/portfolio/project-${p.id}.svg`,
      catFilter,
    };
  });

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.catFilter === filter);

  return (
    <section id="portfolio" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.portfolio.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.portfolio.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.portfolio.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.portfolio.description}
          </p>
        </div>

        {/* Filter Category Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { label: t.portfolio.filterAll, val: "all" },
            { label: "Web Application", val: "web" },
            { label: "Mobile App", val: "mobile" },
            { label: "Enterprise System", val: "enterprise" },
            { label: "GIS & Analytics", val: "analytics" },
            { label: "System Integration", val: "integration" },
          ].map((btn) => (
            <button
              key={btn.val}
              onClick={() => setFilter(btn.val)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                filter === btn.val
                  ? "bg-ink text-white shadow-sm"
                  : "bg-white border border-[#8c9baa] text-[#222222] hover:bg-slate-50"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid (Showing all 17 real projects with UI preview graphics) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const isImageFailed = failedImages[project.id] || !project.thumbnail;

            return (
              <div
                key={project.id}
                className="rounded-[24px] border border-[#8c9baa] bg-white overflow-hidden hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between group min-h-[390px]"
              >
                <div>
                  {/* UI Preview Container */}
                  <div className="relative h-48 w-full bg-slate-900 border-b border-[#8c9baa]/30 overflow-hidden flex items-center justify-center">
                    {!isImageFailed ? (
                      <Image
                        src={project.thumbnail}
                        alt={`Preview UI ${project.title}`}
                        fill
                        onError={() => handleImageError(project.id)}
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      /* Clean Web App UI Card Fallback */
                      <div className="w-full h-full p-4 flex flex-col justify-between bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
                        <div className="flex items-center justify-between border-b border-white/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-rose-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                          </div>
                          <Monitor className="w-4 h-4 text-[#0080ff]" />
                        </div>
                        <div className="py-2">
                          <div className="text-[10px] text-[#0080ff] font-bold uppercase tracking-wider mb-1">
                            {project.category}
                          </div>
                          <div className="text-sm font-bold text-white line-clamp-2">
                            {project.title}
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-ink border border-[#8c9baa]/30 shadow-sm z-10">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="text-xs font-semibold text-[#0080ff] mb-1 truncate flex items-center gap-1.5">
                      <FolderKanban className="w-3.5 h-3.5 shrink-0" />
                      <span>{t.portfolio.clientPrefix}: {project.client}</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-ink mb-2 line-clamp-2 group-hover:text-[#0080ff] transition-colors break-words">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#636f7b] leading-relaxed break-words">
                      {project.result}
                    </p>
                  </div>
                </div>

                <div className="px-6 py-4 border-t border-[#8c9baa]/20 bg-slate-50/50 flex items-center justify-between text-xs font-semibold text-[#0080ff]">
                  <span>{project.metrics || t.portfolio.caseDetail}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform ml-2 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
