import React, { useState } from 'react';
import {
  Shield,
  Target,
  Cpu,
  Award,
  CheckCircle2,
  Lightbulb,
  ArrowRight,
  ArrowDown,
} from 'lucide-react';
import {
  ScrollReveal,
  Perspective3DReveal,
} from './effects/TextScrollEffects';
import ContactSection from './ContactSection';

interface AboutPageProps {
  onNavigateHome?: (hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  const [activeCap, setActiveCap] = useState<number | null>(2);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

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
      </div>

      {/* =========================================================================
          3. THE FOUR PILLARS OF SAG DOCTRINE (FULL-WIDTH WHITE BACKGROUND SECTION)
          ========================================================================= */}
      <section
        className="relative w-full border-y border-neutral-200 py-16 sm:py-24 my-16 sm:my-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
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

          {/* 4 Architectural Pillars with Vertical Hover Growth */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start pb-4">
            {[
              {
                code: '01',
                label: 'PIL // 01',
                title: 'DEFEND',
                icon: Shield,
                color: 'text-red-600',
                borderColor: 'border-red-600',
                bgHover: 'bg-red-50/25',
                doctrine: 'TACTICAL PERIMETER DEFENCE',
                description:
                  'Safeguarding national borders, forward tactical perimeters, and high-value military assets against evolving kinetic, loitering, and drone swarms.',
                tenets: [
                  'Layered Counter-UAS Protection',
                  'Forward Edge Asset Hardening',
                  'Autonomous Rapid Intercept',
                ],
              },
              {
                code: '02',
                label: 'PIL // 02',
                title: 'DETER',
                icon: Target,
                color: 'text-amber-600',
                borderColor: 'border-amber-600',
                bgHover: 'bg-amber-50/25',
                doctrine: 'ASYMMETRIC KINETIC REACH',
                description:
                  'Deploying high-speed supersonic loitering munitions and long-range ISR platforms to impose unaffordable costs on hostile aggressors across contested theaters.',
                tenets: [
                  'Mach 1+ Supersonic Infiltration',
                  'Zero Enemy Reaction Window',
                  'Precision Standoff Striking',
                ],
              },
              {
                code: '03',
                label: 'PIL // 03',
                title: 'LEAD',
                icon: Cpu,
                color: 'text-blue-600',
                borderColor: 'border-blue-600',
                bgHover: 'bg-blue-50/25',
                doctrine: 'TECHNOLOGICAL DOMINANCE',
                description:
                  'Establishing technological leadership in supersonic flight dynamics, optical flow AI targeting, and zero-emission jam-resistant fiber optic datalinks.',
                tenets: [
                  'Zero-RF Optical Fiber Telemetry',
                  'GNSS-Denied Visual Odometry',
                  'Real-Time Neural Edge AI Lock',
                ],
              },
              {
                code: '04',
                label: 'PIL // 04',
                title: 'SELF-RELIANCE',
                icon: Award,
                color: 'text-emerald-600',
                borderColor: 'border-emerald-600',
                bgHover: 'bg-emerald-50/25',
                doctrine: 'ATMANIRBHAR SOVEREIGNTY',
                description:
                  'Championing true Atmanirbhar Bharat — complete indigenous control over airframe composites, firmware algorithms, avionics, and cryptographic keys.',
                tenets: [
                  '100% Sovereign Indian Defence IP',
                  'Zero Vulnerable Foreign Chips',
                  'Domestic Tooling in Bengaluru',
                ],
              },
            ].map((pillar, idx) => {
              const Icon = pillar.icon;
              const isHovered = hoveredPillar === idx;
              return (
                <div
                  key={pillar.code}
                  onMouseEnter={() => setHoveredPillar(idx)}
                  onMouseLeave={() => setHoveredPillar(null)}
                  onClick={() => setHoveredPillar(isHovered ? null : idx)}
                  className={`relative flex flex-col justify-between rounded-3xl p-6 sm:p-7 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer select-none overflow-hidden ${
                    isHovered
                      ? `h-[520px] border-2 ${pillar.borderColor} ${pillar.bgHover} shadow-2xl shadow-red-500/10 scale-[1.01]`
                      : 'h-[400px] bg-white border border-neutral-200/90 shadow-md hover:border-neutral-300'
                  }`}
                >
                  {/* Top glowing cap line when hovered */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1.5 transition-all duration-300 ${
                      isHovered
                        ? 'bg-gradient-to-r from-red-600 via-orange-500 to-red-600 opacity-100'
                        : 'bg-transparent opacity-0'
                    }`}
                  />

                  {/* Pillar Header & Body */}
                  <div className="flex flex-col flex-1 min-h-0">
                    {/* Top Rail */}
                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-neutral-100">
                      <div
                        className={`p-2.5 rounded-xl border transition-all duration-300 shadow-sm ${
                          isHovered
                            ? 'bg-white border-neutral-200 scale-105'
                            : 'bg-neutral-50 border-neutral-200'
                        }`}
                      >
                        <Icon className={`w-5 h-5 ${pillar.color}`} />
                      </div>

                      <span
                        className={`text-[11px] font-mono font-bold tracking-wider px-2 py-0.5 rounded border transition-colors ${
                          isHovered
                            ? 'bg-white border-red-200 text-red-600'
                            : 'bg-neutral-100 border-neutral-200 text-neutral-500'
                        }`}
                      >
                        {pillar.label}
                      </span>
                    </div>

                    {/* Subtitle / Doctrine */}
                    <span
                      className={`text-[10px] sm:text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-1.5 transition-colors ${
                        isHovered ? 'text-red-600' : 'text-neutral-400'
                      }`}
                    >
                      {pillar.doctrine}
                    </span>

                    {/* Big Title */}
                    <h3
                      className={`text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 transition-colors ${
                        isHovered ? 'text-neutral-950' : 'text-neutral-900'
                      }`}
                    >
                      {pillar.title}
                    </h3>

                    {/* Core Description - ALWAYS VISIBLE ON EACH PILLAR */}
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal mb-3">
                      {pillar.description}
                    </p>

                    {/* Expanded Content Revealed As Height Increases Vertically */}
                    <div
                      className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                        isHovered
                          ? 'grid-rows-[1fr] opacity-100 mt-2'
                          : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div className="pt-3 border-t border-neutral-200/80 space-y-2">
                          <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                            TACTICAL MANDATES:
                          </span>
                          {pillar.tenets.map((tenet, tidx) => (
                            <div
                              key={tidx}
                              className="flex items-center gap-2 text-xs font-mono text-neutral-700"
                            >
                              <CheckCircle2 className="w-3.5 h-3.5 text-red-600 flex-shrink-0" />
                              <span className="truncate">{tenet}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pillar Foundation / Base Bar */}
                  <div className="pt-4 mt-auto border-t border-neutral-100 flex items-center justify-between text-[11px] font-mono text-neutral-400">
                    <span className="flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full transition-colors ${
                          isHovered ? 'bg-red-600 animate-pulse' : 'bg-neutral-300'
                        }`}
                      />
                      <span className={isHovered ? 'text-neutral-800 font-bold' : ''}>
                        SOVEREIGN MANDATE
                      </span>
                    </span>

                    <span className="text-[10px] font-mono text-neutral-400">
                      {isHovered ? 'STATUS // EXPANDED' : 'STATUS // BASE'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4. CORE ENGINEERING DISCIPLINES & RESEARCH CAPABILITIES (WHITE BACKGROUND)
          ========================================================================= */}
      <section
        className="relative w-full border-y border-neutral-200 py-16 sm:py-24 my-16 sm:my-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          {/* Header matching Energica reference */}
          <div className="mb-10 sm:mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#C80000] block mb-3">
              INFRASTRUCTURE MATRIX // TECHNICAL CAPABILITIES
            </span>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95]">
              <span className="text-[#C80000] block">AEROSPACE</span>
              <span className="text-neutral-300 block">CAPABILITIES.</span>
            </h2>
          </div>

          {/* Expandable Accordion List matching reference */}
          <div className="space-y-4">
            {[
              {
                index: '01',
                category: 'AERONAUTICAL FLUID DYNAMICS & THERMAL ANALYSIS',
                title: 'AERODYNAMICS & CFD',
                desc: 'Advanced computational fluid dynamics (CFD) modeling from low-speed loitering to Mach 1+ shockwave propagation and boundary layer thermal dissipation. Aerodynamically validated in supersonic wind-tunnel regimes for maximum lift-to-drag efficiency and extreme maneuverability.',
                tags: ['Mach 1+ Shockwave CFD', 'Supersonic Airfoils', 'Wind Tunnel Validated', 'Boundary Layer Control'],
              },
              {
                index: '02',
                category: 'ADVANCED STRUCTURAL COMPOSITES & RADAR ABSORPTION',
                title: 'COMPOSITE FABRICATION',
                desc: 'High-strength, radar-absorbent autoclave carbon fiber composites engineered to endure high-G tactical maneuvers and extreme thermal gradients without structural fatigue. Developed with domestic aerospace tooling right in Bengaluru.',
                tags: ['Pre-preg Autoclave Carbon', 'Radar Absorbing Materials (RAM)', '12G Airframe Integrity', 'Indigenous Tooling'],
              },
              {
                index: '03',
                category: 'HARDWARE-IN-THE-LOOP & ZERO-RF HARDENING',
                title: 'SOVEREIGN AVIONICS',
                desc: 'Hardware-in-the-loop validated flight computers, zero-emission fiber optic spools, and encrypted FHSS anti-jamming datalinks. Full electromagnetic isolation guarantees zero RF emissions and complete immunity to EW jammers and GNSS spoofers.',
                tags: ['Zero-RF Fiber Spool', 'FHSS Encrypted Datalinks', 'HIL Real-Time Validation', 'Anti-Jam Hardened'],
              },
              {
                index: '04',
                category: 'AUTONOMOUS VISION & GNSS-DENIED TARGET ACQUISITION',
                title: 'AI TERMINAL GUIDANCE',
                desc: 'Onboard edge-AI optical flow tracking, GNSS-denied visual inertial odometry (VIO), and autonomous terminal target acquisition algorithms. Operates with millimeter precision without reliance on external satellite navigation.',
                tags: ['Visual Inertial Odometry (VIO)', 'Neural Edge AI Computing', 'GNSS-Denied Navigation', 'Autonomous Terminal Lock'],
              },
            ].map((cap, idx) => {
              const isOpen = activeCap === idx;
              return (
                <div
                  key={cap.index}
                  onMouseEnter={() => setActiveCap(idx)}
                  onClick={() => setActiveCap(isOpen ? null : idx)}
                  className={`rounded-2xl transition-all duration-300 cursor-pointer overflow-hidden ${
                    isOpen
                      ? 'bg-red-50/25 border-2 border-[#C80000] p-6 sm:p-8 shadow-md scale-[1.008]'
                      : 'bg-neutral-50/70 hover:bg-white border border-neutral-200/90 hover:border-neutral-300 p-5 sm:p-6 group hover:shadow-sm'
                  }`}
                >
                  {/* Top Header Row */}
                  <div className="flex items-center justify-between gap-4 select-none">
                    <div className="flex items-center gap-3 sm:gap-6 min-w-0">
                      <span
                        className={`font-mono font-bold text-base sm:text-xl flex-shrink-0 transition-colors ${
                          isOpen
                            ? 'text-[#C80000]'
                            : 'text-neutral-400 group-hover:text-[#C80000]'
                        }`}
                      >
                        /{cap.index}
                      </span>
                      <h3
                        className={`font-black text-xl sm:text-2xl md:text-3xl uppercase tracking-tight truncate transition-colors ${
                          isOpen
                            ? 'text-[#C80000]'
                            : 'text-neutral-900 group-hover:text-[#C80000]'
                        }`}
                      >
                        {cap.title}
                      </h3>
                    </div>

                    <div className="flex-shrink-0">
                      {isOpen ? (
                        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#C80000] transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-neutral-400 group-hover:text-[#C80000] group-hover:translate-x-1 transition-all duration-300" />
                      )}
                    </div>
                  </div>

                  {/* Smooth Expanded Content Drawer with Enlarged Description */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
                    }`}
                  >
                    <div className="overflow-hidden min-h-0">
                      <div className="mt-5 pt-5 border-t border-red-200/70">
                        <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-[#C80000] block mb-3">
                          {cap.category}
                        </span>
                        <p className="text-base sm:text-lg md:text-xl text-neutral-800 leading-relaxed font-medium max-w-3xl mb-6">
                          {cap.desc}
                        </p>

                        <div className="flex flex-wrap items-center gap-2 pt-1">
                          {cap.tags.map((tag, tidx) => (
                            <span
                              key={tidx}
                              className="text-xs sm:text-sm font-mono px-3.5 py-1.5 rounded-lg bg-white border border-neutral-200 text-neutral-800 font-semibold shadow-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. LEADERSHIP: RAHUL G (FULL-WIDTH WHITE BACKGROUND SECTION)
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
