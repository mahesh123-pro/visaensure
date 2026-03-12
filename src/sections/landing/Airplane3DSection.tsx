"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef, useEffect, useState } from "react";

// Dynamically import the 3D components with SSR disabled
const Scene3D = dynamic(() => import("./Airplane3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center bg-zinc-950">
      <div className="animate-pulse text-primary font-bold tracking-widest uppercase">
        Initializing 3D Space...
      </div>
    </div>
  ),
});

export default function Airplane3DSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [scrollOpacity, setScrollOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            
            // Calculate how much of the section is visible
            if (rect.top < windowHeight && rect.bottom > 0) {
                setScrollOpacity(1);
            } else {
                setScrollOpacity(0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section 
            ref={sectionRef}
            className="relative h-[160vh] w-full bg-slate-950 overflow-hidden flex flex-col items-center justify-start py-40"
        >
            
            {/* Cinematic Overlay Text Content */}
            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center p-8 text-center mt-32 max-w-6xl">
                <h2 className="text-7xl md:text-[12rem] font-black font-heading tracking-tighter mb-12 drop-shadow-[0_25px_60px_rgba(0,0,0,1)] uppercase">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-primary/50 to-primary/20">
                        Wings of
                    </span>
                    <br />
                    <span className="text-white drop-shadow-2xl">Assurance</span>
                </h2>
                
                <div className="max-w-xl mx-auto backdrop-blur-3xl bg-white/5 p-12 rounded-[4rem] border border-white/10 shadow-3xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="text-2xl md:text-3xl text-white/90 font-medium leading-tight relative z-10 tracking-tight">
                        Experience the next generation of global mobility. Our AI precision meets 3D interaction.
                    </p>
                </div>
            </div>

            {/* Canvas for Three.js - Dynamically loaded */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>
            
            {/* Edge Overlays to blend with existing content */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
