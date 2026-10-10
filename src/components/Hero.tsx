import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';
import SlidingTicker from './SlidingTicker';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Primary Hero Viewport with Clean White Background */}
      <section
        id="home"
        className="relative h-[100vh] min-h-[100vh] w-full overflow-hidden flex items-center justify-center pt-20 sm:pt-24 pb-8 border-b border-neutral-200"
        style={{ backgroundColor: '#ffffff' }}
      >
        {/* Main Hero Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full my-auto">
          {/* Top Status Bar: Clean Kicker line on left */}
          <div className="mb-4 sm:mb-6">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-military uppercase text-neutral-600">
                  SAG DEFENCE &amp; AEROSPACE • <span className="text-red-600">SOVEREIGN INNOVATION</span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Two-Column Split: Content on Left, New Hero Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column: Bold 3-Tier Headline, Short Description, Single Pill Button */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-5">
              <ScrollReveal delay={0.1} yOffset={20}>
                {/* Massive 3-Tier Headline */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight leading-[0.95] uppercase">
                  <span className="text-neutral-950 block">
                    SUPERSONIC
                  </span>
                  <span
                    className="text-outline-ink block"
                    style={{
                      color: 'rgb(255, 255, 255)',
                      paintOrder: 'stroke',
                      WebkitTextStroke: '2.5px rgba(9, 14, 19, 0.65)',
                    }}
                  >
                    DEFENCE
                  </span>
                  <span
                    className="block mt-1"
                    style={{ color: '#046a38' }}
                  >
                    FROM BHARAT
                  </span>
                </h1>
              </ScrollReveal>

              {/* Short crisp subtitle */}
              <ScrollReveal delay={0.2} yOffset={20}>
                <p className="text-base sm:text-lg text-neutral-600 max-w-lg leading-relaxed font-medium">
                  Next generation indigenous aerospace and supersonic defence systems.
                </p>
              </ScrollReveal>

              {/* Single Important Pill Action Button */}
              <ScrollReveal delay={0.25} yOffset={25}>
                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center gap-2.5 border-2 border-red-600 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-red-600/25 hover:shadow-lg hover:scale-105 group cursor-pointer"
                  >
                    <span>Explore Systems</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Transparent 3-Jet Formation Flight Image */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
              <ScrollReveal delay={0.2} yOffset={20}>
                <div className="relative w-full flex flex-col items-center justify-center group">
                  {/* Subtle Atmosphere Accent Glow */}
                  <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none -z-10 group-hover:bg-red-600/10 transition-all duration-700" />

                  {/* Supersonic 3-Jet Formation Image */}
                  <div className="relative w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <picture className="w-full flex items-center justify-center">
                      <source srcSet="/images/hero/hero-formation.webp" type="image/webp" />
                      <img
                        src="/images/hero/hero-formation.png"
                        alt="SAG Supersonic Fighter Jet Strike Formation"
                        className="w-full max-w-[540px] sm:max-w-[600px] lg:max-w-[650px] xl:max-w-[700px] h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)] select-none"
                        loading="eager"
                      />
                    </picture>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sliding Continuous Capability Ticker */}
      <SlidingTicker />
    </>
  );
};

export default Hero;
