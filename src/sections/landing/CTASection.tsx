"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden bg-background" id="cta">
            {/* Animated gradient background mesh */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[50%] -left-[20%] w-[100%] h-[150%] bg-primary/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-soft-light"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.5, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-[50%] -right-[20%] w-[100%] h-[150%] bg-secondary/10 blur-[150px] rounded-full mix-blend-multiply dark:mix-blend-soft-light"
                />
            </div>

            <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center transition-colors">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass border border-border rounded-3xl p-12 md:p-20 shadow-[0_0_20px_rgba(238,39,32,0.15)] bg-card/40 backdrop-blur-2xl transition-all duration-300"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 text-foreground tracking-tight transition-colors"
                    >
                        Start Your Visa <br />
                        <span className="text-gradient">Journey Today</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed transition-colors"
                    >
                        Don&apos;t let complex immigration processes hold you back. Let our experts handle the paperwork while you pack your bags.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(238,39,32,0.3)]"
                        >
                            Apply Now
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/services"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-card shadow-sm border border-border text-foreground rounded-full font-medium transition-all hover:bg-muted"
                        >
                            <Calendar size={18} />
                            Book Consultation
                        </Link>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
