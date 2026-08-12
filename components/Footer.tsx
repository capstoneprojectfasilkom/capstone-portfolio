"use client";

import Image from "next/image";
import Link from "next/link";
import { Globe, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-[#222222] text-white pt-16 pb-12 border-t border-[#8c9baa]/30">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Official Brand & Uploaded FIK Logo */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-auto flex items-center justify-center shrink-0">
                <Image
                  src="/images/header-logo-fik-2.webp"
                  alt="Fakultas Ilmu Komputer Universitas Jember"
                  width={220}
                  height={44}
                  unoptimized
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-bold text-white text-base tracking-tight truncate">
                  {t.nav.brandTitle}
                </span>
                <span className="text-xs text-[#8c9baa] truncate">
                  {t.nav.brandSubtitle}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md break-words">
              {t.footer.brandDesc}
            </p>

            {/* GitHub Link */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/capstoneprojectfasilkom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-slate-300 hover:bg-[#0080ff] hover:text-white transition-colors shrink-0"
                aria-label="GitHub Capstone Fasilkom UNEJ"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li>
                <Link href="#process" className="hover:text-[#0080ff] transition-colors">
                  {t.nav.process}
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="hover:text-[#0080ff] transition-colors">
                  {t.nav.portfolio}
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="hover:text-[#0080ff] transition-colors">
                  {t.nav.testimonials}
                </Link>
              </li>
              <li>
                <Link href="#whyChooseUs" className="hover:text-[#0080ff] transition-colors">
                  {t.nav.whyChooseUs}
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-[#0080ff] transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Official Faculty Link & Address */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
              {t.footer.facultyTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#0080ff] shrink-0 mt-0.5" />
                <span className="break-words">{t.footer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#0080ff] shrink-0" />
                <a href={`mailto:${t.footer.email}`} className="hover:underline break-all">
                  {t.footer.email}
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://ilkom.unej.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0080ff] text-white font-semibold text-xs rounded-full hover:bg-[#0050ff] transition-colors break-words max-w-full"
                >
                  <span>{t.footer.facultyBtn}</span>
                  <Globe className="w-3.5 h-3.5 shrink-0 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#8c9baa] gap-4 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <div className="flex items-center gap-6">
            <span>{t.footer.privacy}</span>
            <span>{t.footer.subBrand}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
