/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { Sparkles, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Heart } from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="footer" className="relative bg-slate-950 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-5">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 flex items-center justify-center text-slate-950 shadow-lg">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white tracking-tight font-display">
                  SparkClean <span className="text-gradient-emerald">Co.</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-mono tracking-widest uppercase">
                  LUXURY CLEANING
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 font-light leading-relaxed">
              Pioneering white-glove residential & commercial cleaning. Licensed, insured, non-toxic eco steam sanitization for modern living.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Licensed • Bonded • $2M Insured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-200">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#home" className="hover:text-emerald-400 transition-colors">Home</a></li>
              <li><a href="#simulator" className="hover:text-emerald-400 transition-colors">Clean Simulator</a></li>
              <li><a href="#before-after" className="hover:text-emerald-400 transition-colors">Before & After</a></li>
              <li><a href="#calculator" className="hover:text-emerald-400 transition-colors">Price Estimator</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-200">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+1 (800) 555-SPARK</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>hello@sparkcleanco.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Metropolitan Area & Suburbs</span>
              </li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold tracking-wider uppercase text-slate-200">
              VIP Clean Tips & $30 Coupon
            </h4>
            <p className="text-xs text-slate-400 font-light">
              Subscribe for exclusive seasonal offers & eco maintenance tips.
            </p>

            {subscribed ? (
              <div className="p-3 bg-emerald-500/15 border border-emerald-500/30 rounded-xl text-emerald-300 text-xs flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Subscribed! Check your inbox for your $30 code.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-400"
                />
                <button
                  type="submit"
                  className="px-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl transition-all cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} SparkClean Co. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-rose-500 fill-current" />
            <span>for immaculate living</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
