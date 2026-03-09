"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { StudentVisaIllustration, WorkVisaIllustration, TouristVisaIllustration, PassportIllustration } from "@/components/Illustrations/TravelIllustrations";

const servicesDetails = [
    {
        title: "Student Visa",
        image: "/images/student-visa.png",
        illustration: StudentVisaIllustration,
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
        image: "/images/work-visa.png",
        illustration: WorkVisaIllustration,
        description: "Launch your international career with our comprehensive work visa and employer-sponsorship support.",
        benefits: ["Employer sponsorship guidance", "Labor certification assistance", "Dependant visa processing", "Permanent residency pathways"],
        process: ["Eligibility Assessment", "Job Offer Verification", "Petition Filing", "Visa Application", "Approval"],
        faqs: [
            { q: "Can my family join me?", a: "Yes, most work visas allow you to bring your spouse and dependent children." },
            { q: "What is an employer sponsor?", a: "An employer sponsor is a company in the destination country that guarantees your employment and supports your visa." }
        ]
    },
    {
        title: "Tourist Visa",
        image: "/images/tourist-visa.png",
        illustration: TouristVisaIllustration,
        description: "Explore the world with ease. Our tourist visa services cover all major destinations with a focus on speed and reliability.",
        benefits: ["Itinerary planning", "Hotel booking assistance", "Fast-track processing", "Multi-country visa guidance"],
        process: ["Destination Selection", "Document Checklist", "Form Submission", "Fee Payment", "Visa Collection"],
        faqs: [
            { q: "How early should I apply?", a: "We recommend applying at least 4-6 weeks before your intended travel date." },
            { q: "Can I extend my tourist visa?", a: "Extension rules vary by country; our consultants can advise on specific local policies." }
        ]
    },
    {
        title: "Immigration Consultation",
        image: "/images/immigration.png",
        illustration: PassportIllustration,
        description: "Strategic planning for permanent residency and citizenship. Navigate complex immigration laws with expert help.",
        benefits: ["PR eligibility check", "Legal document preparation", "Spousal and family migration", "Citizen application support"],
        process: ["Case Analysis", "Strategy Development", "File Preparation", "Submission & Follow-up", "Decision"],
        faqs: [
            { q: "What is the difference between PR and Citizenship?", a: "PR allows you to live and work indefinitely, while Citizenship gives you a passport and voting rights." },
            { q: "Which country is easiest to immigrate to?", a: "Ease of immigration depends on your skills, age, and financial situation. We provide personalized assessments." }
        ]
    },
    {
        title: "Documentation Support",
        image: "/images/documentation.png",
        illustration: PassportIllustration,
        description: "Flawless paperwork preparation for all your official needs. We ensure your documents meet all legal standards.",
        benefits: ["Notarization services", "Certified translations", "Apostille and legalization", "Fast-turnaround processing"],
        process: ["Document Review", "Service Selection", "Processing", "Quality Check", "Delivery"],
        faqs: [
            { q: "Are your translations certified?", a: "Yes, we provide certified translations accepted by embassies and official bodies worldwide." },
            { q: "Do you handle apostille services?", a: "Yes, we facilitate apostille and document legalization for international use." }
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
                            className="bg-card rounded-[2.5rem] border border-border/50 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500"
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Image and Quick Stats Section */}
                                <div className="relative h-[400px] lg:h-full min-h-[500px] overflow-hidden group">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent lg:hidden" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent hidden lg:block" />

                                    {/* Illustration Overlay */}
                                    <div className="absolute top-8 right-8 w-48 h-48 opacity-[0.15] pointer-events-none group-hover:scale-110 transition-transform duration-700">
                                        <service.illustration />
                                    </div>

                                    {/* Action Buttons Overlay for Mobile */}
                                    <div className="absolute bottom-8 left-8 right-8 lg:hidden">
                                        <h2 className="text-4xl font-bold font-heading text-foreground mb-2">{service.title}</h2>
                                        <p className="text-muted-foreground line-clamp-2">{service.description}</p>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 lg:p-16 flex flex-col justify-center">
                                    <div className="hidden lg:block mb-8">
                                        <h2 className="text-5xl font-bold font-heading text-foreground mb-4 transition-colors">{service.title}</h2>
                                        <p className="text-xl text-muted-foreground leading-relaxed transition-colors">{service.description}</p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-12">
                                        <div>
                                            <h3 className="text-xl font-bold font-heading text-foreground mb-6 uppercase tracking-wider flex items-center gap-2">
                                                <div className="w-2 h-8 bg-primary rounded-full" />
                                                Key Benefits
                                            </h3>
                                            <ul className="space-y-4">
                                                {service.benefits.map((benefit, i) => (
                                                    <li key={i} className="flex items-start gap-3">
                                                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span className="text-muted-foreground font-medium text-sm md:text-base">{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold font-heading text-foreground mb-6 uppercase tracking-wider flex items-center gap-2">
                                                <div className="w-2 h-8 bg-primary/40 rounded-full" />
                                                The Process
                                            </h3>
                                            <div className="space-y-4">
                                                {service.process.map((step, i) => (
                                                    <div key={i} className="flex items-center gap-4 group/step">
                                                        <div className="w-10 h-10 rounded-xl bg-muted border border-border flex items-center justify-center text-sm font-bold text-foreground group-hover/step:bg-primary group-hover/step:text-white transition-all duration-300 shrink-0">
                                                            {i + 1}
                                                        </div>
                                                        <span className="text-muted-foreground font-medium text-sm md:text-base">{step}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-16 pt-12 border-t border-border">
                                        <h3 className="text-2xl font-bold font-heading text-foreground mb-8">Service FAQs</h3>
                                        <FAQAccordion customfaqs={service.faqs} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
