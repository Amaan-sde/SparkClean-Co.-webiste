/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Leaf, Heart, ArrowRight, ShieldAlert, Award } from "lucide-react";
import { ChooseUsItem } from "../types";

const ITEMS: ChooseUsItem[] = [
  {
    id: "trusted",
    title: "Trusted Professionals",
    description: "Every cleaning specialist on our team undergoes rigid background checks, regular performance evaluations, and premium-level training.",
    iconName: "ShieldCheck",
  },
  {
    id: "eco",
    title: "Eco-Friendly Products",
    description: "We exclusively utilize premium green, biodegradable, and non-toxic cleaning agents that are safe for your children, pets, and the earth.",
    iconName: "Leaf",
  },
  {
    id: "guarantee",
    title: "Satisfaction Guaranteed",
    description: "We are deeply committed to excellence. If you are not fully delighted with any cleaned area, notify us within 24 hours, and we re-clean it free of charge.",
    iconName: "Heart",
  },
];

const IconMapper: React.FC<{ name: string; className?: string }> = ({ name, className = "" }) => {
  switch (name) {
    case "ShieldCheck":
      return <ShieldCheck className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Heart":
      return <Heart className={className} />;
    default:
      return <ShieldCheck className={className} />;
  }
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-choose-us" className="relative py-24 bg-slate-50 overflow-hidden text-center md:text-left">
      {/* Background blobs */}
      <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-teal-100/30 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-brand-100/20 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Editorial Typography & Stats */}
          <div className="lg:col-span-4 space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-xs uppercase font-extrabold text-brand-600 tracking-widest bg-brand-100 px-3.5 py-1.5 rounded-full"
            >
              WHY SPARKCLEAN
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight leading-tight"
            >
              The SparkClean Standard Of Excellence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 font-light text-base leading-relaxed"
            >
              We believe a clean home is a healthy, happy sanctuary. We set ourselves apart through meticulous craftsmanship, strict vetting, and premium care.
            </motion.p>

            {/* Quick stats grid */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200"
            >
              <div>
                <span className="text-3xl font-extrabold text-brand-600 font-display block">15k+</span>
                <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Cleans Completed</span>
              </div>
              <div>
                <span className="text-3xl font-extrabold text-brand-600 font-display block">99.4%</span>
                <span className="text-xs text-slate-400 font-semibold tracking-wider uppercase">Happy Clients</span>
              </div>
            </motion.div>
          </div>

          {/* Right Side: The Premium Columns */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            {ITEMS.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 md:p-8 border border-slate-150 shadow-sm hover:shadow-lg hover:border-brand-100 transition-all flex flex-col justify-between group"
                id={`why-card-${item.id}`}
              >
                <div className="space-y-4">
                  {/* Styled Icon */}
                  <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center group-hover:scale-110 group-hover:bg-brand-500 group-hover:text-white transition-all duration-300">
                    <IconMapper name={item.iconName} className="w-6 h-6" />
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold text-slate-900 font-display tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-normal leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Subtext marker */}
                <div className="pt-4 mt-6 border-t border-slate-100/70 flex items-center gap-1 text-[11px] font-semibold text-brand-600 group-hover:translate-x-1 transition-transform">
                  <span>Guaranteed Quality</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
