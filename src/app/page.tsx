"use client";

import HeroSection from "@/sections/landing/HeroSection";
import TrustSection from "@/sections/landing/TrustSection";
import ServicesSection from "@/sections/landing/ServicesSection";
import ProcessSection from "@/sections/landing/ProcessSection";
import CountriesSection from "@/sections/landing/CountriesSection";
import WhyChooseUsSection from "@/sections/landing/WhyChooseUsSection";
import EligibilityCheckerSection from "@/sections/landing/EligibilityCheckerSection";
import TestimonialsSection from "@/sections/landing/TestimonialsSection";
import CTASection from "@/sections/landing/CTASection";
import ParallaxSection from "@/sections/landing/ParallaxSection";
import Airplane3DSection from "@/sections/landing/Airplane3DSection";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-red-400 to-primary origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Page Load Transition */}
      <motion.div
        initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <HeroSection />
        <TrustSection />
        <ProcessSection />
        <CountriesSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <EligibilityCheckerSection />
        <ParallaxSection />
        <Airplane3DSection />
        <TestimonialsSection />
        <CTASection />
      </motion.div>
    </>
  );
}
