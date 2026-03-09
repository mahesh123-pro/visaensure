"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Plane, Scale, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { StudentVisaIllustration, WorkVisaIllustration, TouristVisaIllustration, PassportIllustration } from "@/components/Illustrations/TravelIllustrations";

const services = [
    {
        title: "Student Visa",
        description: "Expert guidance for your global education journey. Seamless application processing for top universities worldwide.",
        icon: GraduationCap,
        illustration: StudentVisaIllustration,
        href: "/services",
    },
    {
        title: "Work Visa",
        description: "Secure your dream job abroad. End-to-end support for professional work permits and employer-sponsored visas.",
        icon: Briefcase,
        illustration: WorkVisaIllustration,
        href: "/services",
    },
    {
        title: "Tourist Visa",
        description: "Explore the world hassle-free. Quick and reliable tourist visa processing for your next global adventure.",
        icon: Plane,
        illustration: TouristVisaIllustration,
        href: "/services",
    },
    {
        title: "Immigration Consultation",
        description: "Strategic planning for permanent residency and citizenship. Tailored advice from certified experts.",
        icon: Scale,
        illustration: PassportIllustration,
        href: "/services",
    },
    {
        title: "Documentation Support",
        description: "Flawless paperwork preparation. From translations to notarizations, we ensure your documents are perfect.",
        icon: FileText,
        illustration: PassportIllustration,
        href: "/services",
    },
];

export default function ServicesSection() {
    return (
        <section className="py-32 relative bg-background overflow-hidden" id="services">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6 transition-colors"
                    >
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">Our Focus</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground transition-colors"
                    >
                        Expert Visa Services <br className="hidden md:block" />
                        <span className="text-muted-foreground transition-colors">Tailored For You</span>
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <Link href={service.href} className="block group h-full">
                                <div className="glass p-8 rounded-3xl h-full flex flex-col transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(238,39,32,0.15)] relative overflow-hidden group">
                                    {/* SVG Illustration Watermark */}
                                    <div className="absolute -top-4 -right-4 w-40 h-40 opacity-[0.05] group-hover:opacity-[0.08] group-hover:scale-110 transition-all duration-700 pointer-events-none z-0">
                                        <service.illustration />
                                    </div>

                                    <div className="w-14 h-14 rounded-2xl bg-background shadow-sm border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 relative z-10">
                                        <service.icon size={28} className="text-primary transition-colors" />
                                    </div>

                                    <h3 className="text-2xl font-semibold font-heading text-foreground mb-4 relative z-10 transition-colors">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed flex-grow relative z-10 transition-colors">
                                        {service.description}
                                    </p>

                                    <div className="mt-8 flex items-center justify-between text-primary relative z-10">
                                        <span className="text-sm font-medium tracking-wide uppercase opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                                            Learn More
                                        </span>
                                        <div className="w-10 h-10 rounded-full bg-background shadow-sm border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:-rotate-45">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
