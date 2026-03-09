export default function Logo({ className = "" }: { className?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {/* Circle with plane and swoosh shape */}
            <div className="relative w-10 h-10 flex-shrink-0 bg-[#EE2720] rounded-full overflow-hidden flex items-center justify-center">
                {/* Swoosh */}
                <div className="absolute w-[150%] h-[150%] border-[4px] border-b-transparent border-r-transparent border-t-white border-l-white rounded-full -bottom-[60%] -left-[20%] rotate-[15deg] opacity-90"></div>
                {/* Plane */}
                <svg
                    className="w-5 h-5 text-white absolute top-2 right-1.5 rotate-[45deg]"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                </svg>
            </div>
            {/* VisaEnsure Text */}
            <span className="font-heading font-bold text-2xl tracking-tight hidden sm:block">
                <span className="text-[#EE2720]">Visa</span>
                <span className="text-[#232323]">Ensure</span>
            </span>
        </div>
    );
}
