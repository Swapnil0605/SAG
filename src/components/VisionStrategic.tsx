import React from 'react';
import { Shield, Zap, Crosshair, Award } from 'lucide-react';
import {
  ScrollReveal,
} from './effects/TextScrollEffects';

export const VisionStrategic: React.FC = () => {
  return (
    <section
      id="about"
      className="relative text-slate-100 py-24 md:py-32 overflow-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      <div id="vision" className="absolute top-24 pointer-events-none" />
      {/* High-Altitude Supersonic Contrail Background – Fixed Parallax */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: 'rgb(10, 13, 14)' }}>
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-95 filter contrast-110 brightness-105"
          style={{
            backgroundImage: "url('/images/bg/altitude-contrail.jpg')",
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Soft RGB(10, 13, 14) overlay so contrail is clearly visible */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 13, 14, 0.4)' }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with Sliced / Split Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-slate-300 block">
                  STRATEGIC DOCTRINE // BHARAT TO THE WORLD
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Uppercase Section Heading matching sample */}
            <ScrollReveal delay={0.1} yOffset={20}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
                <span className="text-white block drop-shadow-sm">CLOSING THE</span>
                <span className="text-white block drop-shadow-sm mt-1">SPEED GAP.</span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} yOffset={25}>
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed font-normal">
              SAG Defence and Aerospace is engineering sovereign systems from Bharat for the world. Our flagship development programme, <span className="text-red-500 font-semibold">Project Yamraj</span>, pioneers an indigenous supersonic loitering munition for decisive air dominance.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Core Pillars – DEFEND | DETER | LEAD | SELF-RELIANCE with Staggered Scroll Reveal */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {[
            {
              title: 'DEFEND',
              subtitle: 'Sovereign Borders',
              desc: 'High altitude VTOL and quadcopter ISR providing continuous perimeter intelligence in GNSS denied zones.',
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
              title: 'WORLD CLASS',
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
                <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 hover:border-red-500/80 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 shadow-md flex flex-col justify-between group h-full">
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
      </div>
    </section>
  );
};

export default VisionStrategic;
