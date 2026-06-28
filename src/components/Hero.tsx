/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Star, Shield, ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
          alt="Bright Luxury Living Room"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-60 scale-105 animate-[zoom_40s_infinite_alternate]"
        />
        {/* Multi-layered dark and green-tinted gradients for premium readability and brand alignment */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/60 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
      </div>

      {/* Floating Sparkles & Bubbles (Decorative) */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        {/* Bubble 1 */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-brand-400/10 border border-brand-300/20 backdrop-blur-[1px] shadow-lg shadow-brand-500/5"
        />
        {/* Bubble 2 */}
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, -25, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-16 w-32 h-32 rounded-full bg-brand-300/10 border border-brand-200/25 backdrop-blur-[1px] shadow-lg shadow-brand-500/5"
        />
        {/* Floating Sparkle Icon */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] right-1/4 text-brand-300/40"
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6 md:space-y-8">
            {/* Top trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/15 border border-brand-400/20 text-brand-300 text-xs font-semibold tracking-wide uppercase mx-auto md:mx-0"
            >
              <Star className="w-3.5 h-3.5 fill-current text-brand-300" />
              <span>Rated #1 cleaning company in town</span>
            </motion.div>

            {/* Core Titles */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-none"
              >
                A Spotless Home, <br className="hidden sm:inline" />
                <span className="bg-gradient-to-r from-brand-300 to-brand-400 bg-clip-text text-transparent drop-shadow-sm">
                  Every Single Time
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Professional residential and commercial cleaning services you can trust. Enjoy more free time while our licensed, bonded specialists make your space shine.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2"
            >
              <button
                onClick={onOpenQuote}
                className="group px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-bold rounded-xl shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer text-base"
                id="hero-primary-quote-btn"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#services"
                className="px-8 py-4 bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/30 text-white font-bold rounded-xl backdrop-blur-sm transition-all hover:-translate-y-0.5 text-center text-base"
                id="hero-secondary-services-btn"
              >
                Our Services
              </a>
            </motion.div>

            {/* Value markers under CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto md:mx-0"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Fully Insured
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  Eco-Friendly
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-brand-400 shrink-0" />
                <span className="text-[11px] font-semibold text-slate-300 uppercase tracking-wider">
                  100% Happy
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Side Image / Graphic Accent */}
          <div className="hidden lg:col-span-4 lg:flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-xs"
            >
              {/* Premium overlapping card styling */}
              <div className="absolute inset-0 bg-brand-500 rounded-2xl rotate-6 opacity-20 blur-lg" />
              <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-lg shadow-2xl space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-brand-400/20 text-brand-300 flex items-center justify-center">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold font-display text-sm">Professional Quality</h4>
                    <p className="text-xs text-slate-400">Trusted by over 1,500+ homes</p>
                  </div>
                </div>

                {/* Simulated review */}
                <div className="border-t border-white/10 pt-4 text-xs text-slate-300 italic leading-relaxed">
                  "Absolutely amazing! The SparkClean team transformed my apartment. It feels brand new, clean, and smells incredibly fresh."
                </div>
                <div className="flex items-center gap-1.5 text-brand-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="text-[10px] text-slate-400 ml-1 font-semibold">Sarah M., Studio Owner</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5">
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 animate-pulse">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-brand-400"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </div>
    </section>
  );
};
