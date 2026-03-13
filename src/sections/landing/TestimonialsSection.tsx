"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Software Engineer",
        visaType: "Canada PR",
        text: "I got my Canada PR within 6 months thanks to VisaEnsure! Their document checklist and rejection prevention strategy were spot on.",
        image: "https://i.pravatar.cc/150?u=rahul",
    },
    {
        name: "Priya Patel",
        role: "International Student",
        visaType: "Student Visa - UK",
        text: "VisaEnsure made my dream of studying in London a reality. Their team handled everything flawlessly, keeping me updated at every step.",
        image: "https://i.pravatar.cc/150?u=priya",
    },
    {
        name: "Arjun Mehta",
        role: "IT Professional",
        visaType: "H1B - USA",
        text: "My H1B application was complex but VisaEnsure's experts simplified everything. Got approved in the first attempt. Highly recommended!",
        image: "https://i.pravatar.cc/150?u=arjun",
    },
    {
        name: "Anita Nair",
        role: "Registered Nurse",
        visaType: "Skilled Worker - Australia",
        text: "Moving my family to Australia seemed impossible until I met the VisaEnsure team. They held our hand through the entire journey.",
        image: "https://i.pravatar.cc/150?u=anita",
    },
    {
        name: "Karthik Rao",
        role: "Business Owner",
        visaType: "Business Visa - Germany",
        text: "Professional, transparent, and incredibly efficient. The document error checking saved me from a potential rejection. Outstanding service!",
        image: "https://i.pravatar.cc/150?u=karthik",
    },
];

export default function TestimonialsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

    return (
        <section ref={containerRef} className="py-32 relative bg-background overflow-hidden" id="testimonials">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mb-20 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6"
                >
                    <span className="text-yellow-500 font-bold">★★★★★</span>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">4.9 Google Rating · 10,000+ Happy Clients</span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-foreground"
                >
                    Success Stories <span className="text-stroke">From</span> <br />
                    <span className="text-gradient underline decoration-primary/20 underline-offset-8">Our Global Clients</span>
                </motion.h2>
            </div>

            <div className="relative w-full flex items-center overflow-x-hidden pt-10 pb-20">
                <motion.div style={{ x }} className="flex gap-8 pl-[10vw] pr-[10vw]">
                    {[...testimonials, ...testimonials].map((testimonial, index) => (
                        <div
                            key={index}
                            className="glass p-8 md:p-10 rounded-3xl min-w-[340px] md:min-w-[450px] flex-shrink-0 flex flex-col border border-border relative hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_0_20px_rgba(238,39,32,0.15)] dark:hover:shadow-[0_0_20px_rgba(238,39,32,0.25)] hover:border-primary/30"
                        >
                            <Quote size={40} className="text-primary/20 absolute top-8 right-8" />
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-yellow-500 text-lg">★</span>
                                ))}
                            </div>
                            <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed mb-8 flex-grow">
                                {`"${testimonial.text}"`}
                            </p>

                            <div className="flex items-center gap-4 border-t border-border pt-6 transition-colors">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/50"
                                />
                                <div>
                                    <h4 className="font-heading font-semibold text-foreground transition-colors">{testimonial.name}</h4>
                                    <div className="flex flex-col text-sm">
                                        <span className="text-muted-foreground transition-colors">{testimonial.role}</span>
                                        <span className="text-primary font-medium mt-0.5">{testimonial.visaType}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
