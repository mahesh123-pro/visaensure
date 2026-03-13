"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, UserCheck, Zap } from "lucide-react";

const advantages = [
    {
        title: "Document Error Checking",
        description: "AI-powered and expert-reviewed analysis ensures zero mistakes in your visa applications.",
        icon: CheckCircle2,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    {
        title: "Rejection Prevention Strategy",
        description: "Strategic case presentation customized to highlight your strengths and mitigate risks.",
        icon: ShieldCheck,
        color: "text-primary",
        bg: "bg-primary/10"
    },
    {
        title: "Dedicated Case Manager",
        description: "A single, experienced point of contact to guide you through every step of the journey.",
        icon: UserCheck,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    {
        title: "Fast-Track Processing",
        description: "Optimized pipelines and priority filing to get your visa approved in record time.",
        icon: Zap,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    }
];

export default function WhyChooseUsSection() {
    return (
        <section className="py-24 relative bg-background overflow-hidden" id="why-choose-us">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6"
                    >
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">The VisaEnsure Advantage</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground transition-colors"
                    >
                        Why Choose <span className="text-gradient">VisaEnsure</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        We don't just file applications. We architect your international future with precision, speed, and dedicated support.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {advantages.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="group relative"
                        >
                            <div className="glass p-8 rounded-3xl border border-border bg-card/50 backdrop-blur-xl h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(238,39,32,0.1)] hover:border-primary/30 flex flex-col items-center text-center">
                                <div className={`w-16 h-16 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                                    <item.icon size={32} className={`${item.color}`} />
                                </div>
                                <h3 className="text-xl font-bold font-heading text-foreground mb-3">{item.title}</h3>
                                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
