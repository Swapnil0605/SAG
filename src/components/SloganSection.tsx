import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';

interface SloganSectionProps {
  onNavigateAbout?: () => void;
}

export const SloganSection: React.FC<SloganSectionProps> = ({ onNavigateAbout }) => {
  const sectorsRow1 = [
    'Indian Army',
    'Indian Air Force',
    'Navy & Coast Guard',
  ];

  const sectorsRow2 = [
    'Homeland Security',
    'Critical Infrastructure',
    'Disaster Relief',
  ];

  return (
    <section
      id="sectors"
      aria-label="Who We Serve"
      className="relative w-full border-y border-neutral-200 py-20 sm:py-24 lg:py-28 overflow-hidden bg-white select-none"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Kicker, Heading, Link */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal direction="left" distance={30} blur={4}>
              <div>
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-red-600 block mb-3">
                  WHO WE SERVE
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} direction="left" distance={40}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-950 tracking-tight leading-[1.1] max-w-lg">
                From mountain posts to airbases to the sea.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2} direction="left" distance={40}>
              <div className="pt-2">
                <a
                  href="#about"
                  onClick={(e) => {
                    if (onNavigateAbout) {
                      e.preventDefault();
                      onNavigateAbout();
                    }
                  }}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-neutral-950 underline underline-offset-8 decoration-2 decoration-neutral-900 hover:text-red-600 hover:decoration-red-600 transition-colors group cursor-pointer"
                >
                  <span>Our vision and the sectors we serve</span>
                  <ArrowRight className="w-4 h-4 text-neutral-900 group-hover:text-red-600 group-hover:translate-x-1 transition-all" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Pill Badges in 2 Clean Rows */}
          <div className="lg:col-span-6 flex flex-col gap-3.5 sm:gap-4 lg:items-end">
            <ScrollReveal delay={0.15} direction="right" distance={40}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 lg:justify-end">
                {sectorsRow1.map((sector) => (
                  <span
                    key={sector}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full border-2 border-neutral-900 bg-white text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:scale-105 shadow-xs cursor-default"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.25} direction="right" distance={40}>
              <div className="flex flex-wrap items-center gap-3 sm:gap-3.5 lg:justify-end">
                {sectorsRow2.map((sector) => (
                  <span
                    key={sector}
                    className="inline-flex items-center justify-center px-6 sm:px-7 py-3 rounded-full border-2 border-neutral-900 bg-white text-neutral-900 font-bold text-xs sm:text-sm tracking-wide transition-all duration-300 hover:bg-neutral-900 hover:text-white hover:scale-105 shadow-xs cursor-default"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SloganSection;
