import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ClientLogosSection from "@/components/sections/ClientLogosSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import StatsSection from "@/components/sections/StatsSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1 w-full">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trusted By / Client Logos */}
        <ClientLogosSection />

        {/* 3. How It Works (Process) */}
        <ProcessSection />

        {/* 4. Portfolio / Project Showcase */}
        <PortfolioSection />

        {/* 5. Testimonials */}
        <TestimonialsSection />

        {/* 6. Stats Bar */}
        <StatsSection />

        {/* 7. Why Choose Us */}
        <WhyChooseUsSection />

        {/* 8. FAQ */}
        <FaqSection />

        {/* 9. Final CTA + Contact Form */}
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
