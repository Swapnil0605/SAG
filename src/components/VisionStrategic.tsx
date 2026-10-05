import React from 'react';
import { Gauge, Shield, Zap, Crosshair, Award } from 'lucide-react';
import {
  SpeedStretchHeading,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export const VisionStrategic: React.FC = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-slate-100 py-24 md:py-32 overflow-hidden"
    >
      <div id="vision" className="absolute -top-24 pointer-events-none" />
      {/* High-Altitude Supersonic Contrail Background - Fixed Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-65 filter contrast-110 brightness-90"
          style={{
            backgroundImage: "url('/images/bg/altitude-contrail.jpg')",
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Soft, reduced dark overlay so contrail & sky are clearly visible */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with Sliced / Split Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-sky-400 block">
                  STRATEGIC DOCTRINE // BHARAT TO THE WORLD
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Uppercase Section Heading matching sample */}
            <ScrollReveal delay={0.1} yOffset={20}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
                <span className="text-white block drop-shadow-sm">CLOSING THE</span>
                <span className="text-sky-400 block drop-shadow-sm mt-1">SPEED GAP.</span>
              </h2>
            </ScrollReveal>
          </div>


          <ScrollReveal delay={0.2} yOffset={25}>
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-normal">
              SAG Defence and Aerospace is engineering sovereign systems from Bharat for the world. Our flagship development programme, <span className="text-red-500 font-semibold">Project Yamraj</span>, pioneers an indigenous supersonic loitering munition for decisive air dominance.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Core Pillars - DEFEND | DETER | LEAD | SELF-RELIANCE with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            {
              title: 'DEFEND',
              subtitle: 'Sovereign Borders',
              desc: 'High-altitude VTOL and quadcopter ISR providing continuous GNSS-denied perimeter intelligence.',
              icon: Shield,
            },
            {
              title: 'DETER',
              subtitle: 'Precision Strike',
              desc: 'FPV combat systems and rapid loitering platforms delivering lethal terminal kinetics in contested airspace.',
              icon: Zap,
            },
            {
              title: 'LEAD',
              subtitle: 'Project Yamraj',
              desc: 'Flagship programme engineering an indigenous supersonic loitering munition to advance Bharat’s strike frontier.',
              icon: Award,
            },
            {
              title: 'WORLD-CLASS',
              subtitle: 'Indigenous Quality',
              desc: 'Building innovative, reliable products through indigenous engineering and uncompromising quality for the world.',
              icon: Crosshair,
            },
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal
                key={pillar.title}
                delay={idx * 0.1}
                yOffset={30}
                className="h-full"
              >
                <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 hover:border-sky-500/80 hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 shadow-md flex flex-col justify-between group h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-200 mb-4 group-hover:border-red-500/80 group-hover:bg-red-950/40 transition-colors">
                      <Icon className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-military text-red-500 uppercase block mb-1">
                      {pillar.title}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {pillar.subtitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tactical Speed Escalation & Target Envelope with Text Stretching & Scaling */}
        <ScrollReveal yOffset={40}>
          <div className="bg-[#0a0a0c]/90 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase font-semibold tracking-military block mb-1">
                  VELOCITY BENCHMARK // MODERN CONFLICT ESCALATION
                </span>

                {/* Text Stretching / Scaling along Y-axis as viewport reaches it */}
                <ScaleStretchText
                  scaleYFrom={1.4}
                  scaleYTo={1.0}
                  letterSpacingFrom="0.06em"
                  letterSpacingTo="-0.01em"
                >
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    Speed Equals Battlefield Survivability
                  </h3>
                </ScaleStretchText>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-sky-400 font-semibold self-start lg:self-auto shadow-sm">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse" />
                <span>PROJECT YAMRAJ // SUPERSONIC MUNITION IN ACTIVE DEVELOPMENT</span>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              {/* Tier 1: Conventional Drones */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-300 font-medium">Conventional Subsonic Loiterers (Propeller / Piston)</span>
                  <span className="text-white font-semibold">80 – 180 km/h</span>
                </div>
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700">
                  <div className="h-full bg-slate-500 rounded-full w-[20%]" />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  High attrition against MANPADS, radar-guided flak, and active vehicle EW systems.
                </span>
              </div>

              {/* Tier 2: Jet Loiterers */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-200 font-semibold">Modern Transonic Jet Munitions (Global Band)</span>
                  <span className="text-white font-semibold">400 – 600 km/h</span>
                </div>
                <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-neutral-700">
                  <div className="h-full bg-blue-500 rounded-full w-[50%]" />
                </div>
                <span className="text-[11px] text-slate-400 mt-1 block">
                  Standard speed threshold for international prime systems operating in contested corridors.
                </span>
              </div>

              {/* Tier 3: SAG Supersonic Target with Scale Effect */}
              <div className="p-5 bg-gradient-to-r from-red-950/40 via-[#0d0d10] to-sky-950/40 border border-red-500/40 rounded-2xl shadow-md">
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-white font-bold flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-red-500" />
                    Project Yamraj (Sovereign Supersonic Class)
                  </span>
                  <ScaleStretchText
                    scaleYFrom={1.3}
                    scaleYTo={1.0}
                    className="inline-block"
                  >
                    <span className="text-red-400 font-extrabold text-sm">Mach 1+ (1,225+ km/h)</span>
                  </ScaleStretchText>
                </div>
                <div className="w-full h-4 bg-neutral-800 rounded-full overflow-hidden p-0.5 border border-red-500/30">
                  <div className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-sky-400 rounded-full w-full shadow-sm" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-[11px] font-mono text-slate-300 mt-2 gap-1">
                  <span>Compresses hostile intercept decision window from minutes to seconds</span>
                  <span className="font-bold text-red-400">Terminal Kinetic Dominance</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionStrategic;
