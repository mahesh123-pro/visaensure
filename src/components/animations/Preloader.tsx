"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Stop body scroll while preloader is active
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsLoading(false);
            document.body.style.overflow = "auto";
        }, 3200);
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "auto";
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    exit={{ opacity: 0, y: "-20vh", filter: "blur(20px)" }}
                    transition={{ duration: 0.9, ease: "easeInOut" }}
                    className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-background pointer-events-none"
                    style={{ willChange: "transform, opacity, filter" }}
                >
                    <div className="flex flex-col items-center gap-8">
                        {/* High-quality Animated SVG Logo */}
                        <div className="relative w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl">
                            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                                <defs>
                                    <linearGradient id="preloader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#f73f30" />
                                        <stop offset="100%" stopColor="#d11a14" />
                                    </linearGradient>
                                    <clipPath id="preloader-clip">
                                        <circle cx="50" cy="50" r="48" />
                                    </clipPath>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="4" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>

                                {/* Red Background Circle */}
                                <motion.circle
                                    cx="50" cy="50" r="48" fill="url(#preloader-grad)"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                />

                                {/* Main Thick Swoosh */}
                                <motion.path
                                    d="M -10 65 Q 40 120 75 35"
                                    fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"
                                    clipPath="url(#preloader-clip)"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 1 }}
                                    transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
                                />

                                {/* Thin Trail under the thick one */}
                                <motion.path
                                    d="M 5 75 Q 45 120 85 45"
                                    fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                                    clipPath="url(#preloader-clip)"
                                    initial={{ pathLength: 0, opacity: 0 }}
                                    animate={{ pathLength: 1, opacity: 0.7 }}
                                    transition={{ duration: 1.2, delay: 0.7, ease: "easeInOut" }}
                                />

                                {/* Airplane animating along the path */}
                                <motion.g
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.1, delay: 0.5 }}
                                >
                                    <g>
                                        <g transform="rotate(90) translate(-12, -12)">
                                            <path
                                                d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"
                                                fill="white"
                                                filter="url(#glow)"
                                            />
                                        </g>
                                        <animateMotion
                                            path="M -10 65 Q 40 120 75 35"
                                            dur="1.2s"
                                            begin="0.5s"
                                            fill="freeze"
                                            rotate="auto"
                                            calcMode="spline"
                                            keySplines="0.42 0 0.58 1"
                                            keyTimes="0;1"
                                        />
                                    </g>
                                </motion.g>
                            </svg>
                        </div>

                        {/* Title Text Reveal */}
                        <div className="overflow-hidden py-2">
                            <motion.div
                                initial={{ y: 80, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
                                className="font-heading font-black text-5xl md:text-6xl tracking-tight flex items-center justify-center gap-1 drop-shadow-md"
                            >
                                <span className="text-[#EE2720]">Visa</span>
                                <span className="text-foreground dark:text-white">Ensure</span>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
