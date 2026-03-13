"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ChevronRight, Globe, GraduationCap, Briefcase, MapPin, Calculator } from "lucide-react";

const questions = [
    {
        id: "nationality",
        title: "What is your nationality?",
        icon: Globe,
        options: ["India", "UAE", "Nigeria", "Philippines", "Other"]
    },
    {
        id: "destination",
        title: "Where do you want to go?",
        icon: MapPin,
        options: ["Canada", "UK", "Australia", "USA", "Europe"]
    },
    {
        id: "visaType",
        title: "What type of visa do you need?",
        icon: Briefcase, // using briefcase for general, but it covers all
        options: ["Study", "Work", "PR", "Tourist", "Business"]
    },
    {
        id: "education",
        title: "Highest level of education?",
        icon: GraduationCap,
        options: ["High School", "Bachelor's", "Master's", "PhD"]
    },
    {
        id: "experience",
        title: "Years of work experience?",
        icon: Calculator,
        options: ["None", "1-3 Years", "3-5 Years", "5+ Years"]
    }
];

export default function EligibilityCheckerSection() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showResult, setShowResult] = useState(false);
    const [score, setScore] = useState(0);

    const handleSelect = (option: string) => {
        setAnswers(prev => ({ ...prev, [questions[currentStep].id]: option }));
        
        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(prev => prev + 1), 400); // slight delay for visual feedback
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        // Mock scoring logic just for demonstration
        let mockScore = 85; 
        if (answers.education === "Master's" || answers.education === "PhD") mockScore += 5;
        if (answers.experience === "5+ Years") mockScore += 6;
        if (answers.visaType === "PR") mockScore -= 4; // PR is harder
        
        // Cap to 100
        const finalScore = Math.min(mockScore, 99);
        
        setScore(finalScore);
        setTimeout(() => setShowResult(true), 600);
    };

    const resetChecker = () => {
        setAnswers({});
        setCurrentStep(0);
        setShowResult(false);
    };

    return (
        <section className="py-24 relative bg-background overflow-hidden" id="eligibility-checker">
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/5 via-transparent to-background pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4 text-foreground tracking-tight">
                        Check Your <span className="text-gradient">Visa Eligibility</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">Answer 5 quick questions to get an instant success prediction score.</p>
                </motion.div>

                <div className="glass rounded-3xl p-8 md:p-12 border border-border shadow-[0_10px_40px_rgba(238,39,32,0.1)] backdrop-blur-2xl relative min-h-[400px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        {!showResult ? (
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full"
                            >
                                <div className="flex items-center justify-center gap-3 mb-8">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                                        {(() => {
                                            const Icon = questions[currentStep].icon;
                                            return <Icon size={24} />;
                                        })()}
                                    </div>
                                    <h3 className="text-2xl font-bold font-heading text-foreground">
                                        {questions[currentStep].title}
                                    </h3>
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                                    {questions[currentStep].options.map((option) => (
                                        <button
                                            key={option}
                                            onClick={() => handleSelect(option)}
                                            className="px-6 py-4 rounded-xl border border-border bg-card/50 text-foreground font-medium hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-sm md:text-base flex items-center justify-between group"
                                        >
                                            {option}
                                            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-10px] group-hover:translate-x-0 transition-transform" />
                                        </button>
                                    ))}
                                </div>
                                
                                <div className="mt-12 flex justify-center gap-2">
                                    {questions.map((_, i) => (
                                        <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentStep ? 'w-8 bg-primary' : i < currentStep ? 'w-4 bg-primary/40' : 'w-4 bg-border'}`} />
                                    ))}
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="result"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center justify-center"
                            >
                                <div className="w-32 h-32 rounded-full border-8 border-primary/20 flex items-center justify-center relative mb-8">
                                    <motion.div 
                                        initial={{ strokeDasharray: "0, 100" }}
                                        animate={{ strokeDasharray: `${score}, 100` }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="absolute inset-0 rounded-full border-8 border-primary z-10"
                                        style={{ borderTopColor: "transparent", borderRightColor: "transparent", transform: "rotate(-45deg)" }}
                                    />
                                    <span className="text-4xl font-black font-heading text-foreground">{score}%</span>
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-foreground mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="text-green-500" /> High Eligibility
                                </h3>
                                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                                    Based on your profile, you have a strong chance of securing a {answers.visaType} visa for {answers.destination}.
                                </p>
                                <div className="flex gap-4">
                                    <button 
                                        onClick={resetChecker}
                                        className="px-6 py-3 rounded-full border border-border text-foreground hover:bg-muted font-medium transition-colors"
                                    >
                                        Recalculate
                                    </button>
                                    <button className="px-6 py-3 rounded-full bg-primary text-white font-medium shadow-lg hover:shadow-[0_10px_30px_rgba(238,39,32,0.3)] hover:-translate-y-1 transition-all flex items-center gap-2">
                                        Discuss Your Case <ChevronRight size={18} />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
