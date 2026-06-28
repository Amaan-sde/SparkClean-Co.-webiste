/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Heart,
  ShieldCheck,
  Check
} from "lucide-react";

interface FooterProps {
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  return (
    <footer id="footer" className="bg-slate-950 text-slate-300 pt-20 pb-12 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-slate-900">
          
          {/* Column 1: Company Info */}
          <div className="space-y-6">
            <a href="#home" className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-brand-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Sparkles className="w-5 h-5 animate-pulse" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight font-display leading-tight">
                  SparkClean <span className="text-brand-400">Co.</span>
                </span>
                <span className="text-[10px] text-slate-500 tracking-widest font-semibold uppercase leading-none">
                  Premium Cleaning
                </span>
              </div>
            </a>
            
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Providing premium, eco-friendly, and fully customizable residential & commercial cleaning services. Enjoy a pristine space and more free time.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {[
                { name: "Facebook", icon: <Facebook className="w-4 h-4" />, href: "#" },
                { name: "Instagram", icon: <Instagram className="w-4 h-4" />, href: "#" },
                { name: "Linkedin", icon: <Linkedin className="w-4 h-4" />, href: "#" },
                { name: "Twitter", icon: <Twitter className="w-4 h-4" />, href: "#" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-brand-400 hover:border-brand-500 hover:bg-slate-900/60 flex items-center justify-center transition-all hover:-translate-y-0.5"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Contact Details */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Get In Touch
            </h4>
            
            <ul className="space-y-4 text-sm font-light">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 text-xs block font-semibold uppercase">Call Us</span>
                  <a href="tel:+15557727525" className="text-slate-300 hover:text-brand-400 font-medium transition-colors">
                    (555) 772-7525
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 text-xs block font-semibold uppercase">Email Us</span>
                  <a href="mailto:bookings@sparkclean.co" className="text-slate-300 hover:text-brand-400 font-medium transition-colors">
                    bookings@sparkclean.co
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-slate-500 text-xs block font-semibold uppercase">HQ Office</span>
                  <span className="text-slate-300 font-light">
                    742 Evergreens Blvd, Suite 200, <br />
                    San Francisco, CA 94105
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Quick Links
            </h4>
            
            <ul className="grid grid-cols-2 gap-3 text-sm font-light">
              {[
                { name: "Home", href: "#home" },
                { name: "Services", href: "#services" },
                { name: "Why Choose Us", href: "#why-choose-us" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-brand-400 transition-colors inline-block py-0.5"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="col-span-2 pt-2">
                <button
                  onClick={onOpenQuote}
                  className="px-4 py-2 bg-brand-600 hover:bg-brand-700 text-white text-xs font-bold rounded-xl shadow-lg shadow-brand-500/10 transition-colors w-full cursor-pointer text-center"
                >
                  Calculate Free Quote
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Satisfaction Guarantee Trust Badge */}
          <div className="space-y-6">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Our Guarantee
            </h4>
            
            <div className="bg-slate-900 border border-slate-800/60 p-5 rounded-2xl space-y-3">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0" />
                <h5 className="text-xs font-extrabold text-white tracking-wider uppercase font-display">
                  100% Happy Clean Guarantee
                </h5>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-light">
                If you aren't absolutely satisfied with any element of our clean, notify our team within 24 hours. We'll return and reclean it completely free of charge. No hassles, just sparkling results!
              </p>
              <div className="flex items-center gap-2 text-[10px] text-slate-400 font-semibold pt-1 border-t border-slate-800/80">
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Fully Licensed, Bonded & Insured</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright and compliance */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="font-light">
            © 2026 SparkClean Co. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 font-light">
            <a href="#" className="hover:text-brand-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-400 transition-colors">Terms of Service</a>
            <span className="flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for pristine spaces.
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
