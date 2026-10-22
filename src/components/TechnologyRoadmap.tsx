import React from 'react';
import { CheckSquare } from 'lucide-react';
import {
  ParallaxText,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export const TechnologyRoadmap: React.FC = () => {
  const phases = [
    {
      num: '01',
      title: 'Designs ship as files',
      footer: 'Days, Not Years',
      description:
        'When the threat changes, we update a file — not a factory. Fixes reach the field in days, not years.',
    },
    {
      num: '02',
      title: 'Indian by design',
      footer: 'Engineered in Bengaluru',
      description:
        'Engineered in Bengaluru, with indigenous content built in from the first prototype.',
    },
    {
      num: '03',
      title: 'We know the threat',
      footer: 'Real-World Tested',
      description:
        'We build FPV drones ourselves — so our counter-drone systems are tested against the real thing.',
    },
    {
      num: '04',
      title: 'Humans stay in command',
      footer: 'Critical Human Decision',
      description:
        'Our systems automate the dangerous work. Every critical decision stays with a trained operator.',
    },
  ];

  return (
    <section
      id="roadmap"
      className="relative text-slate-100 pt-20 md:pt-24 pb-16 md:pb-20 overflow-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* Background Synapse Video – Fixed Background (contained to section) */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        style={{
          backgroundColor: 'rgb(10, 13, 14)',
          clipPath: 'inset(0)',
        }}
      >
        <div className="fixed inset-0 w-full h-full pointer-events-none">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-70 filter brightness-105"
          >
            <source src="/video/synapse.mp4" type="video/mp4" />
            <source src="/video/datacore.mp4" type="video/mp4" />
          </video>
          {/* Soft RGB(10, 13, 14) overlay so video is clearly visible */}
          <div
            className="absolute inset-0"
            style={{ backgroundColor: 'rgba(10, 13, 14, 0.45)' }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Title with Bold Split Uppercase Reveal */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="shrink-0">
            <ScrollReveal yOffset={15} blur={4}>
              <div className="mb-3">
                <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-red-500 block">
                  HOW WE BUILD
                </span>
              </div>
            </ScrollReveal>

            {/* Exactly 2-Line Bold Uppercase Section Heading */}
            <ScrollReveal delay={0.1} yOffset={20}>
              <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-[52px] xl:text-6xl font-black uppercase tracking-tight leading-[1.05]">
                <span className="text-white block drop-shadow-sm sm:whitespace-nowrap">
                  A STARTUP&apos;S SPEED.
                </span>
                <span className="text-white block drop-shadow-sm mt-1 sm:mt-1.5 sm:whitespace-nowrap">
                  A SOLDIER&apos;S STANDARDS.
                </span>
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
              Engineering sovereign defence platforms with agile software speed and uncompromising military reliability.
            </p>
          </ScrollReveal>
        </div>

        {/* 4 Phases Timeline Grid with Staggered Scroll Reveal & Parallax Numbers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {phases.map((phase, idx) => {
            return (
              <ScrollReveal
                key={phase.num}
                delay={idx * 0.1}
                yOffset={35}
                className="h-full"
              >
                <div
                  className="border border-neutral-800/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 flex flex-col justify-between hover:border-neutral-700 hover:shadow-xl transition-all duration-300 relative group shadow-md backdrop-blur-md h-full"
                  style={{ backgroundColor: 'rgba(10, 13, 14, 0.85)' }}
                >
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
                      <h3 className="text-lg font-bold text-white mb-2 leading-snug">
                        {phase.title}
                      </h3>
                    </ScaleStretchText>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {phase.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-neutral-800 flex items-center gap-2 text-[11px] font-mono text-slate-400">
                    <CheckSquare className="w-3.5 h-3.5 text-red-500" />
                    <span>{phase.footer}</span>
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
