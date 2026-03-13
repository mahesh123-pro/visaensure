import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Youtube } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="relative bg-background border-t border-border pt-20 pb-10 overflow-hidden transition-colors">
            {/* Animated gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_1px_rgba(238,39,32,0.3)]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Brand Column */}
                <div className="space-y-6 lg:col-span-2">
                    <Link href="/" className="inline-block transition-transform hover:scale-105">
                        <Logo />
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs transition-colors">
                        Expert visa consultants helping you with Study, Work, and PR visas for 25+ countries. Your international journey starts here.
                    </p>
                    <div className="flex items-center gap-3">
                        {[
                            { Icon: Facebook, href: "#" },
                            { Icon: Twitter, href: "#" },
                            { Icon: Instagram, href: "#" },
                            { Icon: Linkedin, href: "#" },
                            { Icon: Youtube, href: "#" },
                        ].map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-card shadow-sm border border-border hover:bg-primary hover:text-white hover:border-primary text-foreground transition-all duration-300 hover:scale-110"
                            >
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services Column */}
                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Visa Services</h4>
                    <ul className="space-y-3">
                        {[
                            "Student Visa",
                            "Work Visa",
                            "Tourist Visa",
                            "PR / Immigration",
                            "Documentation Support",
                        ].map((service) => (
                            <li key={service}>
                                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Countries Column */}
                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Top Countries</h4>
                    <ul className="space-y-3">
                        {[
                            { name: "🇨🇦 Canada", href: "/#countries" },
                            { name: "🇬🇧 United Kingdom", href: "/#countries" },
                            { name: "🇦🇺 Australia", href: "/#countries" },
                            { name: "🇩🇪 Germany", href: "/#countries" },
                            { name: "🇺🇸 USA", href: "/#countries" },
                        ].map((country) => (
                            <li key={country.name}>
                                <Link href={country.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    {country.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact Column */}
                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Contact Us</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-muted-foreground text-sm transition-colors">
                            <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>Plot No. 42, Jubilee Hills<br />Hyderabad, Telangana — 500033</span>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Phone size={18} className="text-primary flex-shrink-0" />
                            <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Mail size={18} className="text-primary flex-shrink-0" />
                            <a href="mailto:support@visaensure.com" className="hover:text-primary transition-colors">support@visaensure.com</a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-green-500 text-white text-xs font-bold rounded-full hover:bg-green-600 transition-colors"
                            >
                                💬 WhatsApp Us
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 transition-colors">
                <p className="text-sm text-muted-foreground transition-colors">
                    © {new Date().getFullYear()} VisaEnsure. All rights reserved.
                </p>
                <div className="flex gap-6 text-sm text-muted-foreground">
                    <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-foreground transition-colors">Refund Policy</Link>
                </div>
            </div>
        </footer>
    );
}

