/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";
import {
  SmoothCurvedDivider,
  WaveDivider,
  AngledDivider,
  CurvedTopDivider,
  GradientFadeDivider
} from "./components/Dividers";

export default function App() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState("residential");

  const handleOpenQuote = () => {
    setSelectedServiceId("residential");
    setIsQuoteOpen(true);
  };

  const handleOpenQuoteWithService = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setIsQuoteOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white">
      {/* Sticky Blurred Header */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Sections with Premium Separators in direct flow order */}
      <main className="flex-grow">
        
        {/* HERO SECTION (Dark theme overlay) */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Hero to Services Divider (Smooth Curve from Dark bg-slate-950 to White) */}
        <SmoothCurvedDivider
          fillColor="fill-white"
          backgroundColor="bg-slate-950"
          className="relative z-10 -mt-1"
        />

        {/* SERVICES SECTION (White bg) */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* Services to Why Choose Us Divider (Wave Transition from White to Light Gray bg-slate-50) */}
        <WaveDivider
          fillColor="fill-slate-50"
          backgroundColor="bg-white"
          className="relative z-10 -mt-1"
        />

        {/* WHY CHOOSE US SECTION (Light Gray bg-slate-50) */}
        <WhyChooseUs />

        {/* Why Choose Us to Testimonials (Soft Gradient Fade from Light Gray bg-slate-50 to White) */}
        <GradientFadeDivider
          from="from-slate-50"
          to="to-white"
          height="h-24"
        />

        {/* TESTIMONIALS SECTION (White bg) */}
        <Testimonials />

        {/* Testimonials to CTA Banner Divider (Angled separator from White into Teal gradient start) */}
        <AngledDivider
          fillColor="fill-brand-800"
          backgroundColor="bg-white"
          className="relative z-10 -mt-1"
        />

        {/* CTA BANNER (Soft Teal Gradient bg) */}
        <CTABanner onOpenQuote={handleOpenQuote} />

        {/* CTA Banner to Footer Divider (Curved divider from Teal gradient down to Dark slate bg-slate-950) */}
        <CurvedTopDivider
          fillColor="fill-slate-950"
          backgroundColor="bg-brand-800"
          className="relative z-10 -mt-1"
        />

        {/* FOOTER SECTION (Dark slate bg-slate-950) */}
        <Footer onOpenQuote={handleOpenQuote} />

      </main>

      {/* Interactive Clean Estimate & Booking Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
