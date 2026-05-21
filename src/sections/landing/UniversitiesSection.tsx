"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useState } from "react";

const universitiesData = [
    {
        country: "USA",
        flag: "🇺🇸",
        list: [
            "Arizona State University", "University of Arizona", "Colorado State University", "University of Connecticut", "CSU", "University of Illinois Chicago", "Iowa State University", "LSU", "UMBC", "University of Michigan–Flint", "UMSL", "UNC Wilmington", "Ohio State University", "Texas A&M"
        ]
    },
    {
        country: "UK",
        flag: "🇬🇧",
        list: [
            "University of Essex", "UNSW", "UCLan", "Northumbria University", "University of West London", "Edinburgh Heriot-Watt", "London Brunel", "Middlesex University", "University of Bedfordshire", "University of Law", "De Montfort University", "University of London", "BPP University"
        ]
    },
    {
        country: "Canada",
        flag: "🇨🇦",
        list: [
            "Lakehead University", "Brock University", "Trent University", "Nipissing University", "Ryerson University (TMU)", "Wilfrid Laurier", "University of Regina", "UNBC", "Capilano University", "Royal Roads University", "University of Canada West", "University of Saskatchewan", "University of Manitoba", "Mount Saint Vincent", "St. Francis Xavier", "Acadia University"
        ]
    },
    {
        country: "Europe",
        flag: "🇪🇺",
        list: [
            "University College Dublin", "Maynooth University", "TU Dublin", "Royal College of Surgeons Ireland", "Schiller International", "UCAM", "NEOMA Business School", "École Polytechnique", "University Paris-Saclay", "Grenoble Institute of Technology", "Webster University Geneva", "Aalto University", "TU/e", "University of Europe for Applied Sciences", "Karlsruhe Institute of Technology", "AGH University"
        ]
    },
    {
        country: "Australia",
        flag: "🇦🇺",
        list: [
            "University of Sydney", "Monash University", "UNSW Sydney", "University of Queensland", "Australian National University", "University of Technology Sydney", "UWA", "Griffith University", "Western Sydney University", "Melbourne Institute of Technology", "La Trobe University", "Swinburne University"
        ]
    }
];

export default function UniversitiesSection() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-24 relative bg-background overflow-hidden" id="universities">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-card shadow-sm border border-border mb-6"
                    >
                        <GraduationCap size={16} className="text-primary" />
                        <span className="text-xs font-medium text-primary uppercase tracking-wider">Top Institutions</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold font-heading mb-6 tracking-tight text-foreground"
                    >
                        Our Partner <span className="text-gradient">Universities</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg text-muted-foreground leading-relaxed"
                    >
                        We have partnered with some of the world's most prestigious universities and colleges to give you the best options for your global education.
                    </motion.p>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {universitiesData.map((data, idx) => (
                        <button
                            key={data.country}
                            onClick={() => setActiveTab(idx)}
                            className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 border ${
                                activeTab === idx 
                                ? "bg-primary text-white border-primary shadow-lg scale-105" 
                                : "bg-card text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                            }`}
                        >
                            <span className="text-xl">{data.flag}</span>
                            {data.country}
                        </button>
                    ))}
                </div>

                {/* University List Grid */}
                <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                    {universitiesData[activeTab].list.map((uni, idx) => (
                        <div key={idx} className="glass p-4 rounded-xl border border-border/50 bg-card/40 backdrop-blur-md flex items-center gap-3 hover:border-primary/30 hover:bg-primary/5 transition-colors">
                            <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                            <span className="font-medium text-sm text-foreground">{uni}</span>
                        </div>
                    ))}
                    <div className="glass p-4 rounded-xl border border-primary/20 bg-primary/5 backdrop-blur-md flex items-center justify-center gap-3">
                        <span className="font-bold text-sm text-primary italic">And many more...</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
