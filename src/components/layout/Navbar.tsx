"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Countries", href: "/#countries" },
    { name: "Success Stories", href: "/#testimonials" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-6 lg:px-12 ${scrolled ? "py-4 bg-background/80 backdrop-blur-xl border-b border-border shadow-sm" : "py-8 bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center group transition-transform hover:scale-105 gap-2">
                    <Logo />
                    <motion.div
                        animate={{
                            x: [0, 5, 0],
                            y: [0, -3, 0]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="text-primary hidden lg:block"
                    >
                        <Plane size={18} className="rotate-[15deg]" />
                    </motion.div>
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <ThemeToggle />
                    <Link
                        href="/contact"
                        className="hidden sm:inline-flex relative items-center justify-center px-8 py-3 overflow-hidden font-bold rounded-full group bg-primary text-white shadow-[0_5px_15px_rgba(238,39,32,0.2)] transition-all hover:shadow-[0_8px_25px_rgba(238,39,32,0.3)] hover:scale-105 active:scale-95"
                    >
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                        <span className="relative flex items-center gap-2">
                            Free Assessment
                        </span>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
