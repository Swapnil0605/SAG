import React from 'react';
import { ArrowUp } from 'lucide-react';
import { SanskritRadiantMotto } from './effects/TextScrollEffects';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-slate-300 border-t border-neutral-800/80 relative overflow-hidden">
      {/* Military Airplane Bunker Background (matching Sovereign Defence Leadership) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/bg/airplane-bunker.jpg"
          alt="Aerospace Hangar Bunker"
          className="w-full h-full object-cover object-center opacity-75"
        />
        {/* Gradient overlays tuned for high visibility and sharp typographic contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/75 to-black/95" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Blueprint grid subtle */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-10 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-8 border-b border-neutral-800/80">
          {/* Col 1 & 2: Brand & Sanskrit Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-1.5 rounded-xl bg-white border border-neutral-200 shadow-md">
                <img
                  src="/sag-logo-new.png"
                  alt="SAG Defence & Aerospace Logo"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <div>
                <span className="text-[14.8px] font-bold tracking-tight text-white block leading-none">
                  SAG
                </span>
                <span className="text-[13.12px] font-medium tracking-military uppercase text-cyan-400 mt-1 block">
                  DEFENCE AND AEROSPACE
                </span>
              </div>
            </div>

            {/* Traditional Sanskrit Motto with Radiant Scroll Tracking */}
            <div className="pt-2">
              <SanskritRadiantMotto className="text-[14.8px] text-cyan-300 font-bold font-sans block">
                नवोन्मेष तन्त्रज्ञाना भ्यां राष्ट्रसेवा
              </SanskritRadiantMotto>
              <span className="text-[13.12px] text-slate-400 font-mono italic block mt-0.5">
                National Service Through Innovative Technology
              </span>
            </div>

            <p className="text-[13.12px] text-slate-400 leading-relaxed max-w-sm pt-2">
              Creating world-class defence and aerospace products from Bharat for the world through indigenous engineering, disciplined innovation, and uncompromising reliability.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[13.12px] font-mono">
              <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 shadow-xs">
                MAKE IN INDIA
              </span>
              <span className="px-3 py-1 rounded-lg bg-red-950/60 border border-red-800/80 text-red-400 font-semibold">
                ATMANIRBHAR BHARAT
              </span>
            </div>
          </div>

          {/* Col 3: Systems Portfolio */}
          <div>
            <h4 className="text-[14.8px] font-bold font-mono tracking-military uppercase text-white mb-4">
              DEFENCE SYSTEMS
            </h4>
            <ul className="space-y-2.5 text-[13.12px] text-slate-400 font-mono">
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  SAG RAZOR P1 (FPV)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-400 transition-colors">
                  RAZOR OFC (Fiber-Optic)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  SCOUT-X (ISR Quad)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  AERON A1 (VTOL Hybrid)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  DOOM MK-1 (SAM / C-UAS)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-cyan-400 transition-colors">
                  SAG VELOCITY (Interceptor)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Technology & Roadmap */}
          <div>
            <h4 className="text-[14.8px] font-bold font-mono tracking-military uppercase text-white mb-4">
              CAPABILITIES
            </h4>
            <ul className="space-y-2.5 text-[13.12px] text-slate-400 font-mono">
              <li>
                <a href="#vision" className="hover:text-red-400 transition-colors">
                  Mach 1+ Loitering Class
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
                  Sovereign Propulsion
                </a>
              </li>
              <li>
                <a href="#vision" className="hover:text-cyan-400 transition-colors">
                  Zero-RF Optical Tether
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-cyan-400 transition-colors">
                  Subsystem Prototyping
                </a>
              </li>
              <li>
                <a href="#leadership" className="hover:text-cyan-400 transition-colors">
                  Flight Test Campaign
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office */}
          <div>
            <h4 className="text-[14.8px] font-bold font-mono tracking-military uppercase text-white mb-4">
              HEADQUARTERS
            </h4>
            <div className="space-y-3 text-[13.12px] text-slate-400">
              <p className="leading-relaxed">
                SAG Defence and Aerospace Pvt Ltd<br />
                Ground Floor, 43, above Arvind Book House,<br />
                near BMTC Bus Stop, BHCS Layout,<br />
                Chandra Layout, Bengaluru,<br />
                Karnataka 560040, India
              </p>
              <div className="pt-2 text-[13.12px] font-mono space-y-1">
                <p className="text-slate-200">
                  Direct:{' '}
                  <a href="tel:+919113867676" className="hover:text-cyan-400 transition-colors">
                    +91 9113867676
                  </a>
                </p>
                <p>
                  <a href="mailto:contactus@sagdefaero.com" className="text-red-400 font-medium hover:underline">
                    contactus@sagdefaero.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13.12px] font-mono text-slate-400">
          <div className="text-center sm:text-left">
            <span>© {currentYear} SAG Defence and Aerospace Pvt Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center">
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer text-[13.12px]"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>TOP</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
