/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  X,
  Sparkles,
  Home,
  Calendar,
  User,
  Phone,
  Mail,
  CheckCircle,
  Clock,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Zap,
  Gift
} from "lucide-react";
import { QuoteFormData } from "../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const SERVICES_LIST = [
  { id: "residential", name: "Signature Housekeeping", basePrice: 120 },
  { id: "deep", name: "Deep Sanitization Refresh", basePrice: 200 },
  { id: "office", name: "Executive Office & HQ", basePrice: 250 },
  { id: "move", name: "Move-In / Move-Out Deposit", basePrice: 220 },
  { id: "windows", name: "Crystal Window Washing", basePrice: 90 },
  { id: "carpet", name: "Carpet & Upholstery Steam", basePrice: 110 },
];

const HOME_SIZES = [
  { id: "studio", label: "Studio / Loft", multiplier: 0.8 },
  { id: "small", label: "1-2 Bedrooms", multiplier: 1.0 },
  { id: "medium", label: "3 Bedrooms", multiplier: 1.3 },
  { id: "large", label: "4+ Bedrooms", multiplier: 1.6 },
];

const FREQUENCIES = [
  { id: "once", label: "One-Time", discount: 0, text: "Standard rate" },
  { id: "weekly", label: "Weekly (Save 20%)", discount: 0.2, text: "Most popular for busy homes" },
  { id: "biweekly", label: "Bi-Weekly (Save 15%)", discount: 0.15, text: "Perfect regular upkeep" },
  { id: "monthly", label: "Monthly (Save 10%)", discount: 0.1, text: "Great deep refresh" },
];

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialServiceId = "residential",
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QuoteFormData>({
    name: "",
    email: "",
    phone: "",
    serviceId: initialServiceId,
    homeSize: "small",
    frequency: "biweekly",
    extraFridge: false,
    extraOven: false,
    extraWindows: false,
    extraDeep: false,
    preferredDate: "",
    specialNotes: "",
  });

  const [estimatedPrice, setEstimatedPrice] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, serviceId: initialServiceId }));
    }
  }, [initialServiceId, isOpen]);

  // Handle recalculation
  useEffect(() => {
    const selectedService = SERVICES_LIST.find((s) => s.id === formData.serviceId);
    if (!selectedService) return;

    let base = selectedService.basePrice;

    if (["residential", "deep", "move"].includes(formData.serviceId)) {
      const sizeObj = HOME_SIZES.find((s) => s.id === formData.homeSize);
      if (sizeObj) base = base * sizeObj.multiplier;
    }

    if (formData.extraFridge) base += 35;
    if (formData.extraOven) base += 35;
    if (formData.extraWindows) base += 50;
    if (formData.extraDeep) base += 80;

    const freqObj = FREQUENCIES.find((f) => f.id === formData.frequency);
    if (freqObj) {
      base = base * (1 - freqObj.discount);
    }

    setEstimatedPrice(Math.round(base));
  }, [formData]);

  const handleCheckboxChange = (field: keyof QuoteFormData) => {
    setFormData((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate) {
      alert("Please fill in all required contact details.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden z-10 text-white"
        >
          {/* Header Bar */}
          <div className="p-6 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-500 to-cyan-400 text-slate-950 flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h3 className="text-lg font-bold font-display text-white">Instant Booking & Quote</h3>
                <span className="text-xs text-emerald-400 font-mono">100% Satisfaction Guarantee</span>
              </div>
            </div>
            <button
              onClick={handleResetAndClose}
              className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-900 border border-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Line */}
          {!submitted && (
            <div className="w-full bg-slate-950 h-1.5 flex">
              <div
                className="bg-gradient-to-r from-emerald-500 to-cyan-500 h-full transition-all duration-300"
                style={{ width: step === 1 ? "50%" : "100%" }}
              />
            </div>
          )}

          {/* Modal Body */}
          <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto">
            {submitted ? (
              /* Success Celebration State */
              <div className="text-center py-8 space-y-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center shadow-xl">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-black font-display text-white">
                    Booking Request Confirmed!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto font-light">
                    Thank you, <strong className="text-emerald-400 font-semibold">{formData.name}</strong>! Your estimated total of <strong className="text-emerald-400 font-mono font-bold">${estimatedPrice}</strong> for {formData.preferredDate} has been received.
                  </p>
                </div>
                <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl text-xs text-slate-400 max-w-md mx-auto">
                  Our specialist coordinator will call you within 15 minutes at <span className="text-white font-mono">{formData.phone}</span> to confirm access details.
                </div>
                <button
                  onClick={handleResetAndClose}
                  className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold rounded-xl text-sm transition-all cursor-pointer shadow-lg"
                >
                  Done & Return To Home
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 ? (
                  /* Step 1: Scope Selection */
                  <div className="space-y-6">
                    {/* Service Picker */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-400 tracking-wider uppercase">
                        1. Select Service Type
                      </label>
                      <select
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleInputChange}
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      >
                        {SERVICES_LIST.map((s) => (
                          <option key={s.id} value={s.id}>
                            {s.name} (From ${s.basePrice})
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Home Size Picker */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-400 tracking-wider uppercase">
                        2. Home / Space Size
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {HOME_SIZES.map((size) => (
                          <button
                            type="button"
                            key={size.id}
                            onClick={() => setFormData({ ...formData, homeSize: size.id })}
                            className={`p-3 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                              formData.homeSize === size.id
                                ? "bg-emerald-500/20 border-emerald-400 text-white"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            {size.label}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Frequency */}
                    <div className="space-y-2">
                      <label className="text-xs font-extrabold text-slate-400 tracking-wider uppercase">
                        3. Cleaning Frequency
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {FREQUENCIES.map((freq) => (
                          <button
                            type="button"
                            key={freq.id}
                            onClick={() => setFormData({ ...formData, frequency: freq.id })}
                            className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                              formData.frequency === freq.id
                                ? "bg-emerald-500/20 border-emerald-400 text-white font-bold"
                                : "bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700"
                            }`}
                          >
                            <span className="block font-bold">{freq.label}</span>
                            <span className="text-[10px] text-slate-400 font-light">{freq.text}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Estimated price bar */}
                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-bold uppercase">Estimated Total:</span>
                      <span className="text-2xl font-black font-mono text-emerald-400">${estimatedPrice}</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold rounded-xl text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                    >
                      <span>Continue To Schedule & Contact</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  /* Step 2: Contact & Date Details */
                  <div className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Your Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Jane Doe"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="jane@example.com"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(555) 000-0000"
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-slate-300">Preferred Date *</label>
                        <input
                          type="date"
                          name="preferredDate"
                          required
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-slate-300">Special Entry Instructions (Optional)</label>
                      <textarea
                        name="specialNotes"
                        rows={2}
                        value={formData.specialNotes}
                        onChange={handleInputChange}
                        placeholder="Gate code, pet details, or specific focus areas..."
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:border-emerald-400 focus:outline-none"
                      />
                    </div>

                    <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-bold uppercase">Locked In Total:</span>
                      <span className="text-2xl font-black font-mono text-emerald-400">${estimatedPrice}</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-4 bg-slate-950 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold rounded-xl text-xs transition-colors cursor-pointer"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-slate-950 font-extrabold rounded-xl text-sm transition-all cursor-pointer shadow-lg flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? (
                          <span>Reserving Specialist...</span>
                        ) : (
                          <>
                            <span>Confirm & Reserve Booking</span>
                            <Sparkles className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
