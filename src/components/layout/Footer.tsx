import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone, Youtube } from "lucide-react";
import Logo from "@/components/Logo";

export default function Footer() {
    return (
        <footer className="relative bg-card/80 backdrop-blur-md border-t border-border/50 pt-24 pb-10 overflow-hidden transition-colors mt-20">
            {/* Background aesthetic blobs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none translate-y-1/2"></div>
            {/* Animated gradient divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent shadow-[0_0_20px_1px_rgba(238,39,32,0.3)]"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
                {/* Brand Column */}
                <div className="space-y-6 lg:col-span-2 relative z-10">
                    <Link href="/" className="inline-block transition-transform hover:scale-105 drop-shadow-sm ml-[-80px] md:ml-[-180px]">
                        <Logo />
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-sm transition-colors font-medium">
                        Hassle-Free Visa Solutions | 100% Expert Guidance for All Visas
                    </p>
                    <div className="flex items-center gap-3">
                        {[
                            { Icon: Facebook, href: "https://facebook.com/visaensureconsultancy" },
                            { Icon: Twitter, href: "https://x.com/Visa_Ensure" },
                            { Icon: Instagram, href: "https://instagram.com/visa_ensure/" },
                            { Icon: Linkedin, href: "https://linkedin.com/company/visaensureconsultancy/" },
                        ].map(({ Icon, href }, idx) => (
                            <a
                                key={idx}
                                href={href}
                                className="w-10 h-10 rounded-2xl flex items-center justify-center bg-background shadow-sm border border-border/50 hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:-translate-y-1 text-foreground transition-all duration-300 group"
                            >
                                <Icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Services Column */}
                <div className="relative z-10">
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Visa Services
                    </h4>
                    <ul className="space-y-3">
                        {[
                            { name: "Study", href: "/services/study" },
                            { name: "Work", href: "/services/work" },
                            { name: "Migrate", href: "/services/migrate" },
                            { name: "Coaching", href: "/services/study" },
                            { name: "Tourism", href: "/services/tourism" },
                        ].map((service) => (
                            <li key={service.name}>
                                <Link href={service.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                                    {service.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Countries Column */}
                <div className="relative z-10">
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Top Countries
                    </h4>
                    <ul className="space-y-3">
                        {[
                            { name: "🇺🇸 USA", href: "/#countries" },
                            { name: "🇨🇦 Canada", href: "/#countries" },
                            { name: "🇬🇧 United Kingdom", href: "/#countries" },
                            { name: "🇦🇺 Australia", href: "/#countries" },
                            { name: "🇩🇪 Germany", href: "/#countries" },
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
                <div className="relative z-10">
                    <h4 className="font-heading font-semibold text-lg text-foreground mb-6 transition-colors flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                        Contact Us
                    </h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-3 text-muted-foreground text-sm transition-colors">
                            <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                            <span>#1 Floor, Vishudha 1-2-6, Domalguda, Main Road, Near Saduram Eye Hospital, Liberty Circle, Hyderabad – 500029</span>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Phone size={18} className="text-primary flex-shrink-0" />
                            <div className="flex flex-col">
                                <a href="tel:+919642442227" className="hover:text-primary transition-colors">+91 9642442227</a>
                                <a href="tel:+919052727229" className="hover:text-primary transition-colors">+91 9052727229</a>
                            </div>
                        </li>
                        <li className="flex items-center gap-3 text-muted-foreground text-sm transition-colors">
                            <Mail size={18} className="text-primary flex-shrink-0" />
                            <a href="mailto:apply@visaensure.com" className="hover:text-primary transition-colors">apply@visaensure.com</a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/+919052727229"
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

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-20 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6 transition-colors relative z-10">
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

