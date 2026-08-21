/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Wand2, RefreshCw, Zap, CheckCircle2, ShieldCheck } from "lucide-react";

interface RoomOption {
  id: string;
  name: string;
  dirtyImg: string;
  cleanImg: string;
  description: string;
  airPurity: number;
  germReduction: string;
}

const ROOMS: RoomOption[] = [
  {
    id: "living",
    name: "Luxury Living Room",
    dirtyImg: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80",
    cleanImg: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description: "Deep carpet steam extraction, furniture dusting, baseboard detailing, and crystal window polishing.",
    airPurity: 99.9,
    germReduction: "99.99%",
  },
  {
    id: "kitchen",
    name: "Gourmet Kitchen",
    dirtyImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    cleanImg: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Stovetop degreasing, stainless steel streak-free polish, cabinet sanitizing & disinfectant steam.",
    airPurity: 100,
    germReduction: "100%",
  },
  {
    id: "bedroom",
    name: "Master Suite",
    dirtyImg: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    cleanImg: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80",
    description: "Linen grooming, allergen HEPA vacuuming, mattress refresh, and mirror crystal clarity.",
    airPurity: 99.8,
    germReduction: "99.95%",
  },
  {
    id: "bathroom",
    name: "Spa Bathroom",
    dirtyImg: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    cleanImg: "https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80",
    description: "Tile grout scrubbing, glass shower scum removal, chrome sanitization & eco-fresh scent infusion.",
    airPurity: 100,
    germReduction: "99.99%",
  },
];

export const InteractiveCleanSimulator: React.FC = () => {
  const [selectedRoomId, setSelectedRoomId] = useState("living");
  const [isCleaning, setIsCleaning] = useState(false);
  const [isCleaned, setIsCleaned] = useState(false);
  const [cleaningLevel, setCleaningLevel] = useState<"standard" | "deep" | "ultra">("ultra");

  const currentRoom = ROOMS.find((r) => r.id === selectedRoomId) || ROOMS[0];

  const handleRoomSelect = (roomId: string) => {
    if (isCleaning) return;
    setSelectedRoomId(roomId);
    setIsCleaned(false);
  };

  const triggerCleanSequence = () => {
    if (isCleaning) return;
    setIsCleaning(true);
    setTimeout(() => {
      setIsCleaned(true);
      setIsCleaning(false);
    }, 1800);
  };

  const handleReset = () => {
    setIsCleaned(false);
  };

  return (
    <section id="simulator" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Dynamic Laser & Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-950/60 via-slate-950 to-slate-950" />
      
      {/* Decorative Glow Orbs */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
          >
            <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>INTERACTIVE CLEAN SIMULATOR</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight leading-tight"
          >
            Test The <span className="text-gradient-emerald">Sparkle Transformation</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            Select a space below, choose your clean intensity, and hit <strong className="text-emerald-300 font-semibold">ACTIVATE SPARKLE CLEAN</strong> to experience our scanning laser beam deep sanitization in action.
          </motion.p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Room Selector Pills */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                <span>1. Select Room Target</span>
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {ROOMS.map((room) => {
                  const isActive = room.id === selectedRoomId;
                  return (
                    <button
                      key={room.id}
                      onClick={() => handleRoomSelect(room.id)}
                      className={`p-3.5 rounded-2xl text-left transition-all cursor-pointer border ${
                        isActive
                          ? "bg-emerald-500/20 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/20 font-bold"
                          : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <span className="text-xs font-bold block">{room.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Clean Intensity Toggle */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold text-slate-400 tracking-wider uppercase flex items-center gap-2">
                <span>2. Clean Intensity Level</span>
              </label>
              <div className="grid grid-cols-3 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-800">
                {(["standard", "deep", "ultra"] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setCleaningLevel(level)}
                    className={`py-2 px-2 text-[11px] font-bold rounded-xl capitalize transition-all cursor-pointer ${
                      cleaningLevel === level
                        ? "bg-emerald-500 text-slate-950 shadow-md"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            {/* Description & Action */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md">
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {currentRoom.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <span className="text-slate-400">Target Germ Kill:</span>
                <span className="text-emerald-400 font-bold font-mono">{currentRoom.germReduction}</span>
              </div>

              {/* Big Action Button */}
              {!isCleaned ? (
                <button
                  onClick={triggerCleanSequence}
                  disabled={isCleaning}
                  className={`w-full py-4 rounded-xl font-extrabold text-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-xl ${
                    isCleaning
                      ? "bg-emerald-500/50 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
                  }`}
                >
                  {isCleaning ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>Scanning & Deep Cleaning...</span>
                    </>
                  ) : (
                    <>
                      <Wand2 className="w-5 h-5" />
                      <span>ACTIVATE SPARKLE CLEAN</span>
                    </>
                  )}
                </button>
              ) : (
                <button
                  onClick={handleReset}
                  className="w-full py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>Reset Room Simulation</span>
                </button>
              )}
            </div>

          </div>

          {/* Canvas Display Column */}
          <div className="lg:col-span-8 relative">
            
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl group">
              
              {/* Image Frame */}
              <div className="relative h-[380px] sm:h-[460px] w-full overflow-hidden">
                <img
                  src={isCleaned ? currentRoom.cleanImg : currentRoom.dirtyImg}
                  alt={currentRoom.name}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    isCleaning ? "brightness-125 saturate-150 contrast-125 blur-[1px]" : ""
                  }`}
                />

                {/* Dirt / Grime Filter Overlay when dirty */}
                {!isCleaned && (
                  <div className="absolute inset-0 bg-amber-950/20 mix-blend-multiply transition-opacity duration-700 pointer-events-none" />
                )}

                {/* Laser Scanning Line Animation during Clean */}
                <AnimatePresence>
                  {isCleaning && (
                    <motion.div
                      initial={{ top: "0%" }}
                      animate={{ top: "100%" }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                      className="absolute left-0 right-0 h-2 bg-gradient-to-r from-transparent via-cyan-400 to-emerald-400 shadow-[0_0_20px_#06b6d4] z-30"
                    />
                  )}
                </AnimatePresence>

                {/* Sparkle Particle Overlay when cleaned */}
                {isCleaned && (
                  <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-t from-slate-950/60 via-transparent to-transparent">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute top-6 right-6 bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 rounded-2xl p-4 flex items-center gap-3 shadow-xl"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold text-white block">100% SPARKLE ACHIEVED</span>
                        <span className="text-[10px] text-emerald-400 font-mono">Air Quality Index: {currentRoom.airPurity}%</span>
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Status Badges Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-2 p-3 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Mode: <strong className="text-white capitalize">{cleaningLevel}</strong> Sanitization</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <Zap className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Laser-Guided Steam Extraction</span>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
