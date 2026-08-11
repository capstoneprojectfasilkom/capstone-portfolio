"use client";

import Image from "next/image";
import { ShieldCheck, UserCheck, Code, Paintbrush, Bug, Server } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const memberPhotos = [
  "/images/team/team-1.svg",
  "/images/team/team-2.svg",
  "/images/team/team-3.svg",
  "/images/team/team-4.svg",
  "/images/team/team-5.svg",
  "/images/team/team-6.svg",
  "/images/team/team-7.svg",
];

const memberIcons = [ShieldCheck, UserCheck, Code, Code, Paintbrush, Bug, Server];

export default function TeamSection() {
  const { t } = useLanguage();
  const teamMembers = t.team.members;
  const supervisor = teamMembers[0];

  return (
    <section id="team" className="py-24 bg-white border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.team.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.team.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.team.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.team.description}
          </p>
        </div>

        {/* Advisor Feature Card */}
        <div className="mb-12 rounded-[32px] border-2 border-[#0080ff] bg-gradient-to-r from-blue-50/50 to-white p-6 sm:p-8 flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-white shadow-custom-lg overflow-hidden shrink-0 bg-slate-100">
            <Image
              src={memberPhotos[0]}
              alt={supervisor.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 text-center md:text-left min-w-0">
            <div className="inline-block px-3 py-1 bg-[#0080ff] text-white text-xs font-bold rounded-full mb-2 uppercase">
              {t.team.supervisorBadge}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-ink mb-1 break-words">{supervisor.name}</h3>
            <p className="text-sm font-semibold text-[#0080ff] mb-2">{supervisor.role}</p>
            <p className="text-xs sm:text-sm text-[#636f7b] mb-4 max-w-2xl break-words">
              {t.team.supervisorDesc}
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {supervisor.skills.map((skill, sIdx) => (
                <span key={sIdx} className="px-3 py-1 bg-white border border-[#8c9baa] rounded-full text-xs text-[#222222] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Student Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.slice(1).map((member, idx) => {
            const IconComp = memberIcons[idx + 1] || Code;
            return (
              <div
                key={idx}
                className="rounded-[24px] border border-[#8c9baa] bg-white p-6 hover:shadow-custom-lg transition-all duration-300 flex flex-col justify-between min-h-[260px]"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-14 h-14 rounded-full border border-[#8c9baa] overflow-hidden shrink-0 bg-slate-100">
                      <Image
                        src={memberPhotos[idx + 1] || memberPhotos[0]}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-[10px] font-bold tracking-wider text-[#8c9baa] uppercase truncate">
                        {member.roleGroup}
                      </div>
                      <h4 className="text-base font-bold text-ink truncate">{member.name}</h4>
                      <p className="text-xs font-semibold text-[#0080ff] truncate">{member.role}</p>
                    </div>
                  </div>

                  <p className="text-xs text-[#636f7b] mb-4 bg-slate-50 p-2.5 rounded-lg break-words">
                    {member.batch}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {member.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 bg-slate-100 text-[11px] text-[#222222] rounded-md font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#8c9baa]/20 flex items-center justify-between text-xs text-[#8c9baa]">
                  <span className="truncate">{t.team.footerNote}</span>
                  <IconComp className="w-4 h-4 text-[#0080ff] shrink-0 ml-2" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
