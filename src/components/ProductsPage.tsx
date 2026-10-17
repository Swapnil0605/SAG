import React, { useState, useEffect } from 'react';
import {
  Sparkles,
} from 'lucide-react';
import { ScrollReveal, Perspective3DReveal } from './effects/TextScrollEffects';
import ProductDetailPage from './ProductDetailPage';

export interface FullProductItem {
  id: string;
  num: string;
  title: string;
  category: string;
  inDevelopment?: boolean;
  developmentBadgeText?: string;
  desc: string;
  whereUsedTitle?: string;
  whereUsedNote?: string;
  whereUsedTags?: string[];
  image: string;
  categoryDomain: 'strike' | 'air-defence' | 'cuas' | 'isr' | 'ground-maritime' | 'logistics';
  specs?: {
    label: string;
    value: string;
  }[];
  detailedOverview?: string;
}

export const ALL_PRODUCTS: FullProductItem[] = [
  {
    id: 'yamraj',
    num: '01',
    title: 'PROJECT YAMRAJ',
    category: 'FLAGSHIP · STRIKE',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Indigenous supersonic loitering munition — our flagship programme.',
    whereUsedNote: 'Mission profiles shared on request.',
    image: '/images/hero/hero-yamraj.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'SPEED CLASS', value: 'Mach 1+ Supersonic' },
      { label: 'PROPULSION', value: 'Rotating Detonation Engine (RDE)' },
      { label: 'DESIGN ARCHITECTURE', value: 'All-Indian Sovereign IP' },
      { label: 'MISSION PROFILE', value: 'Rapid Standoff Penetration & Strike' },
    ],
    detailedOverview:
      'Engineered to decisively outpace battlefield counter-manoeuvres. Project Yamraj combines sovereign aerostructures, autonomous terminal homing, and groundbreaking propulsion to reach tactical high-value targets before they can relocate.',
  },
  {
    id: 'doom-mk1',
    num: '02',
    title: 'DOOM MK-1',
    category: 'AIR DEFENCE',
    inDevelopment: false,
    desc: 'Short-range air-defence missile on a pickup-mounted launcher.',
    whereUsedTags: [
      'Air base defence',
      'Forward post protection',
      'Convoy protection',
      'Critical infrastructure',
    ],
    image: '/images/products/DOOM MK-1.webp',
    categoryDomain: 'air-defence',
    specs: [
      { label: 'ENGAGEMENT RANGE', value: '2–5 km' },
      { label: 'REACTION SPEED', value: '<7 seconds from detection to launch' },
      { label: 'ENGAGEMENT CEILING', value: 'Up to 5,000 m' },
      { label: 'PLATFORM MOBILITY', value: 'Pickup-Mounted Multi-Canister' },
    ],
    detailedOverview:
      'A rapidly deployable tactical air-defence missile system designed for frontline motorized columns and isolated airbases. Defends against hostile loitering munitions, cruise missiles, and low-flying strike drones with sub-7-second salvo firing.',
  },
  {
    id: 'sag-kavach',
    num: '03',
    title: 'SAG KAVACH',
    category: 'COUNTER-UAS · CONVOY & SITE DEFENCE',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Layered counter-drone shield for convoys and air-defence sites.',
    whereUsedTags: [
      'Convoy protection',
      'Transport truck retrofit',
      'Air-defence site protection',
      'Fibre-optic & RF-silent drones',
    ],
    image: '/images/products/SAG KAVACH.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'SOFT-KILL DAZZLER', value: 'Directional Optical Blinder out to 1 km' },
      { label: 'HARD-KILL NETS', value: '12 / 24 Canister Pneumatic Net Matrix' },
      { label: 'THREAT MITIGATION', value: 'Effective against RF-silent and Fibre-Optic FPVs' },
      { label: 'VEHICLE INTEGRATION', value: 'Retrofit Kit for Army 4x4 & 6x6 Logistics Trucks' },
    ],
    detailedOverview:
      'Traditional radio-frequency jammers fail completely against fibre-optic and autonomous optical drones. SAG Kavach provides a decisive dual-tier kinetic and optical countermeasure suite that verifies target neutralization in real time.',
  },
  {
    id: 'sag-nirman',
    num: '04',
    title: 'SAG NIRMAN',
    category: 'BATTLEFIELD MANUFACTURING',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'A drone factory and spares workshop that moves with the army.',
    whereUsedTags: [
      'Forward drone production',
      'Crash repair',
      'Spares for legacy vehicles',
      'Dispersed production',
    ],
    image: '/images/products/SAG NIRMAN.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'CONTAINER FOOTPRINT', value: '20-ft ISO Ruggedized Deployable Shelter' },
      { label: 'PRODUCTION CAPACITY', value: '30+ Tactical FPVs assembled/repaired per day' },
      { label: 'SETUP TIME', value: '<2 hours upon arrival' },
      { label: 'INDEPENDENT POWER', value: 'On-board Generator & Battery Bank' },
    ],
    detailedOverview:
      'Solves the crippling latency of rear-area supply chains. Nirman places automated composite fabrication, carbon-fiber assembly, electronic firmware flashing, and airframe repair directly with forward combat units.',
  },
  {
    id: 'sag-vajra-ugv',
    num: '05',
    title: 'SAG VAJRA UGV',
    category: 'UNMANNED GROUND SYSTEMS',
    inDevelopment: true,
    developmentBadgeText: 'AIRBASE MODULES IN DEVELOPMENT',
    desc: 'Modular autonomous ground robot for the front line and the airbase.',
    whereUsedTags: [
      'Airbase munitions transfer',
      'Weapon-loading assist',
      'Runway FOD & perimeter patrol',
      'Casualty evacuation',
    ],
    image: '/images/products/SAG VAJRA UGV.webp',
    categoryDomain: 'ground-maritime',
    specs: [
      { label: 'DRIVE CONFIGURATION', value: '4x4 High-Torque All-Electric Skid-Steer' },
      { label: 'PAYLOAD CAPACITY', value: 'Up to 400 kg combat equipment / munitions' },
      { label: 'NAVIGATION MODE', value: 'GPS-Denied Autonomous LiDAR SLAM & Follow-Me' },
      { label: 'MISSION RUNTIME', value: '8+ hours continuous operational endurance' },
    ],
    detailedOverview:
      'Replaces vulnerable personnel in hazardous zones. Vajra accelerates airbase sortie turnaround times through automated munitions carting and patrols high-risk forward perimeters under zero-visibility conditions.',
  },
  {
    id: 'razor-fpv-series',
    num: '06',
    title: 'RAZOR FPV SERIES',
    category: 'FPV · STRIKE & ISR',
    inDevelopment: false,
    desc: '10, 15 and 18-inch FPV drones for ISR, kamikaze strike and mortar dropping.',
    whereUsedTags: [
      'ISR',
      'Kamikaze strike',
      'Mortar dropping',
      'Counter-drone net launch',
    ],
    image: '/images/products/RAZOR FPV SERIES.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'PROP CHASSIS', value: '10-inch, 15-inch, 18-inch Reinforced Carbon' },
      { label: 'SPRINT VELOCITY', value: '140+ km/h terminal attack speed' },
      { label: 'WARHEAD LOAD', value: '1.5 kg to 4.5 kg shaped charges / mortar rounds' },
      { label: 'COMMAND LINK', value: 'Multi-Band FHSS Anti-Jam RF Transceiver' },
    ],
    detailedOverview:
      'Field-hardened multi-role FPV strike systems engineered for surgical tactical effect. Capable of penetrating reinforced bunkers, neutralizing armored vehicle engine decks, and conducting precision payload delivery.',
  },
  {
    id: 'sag-net-catcher',
    num: '07',
    title: 'SAG NET CATCHER',
    category: 'COUNTER-UAS',
    inDevelopment: false,
    desc: 'Handheld anti-drone net gun.',
    whereUsedTags: [
      'Military bases',
      'Critical infrastructure',
      'Airports',
      'Public events',
    ],
    image: '/images/products/SAG NET CATCHER.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'INTERCEPTION DISTANCE', value: '30 m to 60 m direct line-of-fire' },
      { label: 'NET SPAN', value: '3.5 m high-tensile Kevlar/polymer mesh' },
      { label: 'PROPULSION', value: 'Quick-change CO2 high-pressure pneumatic cartridge' },
      { label: 'TARGET DEPLOYMENT', value: 'Single soldier, point-and-shoot operation' },
    ],
    detailedOverview:
      'Immediate kinetic capture without explosive fragmentation risk. Captures rogue quadcopters intact for forensic data extraction, preventing debris damage over crowded airfields, ammunition dumps, and command installations.',
  },
  {
    id: 'sag-prahari',
    num: '08',
    title: 'SAG PRAHARI',
    category: 'COUNTER-UAS · DETECTION',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Body-worn drone detection for the squad.',
    whereUsedTags: [
      'Counter-terror operations',
      'Forward posts & pickets',
      'Patrols & convoys',
      'Mountain & urban terrain',
    ],
    image: '/images/products/SAG PRAHARI.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'DETECTION RANGE', value: 'Up to 2.5 km early warning horizon' },
      { label: 'SPECTRUM COVERAGE', value: '400 MHz to 6.0 GHz continuous RF sweep' },
      { label: 'OPERATOR WEIGHT', value: '<650 g MOLLE vest mountable' },
      { label: 'TACTICAL ALERT', value: 'Silent haptic vibration, LED display, headset audio' },
    ],
    detailedOverview:
      'Ensures foot patrols and forward observation posts are never ambushed by silent hostile drones. Constantly sniffs ambient radio control frequencies, providing directional azimuth warning to the squad commander.',
  },
  {
    id: 'scout-x',
    num: '09',
    title: 'SCOUT-X',
    category: 'INTELLIGENCE & SURVEILLANCE',
    inDevelopment: false,
    desc: 'Persistent ISR quadcopter, free or tethered.',
    whereUsedTags: [
      'Border surveillance',
      'Counter-infiltration',
      'Route reconnaissance',
      'Post overwatch',
    ],
    image: '/images/products/SCOUT-X.webp',
    categoryDomain: 'isr',
    specs: [
      { label: 'LOITER TIME', value: '55 min (Untethered) / 24+ Hours (Tethered Micro-Cable)' },
      { label: 'OPTICAL GIMBAL', value: 'Dual EO/MWIR Thermal Camera with 30x Optical Zoom' },
      { label: 'TELEMETRY RADIUS', value: '15 km Line-of-Sight encrypted datalink' },
      { label: 'ALL-WEATHER CAPABILITY', value: 'IP55 Certified, withstands 45 km/h gusts' },
    ],
    detailedOverview:
      'A versatile multi-domain tactical eyes-in-the-sky platform. Swaps effortlessly between free-roaming reconnaissance missions and permanent tethered high-altitude post overwatch.',
  },
  {
    id: 'sag-vtol-250',
    num: '10',
    title: 'SAG VTOL-250',
    category: 'INTELLIGENCE & SURVEILLANCE',
    inDevelopment: false,
    desc: '2.5 m electric fixed-wing VTOL for long-endurance ISR.',
    whereUsedTags: [
      'Wide-area border surveillance',
      'Standoff ISR',
      'Coastal patrol',
      'Convoy route overwatch',
    ],
    image: '/images/products/SAG VTOL-250.webp',
    categoryDomain: 'isr',
    specs: [
      { label: 'WINGSPAN', value: '2.5 m Aerodynamic Carbon-Composite Airframe' },
      { label: 'FLIGHT DURATION', value: '180 minutes clean all-electric cruise' },
      { label: 'OPERATIONAL RANGE', value: '60 km radius from Ground Control Station' },
      { label: 'LAUNCH & RECOVERY', value: '100% Vertical Take-off & Landing (no runway required)' },
    ],
    detailedOverview:
      'Blends the hovering flexibility of a multi-rotor with the high-speed transit and efficiency of a fixed-wing aircraft. Dispatched directly from unprepared mountain clearings or ship helipads for extensive reconnaissance.',
  },
  {
    id: 'hanuman-100',
    num: '11',
    title: 'HANUMAN 100',
    category: 'LOGISTICS',
    inDevelopment: false,
    desc: 'Heavy-lift logistics UAV.',
    whereUsedTags: [
      'High-altitude post resupply',
      'Forward outpost logistics',
      'Medical supply',
      'Humanitarian relief',
    ],
    image: '/images/products/HANUMAN 100.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'USEFUL LOAD', value: 'Up to 100 kg critical cargo' },
      { label: 'SERVICE CEILING', value: '5,500 m Above Sea Level (Himalayan proven)' },
      { label: 'TRANSIT RADIUS', value: '40 km round-trip combat radius' },
      { label: 'CARGO MECHANISM', value: 'Winch lowering / quick-release secure payload bay' },
    ],
    detailedOverview:
      'Lifeline logistics for snowbound mountain pickets and forward defence detachments. Keeps mountain troops supplied with ammunition, fresh batteries, blood packs, and critical rations without risking helicopter crews.',
  },
  {
    id: 'razor-ofc',
    num: '12',
    title: 'RAZOR OFC',
    category: 'MISSION MODULE',
    inDevelopment: false,
    desc: 'Fibre-optic control module with 3–30 km spools.',
    whereUsedTags: [
      'Counter-EW missions',
      'Urban reconnaissance',
      'Tunnel & underground',
      'Border & perimeter',
    ],
    image: '/images/products/RAZOR OFC.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'OPTICAL TETHER', value: 'Ultra-thin 3 km to 30 km high-speed micro-spool' },
      { label: 'ELECTRONIC HARDENING', value: '100% unjammable — zero RF emissions' },
      { label: 'VIDEO LATENCY', value: 'Near-zero millisecond 4K crystal-clear feed' },
      { label: 'COMPATIBILITY', value: 'Integrates on Razor FPV chassis & specialized rigs' },
    ],
    detailedOverview:
      'Eliminates the electromagnetic footprint entirely. Hostile radio frequency jammers and spoofers have zero physical effect on light traveling through glass, guaranteeing full operator command right up to impact.',
  },
  {
    id: 'swarm-bee',
    num: '13',
    title: 'SWARM BEE',
    category: 'MISSION MODULE',
    inDevelopment: false,
    desc: 'Plug-in swarm autonomy for any SAG drone.',
    whereUsedTags: [
      'Shared targeting',
      'Area split',
      'Multi-direction strike',
    ],
    image: '/images/products/SWARM BEE.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'SWARM DENSITY', value: '8 to 64 coordinated autonomous nodes' },
      { label: 'DISTRIBUTED BRAIN', value: 'Decentralized Edge Mesh AI (no single point of failure)' },
      { label: 'DYNAMIC TASKING', value: 'Automatic threat re-allocation if a node is lost' },
      { label: 'PROTOCOL INTEGRATION', value: 'Plug-and-play on any SAG sovereign avionics system' },
    ],
    detailedOverview:
      'Overwhelms adversary air defence saturation limits. Swarm Bee turns a dispersed cluster of individual drones into a single thinking, self-coordinating tactical organism that attacks simultaneously from multiple directions.',
  },
  {
    id: 'sag-trinetra',
    num: '14',
    title: 'SAG TRINETRA',
    category: 'MARITIME · MINE COUNTERMEASURES',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Tethered mine-neutralisation ROV.',
    whereUsedTags: [
      'Harbour & port clearance',
      'Sea lane & channel clearance',
      'MCM vessels & USVs',
      'Coastal security',
    ],
    image: '/images/products/SAG TRINETRA.webp',
    categoryDomain: 'ground-maritime',
    specs: [
      { label: 'DEPTH ENVELOPE', value: 'Up to 300 m subsea operational depth' },
      { label: 'PROPULSION MATRIX', value: '6-Thruster High-Precision Vector Control' },
      { label: 'ACOUSTIC SENSING', value: 'High-Frequency Forward-Looking Imaging Sonar + 4K Low-Light' },
      { label: 'DISPOSAL CHARGE', value: 'Relocatable high-yield shaped mine disruptor' },
    ],
    detailedOverview:
      'Protects critical sea lines of communication and naval anchorages. Trinetra inspects underwater threats, confirms naval mine signatures, and neutralizes them remotely without placing human clearance divers in jeopardy.',
  },
];

