"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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
            <div className="absolute left-[-80px] md:left-[-180px] top-1/2 -translate-y-1/2 z-20">
                <Link href="/" className="flex items-center group transition-transform hover:scale-110 gap-2">
                    <Logo />
                </Link>
            </div>

            <div className="max-w-7xl mx-auto flex items-center justify-end relative">

                <div className="flex-grow" /> {/* Spacer to push nav links to the right if needed */}

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

                </div>
            </div>
        </motion.header>
    );
}
