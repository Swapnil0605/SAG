import React from 'react';
import { ArrowRight, ShieldCheck, ChevronDown } from 'lucide-react';
import {
  HeroKineticTitle,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] w-full overflow-hidden bg-black flex flex-col justify-center pt-28 pb-16"
    >
      {/* Background Video - Firmly pinned full bleed without scroll displacement */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg/altitude-contrail.jpg"
          className="w-full h-full object-cover opacity-95"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
          <source src="/video/datacore.mp4" type="video/mp4" />
        </video>
        {/* Deep, seamless gradient overlays that blend softly with the next section */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-b from-transparent via-black/90 to-black z-[2]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Blueprint fine grid lines with subtle cyan glow */}
      <div className="absolute inset-0 blueprint-grid opacity-20 z-[2] pointer-events-none" />

      {/* Tactical HUD Corner Elements (Cyan & Red accents from logo) */}
      <div className="absolute inset-x-8 inset-y-24 pointer-events-none z-[3] hidden lg:block opacity-60">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-400" />
        <div className="absolute bottom-12 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-400" />
        <div className="absolute bottom-12 right-0 w-8 h-8 border-b-2 border-r-2 border-red-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 w-full flex flex-col justify-center">
        {/* Sovereign Built in Bharat Pill Badge with Scroll Reveal */}
        <ScrollReveal yOffset={15} blur={4}>
          <div className="mb-6">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700 shadow-xl backdrop-blur-md">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600" />
              </span>
              <span className="text-[11px] font-mono font-bold tracking-military uppercase text-slate-100">
                BUILT IN BHARAT // SOVEREIGN AEROSPACE &amp; DEFENCE
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Sliced Character Kinetic Velocity Reveal on Hero Heading */}
        <div className="max-w-4xl mb-6">
          <HeroKineticTitle
            tag="h1"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] drop-shadow-lg"
          >
            Next-Generation Supersonic &amp; Tactical Unmanned Systems.
          </HeroKineticTitle>
        </div>

        {/* Crisp Supporting Subheading with Scroll Reveal */}
        <ScrollReveal delay={0.15} yOffset={20}>
          <p className="text-base sm:text-lg md:text-xl text-slate-100 max-w-2xl leading-relaxed mb-10 font-normal drop-shadow-md">
            Pioneering India&apos;s first supersonic loitering munition, physical fiber-optic FPV strike platforms, and tactical ISR systems engineered for absolute electronic warfare survivability.
          </p>
        </ScrollReveal>

        {/* Call-to-Actions with Common Simple Words */}
        <ScrollReveal delay={0.25} yOffset={25}>
          <div className="flex flex-wrap items-center gap-4 mb-16">
            <a
              href="#products"
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-red-600/40 hover:shadow-red-600/60 group cursor-pointer"
            >
              <span>Explore</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#vision"
              className="inline-flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-white font-semibold text-sm px-6 py-3.5 rounded-xl border border-neutral-700 hover:border-neutral-500 transition-all duration-200 backdrop-blur-md cursor-pointer"
            >
              <span>Learn More</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Key Metrics Strip with Text Stretch & Scroll Reveal */}
        <ScrollReveal delay={0.35} yOffset={25}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-8 border-t border-neutral-800 max-w-4xl backdrop-blur-xs">
            <div className="space-y-1">
              <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight drop-shadow-md block">
                  Mach 1+
                </span>
              </ScaleStretchText>
              <span className="block text-xs font-mono uppercase text-slate-200">
                Target Loiter Velocity
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight flex items-center gap-1.5 drop-shadow-md">
                <span>0 RF</span>
                <span className="text-xs text-red-300 font-sans font-bold bg-red-950/90 px-1.5 py-0.5 rounded border border-red-700">
                  100% Tethered
                </span>
              </span>
              <span className="block text-xs font-mono uppercase text-slate-200">
                Optical Micro-Spool Link
              </span>
            </div>

            <div className="space-y-1">
              <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight drop-shadow-md block">
                  20+ km
                </span>
              </ScaleStretchText>
              <span className="block text-xs font-mono uppercase text-slate-200">
                Combat Strike Radius
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-white tracking-tight flex items-center gap-1 drop-shadow-md">
                <span>MIL-STD</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400 inline" />
              </span>
              <span className="block text-xs font-mono uppercase text-slate-200">
                Contested EW Resilience
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Bottom Scroll Indicator */}
      <a
        href="#vision"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-300 hover:text-white transition-colors p-2 hidden md:block"
        aria-label="Scroll to Vision"
      >
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
