"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    CheckCircle2, ChevronDown, GraduationCap, Briefcase, Plane, Scale, 
    ArrowRight, Globe, FileText, Clock, Users, ShieldCheck, FileCheck2, 
    BookOpen, Building2, MapPin
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Suspense, useEffect } from "react";
import Magnetic from "@/components/animations/Magnetic";

const servicesData = [
    {
        id: "study",
        tabName: "Study",
        icon: GraduationCap,
        hero: {
            badge: "Global Education",
            headline: "Study at the World's Best Universities",
            desc: "Seamless student visa services tailored for your academic dreams. We guide you from university selection to arriving on campus.",
            primaryCta: "Start Assessment",
            secondaryCta: "View Partner Universities"
        },
        stats: [
            { label: "Approval Rate", value: "98%" },
            { label: "Partner Universities", value: "500+" },
            { label: "Students Placed", value: "5,000+" },
            { label: "Processing Speed", value: "Fast" }
        ],
        visaTypes: [
            { title: "F1 Student Visa (USA)", desc: "For academic studies at approved institutions in the US.", icon: BookOpen },
            { title: "Tier 4 (UK)", desc: "General student visa for higher education in the UK.", icon: Building2 },
            { title: "Study Permit (Canada)", desc: "Required for international students studying in Canada.", icon: MapPin },
            { title: "Subclass 500 (Australia)", desc: "Allows you to stay in Australia to study full-time.", icon: Globe }
        ],
        process: [
            "Free Profile Evaluation & University Shortlisting",
            "Application & Admission Offer Letter",
            "Financial Documentation Preparation",
            "Visa Interview Preparation & Filing",
            "Visa Approval & Pre-departure Briefing"
        ],
        documents: [
            "Valid Passport (6 months validity)",
            "University Acceptance/Offer Letter",
            "Academic Transcripts & Certificates",
            "Proof of Financial Funds",
            "Language Proficiency (IELTS/TOEFL)",
            "Statement of Purpose (SOP)"
        ],
        faqs: [
            { q: "How much bank balance is required?", a: "It depends on the country and university, but generally, you need to show funds covering 1 year of tuition and living expenses." },
            { q: "Do you help with SOP writing?", a: "Yes, our experts guide you in crafting a compelling Statement of Purpose that maximizes your approval chances." },
            { q: "What if I have a study gap?", a: "Study gaps are acceptable if justified with work experience, internships, or relevant activities. We help build a strong case." }
        ]
    },
    {
        id: "work",
        tabName: "Work",
        icon: Briefcase,
        hero: {
            badge: "Global Careers",
            headline: "Secure Your Dream Job Abroad",
            desc: "Hassle-free work visa solutions for leading opportunities worldwide. Expert guidance for employer-sponsored and skilled migration visas.",
            primaryCta: "Check Eligibility",
            secondaryCta: "Explore Opportunities"
        },
        stats: [
            { label: "Approval Rate", value: "96%" },
            { label: "Countries Supported", value: "15+" },
            { label: "Professionals Placed", value: "3,000+" },
            { label: "Average Time", value: "4-12 Wks" }
        ],
        visaTypes: [
            { title: "H1B Visa (USA)", desc: "For specialty occupations requiring theoretical or technical expertise.", icon: Briefcase },
            { title: "Skilled Worker (UK)", desc: "For professionals with a job offer from an approved UK employer.", icon: Building2 },
            { title: "Open Work Permit (Canada)", desc: "Allows you to work for any employer in Canada.", icon: FileCheck2 },
            { title: "Subclass 482 (Australia)", desc: "Temporary Skill Shortage visa for sponsored workers.", icon: Globe }
        ],
        process: [
            "Skills & Eligibility Assessment",
            "Resume Optimization & Job Search Strategy",
            "Employer Sponsorship Verification",
            "Petition & Labor Certification Filing",
            "Work Visa Application & Approval"
        ],
        documents: [
            "Valid Passport",
            "Confirmed Job Offer / Employment Contract",
            "Educational Degrees & Transcripts",
            "Detailed Resume & Work Experience Letters",
            "Police Clearance Certificate",
            "Medical Examination Report"
        ],
        faqs: [
            { q: "Do I need a job offer before applying?", a: "For most work visas (like H1B or UK Skilled Worker), yes. However, some countries offer job-seeker visas." },
            { q: "Can my family accompany me?", a: "Yes, most work visas allow you to bring your spouse and dependent children under dependent visa categories." },
            { q: "How long is a work visa valid?", a: "Validity usually ranges from 1 to 5 years, depending on the contract and country, often with options to extend." }
        ]
    },
    {
        id: "migrate",
        tabName: "Migrate",
        icon: Scale,
        hero: {
            badge: "Permanent Residency",
            headline: "Your Pathway to a New Home",
            desc: "Expert guidance for smooth and stress-free migration services. Start your permanent residency journey with confidence.",
            primaryCta: "Calculate PR Points",
            secondaryCta: "Book Consultation"
        },
        stats: [
            { label: "Success Rate", value: "99%" },
            { label: "Top Destinations", value: "Canada, Aus" },
            { label: "Families Migrated", value: "1,200+" },
            { label: "Processing Speed", value: "Priority" }
        ],
        visaTypes: [
            { title: "Express Entry (Canada)", desc: "The fastest pathway for skilled immigrants to get Canadian PR.", icon: Plane },
            { title: "PNP Programs (Canada)", desc: "Provincial Nominee Programs tailored to specific regional needs.", icon: MapPin },
            { title: "Subclass 189/190 (Aus)", desc: "Skilled independent and nominated visas for Australia.", icon: Globe },
            { title: "Global Talent Visa", desc: "For highly skilled individuals in target sectors.", icon: ShieldCheck }
        ],
        process: [
            "Comprehensive Profile Evaluation",
            "Language Test (IELTS/PTE) & Skills Assessment",
            "Expression of Interest (EOI) Submission",
            "Invitation to Apply (ITA)",
            "Final PR Application & Stamping"
        ],
        documents: [
            "Valid Passports for all applicants",
            "Educational Credential Assessment (ECA)",
            "Language Proficiency Results",
            "Proof of Settlement Funds",
            "Civil Documents (Marriage/Birth Certificates)",
            "Police & Medical Clearances"
        ],
        faqs: [
            { q: "What is the CRS score for Canada PR?", a: "The Comprehensive Ranking System (CRS) score fluctuates. We help optimize your profile to maximize your score." },
            { q: "What is the age limit for PR?", a: "While there is no strict limit, points for age usually decrease after 30-35 years depending on the country." },
            { q: "Can I include my parents in my application?", a: "Initially, PR covers you, your spouse, and dependent children. Parents can be sponsored later once you are settled." }
        ]
    },
    {
        id: "tourism",
        tabName: "Tourism",
        icon: Plane,
        hero: {
            badge: "Global Travel",
            headline: "Explore the World Hassle-Free",
            desc: "Tourist visa assistance tailored to your travel dreams. Fast, reliable, and error-free processing for your next adventure.",
            primaryCta: "Apply Now",
            secondaryCta: "View Requirements"
        },
        stats: [
            { label: "Approval Rate", value: "99.5%" },
            { label: "Destinations", value: "50+" },
            { label: "Visas Issued", value: "10,000+" },
            { label: "Processing Speed", value: "Express" }
        ],
        visaTypes: [
            { title: "B1/B2 Visa (USA)", desc: "Standard visitor visa for business or tourism in the US.", icon: Globe },
            { title: "Schengen Visa (Europe)", desc: "Access to 27 European countries with a single visa.", icon: MapPin },
            { title: "Standard Visitor (UK)", desc: "For tourism, business, or visiting family in the UK.", icon: Building2 },
            { title: "Visitor Visa (Canada/Aus)", desc: "Temporary visas for short-term stays and tourism.", icon: Plane }
        ],
        process: [
            "Destination & Itinerary Planning",
            "Document Checklist & Form Filling",
            "Appointment Scheduling",
            "Biometrics & Interview (If required)",
            "Passport Collection with Visa"
        ],
        documents: [
            "Original Passport (6 months validity)",
            "Completed Application Form & Photos",
            "Flight Itinerary & Hotel Bookings",
            "Bank Statements (Last 6 months)",
            "Income Tax Returns (ITR)",
            "Leave Letter from Employer"
        ],
        faqs: [
            { q: "How much bank balance is needed for a tourist visa?", a: "You need to show enough funds to cover your flight, accommodation, and daily expenses for the duration of your trip." },
            { q: "Do I need to book flights before applying?", a: "It's highly recommended to provide a provisional flight itinerary, but avoid purchasing non-refundable tickets until the visa is approved." },
            { q: "What is a Schengen visa?", a: "A Schengen visa allows you to travel freely across 27 European countries using a single application and visa stamp." }
        ]
    }
];

