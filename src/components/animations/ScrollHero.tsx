"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface ScrollHeroProps {
    title?: string;
}

export default function ScrollHero({ title = "HERITAGE FW25/26 COLLECTION (16)" }: ScrollHeroProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    // Track scroll progress relative to the viewport
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Apply spring physics to the scroll progress for a buttery smooth, premium feel
    const springProgress = useSpring(scrollYProgress, {
        stiffness: 70,
        damping: 25,
        restDelta: 0.001
    });

    // 1. Text slowly scales from 0.8 -> 1.2
    const scale = useTransform(springProgress, [0, 1], [0.8, 1.2]);

    // 2. Slight upward movement (translateY)
    const y = useTransform(springProgress, [0, 1], ["20%", "-20%"]);

    // 3. Subtle opacity change: start faded, fade in fully, fade out
    const opacity = useTransform(springProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    // 4. Bonus Enhancements: Subtle letter spacing expansion
    const letterSpacing = useTransform(springProgress, [0, 1], ["-0.08em", "0.02em"]);

    // 5. Bonus Enhancements: Blur-to-sharp effect
    const blurAmount = useTransform(springProgress, [0, 0.4, 0.6, 1], [12, 0, 0, 12]);
    const filter = useTransform(blurAmount, (val) => `blur(${val}px)`);

    return (
        <div ref={containerRef} className="relative w-full h-[120vh] bg-transparent z-10 -mt-20">
            {/* Sticky container covering the viewport */}
            <div className="sticky top-0 left-0 w-full h-[80vh] flex flex-col items-center justify-end overflow-hidden pointer-events-none pb-20">
                <motion.h2
                    style={{
                        scale,
                        y,
                        opacity,
                        letterSpacing,
                        filter,
                        willChange: "transform, opacity, filter, letter-spacing"
                    }}
                    className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black font-heading leading-[0.85] text-center uppercase text-foreground mx-auto w-full px-4"
                >
                    {title.split(' ').map((word, i, arr) => (
                        <span key={i} className={`inline-block mr-[0.25em] last:mr-0 ${i === arr.length - 1 ? 'text-gradient' : ''}`}>
                            {word}
                        </span>
                    ))}
                </motion.h2>
            </div>
        </div>
    );
}
