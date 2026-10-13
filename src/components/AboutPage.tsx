import React, { useState, useEffect, useRef } from 'react';
import {
  Target,
  Lightbulb,
  ArrowRight,
  ArrowLeft,
  ArrowDown,
  Shield,
  Plane,
  Anchor,
  Radio,
  Building2,
  LifeBuoy,
  X,
  CheckCircle,
} from 'lucide-react';
import {
  ScrollReveal,
  Perspective3DReveal,
} from './effects/TextScrollEffects';

interface AboutPageProps {
  onNavigateHome?: (hash?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome }) => {
  const [activeCap, setActiveCap] = useState<number | null>(2);
  const [activeSector, setActiveSector] = useState<number | null>(null);

  // Join the Team Modal State
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);
  const [joinSubmitted, setJoinSubmitted] = useState(false);
  const [joinForm, setJoinForm] = useState({ name: '', email: '', message: '' });

  const handleJoinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJoinSubmitted(true);
    setTimeout(() => {
      setJoinSubmitted(false);
      setIsJoinModalOpen(false);
      setJoinForm({ name: '', email: '', message: '' });
    }, 2800);
  };

  // Infinite Carousel State for Sectors
  const [carouselIndex, setCarouselIndex] = useState(12);
  const [withTransition, setWithTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4);
  const [isSectorsInView, setIsSectorsInView] = useState(false);
  const sectorsSectionRef = useRef<HTMLElement>(null);
  const touchStartX = useRef<number | null>(null);

  // Intersection Observer: Only run carousel / autoplay when Sectors is in viewport
  useEffect(() => {
    const el = sectorsSectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsSectorsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSectorsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Responsive visible count (1 on mobile, 2 on tablet, 4 on desktop)
  useEffect(() => {
    const updateVisible = () => {
      if (typeof window === 'undefined') return;
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(4);
      }
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  const sectors = [
    {
      id: '01',
      title: 'Indian Army',
      desc: 'FPV strike and ISR at the front, drone production in the field, and protection for convoys on mountain roads.',
      systems: 'Razor FPV • Nirman • Kavach • Vajra • Prahari',
      image: '/images/sectors/indian-army.webp',
      icon: Shield,
    },
    {
      id: '02',
      title: 'Indian Air Force',
      desc: 'Faster, safer sortie generation on the airbase, and last-ditch protection for air-defence sites and airfields.',
      systems: 'Vajra • Kavach • Doom MK-1 • Yamraj',
      image: '/images/sectors/indian-air-force.webp',
      icon: Plane,
    },
    {
      id: '03',
      title: 'Navy & Coast Guard',
      desc: 'Mine clearance for harbours and sea lanes, and long-endurance watch over coastlines and creeks.',
      systems: 'Trinetra • VTOL-250',
      image: '/images/sectors/navy-coast-guard.webp',
      icon: Anchor,
    },
    {
      id: '04',
      title: 'Homeland Security & Borders',
      desc: 'Persistent border surveillance, counter-infiltration and drone detection for forward posts and patrols.',
      systems: 'Scout-X • Prahari • Net Catcher • Razor OFC',
      image: '/images/sectors/homeland-security-borders.webp',
      icon: Radio,
    },
    {
      id: '05',
      title: 'Critical Infrastructure',
      desc: 'Shielding power, fuel, airports and command sites from hostile drones.',
      systems: 'Doom MK-1 • Kavach • Net Catcher',
      image: '/images/sectors/critical-infrastructure.webp',
      icon: Building2,
    },
    {
      id: '06',
      title: 'Disaster Relief',
      desc: 'Delivering aid where roads are cut off, and producing parts on site for remote infrastructure.',
      systems: 'Hanuman 100 • Nirman',
      image: '/images/sectors/disaster-relief.webp',
      icon: LifeBuoy,
    },
  ];

  // 5 repeated sets (30 items total) centered at 12 to provide massive infinite buffer and eliminate blanks
  const carouselItems = [...sectors, ...sectors, ...sectors, ...sectors, ...sectors];

  const handleNext = () => {
    setWithTransition(true);
    setCarouselIndex((prev) => {
      if (prev >= 24) {
        return 12 + 1;
      }
      return prev + 1;
    });
  };

  const handlePrev = () => {
    setWithTransition(true);
    setCarouselIndex((prev) => {
      if (prev <= 6) {
        return 18 - 1;
      }
      return prev - 1;
    });
  };

  const handleTransitionEnd = () => {
    if (carouselIndex >= 18) {
      setWithTransition(false);
      setCarouselIndex((prev) => (prev >= 18 ? prev - 6 : prev));
    } else if (carouselIndex < 12) {
      setWithTransition(false);
      setCarouselIndex((prev) => (prev < 12 ? prev + 6 : prev));
    }
  };

  // Fallback safety timeout: ensures that even if onTransitionEnd is throttled by browser,
  // the index wraps seamlessly without ever drifting into void.
  useEffect(() => {
    if (carouselIndex >= 18 || carouselIndex < 12) {
      const timer = setTimeout(() => {
        setWithTransition(false);
        setCarouselIndex((prev) => {
          if (prev >= 18) return prev - 6;
          if (prev < 12) return prev + 6;
          return prev;
        });
      }, 550);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex]);

  // Restore transition flag after silent jump
  useEffect(() => {
    if (!withTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setWithTransition(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [withTransition]);

  // Autoplay timer with pause on hover, ONLY when section is in viewport
  useEffect(() => {
    if (isPaused || !isSectorsInView) return;
    const timer = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused, isSectorsInView, carouselIndex]);

  // Mouse Dragging & Laptop Trackpad Sliding State
  const [dragOffset, setDragOffset] = useState(0);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const mouseStartX = useRef<number | null>(null);
  const hasDragged = useRef(false);
  const wheelCooldownRef = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setIsMouseDown(true);
    mouseStartX.current = e.clientX;
    hasDragged.current = false;
    setWithTransition(false);
    setIsPaused(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || mouseStartX.current === null) return;
    const delta = e.clientX - mouseStartX.current;
    if (Math.abs(delta) > 5) {
      hasDragged.current = true;
    }
    setDragOffset(delta);
  };

  const endDrag = () => {
    if (!isMouseDown) return;
    setIsMouseDown(false);
    setWithTransition(true);

    if (dragOffset < -45) {
      handleNext();
    } else if (dragOffset > 45) {
      handlePrev();
    }
    setDragOffset(0);
    mouseStartX.current = null;
    setIsPaused(false);
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleMouseLeave = () => {
    if (isMouseDown) {
      endDrag();
    }
    setIsPaused(false);
  };

  // Two-finger horizontal trackpad swipe on laptops
  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 20 && Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      const now = Date.now();
      if (now - wheelCooldownRef.current > 320) {
        wheelCooldownRef.current = now;
        if (e.deltaX > 0) {
          handleNext();
        } else {
          handlePrev();
        }
      }
    }
  };

  // Touch Swipe for mobile/touch screens
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    hasDragged.current = false;
    setWithTransition(false);
    setIsPaused(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.touches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 5) {
      hasDragged.current = true;
    }
    setDragOffset(delta);
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null) return;
    setWithTransition(true);
    if (dragOffset < -45) {
      handleNext();
    } else if (dragOffset > 45) {
      handlePrev();
    }
    setDragOffset(0);
    touchStartX.current = null;
    setIsPaused(false);
  };

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* =========================================================================
          1. HERO / TACTICAL MASTHEAD (Clean Full-Width White Background)
          ========================================================================= */}
      <section
        className="relative w-full border-b border-neutral-200 pt-28 sm:pt-32 pb-16 sm:pb-20 select-none bg-white"
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
            {/* Top Tag Kicker matching Home Page */}
            <ScrollReveal direction="left" distance={30} blur={4}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-red-600" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] uppercase text-red-600">
                  A DEFENCE DEEP-TECH STARTUP FROM BENGALURU
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Heading in Caps & Slightly Smaller */}
            <Perspective3DReveal
              tag="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-neutral-950 leading-[1.08] mb-6"
            >
              WE EXIST SO INDIA&apos;S FORCES NEVER WAIT FOR TECHNOLOGY.
            </Perspective3DReveal>

            {/* Subtitle / Tagline matching Home Page Tagline */}
            <ScrollReveal delay={0.15} yOffset={20}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-3xl mb-8">
                Warfare now changes in weeks. We build the systems that keep up — supersonic
                strike, rapid air defence and layered counter-drone shields. Designed, built
                and improved in India, at startup speed.
              </p>
            </ScrollReveal>

            {/* Sanskrit Motto */}
            <ScrollReveal delay={0.2} yOffset={20}>
              <div className="pt-2 flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium">
                <span className="font-bold text-neutral-950">
                  नवोन्मेष तन्त्रज्ञाना भ्यां राष्ट्रसेवा
                </span>
                <span className="text-neutral-400">·</span>
                <span className="text-neutral-600">
                  National Service Through Innovative Technology
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-24 pb-20 sm:pb-32">

        {/* =========================================================================
            2. STRATEGIC MISSION & VISION (INTERACTIVE HOVER-REVEAL DISPLAY)
            ========================================================================= */}
        <section className="relative">
          <div className="mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              FOUNDATIONAL PURPOSE
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-[1.1]">
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
                        “Build indigenous systems that soldiers can trust, adapt and even produce close to where they fight — from supersonic strike and air defence to drone factories, ground robots and counter-drone shields.”
                      </blockquote>
                      <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed font-normal">
                        We bridge the critical gap between conceptual defence R&amp;D and battlefield deployment. Combining rapid prototyping, sovereign software iteration, and frontline operational feedback, every system is engineered for decisive battlefield superiority.
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
                        “To make Bharat the place where the world's most adaptive defence technology is designed, built and improved — as fast as the battlefield changes.”
                      </blockquote>
                      <p className="text-xs sm:text-sm text-emerald-200/70 leading-relaxed font-normal">
                        Closing the speed gap that traditional procurement cycles face. We envision a self-reliant, agile defence ecosystem where Indian armed forces wield unmatched sovereign technology at startup speed.
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
          3. WHY WE'RE DOING THIS: THE THREAT GAP & OUR ANSWER (WHITE BACKGROUND)
          ========================================================================= */}
      <section
        className="relative w-full border-t border-neutral-200 py-16 sm:py-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#C80000] block mb-3">
              WHY WE'RE DOING THIS
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
              <span className="block">THE THREAT MOVED FASTER THAN</span>
              <span className="block">THE SYSTEM BUILT TO STOP IT.</span>
            </h2>
          </div>

          {/* Expandable Accordion List */}
          <div className="space-y-4">
            {[
              {
                index: '01',
                category: 'ASYMMETRIC WARFARE & TACTICAL SHIFT',
                title: 'Cheap drones changed warfare',
                desc: "Small FPV and loitering drones now find and strike vehicles far behind the front line. Fibre-optic drones can't even be jammed.",
                tags: ['Small FPV Drones', 'Loitering Munitions', 'Deep-Strike Penetration', "Fibre-Optic Unjammable"],
              },
              {
                index: '02',
                category: 'SUPPLY CHAIN & ITERATION SPEED',
                title: 'Help arrives too slowly',
                desc: 'Drones and spare parts come from factories far in the rear. A design change asked for by troops can take months to reach them.',
                tags: ['Rear Factories', 'Slow Iteration Cycles', 'Months-Long Lead Times', 'Frontline Logistics Delay'],
              },
              {
                index: '03',
                category: 'SOVEREIGNTY & IMPORT DEPENDENCY',
                title: 'Too much is imported',
                desc: 'Many systems in service are imported or single-role. India needs its own adaptable, multi-mission platforms — and the know-how behind them.',
                tags: ['Import Dependence', 'Single-Role Systems', 'Multi-Mission Architecture', 'Indigenous Know-How'],
              },
              {
                index: '04',
                category: 'THE STRATEGIC RESPONSE',
                title: 'Our answer',
                desc: 'Indigenous, modular systems that update as files, move with the troops and get better every time the threat changes.',
                tags: ['Indigenous Systems', 'Modular Platforms', 'Update As Files', 'Frontline Threat Adaptation'],
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
          4. SECTORS WE'RE REACHING (REPETITIVE INFINITE CAROUSEL)
          ========================================================================= */}
      <section
        ref={sectorsSectionRef}
        className="relative w-full border-t border-neutral-200 py-16 sm:py-24 overflow-hidden select-none"
        style={{ backgroundColor: '#ffffff' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          {/* Header matching Image 2 with Carousel Controls */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 sm:mb-14">
            <div>
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-[#C80000] block mb-3">
                SECTORS WE'RE REACHING
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-neutral-950 leading-[1.1]">
                <span className="block">WHEREVER THERE&apos;S A MISSION,</span>
                <span className="block">THERE&apos;S A SAG SYSTEM.</span>
              </h2>
            </div>

            {/* Carousel Nav Controls */}
            <div className="flex items-center gap-3 self-start sm:self-end">
              <span className="text-xs font-mono font-bold text-neutral-400 tracking-wider mr-2">
                {String((((carouselIndex % sectors.length) + sectors.length) % sectors.length) + 1).padStart(2, '0')} / {String(sectors.length).padStart(2, '0')}
              </span>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous sector"
                className="w-11 h-11 rounded-full border border-neutral-300 hover:border-[#030389] bg-white hover:bg-blue-50/50 text-neutral-800 hover:text-[#030389] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next sector"
                className="w-11 h-11 rounded-full border border-neutral-300 hover:border-[#030389] bg-white hover:bg-blue-50/50 text-neutral-800 hover:text-[#030389] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xs active:scale-95"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Infinite Repeating Carousel Track with Mouse Drag and Laptop Trackpad Swipe */}
          <div
            className={`overflow-hidden -mx-2.5 sm:-mx-3 py-4 select-none ${
              isMouseDown ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onWheel={handleWheel}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex"
              style={{
                transform: `translateX(calc(-${carouselIndex * (100 / visibleCount)}% + ${dragOffset}px))`,
                transition: withTransition
                  ? 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)'
                  : 'none',
              }}
              onTransitionEnd={handleTransitionEnd}
            >
              {carouselItems.map((sector, idx) => {
                const isActive = activeSector === idx;
                return (
                  <div
                    key={`${sector.title}-${idx}`}
                    className="w-full sm:w-1/2 lg:w-1/4 shrink-0 px-2.5 sm:px-3"
                  >
                    <div
                      onMouseEnter={() => {
                        if (!isMouseDown) setActiveSector(idx);
                      }}
                      onMouseLeave={() => {
                        if (!isMouseDown) setActiveSector(null);
                      }}
                      onClick={() => {
                        if (!hasDragged.current) {
                          setActiveSector(isActive ? null : idx);
                        }
                      }}
                      className={`group relative h-[460px] sm:h-[500px] rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 flex flex-col justify-end p-6 sm:p-7 select-none border-2 ${
                        isActive
                          ? 'border-[#030389] shadow-2xl shadow-[#030389]/25 scale-[1.01]'
                          : 'border-transparent hover:border-[#030389] shadow-lg hover:shadow-2xl'
                      }`}
                    >
                      {/* Background Image: Crisp in resting state, zoom on hover */}
                      <div className="absolute inset-0 z-0 overflow-hidden bg-neutral-950 pointer-events-none">
                        <img
                          src={sector.image}
                          alt={sector.title}
                          draggable={false}
                          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 pointer-events-none select-none"
                        />
                        {/* Resting: subtle gradient at bottom so image is prominent; on hover: deepens for text readability */}
                        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/75 via-neutral-950/20 to-transparent group-hover:from-neutral-950 group-hover:via-neutral-950/90 group-hover:to-black/40 transition-all duration-500" />
                      </div>

                      {/* Bottom Content Area: Image visible initially, text reveals smoothly on hover */}
                      <div className="relative z-10">
                        {/* Sector Badge */}
                        <div
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-xs text-xs font-mono font-black tracking-wider uppercase mb-2 shadow-xs"
                          style={{ color: '#030389' }}
                        >
                          <sector.icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#030389' }} />
                          <span style={{ color: '#030389' }}>SECTOR</span>
                        </div>

                        {/* Sector Title */}
                        <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight leading-tight">
                          {sector.title}
                        </h3>

                        {/* Hidden Text Reveal Drawer (expands smoothly on hover / active) */}
                        <div
                          className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                            isActive ? 'grid-rows-[1fr]' : 'grid-rows-[0fr] group-hover:grid-rows-[1fr]'
                          }`}
                        >
                          <div className="overflow-hidden min-h-0">
                            <div
                              className={`pt-3.5 mt-2.5 border-t border-white/20 transition-all duration-500 delay-75 space-y-3 ${
                                isActive
                                  ? 'opacity-100 translate-y-0'
                                  : 'opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'
                              }`}
                            >
                              <p className="text-xs sm:text-sm text-neutral-200/95 leading-relaxed font-normal">
                                {sector.desc}
                              </p>
                              {sector.systems && (
                                <div className="pt-2.5 border-t border-white/10 text-[11px] sm:text-xs font-mono font-bold text-blue-200">
                                  {sector.systems}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {sectors.map((_, dotIdx) => {
              const currentMod = (((carouselIndex % sectors.length) + sectors.length) % sectors.length);
              const activeDot = currentMod === dotIdx;
              return (
                <button
                  key={dotIdx}
                  type="button"
                  onClick={() => {
                    setWithTransition(true);
                    const diff = dotIdx - currentMod;
                    setCarouselIndex(carouselIndex + diff);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    activeDot ? 'w-8' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                  }`}
                  style={activeDot ? { backgroundColor: '#030389' } : undefined}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          5. WHAT WE BELIEVE // CTA SECTION (WITH BACKGROUND VIDEO)
          ========================================================================= */}
      <section
        id="about-cta"
        className="relative text-white min-h-[580px] py-24 sm:py-32 flex items-center overflow-hidden bg-black"
        style={{ backgroundColor: '#000000' }}
      >
        {/* Background Video with light black overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-black">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-90 filter brightness-100"
          >
            <source src="/video/background1.mp4" type="video/mp4" />
          </video>
          {/* Very light black overlay so the video is clearly visible */}
          <div className="absolute inset-0 bg-black/35" />
        </div>

        <div className="relative z-10 max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading matching reference image */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-black uppercase tracking-tight text-white leading-[1.1] mb-10 sm:mb-14 drop-shadow-md">
            WHAT WE BELIEVE
          </h2>

          {/* 4 Pillars / Beliefs Grid matching reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12 sm:mb-16">
            {[
              {
                title: 'Speed is a capability',
                desc: 'The side that adapts first wins. We design for change from day one.',
              },
              {
                title: 'Made in Bharat, for the world',
                desc: 'Indigenous engineering, Indian supply chains, world-class standards.',
              },
              {
                title: 'Humans stay in command',
                desc: 'Machines take the risk. People make the decisions.',
              },
              {
                title: 'Prove it in the field',
                desc: 'Every claim earns its place through testing and user trials.',
              },
            ].map((belief, idx) => (
              <div key={idx} className="flex flex-col">
                {/* Horizontal logo red accent divider line on top */}
                <div className="w-full h-[2.5px] bg-[#E5252A] mb-6 rounded-full shadow-[0_0_8px_rgba(229,37,42,0.4)]" />
                <h3 className="text-lg sm:text-xl font-bold uppercase text-white tracking-tight mb-3 drop-shadow-sm">
                  {belief.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal drop-shadow-sm">
                  {belief.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action CTA Buttons matching reference image */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5">
            <button
              type="button"
              onClick={() => {
                if (onNavigateHome) {
                  onNavigateHome('#products');
                } else {
                  window.location.href = '/#products';
                }
              }}
              className="px-8 py-4 rounded-full bg-[#E5252A] hover:bg-[#c91d22] text-white font-bold text-base sm:text-lg transition-all duration-300 shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              See Our Products
            </button>

            <button
              type="button"
              onClick={() => setIsJoinModalOpen(true)}
              className="px-8 py-4 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-md text-white font-bold text-base sm:text-lg border border-white/30 hover:border-white/60 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-lg"
            >
              Join the Team
            </button>
          </div>
        </div>
      </section>

      {/* Join the Team / Careers Modal */}
      {isJoinModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg bg-[#0a1322] border border-red-600/40 rounded-3xl p-6 sm:p-8 text-white shadow-2xl">
            <button
              type="button"
              onClick={() => setIsJoinModalOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-red-500 block mb-2">
                CAREERS &amp; COLLABORATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Join the Team
              </h3>
              <p className="text-sm text-slate-300 mt-2">
                Help build sovereign defence technologies for Bharat. Submit your details below or connect via direct mail.
              </p>
            </div>

            {joinSubmitted ? (
              <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="w-12 h-12 text-emerald-400 mb-3" />
                <h4 className="text-xl font-bold text-white mb-1">Message Received</h4>
                <p className="text-sm text-slate-300">Our engineering command team will connect with you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleJoinSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={joinForm.name}
                    onChange={(e) => setJoinForm({ ...joinForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-slate-500 focus:outline-none transition-colors text-sm"
                    placeholder="Rahul Sharma"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={joinForm.email}
                    onChange={(e) => setJoinForm({ ...joinForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-slate-500 focus:outline-none transition-colors text-sm"
                    placeholder="name@organization.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5">
                    Role / Expertise or Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={joinForm.message}
                    onChange={(e) => setJoinForm({ ...joinForm, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/15 focus:border-red-500 text-white placeholder-slate-500 focus:outline-none transition-colors resize-none text-sm"
                    placeholder="Tell us about your background in aerospace, avionics, software, or manufacturing..."
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 py-3.5 px-6 rounded-xl bg-[#E5252A] hover:bg-[#c91d22] text-white font-bold transition-all duration-200 cursor-pointer shadow-lg shadow-red-600/30 text-sm"
                  >
                    Submit Application
                  </button>
                  <a
                    href="mailto:contactus@sagdefaero.com?subject=Join the Team Application"
                    className="py-3.5 px-6 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-center transition-colors text-sm"
                  >
                    Direct Email
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutPage;
