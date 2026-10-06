import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';
import SlidingTicker from './SlidingTicker';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Primary Hero Viewport: Fixed 95vh / 100vh so content fits screen cleanly without fold overflow */}
      <section
        id="home"
        className="relative h-[100vh] min-h-[100vh] w-full overflow-hidden bg-[#050505] flex flex-col justify-between pt-20 sm:pt-24 pb-4"
      >
        {/* 1. Background Layer: hero1 (Sky with Formation Fighter Jets and Contrails) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <picture>
            <source srcSet="/images/hero/hero1.webp" type="image/webp" />
            <img
              src="/images/hero/hero1.jpg"
              alt="Supersonic Formation Jets in Sky"
              className="w-full h-full object-cover object-[65%_25%] sm:object-[70%_30%] lg:object-center opacity-100 filter contrast-105 brightness-100"
            />
          </picture>

          {/* Softer directional gradient so jets, contrails and sky are clearly visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent lg:from-black/60 lg:via-black/20 lg:to-transparent" />
        </div>

        {/* Main Hero Container with Decreased Left/Right Padding */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full my-auto">
          {/* Top Status Bar: Clean Kicker line on left */}
          <div className="mb-4 sm:mb-6">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-red-600" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-military uppercase text-slate-300 drop-shadow-sm">
                  SAG DEFENCE &amp; AEROSPACE • <span className="text-red-500">SOVEREIGN INNOVATION</span>
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Two-Column Split: Content on Left, Bouncing Fighter Jet on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Bold 3Tier Headline, Short Description, Single Pill Button */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal delay={0.1} yOffset={20}>
                {/* Massive 3Tier Headline matching reference style */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight leading-[0.95] uppercase">
                  <span className="text-white block drop-shadow-md">
                    SUPERSONIC
                  </span>
                  <span className="text-white block drop-shadow-md">
                    DEFENCE
                  </span>
                  <span className="text-white block drop-shadow-md mt-1">
                    FROM BHARAT
                  </span>
                </h1>
              </ScrollReveal>

              {/* Short crisp subtitle */}
              <ScrollReveal delay={0.2} yOffset={20}>
                <p className="text-base sm:text-lg text-slate-300 max-w-lg leading-relaxed font-medium">
                  Next generation indigenous aerospace and supersonic defence systems.
                </p>
              </ScrollReveal>

              {/* Single Important Pill Action Button */}
              <ScrollReveal delay={0.25} yOffset={25}>
                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center gap-2.5 border-2 border-red-500 text-white hover:bg-red-600 font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-md shadow-red-600/20 hover:shadow-lg hover:scale-105 group cursor-pointer bg-neutral-900/90 backdrop-blur-md"
                  >
                    <span>Explore Systems</span>
                    <ArrowRight className="w-4 h-4 text-red-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Upper Layer hero2 image with Bouncing Aerodynamic Animation */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-2 lg:pt-0">
              <div className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center justify-center group">
                {/* Subtle Red Atmospheric Glow */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-red-600/15 blur-3xl pointer-events-none z-10 group-hover:bg-red-500/25 transition-all duration-700" />

                {/* Bouncing Supersonic Fighter Jet (hero2) */}
                <div className="relative w-full flex items-center justify-center animate-hero-jet transition-transform duration-500 group-hover:scale-105 cursor-pointer">
                  <picture>
                    <source srcSet="/images/hero/hero2.webp" type="image/webp" />
                    <img
                      src="/images/hero/hero2.png"
                      alt="SAG Supersonic Strike Jet Fighter"
                      className="w-full max-w-[560px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.7)] filter contrast-110 brightness-105 select-none"
                      loading="eager"
                    />
                  </picture>

                  {/* Tactical Telemetry HUD Badge on Hover */}
                  <div className="absolute bottom-1 sm:bottom-2 right-4 sm:right-6 px-3 py-1.5 rounded-lg bg-[#0d0d10]/95 border border-red-500/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-mono font-semibold text-red-400 flex items-center gap-2 shadow-xl pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping" />
                    <span>MACH 1+ SUPERSONIC PLATFORM</span>
                  </div>
                </div>

                {/* Aerodynamic Synchronized Breathing Shadow */}
                <div className="w-3/5 sm:w-2/3 h-5 sm:h-7 rounded-full bg-black/70 blur-md mt-3 sm:mt-5 animate-hero-shadow pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-10 flex justify-center pb-2">
          <a
            href="#ticker"
            className="text-slate-400 hover:text-white transition-colors p-2 flex items-center gap-2 text-xs font-mono tracking-wider uppercase font-semibold"
            aria-label="Scroll to Capabilities"
          >
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-slate-400" />
          </a>
        </div>
      </section>

      {/* 2. Sliding Continuous Capability Ticker */}
      <SlidingTicker />
    </>
  );
};

export default Hero;
