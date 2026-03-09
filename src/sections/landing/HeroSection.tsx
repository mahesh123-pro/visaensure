"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe } from "lucide-react";

export default function HeroSection() {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRefs = useRef<(HTMLHeadingElement | HTMLParagraphElement | HTMLDivElement | null)[]>([]);
    const floatingCardsRef = useRef<(HTMLDivElement | null)[]>([]);
    const mainImageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!heroRef.current) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

            // Animate Main Text & Buttons
            tl.fromTo(
                textRefs.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2, delay: 0.2 }
            );

            // Main Image Spawn
            if (mainImageRef.current) {
                tl.fromTo(
                    mainImageRef.current,
                    { scale: 0.8, opacity: 0, rotationY: 15, y: 50 },
                    { scale: 1, opacity: 1, rotationY: 0, y: 0, duration: 1.5, ease: "power3.out" },
                    "-=0.8"
                );

                gsap.to(mainImageRef.current, {
                    y: "-=20",
                    duration: 4,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            }

            // Floating card initial spawn
            tl.fromTo(
                floatingCardsRef.current,
                { y: 100, opacity: 0, scale: 0.8 },
                { y: 0, opacity: 1, scale: 1, duration: 1, stagger: 0.15 },
                "-=1"
            );

            // Continuous floating animation
            floatingCardsRef.current.forEach((card, index) => {
                if (!card) return;
                gsap.to(card, {
                    y: `${index % 2 === 0 ? '-=' : '+='}15`,
                    rotation: `${index % 2 === 0 ? 3 : -3}`,
                    duration: 3 + index,
                    ease: "sine.inOut",
                    yoyo: true,
                    repeat: -1,
                });
            });

            // Simple mouse parallax for background gradient and elements
            const handleMouseMove = (e: MouseEvent) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;

                gsap.to(".parallax-bg", { x: x * 2, y: y * 2, duration: 1, ease: "power2.out" });
                gsap.to(floatingCardsRef.current, { x: -x, y: -y, duration: 1, ease: "power2.out" });
                if (mainImageRef.current) {
                    gsap.to(mainImageRef.current, { x: -x * 0.5, y: -y * 0.5, duration: 1, ease: "power2.out" });
                }
            };

            window.addEventListener("mousemove", handleMouseMove);

            return () => {
                window.removeEventListener("mousemove", handleMouseMove);
            };
        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Animated gradient shapes */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="parallax-bg absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-soft-light" />
                <div className="parallax-bg absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full mix-blend-multiply dark:mix-blend-soft-light" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <div className="max-w-2xl">
                    <div
                        ref={(el) => { textRefs.current[0] = el; }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6 transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-xs font-medium text-foreground tracking-wider uppercase">Your Journey Starts Here</span>
                    </div>

                    <h1
                        ref={(el) => { textRefs.current[1] = el; }}
                        className="text-5xl sm:text-6xl lg:text-7xl font-bold font-heading leading-[1.1] mb-6 tracking-tight text-foreground"
                    >
                        Global Visa <br />
                        Support <span className="text-gradient">Made Simple</span>
                    </h1>

                    <p
                        ref={(el) => { textRefs.current[2] = el; }}
                        className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed"
                    >
                        Helping students and professionals secure visas faster with expert guidance. Navigate the complex immigration process with our dedicated team of global experts.
                    </p>

                    <div
                        ref={(el) => { textRefs.current[3] = el; }}
                        className="flex flex-wrap items-center gap-4"
                    >
                        <Link
                            href="/contact"
                            className="relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-medium transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(238,39,32,0.15)]"
                        >
                            Apply Now
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/services"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-card text-foreground border border-border rounded-full font-medium transition-colors hover:bg-muted shadow-sm"
                        >
                            Check Eligibility
                        </Link>
                    </div>
                </div>

                {/* Floating Graphics Grid */}
                <div className="relative h-[600px] hidden lg:flex items-center justify-center">
                    {/* Main Image */}
                    <div
                        ref={mainImageRef}
                        className="absolute inset-0 m-auto w-[400px] h-[400px] rounded-[2rem] overflow-hidden shadow-[0_0_50px_rgba(238,39,32,0.15)] z-0"
                    >
                        <Image
                            src="/images/hero-image.png"
                            alt="Premium Global Visa Services"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 border border-foreground/20 rounded-[2rem] mix-blend-overlay pointer-events-none" />
                        <div className="absolute inset-0 " />
                    </div>

                    {/* Floating Cards Over Image */}
                    <div
                        ref={(el) => { floatingCardsRef.current[0] = el; }}
                        className="absolute top-10 right-4 glass p-6 rounded-2xl w-60 border border-border shadow-glass z-10"
                    >
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 transition-transform group-hover:scale-110">
                            <Globe size={24} className="text-white" />
                        </div>
                        <h3 className="text-lg font-heading font-semibold text-foreground mb-2">1000+</h3>
                        <p className="text-sm text-muted-foreground">Successful global visa applications this year.</p>
                    </div>

                    <div
                        ref={(el) => { floatingCardsRef.current[1] = el; }}
                        className="absolute top-1/2 -left-4 glass p-4 rounded-xl flex items-center gap-4 border border-border shadow-glass z-10"
                    >
                        <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
                            ✓
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-foreground">Canada PR</p>
                            <p className="text-xs text-muted-foreground">Approved yesterday</p>
                        </div>
                    </div>

                    <div
                        ref={(el) => { floatingCardsRef.current[2] = el; }}
                        className="absolute bottom-10 right-10 glass p-5 rounded-2xl border border-border shadow-glass z-10"
                    >
                        <div className="flex -space-x-3 mb-3">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-muted to-border transition-colors" />
                            ))}
                        </div>
                        <p className="text-sm font-medium text-foreground">Join our successful clients</p>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                <span className="text-xs tracking-widest uppercase text-foreground font-medium">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-foreground to-transparent" />
            </div>
        </section>
    );
}
