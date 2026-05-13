"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
                        <div className="relative w-48 h-48 drop-shadow-2xl overflow-hidden rounded-full border-4 border-primary/20">
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 1.2, ease: "easeOut" }}
                                className="w-full h-full"
                            >
                                <Image 
                                    src="/images/visaensurelogo.jpeg" 
                                    alt="VisaEnsure Logo" 
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
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
