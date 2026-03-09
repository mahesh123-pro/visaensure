import HeroSection from "@/sections/landing/HeroSection";
import TrustSection from "@/sections/landing/TrustSection";
import ServicesSection from "@/sections/landing/ServicesSection";
import ProcessSection from "@/sections/landing/ProcessSection";
import CountriesSection from "@/sections/landing/CountriesSection";
import TestimonialsSection from "@/sections/landing/TestimonialsSection";
import CTASection from "@/sections/landing/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <CountriesSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
