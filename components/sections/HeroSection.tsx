"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Users,
  ChevronLeft,
  ChevronRight,
  Camera,
} from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const heroSlides = [
  "/images/hero/1.jpeg",
  "/images/hero/2.jpeg",
  "/images/hero/3.jpeg",
  "/images/hero/4.jpeg",
  "/images/hero/5.jpeg",
  "/images/hero/6.jpeg",
];

export default function HeroSection() {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-white">
      {/* Background Soft Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#c5e0fb]/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Top Program Badge */}
        <div className="flex justify-center mb-6">
          <div className="step-badge max-w-full text-center">
            <span className="font-semibold text-ink uppercase tracking-wider">
              {t.hero.badgeProgram}
            </span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa] font-normal truncate">
              {t.hero.badgeFaculty}
            </span>
          </div>
        </div>

        {/* Single H1 Display Headline */}
        <div className="text-center max-w-4xl lg:max-w-5xl mx-auto mb-6">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-ink tracking-tight leading-[1.12] text-balance break-words">
            {t.hero.headline}
          </h1>
        </div>

        {/* Subheadline */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <p className="text-sm sm:text-base md:text-lg text-[#636f7b] leading-relaxed break-words">
            {t.hero.subheadline}
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Link
            href="#contact"
            className="btn-wavy-cta w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-semibold text-white bg-[#0080ff] rounded-[1600px] shadow-custom-glow hover:bg-[#0050ff] transition-all whitespace-nowrap"
          >
            <span>{t.hero.primaryCta}</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </Link>
          <Link
            href="#portfolio"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-ink bg-transparent border border-[#8c9baa] rounded-[1600px] hover:bg-slate-50 transition-all whitespace-nowrap"
          >
            {t.hero.secondaryCta}
          </Link>
        </div>

        {/* Small Trust Line */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-[#8c9baa] mb-16 text-center">
          <CheckCircle className="w-4 h-4 text-[#0080ff] shrink-0" />
          <span className="break-words">{t.hero.trustLine}</span>
        </div>

        {/* Interactive Auto-Sliding Hero Carousel Mockup */}
        <div
          className="relative max-w-4xl mx-auto mt-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative rounded-[24px] border border-[#8c9baa] shadow-custom-lg bg-white overflow-hidden p-2 sm:p-4 group">
            {/* Header: Window Dots + Documentation Note (No Search Bar) */}
            <div className="flex items-center justify-between px-3 py-2 bg-slate-100 rounded-t-[16px] border-b border-[#8c9baa]/30 mb-2">
              <div className="flex items-center gap-1.5 shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1 bg-[#c5e0fb]/40 text-[#0080ff] rounded-full border border-[#0080ff]/20 text-xs font-semibold truncate max-w-[85%] sm:max-w-full">
                <Camera className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{t.hero.docNote}</span>
              </div>
              <div className="w-6 hidden sm:block"></div>
            </div>

            {/* Auto-sliding Pure Image Container */}
            <div className="relative w-full h-[280px] sm:h-[420px] md:h-[500px] rounded-[16px] overflow-hidden bg-slate-100">
              {heroSlides.map((src, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out ${
                    idx === currentSlide
                      ? "opacity-100 scale-100 z-10 pointer-events-auto"
                      : "opacity-0 scale-95 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={src}
                    alt={`Dokumentasi Capstone Project ${idx + 1}`}
                    fill
                    priority={idx === 0}
                    unoptimized
                    className="object-cover object-center w-full h-full rounded-[16px]"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows (Visible on Hover) */}
            <button
              onClick={prevSlide}
              aria-label="Previous Slide"
              className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-ink shadow-custom-lg flex items-center justify-center hover:bg-[#0080ff] hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next Slide"
              className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 text-ink shadow-custom-lg flex items-center justify-center hover:bg-[#0080ff] hover:text-white transition-all opacity-0 group-hover:opacity-100 z-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-3 pb-1">
              {heroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentSlide
                      ? "w-8 bg-[#0080ff]"
                      : "w-2 bg-[#8c9baa]/40 hover:bg-[#8c9baa]"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating Callout Card 1: QA Guarantee */}
          <div className="hidden md:flex absolute -top-6 -left-8 bg-white border border-[#8c9baa] rounded-[12px] p-4 shadow-custom-lg items-center gap-3 max-w-[260px] z-30 pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-[#fff3c4] flex items-center justify-center text-amber-700 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-ink truncate">{t.hero.callout1Title}</div>
              <div className="text-[11px] text-[#636f7b] break-words">{t.hero.callout1Desc}</div>
            </div>
          </div>

          {/* Floating Callout Card 2: Multi-semester continuity */}
          <div className="hidden md:flex absolute -bottom-6 -right-8 bg-white border border-[#8c9baa] rounded-[12px] p-4 shadow-custom-lg items-center gap-3 max-w-[280px] z-30 pointer-events-none">
            <div className="w-10 h-10 rounded-full bg-[#c8f0d8] flex items-center justify-center text-emerald-700 shrink-0">
              <Users className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="text-xs font-bold text-ink truncate">{t.hero.callout2Title}</div>
              <div className="text-[11px] text-[#636f7b] break-words">{t.hero.callout2Desc}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
