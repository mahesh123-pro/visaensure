"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

// 3D Plane SVG Component for Parallax Effect
function ParallaxPlaneSVG({ 
  speed, 
  size, 
  initialX, 
  initialY,
  color = "#FFFFFF"
}: { 
  speed: number;
  size: number;
  initialX: string;
  initialY: string;
  color?: string;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [`${initialY}`, `calc(${initialY} + ${speed * 100}px)`]);
  const x = useTransform(scrollYProgress, [0, 1], [`${initialX}`, `calc(${initialX} + ${Math.sin(speed) * 50}px)`]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, speed * 45]);

  return (
    <motion.div
      style={{ y, x, rotate }}
      className="absolute pointer-events-none z-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <svg
        width={size}
        height={size * 0.6}
        viewBox="0 0 200 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Airplane Body */}
        <ellipse
          cx="100"
          cy="60"
          rx="80"
          ry="20"
          fill={color}
          opacity="0.8"
        />
        {/* Wings */}
        <path
          d="M90 60 L140 20 L150 30 L100 70 Z"
          fill={color}
          opacity="0.7"
        />
        <path
          d="M90 60 L140 100 L150 90 L100 50 Z"
          fill={color}
          opacity="0.7"
        />
        {/* Tail */}
        <path
          d="M20 60 L50 30 L60 40 L30 70 Z"
          fill={color}
          opacity="0.6"
        />
        {/* Engine Glow */}
        <circle
          cx="170"
          cy="60"
          r="8"
          fill="#4488ff"
          opacity="0.9"
        />
      </svg>
    </motion.div>
  );
}

export default function ParallaxSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Create different speeds for different layers
    // Negative values move up faster than the scroll, positive values move slower or down
    const yBg = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);
    const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yFrontImages1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const yFrontImages2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] sm:h-[150vh] w-full overflow-hidden flex items-center justify-center bg-zinc-950 text-white"
        >
            {/* Background Layer: Slowest movement, sets the scene */}
            <motion.div
                style={{ y: yBg }}
                className="absolute inset-[-20%] z-0"
            >
                <div className="absolute inset-0 bg-black/40 z-10" />
                <Image
                    src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2674&auto=format&fit=crop"
                    alt="Travel Background"
                    fill
                    className="object-cover opacity-60"
                    priority
                />
            </motion.div>

            {/* 3D Plane Parallax Layer - Multiple planes at different depths */}
            <div className="absolute inset-0 z-10 overflow-hidden">
                <ParallaxPlaneSVG 
                  speed={-1.5} 
                  size={120} 
                  initialX="10%" 
                  initialY="20%"
                  color="#bfdbfe"
                />
                <ParallaxPlaneSVG 
                  speed={2} 
                  size={80} 
                  initialX="80%" 
                  initialY="60%"
                  color="#fef3c7"
                />
                <ParallaxPlaneSVG 
                  speed={-0.8} 
                  size={150} 
                  initialX="70%" 
                  initialY="15%"
                  color="#e0e7ff"
                />
                <ParallaxPlaneSVG 
                  speed={1.2} 
                  size={100} 
                  initialX="20%" 
                  initialY="75%"
                  color="#fce7f3"
                />
                <ParallaxPlaneSVG 
                  speed={-2.5} 
                  size={60} 
                  initialX="85%" 
                  initialY="40%"
                  color="#ddd6fe"
                />
            </div>

            {/* Middle Layer: Text Content */}
            <motion.div
                style={{ y: yText }}
                className="relative z-20 text-center px-6"
            >
                <h2 className="text-5xl md:text-8xl font-black font-heading tracking-tighter mb-6 drop-shadow-2xl">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/80 to-white/40">
                        Beyond Borders
                    </span>
                    <br />
                    Limitless Horizons
                </h2>
                <div className="max-w-xl mx-auto backdrop-blur-md bg-black/20 p-8 rounded-3xl border border-white/10 shadow-2xl">
                    <p className="text-lg md:text-xl text-white/90 font-medium">
                        Elevating your global journey with cinematic precision and unmatched expertise. Experience a new perspective on visa consultancy.
                    </p>
                </div>
            </motion.div>

            {/* Foreground Layer: Fast moving images for depth */}
            <div className="absolute inset-0 z-30 pointer-events-none w-full max-w-7xl mx-auto px-6 h-full">
                {/* Left Floating Image */}
                <motion.div
                    style={{ y: yFrontImages1 }}
                    className="absolute left-4 md:left-20 top-[60%] w-[180px] h-[240px] md:w-[280px] md:h-[380px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2070&auto=format&fit=crop"
                        alt="Cityscape"
                        fill
                        className="object-cover"
                    />
                </motion.div>

                {/* Right Floating Image */}
                <motion.div
                    style={{ y: yFrontImages2 }}
                    className="absolute right-4 md:right-20 top-[30%] w-[200px] h-[260px] md:w-[320px] md:h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/10"
                >
                    <Image
                        src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop"
                        alt="Adventure"
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Overlays to blend with adjacent sections */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-40" />
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-40" />
        </section>
    );
}
