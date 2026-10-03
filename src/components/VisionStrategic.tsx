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
      {/* High-Altitude Supersonic Contrail Background - Firmly pinned full bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/bg/altitude-contrail.jpg"
          alt="High-Altitude Supersonic Contrail"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Deep, seamless gradient overlays that blend softly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with Sliced / Split Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-military uppercase text-cyan-300 font-mono drop-shadow-sm">
                  FROM BHARAT TO THE WORLD // STRATEGIC DOCTRINE
                </span>
              </div>
            </ScrollReveal>

            {/* Kinetic Stretch & Velocity Scrub on Section Heading */}
            <SpeedStretchHeading
              tag="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md"
            >
              Closing the Battlefield Speed Gap.
            </SpeedStretchHeading>
          </div>

          <ScrollReveal delay={0.2} yOffset={25}>
            <p className="text-sm sm:text-base text-slate-200 max-w-md leading-relaxed drop-shadow-sm">
              SAG Defence and Aerospace is engineering sovereign systems from Bharat for the world. Our flagship development programme, <span className="text-red-400 font-semibold">Project Yamraj</span>, pioneers an indigenous supersonic loitering munition for decisive air dominance.
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
                <div className="bg-[#0d0d10]/90 border border-neutral-800 rounded-3xl p-6 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-950/20 transition-all duration-300 shadow-lg flex flex-col justify-between backdrop-blur-md group h-full">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-slate-300 mb-4 group-hover:border-red-500 transition-colors">
                      <Icon className="w-5 h-5 text-red-500 group-hover:text-red-400 transition-colors" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-military text-red-400 uppercase block mb-1">
                      {pillar.title}
                    </span>
                    <h3 className="text-base font-bold text-white mb-2">
                      {pillar.subtitle}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
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
          <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-6 mb-8 border-b border-neutral-800 gap-4">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase font-semibold tracking-military block mb-1">
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

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-cyan-300 font-semibold self-start lg:self-auto">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>PROJECT YAMRAJ // SUPERSONIC MUNITION IN ACTIVE DEVELOPMENT</span>
              </div>
            </div>

            <div className="space-y-6 max-w-4xl">
              {/* Tier 1: Conventional Drones */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-200 font-medium">Conventional Subsonic Loiterers (Propeller / Piston)</span>
                  <span className="text-slate-300 font-semibold">80 – 180 km/h</span>
                </div>
                <div className="w-full h-3.5 bg-black rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div className="h-full bg-neutral-600 rounded-full w-[20%]" />
                </div>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  High attrition against MANPADS, radar-guided flak, and active vehicle EW systems.
                </span>
              </div>

              {/* Tier 2: Jet Loiterers */}
              <div>
                <div className="flex justify-between items-center text-xs font-mono mb-2">
                  <span className="text-slate-100 font-semibold">Modern Transonic Jet Munitions (Global Band)</span>
                  <span className="text-slate-200 font-semibold">400 – 600 km/h</span>
                </div>
                <div className="w-full h-3.5 bg-black rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div className="h-full bg-blue-600 rounded-full w-[50%]" />
                </div>
                <span className="text-[11px] text-slate-300 mt-1 block">
                  Standard speed threshold for international prime systems operating in contested corridors.
                </span>
              </div>

              {/* Tier 3: SAG Supersonic Target with Scale Effect */}
              <div className="p-5 bg-gradient-to-r from-red-950/40 via-neutral-900/80 to-black/90 border border-red-800/80 rounded-2xl shadow-xl">
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
                <div className="w-full h-4 bg-black rounded-full overflow-hidden p-0.5 border border-red-900/70">
                  <div className="h-full bg-gradient-to-r from-red-600 via-rose-500 to-cyan-400 rounded-full w-full shadow-lg shadow-red-500/50" />
                </div>
                <div className="flex flex-col sm:flex-row justify-between text-[11px] font-mono text-slate-200 mt-2 gap-1">
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
