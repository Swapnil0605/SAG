import React from 'react';
import {
  Shield,
  Target,
  Cpu,
  Award,
  Zap,
  Layers,
  CheckCircle2,
  Flame,
  Binary,
  Lightbulb,
} from 'lucide-react';
import {
  ScrollReveal,
  Perspective3DReveal,
} from './effects/TextScrollEffects';
import Carousel from './Carousel';
import ContactSection from './ContactSection';

interface AboutPageProps {
  onNavigateHome?: (hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* =========================================================================
          1. HERO / TACTICAL MASTHEAD (Clean Full-Width White Background)
          ========================================================================= */}
      <section
        className="relative w-full border-b border-neutral-200 pt-28 sm:pt-32 pb-16 sm:pb-20 select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb / Top Bar */}
          <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-6">
            <button
              type="button"
              onClick={() => onNavigateHome?.('#home')}
              className="hover:text-red-600 transition-colors cursor-pointer"
            >
              HOME
            </button>
            <span className="text-neutral-400">/</span>
            <span className="text-red-600 font-bold">ABOUT US</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-400 hidden sm:inline">
              SOVEREIGN DEFENCE DOCTRINE
            </span>
          </div>

          <div className="max-w-4xl">
            {/* Massive Bold Heading in Rich Black */}
            <Perspective3DReveal
              tag="h1"
              className="text-4xl sm:text-6xl md:text-7xl lg:text-[76px] font-black uppercase tracking-tight text-neutral-950 leading-[0.95] mb-6"
            >
              INDIGENOUS DEFENCE. SUPERSONIC AMBITION.
            </Perspective3DReveal>

            {/* Short Crisp Mission Statement */}
            <ScrollReveal delay={0.15} yOffset={20}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-2xl">
                <strong className="text-neutral-950 font-bold">
                  SAG Defence and Aerospace
                </strong>{' '}
                is an Indian deep-tech enterprise pioneering sovereign unmanned combat
                systems, electronic-warfare-immune datalinks, and next-generation
                supersonic loitering munitions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 space-y-24 sm:space-y-32">

