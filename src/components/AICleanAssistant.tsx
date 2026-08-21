/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Bot, Sparkles, Send, CheckCircle2, ArrowRight, RefreshCw, Zap } from "lucide-react";

interface AICleanAssistantProps {
  onOpenQuote: () => void;
}

interface PresetPrompt {
  id: string;
  label: string;
  query: string;
  reply: {
    recommendedService: string;
    estimatedPrice: string;
    highlights: string[];
  };
}

const PRESETS: PresetPrompt[] = [
  {
    id: "p1",
    label: "🐶 Pet & Kid Household",
    query: "I have 2 shedding golden retrievers and 2 toddlers. Needs deep carpet steam and non-toxic sanitizing.",
    reply: {
      recommendedService: "Deep Clean & Pet Odor Neutralizer",
      estimatedPrice: "$240 - $280",
      highlights: [
        "HEPA-13 pet dander filtration vacuuming",
        "Non-toxic organic enzyme carpet sanitization",
        "Baseboard & low furniture hair extraction",
      ],
    },
  },
  {
    id: "p2",
    label: "🔑 Move-Out Deposit Saver",
    query: "Moving out of a 2BR apartment. Need landlord deposit guarantee with inside fridge and oven scrub.",
    reply: {
      recommendedService: "Move-Out Deposit Refresh",
      estimatedPrice: "$220 - $260",
      highlights: [
        "Inside cabinet & drawer degrease wipe-down",
        "Deep oven & refrigerator steam restoration",
        "100% Security Deposit Guarantee Certificate",
      ],
    },
  },
  {
    id: "p3",
    label: "🏢 Executive Tech Office",
    query: "3,000 sq ft office with 25 desks, breakroom, and glass conference rooms needing weekly sanitation.",
    reply: {
      recommendedService: "Commercial HQ Sanitation",
      estimatedPrice: "$350 / visit",
      highlights: [
        "High-touch surface & keyboard UV disinfection",
        "Streak-free glass partition polishing",
        "Breakroom eco-hygiene & trash renewal",
      ],
    },
  },
];

export const AICleanAssistant: React.FC<AICleanAssistantProps> = ({ onOpenQuote }) => {
  const [activePreset, setActivePreset] = useState<PresetPrompt>(PRESETS[0]);
  const [customInput, setCustomInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSelectPreset = (preset: PresetPrompt) => {
    setActivePreset(preset);
    setCustomInput("");
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customInput.trim()) return;

    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setActivePreset({
        id: "custom",
        label: "✨ Tailored Request",
        query: customInput,
        reply: {
          recommendedService: "Custom Specialized Clean Plan",
          estimatedPrice: "$180 - $250",
          highlights: [
            "Tailored multi-room deep scrub",
            "Eco-friendly non-toxic certified products",
            "Satisfaction guaranteed free re-clean",
          ],
        },
      });
    }, 1200);
  };

  return (
    <section id="ai-assistant" className="relative py-24 bg-slate-900 text-white overflow-hidden">
      {/* Glow Backdrop */}
      <div className="absolute top-1/3 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase"
          >
            <Bot className="w-4 h-4 text-cyan-400 animate-bounce" />
            <span>SPARKY AI CONCIERGE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Ask <span className="text-gradient-cyan">Sparky AI</span> For Instant Plan Recommendations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            Describe your unique living situation or pick a scenario below to generate an AI-tailor-made clean scope.
          </motion.p>
        </div>

        {/* AI Interface Box */}
        <div className="max-w-4xl mx-auto bg-slate-950/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl space-y-8">
          
          {/* Preset Buttons */}
          <div className="space-y-3">
            <span className="text-xs font-extrabold text-slate-400 tracking-wider uppercase block">
              Popular Quick Scenarios
            </span>
            <div className="flex flex-wrap gap-3">
              {PRESETS.map((preset) => {
                const isActive = preset.id === activePreset.id;
                return (
                  <button
                    key={preset.id}
                    onClick={() => handleSelectPreset(preset)}
                    className={`px-4 py-2.5 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-cyan-500/20 border-cyan-400 text-white shadow-md shadow-cyan-500/20"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Prompt Box */}
          <form onSubmit={handleCustomSubmit} className="relative">
            <input
              type="text"
              value={customInput}
              onChange={(e) => setCustomInput(e.target.value)}
              placeholder="Or type your scenario (e.g. '3BR house with white carpets after a birthday party')..."
              className="w-full bg-slate-900 border border-slate-800 rounded-2xl px-5 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 pr-14"
            />
            <button
              type="submit"
              disabled={isAnalyzing}
              className="absolute right-2 top-2 bottom-2 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl flex items-center justify-center transition-all cursor-pointer"
            >
              {isAnalyzing ? (
                <RefreshCw className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </button>
          </form>

          {/* AI Response Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePreset.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-6 space-y-6"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/40 text-cyan-400 flex items-center justify-center shrink-0 shadow-lg">
                  <Bot className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white font-display">Sparky AI Recommendation</h4>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full font-mono">
                      Match Confidence: 99.4%
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 italic">"{activePreset.query}"</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div>
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block mb-1">
                    Recommended Scope
                  </span>
                  <h3 className="text-lg font-bold text-cyan-300 font-display">
                    {activePreset.reply.recommendedService}
                  </h3>
                  <div className="mt-2 text-2xl font-extrabold font-mono text-white">
                    {activePreset.reply.estimatedPrice}
                  </div>
                </div>

                <div className="space-y-2">
                  <span className="text-xs text-slate-400 uppercase font-semibold tracking-wider block">
                    Tailored Highlights
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {activePreset.reply.highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 flex justify-end">
                <button
                  onClick={onOpenQuote}
                  className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-slate-950 font-extrabold text-xs rounded-xl shadow-lg hover:shadow-cyan-500/30 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Book This AI Recommendation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
