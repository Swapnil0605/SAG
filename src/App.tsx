import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import VisionStrategic from './components/VisionStrategic';
import ProductsCatalogue from './components/ProductsCatalogue';
import KpiMetricsSection from './components/KpiMetricsSection';
import TechnologyRoadmap from './components/TechnologyRoadmap';
import SloganSection from './components/SloganSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/AboutPage';

export const App: React.FC = () => {
  const [, setAppReady] = useState(false);

  // Detect whether current route should be About page or Home
  const getInitialPage = (): 'home' | 'about' => {
    if (typeof window === 'undefined') return 'home';
    const path = window.location.pathname.toLowerCase();
    const hash = window.location.hash.toLowerCase();
    if (
      path === '/about' ||
      path.startsWith('/about/') ||
      hash === '#about' ||
      hash === '#/about'
    ) {
      return 'about';
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<'home' | 'about'>(getInitialPage);

  // Sync browser back/forward buttons with page state
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase();
      const hash = window.location.hash.toLowerCase();
      if (
        path === '/about' ||
        path.startsWith('/about/') ||
        hash === '#about' ||
        hash === '#/about'
      ) {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleNavigate = (page: 'home' | 'about', hash?: string) => {
    if (page === 'about') {
      setCurrentPage('about');
      if (window.location.pathname !== '/about') {
        window.history.pushState({}, '', '/about');
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setCurrentPage('home');
      if (window.location.pathname === '/about') {
        window.history.pushState({}, '', hash ? `/${hash}` : '/');
      }
      if (hash) {
        setTimeout(() => {
          const el = document.querySelector(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* Full-Screen Aerospace Cinematic Video Loading Screen */}
      <LoadingScreen onLoaded={() => setAppReady(true)} />

      {/* Sticky Tactical Header with Active Page Support */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="relative z-10">
        {currentPage === 'about' ? (
          /* Dedicated High-Aesthetic About Page */
          <AboutPage onNavigateHome={(hash) => handleNavigate('home', hash)} />
        ) : (
          /* Main Sovereign Showcase Homepage */
          <>
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

            {/* Strategic Slogan Directive Banner (White Background with Logo Green Typography) */}
            <SloganSection />

            {/* 6. Official Contact & Technical Briefing Inquiries */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 7. Footer with Sanskrit Motto & Sovereign Declaration */}
      <Footer onNavigate={handleNavigate} />

      {/* 8. Floating WhatsApp Action Button in Bottom-Right Corner */}
      <WhatsAppButton />
    </div>
  );
};

export default App;
