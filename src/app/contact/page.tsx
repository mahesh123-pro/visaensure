"use client";

import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-foreground">
                        Get in <span className="text-gradient">Touch</span>
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Our global team of immigration experts is ready to assist you. Drop us a message or visit our office.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-start transition-colors">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl font-bold font-heading text-foreground mb-8 transition-colors">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium tracking-wide text-muted-foreground transition-colors" htmlFor="firstName">First Name</label>
                                    <input id="firstName" type="text" className="w-full bg-card shadow-sm border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body placeholder:text-muted-foreground/50" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium tracking-wide text-muted-foreground transition-colors" htmlFor="lastName">Last Name</label>
                                    <input id="lastName" type="text" className="w-full bg-card shadow-sm border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body placeholder:text-muted-foreground/50" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium tracking-wide text-muted-foreground transition-colors" htmlFor="email">Email Address</label>
                                <input id="email" type="email" className="w-full bg-card shadow-sm border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body placeholder:text-muted-foreground/50" placeholder="john@example.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium tracking-wide text-muted-foreground transition-colors" htmlFor="message">How can we help?</label>
                                <textarea id="message" rows={5} className="w-full bg-card shadow-sm border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all font-body resize-none placeholder:text-muted-foreground/50" placeholder="Tell us about your visa requirements..." />
                            </div>

                            <button className="w-full relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-medium transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(238,39,32,0.3)] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                                Send Message
                                <Send size={18} />
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-12 transition-colors"
                    >
                        <div>
                            <h2 className="text-3xl font-bold font-heading text-foreground mb-8 transition-colors">Contact Information</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-foreground text-lg transition-colors">Global Headquarters</h4>
                                        <p className="text-muted-foreground leading-relaxed mt-1 transition-colors">123 Global Way, Suite 400<br />New York, NY 10001, USA</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-foreground text-lg transition-colors">Phone Number</h4>
                                        <p className="text-muted-foreground leading-relaxed mt-1 transition-colors">+1 (555) 123-4567<br />Toll-Free: +1 (800) VISA-YES</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 transition-colors">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-semibold text-foreground text-lg transition-colors">Email Address</h4>
                                        <p className="text-muted-foreground leading-relaxed mt-1 transition-colors">support@visaensure.com<br />consult@visaensure.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-[300px] w-full rounded-3xl overflow-hidden glass border border-border group transition-all">
                            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1474&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 opacity-60" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-black/40 to-transparent transition-colors" />

                            {/* Animated Map Ping */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full">
                                <motion.div
                                    animate={{ scale: [1, 4, 1], opacity: [0.8, 0, 0.8] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute inset-0 bg-primary rounded-full"
                                />
                            </div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-foreground font-medium shadow-sm flex items-center gap-2 transition-colors">
                                    <MapPin size={16} className="text-primary" />
                                    Visit our NY Office
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
