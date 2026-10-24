import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';

interface HeroProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] lg:h-[100vh] lg:min-h-[100vh] w-full overflow-hidden flex items-center justify-center pt-24 sm:pt-28 lg:pt-20 pb-12 sm:pb-16 lg:pb-8 border-b border-neutral-200"
      style={{ backgroundColor: '#ffffff' }}
    >
        {/* Main Hero Container */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full my-auto">
          {/* Top Status Bar: Clean Kicker line on left */}
          <div className="mb-4 sm:mb-6">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-2.5 sm:gap-3 flex-wrap">
                <span className="w-6 sm:w-8 h-[2px] bg-red-600 flex-shrink-0" />
                <span className="text-[11px] sm:text-[13px] font-mono font-bold tracking-military uppercase text-neutral-600">
                  A DEFENCE DEEP-TECH STARTUP FROM BENGALURU
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Two-Column Split: Content on Left, New Hero Image on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
            {/* Left Column: Bold 3-Tier Headline, Short Description, Action Buttons */}
            <div className="lg:col-span-6 xl:col-span-6 space-y-4 sm:space-y-5">
              <ScrollReveal delay={0.1} yOffset={20}>
                {/* Massive 3-Tier Headline */}
                <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight leading-[0.96] uppercase">
                  <span className="text-neutral-950 block">
                    SUPERSONIC
                  </span>
                  <span
                    className="text-outline-ink block"
                    style={{
                      color: 'rgb(255, 255, 255)',
                      paintOrder: 'stroke',
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
                <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl leading-relaxed font-normal">
                  Warfare now changes in weeks. We build the systems that keep up — supersonic strike, rapid air defence and layered counter-drone shields. Designed, built and improved in India, at startup speed.
                </p>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal delay={0.25} yOffset={25}>
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <a
                    href="#products"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById('products');
                      if (el) {
                        el.scrollIntoView({ behavior: 'smooth' });
                      } else {
                        onNavigate?.('home', '#products');
                      }
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border-2 border-red-600 bg-red-600 hover:bg-red-700 text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 shadow-md shadow-red-600/25 hover:shadow-lg hover:scale-105 group cursor-pointer text-center"
                  >
                    <span>OUR SYSTEMS</span>
                    <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-all" />
                  </a>
                  <a
                    href="/products"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate?.('products');
                    }}
                    className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-neutral-900 bg-white hover:bg-neutral-900 text-neutral-900 hover:text-white font-bold text-xs sm:text-sm tracking-wider uppercase px-5 sm:px-7 py-3 sm:py-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-xs hover:shadow-md text-center"
                  >
                    <span>PRODUCT PORTFOLIO</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Transparent 3-Jet Formation Flight Image */}
            <div className="lg:col-span-6 xl:col-span-6 relative flex flex-col items-center justify-center pt-6 sm:pt-8 lg:pt-0">
              <ScrollReveal delay={0.2} yOffset={20}>
                <div className="relative w-full flex flex-col items-center justify-center group">
                  {/* Subtle Atmosphere Accent Glow */}
                  <div className="absolute w-60 h-60 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-red-600/5 blur-3xl pointer-events-none -z-10 group-hover:bg-red-600/10 transition-all duration-700" />

                  {/* Supersonic Munition Hero Image */}
                  <div className="relative w-full flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.03]">
                    <picture className="w-full flex items-center justify-center">
                      <source srcSet="/images/hero/hero-yamraj.webp" type="image/webp" />
                      <img
                        src="/images/hero/hero-yamraj.png"
                        alt="SAG Supersonic Defence Munition - Project Yamraj"
                        className="w-full max-w-[320px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[720px] xl:max-w-[800px] h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.20)] select-none"
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
  );
};

export default Hero;
