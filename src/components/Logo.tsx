import Image from "next/image";

export default function Logo({ className = "", imageClassName = "w-[450px] md:w-[800px] h-44 md:h-72" }: { className?: string, imageClassName?: string }) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className={`relative flex-shrink-0 ${imageClassName}`}>
                <Image 
                    src="/images/visaensureMainlogo.png" 
                    alt="VisaEnsure Logo" 
                    fill 
                    className="object-contain"
                />
            </div>
            {/* We hide the HTML text because the new logo image already contains the "Visa Ensure" text */}
            <span className="font-heading font-bold text-2xl tracking-tight hidden sm:hidden">
                <span className="text-[#EE2720]">Visa</span>
                <span className="text-foreground dark:text-white">Ensure</span>
            </span>
        </div>
    );
}
