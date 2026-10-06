import React, { useState } from 'react';
import {
  ArrowRight,
  X,
  CheckCircle2,
  RotateCw,
} from 'lucide-react';
import {
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
  video360?: string;
  gallery: string[];
  accentTheme: {
    tagColor: string;
    accentWordColor: string;
    glowBg: string;
    borderColor: string;
    cardBg: string;
    btnHover: string;
    dotBg: string;
    pillBg: string;
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
      tagColor: 'text-red-400',
      accentWordColor: 'text-red-500',
      glowBg: 'rgba(239, 68, 68, 0.35)',
      borderColor: 'border-red-500/40 hover:border-red-500',
      cardBg: 'from-[#1c0a0f] via-[#10080d] to-[#070709]',
      btnHover: 'group-hover:border-red-500 group-hover:bg-red-600',
      dotBg: 'bg-red-500',
      pillBg: 'bg-red-950/80 border-red-800 text-red-300',
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
      dayCamera: '1920×1080p digital low latency sensor',
      nightCamera: '640×512p radiometric thermal terminal sensor',
      guidance: 'Operator in the loop with GNSS waypoint fallback',
      datalink: 'Encrypted low latency RF terminal video & telemetry link',
      launch: 'VTOL, rapid field deployment in under 5 minutes',
      operatingTemp: '−20 °C to +60 °C',
    },
    highlights: [
      'Configurable strike payload up to 5 kg for armored & fortified assets',
      'Encrypted frequency hopping datalink resistant to tactical jamming',
      'Dual day and thermal seeker options for night and all weather engagements',
      'Ruggedized VTOL setup requiring zero runway infrastructure',
    ],
  },
  {
    id: 'scout-x',
    name: 'SCOUT X',
    fleetTag: 'FLEET 02',
    titleMain: 'SCOUT',
    titleAccent: 'X',
    category: 'isr',
    categoryLabel: 'Persistent ISR Quadcopter',
    roleBadge: 'PERSISTENT BORDER ISR',
    tagline: 'GNSS denied multi mission border surveillance and route reconnaissance.',
    description:
      'A persistent quadcopter platform delivering real time border surveillance, route reconnaissance, and counter infiltration intelligence with dual mode free flight and tethered power station operations.',
    image: '/images/products/scout-x.png',
    video360: '/video/products/scout-x-360.mp4',
    gallery: [
      '/images/products/scout-x.png',
    ],
    accentTheme: {
      tagColor: 'text-red-400',
      accentWordColor: 'text-red-500',
      glowBg: 'rgba(239, 68, 68, 0.35)',
      borderColor: 'border-red-500/40 hover:border-red-400',
      cardBg: 'from-[#1c0a0f] via-[#10080d] to-[#070709]',
      btnHover: 'group-hover:border-red-500 group-hover:bg-red-600',
      dotBg: 'bg-red-500',
      pillBg: 'bg-red-950/80 border-red-800 text-red-300',
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
      payload: '1.5 to 2 kg stabilized dual sensor gimbal turret',
      altitude: 'Up to 5,000 m AMSL service ceiling',
      standards: 'MIL-STD-810G • IP67 All Weather Sealed',
      dayCamera: '1920×1080p baseline; 2K/4K 30× optical zoom gimbal',
      nightCamera: '640×512 radiometric thermal camera with geotagging',
      guidance: 'Optical flow and GNSS dual mode navigation in denied zones',
      datalink: 'AES-256 encrypted telemetry and high definition video link',
      launch: 'Instant VTOL deployment from backpack or tactical vehicle',
      operatingTemp: '−20 °C to +55 °C',
    },
    highlights: [
      'Dual mode free flight & continuous 24-hour tethered station',
      '30× optical zoom with real time target coordinate geotagging',
      'Autonomous patrol grids with dynamic obstacle avoidance',
      'IP67 rated for harsh rain, desert sand, and high altitude border snow',
    ],
  },
  {
    id: 'aeron-a1',
    name: 'AERON A1',
    fleetTag: 'FLEET 03',
    titleMain: 'AERON',
    titleAccent: 'A1',
    category: 'isr',
    categoryLabel: 'Hybrid VTOL MALE Platform',
    roleBadge: 'LONG ENDURANCE VTOL',
    tagline: 'Runway independent strategic surveillance and tactical communications relay.',
    description:
      'Heavy-duty hybrid-electric VTOL aircraft designed for high altitude border surveillance, tactical communications relay, and persistent multi sensor intelligence without requiring runways.',
    image: '/images/products/aeron-a1.png',
    video360: '/video/products/aeron-360.mp4',
    gallery: [
      '/images/products/aeron-a1.png',
    ],
    accentTheme: {
      tagColor: 'text-red-400',
      accentWordColor: 'text-white',
      glowBg: 'rgba(220, 38, 38, 0.35)',
      borderColor: 'border-red-500/40 hover:border-red-400',
      cardBg: 'from-[#0a0d0e] via-[#0d0d10] to-[#0a0d0e]',
      btnHover: 'group-hover:border-red-500 group-hover:bg-red-600',
      dotBg: 'bg-red-500',
      pillBg: 'bg-red-950/80 border-red-800 text-red-300',
    },
    keySpecs: [
      { label: 'RANGE', value: '50 to 100 km' },
      { label: 'ENDURANCE', value: 'Up to 120 min' },
      { label: 'ALTITUDE', value: '6,500 m AMSL' },
      { label: 'CONFIGURATION', value: 'Zero Runway VTOL' },
    ],
    specs: {
      platformType: 'VTOL Hybrid Fixed-Wing ISR Aircraft',
      range: '50 km standard (extendable to 100+ km line of sight)',
      speed: 'Cruise 110 km/h • Sprint 160 km/h',
      endurance: 'Up to 120 minutes continuous flight envelope',
      payload: 'Up to 5 kg multi sensor gyro stabilized gimbal payload',
      altitude: 'Service ceiling up to 6,500 m AMSL',
      standards: 'MIL-STD-461 • MIL-STD-810H',
      dayCamera: '1920×1080p baseline; 2K/4K stabilized dual sensor gimbal',
      nightCamera: '640×512p cooled thermal camera with laser rangefinder',
      guidance: 'Triple-redundant autonomous flight controller with INS/GNSS',
      datalink: 'Encrypted C-band line of sight & SATCOM capable link',
      launch: 'Zero runway autonomous VTOL takeoff and transition',
      operatingTemp: '−30 °C to +50 °C',
    },
    highlights: [
      'Runway independent operations in mountainous LAC and border areas',
      'Co-mounted laser rangefinder and automated target geo tracking',
      'Hybrid propulsion with automatic battery failover safety',
      'Long range 50 to 100 km command radius for strategic forward awareness',
    ],
  },
  {
    id: 'doom-mk1',
    name: 'DOOM MK1',
    fleetTag: 'FLEET 04',
    titleMain: 'DOOM',
    titleAccent: 'MK1',
    category: 'cuas',
    categoryLabel: 'Short Range Surface to Air Missile',
    roleBadge: 'SURFACE TO AIR DEFENCE',
    tagline: 'Kinetic neutralizer engineered for rapid defeat of UAVs and loitering munitions.',
    description:
      'An indigenous short range surface to air missile system engineered for rapid response and battlefield precision air defence against enemy drone swarms, loitering munitions, and low-flying aerial threats.',
    image: '/images/products/doom-mk1.png',
    video360: '/video/products/doom-mk1-360.mp4',
    gallery: [
      '/images/products/doom-mk1.png',
    ],
    accentTheme: {
      tagColor: 'text-amber-400',
      accentWordColor: 'text-amber-400',
      glowBg: 'rgba(245, 158, 11, 0.35)',
      borderColor: 'border-amber-500/40 hover:border-amber-400',
      cardBg: 'from-[#1c1206] via-[#120c06] to-[#090705]',
      btnHover: 'group-hover:border-amber-500 group-hover:bg-amber-600',
      dotBg: 'bg-amber-400',
      pillBg: 'bg-amber-950/80 border-amber-800 text-amber-300',
    },
    keySpecs: [
      { label: 'ENGAGEMENT', value: '2 to 5 km' },
      { label: 'ALTITUDE', value: '50 to 5,000 m' },
      { label: 'ACCURACY', value: 'CEP < 2 m' },
      { label: 'PROPULSION', value: 'Solid Rocket' },
    ],
    specs: {
      platformType: 'Short Range Surface to Air Missile (SAM)',
      range: '2 to 5 km (Extended short range air defence envelope)',
      speed: 'Supersonic intercept sprint capability',
      endurance: 'Rapid engagement cycle (reaction time < 3 seconds)',
      payload: 'High fragmentation proximity & impact kinetic warhead',
      altitude: 'Engagement ceiling: 50 m to 5,000 m AMSL',
      standards: 'MIL-STD-810G • Sealed All Weather Launch Canister',
      guidance: 'Integrated optical & RF terminal guidance seeker',
      launch: 'Multi-canister launcher vehicle or hardened static station',
      operatingTemp: '−25 °C to +55 °C',
    },
    highlights: [
      'Sub 2 meter circular error probable (CEP) for guaranteed kinetic kill',
      'Optimized against low radar cross section (RCS) kamikaze drones',
      'Solid-propellant rapid-ignition rocket motor with instant boost',
      'Integrates into networked battlefield air defence command grids',
    ],
  },
  {
    id: 'razor-ofc',
    name: 'SAG RAZOR OFC (Fiber Optic FPV)',
    fleetTag: 'FLEET 05',
    titleMain: 'RAZOR',
    titleAccent: 'OFC',
    category: 'strike',
    categoryLabel: 'Fiber Optic Guided FPV',
    roleBadge: '100% UNJAMMABLE TETHER',
    tagline: 'Zero RF emission physical fiber datalink for contested EW environments.',
    description:
      'Engineered for absolute survivability against hostile electronic warfare. Deploying a high tensile microfiber cable spool during flight completely eliminates RF jamming, spoofing, and direction finding while streaming uncompressed lossless 1080p video.',
    image: '/images/products/razor-ofc-1.png',
    gallery: [
      '/images/products/razor-ofc-1.png',
      '/images/fiber-optic-fpv-drone.jpg',
      '/images/fiber-optic-fpv-drone-flight.webp',
      '/images/fiber-optic-fpv-drone-alt.jpg',
    ],
    accentTheme: {
      tagColor: 'text-red-400',
      accentWordColor: 'text-red-500',
      glowBg: 'rgba(239, 68, 68, 0.35)',
      borderColor: 'border-red-500/40 hover:border-red-400',
      cardBg: 'from-[#1c0a0f] via-[#10080d] to-[#070709]',
      btnHover: 'group-hover:border-red-500 group-hover:bg-red-600',
      dotBg: 'bg-red-500',
      pillBg: 'bg-red-950/80 border-red-800 text-red-300',
    },
    keySpecs: [
      { label: 'FIBER SPOOL', value: 'Up to 10 km' },
      { label: 'ENDURANCE', value: 'Up to 50 min' },
      { label: 'RF SIGNATURE', value: 'Zero Emission' },
      { label: 'JAMMING IMMUNITY', value: '100% EW Proof' },
    ],
    specs: {
      platformType: 'Fiber Optic Guided FPV Combat Drone',
      range: 'Fiber spool length up to 10 km (deployable in-flight)',
      speed: 'Sprint 120 km/h • Cruise 80 km/h',
      endurance: 'Up to 50 minutes',
      payload: 'High-explosive warhead + terminal precision seeker',
      altitude: 'Up to 5,000 m AMSL',
      standards: 'Zero RF Signature • High Security EW Immunity',
      dayCamera: 'Uncompressed real time lossless 1080p digital feed',
      nightCamera: 'Onboard day/thermal terminal sensor',
      guidance: 'Physical optical wire guidance (Zero electromagnetic emissions)',
      datalink: 'Microfiber optical cable (100% immune to EW jammers)',
      launch: 'VTOL, compact field deployment in under 5 minutes',
      operatingTemp: '−20 °C to +60 °C',
    },
    highlights: [
      'Completely undetectable by electronic surveillance measures (ESM)',
      '100% immune to commercial and military radio frequency jamming',
      'Pristine crystal clear 1080p video without static, snow, or signal drop',
      'Defeats active vehicle soft-kill electronic countermeasures',
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
    roleBadge: 'KINETIC CUAS INTERCEPTOR',
    tagline: 'High speed autonomous VTOL interceptor designed to hunt and neutralize hostile drones.',
    description:
      'Counter Drone Interceptor UAV technology for mission-critical security. Designed to launch instantly and neutralize incoming enemy loitering munitions, FPV strikers, and reconnaissance UAVs through AI-based optical tracking and proximity detonation.',
    image: '/images/products/sag-velocity.png',
    gallery: [
      '/images/products/sag-velocity.png',
    ],
    accentTheme: {
      tagColor: 'text-slate-300',
      accentWordColor: 'text-slate-200',
      glowBg: 'rgba(148, 163, 184, 0.35)',
      borderColor: 'border-slate-700/60 hover:border-slate-400',
      cardBg: 'from-[#151821] via-[#0d1016] to-[#08090d]',
      btnHover: 'group-hover:border-slate-400 group-hover:bg-slate-700',
      dotBg: 'bg-slate-300',
      pillBg: 'bg-slate-900 border-slate-700 text-slate-300',
    },
    keySpecs: [
      { label: 'TAKEOFF WEIGHT', value: '5 kg' },
      { label: 'WARHEAD', value: '1 kg Proximity' },
      { label: 'TRACKING', value: 'AI Edge Optical' },
      { label: 'DEPLOYMENT', value: 'Instant VTOL' },
    ],
    specs: {
      platformType: 'Counter Drone Interceptor UAV',
      range: 'Tactical perimeter interception envelope',
      speed: 'High velocity sprint intercept profile',
      endurance: 'Optimized for high acceleration target engagement',
      payload: '1 kg Directional fragmentation warhead (Impact / Proximity)',
      altitude: 'Perimeter intercept up to 4,000 m AMSL',
      standards: 'MIL-STD-810G • Ruggedized Carbon Composite',
      guidance: 'Autonomous or Semi Autonomous AI Edge Optical Target Lock',
      datalink: 'Encrypted RF Telemetry & Secure Command Link',
      launch: 'Rapid VTOL launch tube or mobile vehicle rack',
      operatingTemp: '−20 °C to +55 °C',
    },
    highlights: [
      'Onboard AI computer vision locks onto dynamic maneuvering UAVs',
      'Dual detonation modes: precision kinetic ramming or proximity blast',
      'Lightweight 5 kg total takeoff weight for single-soldier deployment',
      'Cost effective asymmetric countermeasure against drone swarms',
    ],
  },
];

