"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const countries = [
    {
        name: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
        color: "from-blue-600 to-red-600"
    },
    {
        name: "Canada",
        image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=1474&auto=format&fit=crop",
        color: "from-red-500 to-red-800"
    },
    {
        name: "UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1470&auto=format&fit=crop",
        color: "from-indigo-800 to-red-700"
    },
    {
        name: "Australia",
        image: "https://images.unsplash.com/photo-1523482580662-fefe3ed36b1d?q=80&w=1454&auto=format&fit=crop",
    },
    {
        name: "Europe",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1420&auto=format&fit=crop"
    }
];

export default function CountriesSection() {
    return (
        <section className="py-24 relative bg-background overflow-hidden transition-colors" id="countries">
            <div className="absolute top-0 right-[-20%] w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-soft-light pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6 transition-colors"
                        >
                            <span className="text-xs font-medium text-primary uppercase tracking-wider">Destinations</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold font-heading tracking-tight text-foreground mb-4 transition-colors"
                        >
                            Explore Top <span className="text-gradient">Destinations</span>
                        </motion.h2>
                    </div>
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
                            className={`group relative rounded-3xl overflow-hidden shadow-glass border border-border cursor-pointer transition-colors ${index === 0 ? "md:col-span-2 lg:col-span-2" : index === 3 ? "lg:col-span-2" : ""
                                }`}
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${country.image})` }}
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

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
