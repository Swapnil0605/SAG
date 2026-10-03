import React from 'react';
import { Layers, Cpu, Flame, PlaneTakeoff, CheckSquare } from 'lucide-react';
import {
  HorizontalStreamHeading,
  ParallaxText,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export const TechnologyRoadmap: React.FC = () => {
  const phases = [
    {
      num: '01',
      title: 'Concept & Aerodynamics Freeze',
      duration: 'Phase 1',
      description: 'Aerodynamic computational CFD modeling, supersonic wind tunnel simulations, preliminary design review (PDR), and partner propulsion MOUs.',
      icon: Layers,
      status: 'COMPLETED',
    },
    {
      num: '02',
      title: 'Subsystem & Airframe Prototyping',
      duration: 'Phase 2',
      description: 'High-temp carbon-composite airframe fabrication, high-G avionics ruggedization, optical/RF seeker integration, and payload bay qualification.',
      icon: Cpu,
      status: 'ACTIVE PHASE',
    },
    {
      num: '03',
      title: 'Integrated Ground Testing',
      duration: 'Phase 3',
      description: 'Supersonic propulsion test-cell firings, thermal barrier testing, EMI/EMC compliance, and hardware-in-the-loop (HIL) control validation.',
      icon: Flame,
      status: 'SCHEDULED',
    },
    {
      num: '04',
      title: 'Captive & Free Flight Testing',
      duration: 'Phase 4',
      description: 'Defence test-range live launches, captive-carry envelope expansion, seeker target locking at Mach 1+, and armed forces trial readiness.',
      icon: PlaneTakeoff,
      status: 'TARGET 2026',
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative bg-black text-slate-100 pt-20 md:pt-24 pb-10 md:pb-12 overflow-hidden"
    >
      {/* Background Synapse Video - Firmly pinned full bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video/synapse.mp4" type="video/mp4" />
          <source src="/video/datacore.mp4" type="video/mp4" />
        </video>
        {/* Deep, seamless gradient overlays that blend softly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Title with Sliced / Split Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-military uppercase text-cyan-300 font-mono drop-shadow-sm">
                  DEVELOPMENT ROADMAP // SOVEREIGN CAPABILITY
                </span>
              </div>
            </ScrollReveal>

            {/* Horizontal Parallax Stream on Roadmap Title */}
            <HorizontalStreamHeading
              tag="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md"
            >
              From Concept to Flight.
            </HorizontalStreamHeading>
          </div>

          <ScrollReveal delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-200 max-w-md leading-relaxed drop-shadow-sm">
              A disciplined, phased engineering roadmap designed for flight safety, rigorous military validation, and scalable wartime manufacturing in India.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Phases Timeline Grid with Staggered Scroll Reveal & Parallax Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => {
            const Icon = phase.icon;
            return (
              <ScrollReveal
                key={phase.num}
                delay={idx * 0.1}
                yOffset={35}
                className="h-full"
              >
                <div className="bg-[#0d0d10]/90 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between hover:border-cyan-400 hover:shadow-2xl transition-all duration-300 relative group shadow-xl backdrop-blur-md h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      {/* Parallax drift on milestone numbers */}
                      <ParallaxText speed={15}>
                        <span className="text-3xl font-extrabold font-mono text-red-500 block">
                          {phase.num}
                        </span>
                      </ParallaxText>

                      <span
                        className={`text-[10px] font-mono uppercase px-2.5 py-1 rounded-md font-bold ${
                          phase.status === 'ACTIVE PHASE'
                            ? 'bg-red-600 text-white shadow-md shadow-red-600/40'
                            : 'bg-neutral-900 border border-neutral-800 text-neutral-300'
                        }`}
                      >
                        {phase.status}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-5 group-hover:border-cyan-400 transition-colors shadow-xs">
                      <Icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    </div>

                    {/* Scale Stretch on Phase Title */}
                    <ScaleStretchText scaleYFrom={1.2} scaleYTo={1.0}>
                      <h3 className="text-lg font-bold text-white mb-1 leading-snug">
                        {phase.title}
                      </h3>
                    </ScaleStretchText>

                    <span className="text-xs font-mono text-red-400 font-semibold block mb-3">
                      {phase.duration}
                    </span>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center gap-2 text-[11px] font-mono text-slate-300">
                    <CheckSquare className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Defence Corridor Partnered</span>
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

export default TechnologyRoadmap;
