"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.process, href: "#process" },
    { label: t.nav.portfolio, href: "#portfolio" },
    { label: t.nav.testimonials, href: "#testimonials" },
    { label: t.nav.whyChooseUs, href: "#whyChooseUs" },
    { label: t.nav.faq, href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-custom-lg py-3" : "bg-white/90 backdrop-blur-sm py-4 sm:py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
        {/* Uploaded Header Logo FIK + Brand Subtitle */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          <div className="relative h-10 sm:h-11 w-auto flex items-center justify-center shrink-0">
            <Image
              src="/images/header-logo-fik-2.webp"
              alt="Fakultas Ilmu Komputer Universitas Jember"
              width={220}
              height={44}
              priority
              unoptimized
              className="h-10 sm:h-11 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="h-7 w-[1px] bg-[#8c9baa]/30 hidden md:block"></div>
          <div className="hidden md:flex flex-col min-w-0">
            <span className="font-bold text-ink text-sm tracking-tight leading-tight group-hover:text-[#0080ff] transition-colors truncate">
              {t.nav.brandTitle}
            </span>
            <span className="text-[11px] text-[#636f7b] font-medium tracking-wide truncate">
              {t.nav.brandSubtitle}
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden xl:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#222222] hover:text-[#0080ff] transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Actions: Language Switcher + Primary CTA */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          {/* Language Switcher Pill */}
          <div className="flex items-center bg-slate-100 p-1 rounded-full border border-[#8c9baa]/40 text-xs font-bold">
            <button
              onClick={() => setLang("id")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "id"
                  ? "bg-[#0080ff] text-white shadow-sm"
                  : "text-[#636f7b] hover:text-ink"
              }`}
              aria-label="Bahasa Indonesia"
            >
              ID
            </button>
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 rounded-full transition-all ${
                lang === "en"
                  ? "bg-[#0080ff] text-white shadow-sm"
                  : "text-[#636f7b] hover:text-ink"
              }`}
              aria-label="English"
            >
              EN
            </button>
          </div>

          {/* Primary CTA */}
          <Link
            href="#contact"
            className="btn-wavy-cta inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0080ff] rounded-[1600px] shadow-custom-glow hover:bg-[#0050ff] transition-all whitespace-nowrap"
          >
            <span>{t.nav.primaryCta}</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </Link>
        </div>

        {/* Mobile Actions Container */}
        <div className="flex items-center gap-2 sm:hidden shrink-0">
          {/* Mobile Language Switcher */}
          <button
            onClick={() => setLang(lang === "id" ? "en" : "id")}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-[#8c9baa] bg-slate-50 text-xs font-bold text-ink"
            aria-label="Switch Language"
          >
            <Globe className="w-3.5 h-3.5 text-[#0080ff]" />
            <span className="uppercase">{lang}</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[#8c9baa] text-ink hover:bg-slate-50"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#8c9baa] px-6 py-6 shadow-xl animate-in slide-in-from-top-4">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#222222] hover:text-[#0080ff] py-1 border-b border-slate-100"
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile Language Selection Row */}
            <div className="flex items-center justify-between py-2 border-b border-slate-100">
              <span className="text-xs font-bold text-[#8c9baa] uppercase">Pilih Bahasa / Language</span>
              <div className="flex items-center bg-slate-100 p-1 rounded-full border border-[#8c9baa]/40 text-xs font-bold">
                <button
                  onClick={() => setLang("id")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    lang === "id" ? "bg-[#0080ff] text-white" : "text-[#636f7b]"
                  }`}
                >
                  ID
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1 rounded-full transition-all ${
                    lang === "en" ? "bg-[#0080ff] text-white" : "text-[#636f7b]"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>

            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-wavy-cta inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0080ff] rounded-[1600px] mt-2"
            >
              <span>{t.nav.primaryCta}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
