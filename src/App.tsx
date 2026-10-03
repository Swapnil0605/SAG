'use client';

import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionStrategic from './components/VisionStrategic';
import ProductsCatalogue from './components/ProductsCatalogue';
import TechnologyRoadmap from './components/TechnologyRoadmap';
import Leadership from './components/Leadership';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const App: React.FC = () => {
  const [, setAppReady] = useState(false);

  return (
    <div className="min-h-screen bg-[#050505] text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden">
      {/* Full-Screen Aerospace Cinematic Video Loading Screen */}
      <LoadingScreen onLoaded={() => setAppReady(true)} />

      {/* Sticky Tactical Header */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero Section with Video Background and Tactical GSAP Entrance */}
        <Hero />

        {/* 2. Strategic Vision, Speed Escalation (Mach 1+ Contrails Background) */}
        <VisionStrategic />

        {/* 3. Comprehensive Products Systems Catalogue (All 6 platforms with renders) */}
        <ProductsCatalogue />

        {/* 4. Technology Development Roadmap (Synapse / Datacore Video Background) */}
        <TechnologyRoadmap />

        {/* 5. Executive & Technical Leadership (Military Bunker Hangar Background) */}
        <Leadership />

        {/* 6. Official Contact & Technical Briefing Inquiries */}
        <ContactSection />
      </main>

      {/* 7. Footer with Sanskrit Motto & Sovereign Declaration */}
      <Footer />

      {/* 8. Floating WhatsApp Action Button in Bottom-Right Corner */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
