/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { InteractiveCleanSimulator } from "./components/InteractiveCleanSimulator";
import { BeforeAfterSlider } from "./components/BeforeAfterSlider";
import { LiveCalculator } from "./components/LiveCalculator";
import { AICleanAssistant } from "./components/AICleanAssistant";
import { Services } from "./components/Services";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { CTABanner } from "./components/CTABanner";
import { Footer } from "./components/Footer";
import { QuoteModal } from "./components/QuoteModal";

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
    <div className="min-h-screen flex flex-col relative bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* Sticky Glass Navbar */}
      <Header onOpenQuote={handleOpenQuote} />

      {/* Main Flow */}
      <main className="flex-grow">
        
        {/* HERO SECTION */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* INTERACTIVE CLEAN SIMULATOR */}
        <InteractiveCleanSimulator />

        {/* BEFORE & AFTER COMPARISON SLIDER */}
        <BeforeAfterSlider />

        {/* REAL-TIME COST ESTIMATOR */}
        <LiveCalculator onOpenQuote={handleOpenQuote} />

        {/* SPARKY AI CONCIERGE */}
        <AICleanAssistant onOpenQuote={handleOpenQuote} />

        {/* BESPOKE SERVICES GRID */}
        <Services onOpenQuoteWithService={handleOpenQuoteWithService} />

        {/* WHY CHOOSE US & COMPARISON TABLE */}
        <WhyChooseUs />

        {/* DELIGHTED CUSTOMER TESTIMONIALS */}
        <Testimonials />

        {/* SPECIAL OFFER CTA BANNER */}
        <CTABanner onOpenQuote={handleOpenQuote} />

        {/* FOOTER */}
        <Footer onOpenQuote={handleOpenQuote} />

      </main>

      {/* Interactive Booking & Estimate Modal */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onClose={() => setIsQuoteOpen(false)}
        initialServiceId={selectedServiceId}
      />
    </div>
  );
}
