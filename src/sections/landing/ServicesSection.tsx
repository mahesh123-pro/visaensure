"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Plane, Scale, FileText, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { StudentVisaIllustration, WorkVisaIllustration, TouristVisaIllustration, PassportIllustration } from "@/components/Illustrations/TravelIllustrations";

const services = [
    {
        title: "Student Visa",
        description: "Expert guidance for your global education journey. Seamless application processing for top universities worldwide.",
        icon: GraduationCap,
        illustration: StudentVisaIllustration,
        href: "/services",
        image: "/images/student-visa.png",
    },
    {
        title: "Work Visa",
        description: "Secure your dream job abroad. End-to-end support for professional work permits and employer-sponsored visas.",
        icon: Briefcase,
        illustration: WorkVisaIllustration,
        href: "/services",
        image: "/images/work-visa.png",
    },
    {
        title: "Tourist Visa",
        description: "Explore the world hassle-free. Quick and reliable tourist visa processing for your next global adventure.",
        icon: Plane,
        illustration: TouristVisaIllustration,
        href: "/services",
        image: "/images/tourist-visa.png",
    },
    {
        title: "Immigration Consultation",
        description: "Strategic planning for permanent residency and citizenship. Tailored advice from certified experts.",
        icon: Scale,
        illustration: PassportIllustration,
        href: "/services",
        image: "/images/immigration.png",
    },
    {
        title: "Documentation Support",
        description: "Flawless paperwork preparation. From translations to notarizations, we ensure your documents are perfect.",
        icon: FileText,
        illustration: PassportIllustration,
        href: "/services",
        image: "/images/documentation.png",
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                initial: { opacity: 0, y: 50 },
                                animate: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        duration: 0.8,
                                        delay: index * 0.15,
                                        ease: [0.21, 0.47, 0.32, 0.98]
                                    }
                                }
                            }}
                        >
                            <Link href={service.href} className="block group h-full">
                                <div className="glass rounded-[2rem] h-full flex flex-col transition-all duration-700 hover:shadow-[0_20px_50px_rgba(238,39,32,0.12)] relative overflow-hidden group border border-border/50 bg-card/50 backdrop-blur-xl">
                                    {/* Hover Shine Effect */}
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1500ms] cubic-bezier(0.4, 0, 0.2, 1)" />
                                    </div>

                                    {/* Service Image Header */}
                                    <div className="relative h-60 w-full overflow-hidden">
                                        <motion.div
                                            className="h-full w-full"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 1.2, ease: "easeOut" }}
                                        >
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover object-center"
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </motion.div>

                                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />

                                        {/* Floating Icon Overlay */}
                                        <motion.div
                                            className="absolute bottom-6 left-8"
                                            animate={{
                                                y: [0, -8, 0],
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.5
                                            }}
                                        >
                                            <div className="w-14 h-14 rounded-2xl bg-white/95 dark:bg-card/95 backdrop-blur-md shadow-xl border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                                                <service.icon size={26} className="text-primary group-hover:text-white transition-colors duration-500" />
                                            </div>
                                        </motion.div>

                                        {/* SVG Illustration Watermark (Subtle) */}
                                        <div className="absolute -top-6 -right-6 w-36 h-36 opacity-[0.08] group-hover:opacity-[0.12] group-hover:rotate-12 transition-all duration-700 pointer-events-none z-0">
                                            <service.illustration />
                                        </div>
                                    </div>

                                    <div className="p-8 pt-8 flex flex-col flex-grow relative z-10">
                                        <motion.h3
                                            className="text-2xl font-bold font-heading text-foreground mb-4 transition-colors group-hover:text-primary"
                                            variants={{
                                                initial: { x: -10, opacity: 0 },
                                                animate: { x: 0, opacity: 1, transition: { delay: index * 0.15 + 0.3 } }
                                            }}
                                        >
                                            {service.title}
                                        </motion.h3>

                                        <motion.p
                                            className="text-muted-foreground leading-relaxed flex-grow transition-colors text-base"
                                            variants={{
                                                initial: { y: 10, opacity: 0 },
                                                animate: { y: 0, opacity: 1, transition: { delay: index * 0.15 + 0.4 } }
                                            }}
                                        >
                                            {service.description}
                                        </motion.p>

                                        <div className="mt-8 flex items-center justify-between">
                                            <motion.span
                                                className="text-xs font-bold tracking-[0.2em] uppercase text-primary opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                                            >
                                                Discover Path
                                            </motion.span>
                                            <motion.div
                                                className="w-12 h-12 rounded-full bg-card shadow-sm border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-[360deg]"
                                                whileHover={{ scale: 1.1 }}
                                            >
                                                <ArrowUpRight size={20} />
                                            </motion.div>
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
