import React from 'react';
import {
  Shield,
  Target,
  Cpu,
  Award,
  Zap,
  Layers,
  ArrowRight,
  MapPin,
  Mail,
  Phone,
  CheckCircle2,
  Compass,
  Flame,
  Binary,
} from 'lucide-react';
import {
  ScrollReveal,
  Perspective3DReveal,
  ScaleStretchText,
} from './effects/TextScrollEffects';

interface AboutPageProps {
  onNavigateHome?: (hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  // Brand color tokens sampled directly from the official SAG brand identity
  const LOGO_GREEN = '#046a38';
  const LOGO_BLUE = '#030389';

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden pt-24 sm:pt-28 pb-16"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* Background Military Jet Bunker & High-Altitude Contrail Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-30">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat filter contrast-125 brightness-75"
          style={{
            backgroundImage: "url('/images/bg/airplane-bunker.jpg')",
          }}
        />
        <div
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(10, 13, 14, 0.82)' }}
        />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
        {/* =========================================================================
            1. HERO / TACTICAL MASTHEAD
            ========================================================================= */}
        <section className="relative pt-6 sm:pt-10">
          {/* Breadcrumb / Top Bar */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 mb-6">
            <button
              type="button"
              onClick={() => onNavigateHome?.('#home')}
              className="hover:text-red-500 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span>/</span>
            <span className="text-red-500 font-bold">ABOUT US</span>
            <span>/</span>
            <span className="text-neutral-500 hidden sm:inline">
              SOVEREIGN DEFENCE DOCTRINE
            </span>
          </div>

          <div className="max-w-4xl">
            {/* Tactical Status Pill */}
            <ScrollReveal yOffset={15} blur={4}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 mb-5 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.2em] uppercase text-neutral-300">
                  DEFENCE &amp; AEROSPACE ENTERPRISE // BHARAT TO THE WORLD
                </span>
              </div>
            </ScrollReveal>

            {/* Traditional Sanskrit Motto in Brand Green */}
            <ScrollReveal delay={0.08} yOffset={20}>
              <div className="mb-4">
                <h2
                  className="text-xl sm:text-2xl md:text-3xl font-black font-sans tracking-wide block"
                  style={{ color: LOGO_GREEN }}
                >
                  नवोन्मेष तन्त्रज्ञाना भ्यां राष्ट्रसेवा
                </h2>
                <span className="text-xs sm:text-sm text-neutral-400 font-mono italic block mt-1">
                  National Service Through Innovative Technology
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Heading */}
            <Perspective3DReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-white leading-[0.95] mb-6"
            >
              INDIGENOUS DEFENCE. SUPERSONIC AMBITION.
            </Perspective3DReveal>

            {/* Core Mission Statement */}
            <ScrollReveal delay={0.18} yOffset={25}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
                <strong className="text-white font-semibold">
                  SAG Defence and Aerospace
                </strong>{' '}
                is an Indian deep-tech enterprise pioneering sovereign unmanned combat
                systems, electronic-warfare-immune datalinks, and next-generation
                supersonic loitering munitions. Engineered from Bharat for the world, we
                fuse veteran operational field discipline with rigorous aeronautical
                innovation to close the speed gap in modern battlefield dominance.
              </p>
            </ScrollReveal>

