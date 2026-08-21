/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2, Clock, Flame } from "lucide-react";

interface CTABannerProps {
  onOpenQuote: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuote }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 28, seconds: 45 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-24 bg-gradient-to-r from-emerald-950 via-slate-950 to-slate-950 text-white overflow-hidden text-center border-y border-slate-800">
      
      {/* Decorative Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-emerald-500/15 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Countdown Offer Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-wider uppercase shadow-xl"
        >
          <Flame className="w-4 h-4 text-emerald-400 animate-pulse" />
          <span>SPECIAL OFFER: $30 OFF YOUR FIRST CLEAN</span>
          <div className="flex items-center gap-1 font-mono text-white bg-slate-950 px-2 py-0.5 rounded-md border border-slate-800">
            <Clock className="w-3 h-3 text-emerald-400" />
            <span>
              {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight leading-none"
          >
            Ready To Experience The <br />
            <span className="text-gradient-emerald">Sparkle Transformation?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto"
          >
            Calculate your custom clean estimate in seconds and book your guaranteed specialist. No upfront credit card required, fully cancellable anytime.
          </motion.p>
        </div>

        {/* Big Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 pt-2"
        >
          <button
            onClick={onOpenQuote}
            className="group px-10 py-5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold rounded-2xl shadow-2xl shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all hover:-translate-y-1 duration-300 flex items-center justify-center gap-3 text-lg cursor-pointer"
            id="cta-book-now-btn"
          >
            <Sparkles className="w-5 h-5 fill-current" />
            <span>Claim $30 Off & Book Now</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Trust bullets */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-semibold pt-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Takes less than 60 seconds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Free Quote & Cancellation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>100% Satisfaction Guaranteed</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
