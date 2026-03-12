"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

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
    return (
        <section className="relative h-[150vh] w-full bg-zinc-950 overflow-hidden flex flex-col items-center justify-start py-32">
            
            {/* Cinematic Overlay Text Content */}
            <div className="relative z-10 pointer-events-none flex flex-col items-center justify-center p-8 text-center mt-20">
                <h2 className="text-6xl md:text-9xl font-black font-heading tracking-tighter mb-8 drop-shadow-[0_20px_50px_rgba(0,0,0,1)]">
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-transparent">
                        TAKE FLIGHT
                    </span>
                    <br />
                    <span className="text-white/40 text-4xl md:text-6xl tracking-[0.3em] uppercase">Beyond Horizons</span>
                </h2>
                
                <div className="max-w-2xl mx-auto backdrop-blur-xl bg-white/5 p-10 rounded-[3rem] border border-white/10 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed relative z-10">
                        Experience the next generation of visa consultancy. Our AI-driven precision meets cinematic 3D interaction.
                    </p>
                </div>
            </div>

            {/* Canvas for Three.js - Dynamically loaded */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>
            
            {/* Edge Overlays */}
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent z-20 pointer-events-none" />
        </section>
    );
}
