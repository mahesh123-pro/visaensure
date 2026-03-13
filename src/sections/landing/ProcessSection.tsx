"use client";

import { motion } from "framer-motion";
import { StepIllustration, TouristVisaIllustration } from "@/components/Illustrations/TravelIllustrations";

const processSteps = [
    {
        number: "01",
        title: "Free Consultation",
        description: "Speak with our experts to evaluate your profile and determine the best visa pathway.",
    },
    {
        number: "02",
        title: "Document Checklist",
        description: "Get a personalized checklist and expert assistance in preparing all required paperwork.",
    },
    {
        number: "03",
        title: "Application Submission",
        description: "Meticulous submission of your application, ensuring zero errors and prompt processing.",
    },
    {
        number: "04",
        title: "Visa Approval",
        description: "Celebrate as you receive your visa, supported by our pre-departure guidance.",
    },
];

export default function ProcessSection() {
    return (
        <section className="py-24 relative bg-background overflow-hidden" id="process">
            {/* Background Illustration */}
            <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] opacity-[0.02] pointer-events-none rotate-45">
                <TouristVisaIllustration />
            </div>
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="inline-block px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 mb-6 text-primary text-sm font-semibold tracking-widest uppercase shadow-[0_0_20px_rgba(238,39,32,0.15)]"
                    >
                        How It Works
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground"
                    >
                        Simple Steps <br className="hidden md:block" />
                        <span className="text-muted-foreground">To Your Destination</span>
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Animated Connecting Line */}
                    <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-px bg-border shadow-sm border border-border z-0">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary to-secondary origin-left"
                        />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10 transition-colors">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-[124px] h-[124px] rounded-full glass border border-border flex items-center justify-center mb-8 relative group-hover:border-secondary transition-colors duration-500 overflow-hidden shadow-glass">
                                    <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity">
                                        <StepIllustration />
                                    </div>
                                    <div className="absolute inset-0 bg-primary/10 scale-0 origin-center rounded-full group-hover:scale-100 transition-transform duration-500" />
                                    <span className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-secondary relative z-10 transition-colors">
                                        {step.number}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold font-heading text-foreground mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed max-w-xs transition-colors">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