function FAQAccordion({ faqs }: { faqs: { q: string, a: string }[] }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="space-y-4">
            {faqs.map((faq, index) => (
                <div key={index} className="border border-border rounded-xl overflow-hidden glass transition-colors">
                    <button
                        onClick={() => toggle(index)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-primary text-foreground font-medium hover:bg-muted/50 transition-colors"
                    >
                        <span className="text-lg font-bold font-heading">{faq.q}</span>
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

function ServicesContent({ tabParam }: { tabParam: string }) {
    const initialTab = servicesData.find(s => s.id === tabParam)?.id || servicesData[0].id;
    const [activeTabId, setActiveTabId] = useState(initialTab);

    // Update tab if URL changes
    useEffect(() => {
        if (tabParam && servicesData.some(s => s.id === tabParam)) {
            setActiveTabId(tabParam);
        }
    }, [tabParam]);

    const activeData = servicesData.find(s => s.id === activeTabId)!;

    return (
        <div className="bg-background min-h-screen transition-colors pb-24">
            
            {/* Header / Tabs Navigation */}
            <div className="pt-32 pb-12 border-b border-border bg-card/50 backdrop-blur-md sticky top-0 z-40">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl md:text-5xl font-bold font-heading mb-4 tracking-tight text-foreground">
                            Expert Visa Services <span className="text-gradient">Tailored For You</span>
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Select a visa category below to explore the process, requirements, and how our expert team ensures your success.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 md:gap-6">
                        {servicesData.map((tab) => {
                            const isActive = activeTabId === tab.id;
                            return (
                                <Link
                                    href={`/services/${tab.id}`}
                                    key={tab.id}
                                    className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all duration-300 border ${
                                        isActive 
                                        ? "bg-primary text-white border-primary shadow-xl scale-105" 
                                        : "bg-background text-foreground border-border hover:border-primary/50 hover:bg-primary/5"
                                    }`}
                                >
                                    <tab.icon size={20} className={isActive ? "text-white" : "text-primary"} />
                                    {tab.tabName}
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTabId}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {/* 1. Hero Section */}
                        <div className="glass rounded-[3rem] p-10 md:p-16 border border-border shadow-sm mb-20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
                            <div className="max-w-3xl relative z-10">
                                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest mb-6">
                                    {activeData.hero.badge}
                                </span>
                                <h2 className="text-5xl md:text-6xl font-black font-heading mb-6 text-foreground leading-[1.1]">
                                    {activeData.hero.headline}
                                </h2>
                                <p className="text-xl text-muted-foreground leading-relaxed mb-10">
                                    {activeData.hero.desc}
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    <Magnetic>
                                        <button className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-primary/90 transition-colors flex items-center gap-2">
                                            {activeData.hero.primaryCta} <ArrowRight size={18} />
                                        </button>
                                    </Magnetic>
                                    <Magnetic>
                                        <button className="px-8 py-4 bg-card text-foreground border border-border font-bold rounded-xl hover:bg-muted transition-colors">
                                            {activeData.hero.secondaryCta}
                                        </button>
                                    </Magnetic>
                                </div>
                            </div>
                        </div>

                        {/* 2. Stats Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
                            {activeData.stats.map((stat, idx) => (
                                <div key={idx} className="p-8 rounded-3xl bg-card border border-border text-center hover:border-primary/50 transition-colors shadow-sm">
                                    <h3 className="text-4xl font-black font-heading text-gradient mb-2">{stat.value}</h3>
                                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* 3. Popular Visa Types */}
                        <div className="mb-24">
                            <h3 className="text-3xl font-bold font-heading mb-10 text-center text-foreground">Popular {activeData.tabName} Visa Types</h3>
                            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
                                {activeData.visaTypes.map((type, idx) => (
                                    <div key={idx} className="glass p-8 rounded-3xl border border-border hover:-translate-y-2 transition-transform duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                            <type.icon size={24} className="text-primary" />
                                        </div>
                                        <h4 className="text-xl font-bold font-heading mb-3 text-foreground">{type.title}</h4>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{type.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4 & 5. Step-by-step Process & Documents Checklist */}
                        <div className="grid lg:grid-cols-2 gap-12 mb-24">
                            {/* Process */}
                            <div className="glass p-10 rounded-[3rem] border border-border">
                                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                                    <span className="w-3 h-8 bg-primary rounded-full" />
                                    Step-by-Step Process
                                </h3>
                                <div className="space-y-6">
                                    {activeData.process.map((step, idx) => (
                                        <div key={idx} className="flex gap-5">
                                            <div className="w-10 h-10 rounded-full bg-card border-2 border-primary flex items-center justify-center font-bold text-primary shrink-0 z-10 relative">
                                                {idx + 1}
                                                {idx !== activeData.process.length - 1 && (
                                                    <div className="absolute top-10 left-1/2 -translate-x-1/2 w-0.5 h-6 bg-border -z-10" />
                                                )}
                                            </div>
                                            <div className="pt-2">
                                                <p className="font-bold text-foreground">{step}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Documents */}
                            <div className="bg-card p-10 rounded-[3rem] border border-border shadow-sm">
                                <h3 className="text-2xl font-bold font-heading mb-8 flex items-center gap-3">
                                    <span className="w-3 h-8 bg-blue-500 rounded-full" />
                                    Essential Documents Checklist
                                </h3>
                                <ul className="space-y-4">
                                    {activeData.documents.map((doc, idx) => (
                                        <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                                            <FileCheck2 className="w-6 h-6 text-blue-500 shrink-0" />
                                            <span className="font-medium text-foreground">{doc}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 p-4 bg-blue-500/10 rounded-xl border border-blue-500/20 text-sm text-blue-700 dark:text-blue-300 font-medium flex items-start gap-3">
                                    <Clock className="w-5 h-5 shrink-0" />
                                    <p>Note: Documentation requirements may vary slightly depending on your specific profile and destination country.</p>
                                </div>
                            </div>
                        </div>

                        {/* 6. FAQs */}
                        <div className="max-w-3xl mx-auto mb-24">
                            <h3 className="text-3xl font-bold font-heading mb-10 text-center text-foreground">Frequently Asked Questions</h3>
                            <FAQAccordion faqs={activeData.faqs} />
                        </div>

                        {/* 7. Why Choose Us Bar */}
                        <div className="glass rounded-full py-6 px-12 border border-border flex flex-wrap justify-center gap-8 md:gap-16 mb-24 shadow-lg">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary" />
                                <span className="font-bold text-foreground">100% Expert Guidance</span>
                            </div>
                            <div className="hidden md:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="w-6 h-6 text-green-500" />
                                <span className="font-bold text-foreground">Zero Error Processing</span>
                            </div>
                            <div className="hidden lg:block w-px h-6 bg-border" />
                            <div className="flex items-center gap-3">
                                <Users className="w-6 h-6 text-blue-500" />
                                <span className="font-bold text-foreground">Dedicated Case Manager</span>
                            </div>
                        </div>

                        {/* 8. Consultation Banner */}
                        <div className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-20 text-center text-white">
                            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h3 className="text-4xl md:text-5xl font-black font-heading mb-6 leading-tight">Ready to start your {activeData.tabName.toLowerCase()} journey?</h3>
                                <p className="text-primary-foreground/80 text-xl mb-10">Book a free consultation with our experts to evaluate your profile and discuss your best options.</p>
                                <Magnetic>
                                    <Link href="/contact" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-primary rounded-xl font-black shadow-xl hover:scale-105 transition-transform text-lg uppercase tracking-wider">
                                        Book Free Consultation <ArrowRight size={20} />
                                    </Link>
                                </Magnetic>
                            </div>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}

export default function ServicesPage({ params }: { params: { tab: string } }) {
    return (
        <ServicesContent tabParam={params.tab} />
    );
}
