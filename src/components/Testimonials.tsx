/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TestimonialItem } from "../types";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Regular Residential Client",
    rating: 5,
    quote: "SparkClean Co. has literally given me my weekends back! Their team is always punctual, thoroughly professional, and incredibly detailed. Walking into a sparkling clean home that smells incredibly fresh is the best feeling ever.",
    photoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "t2",
    name: "Michael Chen",
    role: "Deep Clean & Carpet client",
    rating: 5,
    quote: "I booked their Move-Out deep clean and window package, and I was completely blown away. The appliances look brand new, sills are spotless, and the landlord didn't raise a single issue. Secured my full refund in record time!",
    photoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "t3",
    name: "Elena Rodriguez",
    role: "HQ Office Facility Manager",
    rating: 5,
    quote: "Keeping a 3-floor tech office sanitized and immaculate is no small feat. SparkClean's commercial team is outstanding. They work around our schedules, disinfect everything, and keep our common spaces smelling fresh and inviting.",
    photoUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    id: "t4",
    name: "David Fletcher",
    role: "Bi-Weekly Housekeeping",
    rating: 5,
    quote: "With two young kids and a golden retriever, our carpets and upholstery undergo extreme stress. Their regular eco-friendly cleaning service is safe, efficient, and successfully keeps dust and pet odors fully at bay. Highly recommend!",
    photoUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
  },
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="relative py-24 bg-white overflow-hidden subtle-noise text-center">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-10 right-5 w-80 h-80 rounded-full bg-brand-50/20 blur-3xl -z-10" />
      <div className="absolute bottom-10 left-5 w-72 h-72 rounded-full bg-teal-50/30 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header content */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs uppercase font-extrabold text-brand-600 tracking-widest bg-brand-50 px-3.5 py-1.5 rounded-full"
          >
            TESTIMONIALS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display tracking-tight"
          >
            What Our Delighted Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base text-slate-500 font-light"
          >
            Read reviews from local families and businesses who trust SparkClean Co. for impeccable quality.
          </motion.p>
        </div>

        {/* Carousel for Desktop (md and up) */}
        <div className="hidden md:block relative max-w-4xl mx-auto px-8">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-3xl p-10 md:p-12 border border-slate-150 shadow-xl shadow-slate-100/50 relative text-left flex flex-col md:flex-row gap-8 items-center"
              >
                {/* Huge stylized Quote Icon in background */}
                <Quote className="absolute right-8 top-8 w-24 h-24 text-brand-100 opacity-40 pointer-events-none -z-1" />

                {/* Left Side Portrait */}
                <div className="shrink-0 text-center">
                  <div className="relative w-28 h-28 mx-auto mb-4 rounded-full p-1.5 bg-gradient-to-tr from-brand-500 to-brand-300 shadow-lg">
                    <img
                      src={TESTIMONIALS[activeIndex].photoUrl}
                      alt={TESTIMONIALS[activeIndex].name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full bg-white"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {TESTIMONIALS[activeIndex].name}
                  </h3>
                  <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>

                {/* Right Side Review */}
                <div className="flex-1 space-y-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: TESTIMONIALS[activeIndex].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>

                  <p className="text-lg text-slate-700 font-light leading-relaxed italic">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8 w-full">
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-brand-600 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                aria-label="Previous Testimonial"
                id="testimonial-prev-btn"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-brand-600 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer"
                aria-label="Next Testimonial"
                id="testimonial-next-btn"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    activeIndex === index ? "w-8 bg-brand-500" : "w-2 bg-slate-200 hover:bg-slate-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Stacked Layout for Mobile (less than md) */}
        <div className="grid grid-cols-1 gap-6 md:hidden">
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="bg-white rounded-2xl p-6 border border-slate-150 shadow-md text-left space-y-4 relative"
            >
              <Quote className="absolute right-4 top-4 w-12 h-12 text-brand-50 opacity-30 pointer-events-none -z-1" />
              
              {/* Reviewer Header */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.photoUrl}
                  alt={testimonial.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full object-cover border border-brand-200 bg-slate-50"
                />
                <div>
                  <h3 className="text-base font-bold text-slate-900 font-display leading-tight">
                    {testimonial.name}
                  </h3>
                  <span className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider block">
                    {testimonial.role}
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-sm text-slate-600 font-light italic leading-relaxed">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
