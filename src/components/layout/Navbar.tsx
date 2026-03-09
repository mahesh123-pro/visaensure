"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Countries", href: "/#countries" },
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
                <Link href="/" className="flex items-center group transition-transform hover:scale-105">
                    <Logo />
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
                        className="hidden sm:inline-flex relative z-10 items-center justify-center overflow-hidden rounded-full p-0.5 font-medium shadow-none outline-none group"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-70 transition-opacity group-hover:opacity-100 animate-pulse" />
                        <span className="relative flex items-center justify-center gap-2 rounded-full bg-background px-6 py-2.5 transition-all text-sm group-hover:bg-opacity-0 group-hover:text-white">
                            Apply Now
                        </span>
                    </Link>
                </div>
            </div>
        </motion.header>
    );
}
