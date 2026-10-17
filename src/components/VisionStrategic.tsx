import React from 'react';
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
        {/* Top Tag */}
        <ScrollReveal direction="left" distance={30} blur={4}>
          <div className="mb-4">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-sky-400 block">
              WHY WE EXIST
            </span>
          </div>
        </ScrollReveal>

        {/* Section Headline */}
        <ScrollReveal delay={0.1} direction="left" distance={40}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.08] text-white max-w-4xl mb-14 sm:mb-20">
            The battlefield changes in weeks. Defence technology still takes years.
          </h2>
        </ScrollReveal>

        {/* 3 Columns with blue top dividing lines */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-14 sm:mb-18">
          {[
            {
              title: 'Drones have rewritten the battlefield.',
              desc: "FPV drones and UAVs now cause more losses than artillery in the Russia–Ukraine war, and they've made even main battle tanks and armoured platforms vulnerable.",
            },
            {
              title: 'New threats arrive in weeks.',
              desc: 'Jam-resistant fibre-optic drones went from new to everywhere in weeks. Adopting new technology, and neutralising it, has to happen faster than the enemy can adapt.',
            },
            {
              title: "Traditional air defence can't keep up.",
              desc: "It wasn't built for this threat, in volume or in cost. Firing expensive interceptors at cheap drones can't last.",
            },
          ].map((col, idx) => (
            <ScrollReveal
              key={col.title}
              delay={idx * 0.12}
              yOffset={25}
              className="h-full"
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-[2px] bg-sky-400/80 mb-5 sm:mb-6" />
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 leading-snug">
                  {col.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {col.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom Tagline */}
        <ScrollReveal delay={0.25} yOffset={25}>
          <div>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-500 tracking-tight">
              So we build differently.
            </h3>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default VisionStrategic;
