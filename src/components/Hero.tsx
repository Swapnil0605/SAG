import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';

export const Hero: React.FC = () => {
  return (
    <>
      {/* Primary Hero Viewport: Fixed 95vh / 100vh so content fits screen cleanly without fold overflow */}
      <section
        id="home"
        className="relative h-[100vh] min-h-[100vh] w-full overflow-hidden bg-black flex flex-col justify-between pt-20 sm:pt-24 pb-4"
      >
        {/* 1. Background Layer: hero1 (Sky with Formation Fighter Jets and Contrails) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <picture>
            <source srcSet="/images/hero/hero1.webp" type="image/webp" />
            <img
              src="/images/hero/hero1.jpg"
              alt="Supersonic Formation Jets in Sky"
              className="w-full h-full object-cover object-[65%_25%] sm:object-[70%_30%] lg:object-center opacity-85 brightness-90 filter contrast-105"
            />
          </picture>

          {/* Sophisticated dark directional gradients for maximum text legibility & seamless section transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/75 to-black/25 lg:from-black/95 lg:via-black/70 lg:to-transparent" />
          <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/95 via-black/60 to-transparent z-[2]" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-black via-black/85 to-transparent z-[2]" />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Blueprint technical grid overlay */}
        <div className="absolute inset-0 blueprint-grid opacity-20 z-[2] pointer-events-none" />

        {/* Main Hero Container with Decreased Left/Right Padding */}
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 w-full my-auto">
          {/* Top Status Bar: Clean Kicker line on left */}
          <div className="mb-4 sm:mb-6">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-cyan-400" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-military uppercase text-cyan-300 drop-shadow-sm">
                  SAG DEFENCE &amp; AEROSPACE • SOVEREIGN INNOVATION
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Two-Column Split: Content on Left, Bouncing Fighter Jet on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
            {/* Left Column: Bold 3-Tier Headline, Short Description, Single Pill Button */}
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal delay={0.1} yOffset={20}>
                {/* Massive 3-Tier Headline matching reference style */}
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] font-black tracking-tight leading-[0.95] uppercase">
                  <span className="text-white block drop-shadow-2xl">
                    SUPERSONIC
                  </span>
                  <span className="text-white block drop-shadow-2xl">
                    DEFENCE
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-200 block drop-shadow-xl mt-1">
                    FROM BHARAT
                  </span>
                </h1>
              </ScrollReveal>

              {/* Short crisp subtitle */}
              <ScrollReveal delay={0.2} yOffset={20}>
                <p className="text-base sm:text-lg text-slate-200 max-w-lg leading-relaxed font-normal drop-shadow-md">
                  Next-generation indigenous aerospace and supersonic defence systems.
                </p>
              </ScrollReveal>

              {/* Single Important Pill Action Button */}
              <ScrollReveal delay={0.25} yOffset={25}>
                <div className="pt-2">
                  <a
                    href="#products"
                    className="inline-flex items-center justify-center gap-2.5 border-2 border-cyan-400 text-cyan-300 hover:text-white hover:bg-cyan-500/20 font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-cyan-950/40 hover:scale-105 group cursor-pointer backdrop-blur-xs"
                  >
                    <span>Explore Systems</span>
                    <ArrowRight className="w-4 h-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column: Upper Layer hero2 image with Bouncing Aerodynamic Animation */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-2 lg:pt-0">
              <div className="relative w-full max-w-lg lg:max-w-none flex flex-col items-center justify-center group">
                {/* Subtle Cyan Afterburner / Atmospheric Glow */}
                <div className="absolute w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none -z-10 group-hover:bg-cyan-500/30 transition-all duration-700" />

                {/* Bouncing Supersonic Fighter Jet (hero2) */}
                <div className="relative w-full flex items-center justify-center animate-hero-jet transition-transform duration-500 group-hover:scale-105 cursor-pointer">
                  <picture>
                    <source srcSet="/images/hero/hero2.webp" type="image/webp" />
                    <img
                      src="/images/hero/hero2.png"
                      alt="SAG Supersonic Strike Jet Fighter"
                      className="w-full max-w-[560px] h-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.9)] filter contrast-110 brightness-105 select-none"
                      loading="eager"
                    />
                  </picture>

                  {/* Tactical Telemetry HUD Badge on Hover */}
                  <div className="absolute -bottom-1 sm:bottom-2 right-4 sm:right-6 px-3 py-1.5 rounded-lg bg-black/90 border border-cyan-400/60 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] sm:text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-2xl pointer-events-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>MACH 1+ SUPERSONIC PLATFORM</span>
                  </div>
                </div>

                {/* Aerodynamic Synchronized Breathing Shadow */}
                <div className="w-3/5 sm:w-2/3 h-5 sm:h-7 rounded-full bg-black/85 blur-md -mt-3 sm:-mt-5 animate-hero-shadow pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Scroll Cue */}
        <div className="relative z-10 flex justify-center pb-2">
          <a
            href="#metrics"
            className="text-slate-400 hover:text-cyan-400 transition-colors p-2 flex items-center gap-2 text-xs font-mono tracking-wider uppercase"
            aria-label="Scroll to Tactical Metrics"
          >
            <span>Scroll</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </a>
        </div>
      </section>

      {/* 2. Tactical Metrics Strip: Placed immediately below the hero fold so it reveals upon scrolling */}
      <section
        id="metrics"
        className="relative z-10 bg-black/95 border-y border-neutral-800/80 py-8"
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <ScrollReveal yOffset={20}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight drop-shadow-md block">
                  Mach 1+
                </span>
                <span className="block text-xs font-mono uppercase text-slate-300 tracking-wider">
                  Loiter Velocity
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center gap-2 drop-shadow-md">
                  <span>0 RF</span>
                  <span className="text-[10px] text-red-300 font-sans font-bold bg-red-950/90 px-2 py-0.5 rounded border border-red-700 tracking-normal">
                    Tethered
                  </span>
                </div>
                <span className="block text-xs font-mono uppercase text-slate-300 tracking-wider">
                  Optical Link
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight drop-shadow-md block">
                  20+ km
                </span>
                <span className="block text-xs font-mono uppercase text-slate-300 tracking-wider">
                  Strike Radius
                </span>
              </div>

              <div className="space-y-1.5">
                <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight flex items-center gap-2 drop-shadow-md">
                  <span>MIL-STD</span>
                  <ShieldCheck className="w-5 h-5 text-emerald-400 inline" />
                </div>
                <span className="block text-xs font-mono uppercase text-slate-300 tracking-wider">
                  EW Resilience
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
};

export default Hero;