interface ProductsPageProps {
  onNavigateHome?: (hash?: string) => void;
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string) => void;
}

const getProductFromHash = (): FullProductItem | null => {
  if (typeof window === 'undefined') return null;
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  if (!rawHash || rawHash === 'products' || rawHash === 'products-page') return null;
  return (
    ALL_PRODUCTS.find(
      (p) =>
        p.id === rawHash ||
        p.id === `sag-${rawHash}` ||
        rawHash === p.id.replace(/^sag-/, '') ||
        p.id.replace(/-/g, '') === rawHash.replace(/-/g, '')
    ) || null
  );
};

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigateHome,
  onNavigate,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<FullProductItem | null>(getProductFromHash);

  useEffect(() => {
    const handleHashSync = () => {
      const match = getProductFromHash();
      if (match) {
        setSelectedProduct(match);
      } else if (!window.location.hash || window.location.hash === '#products') {
        setSelectedProduct(null);
      }
    };

    window.addEventListener('hashchange', handleHashSync);
    window.addEventListener('popstate', handleHashSync);
    return () => {
      window.removeEventListener('hashchange', handleHashSync);
      window.removeEventListener('popstate', handleHashSync);
    };
  }, []);

  const handleSelectProduct = (product: FullProductItem) => {
    setSelectedProduct(product);
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', `/products#${product.id}`);
    }
  };

  // Dedicated Detailed Product Datasheet View for ANY product
  if (selectedProduct) {
    return (
      <ProductDetailPage
        initialProductId={selectedProduct.id}
        onSelectProduct={(newId) => {
          const match = ALL_PRODUCTS.find((p) => p.id === newId);
          if (match) {
            setSelectedProduct(match);
            if (typeof window !== 'undefined') {
              window.history.pushState({}, '', `/products#${match.id}`);
            }
          }
        }}
        onBack={() => {
          setSelectedProduct(null);
          if (typeof window !== 'undefined') {
            window.history.pushState({}, '', '/products');
          }
        }}
        onNavigateContact={() => {
          if (onNavigate) {
            onNavigate('contact');
          } else {
            onNavigateHome?.('contact');
          }
        }}
      />
    );
  }

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* =========================================================================
          1. HERO / PRODUCTS MASTHEAD (Clean Tactical Masthead matching site design)
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
            <span className="text-red-600 font-bold">PRODUCTS</span>
            <span className="text-neutral-400">/</span>
            <span className="text-neutral-400 hidden sm:inline">
              SOVEREIGN ARSENAL
            </span>
          </div>

          <div className="max-w-4xl">
            {/* Top Tag Kicker */}
            <ScrollReveal direction="left" distance={30} blur={4}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-[2px] bg-red-600" />
                <span className="text-xs sm:text-[13px] font-mono font-bold tracking-[0.22em] uppercase text-red-600">
                  DEFENCE SYSTEMS &amp; CAPABILITIES
                </span>
              </div>
            </ScrollReveal>

            {/* Massive Bold Heading in Caps */}
            <Perspective3DReveal
              tag="h1"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-neutral-950 leading-[1.08] mb-6"
            >
              BUILT FOR THE MISSION.
            </Perspective3DReveal>

            {/* Subtitle matching reference */}
            <ScrollReveal delay={0.15} yOffset={20}>
              <p className="text-base sm:text-lg md:text-xl text-neutral-600 font-medium leading-relaxed max-w-3xl mb-4">
                Pick a system to see where it&apos;s used, how it works and what it can do.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. COMPREHENSIVE 14-PRODUCT GRID (4 Columns on Desktop matching screenshot)
          ========================================================================= */}
      <section className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 items-stretch">
          {ALL_PRODUCTS.map((product) => {
              const isYamraj = product.id === 'yamraj';
              return (
                <div
                  key={product.id}
                  onClick={() => handleSelectProduct(product)}
                  className="group relative rounded-2xl bg-[#0f1417]/95 border border-neutral-800/80 hover:border-red-600/80 transition-all duration-300 p-4 sm:p-5 flex flex-col justify-between cursor-pointer hover:shadow-2xl hover:shadow-red-600/10 hover:-translate-y-1 select-none"
                  style={{
                    backgroundColor: '#0f1417',
                    boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
                  }}
                >
                  <div>
                    {/* Visual Media Viewport */}
                    <div
                      className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 border border-white/[0.08] ${
                        isYamraj ? 'bg-[#080d10] p-4 flex items-center justify-center' : 'bg-neutral-900'
                      }`}
                    >
                      {/* Top-Left Red Index Badge matching screenshot */}
                      <div className="absolute top-2.5 left-2.5 z-20">
                        <span className="inline-block bg-[#E5252A] text-white font-mono font-black text-xs px-2 py-0.5 rounded shadow-md tracking-wider">
                          {product.num}
                        </span>
                      </div>

                      {/* Top-Right In Development Badge */}
                      {product.inDevelopment && (
                        <div className="absolute top-2.5 right-2.5 z-20">
                          <span className="inline-block bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono font-bold text-[9px] sm:text-[10px] tracking-wider uppercase px-2 py-0.5 rounded shadow-sm">
                            {product.developmentBadgeText || 'IN DEVELOPMENT'}
                          </span>
                        </div>
                      )}

                      {/* Image Element */}
                      <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                        className={`w-full h-full transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none select-none ${
                          isYamraj ? 'object-contain' : 'object-cover'
                        }`}
                      />

                      {/* Subtle Vignette Gradient for Depth */}
                      {!isYamraj && (
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
                      )}
                    </div>

                    {/* Category Label in White */}
                    <div className="text-xs font-mono font-bold tracking-wider uppercase mb-1.5 text-white">
                      {product.category}
                    </div>

                    {/* Product Main Title */}
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white leading-tight mb-2.5">
                      {product.title}
                    </h3>

                    {/* Brief Synopsis */}
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal mb-5">
                      {product.desc}
                    </p>

                    {/* "WHERE IT'S USED" Section */}
                    <div className="mb-6 pt-3 border-t border-white/[0.08]">
                      <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-neutral-400 block mb-2.5">
                        WHERE IT&apos;S USED
                      </span>

                      {product.whereUsedNote && (
                        <p className="text-xs font-medium text-neutral-300/90 leading-relaxed italic">
                          {product.whereUsedNote}
                        </p>
                      )}

                      {product.whereUsedTags && (
                        <div className="flex flex-wrap gap-1.5">
                          {product.whereUsedTags.map((tag, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/[0.1] text-neutral-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom Action Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      className="w-full py-2.5 px-4 rounded-xl border border-neutral-700/80 hover:border-red-600 bg-white/[0.04] hover:bg-red-600 text-neutral-200 hover:text-white text-xs sm:text-sm font-bold tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-red-600/20 cursor-pointer"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-red-400 group-hover:text-white" />
                      <span>View Product</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
      </section>

    </div>
  );
};

export default ProductsPage;
