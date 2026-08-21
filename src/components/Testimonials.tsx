/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote, ShieldCheck } from "lucide-react";
import { TestimonialItem } from "../types";

const TESTIMONIALS: (TestimonialItem & { category: string })[] = [
  {
    id: "t1",
    category: "residential",
    name: "Sarah Jenkins",
    role: "Penthouse Owner",
    rating: 5,
    quote: "SparkClean Co. has completely transformed my weekends! Their team is always punctual, white-glove professional, and meticulous. Walking into a spotless home that smells like a 5-star spa resort is pure bliss.",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "t2",
    category: "move",
    name: "Michael Chen",
    role: "Move-Out Deep Clean Client",
    rating: 5,
    quote: "I booked their Move-Out deep clean package, and I was completely blown away. The stovetop and inside oven look brand new, windows are crystal clear, and my landlord refunded 100% of my security deposit without hesitation!",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "t3",
    category: "office",
    name: "Elena Rodriguez",
    role: "Tech HQ Operations Manager",
    rating: 5,
    quote: "Keeping a 3-story office sanitized for 80+ team members is no easy task. SparkClean's commercial crew operates seamlessly around our work hours, disinfecting every workstation and leaving conference glass streak-free.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&h=200&q=80",
  },
  {
    id: "t4",
    category: "residential",
    name: "David Fletcher",
    role: "Bi-Weekly Housekeeping",
    rating: 5,
    quote: "With 2 young kids and a golden retriever, our carpets undergo serious wear. Their eco steam technology is 100% pet-safe, removes deep stains effortlessly, and keeps our living room fresh every single week.",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200&q=80",
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = activeCategory === "all"
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === activeCategory);

  const current = filteredTestimonials[activeIndex % filteredTestimonials.length] || TESTIMONIALS[0];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-24 bg-slate-950 text-white overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-bold tracking-widest uppercase"
          >
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
            <span>CLIENT REVIEWS & PRAISE</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display tracking-tight"
          >
            Loved By Over <span className="text-gradient-cyan">15,000+ Homeowners</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-400 font-light text-base sm:text-lg"
          >
            Read authentic experiences from clients who trust SparkClean Co. for immaculate spaces.
          </motion.p>
        </div>

        {/* Category Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: "all", label: "All Reviews" },
            { id: "residential", label: "Residential" },
            { id: "move", label: "Move-Out Deep Clean" },
            { id: "office", label: "Corporate Office" },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveIndex(0);
              }}
              className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                activeCategory === cat.id
                  ? "bg-cyan-500 text-slate-950 border-cyan-400 font-black shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Carousel Showcase */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-slate-900/80 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl relative flex flex-col md:flex-row gap-8 items-center text-left"
            >
              <Quote className="absolute right-8 top-8 w-24 h-24 text-slate-800/40 pointer-events-none" />

              {/* User Photo */}
              <div className="shrink-0 text-center space-y-3">
                <div className="w-28 h-28 mx-auto rounded-full p-1 bg-gradient-to-tr from-emerald-500 to-cyan-500 shadow-xl">
                  <img
                    src={current.photoUrl}
                    alt={current.name}
                    className="w-full h-full object-cover rounded-full bg-slate-950"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-display">{current.name}</h3>
                  <span className="text-xs text-emerald-400 font-mono block">{current.role}</span>
                </div>
              </div>

              {/* User Quote */}
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                  <span className="ml-2 text-xs text-slate-400 font-bold font-mono">5.0 VERIFIED CLEAN</span>
                </div>

                <p className="text-base sm:text-lg text-slate-200 font-light italic leading-relaxed">
                  "{current.quote}"
                </p>

                <div className="pt-3 border-t border-slate-800/80 flex items-center gap-2 text-xs text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Verified Booking • SparkClean Quality Guarantee</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <div className="flex gap-3">
              <button
                onClick={prevSlide}
                className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-full transition-all cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-full transition-all cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeIndex === idx ? "w-8 bg-emerald-500" : "w-2 bg-slate-800"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
