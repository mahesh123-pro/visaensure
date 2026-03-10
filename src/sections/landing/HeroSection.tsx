"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, CheckCircle2, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Magnetic from "@/components/animations/Magnetic";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement | null)[]>([]);
    const floatingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const mainImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            // Animate Main Text & Buttons
            tl.fromTo(
                textRefs.current,
                { y: 60, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 1.2, stagger: 0.15, delay: 0.3 }
            );

            // Main Image Spawn
            if (mainImageRef.current) {
                tl.fromTo(
                    mainImageRef.current,
                    { scale: 0.9, opacity: 0, filter: "blur(10px)", y: 100 },
                    { scale: 1, opacity: 1, filter: "blur(0px)", y: 0, duration: 1.8, ease: "power3.out" },
                    "-=1"
                );

                gsap.to(mainImageRef.current, {
                    y: "-=30",
                    duration: 5,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            }

            // Floating card initial spawn
            tl.fromTo(
                floatingCardsRef.current,
                { y: 120, opacity: 0, rotationX: -15, scale: 0.85 },
                { y: 0, opacity: 1, rotationX: 0, scale: 1, duration: 1.2, stagger: 0.2 },
                "-=1.5"
            );

            // Continuous floating animation
            floatingCardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.to(card, {
                    y: `${index % 2 === 0 ? '-=' : '+='}${15 + index * 5}`,
                    rotation: `${index % 2 === 0 ? 2 : -2}`,
                    duration: 4 + index,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                    delay: index * 0.5,
                });
            });

            // Mouse parallax effect
            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 40;
                const y = (e.clientY / window.innerHeight - 0.5) * 40;

                gsap.to(".parallax-bg", { x: x * 0.8, y: y * 0.8, duration: 2, ease: "power2.out" });
                gsap.to(floatingCardsRef.current, { x: -x * 0.4, y: -y * 0.4, duration: 1.5, ease: "power2.out" });
                if (mainImageRef.current) {
                    gsap.to(mainImageRef.current, { x: -x * 0.15, y: -y * 0.15, duration: 2, ease: "power2.out" });
                }
            };

            window.addEventListener("mousemove", handleMouseMove);
            return () => window.removeEventListener("mousemove", handleMouseMove);
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-[95vh] flex items-center pt-24 pb-16 overflow-hidden">
            {/* Premium background layer */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="parallax-bg absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#EE2720]/05 blur-[140px] rounded-full mix-blend-multiply transition-colors dark:bg-[#EE2720]/10 dark:mix-blend-soft-light" />
                <div className="parallax-bg absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-[#A78BFA]/05 blur-[140px] rounded-full mix-blend-multiply transition-colors dark:bg-[#A78BFA]/10 dark:mix-blend-soft-light" />

                {/* Subtle mesh pattern overlay */}
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4v-4H4v4H0v2h4v4h2v-4h4v-2H6zM36 4v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-20 items-center">
                {/* Text Content */}
                <div className="relative z-20">
                    <motion.div
                        ref={(el) => { textRefs.current[0] = el; }}
                        whileHover={{ scale: 1.05 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-border/50 mb-8 transition-all cursor-default group"
                    >
                        <span className="flex h-3 w-3 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        <span className="text-xs font-bold text-foreground tracking-[0.15em] uppercase">Trusted by 10,000+ Students</span>
                    </motion.div>

                    <h1
                        ref={(el) => { textRefs.current[1] = el; }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-black font-heading leading-[0.9] mb-8 tracking-tighter text-foreground"
                    >
                        Global Visa <br />
                        <span className="relative">
                            Success
                            <motion.span
                                className="absolute -bottom-2 left-0 w-full h-3 bg-primary/10 -z-10 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{ delay: 1, duration: 1 }}
                            />
                        </span> <br />
                        <span className="text-gradient">Simplified</span>
                    </h1>

                    <p
                        ref={(el) => { textRefs.current[2] = el; }}
                        className="text-xl text-muted-foreground mb-10 max-w-lg leading-relaxed font-medium"
                    >
                        Empowering your international dreams with high-precision visa consultancy and AI-driven documentation support.
                    </p>

                    <div
                        ref={(el) => { textRefs.current[3] = el; }}
                        className="flex flex-wrap items-center gap-6"
                    >
                        <Magnetic>
                            <Link
                                href="/contact"
                                className="relative inline-flex items-center gap-3 px-10 py-5 bg-primary text-white rounded-2xl font-bold transition-all shadow-[0_10px_30px_rgba(238,39,32,0.3)] hover:shadow-[0_15px_40px_rgba(238,39,32,0.4)]"
                            >
                                Apply Now
                                <ArrowRight size={20} />
                            </Link>
                        </Magnetic>

                        <Magnetic>
                            <Link
                                href="/services"
                                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-900 border border-border rounded-2xl font-bold transition-all shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:bg-gray-50 dark:bg-card dark:text-white dark:hover:bg-card/80 dark:border-white/10"
                            >
                                <Globe size={20} className="text-primary" />
                                Check Eligibility
                            </Link>
                        </Magnetic>
                    </div>

                    {/* Trust badges below buttons */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                        className="mt-12 flex items-center gap-6"
                    >
                        <div className="flex items-center gap-2">
                            <ShieldCheck size={20} className="text-primary" />
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Certified Experts</span>
                        </div>
                        <div className="w-px h-4 bg-border" />
                        <div className="flex items-center gap-2">
                            <CheckCircle2 size={20} className="text-green-500" />
                            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">99% Success Rate</span>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Graphics Grid */}
                <div className="relative h-[700px] hidden lg:flex items-center justify-center">
                    {/* Abstract orbital rings background */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-[500px] h-[500px] rounded-full border border-primary/10 animate-[spin_20s_linear_infinite]" />
                        <div className="absolute w-[650px] h-[650px] rounded-full border border-secondary/05 animate-[spin_30s_linear_infinite_reverse]" />
                    </div>

                    {/* Main Image Container */}
                    <div
                        ref={mainImageRef}
                        className="relative w-[450px] h-[550px] rounded-[3rem] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] z-0 group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1588&auto=format&fit=crop"
                            alt="Premium Global Visa Services"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        <div className="absolute inset-0 border-[12px] border-white/30 rounded-[3rem] pointer-events-none" />
                    </div>

                    {/* Floating Premium Cards */}
                    <div
                        ref={(el) => { floatingCardsRef.current[0] = el; }}
                        className="absolute -top-10 -right-4 glass p-8 rounded-[2.5rem] w-64 border border-white/50 shadow-2xl z-20 backdrop-blur-3xl"
                    >
                        <div className="w-14 h-14 rounded-2xl bg-primary shadow-glow flex items-center justify-center mb-5">
                            <FileText size={28} className="text-white" />
                        </div>
                        <h3 className="text-xl font-heading font-black text-foreground mb-2 tracking-tight">AI Document Scan</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Instantly verify your visa documents with 99.8% accuracy.</p>
                        <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary">Active Session</span>
                            <div className="flex gap-1">
                                <span className="h-1 w-4 bg-primary rounded-full" />
                                <span className="h-1 w-1 bg-primary/30 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div
                        ref={(el) => { floatingCardsRef.current[1] = el; }}
                        className="absolute bottom-1/4 -left-12 glass px-6 py-5 rounded-2xl flex items-center gap-5 border border-white/50 shadow-xl z-20 backdrop-blur-2xl"
                    >
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-black text-xl">
                                ✓
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 bg-green-500 rounded-full -z-10"
                            />
                        </div>
                        <div>
                            <p className="text-base font-black text-foreground tracking-tight">Visa Approved</p>
                            <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider">USA F1 Student • 2m ago</p>
                        </div>
                    </div>

                    <div
                        ref={(el) => { floatingCardsRef.current[2] = el; }}
                        className="absolute -bottom-6 right-6 glass p-6 rounded-[2rem] border border-white/50 shadow-2xl z-20 backdrop-blur-2xl"
                    >
                        <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-4">Our Top Experts</p>
                        <div className="flex -space-x-4 mb-2">
                            {[
                                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1587&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1588&auto=format&fit=crop",
                                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1587&auto=format&fit=crop"
                            ].map((src, i) => (
                                <div key={i} className="w-12 h-12 rounded-full border-4 border-white shadow-sm overflow-hidden transition-transform hover:scale-110 hover:z-30 cursor-pointer">
                                    <Image src={src} alt="Expert" width={48} height={48} className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator refinement */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-40 hover:opacity-100 transition-opacity cursor-pointer group">
                <span className="text-[10px] tracking-[0.3em] uppercase text-foreground font-black">Discover More</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-[2px] h-14 bg-gradient-to-b from-primary via-primary/50 to-transparent rounded-full shadow-glow"
                />
            </div>
        </section>
    );
}
