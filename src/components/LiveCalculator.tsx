/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { Calculator, Sparkles, Check, ArrowRight, ShieldCheck, Zap } from "lucide-react";

interface LiveCalculatorProps {
  onOpenQuote: () => void;
}

export const LiveCalculator: React.FC<LiveCalculatorProps> = ({ onOpenQuote }) => {
  const [sqft, setSqft] = useState(1200);
  const [bedrooms, setBedrooms] = useState(2);
  const [bathrooms, setBathrooms] = useState(2);
  const [frequency, setFrequency] = useState<"once" | "weekly" | "biweekly" | "monthly">("biweekly");

  // Addons
  const [extraFridge, setExtraFridge] = useState(false);
  const [extraOven, setExtraOven] = useState(false);
  const [extraWindows, setExtraWindows] = useState(false);
  const [extraPet, setExtraPet] = useState(false);

  // Dynamic price calculation formula
  const calculatedPrice = useMemo(() => {
    let base = 80;
    base += Math.round(sqft * 0.05);
    base += bedrooms * 20;
    base += bathrooms * 25;

    if (extraFridge) base += 35;
    if (extraOven) base += 35;
    if (extraWindows) base += 50;
    if (extraPet) base += 40;

    // Apply Frequency Discount
    let discountRate = 0;
    if (frequency === "weekly") discountRate = 0.20;
    if (frequency === "biweekly") discountRate = 0.15;
    if (frequency === "monthly") discountRate = 0.10;

    const finalPrice = Math.round(base * (1 - discountRate));
    return {
      total: finalPrice,
      original: Math.round(base),
      saved: Math.round(base * discountRate),
    };
  }, [sqft, bedrooms, bathrooms, frequency, extraFridge, extraOven, extraWindows, extraPet]);

  return (
    <section id="calculator" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Mesh Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-950/40 via-slate-950 to-slate-950" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>REAL-TIME ESTIMATOR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Instant Clean <span className="text-gradient-emerald">Cost Estimator</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 text-base sm:text-lg font-light"
          >
            Adjust your home specifications below for an instant transparent quote with zero hidden surprise fees.
          </motion.p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
          
          {/* Left Side: Controls */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Square Footage Slider */}
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs font-extrabold tracking-wider uppercase">
                <span className="text-slate-300">Property Size</span>
                <span className="text-emerald-400 font-mono text-sm">{sqft.toLocaleString()} sq ft</span>
              </div>
              <input
                type="range"
                min="400"
                max="4500"
                step="50"
                value={sqft}
                onChange={(e) => setSqft(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>400 sq ft</span>
                <span>2,500 sq ft</span>
                <span>4,500+ sq ft</span>
              </div>
            </div>

            {/* Room Count Selectors */}
            <div className="grid grid-cols-2 gap-4">
              {/* Bedrooms */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-300 tracking-wider uppercase block">
                  Bedrooms
                </label>
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl p-1.5">
                  <button
                    onClick={() => setBedrooms(Math.max(1, bedrooms - 1))}
                    className="w-9 h-9 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-emerald-300 font-mono">
                    {bedrooms} {bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                  <button
                    onClick={() => setBedrooms(Math.min(6, bedrooms + 1))}
                    className="w-9 h-9 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Bathrooms */}
              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-300 tracking-wider uppercase block">
                  Bathrooms
                </label>
                <div className="flex items-center bg-slate-950 border border-slate-800 rounded-2xl p-1.5">
                  <button
                    onClick={() => setBathrooms(Math.max(1, bathrooms - 1))}
                    className="w-9 h-9 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-bold text-sm text-emerald-300 font-mono">
                    {bathrooms} {bathrooms === 1 ? "Bath" : "Baths"}
                  </span>
                  <button
                    onClick={() => setBathrooms(Math.min(6, bathrooms + 1))}
                    className="w-9 h-9 rounded-xl bg-slate-800 text-white font-bold hover:bg-slate-700 transition-colors cursor-pointer"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Frequency Pills */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-300 tracking-wider uppercase block">
                Cleaning Schedule & Discount
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "once", label: "One-Time", tag: "Standard" },
                  { id: "weekly", label: "Weekly", tag: "Save 20%" },
                  { id: "biweekly", label: "Bi-Weekly", tag: "Save 15%" },
                  { id: "monthly", label: "Monthly", tag: "Save 10%" },
                ].map((item) => {
                  const isSelected = frequency === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setFrequency(item.id as any)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? "bg-emerald-500/20 border-emerald-400 text-white font-bold shadow-md"
                          : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                      }`}
                    >
                      <span className="text-xs font-bold block">{item.label}</span>
                      <span className="text-[10px] text-emerald-400 font-mono">{item.tag}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Add-ons Checkboxes */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-300 tracking-wider uppercase block">
                Optional Deep Add-Ons
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { state: extraFridge, setter: setExtraFridge, label: "Inside Refrigerator (+$35)" },
                  { state: extraOven, setter: setExtraOven, label: "Inside Oven Clean (+$35)" },
                  { state: extraWindows, setter: setExtraWindows, label: "Interior Windows (+$50)" },
                  { state: extraPet, setter: setExtraPet, label: "Pet Odor Treatment (+$40)" },
                ].map((addon, idx) => (
                  <button
                    key={idx}
                    onClick={() => addon.setter(!addon.state)}
                    className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between text-xs ${
                      addon.state
                        ? "bg-emerald-500/15 border-emerald-400 text-emerald-300 font-semibold"
                        : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                    }`}
                  >
                    <span>{addon.label}</span>
                    <div className={`w-4 h-4 rounded-md border flex items-center justify-center ${addon.state ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-700'}`}>
                      {addon.state && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Side: Estimated Total Card */}
          <div className="lg:col-span-5 flex flex-col justify-between bg-gradient-to-br from-slate-950 to-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-400 tracking-widest uppercase">
                <Sparkles className="w-4 h-4" />
                <span>YOUR ESTIMATED PRICE</span>
              </div>

              <div className="py-4 border-y border-slate-800/80">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold font-display text-white">${calculatedPrice.total}</span>
                  <span className="text-xs text-slate-400 font-medium">/ per visit</span>
                </div>

                {calculatedPrice.saved > 0 && (
                  <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Schedule Discount: Save ${calculatedPrice.saved}!</span>
                  </div>
                )}
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-xs text-slate-300 font-light">
                <div className="flex justify-between">
                  <span>Base Scope ({sqft} sq ft):</span>
                  <span className="font-mono text-slate-200">${Math.round(80 + sqft * 0.05)}</span>
                </div>
                <div className="flex justify-between">
                  <span>{bedrooms} Beds & {bathrooms} Baths:</span>
                  <span className="font-mono text-slate-200">${bedrooms * 20 + bathrooms * 25}</span>
                </div>
                {calculatedPrice.saved > 0 && (
                  <div className="flex justify-between text-emerald-400">
                    <span>{frequency.toUpperCase()} Discount:</span>
                    <span className="font-mono">-${calculatedPrice.saved}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              <button
                onClick={onOpenQuote}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-extrabold rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
              >
                <span>Lock In This Rate & Book</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>No Credit Card Needed • 100% Satisfaction Guarantee</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
