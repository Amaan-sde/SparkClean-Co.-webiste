/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Home,
  Building2,
  Sparkles,
  Truck,
  Sun,
  Maximize2,
  ArrowRight,
  ShieldCheck,
  Check,
  ChevronDown,
  Zap
} from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

const SERVICES: (ServiceItem & { category: string; features: string[] })[] = [
  {
    id: "residential",
    category: "residential",
    title: "Signature Housekeeping",
    description: "Tailored regular housekeeping designed for busy professionals & families.",
    longDescription: "Complete dusting, organic mopping, bathroom HEPA sanitization, and kitchen surface polishing.",
    iconName: "Home",
    basePrice: 120,
    features: ["Kitchen counters & stove top wipe", "Bathroom tile & mirror sanitization", "All floors vacuumed & steam mopped", "Trash emptied & linens refreshed"],
  },
  {
    id: "deep",
    category: "deep",
    title: "Deep Sanitization Refresh",
    description: "An intensive top-to-bottom detail scrub reaching hidden grime & baseboards.",
    longDescription: "Eliminates hard water scale, deep grease, baseboard dust buildup, and unseen allergens.",
    iconName: "Sparkles",
    basePrice: 200,
    features: ["Detailed baseboards & door frames", "Inside microwave & appliance exterior", "Deep grout steam scrubbing", "Light fixtures & ceiling fan dusting"],
  },
  {
    id: "office",
    category: "commercial",
    title: "Executive Office & HQ",
    description: "Sanitized, pristine commercial environments that elevate team health & focus.",
    longDescription: "High-touch workstation disinfection, breakroom sanitation, glass partitions, and lobby maintenance.",
    iconName: "Building2",
    basePrice: 250,
    features: ["Keyboard & phone surface sanitizing", "Conference table & chair wipes", "Restroom deep sanitation & restocking", "Lobby streak-free glass polish"],
  },
  {
    id: "move",
    category: "residential",
    title: "Move-In / Move-Out Deposit",
    description: "Worry-free empty property scrubbing designed to guarantee security deposit refunds.",
    longDescription: "Scrubbing inside all drawers, cabinets, oven, fridge, deep closet wipes, and wall spot cleaning.",
    iconName: "Truck",
    basePrice: 220,
    features: ["Inside all cabinets & drawers scrubbed", "Deep oven & refrigerator interior detail", "Wall scuff mark spot cleaning", "100% Deposit Refund Guarantee"],
  },
  {
    id: "windows",
    category: "speciality",
    title: "Crystal Window Cleaning",
    description: "Ultra-clear, streak-free interior & exterior glass washing with sill restoration.",
    longDescription: "Ecological pure water wash leaving zero water residue, wiping window tracks and screen mesh.",
    iconName: "Sun",
    basePrice: 90,
    features: ["Interior & exterior crystal glass wash", "Track & sill detailed scrubbing", "Screen mesh dust removal", "Streak-free optical clarity"],
  },
  {
    id: "carpet",
    category: "speciality",
    title: "Carpet & Upholstery Hot Steam",
    description: "Hot-water extraction destroying deep allergens, pet stains, and odors.",
    longDescription: "Organic pet stain neutralizer, fiber fluffing, fast 2-hour dry technology, and allergen removal.",
    iconName: "Maximize2",
    basePrice: 110,
    features: ["Hot water deep soil extraction", "Organic pet stain & odor breakdown", "Fast-drying fiber groom", "Allergen & dust mite elimination"],
  },
];

const IconMapper: React.FC<{ name: string; className?: string }> = ({ name, className = "" }) => {
  switch (name) {
    case "Home":
      return <Home className={className} />;
    case "Sparkles":
      return <Sparkles className={className} />;
    case "Building2":
      return <Building2 className={className} />;
    case "Truck":
      return <Truck className={className} />;
    case "Sun":
      return <Sun className={className} />;
    case "Maximize2":
      return <Maximize2 className={className} />;
    default:
      return <Sparkles className={className} />;
  }
};

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteWithService }) => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredServices = activeCategory === "all"
    ? SERVICES
    : SERVICES.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>OUR EXPERTISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Bespoke Cleaning <span className="text-gradient-emerald">Mastery</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            Tailored solutions executed by certified specialists using hospital-grade eco technology.
          </motion.p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {[
            { id: "all", label: "All Offerings" },
            { id: "residential", label: "Residential" },
            { id: "deep", label: "Deep Clean" },
            { id: "commercial", label: "Commercial Office" },
            { id: "speciality", label: "Speciality & Carpet" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-emerald-500 text-slate-950 border-emerald-400 font-black shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => {
            const isExpanded = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group bg-slate-900/70 border border-slate-800 rounded-3xl p-6 sm:p-8 hover:border-emerald-500/50 hover:bg-slate-900 transition-all flex flex-col justify-between backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-emerald-500/10"
                id={`service-card-${service.id}`}
              >
                <div className="space-y-6">
                  {/* Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center transition-transform group-hover:scale-110 duration-300">
                      <IconMapper name={service.iconName} className="w-7 h-7" />
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 uppercase font-bold tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Descriptions */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-extrabold text-white font-display tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-2 pt-2 border-t border-slate-800/80">
                    <button
                      onClick={() => setExpandedId(isExpanded ? null : service.id)}
                      className="text-xs font-bold text-emerald-400 flex items-center justify-between w-full hover:underline cursor-pointer py-1"
                    >
                      <span>{isExpanded ? "Hide Scope Details" : "View Scope Checklist"}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
                    </button>

                    {isExpanded && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-1.5 pt-2 text-xs text-slate-300"
                      >
                        {service.features.map((feat, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </div>
                </div>

                {/* Card Footer CTA & Pricing */}
                <div className="mt-8 pt-5 border-t border-slate-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">
                      Starting Rate
                    </span>
                    <span className="text-xl font-extrabold text-white font-display">
                      ${service.basePrice}
                    </span>
                  </div>

                  <button
                    onClick={() => onOpenQuoteWithService(service.id)}
                    className="px-4 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-extrabold rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
                    id={`service-book-btn-${service.id}`}
                  >
                    <span>Instant Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
