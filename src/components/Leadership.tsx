import React from 'react';
import { Shield, Cpu, CheckCircle2 } from 'lucide-react';
import {
  Perspective3DReveal,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export const Leadership: React.FC = () => {
  return (
    <section
      id="leadership"
      className="relative bg-black text-slate-100 pt-10 md:pt-14 pb-20 md:pb-24 overflow-hidden"
    >
      {/* Military Airplane Bunker Background - Firmly pinned full bleed */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <img
          src="/images/bg/airplane-bunker.jpg"
          alt="Aerospace Hangar Bunker"
          className="w-full h-full object-cover object-center opacity-80"
        />
        {/* Deep, seamless gradient overlays that blend softly with adjacent sections */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-20 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6">
        {/* Section Header with Sliced / Split Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-military uppercase text-cyan-300 font-mono drop-shadow-sm">
                  SOVEREIGN DEFENCE LEADERSHIP
                </span>
              </div>
            </ScrollReveal>

            {/* Perspective 3D Flip Reveal */}
            <Perspective3DReveal
              tag="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight drop-shadow-md"
            >
              Military Discipline. Aeronautical Rigor.
            </Perspective3DReveal>
          </div>

          <ScrollReveal delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-200 max-w-md leading-relaxed drop-shadow-sm">
              A proven combination of veteran field-operational execution and specialized hands-on aerospace systems engineering, dedicated to building India&apos;s sovereign defense capability.
            </p>
          </ScrollReveal>
        </div>

        {/* 2 Co-Founder Profiles with Scroll Reveal & Text Stretch */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Arun Yamanappa Chimmalagi */}
          <ScrollReveal delay={0.1} yOffset={35} className="h-full">
            <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-neutral-600 hover:shadow-2xl transition-all duration-300 shadow-xl backdrop-blur-md h-full">
              <div className="w-32 sm:w-40 flex-shrink-0">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-inner">
                  <img
                    src="/images/team/arun-chimmalagi.png"
                    alt="Arun Yamanappa Chimmalagi"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2 left-2 bg-red-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                    VETERAN
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-red-400 font-bold tracking-military uppercase block mb-1">
                    FOUNDER &amp; MANAGING DIRECTOR
                  </span>

                  {/* Text Stretch along Y-axis */}
                  <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Arun Yamanappa Chimmalagi
                    </h3>
                  </ScaleStretchText>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200 mb-4 font-semibold">
                    <Shield className="w-3.5 h-3.5 text-red-500" />
                    <span>Indian Army (Para Military Force) Veteran</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Applies strict military operational discipline and large-scale industrial execution directly to sovereign defense manufacturing. Over 20+ years building and scaling infrastructure enterprises.
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Founder &amp; MD, ARVS Power Solutions (65 MW+ industrial infrastructure)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Honored by EQ International (MNRE) &amp; All India Achievers Foundation</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>Operational defense logistics, precision quality control, and supply resilience</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 font-mono text-[11px] text-neutral-400 italic">
                  “Military discipline applied to sovereign aerospace manufacturing.”
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Rahul G */}
          <ScrollReveal delay={0.25} yOffset={35} className="h-full">
            <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-neutral-600 hover:shadow-2xl transition-all duration-300 shadow-xl backdrop-blur-md h-full">
              <div className="w-32 sm:w-40 flex-shrink-0">
                <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-inner">
                  <img
                    src="/images/team/rahul-g.png"
                    alt="Rahul G"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute top-2 left-2 bg-cyan-700 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                    AERO ENG
                  </div>
                </div>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 font-bold tracking-military uppercase block mb-1">
                    FOUNDER &amp; CHIEF TECHNICAL DIRECTOR
                  </span>

                  {/* Text Stretch along Y-axis */}
                  <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Rahul G
                    </h3>
                  </ScaleStretchText>

                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-200 mb-4 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Aeronautical Engineer &amp; UAV Flight-Test Lead</span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    Directs aerodynamic CFD modeling, high-speed composite airframes, telemetry avionics, and kinetic delivery integration. Over 7+ years pioneering autonomous UAV systems and flight testing.
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Founder &amp; CEO, Yudha Tech Solutions (2023–2025)</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>Designed and flight-tested dual-motor tailsitter &amp; VTOL aircraft</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>B.E. Aeronautical Engineering (KLS GIT), lead systems architect</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800 font-mono text-[11px] text-neutral-400 italic">
                  “Engineering sovereign solutions for a stronger, self-reliant tomorrow.”
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
