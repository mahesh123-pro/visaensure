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
                        <div className="relative w-[100vw] max-w-[1000px] h-80 md:h-[500px] drop-shadow-3xl overflow-hidden rounded-[4rem] border border-primary/10 bg-white/5 backdrop-blur-2xl p-10">
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 2.5, ease: "easeOut" }}
                                className="w-full h-full relative"
                            >
                                <Image 
                                    src="/images/visaensureMainlogo.png" 
                                    alt="VisaEnsure Logo" 
                                    fill
                                    className="object-contain"
                                />
                            </motion.div>
                        </div>


                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
