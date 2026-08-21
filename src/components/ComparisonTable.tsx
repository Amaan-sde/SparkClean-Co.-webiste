/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Check, X, Shield, Sparkles, Award } from "lucide-react";

interface FeatureRow {
  feature: string;
  sparkClean: boolean | string;
  standardCleaners: boolean | string;
  diy: boolean | string;
}

const FEATURES: FeatureRow[] = [
  {
    feature: "Background-Checked & Licensed Crew",
    sparkClean: true,
    standardCleaners: "Rarely Vetted",
    diy: false,
  },
  {
    feature: "100% Eco-Friendly Non-Toxic Supplies",
    sparkClean: true,
    standardCleaners: "Harsh Chemicals",
    diy: "Varies",
  },
  {
    feature: "24-Hour Free Re-Clean Guarantee",
    sparkClean: true,
    standardCleaners: false,
    diy: false,
  },
  {
    feature: "HEPA 13 Air Particle Filtration",
    sparkClean: true,
    standardCleaners: false,
    diy: false,
  },
  {
    feature: "Live GPS Specialist Tracking",
    sparkClean: true,
    standardCleaners: false,
    diy: false,
  },
  {
    feature: "Zero Lock-In Contract Freedom",
    sparkClean: true,
    standardCleaners: "Often Required",
    diy: true,
  },
];

export const ComparisonTable: React.FC = () => {
  return (
    <section id="comparison" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-emerald-500/10 blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
          >
            <Award className="w-4 h-4 text-emerald-400" />
            <span>THE UNMATCHED STANDARD</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Why We Stand <span className="text-gradient-emerald">Head & Shoulders Above</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            See how SparkClean Co. stacks up against conventional cleaning providers and doing it yourself.
          </motion.p>
        </div>

        {/* Comparison Grid Table */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-12 bg-slate-950 p-5 sm:p-6 border-b border-slate-800 text-xs font-extrabold tracking-wider uppercase text-slate-400">
            <div className="col-span-6 sm:col-span-5 flex items-center">Feature & Service Standard</div>
            <div className="col-span-3 sm:col-span-3 text-center text-emerald-400 font-display text-sm sm:text-base flex items-center justify-center gap-1.5 font-black">
              <Sparkles className="w-4 h-4" />
              <span>SparkClean Co.</span>
            </div>
            <div className="col-span-3 sm:col-span-2 text-center">Standard Cleaners</div>
            <div className="hidden sm:block sm:col-span-2 text-center">DIY Cleaning</div>
          </div>

          <div className="divide-y divide-slate-800/60">
            {FEATURES.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-12 p-4 sm:p-5 items-center hover:bg-slate-800/40 transition-colors text-xs sm:text-sm"
              >
                {/* Feature Title */}
                <div className="col-span-6 sm:col-span-5 font-semibold text-slate-200">
                  {row.feature}
                </div>

                {/* SparkClean Column */}
                <div className="col-span-3 sm:col-span-3 flex items-center justify-center bg-emerald-500/10 py-2.5 rounded-xl border border-emerald-500/20 text-emerald-300 font-extrabold">
                  {typeof row.sparkClean === "boolean" ? (
                    <Check className="w-5 h-5 text-emerald-400 stroke-[3]" />
                  ) : (
                    <span>{row.sparkClean}</span>
                  )}
                </div>

                {/* Standard Cleaners Column */}
                <div className="col-span-3 sm:col-span-2 text-center text-slate-400 font-medium">
                  {typeof row.standardCleaners === "boolean" ? (
                    row.standardCleaners ? (
                      <Check className="w-4 h-4 mx-auto text-slate-400" />
                    ) : (
                      <X className="w-4 h-4 mx-auto text-rose-500/80" />
                    )
                  ) : (
                    <span className="text-[11px]">{row.standardCleaners}</span>
                  )}
                </div>

                {/* DIY Column */}
                <div className="hidden sm:block sm:col-span-2 text-center text-slate-500 font-medium">
                  {typeof row.diy === "boolean" ? (
                    row.diy ? (
                      <Check className="w-4 h-4 mx-auto text-slate-400" />
                    ) : (
                      <X className="w-4 h-4 mx-auto text-rose-500/80" />
                    )
                  ) : (
                    <span className="text-[11px]">{row.diy}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