            {/* Quick Strategic Badges */}
            <ScrollReveal delay={0.24} yOffset={20}>
              <div className="flex flex-wrap items-center gap-3 pt-6">
                <span className="px-3 py-1.5 rounded-lg bg-neutral-900/90 border border-neutral-700 text-neutral-200 text-xs font-mono font-bold tracking-wide">
                  MAKE IN INDIA
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-red-950/40 border border-red-800/60 text-red-400 text-xs font-mono font-bold tracking-wide">
                  ATMANIRBHAR BHARAT
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono font-bold tracking-wide"
                  style={{
                    backgroundColor: 'rgba(4, 106, 56, 0.15)',
                    borderColor: 'rgba(4, 106, 56, 0.45)',
                    color: '#10b981',
                  }}
                >
                  100% SOVEREIGN IP
                </span>
                <span
                  className="px-3 py-1.5 rounded-lg border text-xs font-mono font-bold tracking-wide"
                  style={{
                    backgroundColor: 'rgba(3, 3, 137, 0.2)',
                    borderColor: 'rgba(3, 3, 137, 0.6)',
                    color: '#93c5fd',
                  }}
                >
                  BENGALURU DEFENCE HUB
                </span>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Metrics KPI Strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-10 border-t border-neutral-800/80">
            {[
              {
                value: 'Mach 1+',
                label: 'FLAGSHIP SPEED TARGET',
                sub: 'Project Yamraj loitering munition',
              },
              {
                value: '0 RF',
                label: 'EW JAMMING RESILIENCE',
                sub: 'Fiber-optic guided tactical UAVs',
              },
              {
                value: '100%',
                label: 'INDIGENOUS IP & ARCHITECTURE',
                sub: 'Zero foreign telemetry dependencies',
              },
              {
                value: '20+ yrs',
                label: 'COMBINED LEADERSHIP EXCELLENCE',
                sub: 'Armed forces service & aero engineering',
              },
            ].map((kpi, idx) => (
              <div
                key={idx}
                className="bg-[#0e1215]/80 border border-neutral-800 p-5 rounded-2xl relative overflow-hidden group hover:border-neutral-700 transition-colors"
              >
                <div
                  className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight"
                  style={{ color: idx === 1 ? '#ef4444' : '#60a5fa' }}
                >
                  {kpi.value}
                </div>
                <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-300 mt-2">
                  {kpi.label}
                </div>
                <div className="text-[11px] text-neutral-500 font-sans mt-0.5">
                  {kpi.sub}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            2. VISION & MISSION CARDS (TACTICAL COMMAND DISPLAY)
            ========================================================================= */}
        <section className="relative">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              FOUNDATIONAL PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              STRATEGIC VISION &amp; MISSION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Vision Card */}
            <ScrollReveal delay={0.1} yOffset={30} className="h-full">
              <div className="bg-[#0d1013] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 shadow-xl">
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full pointer-events-none blur-3xl opacity-20"
                  style={{ backgroundColor: LOGO_BLUE }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase"
                      style={{
                        backgroundColor: 'rgba(3, 3, 137, 0.25)',
                        color: '#93c5fd',
                        border: '1px solid rgba(3, 3, 137, 0.5)',
                      }}
                    >
                      STRATEGIC DIRECTIVE // 01
                    </span>
                    <Compass className="w-6 h-6 text-blue-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-4 tracking-tight">
                    OUR VISION
                  </h3>

                  <blockquote className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed mb-6">
                    “To create world-class products from Bharat for the world,
                    inspiring pride in our people and confidence in those we serve.
                    To make India the first nation to field an independently
                    designed and manufactured supersonic loitering munition.”
                  </blockquote>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    Closing the speed gap that subsonic drones face. We envision an
                    autonomous, sovereign defence ecosystem where Indian armed forces
                    wield superior asymmetric reach without foreign vulnerability.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>DOCTRINE: ATMANIRBHAR BHARAT</span>
                  <span className="text-blue-400 font-bold">SOVEREIGNTY FIRST</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal delay={0.2} yOffset={30} className="h-full">
              <div className="bg-[#0d1013] border border-neutral-800 hover:border-neutral-700 rounded-3xl p-8 sm:p-10 flex flex-col justify-between h-full relative overflow-hidden group transition-all duration-300 shadow-xl">
                <div
                  className="absolute -right-16 -top-16 w-56 h-56 rounded-full pointer-events-none blur-3xl opacity-20"
                  style={{ backgroundColor: LOGO_GREEN }}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="px-3 py-1 rounded-md text-[11px] font-mono font-bold tracking-widest uppercase"
                      style={{
                        backgroundColor: 'rgba(4, 106, 56, 0.25)',
                        color: '#6ee7b7',
                        border: '1px solid rgba(4, 106, 56, 0.5)',
                      }}
                    >
                      OPERATIONAL MANDATE // 02
                    </span>
                    <Target className="w-6 h-6 text-emerald-400" />
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-white mb-4 tracking-tight">
                    OUR MISSION
                  </h3>

                  <blockquote className="text-lg sm:text-xl font-medium text-neutral-200 leading-relaxed mb-6">
                    “To build innovative, reliable products through indigenous
                    engineering and uncompromising quality, earning trust worldwide.”
                  </blockquote>

                  <p className="text-sm text-neutral-400 leading-relaxed">
                    We bridge the critical gap between conceptual defence R&amp;D
                    and battlefield deployment. Combining rigorous aeronautical
                    systems design, hardware-in-the-loop validation, and stringent
                    military operational standards, every platform is engineered
                    for immediate mission survivability.
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center justify-between text-xs font-mono text-neutral-500">
                  <span>STANDARD: MIL-STD RIGOR</span>
                  <span style={{ color: LOGO_GREEN }} className="font-bold">
                    UNCOMPROMISING RELIABILITY
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* =========================================================================
            3. THE ESCALATION REALITY: CLOSING THE SPEED GAP
            ========================================================================= */}
        <section className="relative">
          <div className="bg-gradient-to-br from-[#12161a] to-[#0a0d0e] border border-neutral-800 rounded-3xl p-8 sm:p-12 lg:p-14 relative overflow-hidden">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-3">
                THE BATTLEFIELD REALITY
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-6">
                WHY WE FOUNDED SAG DEFENCE
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                Modern asymmetric conflicts in contested skies have exposed severe
                limitations in conventional unmanned systems. Piston-engine and
                low-velocity subsonic drones operating in the 100–250 km/h window are
                increasingly intercepted by point air defence, mobile autocannons,
                and saturated Electronic Warfare (EW) jamming corridors.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Challenge Box */}
              <div className="bg-[#090b0d] border border-red-900/30 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-red-600" />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase text-red-400">
                    CURRENT DRONE DEFICIENCY
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Too Slow, Vulnerable to EW Jamming
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>
                      Standard loitering munitions cruise at only 120–200 km/h,
                      giving point defence systems ample engagement windows.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>
                      Wireless RF command links are vulnerable to modern GNSS
                      spoofing, active radar jammers, and directional electronic attacks.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>
                      Heavy reliance on imported autopilot microcontrollers and
                      optical sensors creates strategic supply risks.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Solution Box */}
              <div className="bg-[#090b0d] border border-emerald-900/40 rounded-2xl p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span
                    className="text-xs font-mono font-bold tracking-widest uppercase"
                    style={{ color: '#34d399' }}
                  >
                    THE SAG SOVEREIGN ANSWER
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-3">
                  Supersonic Velocity &amp; Zero-RF Datalinks
                </h4>
                <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>
                      <strong className="text-neutral-200">Project Yamraj:</strong>{' '}
                      Pioneering India&apos;s first Mach 1+ supersonic loitering
                      munition, compressing enemy reaction time to zero.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>
                      <strong className="text-neutral-200">SAG RAZOR OFC:</strong>{' '}
                      Ultra-thin fiber-optic tethered combat drone with 0 RF
                      emissions, completely invisible and immune to EW jammers.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>
                      100% sovereign flight algorithms, encrypted avionics, and
                      domestic aerospace tooling developed right in Bengaluru.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            4. THE FOUR PILLARS OF SAG DOCTRINE
            ========================================================================= */}
        <section className="relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              TACTICAL CODE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              THE FOUR PILLARS OF SOVEREIGNTY
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Every system designed, simulated, and flight-tested at SAG Defence
              is guided by four unyielding operational tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'DEFEND',
                icon: Shield,
                code: 'PIL-01',
                desc: 'Safeguarding national borders, forward tactical perimeters, and high-value military assets against evolving kinetic and drone swarms.',
                color: 'text-red-500',
                border: 'hover:border-red-600/50',
              },
              {
                title: 'DETER',
                icon: Target,
                code: 'PIL-02',
                desc: 'Deploying high-speed supersonic loitering munitions and long-range ISR platforms to impose unaffordable costs on hostile aggressors.',
                color: 'text-amber-500',
                border: 'hover:border-amber-600/50',
              },
              {
                title: 'LEAD',
                icon: Cpu,
                code: 'PIL-03',
                desc: 'Establishing technological leadership in supersonic flight dynamics, optical flow AI targeting, and jam-resistant telemetry.',
                color: 'text-blue-500',
                border: 'hover:border-blue-600/50',
              },
              {
                title: 'SELF-RELIANCE',
                icon: Award,
                code: 'PIL-04',
                desc: 'Championing true Atmanirbhar Bharat — complete indigenous control over airframe composites, firmware, and mission cryptographic keys.',
                color: 'text-emerald-500',
                border: 'hover:border-emerald-600/50',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`bg-[#0d1012] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${pillar.border} group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 group-hover:scale-105 transition-transform">
                        <Icon className={`w-5 h-5 ${pillar.color}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider">
                        {pillar.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase text-white mb-3 tracking-wide">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-neutral-800/80 flex items-center gap-1.5 text-[11px] font-mono text-neutral-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                    <span>SOVEREIGN MANDATE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            5. FLAGSHIP PROGRAMME: PROJECT YAMRAJ SPOTLIGHT
            ========================================================================= */}
        <section className="relative">
          <div className="bg-radial from-[#151c24] to-[#0a0d0e] border-2 border-red-950/60 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl">
            {/* Top Tactical Label */}
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded bg-red-600 text-white font-mono text-xs font-bold uppercase tracking-wider">
                FLAGSHIP PROGRAMME
              </span>
              <span className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
                STRATEGIC DEVELOPMENT // PROJECT YAMRAJ
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h3 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-6 leading-none">
                  INDIA&apos;S FIRST <span className="text-red-500">SUPERSONIC</span>{' '}
                  LOITERING MUNITION
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  Project Yamraj represents the pinnacle of sovereign Indian
                  aerospace engineering. While global loitering munitions remain
                  confined to subsonic speeds, SAG is engineering a Mach 1+
                  strike munition capable of piercing modern layered anti-access
                  / area-denial (A2/AD) envelopes to execute terminal precision defeat
                  of high-value strategic targets.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                  <div className="p-3.5 rounded-xl bg-black/50 border border-neutral-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      TARGET SPEED
                    </span>
                    <span className="text-lg font-black text-white font-mono mt-0.5 block">
                      Mach 1+
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/50 border border-neutral-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      MISSION ROLE
                    </span>
                    <span className="text-sm font-bold text-neutral-200 mt-0.5 block">
                      High-Survivability Kinetic Strike
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-black/50 border border-neutral-800 col-span-2 sm:col-span-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-500 block">
                      GUIDANCE
                    </span>
                    <span className="text-sm font-bold text-neutral-200 mt-0.5 block">
                      Multi-Spectral Terminal Seeker
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => onNavigateHome?.('#roadmap')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-lg shadow-red-600/30 cursor-pointer"
                  >
                    <span>View Technology Roadmap</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigateHome?.('#contact')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-neutral-700 hover:border-white text-white font-mono text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
                  >
                    <span>Request Programme Briefing</span>
                  </button>
                </div>
              </div>

              {/* Graphic / Telemetry Sidecard */}
              <div className="lg:col-span-5">
                <div className="bg-[#0b0e11] border border-neutral-800 rounded-2xl p-6 font-mono text-xs text-neutral-300 relative shadow-inner">
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-800">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[11px] font-bold text-neutral-200">
                        TELEMETRY SIMULATION // YAMRAJ
                      </span>
                    </div>
                    <span className="text-[10px] text-neutral-500">PHASE 01 / CFD</span>
                  </div>

                  <div className="space-y-3 text-[11px]">
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">VELOCITY PROFILE:</span>
                      <span className="text-red-400 font-bold">SUPERSONIC TRANSONIC</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">PROPULSION CORE:</span>
                      <span className="text-neutral-200">Solid-Propellant / Booster</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">AIRFRAME MATERIAL:</span>
                      <span className="text-neutral-200">High-G Carbon Composite</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-neutral-900">
                      <span className="text-neutral-500">JAMMER IMMUNITY:</span>
                      <span className="text-emerald-400 font-bold">GNSS-DENIED OPTICAL</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-neutral-500">DEVELOPMENT HUB:</span>
                      <span className="text-neutral-200">Bengaluru Aero Lab</span>
                    </div>
                  </div>

                  <div className="mt-5 p-3 rounded-lg bg-red-950/20 border border-red-900/40 text-[10px] text-neutral-400 leading-relaxed">
                    Designed to defeat advanced hostile air defence complexes where
                    subsonic loitering drones fail.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            6. LEADERSHIP & FOUNDERS (INTEGRATING CO-FOUNDERS WITH FULL METRICS)
            ========================================================================= */}
        <section className="relative">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
                EXECUTIVE COMMAND
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                LEADERSHIP &amp; SYSTEM ARCHITECTS
              </h2>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 max-w-md leading-relaxed">
              A rare combination of veteran armed forces discipline, large-scale
              industrial execution, and cutting-edge aeronautical systems design.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Arun Yamanappa Chimmalagi */}
            <ScrollReveal delay={0.1} yOffset={35} className="h-full">
              <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-md h-full">
                <div className="w-32 sm:w-40 flex-shrink-0">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-inner">
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

                    <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Arun Yamanappa Chimmalagi
                      </h3>
                    </ScaleStretchText>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-slate-200 mb-4 font-semibold">
                      <Shield className="w-3.5 h-3.5 text-red-500" />
                      <span>Indian Army (Para Military Force) Veteran</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      Applies strict military operational discipline and large-scale
                      industrial execution directly to sovereign defense manufacturing.
                      Over 20+ years building and scaling infrastructure enterprises.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Founder &amp; MD, ARVS Power Solutions (65 MW+ industrial
                          infrastructure)
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Honored by EQ International (MNRE) &amp; All India
                          Achievers Foundation
                        </span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>
                          Operational defense logistics, precision quality control,
                          and resilient supply chains
                        </span>
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
              <div className="bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start hover:border-neutral-700 hover:shadow-2xl transition-all duration-300 shadow-lg backdrop-blur-md h-full">
                <div className="w-32 sm:w-40 flex-shrink-0">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 shadow-inner">
                    <img
                      src="/images/team/rahul-g.png"
                      alt="Rahul G"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-2 left-2 bg-red-700 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded shadow-xs uppercase">
                      AERO ENG
                    </div>
                  </div>
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-red-500 font-bold tracking-military uppercase block mb-1">
                      FOUNDER &amp; CHIEF TECHNICAL DIRECTOR
                    </span>

                    <ScaleStretchText scaleYFrom={1.25} scaleYTo={1.0}>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        Rahul G
                      </h3>
                    </ScaleStretchText>

                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-slate-200 mb-4 font-semibold">
                      <Cpu className="w-3.5 h-3.5 text-red-500" />
                      <span>Aeronautical Engineer &amp; UAV Flight Test Lead</span>
                    </div>

                    <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                      Directs aerodynamic CFD modeling, high-speed composite
                      airframes, telemetry avionics, and kinetic delivery integration.
                      Over 7+ years pioneering autonomous UAV systems and flight
                      testing.
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Founder &amp; CEO, Yudha Tech Solutions (2023 to 2025)</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span>Designed and flight tested dual-motor tailsitter &amp; VTOL aircraft</span>
                      </div>
                      <div className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" />
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
        </section>

        {/* =========================================================================
            7. CORE ENGINEERING DISCIPLINES & RESEARCH CAPABILITIES
            ========================================================================= */}
        <section className="relative">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              TECHNICAL COMPETENCE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white mb-4">
              AEROSPACE ENGINEERING CAPABILITIES
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Complete in-house control from concept to flight-tested platform
              ensures maximum agility and operational security.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Flame,
                title: 'AERODYNAMICS & CFD',
                desc: 'Computational fluid dynamic modeling from low-speed loitering to supersonic shockwave propagation and boundary layer thermal control.',
                tags: ['CFD Simulation', 'Supersonic Airfoils', 'Wind Tunnel'],
              },
              {
                icon: Layers,
                title: 'COMPOSITE FABRICATION',
                desc: 'High-strength, radar-absorbent autoclave carbon fiber composites engineered to endure high-G tactical maneuvers and extreme temperatures.',
                tags: ['Pre-preg Carbon', 'Radar Absorbing', 'High-G Airframes'],
              },
              {
                icon: Binary,
                title: 'SOVEREIGN AVIONICS',
                desc: 'Hardware-in-the-loop validated flight computers, zero-emission fiber optic spools, and encrypted FHSS anti-jamming datalinks.',
                tags: ['Zero-RF Fiber', 'FHSS Encrypted', 'HIL Testing'],
              },
              {
                icon: Zap,
                title: 'AI TERMINAL GUIDANCE',
                desc: 'Onboard edge-AI optical flow tracking, GNSS-denied visual inertial odometry, and autonomous target acquisition algorithms.',
                tags: ['Optical Flow', 'GNSS-Denied', 'Neural Edge AI'],
              },
            ].map((cap, idx) => {
              const CapIcon = cap.icon;
              return (
                <div
                  key={idx}
                  className="bg-[#0d1012] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors"
                >
                  <div>
                    <div className="p-2.5 rounded-xl bg-neutral-900 border border-neutral-800 w-fit mb-5 text-red-500">
                      <CapIcon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold uppercase text-white mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs text-neutral-400 leading-relaxed mb-5">
                      {cap.desc}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80">
                    {cap.tags.map((t, tidx) => (
                      <span
                        key={tidx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-400 border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* =========================================================================
            8. OPERATIONAL HEADQUARTERS & CONTACT DISPATCH
            ========================================================================= */}
        <section className="relative">
          <div className="bg-[#0c0f12] border border-neutral-800 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-3">
                  HEADQUARTERS &amp; AEROSPACE CORRIDOR
                </span>
                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white mb-4">
                  BENGALURU, KARNATAKA
                </h3>
                <p className="text-sm text-neutral-300 leading-relaxed mb-8 max-w-xl">
                  Strategically situated in Bengaluru, India&apos;s aerospace
                  and defence capital, SAG Defence and Aerospace leverages close
                  proximity to premier flight-testing corridors, precision
                  machining ecosystems, and research hubs.
                </p>

                <div className="space-y-4 text-xs sm:text-sm font-mono text-neutral-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                    <span>
                      Ground Floor, 43, above Arvind Book House, near BMTC Bus Stop,
                      BHCS Layout, Chandra Layout, Bengaluru, Karnataka 560040
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <a
                      href="mailto:contactus@sagdefaero.com"
                      className="hover:text-red-400 transition-colors"
                    >
                      contactus@sagdefaero.com
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <a
                      href="tel:+919113867676"
                      className="hover:text-red-400 transition-colors"
                    >
                      +91 91138 67676
                    </a>
                  </div>
                </div>
              </div>

              {/* Action Sidepanel */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="bg-[#090b0d] border border-neutral-800 p-6 rounded-2xl text-center">
                  <h4 className="text-lg font-bold text-white mb-2">
                    Request a Technical Briefing
                  </h4>
                  <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                    Defence liaisons, armed forces procurement officers, and
                    strategic partners may request classified datasheets and
                    programme demonstrations.
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigateHome?.('#contact')}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-mono text-xs font-bold tracking-wider uppercase transition-all shadow-md shadow-red-600/30 cursor-pointer"
                  >
                    <span>Liaison Channel</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => onNavigateHome?.('#products')}
                    className="text-xs font-mono font-bold text-neutral-400 hover:text-white transition-colors uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer py-1"
                  >
                    <span>Explore Systems Portfolio</span>
                    <ArrowRight className="w-3.5 h-3.5 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
