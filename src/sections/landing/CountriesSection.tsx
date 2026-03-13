"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { GlobeIllustration } from "@/components/Illustrations/TravelIllustrations";
import ScrollHero from "@/components/animations/ScrollHero";

const countries = [
    {
        name: "Canada",
        image: "/images/canada.png",
        flag: "🇨🇦",
        types: "PR, Study, Work",
        time: "6-8 Months"
    },
    {
        name: "UK",
        image: "/images/uk.png",
        flag: "🇬🇧",
        types: "Study, Work, Tourist",
        time: "3-4 Weeks"
    },
    {
        name: "Australia",
        image: "/images/australia.png",
        flag: "🇦🇺",
        types: "PR, Study, Work",
        time: "5-7 Months"
    },
    {
        name: "Germany",
        image: "/images/europe.png",
        flag: "🇩🇪",
        types: "Job Seeker, Study",
        time: "4-6 Weeks"
    },
    {
        name: "USA",
        image: "/images/usa.png",
        flag: "🇺🇸",
        types: "F1, H1B, B1/B2",
        time: "Varies"
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
                                <div className="translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-3 flex items-center gap-3 drop-shadow-lg">
                                        <span className="text-4xl drop-shadow-md">{country.flag}</span>
                                        {country.name} Visa
                                    </h3>
                                    
                                    <div className="flex items-center gap-4 text-white/95 font-medium mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Visa Types</span>
                                            <span className="text-sm md:text-base">{country.types}</span>
                                        </div>
                                        <div className="w-px h-8 bg-white/30" />
                                        <div className="flex flex-col">
                                            <span className="text-[10px] text-white/70 uppercase tracking-widest font-bold">Processing</span>
                                            <span className="text-sm md:text-base">{country.time}</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-200">
                                        <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest bg-primary/90 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 hover:bg-primary transition-colors flex items-center gap-2">
                                            Explore Options <ArrowRight size={14} />
                                        </span>
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
