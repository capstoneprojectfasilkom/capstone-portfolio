"use client";

import { useState } from "react";
import { Send, Mail, MapPin, CheckCircle2, Clock } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export default function ContactSection() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    projectNeed: t.contact.serviceOptions[0],
    contact: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(
      `[Pengajuan Proyek Capstone] ${formData.institution} - ${formData.name}`
    );
    const body = encodeURIComponent(
      `Halo Tim Capstone Project Fasilkom UNEJ,\n\n` +
        `Berikut adalah detail pengajuan proyek kami:\n\n` +
        `• Nama Penanggung Jawab: ${formData.name}\n` +
        `• Instansi / Perusahaan: ${formData.institution}\n` +
        `• Kebutuhan Layanan: ${formData.projectNeed}\n` +
        `• Kontak Balasan: ${formData.contact}\n\n` +
        `• Deskripsi Singkat / Kebutuhan Proyek:\n${formData.message || "-"}\n\n` +
        `Terima kasih.`
    );

    // Trigger user's mail client directed to official email
    window.location.href = `mailto:capstoneproject.fasilkom@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-[#f8fafc] border-b border-[#8c9baa]/20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="step-badge mb-4">
            <span className="font-semibold text-ink uppercase">{t.contact.badgeTag}</span>
            <span className="text-[#8c9baa]">•</span>
            <span className="text-[#8c9baa]">{t.contact.badgeSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight mb-4 text-balance break-words">
            {t.contact.headline}
          </h2>
          <p className="text-base text-[#636f7b] break-words">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Official Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-8 shadow-custom-lg">
              <h3 className="text-xl sm:text-2xl font-bold text-ink mb-6 break-words">{t.contact.infoTitle}</h3>

              <div className="space-y-6">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#c5e0fb]/50 text-[#0080ff] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-ink">{t.contact.locTitle}</h4>
                    <p className="text-xs sm:text-sm text-[#636f7b] leading-relaxed whitespace-pre-line break-words">
                      {t.contact.locAddress}
                    </p>
                  </div>
                </div>

                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-full bg-[#ffd6e0]/50 text-rose-700 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="text-sm font-bold text-ink">{t.contact.emailTitle}</h4>
                    <a
                      href={`mailto:${t.contact.emailAddress}`}
                      className="text-xs sm:text-sm font-bold text-[#0080ff] hover:underline break-all"
                    >
                      {t.contact.emailAddress}
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#8c9baa]/30">
                <div className="text-xs font-bold text-[#8c9baa] uppercase mb-1">{t.contact.workHoursTag}</div>
                <div className="text-xs text-[#636f7b] font-medium">{t.contact.workHoursVal}</div>
              </div>
            </div>

            {/* Quick Response Banner */}
            <div className="rounded-[24px] bg-[#0080ff] text-white p-6 shadow-custom-glow flex items-center gap-4">
              <Clock className="w-8 h-8 shrink-0" />
              <div className="min-w-0">
                <div className="text-sm font-bold truncate">{t.contact.quickBannerTitle}</div>
                <div className="text-xs opacity-90 break-words">{t.contact.quickBannerDesc}</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Form */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] border border-[#8c9baa] bg-white p-6 sm:p-10 shadow-custom-lg">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-ink">{t.contact.successTitle}</h3>
                  <p className="text-sm text-[#636f7b] max-w-md mx-auto break-words">
                    {t.contact.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-[#0080ff] text-white font-bold text-sm rounded-full hover:bg-[#0050ff] transition-colors"
                  >
                    {t.contact.resubmitBtn}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-bold text-ink mb-1">{t.contact.formTitle}</h3>
                  <p className="text-xs text-[#636f7b] mb-6 break-words">
                    {t.contact.formSubtitle}
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase mb-2">
                      {t.contact.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.namePlaceholder}
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#8c9baa] text-sm text-ink focus:outline-none focus:border-[#0080ff] focus:ring-1 focus:ring-[#0080ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase mb-2">
                      {t.contact.instLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.instPlaceholder}
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#8c9baa] text-sm text-ink focus:outline-none focus:border-[#0080ff] focus:ring-1 focus:ring-[#0080ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase mb-2">
                      {t.contact.serviceLabel}
                    </label>
                    <select
                      value={formData.projectNeed}
                      onChange={(e) => setFormData({ ...formData, projectNeed: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#8c9baa] text-sm text-ink focus:outline-none focus:border-[#0080ff] focus:ring-1 focus:ring-[#0080ff] bg-white"
                    >
                      {t.contact.serviceOptions.map((opt, idx) => (
                        <option key={idx} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase mb-2">
                      {t.contact.contactLabel}
                    </label>
                    <input
                      type="text"
                      required
                      placeholder={t.contact.contactPlaceholder}
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#8c9baa] text-sm text-ink focus:outline-none focus:border-[#0080ff] focus:ring-1 focus:ring-[#0080ff]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink uppercase mb-2">
                      {t.contact.descLabel}
                    </label>
                    <textarea
                      rows={4}
                      placeholder={t.contact.descPlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-[12px] border border-[#8c9baa] text-sm text-ink focus:outline-none focus:border-[#0080ff] focus:ring-1 focus:ring-[#0080ff]"
                    />
                  </div>

                  {/* Primary CTA Button */}
                  <button
                    type="submit"
                    className="btn-wavy-cta w-full py-4 text-base font-semibold text-white bg-[#0080ff] rounded-[1600px] shadow-custom-glow hover:bg-[#0050ff] transition-all flex items-center justify-center gap-2"
                  >
                    <span>{t.contact.submitBtn}</span>
                    <Send className="w-4 h-4 shrink-0" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
