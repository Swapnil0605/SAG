import React, { useState } from 'react';
import {
  ArrowUpRight,
  ChevronRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import {
  ScrubWordGlow,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

export interface Product {
  id: string;
  name: string;
  fleetTag: string;
  titleMain: string;
  titleAccent: string;
  category: 'strike' | 'isr' | 'cuas';
  categoryLabel: string;
  roleBadge: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  accentTheme: {
    tagColor: string;
    accentWordColor: string;
    glowBg: string;
    borderColor: string;
    cardBg: string;
  };
  keySpecs: {
    label: string;
    value: string;
  }[];
  specs: {
    platformType: string;
    range: string;
    speed: string;
    endurance: string;
    payload: string;
    altitude: string;
    standards: string;
    dayCamera?: string;
    nightCamera?: string;
    guidance?: string;
    datalink?: string;
    launch?: string;
    operatingTemp?: string;
  };
  highlights: string[];
}

export const products: Product[] = [
  {
    id: 'razor-p1',
    name: 'SAG RAZOR P1',
    fleetTag: 'FLEET 01',
    titleMain: 'SAG RAZOR',
    titleAccent: 'P1',
    category: 'strike',
    categoryLabel: 'FPV Combat Drone',
    roleBadge: 'KAMIKAZE STRIKE',
    tagline: 'Precision strike drone for contested electromagnetic zones.',
    description:
      'Indigenous FPV combat drone engineered for terminal precision strike missions, delivering rapid response, high-impact kinetic defeat of armored targets, and battlefield dominance.',
    image: '/images/products/sag-razor-p1.png',
    gallery: [
      '/images/products/sag-razor-p1.png',
    ],
    accentTheme: {
      tagColor: 'text-red-500',
      accentWordColor: 'text-red-500',
      glowBg: 'rgba(239, 68, 68, 0.28)',
      borderColor: 'hover:border-red-500/60',
      cardBg: 'from-[#140b0e] via-[#0d0e14] to-[#07080a]',
    },
    keySpecs: [
      { label: 'RANGE', value: '20 km' },
      { label: 'ENDURANCE', value: 'Up to 50 min' },
      { label: 'SPRINT SPEED', value: '120 km/h' },
      { label: 'PAYLOAD', value: 'Up to 5 kg' },
    ],
    specs: {
      platformType: 'FPV Kamikaze Strike UAV',
      range: '20 km Operational Combat Radius',
      speed: 'Sprint 120 km/h • Loiter 100 km/h • Cruise 80 km/h',
      endurance: 'Up to 50 minutes continuous flight',
      payload: 'Up to 5 kg (HE, Fragmentation, Shaped Charge)',
      altitude: 'Up to 5,000 m AMSL',
      standards: 'MIL-STD-461E • MIL-STD-810G • IP54/IP55',
      dayCamera: '1920×1080p digital low-latency sensor',
      nightCamera: '640×512p radiometric thermal terminal sensor',
      guidance: 'Operator-in-the-loop with GNSS waypoint fallback',
      datalink: 'Encrypted low-latency RF terminal video & telemetry link',
      launch: 'VTOL — rapid field deployment in under 5 minutes',
      operatingTemp: '−20 °C to +60 °C',
    },
    highlights: [
      'Configurable strike payload up to 5 kg for armored & fortified assets',
      'Encrypted frequency-hopping datalink resistant to tactical jamming',
      'Dual day/thermal seeker options for night and all-weather engagements',
      'Ruggedized VTOL setup requiring zero runway infrastructure',
    ],
  },
  {
    id: 'razor-ofc',
    name: 'SAG RAZOR OFC (Fiber-Optic FPV)',
    fleetTag: 'FLEET 02',
    titleMain: 'RAZOR',
    titleAccent: 'OFC',
    category: 'strike',
    categoryLabel: 'Fiber-Optic Guided FPV',
    roleBadge: '100% UNJAMMABLE TETHER',
    tagline: 'Zero-RF emission physical fiber datalink for contested EW environments.',
    description:
      'Engineered for absolute survivability against hostile electronic warfare. Deploying a high-tensile micro-fiber cable spool during flight completely eliminates RF jamming, spoofing, and direction finding while streaming uncompressed lossless 1080p video.',
    image: '/images/products/razor-ofc.png',
    gallery: [
      '/images/products/razor-ofc.png',
      '/images/fiber-optic-fpv-drone.jpg',
      '/images/fiber-optic-fpv-drone-flight.webp',
      '/images/fiber-optic-fpv-drone-alt.jpg',
    ],
    accentTheme: {
      tagColor: 'text-cyan-400',
      accentWordColor: 'text-cyan-400',
      glowBg: 'rgba(6, 182, 212, 0.28)',
      borderColor: 'hover:border-cyan-500/60',
      cardBg: 'from-[#081524] via-[#09101a] to-[#06080e]',
    },
    keySpecs: [
      { label: 'FIBER SPOOL', value: 'Up to 10 km' },
      { label: 'ENDURANCE', value: 'Up to 50 min' },
      { label: 'RF SIGNATURE', value: 'Zero Emission' },
      { label: 'JAMMING IMMUNITY', value: '100% EW Proof' },
    ],
    specs: {
      platformType: 'Fiber-Optic Guided FPV Combat Drone',
      range: 'Fiber spool length up to 10 km (deployable in-flight)',
      speed: 'Sprint 120 km/h • Cruise 80 km/h',
      endurance: 'Up to 50 minutes',
      payload: 'High-explosive warhead + terminal precision seeker',
      altitude: 'Up to 5,000 m AMSL',
      standards: 'Zero-RF Signature • High Security EW Immunity',
      dayCamera: 'Uncompressed real-time lossless 1080p digital feed',
      nightCamera: 'Onboard day/thermal terminal sensor',
      guidance: 'Physical optical wire guidance (Zero electromagnetic emissions)',
      datalink: 'Micro-fiber optical cable (100% immune to EW jammers)',
      launch: 'VTOL — compact field deployment in under 5 minutes',
      operatingTemp: '−20 °C to +60 °C',
    },
    highlights: [
      'Completely undetectable by electronic surveillance measures (ESM)',
      '100% immune to commercial and military radio frequency jamming',
      'Pristine crystal-clear 1080p video without static, snow, or signal drop',
      'Defeats active vehicle soft-kill electronic countermeasures',
    ],
  },
  {
    id: 'scout-x',
    name: 'SCOUT-X',
    fleetTag: 'FLEET 03',
    titleMain: 'SCOUT',
    titleAccent: '-X',
    category: 'isr',
    categoryLabel: 'Persistent ISR Quadcopter',
    roleBadge: 'PERSISTENT BORDER ISR',
    tagline: 'GNSS-denied multi-mission border surveillance and route reconnaissance.',
    description:
      'A persistent quadcopter platform delivering real-time border surveillance, route reconnaissance, and counter-infiltration intelligence with dual-mode free flight and tethered power station operations.',
    image: '/images/products/scout-x.png',
    gallery: [
      '/images/products/scout-x.png',
    ],
    accentTheme: {
      tagColor: 'text-sky-400',
      accentWordColor: 'text-sky-400',
      glowBg: 'rgba(56, 189, 248, 0.25)',
      borderColor: 'hover:border-sky-500/60',
      cardBg: 'from-[#081420] via-[#090d16] to-[#06070a]',
    },
    keySpecs: [
      { label: 'RANGE', value: '20 km' },
      { label: 'ENDURANCE', value: '90m free / 24h+' },
      { label: 'PAYLOAD', value: 'Dual EO/IR Gimbal' },
      { label: 'RATING', value: 'IP67 Weatherproof' },
    ],
    specs: {
      platformType: 'Persistent Tactical ISR Quadcopter',
      range: '20 km (Free Flight) / Unlimited via Micro-Tether Ground Station',
      speed: 'Max 60 km/h (Operational Cruise 40 km/h)',
      endurance: '90 mins free flight; tethered 24+ hours continuous operation',
      payload: '1.5 – 2 kg stabilized dual-sensor gimbal turret',
      altitude: 'Up to 5,000 m AMSL service ceiling',
      standards: 'MIL-STD-810G • IP67 All-Weather Sealed',
      dayCamera: '1920×1080p baseline; 2K/4K 30× optical zoom gimbal',
      nightCamera: '640×512 radiometric thermal camera with geo-tagging',
      guidance: 'Optical flow + GNSS dual-mode navigation in denied zones',
      datalink: 'AES-256 encrypted telemetry and high-definition video link',
      launch: 'Instant VTOL deployment from backpack or tactical vehicle',
      operatingTemp: '−20 °C to +55 °C',
    },
    highlights: [
      'Dual-mode free-flight & continuous 24-hour tethered station',
      '30× optical zoom with real-time target coordinate geo-tagging',
      'Autonomous patrol grids with dynamic obstacle avoidance',
      'IP67 rated for harsh rain, desert sand, and high-altitude border snow',
    ],
  },
  {
    id: 'aeron-a1',
    name: 'AERON A1',
    fleetTag: 'FLEET 04',
    titleMain: 'AERON',
    titleAccent: 'A1',
    category: 'isr',
    categoryLabel: 'Hybrid VTOL MALE Platform',
    roleBadge: 'LONG-ENDURANCE VTOL',
    tagline: 'Runway-independent strategic surveillance and tactical communications relay.',
    description:
      'Heavy-duty hybrid-electric VTOL aircraft designed for high-altitude border surveillance, tactical communications relay, and persistent multi-sensor intelligence without requiring runways.',
    image: '/images/products/aeron-a1.png',
    gallery: [
      '/images/products/aeron-a1.png',
    ],
    accentTheme: {
      tagColor: 'text-cyan-400',
      accentWordColor: 'text-cyan-400',
      glowBg: 'rgba(6, 182, 212, 0.25)',
      borderColor: 'hover:border-cyan-500/60',
      cardBg: 'from-[#0b131e] via-[#090d14] to-[#060709]',
    },
    keySpecs: [
      { label: 'RANGE', value: '50 – 100 km' },
      { label: 'ENDURANCE', value: 'Up to 120 min' },
      { label: 'ALTITUDE', value: '6,500 m AMSL' },
      { label: 'CONFIGURATION', value: 'Zero-Runway VTOL' },
    ],
    specs: {
      platformType: 'VTOL Hybrid Fixed-Wing ISR Aircraft',
      range: '50 km standard (extendable to 100+ km line-of-sight)',
      speed: 'Cruise 110 km/h • Sprint 160 km/h',
      endurance: 'Up to 120 minutes continuous flight envelope',
      payload: 'Up to 5 kg multi-sensor gyro-stabilized gimbal payload',
      altitude: 'Service ceiling up to 6,500 m AMSL',
      standards: 'MIL-STD-461 • MIL-STD-810H',
      dayCamera: '1920×1080p baseline; 2K/4K stabilized dual-sensor gimbal',
      nightCamera: '640×512p cooled thermal camera with laser rangefinder',
      guidance: 'Triple-redundant autonomous flight controller with INS/GNSS',
      datalink: 'Encrypted C-band line-of-sight & SATCOM capable link',
      launch: 'Zero-runway autonomous VTOL takeoff and transition',
      operatingTemp: '−30 °C to +50 °C',
    },
    highlights: [
      'Runway-independent operations in mountainous LAC / border areas',
      'Co-mounted laser rangefinder and automated target geo-tracking',
      'Hybrid propulsion with automatic battery failover safety',
      'Long-range 50–100 km command radius for strategic forward awareness',
    ],
  },
  {
    id: 'doom-mk1',
    name: 'DOOM MK-1',
    fleetTag: 'FLEET 05',
    titleMain: 'DOOM',
    titleAccent: 'MK-1',
    category: 'cuas',
    categoryLabel: 'Short-Range Surface-to-Air Missile',
    roleBadge: 'SURFACE-TO-AIR DEFENCE',
    tagline: 'Kinetic neutralizer engineered for rapid defeat of UAVs and loitering munitions.',
    description:
      'An indigenous short-range surface-to-air missile system engineered for rapid response and battlefield precision air defence against enemy drone swarms, loitering munitions, and low-flying aerial threats.',
    image: '/images/products/doom-mk1.png',
    gallery: [
      '/images/products/doom-mk1.png',
    ],
    accentTheme: {
      tagColor: 'text-red-500',
      accentWordColor: 'text-red-500',
      glowBg: 'rgba(220, 38, 38, 0.28)',
      borderColor: 'hover:border-red-600/70',
      cardBg: 'from-[#18090d] via-[#100a0e] to-[#070709]',
    },
    keySpecs: [
      { label: 'ENGAGEMENT', value: '2 – 5 km' },
      { label: 'ALTITUDE', value: '50 – 5,000 m' },
      { label: 'ACCURACY', value: 'CEP < 2 m' },
      { label: 'PROPULSION', value: 'Solid Rocket' },
    ],
    specs: {
      platformType: 'Short-Range Surface-to-Air Missile (SAM)',
      range: '2 – 5 km (Extended short-range air defence envelope)',
      speed: 'Supersonic intercept sprint capability',
      endurance: 'Rapid engagement cycle (reaction time < 3 seconds)',
      payload: 'High-fragmentation proximity & impact kinetic warhead',
      altitude: 'Engagement ceiling: 50 m to 5,000 m AMSL',
      standards: 'MIL-STD-810G • Sealed All-Weather Launch Canister',
      guidance: 'Integrated optical & RF terminal guidance seeker',
      launch: 'Multi-canister launcher vehicle or hardened static station',
      operatingTemp: '−25 °C to +55 °C',
    },
    highlights: [
      'Sub-2-meter circular error probable (CEP) for guaranteed kinetic kill',
      'Optimized against low radar cross-section (RCS) kamikaze drones',
      'Solid-propellant rapid-ignition rocket motor with instant boost',
      'Integrates into networked battlefield air defence command grids',
    ],
  },
  {
    id: 'velocity-mk1',
    name: 'SAG VELOCITY',
    fleetTag: 'FLEET 06',
    titleMain: 'SAG',
    titleAccent: 'VELOCITY',
    category: 'cuas',
    categoryLabel: 'Counter Drone Interceptor UAV',
    roleBadge: 'KINETIC C-UAS INTERCEPTOR',
    tagline: 'High-speed autonomous VTOL interceptor designed to hunt and neutralize hostile drones.',
    description:
      'Counter Drone Interceptor UAV technology for mission-critical security. Designed to launch instantly and neutralize incoming enemy loitering munitions, FPV strikers, and reconnaissance UAVs through AI-based optical tracking and proximity detonation.',
    image: '/images/products/sag-velocity.png',
    gallery: [
      '/images/products/sag-velocity.png',
    ],
    accentTheme: {
      tagColor: 'text-cyan-400',
      accentWordColor: 'text-cyan-400',
      glowBg: 'rgba(6, 182, 212, 0.25)',
      borderColor: 'hover:border-cyan-500/60',
      cardBg: 'from-[#09151e] via-[#090e15] to-[#06070a]',
    },
    keySpecs: [
      { label: 'TAKE-OFF WEIGHT', value: '5 kg' },
      { label: 'WARHEAD', value: '1 kg Proximity' },
      { label: 'TRACKING', value: 'AI Edge Optical' },
      { label: 'DEPLOYMENT', value: 'Instant VTOL' },
    ],
    specs: {
      platformType: 'Counter Drone Interceptor UAV',
      range: 'Tactical perimeter interception envelope',
      speed: 'High-velocity sprint intercept profile',
      endurance: 'Optimized for high-acceleration target engagement',
      payload: '1 kg Directional fragmentation warhead (Impact / Proximity)',
      altitude: 'Perimeter intercept up to 4,000 m AMSL',
      standards: 'MIL-STD-810G • Ruggedized Carbon Composite',
      guidance: 'Autonomous / Semi-Autonomous AI Edge Optical Target Lock',
      datalink: 'Encrypted RF Telemetry & Secure Command Link',
      launch: 'Rapid VTOL launch tube or mobile vehicle rack',
      operatingTemp: '−20 °C to +55 °C',
    },
    highlights: [
      'Onboard AI computer vision locks onto dynamic maneuvering UAVs',
      'Dual detonation modes: precision kinetic ramming or proximity blast',
      'Lightweight 5 kg total take-off weight for single-soldier deployment',
      'Cost-effective asymmetric countermeasure against drone swarms',
    ],
  },
];

export const ProductsCatalogue: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [spotlightActiveImage, setSpotlightActiveImage] = useState<string>('/images/fiber-optic-fpv-drone.jpg');
  const [modalActiveImage, setModalActiveImage] = useState<string | null>(null);

  const handleOpenModal = (p: Product) => {
    setSelectedProduct(p);
    setModalActiveImage(p.image);
  };

  return (
    <section id="products" className="relative bg-black text-slate-100 py-24 md:py-32 overflow-hidden">
      {/* Soft gradient blend from previous section */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-[1]" />

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none" />

      {/* Subtle ambient red & cyan glows matching logo */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header with Split / Sliced Word Reveal */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <ScrollReveal yOffset={15} blur={4}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                <span className="text-xs font-semibold tracking-military uppercase text-cyan-400 font-mono">
                  SOVEREIGN DEFENCE SYSTEMS PORTFOLIO
                </span>
              </div>
            </ScrollReveal>

            {/* Word-by-Word Scrub Glow Highlight */}
            <ScrubWordGlow
              tag="h2"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Mission-Ready Platforms.
            </ScrubWordGlow>
          </div>

          <ScrollReveal delay={0.2} yOffset={20}>
            <p className="text-sm sm:text-base text-slate-300 max-w-md leading-relaxed">
              Engineered, prototyped, and manufactured in India to deliver asymmetric tactical superiority, electronic warfare resilience, and sovereign battlefield readiness.
            </p>
          </ScrollReveal>
        </div>

        {/* Breakthrough Spotlight Banner with Scroll Reveal & Text Stretching */}
        <ScrollReveal yOffset={35}>
          <div className="mb-14 bg-[#0d0d10]/95 border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-md hover:border-neutral-700 transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Visual Preview with Interactive Thumbnails */}
              <div className="lg:col-span-6">
                <div className="relative rounded-2xl overflow-hidden bg-black aspect-[16/10] border border-neutral-800 shadow-md group">
                  <img
                    src={spotlightActiveImage}
                    alt="FIBER OPTIC FPV DRONE in Flight"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full shadow-md tracking-wider flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    LIVE HARDWARE // IN FLIGHT
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-white text-sm font-mono font-bold block">
                      SAG RAZOR OFC // UNJAMMABLE FIBER SPOOL
                    </span>
                    <span className="text-[11px] text-cyan-300 font-mono">
                      Zero-RF Emission Physical Micro-Tether in Combat Flight
                    </span>
                  </div>
                </div>

                {/* Thumbnail Selector */}
                <div className="flex items-center gap-3 mt-3">
                  {[
                    { src: '/images/fiber-optic-fpv-drone.jpg', label: 'Frontal Flight' },
                    { src: '/images/fiber-optic-fpv-drone-flight.webp', label: 'Dynamic Angle' },
                    { src: '/images/fiber-optic-fpv-drone-alt.jpg', label: 'Tactical View' },
                    { src: '/images/products/razor-ofc-1.png', label: 'Hardware CAD' },
                  ].map((item, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSpotlightActiveImage(item.src)}
                      className={`relative rounded-xl overflow-hidden w-24 h-16 border-2 transition-all cursor-pointer ${
                        spotlightActiveImage === item.src
                          ? 'border-red-600 ring-2 ring-red-600/40'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img src={item.src} alt={item.label} className="w-full h-full object-cover bg-black" />
                      <span className="absolute bottom-0 inset-x-0 bg-black/80 text-[9px] font-mono text-slate-200 text-center py-0.5 truncate px-1">
                        {item.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Spotlight Content */}
              <div className="lg:col-span-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2.5">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="text-xs font-semibold tracking-military uppercase text-red-500 font-mono">
                      FEATURED SOVEREIGN INNOVATION
                    </span>
                  </div>

                  {/* Text Stretching / Scaling */}
                  <ScaleStretchText scaleYFrom={1.35} scaleYTo={1.0}>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                      FIBER OPTIC FPV DRONE (SAG RAZOR OFC)
                    </h3>
                  </ScaleStretchText>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    Engineered for absolute survivability in heavily contested electromagnetic battlefields. By deploying an ultra-fine, high-tensile optical micro-cable spool during flight, RAZOR OFC completely bypasses electronic warfare jammers, GPS spoofers, and RF counter-UAS detection systems.
                  </p>

                {/* 3 Pillars matching logo colors */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-2xl text-left">
                    <span className="text-[10px] font-mono text-cyan-400 block uppercase">SIGNATURE</span>
                    <span className="text-xs font-bold text-white block mt-0.5">Zero-RF Emission</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Undetectable on spectrum</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-2xl text-left">
                    <span className="text-[10px] font-mono text-red-400 block uppercase">DATALINK</span>
                    <span className="text-xs font-bold text-white block mt-0.5">100% Jam-Proof</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Physical glass wire link</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-2xl text-left">
                    <span className="text-[10px] font-mono text-emerald-400 block uppercase">VIDEO FEED</span>
                    <span className="text-xs font-bold text-white block mt-0.5">Lossless 1080p</span>
                    <span className="text-[10px] text-slate-400 block mt-1">Uncompressed crisp feed</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const product = products.find((p) => p.id === 'razor-ofc');
                    if (product) handleOpenModal(product);
                  }}
                  className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-red-600/30 cursor-pointer"
                >
                  <span>Technical Datasheet</span>
                  <ChevronRight className="w-3.5 h-3.5 text-white" />
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-semibold px-5 py-2.5 rounded-xl border border-neutral-800 transition-colors"
                >
                  <span>Inquire for Deployment</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>

        {/* Product Cards Grid - Minimalist Fleet Showcase (3D Pop-Out & Heroic Hover Lift) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {products.map((product, pIdx) => (
            <ScrollReveal key={product.id} delay={pIdx * 0.08} yOffset={35} className="h-full overflow-visible">
              <div
                role="button"
                tabIndex={0}
                aria-label={`View ${product.name} specifications`}
                onClick={() => handleOpenModal(product)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleOpenModal(product);
                  }
                }}
                className="relative flex flex-col justify-between w-full h-[430px] sm:h-[460px] p-6 sm:p-7 group cursor-pointer overflow-visible select-none z-10 hover:z-30 transition-all duration-500"
              >
                {/* 1. Card Base Frame (Background, Glow, Grid & Border - clipped cleanly to card boundary) */}
                <div
                  className={`absolute inset-0 rounded-[32px] bg-gradient-to-b ${product.accentTheme.cardBg} border border-neutral-800/80 ${product.accentTheme.borderColor} shadow-xl group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.9)] transition-all duration-500 overflow-hidden backdrop-blur-sm pointer-events-none`}
                >
                  {/* Top ambient glow on hover */}
                  <div
                    className="absolute -top-16 left-1/2 -translate-x-1/2 w-52 h-28 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ backgroundColor: product.accentTheme.glowBg }}
                  />

                  {/* Subtle tactical grid background */}
                  <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity" />
                </div>

                {/* 2. Top Header: FLEET tag + Bold Product Name */}
                <div className="relative z-10 flex items-start justify-between pointer-events-none">
                  <div>
                    <span className={`text-xs font-mono font-bold tracking-[0.25em] ${product.accentTheme.tagColor} block mb-2`}>
                      {product.fleetTag}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                      <span>{product.titleMain} </span>
                      <span className={product.accentTheme.accentWordColor}>{product.titleAccent}</span>
                    </h3>
                  </div>

                  {/* Corner Redirect Indicator */}
                  <div className="w-9 h-9 rounded-full border border-neutral-700/60 bg-black/40 flex items-center justify-center text-neutral-400 group-hover:text-white group-hover:border-cyan-400/80 group-hover:bg-cyan-500/10 transition-all duration-300 flex-shrink-0">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* 3. Heroic Product Platform Render - Overflows OUT of the Card on Hover */}
                <div className="relative z-20 w-full flex-1 flex flex-col items-center justify-center px-2 py-4 my-auto overflow-visible pointer-events-none">
                  {/* Soft Ground Contact Shadow (compresses and fades as platform elevates) */}
                  <div className="absolute bottom-4 w-4/5 h-4 bg-black/95 blur-lg rounded-full transition-all duration-700 ease-out group-hover:scale-90 group-hover:opacity-25" />

                  {/* Platform Image - Breaking out of the card limits in 3D */}
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full max-h-[220px] sm:max-h-[250px] object-contain scale-110 sm:scale-125 transition-all duration-700 ease-out group-hover:-translate-y-7 group-hover:scale-[1.42] sm:group-hover:scale-[1.48] filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.95)] group-hover:drop-shadow-[0_30px_50px_rgba(0,0,0,0.98)]"
                    style={{
                      transitionProperty: 'transform, translate, scale, rotate, filter',
                      transitionDuration: '.7s',
                    }}
                  />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Seamless bottom blend into subsequent section */}
      <div className="absolute bottom-0 inset-x-0 h-44 bg-gradient-to-b from-transparent via-black/80 to-black pointer-events-none z-[1]" />

      {/* Technical Datasheet Modal (High-Tech, Clean, Stealth) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d10] rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden flex flex-col text-slate-100">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-black/90">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
                <div>
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    {selectedProduct.categoryLabel} // TECHNICAL SPECIFICATION
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {selectedProduct.name}
                  </h3>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Product Gallery Switcher */}
              <div>
                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black border border-neutral-800 shadow-md mb-3">
                  <img
                    src={modalActiveImage || selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-contain bg-black"
                  />
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase">
                    {selectedProduct.roleBadge}
                  </div>
                </div>

                {/* Thumbnails if gallery > 1 */}
                {selectedProduct.gallery && selectedProduct.gallery.length > 1 && (
                  <div className="flex items-center gap-2 overflow-x-auto pb-1">
                    {selectedProduct.gallery.map((imgSrc, gIdx) => (
                      <button
                        key={gIdx}
                        type="button"
                        onClick={() => setModalActiveImage(imgSrc)}
                        className={`relative w-20 h-14 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer transition-all ${
                          (modalActiveImage || selectedProduct.image) === imgSrc
                            ? 'border-red-600 ring-2 ring-red-600/40'
                            : 'border-neutral-800 opacity-60 hover:opacity-100'
                        }`}
                      >
                        <img src={imgSrc} alt="view" className="w-full h-full object-cover bg-black" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-military mb-2">
                  MISSION PROFILE &amp; OPERATIONAL PURPOSE
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-black/80 p-4 rounded-xl border border-neutral-800">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Comprehensive Specs Grid */}
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-military mb-3">
                  PERFORMANCE ENVELOPE &amp; SPECIFICATIONS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">PLATFORM TYPE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.platformType}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">OPERATIONAL RANGE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.range}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">SPEED PROFILE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.speed}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">FLIGHT ENDURANCE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.endurance}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">PAYLOAD CAPACITY</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.payload}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">OPERATIONAL ALTITUDE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.altitude}</span>
                  </div>
                  <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                    <span className="text-neutral-400 block text-[10px]">RUGGEDIZATION &amp; EMI/EMC</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.standards}</span>
                  </div>
                  {selectedProduct.specs.datalink && (
                    <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                      <span className="text-neutral-400 block text-[10px]">DATALINK &amp; ENCRYPTION</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.datalink}</span>
                    </div>
                  )}
                  {selectedProduct.specs.guidance && (
                    <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                      <span className="text-neutral-400 block text-[10px]">GUIDANCE MODE</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.guidance}</span>
                    </div>
                  )}
                  {selectedProduct.specs.dayCamera && (
                    <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                      <span className="text-neutral-400 block text-[10px]">DAY CAMERA</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.dayCamera}</span>
                    </div>
                  )}
                  {selectedProduct.specs.nightCamera && (
                    <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                      <span className="text-neutral-400 block text-[10px]">THERMAL / NIGHT CAMERA</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.nightCamera}</span>
                    </div>
                  )}
                  {selectedProduct.specs.operatingTemp && (
                    <div className="p-3 bg-black/80 border border-neutral-800 rounded-xl">
                      <span className="text-neutral-400 block text-[10px]">OPERATING TEMPERATURE</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.operatingTemp}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-military mb-3">
                  KEY COMBAT HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-black/80 p-2.5 rounded-lg border border-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-800 bg-black/90 flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-neutral-400">
                SOVEREIGN INDIGENOUS PLATFORM // CLASSIFIED BRIEFINGS ON DEMAND
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className="bg-red-600 hover:bg-red-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-red-600/30"
                >
                  Request Operational Demonstration
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsCatalogue;
