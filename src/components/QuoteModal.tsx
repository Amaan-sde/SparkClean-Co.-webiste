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
  DollarSign,
  ShieldCheck,
  Gift
} from "lucide-react";
import { QuoteFormData } from "../types";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
}

const SERVICES_LIST = [
  { id: "residential", name: "Residential Cleaning", basePrice: 120 },
  { id: "deep", name: "Deep Cleaning Service", basePrice: 200 },
  { id: "office", name: "Commercial & Office", basePrice: 250 },
  { id: "move", name: "Move-In / Move-Out", basePrice: 220 },
  { id: "windows", name: "Professional Window", basePrice: 90 },
  { id: "carpet", name: "Premium Carpet Care", basePrice: 110 },
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
    frequency: "once",
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

  // Sync initial service selection if modal reopens with a different initial value
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

    // Apply size multiplier (only for residential/deep/move cleaning)
    if (["residential", "deep", "move"].includes(formData.serviceId)) {
      const sizeObj = HOME_SIZES.find((s) => s.id === formData.homeSize);
      if (sizeObj) {
        base = base * sizeObj.multiplier;
      }
    }

    // Add extras
    if (formData.extraFridge) base += 35;
    if (formData.extraOven) base += 35;
    if (formData.extraWindows) base += 50;
    if (formData.extraDeep) base += 80;

    // Apply frequency discounts
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

  const nextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const prevStep = () => {
    if (step === 2) {
      setStep(1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.preferredDate) {
      alert("Please fill in all required contact details.");
      return;
    }

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Save quote history to localStorage
      const existingQuotes = JSON.parse(localStorage.getItem("sparkclean_quotes") || "[]");
      const newQuote = {
        ...formData,
        id: `q-${Date.now()}`,
        estimatedPrice,
        dateCreated: new Date().toLocaleDateString(),
      };
      localStorage.setItem("sparkclean_quotes", JSON.stringify([newQuote, ...existingQuotes]));
    }, 1500);
  };

  const resetForm = () => {
    setStep(1);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      serviceId: "residential",
      homeSize: "small",
      frequency: "once",
      extraFridge: false,
      extraOven: false,
      extraWindows: false,
      extraDeep: false,
      preferredDate: "",
      specialNotes: "",
    });
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
        />

        {/* Modal Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden z-10 flex flex-col max-h-[90vh]"
          id="quote-modal-container"
        >
          {/* Top Header */}
          <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <Sparkles className="w-5 h-5" id="modal-sparkles-icon" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {submitted ? "Quote Request Received!" : "Free Clean Quote Calculator"}
                </h3>
                <p className="text-xs text-slate-500">
                  {submitted ? "We will contact you shortly." : "Customize your plan & view live estimated pricing."}
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-200/50 transition-colors"
              aria-label="Close Modal"
              id="close-modal-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form Content */}
          <div className="flex-1 overflow-y-auto p-6 md:p-8">
            {submitted ? (
              // Success Screen
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12 px-4"
                id="modal-success-screen"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-6 shadow-inner">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 font-display mb-3">
                  Thank You, {formData.name}!
                </h4>
                <p className="text-slate-600 max-w-md mb-8">
                  Your quote estimate of{" "}
                  <strong className="text-brand-600 font-semibold text-lg">
                    ${estimatedPrice}
                    {formData.frequency !== "once" ? "/session" : ""}
                  </strong>{" "}
                  has been saved! Our booking team is reviewing your schedule and will email you at{" "}
                  <span className="text-slate-900 font-medium">{formData.email}</span> within 2 hours.
                </p>

                <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 w-full max-w-lg mb-8 text-left grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-400 block text-xs">SERVICE</span>
                    <span className="font-semibold text-slate-800">
                      {SERVICES_LIST.find((s) => s.id === formData.serviceId)?.name}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">FREQUENCY</span>
                    <span className="font-semibold text-slate-800 capitalize">
                      {formData.frequency}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">PREFERRED DATE</span>
                    <span className="font-semibold text-slate-800">
                      {formData.preferredDate}
                    </span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-xs">ESTIMATED TOTAL</span>
                    <span className="font-bold text-brand-600">
                      ${estimatedPrice}
                    </span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
                    id="new-quote-btn"
                  >
                    Calculate Another Clean
                  </button>
                  <button
                    onClick={onClose}
                    className="px-6 py-3 bg-brand-600 text-white font-semibold rounded-xl hover:bg-brand-700 shadow-lg shadow-brand-600/20 transition-all hover:-translate-y-0.5"
                    id="done-quote-btn"
                  >
                    Done
                  </button>
                </div>
              </motion.div>
            ) : (
              // Multi-step form
              <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Side: Fields */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Step Progress */}
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${
                        step === 1 ? "bg-brand-500 text-white" : "bg-brand-50 text-brand-600"
                      }`}
                    >
                      1. Customise Service
                    </span>
                    <div className="h-[2px] w-8 bg-slate-200" />
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full font-semibold transition-colors ${
                        step === 2 ? "bg-brand-500 text-white" : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      2. Booking Details
                    </span>
                  </div>

                  {step === 1 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="space-y-6"
                    >
                      {/* Select Service */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          Select Cleaning Service
                        </label>
                        <select
                          name="serviceId"
                          value={formData.serviceId}
                          onChange={handleInputChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 font-medium focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                          id="quote-service-select"
                        >
                          {SERVICES_LIST.map((service) => (
                            <option key={service.id} value={service.id}>
                              {service.name} (Base: ${service.basePrice})
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Select Home Size (Only show for residential types) */}
                      {["residential", "deep", "move"].includes(formData.serviceId) && (
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-3">
                            Home Size
                          </label>
                          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {HOME_SIZES.map((size) => (
                              <button
                                key={size.id}
                                type="button"
                                onClick={() =>
                                  setFormData((prev) => ({ ...prev, homeSize: size.id }))
                                }
                                className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all ${
                                  formData.homeSize === size.id
                                    ? "bg-brand-50 border-brand-500 text-brand-700 shadow-sm ring-2 ring-brand-500/10"
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              >
                                <Home className="w-5 h-5 mb-1.5 opacity-80" />
                                <span className="text-xs font-semibold">{size.label}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Select Frequency */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Cleaning Frequency
                        </label>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {FREQUENCIES.map((freq) => (
                            <button
                              key={freq.id}
                              type="button"
                              onClick={() =>
                                setFormData((prev) => ({ ...prev, frequency: freq.id }))
                              }
                              className={`flex flex-col items-start p-3.5 rounded-xl border text-left transition-all ${
                                formData.frequency === freq.id
                                  ? "bg-brand-50 border-brand-500 text-brand-700 shadow-sm ring-2 ring-brand-500/10"
                                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                              }`}
                            >
                              <div className="flex justify-between items-center w-full mb-1">
                                <span className="text-sm font-bold">{freq.label}</span>
                                {freq.discount > 0 && (
                                  <span className="text-[10px] px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded-full font-semibold">
                                    SAVE {freq.discount * 100}%
                                  </span>
                                )}
                              </div>
                              <span className="text-xs text-slate-500">{freq.text}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Extras Addons */}
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-3">
                          Add Premium Extras
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            {
                              id: "extraFridge",
                              label: "Inside Fridge",
                              price: "$35",
                              desc: "Thorough scrub down",
                            },
                            {
                              id: "extraOven",
                              label: "Inside Oven",
                              price: "$35",
                              desc: "Grease & spot clean",
                            },
                            {
                              id: "extraWindows",
                              label: "Interior Windows",
                              price: "$50",
                              desc: "Sills, frames & glass",
                            },
                            {
                              id: "extraDeep",
                              label: "Deep Clean Detail",
                              price: "$80",
                              desc: "Baseboards, vents, detail",
                            },
                          ].map((addon) => {
                            const isChecked = !!formData[addon.id as keyof QuoteFormData];
                            return (
                              <button
                                key={addon.id}
                                type="button"
                                onClick={() => handleCheckboxChange(addon.id as keyof QuoteFormData)}
                                className={`flex items-start p-3 rounded-xl border text-left transition-all ${
                                  isChecked
                                    ? "bg-brand-50 border-brand-500 text-brand-700 ring-2 ring-brand-500/10"
                                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                                }`}
                              >
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-800">{addon.label}</span>
                                    <span className="text-xs font-semibold text-brand-600">{addon.price}</span>
                                  </div>
                                  <p className="text-xs text-slate-400 mt-0.5 leading-tight">{addon.desc}</p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                      {/* Next button */}
                      <button
                        type="button"
                        onClick={nextStep}
                        className="w-full py-3.5 bg-brand-600 text-white rounded-xl font-semibold shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 mt-6 cursor-pointer"
                        id="quote-step-next"
                      >
                        Continue to Booking Details
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-4"
                    >
                      {/* Name Field */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Your Name *
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              required
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-slate-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                            Phone Number *
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                              <Phone className="w-4 h-4" />
                            </span>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="(555) 000-0000"
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-slate-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Email Field */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                            <Mail className="w-4 h-4" />
                          </span>
                          <input
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="john@example.com"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-slate-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Date Select */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Preferred Cleaning Date *
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                            <Calendar className="w-4 h-4" />
                          </span>
                          <input
                            type="date"
                            required
                            name="preferredDate"
                            value={formData.preferredDate}
                            onChange={handleInputChange}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-9 pr-4 py-3 text-slate-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                          />
                        </div>
                      </div>

                      {/* Special Instructions */}
                      <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">
                          Special Instructions or Notes (Optional)
                        </label>
                        <textarea
                          name="specialNotes"
                          rows={3}
                          value={formData.specialNotes}
                          onChange={handleInputChange}
                          placeholder="Tell us about pet hair, gate codes, key dropoff details..."
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl p-4 text-slate-800 text-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                        />
                      </div>

                      {/* Bottom Button Actions */}
                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="px-4 py-3.5 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 py-3.5 bg-brand-600 disabled:bg-brand-400 text-white rounded-xl font-semibold shadow-lg shadow-brand-600/25 hover:bg-brand-700 hover:-translate-y-0.5 disabled:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
                          id="quote-submit-btn"
                        >
                          {isSubmitting ? (
                            <>
                              <svg
                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <circle
                                  className="opacity-25"
                                  cx="12"
                                  cy="12"
                                  r="10"
                                  stroke="currentColor"
                                  strokeWidth="4"
                                ></circle>
                                <path
                                  className="opacity-75"
                                  fill="currentColor"
                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                ></path>
                              </svg>
                              Securing Your Cleaner...
                            </>
                          ) : (
                            <>
                              Submit Booking & Request Quote
                              <CheckCircle className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Right Side: Sticky Pricing Card */}
                <div className="lg:col-span-5">
                  <div className="sticky top-0 bg-slate-50 border border-slate-150 p-6 rounded-2xl flex flex-col justify-between h-full">
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-brand-600" />
                        Price Breakdown
                      </h5>

                      <div className="space-y-3.5 text-sm">
                        <div className="flex justify-between items-start">
                          <span className="text-slate-500">Service Base</span>
                          <span className="font-semibold text-slate-800 text-right">
                            ${SERVICES_LIST.find((s) => s.id === formData.serviceId)?.basePrice}
                          </span>
                        </div>

                        {["residential", "deep", "move"].includes(formData.serviceId) && (
                          <div className="flex justify-between items-start">
                            <span className="text-slate-500">
                              Home Size multiplier (
                              {HOME_SIZES.find((s) => s.id === formData.homeSize)?.label})
                            </span>
                            <span className="font-semibold text-slate-800">
                              x{HOME_SIZES.find((s) => s.id === formData.homeSize)?.multiplier}
                            </span>
                          </div>
                        )}

                        {/* Extras Addons itemized */}
                        {(formData.extraFridge ||
                          formData.extraOven ||
                          formData.extraWindows ||
                          formData.extraDeep) && (
                          <div className="pt-2.5 border-t border-slate-200/60 space-y-2">
                            <span className="text-slate-400 block text-xs font-semibold tracking-wider uppercase">
                              Addons Included
                            </span>
                            {formData.extraFridge && (
                              <div className="flex justify-between text-xs text-slate-600">
                                <span>Inside Fridge</span>
                                <span>+$35</span>
                              </div>
                            )}
                            {formData.extraOven && (
                              <div className="flex justify-between text-xs text-slate-600">
                                <span>Inside Oven</span>
                                <span>+$35</span>
                              </div>
                            )}
                            {formData.extraWindows && (
                              <div className="flex justify-between text-xs text-slate-600">
                                <span>Interior Windows</span>
                                <span>+$50</span>
                              </div>
                            )}
                            {formData.extraDeep && (
                              <div className="flex justify-between text-xs text-slate-600">
                                <span>Deep Detail Addon</span>
                                <span>+$80</span>
                              </div>
                            )}
                          </div>
                        )}

                        {/* Discount */}
                        {formData.frequency !== "once" && (
                          <div className="flex justify-between items-center text-emerald-600 pt-2 border-t border-slate-200/60">
                            <div className="flex items-center gap-1.5 text-xs font-semibold">
                              <Gift className="w-3.5 h-3.5" />
                              <span>Recurring Savings</span>
                            </div>
                            <span className="font-semibold text-xs">
                              -
                              {
                                FREQUENCIES.find((f) => f.id === formData.frequency)
                                  ?.discount! * 100
                              }
                              %
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Total Section */}
                    <div className="mt-8 pt-5 border-t border-slate-200">
                      <div className="flex items-end justify-between mb-4">
                        <div>
                          <span className="text-slate-400 block text-xs font-bold tracking-wider uppercase">
                            Estimated Total
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {formData.frequency !== "once" ? "Billed per session" : "One-off total"}
                          </span>
                        </div>
                        <div className="text-right">
                          <span className="text-4xl font-extrabold text-slate-900 tracking-tight font-display">
                            ${estimatedPrice}
                          </span>
                        </div>
                      </div>

                      {/* Security badge info */}
                      <div className="bg-white border border-slate-100 p-3 rounded-xl flex items-start gap-2.5">
                        <ShieldCheck className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                        <div className="text-[11px] leading-snug text-slate-500">
                          <strong className="text-slate-700 block font-semibold">
                            Satisfaction Guarantee
                          </strong>
                          If you aren't 100% happy with your clean, we'll re-clean it for free. No credit card required to request a quote.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
