/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";

interface CTABannerProps {
  onOpenQuote: () => void;
}

export const CTABanner: React.FC<CTABannerProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative py-24 bg-gradient-to-tr from-brand-800 via-brand-700 to-teal-600 overflow-hidden text-center text-white">
      {/* Dynamic Floating Bubbles (Decorative) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.div
          animate={{
            y: [0, -25, 0],
            scale: [1, 1.12, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-12 left-[10%] w-48 h-48 rounded-full bg-white/5 border border-white/15 backdrop-blur-[1px]"
        />
        <motion.div
          animate={{
            y: [0, -35, 0],
            scale: [1, 0.9, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-16 right-[15%] w-64 h-64 rounded-full bg-white/5 border border-white/10 backdrop-blur-[1px]"
        />
        {/* Sparkles */}
        <motion.div
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 right-[25%] text-brand-200/40"
        >
          <Sparkles className="w-10 h-10" />
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        {/* Floating small spark badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-brand-100 text-xs font-semibold tracking-wider uppercase"
        >
          <Sparkles className="w-3.5 h-3.5 fill-current" />
          <span>YOUR SANCTUARY AWAITS</span>
        </motion.div>

        {/* Content */}
        <div className="space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-none"
          >
            Ready For A Pristine, Cleaner Space?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base sm:text-lg text-brand-100 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Calculate your custom clean estimate in seconds and book your guaranteed specialist. No upfront credit card required, fully cancellable anytime.
          </motion.p>
        </div>

        {/* Big Rounded Book Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center gap-4 pt-2"
        >
          <button
            onClick={onOpenQuote}
            className="group px-10 py-4 sm:py-5 bg-white text-brand-800 font-extrabold rounded-full shadow-2xl hover:bg-brand-50 hover:shadow-white/20 transition-all hover:-translate-y-1 duration-300 flex items-center justify-center gap-2.5 text-base sm:text-lg cursor-pointer"
            id="cta-book-now-btn"
          >
            Book Now
            <ArrowRight className="w-5 h-5 text-brand-700 group-hover:translate-x-1.5 transition-transform" />
          </button>

          {/* Value props bullets */}
          <div className="flex flex-wrap justify-center items-center gap-6 text-xs text-brand-100 font-medium pt-4">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-200" />
              <span>Takes less than 60 seconds</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-200" />
              <span>Free Quote & Cancellation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-brand-200" />
              <span>100% Guaranteed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
