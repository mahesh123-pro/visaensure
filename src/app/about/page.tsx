"use client";

import { motion } from "framer-motion";

const milestones = [
    { year: "2015", title: "Inception", description: "VisaEnsure founded with a mission to simplify global mobility." },
    { year: "2018", title: "Global Expansion", description: "Opened offices in 5 major countries, handling 10,000+ applications." },
    { year: "2021", title: "Digital Transformation", description: "Launched our proprietary AI-assisted visa success predictor." },
    { year: "2024", title: "Industry Leaders", description: "Recognized as the top immigration consultancy with a 99% success rate." },
];

export default function AboutPage() {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-foreground transition-colors">
                        Our <span className="text-gradient">Mission</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed transition-colors">
                        To bridge borders and connect dreams. VisaEnsure is committed to making global mobility accessible, transparent, and seamless for everyone.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[500px] rounded-3xl overflow-hidden glass border border-border transition-all"
                    >
                        <div className="absolute inset-0 bg-cover bg-center opacity-70" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1484&auto=format&fit=crop')" }} />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent transition-colors" />
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl font-bold font-heading text-foreground transition-colors">The Founder&apos;s Story</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg transition-colors">
                            &quot;I started VisaEnsure because I experienced the frustration of the immigration process firsthand. Getting my first student visa was a nightmare of confusing paperwork and endless delays. I knew there had to be a better way.&quot;
                        </p>
                        <p className="text-muted-foreground leading-relaxed text-lg transition-colors">
                            &quot;We built VisaEnsure not just as a consultancy, but as a dedicated partner for your global ambitions. We treat every application as if it were our own.&quot;
                        </p>
                        <div className="pt-4">
                            <h4 className="font-heading font-semibold text-foreground text-xl transition-colors">Elena Vance</h4>
                            <p className="text-primary text-sm font-medium tracking-wide uppercase transition-colors">Founder & CEO</p>
                        </div>
                    </motion.div>
                </div>

                <div className="mb-20 text-center">
                    <h2 className="text-4xl font-bold font-heading text-foreground mb-16 transition-colors">Our Journey</h2>
                    <div className="relative border-l border-border ml-4 md:ml-1/2 flex flex-col gap-12 max-w-4xl mx-auto transition-colors">
                        {milestones.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className="relative pl-12 text-left"
                            >
                                <div className="absolute left-[-5px] top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_rgba(238,39,32,0.3)] transition-all" />
                                <h3 className="text-3xl font-bold font-heading text-foreground mb-2 transition-colors">{item.year} - {item.title}</h3>
                                <p className="text-muted-foreground text-lg transition-colors">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
