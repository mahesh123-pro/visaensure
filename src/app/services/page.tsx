"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";

const servicesDetails = [
    {
        title: "Student Visa",
        description: "Your gateway to global education. We guide you through university selection, application, and visa filing.",
        benefits: ["University selection assistance", "Scholarship guidance", "Interview preparation", "Post-arrival support"],
        process: ["Initial Consultation", "Documentation Collection", "Application Submission", "Biometrics & Interview", "Visa Issuance"],
        faqs: [
            { q: "How long does a student visa take?", a: "Processing times vary by country, typically taking 3 to 12 weeks." },
            { q: "Do I need an IELTS score?", a: "Most English-speaking countries require an IELTS or TOEFL score, though waivers exist for certain backgrounds." }
        ]
    },
    {
        title: "Work Visa",
        description: "Launch your international career with our comprehensive work visa and employer-sponsorship support.",
        benefits: ["Employer sponsorship guidance", "Labor certification assistance", "Dependant visa processing", "Permanent residency pathways"],
        process: ["Eligibility Assessment", "Job Offer Verification", "Petition Filing", "Visa Application", "Approval"],
        faqs: [
            { q: "Can my family join me?", a: "Yes, most work visas allow you to bring your spouse and dependent children." },
            { q: "What is an employer sponsor?", a: "An employer sponsor is a company in the destination country that guarantees your employment and supports your visa." }
        ]
    }
];

function FAQAccordion({ customfaqs }: { customfaqs: { q: string, a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {customfaqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden glass transition-colors">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground font-medium hover:bg-muted/50 transition-colors"
                    >
                        <span>{faq.q}</span>
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openIndex === index ? "text-primary rotate-180" : "text-muted-foreground"}`} />
                    </button>
                    <AnimatePresence>
                        {openIndex === index && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed border-t border-border transition-colors">
                                    {faq.a}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
}

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 bg-background min-h-screen transition-colors">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold font-heading mb-6 tracking-tight text-foreground transition-colors">
                        Comprehensive <br /> <span className="text-gradient">Visa Solutions</span>
                    </h1>
                    <p className="text-xl text-muted-foreground leading-relaxed transition-colors">
                        Tailored immigration pathways for students, professionals, and travelers. We handle the complexity so you can focus on your destination.
                    </p>
                </motion.div>

                <div className="space-y-32">
                    {servicesDetails.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="grid lg:grid-cols-2 gap-16"
                        >
                            <div className="transition-colors">
                                <h2 className="text-4xl font-bold font-heading text-foreground mb-4 transition-colors">{service.title}</h2>
                                <p className="text-lg text-muted-foreground mb-8 leading-relaxed transition-colors">{service.description}</p>

                                <h3 className="text-2xl font-semibold font-heading text-foreground mb-6 transition-colors">Key Benefits</h3>
                                <ul className="space-y-4 mb-10">
                                    {service.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                                            <span className="text-muted-foreground transition-colors">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h3 className="text-2xl font-semibold font-heading text-foreground mb-6 transition-colors">Process</h3>
                                <div className="flex flex-col gap-4 transition-colors">
                                    {service.process.map((step, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div className="w-8 h-8 rounded-full bg-card shadow-sm border border-border flex items-center justify-center text-sm font-bold text-foreground transition-colors shrink-0">
                                                {i + 1}
                                            </div>
                                            <span className="text-muted-foreground font-medium transition-colors">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-2 transition-colors">
                                <h3 className="text-2xl font-semibold font-heading text-foreground mb-8 transition-colors">Frequently Asked Questions</h3>
                                <FAQAccordion customfaqs={service.faqs} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