        {/* =========================================================================
            2. STRATEGIC MISSION & VISION (INTERACTIVE HOVER-REVEAL DISPLAY)
            ========================================================================= */}
        <section className="relative">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              FOUNDATIONAL PURPOSE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white">
              OUR MISSION &amp; VISION
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* 1. OUR MISSION CARD */}
            <ScrollReveal delay={0.1} yOffset={30} className="h-full">
              <div
                tabIndex={0}
                className="group relative bg-gradient-to-b from-[#06331e] via-[#042617] to-[#02180e] border border-emerald-700/50 hover:border-orange-500/70 rounded-3xl p-7 sm:p-10 shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer select-none focus:outline-none"
              >
                {/* Ambient glow accent */}
                <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-20 bg-orange-500 group-hover:opacity-35 transition-opacity duration-500" />

                {/* Animated Masthead: Moves upward and scales down on hover */}
                <div className="flex items-center gap-5 sm:gap-6 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-[0.88] origin-top-left">
                  {/* Vertical Orange Icon Block with Target/Bullseye */}
                  <div className="w-14 sm:w-16 h-24 sm:h-28 rounded-2xl bg-[#ea580c] flex items-center justify-center p-3 text-white shadow-xl shadow-orange-950/60 flex-shrink-0 group-hover:shadow-orange-500/40 transition-shadow">
                    <Target className="w-8 sm:w-9 h-8 sm:h-9 stroke-[2.3]" />
                  </div>

                  {/* Typography: "OUR" on top, "MISSION" below */}
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-sm sm:text-base font-bold tracking-[0.28em] uppercase text-amber-200/90 mb-1">
                      OUR
                    </span>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#fffffa] tracking-tight leading-none">
                      MISSION
                    </h3>
                  </div>
                </div>

                {/* Resting indicator hint */}
                <div className="mt-5 flex items-center gap-2 text-[11px] font-mono text-emerald-400/60 group-hover:opacity-0 group-hover:max-h-0 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
                  <span>HOVER TO REVEAL MANDATE</span>
                </div>

                {/* Hidden content that smoothly reveals on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                  <div className="overflow-hidden min-h-0">
                    <div className="pt-6 mt-4 border-t border-emerald-800/50 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out space-y-4">
                      <blockquote className="text-base sm:text-lg font-medium text-emerald-100/95 leading-relaxed italic border-l-2 border-orange-500/80 pl-4">
                        “To build innovative, reliable products through indigenous engineering and uncompromising quality, earning trust worldwide.”
                      </blockquote>
                      <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed font-normal">
                        We bridge the critical gap between conceptual defence R&amp;D and battlefield deployment. Combining rigorous aeronautical systems design, hardware-in-the-loop validation, and stringent military operational standards, every platform is engineered for immediate mission survivability.
                      </p>
                      <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-emerald-400/80 border-t border-emerald-900/40">
                        <span>STANDARD: MIL-STD RIGOR</span>
                        <span className="font-bold text-amber-400">UNCOMPROMISING RELIABILITY</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* 2. OUR VISION CARD */}
            <ScrollReveal delay={0.2} yOffset={30} className="h-full">
              <div
                tabIndex={0}
                className="group relative bg-gradient-to-b from-[#06331e] via-[#042617] to-[#02180e] border border-emerald-700/50 hover:border-sky-400/70 rounded-3xl p-7 sm:p-10 shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer select-none focus:outline-none"
              >
                {/* Ambient glow accent */}
                <div className="absolute -right-16 -top-16 w-60 h-60 rounded-full pointer-events-none blur-3xl opacity-20 bg-sky-500 group-hover:opacity-35 transition-opacity duration-500" />

                {/* Animated Masthead: Moves upward and scales down on hover */}
                <div className="flex items-center gap-5 sm:gap-6 transform transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2 group-hover:scale-[0.88] origin-top-left">
                  {/* Vertical Sky Blue Icon Block with Lightbulb/Idea */}
                  <div className="w-14 sm:w-16 h-24 sm:h-28 rounded-2xl bg-[#0284c7] flex items-center justify-center p-3 text-white shadow-xl shadow-sky-950/60 flex-shrink-0 group-hover:shadow-sky-400/40 transition-shadow">
                    <Lightbulb className="w-8 sm:w-9 h-8 sm:h-9 stroke-[2.3]" />
                  </div>

                  {/* Typography: "OUR" on top, "VISION" below */}
                  <div className="flex flex-col justify-center">
                    <span className="font-mono text-sm sm:text-base font-bold tracking-[0.28em] uppercase text-sky-200/90 mb-1">
                      OUR
                    </span>
                    <h3 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#fffffa] tracking-tight leading-none">
                      VISION
                    </h3>
                  </div>
                </div>

                {/* Resting indicator hint */}
                <div className="mt-5 flex items-center gap-2 text-[11px] font-mono text-emerald-400/60 group-hover:opacity-0 group-hover:max-h-0 transition-all duration-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  <span>HOVER TO REVEAL MANDATE</span>
                </div>

                {/* Hidden content that smoothly reveals on hover */}
                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden">
                  <div className="overflow-hidden min-h-0">
                    <div className="pt-6 mt-4 border-t border-emerald-800/50 opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out space-y-4">
                      <blockquote className="text-base sm:text-lg font-medium text-emerald-100/95 leading-relaxed italic border-l-2 border-sky-400/80 pl-4">
                        “To create world-class products from Bharat for the world, inspiring pride in our people and confidence in those we serve. To make India the first nation to field an independently designed and manufactured supersonic loitering munition.”
                      </blockquote>
                      <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed font-normal">
                        Closing the speed gap that subsonic drones face. We envision an autonomous, sovereign defence ecosystem where Indian armed forces wield superior asymmetric reach without foreign vulnerability.
                      </p>
                      <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-emerald-400/80 border-t border-emerald-900/40">
                        <span>DOCTRINE: ATMANIRBHAR BHARAT</span>
                        <span className="font-bold text-sky-400">SOVEREIGNTY FIRST</span>
                      </div>
                    </div>
                  </div>
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
      </div>

      {/* =========================================================================
          4. THE FOUR PILLARS OF SAG DOCTRINE (FULL-WIDTH WHITE BACKGROUND SECTION)
          ========================================================================= */}
      <section
        className="relative w-full border-y border-neutral-200 py-16 sm:py-24 my-16 sm:my-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-600 block mb-2">
              TACTICAL CODE
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 mb-4">
              THE FOUR PILLARS OF SOVEREIGNTY
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              Every system designed, simulated, and flight-tested at SAG Defence
              is guided by four unyielding operational tenets.
            </p>
          </div>

          {/* Desktop 4-Column Grid View (md and up) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'DEFEND',
                icon: Shield,
                code: 'PIL-01',
                description:
                  'Safeguarding national borders, forward tactical perimeters, and high-value military assets against evolving kinetic and drone swarms.',
                color: 'text-red-600',
                border: 'hover:border-red-500 hover:shadow-red-500/10',
              },
              {
                title: 'DETER',
                icon: Target,
                code: 'PIL-02',
                description:
                  'Deploying high-speed supersonic loitering munitions and long-range ISR platforms to impose unaffordable costs on hostile aggressors.',
                color: 'text-amber-600',
                border: 'hover:border-amber-500 hover:shadow-amber-500/10',
              },
              {
                title: 'LEAD',
                icon: Cpu,
                code: 'PIL-03',
                description:
                  'Establishing technological leadership in supersonic flight dynamics, optical flow AI targeting, and jam-resistant telemetry.',
                color: 'text-blue-600',
                border: 'hover:border-blue-500 hover:shadow-blue-500/10',
              },
              {
                title: 'SELF-RELIANCE',
                icon: Award,
                code: 'PIL-04',
                description:
                  'Championing true Atmanirbhar Bharat — complete indigenous control over airframe composites, firmware, and mission cryptographic keys.',
                color: 'text-emerald-600',
                border: 'hover:border-emerald-500 hover:shadow-emerald-500/10',
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className={`bg-white border border-neutral-200/90 rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 ${pillar.border} group`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="p-2.5 rounded-xl bg-neutral-50 border border-neutral-200 group-hover:scale-105 transition-transform shadow-sm">
                        <Icon className={`w-5 h-5 ${pillar.color}`} />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 tracking-wider bg-neutral-100 px-2 py-0.5 rounded border border-neutral-200">
                        {pillar.code}
                      </span>
                    </div>

                    <h3 className="text-xl font-black uppercase text-neutral-950 mb-3 tracking-wide">
                      {pillar.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-6 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 group-hover:bg-red-600 transition-colors" />
                    <span>SOVEREIGN MANDATE</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile Carousel View (screens below md) */}
          <div className="block md:hidden">
            <div style={{ height: '560px', position: 'relative' }}>
              <Carousel
                items={[
                  {
                    title: 'DEFEND',
                    description:
                      'Safeguarding national borders, forward tactical perimeters, and high-value military assets against evolving kinetic and drone swarms.',
                    icon: Shield,
                    code: 'PIL-01',
                    color: 'text-red-600',
                    border: 'hover:border-red-500',
                    image: '/images/bg/airplane-bunker.jpg',
                    badge: 'SOVEREIGN MANDATE',
                  },
                  {
                    title: 'DETER',
                    description:
                      'Deploying high-speed supersonic loitering munitions and long-range ISR platforms to impose unaffordable costs on hostile aggressors.',
                    icon: Target,
                    code: 'PIL-02',
                    color: 'text-amber-600',
                    border: 'hover:border-amber-500',
                    image: '/images/bg/airplane-bunker.jpg',
                    badge: 'SOVEREIGN MANDATE',
                  },
                  {
                    title: 'LEAD',
                    description:
                      'Establishing technological leadership in supersonic flight dynamics, optical flow AI targeting, and jam-resistant telemetry.',
                    icon: Cpu,
                    code: 'PIL-03',
                    color: 'text-blue-600',
                    border: 'hover:border-blue-500',
                    image: '/images/bg/airplane-bunker.jpg',
                    badge: 'SOVEREIGN MANDATE',
                  },
                  {
                    title: 'SELF-RELIANCE',
                    description:
                      'Championing true Atmanirbhar Bharat — complete indigenous control over airframe composites, firmware, and mission cryptographic keys.',
                    icon: Award,
                    code: 'PIL-04',
                    color: 'text-emerald-600',
                    border: 'hover:border-emerald-500',
                    image: '/images/bg/airplane-bunker.jpg',
                    badge: 'SOVEREIGN MANDATE',
                  },
                ]}
                baseWidth={300}
                aspectRatio={1.05}
                effect="tilt"
                indicator="dots"
                frame={true}
                arrows={false}
                loop={false}
                autoplay
                autoplayDelay={4250}
                pauseOnHover={false}
                theme="light"
                radius={10}
                round
              />
            </div>
          </div>
        </div>
      </section>

      {/* Middle Content Body (Section 5: Aerospace Engineering Capabilities) */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-24 sm:space-y-32">

        {/* =========================================================================
            5. CORE ENGINEERING DISCIPLINES & RESEARCH CAPABILITIES
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
      </div>

      {/* =========================================================================
          6. LEADERSHIP: RAHUL G (FULL-WIDTH WHITE BACKGROUND SECTION)
          ========================================================================= */}
      <section
        className="relative w-full border-y border-neutral-200 py-16 sm:py-24 my-16 sm:my-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-600 block mb-2">
              EXECUTIVE COMMAND
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-neutral-950 leading-tight">
              LEADERSHIP &amp; SYSTEM ARCHITECT
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            {/* Left Rail + Portrait with Organic Fluid Blob (5 cols on LG) */}
            <div className="lg:col-span-5 flex items-center justify-center gap-4 sm:gap-6 lg:gap-8">
              {/* Vertical Indicator Rail */}
              <div className="flex flex-col items-center justify-between py-2 self-stretch flex-shrink-0">
                <div className="flex flex-col items-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                  <div className="w-[1.5px] h-24 sm:h-36 bg-neutral-300 my-1.5" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-900" />
                </div>
                <div className="mt-6 [writing-mode:vertical-rl] rotate-180 text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-neutral-400 select-none">
                  MY SHORT STORY
                </div>
              </div>

              {/* Organic Blue Gradient Blob with Leader Photo */}
              <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 aspect-[4/5] flex items-center justify-center flex-shrink-0">
                {/* Organic Fluid Blob matching reference */}
                <div
                  className="absolute inset-0 bg-gradient-to-tr from-[#0369a1] via-[#0284c7] to-[#38bdf8] shadow-2xl shadow-blue-500/25 transition-transform duration-700 hover:scale-[1.02]"
                  style={{
                    borderRadius: '42% 58% 70% 30% / 45% 45% 55% 55%',
                  }}
                />

                {/* Subtle sketched accent lines */}
                <svg
                  className="absolute -inset-4 w-[calc(100%+32px)] h-[calc(100%+32px)] pointer-events-none opacity-40 text-blue-200"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.8"
                >
                  <path d="M10,40 Q6,60 22,82" strokeDasharray="3 2" />
                  <path d="M80,12 Q94,30 90,54" strokeDasharray="4 2" />
                </svg>

                {/* Leader Photo */}
                <div
                  className="relative z-10 w-[86%] h-[88%] overflow-hidden bg-white shadow-xl border-2 border-white/80"
                  style={{
                    borderRadius: '38% 62% 63% 37% / 42% 46% 54% 58%',
                  }}
                >
                  <img
                    src="/images/team/rahul-g.png"
                    alt="Rahul G"
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Right Narrative & Credentials (7 cols on LG) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.22em] uppercase text-neutral-400 mb-2 block">
                ABOUT ME
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-neutral-950 tracking-tight leading-tight mb-4 flex items-center gap-3 flex-wrap">
                <span>Hey, I&apos;m Rahul G</span>
                <span className="inline-block transform hover:rotate-12 transition-transform cursor-default select-none text-3xl sm:text-4xl">
                  👋
                </span>
              </h3>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-xs sm:text-sm font-mono text-blue-900 font-bold mb-5 self-start">
                <Cpu className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Founder &amp; Chief Technical Director • Aeronautical Engineer</span>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-normal mb-5 max-w-xl">
                Aeronautical systems engineer pioneering Project Yamraj — India’s first Mach 1+ supersonic loitering munition. Directing autonomous UAV aerodynamics, CFD modeling, and sovereign electronic-warfare-immune flight platforms.
              </p>

              <div className="space-y-2 pt-4 border-t border-neutral-100 mb-5">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>Lead Architect — Project Yamraj (Mach 1+ Supersonic Loitering Munition)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-700 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                  <span>B.E. Aeronautical Engineering (KLS GIT) • 7+ Years UAV Flight Architecture</span>
                </div>
              </div>

              <div className="pt-3 border-t border-neutral-100 font-mono text-xs text-neutral-400 italic">
                “Engineering sovereign solutions for a stronger, self-reliant tomorrow.”
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          6. OFFICIAL CONTACT & TECHNICAL BRIEFING (SAME CTA AS HOME)
          ========================================================================= */}
      <ContactSection />
    </div>
  );
};

export default AboutPage;
