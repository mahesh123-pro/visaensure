"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
    {
        name: "Sarah Jenkins",
        role: "International Student",
        visaType: "Student Visa - UK",
        text: "VisaEnsure made my dream of studying in London a reality. Their team handled everything flawlessly, keeping me updated at every step.",
        image: "https://i.pravatar.cc/150?u=sarah",
    },
    {
        name: "Michael Chen",
        role: "Software Developer",
        visaType: "Work Visa - Canada",
        text: "I was overwhelmed by the Canadian PR process, but VisaEnsure's experts simplified everything. My application was approved much faster than expected.",
        image: "https://i.pravatar.cc/150?u=michael",
    },
    {
        name: "Elena Rodriguez",
        role: "Freelance Designer",
        visaType: "Digital Nomad Visa - Spain",
        text: "The guidance I received was top-notch. They knew exactly which documents were needed and how to present my case perfectly.",
        image: "https://i.pravatar.cc/150?u=elena",
    },
    {
        name: "David Kim",
        role: "Business Owner",
        visaType: "Investor Visa - USA",
        text: "Professional, transparent, and incredibly efficient. They are the only immigration consultants I will ever recommend to my colleagues.",
        image: "https://i.pravatar.cc/150?u=david",
    },
    {
        name: "Anita Patel",
        role: "Registered Nurse",
        visaType: "Skilled Worker Visa - Australia",
        text: "Moving my family to Australia seemed impossible until I met the VisaEnsure team. They held our hand through the entire journey.",
        image: "https://i.pravatar.cc/150?u=anita",
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
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-6xl font-bold font-heading tracking-tight text-foreground"
                >
                    Trusted By <span className="text-stroke">Thousands</span> <br />
                    <span className="text-gradient underline decoration-primary/20 underline-offset-8">Across The Globe</span>
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
