import React from 'react';
import { CheckSquare } from 'lucide-react';
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
    },
    {
      num: '02',
      title: 'Subsystem & Airframe Prototyping',
      duration: 'Phase 2',
      description: 'High-temp carbon-composite airframe fabrication, high-G avionics ruggedization, optical/RF seeker integration, and payload bay qualification.',
    },
    {
      num: '03',
      title: 'Integrated Ground Testing',
      duration: 'Phase 3',
      description: 'Supersonic propulsion test-cell firings, thermal barrier testing, EMI/EMC compliance, and hardware-in-the-loop (HIL) control validation.',
    },
    {
      num: '04',
      title: 'Captive & Free Flight Testing',
      duration: 'Phase 4',
      description: 'Defence test-range live launches, captive-carry envelope expansion, seeker target locking at Mach 1+, and armed forces trial readiness.',
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative bg-black text-slate-100 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden"
    >
      {/* Background Synapse Video - Clearly visible with soft dark contrast overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/video/synapse.mp4" type="video/mp4" />
          <source src="/video/datacore.mp4" type="video/mp4" />
        </video>
        {/* Soft, reduced dark overlay so motion video is clearly visible */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Title with Bold Split Uppercase Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollReveal yOffset={15} blur={4}>
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-sky-400 block">
                  DEVELOPMENT ROADMAP // SOVEREIGN CAPABILITY
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Uppercase Section Heading */}
            <ScrollReveal delay={0.1} yOffset={20}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
                <span className="text-white block drop-shadow-sm">FROM CONCEPT</span>
                <span className="text-sky-400 block drop-shadow-sm mt-1">TO FLIGHT.</span>
              </h2>
            </ScrollReveal>
          </div>


          <ScrollReveal delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
              A disciplined, phased engineering roadmap designed for flight safety, rigorous military validation, and scalable wartime manufacturing in India.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Phases Timeline Grid with Staggered Scroll Reveal & Parallax Numbers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, idx) => {
            return (
              <ScrollReveal
                key={phase.num}
                delay={idx * 0.1}
                yOffset={35}
                className="h-full"
              >
                <div className="bg-[#0d0d10]/90 border border-neutral-800 rounded-3xl p-7 flex flex-col justify-between hover:border-sky-500 hover:shadow-xl transition-all duration-300 relative group shadow-md backdrop-blur-md h-full">
                  <div>
                    <div className="mb-6">
                      {/* Parallax drift on milestone numbers */}
                      <ParallaxText speed={15}>
                        <span className="text-3xl sm:text-4xl font-extrabold font-mono text-red-500 block">
                          {phase.num}
                        </span>
                      </ParallaxText>
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

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <CheckSquare className="w-3.5 h-3.5 text-sky-400" />
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

