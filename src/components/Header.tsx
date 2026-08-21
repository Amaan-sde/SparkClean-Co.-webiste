/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, PhoneCall, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Simulator", href: "#simulator" },
    { name: "Before & After", href: "#before-after" },
    { name: "Price Estimator", href: "#calculator" },
    { name: "Services", href: "#services" },
    { name: "Why Us", href: "#why-choose-us" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-slate-950/85 backdrop-blur-xl shadow-2xl border-b border-slate-800/80 py-3"
            : "bg-transparent py-5"
        }`}
        id="main-app-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-400 flex items-center justify-center text-slate-950 shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 fill-current animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black text-white tracking-tight font-display leading-none">
                SparkClean <span className="text-gradient-emerald">Co.</span>
              </span>
              <span className="text-[10px] text-emerald-400 tracking-widest font-mono font-bold uppercase leading-tight pt-0.5">
                LUXURY CLEANING
              </span>
            </div>
          </a>

          {/* Availability Status Badge (Hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[11px] font-medium text-slate-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Slots open in your area today</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold text-slate-300 hover:text-emerald-400 transition-colors uppercase tracking-wider py-1"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 text-xs font-extrabold rounded-xl shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all hover:-translate-y-0.5 cursor-pointer flex items-center gap-1.5"
              id="header-cta-btn"
            >
              <Calendar className="w-4 h-4" />
              <span>Get Free Quote</span>
            </button>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-emerald-400 rounded-xl bg-slate-900 border border-slate-800 transition-colors"
              aria-label="Toggle menu"
              id="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-[70px] left-0 w-full bg-slate-950/95 backdrop-blur-2xl z-40 border-b border-slate-800 shadow-2xl md:hidden overflow-hidden"
            id="mobile-navigation-panel"
          >
            <div className="px-5 py-6 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-sm font-bold text-slate-200 hover:text-emerald-400 hover:bg-slate-900 px-4 py-3 rounded-2xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenQuote();
                  }}
                  className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold rounded-2xl text-center shadow-lg shadow-emerald-500/20 text-sm"
                  id="mobile-menu-cta-btn"
                >
                  Get Instant Free Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
