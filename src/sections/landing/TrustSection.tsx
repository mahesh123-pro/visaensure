"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    useEffect(() => {
        if (!isInView) return;

        let start = 0;
        const end = value;
        const incrementTime = (duration / end) * 1000;

        const timer = setInterval(() => {
            start += Math.ceil(end / (duration * 60));
            if (start >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, incrementTime);

        return () => clearInterval(timer);
    }, [isInView, value, duration]);

    return <span ref={ref}>{count}</span>;
}

const trustItems = [
    { label: "Successful Applications", value: 1000, suffix: "+" },
    { label: "Visa Experts", value: 50, suffix: "+" },
    { label: "Global Processing", value: 99, suffix: "%" },
];

export default function TrustSection() {
    return (
        <section className="py-20 relative bg-background">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 divide-x divide-border transition-colors">
                {trustItems.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: index * 0.2 }}
                        className="flex flex-col items-center justify-center p-8 text-center group"
                    >
                        <h2 className="text-5xl md:text-6xl font-bold font-heading mb-3 text-foreground flex items-center">
                            <span className="text-gradient group-hover:scale-110 transition-transform duration-500">
                                <AnimatedCounter value={item.value} />
                                {item.suffix}
                            </span>
                        </h2>
                        <p className="text-muted-foreground text-sm md:text-base font-semibold uppercase tracking-widest">
                            {item.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