export const ProductsCatalogue: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [modalActiveImage, setModalActiveImage] = useState<string | null>(null);
  const [activeMediaModes, setActiveMediaModes] = useState<Record<string, 'image' | '360'>>({
    'razor-p1': 'image',
    'scout-x': 'image',
    'aeron-a1': 'image',
  });
  const [modalViewMode, setModalViewMode] = useState<'image' | '360'>('image');

  const handleOpenModal = (p: Product) => {
    setSelectedProduct(p);
    setModalActiveImage(p.image);
    setModalViewMode(activeMediaModes[p.id] || 'image');
  };

  const showcaseProducts = [
    {
      id: 'razor-p1',
      sysId: 'SYS 01',
      hindiName: 'रेज़र पी१',
      category: 'KAMIKAZE FPV STRIKE',
      title: 'SAG RAZOR P1',
      headline: 'Terminal kinetic precision strike in contested electromagnetic zones',
      description:
        'Indigenous FPV combat drone engineered for terminal precision strike missions, delivering rapid response, high-impact kinetic defeat of armored targets, and battlefield dominance.',
      image: '/images/products/sag-razor-p1.png',
      video360: undefined,
      specsGrid: [
        { label: 'ROLE', value: 'One-way autonomous expendable strike' },
        { label: 'PLATFORM', value: 'Ruggedized rapid deploy airframe' },
        { label: 'GUIDANCE', value: 'Encrypted FHSS anti-jamming datalink' },
        { label: 'DESIGN INTENT', value: 'Low cost, attritable, scalable sovereign production' },
      ],
      bgTheme: 'black' as const,
      imagePosition: 'left' as const,
      productRef: products.find((p) => p.id === 'razor-p1') || products[0],
    },
    {
      id: 'scout-x',
      sysId: 'SYS 02',
      hindiName: 'स्काउट एक्स',
      category: 'TACTICAL ISR QUADCOPTER',
      title: 'SCOUT X',
      headline: 'Autonomous anti-armour and ISR capability without a soldier in the line of fire',
      description:
        'A persistent quadcopter platform delivering real-time border surveillance, route reconnaissance, and counter-infiltration intelligence with dual-mode free flight and tethered power station operations.',
      image: '/images/products/scout-x.png',
      video360: '/video/products/scout-x-360.mp4',
      specsGrid: [
        { label: 'ROLE', value: 'Persistent tactical border surveillance' },
        { label: 'MOBILITY', value: 'All-terrain, GNSS-denied capable' },
        { label: 'AI CORE', value: 'Autonomous optical flow targeting and tracking' },
        { label: 'ENDURANCE', value: '90m free-flight / 24h+ tethered station' },
      ],
      bgTheme: 'white' as const,
      imagePosition: 'right' as const,
      productRef: products.find((p) => p.id === 'scout-x') || products[1],
    },
    {
      id: 'aeron-a1',
      sysId: 'SYS 03',
      hindiName: 'एरोन ए१',
      category: 'HYBRID VTOL PLATFORM',
      title: 'AERON A1',
      headline: 'Runway-independent strategic surveillance and tactical communications relay',
      description:
        'Heavy-duty hybrid-electric VTOL aircraft designed for high-altitude border surveillance, tactical communications relay, and persistent multi-sensor intelligence without requiring runways.',
      image: '/images/products/aeron-a1.png',
      video360: '/video/products/aeron-360.mp4',
      specsGrid: [
        { label: 'ROLE', value: 'Long-range persistent ISR & tactical comms relay' },
        { label: 'VARIANTS', value: 'Manual (operator in loop) and Autonomous' },
        { label: 'AI CORE', value: 'Indigenous onboard AI accelerator and tracker' },
        { label: 'OPERATING ENVIRONMENT', value: 'LAC high-altitude, GNSS-denied and EW-contested' },
      ],
      bgTheme: 'black' as const,
      imagePosition: 'left' as const,
      productRef: products.find((p) => p.id === 'aeron-a1') || products[2],
    },
  ];

  return (
    <section id="products" className="relative w-full overflow-hidden">
      {/* 3 Showcase Products with Alternating Black / White / Black Backgrounds */}
      {showcaseProducts.map((item, index) => {
        const isWhite = item.bgTheme === 'white';
        const isImageLeft = item.imagePosition === 'left';
        const currentMode = activeMediaModes[item.id] || 'image';

        return (
          <div
            key={item.id}
            className={`relative w-full py-20 sm:py-28 lg:py-32 transition-colors duration-300 ${
              isWhite
                ? 'bg-white text-neutral-900 border-y border-neutral-200'
                : 'text-slate-100 border-b border-neutral-800/80'
            }`}
            style={{
              backgroundColor: isWhite ? '#ffffff' : 'rgb(10, 13, 14)',
            }}
          >
            <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
              {/* Optional Section Header on First Product */}
              {index === 0 && (
                <div className="mb-14 sm:mb-20">
                  <ScrollReveal yOffset={15} blur={4}>
                    <div className="mb-3">
                      <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-slate-300 block">
                        SOVEREIGN DEFENCE SYSTEMS PORTFOLIO
                      </span>
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={0.1} yOffset={20}>
                    <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.95]">
                      <span className="text-white block drop-shadow-sm">MISSION READY</span>
                      <span className="text-white block drop-shadow-sm mt-1">PLATFORMS.</span>
                    </h2>
                  </ScrollReveal>
                </div>
              )}

              {/* Product 2-Column Showcase */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
                {/* Visual Viewport Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? 'order-1' : 'order-1 lg:order-2'
                  }`}
                >
                  <ScrollReveal delay={0.1} yOffset={25}>
                    {/* Tactical White Display Frame */}
                    <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] bg-white rounded-xl border border-neutral-200/90 shadow-2xl p-6 sm:p-10 flex items-center justify-center overflow-hidden group">
                      {/* Top-Left Corner Bracket & SYS ID */}
                      <div className="absolute top-4 left-4 flex items-center gap-1.5 z-20">
                        <span className="w-3.5 h-3.5 border-t-2 border-l-2 border-red-500 inline-block" />
                        <span className="text-[11px] font-mono font-bold tracking-widest text-red-600 pl-1 select-none">
                          {item.sysId}
                        </span>
                      </div>

                      {/* Top-Right Corner Bracket */}
                      <span className="absolute top-4 right-4 w-3.5 h-3.5 border-t-2 border-r-2 border-red-500 z-20" />

                      {/* Bottom-Left Corner Bracket */}
                      <span className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b-2 border-l-2 border-red-500 z-20" />

                      {/* Bottom-Right Corner Bracket & Hindi Script */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-1.5 z-20">
                        <span className="text-xs font-sans text-neutral-400 font-medium pr-1 select-none">
                          {item.hindiName}
                        </span>
                        <span className="w-3.5 h-3.5 border-b-2 border-r-2 border-red-500 inline-block" />
                      </div>

                      {/* Realistic Soft Contact Ground Shadow */}
                      <div className="absolute bottom-6 sm:bottom-8 w-4/5 h-4 bg-black/15 blur-lg rounded-full pointer-events-none" />

                      {/* Active Media: 360 Video or High-Res Image */}
                      {currentMode === '360' && item.video360 ? (
                        <div className="relative w-full h-full flex items-center justify-center z-10">
                          <video
                            src={item.video360}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-contain filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.22)]"
                          />
                          <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-black/75 text-[10px] font-mono font-bold text-red-400 flex items-center gap-1 shadow-md">
                            <RotateCw className="w-2.5 h-2.5 animate-spin" />
                            <span>360° ACTIVE</span>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain filter drop-shadow-[0_20px_35px_rgba(0,0,0,0.20)] transition-transform duration-500 group-hover:scale-105 z-10"
                        />
                      )}
                    </div>

                    {/* View Switcher Thumbnails Row */}
                    <div className="flex items-center gap-3 mt-4">
                      {/* Photo Thumbnail */}
                      <button
                        type="button"
                        onClick={() =>
                          setActiveMediaModes((prev) => ({ ...prev, [item.id]: 'image' }))
                        }
                        className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all p-1 flex items-center justify-center cursor-pointer ${
                          currentMode === 'image'
                            ? 'border-red-500 ring-2 ring-red-500/30 bg-white shadow-sm'
                            : isWhite
                            ? 'border-neutral-300 bg-neutral-100 opacity-60 hover:opacity-100'
                            : 'border-neutral-800 bg-[#12161a] opacity-60 hover:opacity-100'
                        }`}
                        title="View photo"
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain"
                        />
                      </button>

                      {/* 360 Video Thumbnail (if present) */}
                      {item.video360 && (
                        <button
                          type="button"
                          onClick={() =>
                            setActiveMediaModes((prev) => ({ ...prev, [item.id]: '360' }))
                          }
                          className={`relative w-20 h-16 sm:w-24 sm:h-20 rounded-lg overflow-hidden border-2 transition-all p-1 flex flex-col items-center justify-center cursor-pointer ${
                            currentMode === '360'
                              ? 'border-red-500 ring-2 ring-red-500/30 bg-white shadow-sm'
                              : isWhite
                              ? 'border-neutral-300 bg-neutral-100 opacity-60 hover:opacity-100'
                              : 'border-neutral-800 bg-[#12161a] opacity-60 hover:opacity-100'
                          }`}
                          title="View 360 rotation"
                        >
                          <RotateCw
                            className={`w-5 h-5 ${
                              currentMode === '360'
                                ? 'text-red-500 animate-spin'
                                : 'text-neutral-400'
                            }`}
                            style={{ animationDuration: '6s' }}
                          />
                          <span
                            className={`text-[9px] font-mono font-bold mt-1 tracking-wider ${
                              currentMode === '360' ? 'text-red-500' : 'text-neutral-400'
                            }`}
                          >
                            360° VIEW
                          </span>
                        </button>
                      )}
                    </div>
                  </ScrollReveal>
                </div>

                {/* Details Column */}
                <div
                  className={`lg:col-span-6 flex flex-col justify-between ${
                    isImageLeft ? 'order-2' : 'order-2 lg:order-1'
                  }`}
                >
                  <ScrollReveal delay={0.15} yOffset={25}>
                    {/* Category Label with Tactical Reticle Icon */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-red-500 text-xs">⌖</span>
                      <span
                        className={`font-mono text-xs font-bold tracking-[0.25em] uppercase ${
                          isWhite ? 'text-red-600' : 'text-red-500'
                        }`}
                      >
                        {item.category}
                      </span>
                    </div>

                    {/* Massive Bold Platform Title + Hindi Script */}
                    <div className="flex items-baseline gap-3 sm:gap-4 flex-wrap">
                      <h3
                        className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-none ${
                          isWhite ? 'text-neutral-950' : 'text-white'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <span
                        className={`text-xl sm:text-2xl font-sans font-medium ${
                          isWhite ? 'text-red-600' : 'text-red-500'
                        }`}
                      >
                        {item.hindiName}
                      </span>
                    </div>

                    {/* Headline */}
                    <h4
                      className={`text-xl sm:text-2xl font-bold leading-snug mt-4 ${
                        isWhite ? 'text-neutral-900' : 'text-white'
                      }`}
                    >
                      {item.headline}
                    </h4>

                    {/* Platform Description */}
                    <p
                      className={`text-sm sm:text-base leading-relaxed mt-4 max-w-2xl ${
                        isWhite ? 'text-neutral-600' : 'text-neutral-400'
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* 2x2 Tactical Specification Grid */}
                    <div
                      className={`grid grid-cols-1 sm:grid-cols-2 gap-px mt-8 ${
                        isWhite
                          ? 'bg-neutral-300 border border-neutral-300'
                          : 'bg-neutral-800 border border-neutral-800'
                      }`}
                    >
                      {item.specsGrid.map((spec, sIdx) => (
                        <div
                          key={sIdx}
                          className={`p-4 sm:p-5 ${
                            isWhite ? 'bg-[#fcfcfc]' : 'bg-[#0a0d0e]'
                          }`}
                        >
                          <span
                            className={`text-[10px] sm:text-[11px] font-mono uppercase tracking-widest block font-bold ${
                              isWhite ? 'text-neutral-500' : 'text-neutral-400'
                            }`}
                          >
                            {spec.label}
                          </span>
                          <span
                            className={`text-sm sm:text-base font-bold block mt-1.5 leading-snug ${
                              isWhite ? 'text-neutral-950' : 'text-white'
                            }`}
                          >
                            {spec.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap items-center gap-4 mt-8">
                      <button
                        type="button"
                        onClick={() => handleOpenModal(item.productRef)}
                        className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white font-mono font-bold text-xs tracking-wider uppercase px-7 py-3.5 transition-all shadow-md shadow-red-600/25 cursor-pointer"
                      >
                        <span>Full dossier</span>
                        <span>→</span>
                      </button>
                      <a
                        href="#contact"
                        className={`inline-flex items-center font-mono font-semibold text-xs tracking-wider uppercase px-7 py-3.5 transition-all border cursor-pointer ${
                          isWhite
                            ? 'border-neutral-300 hover:border-neutral-900 text-neutral-900'
                            : 'border-neutral-700 hover:border-white text-white'
                        }`}
                      >
                        Request specs
                      </a>
                    </div>
                  </ScrollReveal>
                </div>
              </div>

              {/* Bottom Explore More CTA on Last Product */}
              {index === showcaseProducts.length - 1 && (
                <div className="flex justify-end mt-12 sm:mt-16">
                  <ScrollReveal delay={0.2} yOffset={20}>
                    <a
                      href="/products"
                      className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full font-mono text-xs sm:text-sm font-bold tracking-wider uppercase border-2 border-red-500 text-white hover:bg-red-600 bg-neutral-900/90 backdrop-blur-md transition-all duration-300 shadow-md shadow-red-600/20 hover:shadow-lg hover:shadow-red-600/40 hover:scale-105 group cursor-pointer"
                    >
                      <span>Explore More Systems</span>
                      <ArrowRight className="w-4 h-4 text-red-400 group-hover:text-white group-hover:translate-x-1.5 transition-transform duration-300" />
                    </a>
                  </ScrollReveal>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Technical Datasheet Modal (High-Tech, Clean, Tactical Dark) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#0d0d10] rounded-3xl shadow-2xl border border-neutral-800 overflow-hidden flex flex-col text-slate-100">
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-neutral-800 flex items-center justify-between bg-[#121217]">
              <div className="flex items-center gap-3">
                <span className={`w-2.5 h-2.5 rounded-full ${selectedProduct.accentTheme.dotBg} animate-pulse`} />
                <div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold ${selectedProduct.accentTheme.tagColor}`}>
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
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Product Gallery Switcher */}
              <div>
                {/* 360 View / Photo Tab Toggle if video360 exists */}
                {selectedProduct.video360 && (
                  <div className="flex items-center gap-2 mb-3">
                    <button
                      type="button"
                      onClick={() => setModalViewMode('image')}
                      className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                        modalViewMode === 'image'
                          ? 'bg-neutral-800 text-white border border-neutral-700 shadow-xs'
                          : 'text-slate-400 hover:text-white bg-neutral-900/60'
                      }`}
                    >
                      Product Picture
                    </button>
                    <button
                      type="button"
                      onClick={() => setModalViewMode('360')}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold uppercase transition-all cursor-pointer ${
                        modalViewMode === '360'
                          ? 'bg-red-600 text-white shadow-md shadow-red-600/30'
                          : 'text-slate-400 hover:text-white bg-neutral-900/60'
                      }`}
                    >
                      <RotateCw className="w-3.5 h-3.5" />
                      <span>360° Interactive View</span>
                    </button>
                  </div>
                )}

                <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-black/70 border border-neutral-800 shadow-inner mb-3 flex items-center justify-center">
                  {modalViewMode === '360' && selectedProduct.video360 ? (
                    <video
                      src={selectedProduct.video360}
                      autoPlay
                      loop
                      muted
                      controls
                      playsInline
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <img
                      src={modalActiveImage || selectedProduct.image}
                      alt={selectedProduct.name}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('scout-x.png') && target.src.includes('scoutx.png')) {
                          target.src = '/images/products/scout-x.png';
                        }
                      }}
                      className="w-full h-full object-contain p-4"
                    />
                  )}
                  <div className={`absolute top-3 left-3 text-white text-[10px] font-mono font-bold px-3 py-1 rounded-full uppercase shadow-xs ${selectedProduct.accentTheme.dotBg}`}>
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
                            ? 'border-red-500 ring-2 ring-red-500/40'
                            : 'border-neutral-800 opacity-70 hover:opacity-100 bg-[#121217]'
                        }`}
                      >
                        <img src={imgSrc} alt="view" className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-military mb-2">
                  MISSION PROFILE &amp; OPERATIONAL PURPOSE
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed bg-neutral-900/60 p-4 rounded-xl border border-neutral-800">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Comprehensive Specs Grid */}
              <div>
                <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-military mb-3">
                  PERFORMANCE ENVELOPE &amp; SPECIFICATIONS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">PLATFORM TYPE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.platformType}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">OPERATIONAL RANGE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.range}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">SPEED PROFILE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.speed}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">FLIGHT ENDURANCE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.endurance}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">PAYLOAD CAPACITY</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.payload}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">OPERATIONAL ALTITUDE</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.altitude}</span>
                  </div>
                  <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                    <span className="text-slate-400 block text-[10px]">RUGGEDIZATION &amp; EMI/EMC</span>
                    <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.standards}</span>
                  </div>
                  {selectedProduct.specs.datalink && (
                    <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                      <span className="text-slate-400 block text-[10px]">DATALINK &amp; ENCRYPTION</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.datalink}</span>
                    </div>
                  )}
                  {selectedProduct.specs.guidance && (
                    <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                      <span className="text-slate-400 block text-[10px]">GUIDANCE MODE</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.guidance}</span>
                    </div>
                  )}
                  {selectedProduct.specs.dayCamera && (
                    <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                      <span className="text-slate-400 block text-[10px]">DAY CAMERA</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.dayCamera}</span>
                    </div>
                  )}
                  {selectedProduct.specs.nightCamera && (
                    <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                      <span className="text-slate-400 block text-[10px]">THERMAL / NIGHT CAMERA</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.nightCamera}</span>
                    </div>
                  )}
                  {selectedProduct.specs.operatingTemp && (
                    <div className="p-3 bg-neutral-900/60 border border-neutral-800 rounded-xl">
                      <span className="text-slate-400 block text-[10px]">OPERATING TEMPERATURE</span>
                      <span className="font-bold text-white block mt-0.5">{selectedProduct.specs.operatingTemp}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xs font-mono font-bold text-red-500 uppercase tracking-military mb-3">
                  KEY COMBAT HIGHLIGHTS
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProduct.highlights.map((hl, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800">
                      <CheckCircle2 className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-neutral-800 bg-[#121217] flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs font-mono text-slate-400">
                SOVEREIGN INDIGENOUS PLATFORM // CLASSIFIED BRIEFINGS ON DEMAND
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={() => setSelectedProduct(null)}
                  className={`text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-all shadow-md ${selectedProduct.accentTheme.dotBg} hover:opacity-90`}
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
