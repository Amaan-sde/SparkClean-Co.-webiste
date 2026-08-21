/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { SlidersHorizontal, Sparkles, Check, Info } from "lucide-react";

interface Hotspot {
  id: string;
  x: number;
  y: number;
  title: string;
  detail: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: "h1",
    x: 25,
    y: 40,
    title: "Eco Steam Stovetop Degrease",
    detail: "Non-toxic organic degreasing enzyme combined with 220°F pressurized dry steam breaks down burnt oils instantly.",
  },
  {
    id: "h2",
    x: 70,
    y: 30,
    title: "Streak-Free Glass Polish",
    detail: "Double-microfiber weave scrubbing leaves zero water residue, haze, or chemical streak lines.",
  },
  {
    id: "h3",
    x: 55,
    y: 75,
    title: "Deep Grout & Marble Sanitization",
    detail: "pH-neutral grout cleaner preserves sealed natural stone while killing 99.9% of bacteria.",
  },
];

export const BeforeAfterSlider: React.FC = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging) return;
      handleMove(e.touches[0].clientX);
    },
    [isDragging, handleMove]
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    },
    [isDragging, handleMove]
  );

  return (
    <section id="before-after" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 left-10 w-80 h-80 rounded-full bg-emerald-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>INTERACTIVE COMPARISON</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Drag To Reveal <span className="text-gradient-cyan">The Miracle Clean</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-base sm:text-lg font-light"
          >
            Slide the divider left and right to inspect real kitchen transformation results. Tap the pulse hotspots for deep technique breakdowns!
          </motion.p>
        </div>

        {/* Slider Box */}
        <div className="max-w-5xl mx-auto relative">
          
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            className="relative h-[400px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-slate-800 select-none cursor-ew-resize"
          >
            {/* CLEAN IMAGE (BACKGROUND) */}
            <img
              src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80"
              alt="Sparkling Clean Kitchen"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Clean Tag */}
            <div className="absolute top-6 right-6 bg-emerald-500 text-slate-950 px-4 py-1.5 rounded-full font-extrabold text-xs tracking-wider shadow-lg flex items-center gap-1.5 z-10">
              <Sparkles className="w-3.5 h-3.5 fill-current" />
              <span>SPARKCLEAN AFTER</span>
            </div>

            {/* DIRTY IMAGE (FOREGROUND CLIPPED) */}
            <div
              className="absolute top-0 bottom-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80"
                alt="Before Cleaning"
                className="absolute top-0 left-0 max-w-none h-full object-cover filter brightness-75 contrast-125 saturate-50 sepia-[0.2]"
                style={{ width: containerRef.current ? containerRef.current.clientWidth : "100%" }}
              />
              {/* Grime overlay layer */}
              <div className="absolute inset-0 bg-amber-950/25 mix-blend-multiply" />
              
              {/* Before Tag */}
              <div className="absolute top-6 left-6 bg-slate-950/80 backdrop-blur-md border border-white/20 text-slate-200 px-4 py-1.5 rounded-full font-bold text-xs tracking-wider z-10">
                BEFORE CLEANING
              </div>
            </div>

            {/* SLIDER HANDLE DIVIDER BAR */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-emerald-400 to-cyan-400 z-20 shadow-[0_0_15px_#10b981]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-950 border-2 border-emerald-400 shadow-xl flex items-center justify-center text-emerald-400">
                <SlidersHorizontal className="w-4 h-4" />
              </div>
            </div>

            {/* INTERACTIVE HOTSPOTS */}
            {HOTSPOTS.map((spot) => (
              <div
                key={spot.id}
                className="absolute z-20"
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveHotspot(activeHotspot?.id === spot.id ? null : spot);
                  }}
                  className="relative group cursor-pointer"
                >
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-7 w-7 bg-emerald-500 border-2 border-slate-950 text-slate-950 font-bold text-xs items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    +
                  </span>
                </button>
              </div>
            ))}

            {/* HOTSPOT MODAL POPUP */}
            {activeHotspot && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 max-w-sm w-11/12 bg-slate-950/90 backdrop-blur-xl border border-emerald-500/40 p-4 rounded-2xl shadow-2xl space-y-2 text-left"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-xs font-display">
                    <Info className="w-4 h-4" />
                    <span>{activeHotspot.title}</span>
                  </div>
                  <button
                    onClick={() => setActiveHotspot(null)}
                    className="text-slate-400 hover:text-white text-xs cursor-pointer px-1.5 py-0.5 rounded bg-slate-800"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  {activeHotspot.detail}
                </p>
              </motion.div>
            )}

          </div>

          {/* Value callouts underneath */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-300">100% Biodegradable Steam Clean</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-300">Zero Toxic Residue Guarantee</span>
            </div>
            <div className="bg-slate-900/60 border border-slate-800 p-4 rounded-2xl flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-slate-300">HEPA 13 Air Particle Filtration</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
