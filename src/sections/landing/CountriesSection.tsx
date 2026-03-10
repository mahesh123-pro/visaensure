"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlobeIllustration } from "@/components/Illustrations/TravelIllustrations";
import ScrollHero from "@/components/animations/ScrollHero";

const countries = [
    {
        name: "USA",
        image: "/images/usa.png",
        color: "from-blue-600 to-red-600"
    },
    {
        name: "Canada",
        image: "/images/canada.png",
        color: "from-red-500 to-red-800"
    },
    {
        name: "UK",
        image: "/images/uk.png",
        color: "from-indigo-800 to-red-700"
    },
    {
        name: "Australia",
        image: "/images/australia.png",
    },
    {
        name: "Europe",
        image: "/images/europe.png"
    }
];

export default function CountriesSection() {
    return (
        <section className="pt-12 pb-24 relative bg-background overflow-hidden transition-colors" id="countries">
            {/* Background Illustration */}
            <div className="absolute -top-10 -right-20 w-[600px] h-[600px] opacity-[0.03] pointer-events-none">
                <GlobeIllustration />
            </div>

            <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light pointer-events-none" />

            {/* Premium Scroll Typograpy Animation */}
            <div className="w-full">
                <ScrollHero title="EXPLORE TOP DESTINATIONS" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-end gap-8 mb-6 mt-0">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-shrink-0"
                    >
                        <button className="flex items-center gap-2 text-foreground font-medium group transition-colors hover:text-primary transition-colors">
                            View All Destinations
                            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] transition-colors">
                    {countries.map((country, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`group relative rounded-3xl overflow-hidden shadow-glass border border-border dark:border-white/10 cursor-pointer transition-colors ${index === 0 ? "md:col-span-2 lg:col-span-2" : index === 3 ? "lg:col-span-2" : ""
                                }`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 dark:brightness-[1.15] dark:contrast-110"
                                style={{ backgroundImage: `url(${country.image})` }}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80 dark:from-black/75 dark:via-black/20" />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end">
                                <h3 className="text-4xl font-heading font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    {country.name}
                                </h3>

                                <div className="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-100">
                                    <span className="text-sm font-medium text-primary uppercase tracking-widest">
                                        Explore Visa Options
                                    </span>
                                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
