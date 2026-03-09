import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="relative bg-background border-t border-border pt-20 pb-10 overflow-hidden transition-colors">
            {/* Animated gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_1px_rgba(238,39,32,0.3)]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link href="/" className="inline-block transition-transform hover:scale-105">
                        <Logo />
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs transition-colors">
                        Helping students and professionals secure visas faster with expert guidance. Your global journey starts here.
                    </p>
                    <div className="flex items-center gap-4">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                            <a
                                key={idx}
                                href="#"
                                className="w-10 h-10 rounded-full flex items-center justify-center bg-card shadow-sm border border-border hover:bg-primary/10 text-foreground transition-all duration-300 hover:scale-110"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Quick Links</h4>
                    <ul className="space-y-4">
                        {[
                            { name: "About Us", href: "/about" },
                            { name: "Our Services", href: "/services" },
                            { name: "Destinations", href: "/#countries" },
                            { name: "Contact Us", href: "/contact" },
                            { name: "Privacy Policy", href: "#" },
                        ].map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Services</h4>
                    <ul className="space-y-4">
                        {[
                            "Student Visa",
                            "Work Visa",
                            "Tourist Visa",
                            "Immigration Consultation",
                            "Documentation Support",
                        ].map((service) => (
                            <li key={service}>
                                <Link href="/services" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                                    {service}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors">Contact</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-muted-foreground text-sm transition-colors">
                            <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                            <span>123 Global Way, Suite 400<br />New York, NY 10001</span>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Phone size={18} className="text-primary flex-shrink-0" />
                            <span>+1 (555) 123-4567</span>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Mail size={18} className="text-primary flex-shrink-0" />
                            <span>support@visaensure.com</span>
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
                </div>
            </div>
        </footer>
    );
}
