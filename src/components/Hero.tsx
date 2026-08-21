/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, Star, Shield, Wand2, CheckCircle2, Zap, Play } from "lucide-react";

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 pt-24 pb-16"
    >
      {/* Dark Ambient Background Image with Cyber Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80"
          alt="Bright Luxury Living Room"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover opacity-25 scale-105"
        />
        {/* Multi-layered radial gradients for ultra dark obsidian aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/15 via-transparent to-slate-950" />
      </div>

      {/* Floating Sparkles & Cyber Particle Orbs */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-emerald-500/10 blur-[100px]"
        />
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-16 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]"
        />
      </div>

      {/* Main Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center md:text-left">
            
            {/* Top Rating Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/90 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wider uppercase mx-auto md:mx-0 shadow-lg shadow-emerald-500/10"
            >
              <div className="flex items-center text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="text-white font-black">4.98 / 5.0</span>
              <span className="text-slate-400">• Rated #1 Luxury Cleaners</span>
            </motion.div>

            {/* Core Titles */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white font-display tracking-tight leading-[1.08]"
              >
                Immaculate Spaces. <br />
                <span className="text-gradient-emerald">
                  Zero Effort Required.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Experience the gold standard in residential and commercial deep cleaning. Licensed background-checked specialists, non-toxic eco steam sanitization, and a 100% money-back guarantee.
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
                className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold rounded-2xl shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer text-base"
                id="hero-primary-quote-btn"
              >
                <Wand2 className="w-5 h-5" />
                <span>Get Instant Free Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#simulator"
                className="px-8 py-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-200 font-bold rounded-2xl backdrop-blur-md transition-all hover:-translate-y-0.5 text-center text-base flex items-center justify-center gap-2"
                id="hero-secondary-services-btn"
              >
                <Play className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Try Room Simulator</span>
              </a>
            </motion.div>

            {/* Value Markers Footer Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-6 border-t border-slate-800/80 grid grid-cols-3 gap-4 text-left max-w-lg mx-auto md:mx-0"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  $2M Insured
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  100% Eco Steam
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                  24h Guarantee
                </span>
              </div>
            </motion.div>

          </div>

          {/* Right Column: High-Tech Glass Preview Card */}
          <div className="lg:col-span-5 hidden lg:flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Glow halo */}
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500 to-cyan-500 rounded-3xl opacity-20 blur-xl animate-pulse" />
              
              {/* Main Card */}
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-6 backdrop-blur-2xl shadow-2xl space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 flex items-center justify-center font-bold">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-extrabold font-display text-sm">Live Service Metrics</h4>
                      <p className="text-[11px] text-emerald-400 font-mono">Updated 2 minutes ago</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono font-bold">
                    ACTIVE
                  </span>
                </div>

                {/* Metric counters */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Homes Sanitized</span>
                    <span className="text-2xl font-black font-display text-white">15,420+</span>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 p-3.5 rounded-2xl">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Repeat Clients</span>
                    <span className="text-2xl font-black font-display text-emerald-400 font-mono">98.6%</span>
                  </div>
                </div>

                {/* Simulated Review Card */}
                <div className="bg-slate-950/60 border border-slate-800 p-4 rounded-2xl space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  <p className="text-xs text-slate-300 italic font-light leading-relaxed">
                    "The SparkClean team transformed my loft before move-in. It literally smelled like a luxury 5-star spa resort."
                  </p>
                  <span className="text-[11px] text-slate-400 font-bold block pt-1">
                    — Marcus Vance, Penthouse Owner
                  </span>
                </div>

              </div>

            </motion.div>
          </div>

        </div>
      </div>

    </section>
  );
};
