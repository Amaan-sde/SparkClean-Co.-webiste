/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
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
  Check
} from "lucide-react";
import { ServiceItem } from "../types";

interface ServicesProps {
  onOpenQuoteWithService: (serviceId: string) => void;
}

const SERVICES: ServiceItem[] = [
  {
    id: "residential",
    title: "Residential Cleaning",
    description: "Keep your home pristine with our regular, trusted housekeeping services.",
    longDescription: "Dusting, vacuuming, mopping, bathroom sanitization, and kitchen scrubs tailored to your schedule.",
    iconName: "Home",
    basePrice: 120,
  },
  {
    id: "deep",
    title: "Deep Cleaning",
    description: "An intensive refresh detailing every corner, baseboard, and hidden spot.",
    longDescription: "Ideal for spring cleaning, removing deep-seated grease, hard water deposits, and forgotten dust.",
    iconName: "Sparkles",
    basePrice: 200,
  },
  {
    id: "office",
    title: "Office Cleaning",
    description: "Sanitized, professional workspaces that keep teams healthy and productive.",
    longDescription: "Disinfecting high-touch points, desks, trash disposal, breakroom cleanups, and clean entries.",
    iconName: "Building2",
    basePrice: 250,
  },
  {
    id: "move",
    title: "Move-In / Move-Out",
    description: "Worry-free empty home scrubbing to secure security deposits or greet new owners.",
    longDescription: "Inside cabinets, detailed fridge and oven sanitizing, deep wall wipe-downs, and deep carpet grooming.",
    iconName: "Truck",
    basePrice: 220,
  },
  {
    id: "windows",
    title: "Window Cleaning",
    description: "Squeaky clean, streak-free window washing to let natural sunlight pour in.",
    longDescription: "Detailed sill scrubbing, tracks cleaning, and exterior/interior glass wiping using ecological cleaners.",
    iconName: "Sun",
    basePrice: 90,
  },
  {
    id: "carpet",
    title: "Carpet Cleaning",
    description: "Deep hot-water extraction restoring colors, textures, and removing stains.",
    longDescription: "Advanced pet-odor neutralizers, pollen and dust allergen removal, and eco-friendly fast-dry grooming.",
    iconName: "Maximize2",
    basePrice: 110,
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
  return (
    <section id="services" className="relative py-24 bg-white overflow-hidden subtle-noise">
      {/* Decorative absolute components */}
      <div className="absolute top-1/3 right-10 w-64 h-64 rounded-full bg-teal-50/40 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-5 w-80 h-80 rounded-full bg-brand-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header content with nice styling */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase font-extrabold text-brand-600 tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full"
          >
            OUR EXPERTISE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            Premium Cleaning Services <br className="hidden sm:inline" />
            Designed For Your Convenience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-500 font-light"
          >
            From busy residential households to large-scale commercial complexes, our expert crew provides flawless services with customizable, direct plans.
          </motion.p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="group bg-white rounded-2xl border border-slate-100 p-6 md:p-8 hover:shadow-xl hover:shadow-slate-100/70 hover:border-brand-100 transition-all flex flex-col justify-between"
              id={`service-card-${service.id}`}
            >
              <div className="space-y-5">
                {/* Icon Container with hover effects */}
                <div className="w-14 h-14 rounded-2xl bg-brand-50 text-brand-600 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 duration-300 shadow-sm">
                  <IconMapper
                    name={service.iconName}
                    className="w-7 h-7 group-hover:animate-pulse"
                  />
                </div>

                {/* Service Details */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-slate-900 font-display tracking-tight">
                    {service.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-600 leading-snug">
                    {service.description}
                  </p>
                  <p className="text-xs text-slate-400 font-light leading-relaxed pt-1.5 border-t border-slate-100">
                    {service.longDescription}
                  </p>
                </div>
              </div>

              {/* Card Footer CTA & pricing */}
              <div className="mt-8 pt-5 border-t border-slate-150/70 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-slate-400 block font-bold tracking-wider uppercase">
                    Starting at
                  </span>
                  <span className="text-lg font-extrabold text-slate-900 font-display">
                    ${service.basePrice}
                  </span>
                </div>

                <button
                  onClick={() => onOpenQuoteWithService(service.id)}
                  className="flex items-center gap-1.5 text-xs font-bold text-brand-600 group-hover:text-brand-700 hover:underline cursor-pointer"
                  id={`service-book-btn-${service.id}`}
                >
                  Book Quote
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quality trust footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 bg-slate-50 border border-slate-150 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 font-display">
                Need a tailored solution?
              </h4>
              <p className="text-xs text-slate-500">
                We custom design cleaning scopes for corporate offices, events, and medical clinics.
              </p>
            </div>
          </div>
          <button
            onClick={() => onOpenQuoteWithService("residential")}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
            id="services-custom-quote-btn"
          >
            Custom Quote Request
          </button>
        </motion.div>
      </div>
    </section>
  );
};
