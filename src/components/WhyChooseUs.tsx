/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Leaf, Heart, ArrowRight, Award, Zap, Sparkles } from "lucide-react";
import { ComparisonTable } from "./ComparisonTable";

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Mesh Glow */}
      <div className="absolute top-10 left-1/3 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-24">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side typography */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
            >
              <Award className="w-3.5 h-3.5" />
              <span>THE GOLD STANDARD</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-tight"
            >
              Uncompromising Quality. <br />
              <span className="text-gradient-emerald">Delivered Every Time.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-slate-400 font-light text-base leading-relaxed"
            >
              We combine white-glove hospitality with medical-grade non-toxic steam technology. Every cleaner undergoes rigorous background checks and continuous mastery training.
            </motion.p>

            {/* Stats Pills */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                <span className="text-3xl font-black text-emerald-400 font-mono block">15,000+</span>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Homes Sanitized</span>
              </div>
              <div className="bg-slate-900/80 border border-slate-800 p-4 rounded-2xl">
                <span className="text-3xl font-black text-cyan-400 font-mono block">99.8%</span>
                <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">Client Delight</span>
              </div>
            </div>
          </div>

          {/* Right Side: Feature Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "Vetted Specialists",
                desc: "Every crew member is background checked, insured up to $2M, and trained in luxury home detailing.",
              },
              {
                icon: Leaf,
                title: "100% Eco-Certified",
                desc: "Non-toxic, plant-based formulas combined with pressurized steam safe for children, pets, and granite.",
              },
              {
                icon: Heart,
                title: "24h Free Re-Clean",
                desc: "If any corner isn't sparkling to your satisfaction, notify us within 24h and we re-clean it free of charge.",
              },
            ].map((card, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/80 border border-slate-800 rounded-3xl p-6 hover:border-emerald-500/40 transition-all flex flex-col justify-between backdrop-blur-xl group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white font-display tracking-tight">{card.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-light">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Embedded Feature Comparison Table */}
        <ComparisonTable />

      </div>
    </section>
  );
};
