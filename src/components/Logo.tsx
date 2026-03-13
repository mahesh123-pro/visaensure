export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* SVG Logo matching the VisaEnsure design */}
            <div className="relative w-10 h-10 flex-shrink-0">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    <defs>
                        <linearGradient id="nav-logo-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#f73f30" />
                            <stop offset="100%" stopColor="#d11a14" />
                        </linearGradient>
                        <clipPath id="nav-circle-clip">
                            <circle cx="50" cy="50" r="48" />
                        </clipPath>
                    </defs>
                    <circle cx="50" cy="50" r="48" fill="url(#nav-logo-grad)" />

                    {/* Main Thick Swoosh */}
                    <path
                        d="M -10 65 Q 40 120 75 35"
                        fill="none" stroke="white" strokeWidth="8" strokeLinecap="round"
                        clipPath="url(#nav-circle-clip)"
                    />

                    {/* Thin Trail under the thick one */}
                    <path
                        d="M 5 75 Q 45 120 85 45"
                        fill="none" stroke="white" strokeWidth="2" strokeLinecap="round"
                        clipPath="url(#nav-circle-clip)"
                        opacity="0.8"
                    />

                    {/* Airplane */}
                    <g transform="translate(75, 35) rotate(22.5) translate(-12, -12)">
                        <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="white" />
                    </g>
                </svg>
            </div>
            {/* VisaEnsure Text */}
            <span className="font-heading font-bold text-2xl tracking-tight hidden sm:block">
                <span className="text-[#EE2720]">Visa</span>
                <span className="text-foreground dark:text-white">Ensure</span>
            </span>
        </div>
    );
}
