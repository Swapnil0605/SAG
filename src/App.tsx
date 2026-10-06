import React, { useState } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionStrategic from './components/VisionStrategic';
import ProductsCatalogue from './components/ProductsCatalogue';
import KpiMetricsSection from './components/KpiMetricsSection';
import TechnologyRoadmap from './components/TechnologyRoadmap';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export const App: React.FC = () => {
  const [, setAppReady] = useState(false);

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* Full-Screen Aerospace Cinematic Video Loading Screen */}
      <LoadingScreen onLoaded={() => setAppReady(true)} />

      {/* Sticky Tactical Header */}
      <Navbar />

      <main className="relative z-10">
        {/* 1. Hero Section with Video Background and Tactical GSAP Entrance */}
        <Hero />

        {/* 2. Strategic Vision & Core Pillars */}
        <VisionStrategic />

        {/* 3. Comprehensive Products Systems Catalogue (All 6 platforms with renders) */}
        <ProductsCatalogue />

        {/* 4. Sovereign Mission Performance KPIs (White Background) */}
        <KpiMetricsSection />

        {/* 5. Technology Development Roadmap (Synapse / Datacore Video Background) */}
        <TechnologyRoadmap />

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
