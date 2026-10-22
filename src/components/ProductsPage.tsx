import React, { useState, useEffect } from 'react';
import {
  Shield,
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
    category: 'AIR DEFENCE · SHORAD',
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
    desc: 'Layered counter-drone protection for transport convoys, air-defence sites, and critical command nodes.',
    whereUsedTags: [
      'Convoy escorts',
      'Transport truck retrofit',
      'Air-defence radar defence',
      'Command post shield',
    ],
    image: '/images/products/sag-kavach-hero.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'OPTICAL DAZZLER', value: '1 km day/thermal camera disruption' },
      { label: 'NET CAPTURE MATRIX', value: '30–150 m pneumatic capture (12 cartridges)' },
      { label: 'THREAT MITIGATION', value: 'Defeats RF-silent & fibre-optic drones' },
      { label: 'CONFIGURATIONS', value: 'Convoy Node, Truck Kit, Site Defence' },
    ],
    detailedOverview:
      'Traditional radio-frequency jammers fail completely against fibre-optic and autonomous optical drones. SAG Kavach provides a decisive dual-tier kinetic and optical countermeasure suite that verifies target neutralization in real time.',
  },
  {
    id: 'sag-nirman-army',
    num: '04',
    title: 'SAG NIRMAN ARMY',
    category: 'DEPLOYABLE MANUFACTURING · ARMY',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Forward-deployed mobile drone factory and field spares workshop in two 20-ft ISO modules.',
    whereUsedTags: [
      'Forward formations',
      'EME workshops',
      'Dispersed combat teams',
      'Field airframe repair',
    ],
    image: '/images/products/sag-nirman-army.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'FOOTPRINT', value: '2 × 20 ft ISO modules (≤10 t each)' },
      { label: 'DAILY PRODUCTION', value: '≥30 FPV/ISR quads or ≥6 fixed-wing' },
      { label: 'RAPID READINESS', value: 'First job ≤2 hours from arrival' },
      { label: 'SPARES MANUFACTURING', value: 'Scanning, CAD/CAM, metal deposition & CNC' },
    ],
    detailedOverview:
      'Reduces reliance on long logistics supply lines. Module A prints airframes and provides kit assembly, while Module B provides scan-to-part manufacturing, metal deposition, CNC finishing, and heat treatment for vehicle and legacy weapon spares.',
  },
  {
    id: 'sag-nirman-airforce',
    num: '05',
    title: 'SAG NIRMAN AIR FORCE',
    category: 'DEPLOYABLE MANUFACTURING · AIR FORCE',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Air-mobile drone factory and spares workshop for base defence drones, aerial targets, and ground equipment spares.',
    whereUsedTags: [
      'Forward air bases',
      'Base perimeter defence',
      'Aerial target training',
      'GSE support & tooling',
    ],
    image: '/images/products/sag-nirman-airforce.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'STRATEGIC AIRLIFT', value: 'C-17, IL-76, C-130J air-mobile footprint' },
      { label: 'DAILY OUTPUT', value: '≥30 interceptor/ISR quads or ≥6 targets' },
      { label: 'DEPLOYMENT TIME', value: 'First job ≤2 hours from drive-off' },
      { label: 'MAINTENANCE SUPPORT', value: 'GSE parts, tooling, brackets, adaptors' },
    ],
    detailedOverview:
      'Solves forward air base logistics bottlenecks. Produces base-defence interceptor drones, ISR quadcopters, and low-cost aerial targets on-station while providing rapid scan-to-part production of ground support equipment (GSE) maintenance spares.',
  },
  {
    id: 'sag-nirman-navy',
    num: '06',
    title: 'SAG NIRMAN NAVY',
    category: 'DEPLOYABLE MANUFACTURING · NAVY',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Ship-borne marinised drone factory and spares workshop for replenishment at sea and island bases.',
    whereUsedTags: [
      'Frontline warships',
      'Carrier battle groups',
      'Island territory bases',
      'Naval dockyards',
    ],
    image: '/images/products/sag-nirman-navy.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'SHIP MODULE SET', value: '3 × marinised 20 ft ISO modules' },
      { label: 'AT-SEA PRODUCTION', value: 'Operational up to Sea State 5' },
      { label: 'MARINE MATERIALS', value: '316L, duplex steel, Inconel 625, NAB' },
      { label: 'FLEET CAPACITY', value: '≥300 drone kits, ship-power interface' },
    ],
    detailedOverview:
      'Enables sovereign naval persistence without returning to port. Replenishes ISR, interceptor, and gunnery-target drones during long-duration sea deployments, and manufactures certified valve handwheels, pump impellers, flanges, and emergency shipboard spares.',
  },
  {
    id: 'sag-vajra-ugv',
    num: '07',
    title: 'SAG VAJRA UGV',
    category: 'UNMANNED GROUND SYSTEMS',
    inDevelopment: true,
    developmentBadgeText: 'AIRBASE MODULES IN DEVELOPMENT',
    desc: 'Modular autonomous ground robot for tactical front lines and airfield operations.',
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
    id: 'sag-razor-10',
    num: '08',
    title: 'SAG RAZOR 10',
    category: 'FPV PLATFORMS · CLOSE-RANGE STRIKE',
    inDevelopment: false,
    desc: 'A compact 10-inch FPV quadcopter for close-range strike and reconnaissance in jammed environments.',
    whereUsedTags: [
      'Anti-personnel strike',
      'Trench & bunker clearing',
      'Tactical reconnaissance',
      'Hostile vehicle ambush',
    ],
    image: '/images/products/sag-razor-10.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'OPERATIONAL RANGE', value: '10 km combat radius' },
      { label: 'FLIGHT ENDURANCE', value: 'Up to 50 min' },
      { label: 'MAXIMUM PAYLOAD', value: '1.5 kg shaped charges / ISR' },
      { label: 'ANTI-JAM SUITE', value: '4-element CRPA & Frequency Hopping' },
    ],
    detailedOverview:
      'Strike, Observe, Adapt. Rapidly deployed in under 5 minutes with modular snap-on payloads. Features add-on 4-element CRPA antenna and frequency-hopping RF datalinks to overcome intense hostile battlefield electronic warfare.',
  },
  {
    id: 'sag-razor-15',
    num: '09',
    title: 'SAG RAZOR 15',
    category: 'FPV PLATFORMS · MULTI-ROLE & CUAS',
    inDevelopment: false,
    desc: '15-inch multi-role FPV quadcopter for precision strike, reconnaissance, counter-drone net capture, and cargo.',
    whereUsedTags: [
      'Top-attack anti-armour',
      'Airborne C-UAS net capture',
      'Stabilised 4K ISR',
      'Tactical cargo resupply',
    ],
    image: '/images/products/sag-razor-15.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'OPERATIONAL RANGE', value: '15 km combat radius' },
      { label: 'FLIGHT ENDURANCE', value: '30+ min' },
      { label: 'MAXIMUM PAYLOAD', value: '3.0 kg multi-mission payload' },
      { label: 'MISSION VERSATILITY', value: 'Warheads, C-UAS Net Launcher, Cargo Pod' },
    ],
    detailedOverview:
      'Strike, Intercept, Sustain. The multi-role backbone of tactical drone formations. Fitted with anti-armour top-attack warheads or airborne net launchers to catch hostile drones in flight, with quick re-rigging for rapid cargo deliveries.',
  },
  {
    id: 'sag-razor-18',
    num: '10',
    title: 'SAG RAZOR 18',
    category: 'FPV PLATFORMS · HEAVY-LIFT STRIKE',
    inDevelopment: false,
    desc: 'Heavy-lift 18-inch FPV quadcopter carrying up to 8 kg for heavy strike, laser designation, and resupply.',
    whereUsedTags: [
      'Heavy bunker defeat',
      'Armoured column strikes',
      'Full-sensor laser designation',
      'High-altitude post resupply',
    ],
    image: '/images/products/sag-razor-18.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'OPERATIONAL RANGE', value: '20 km combat radius' },
      { label: 'USEFUL PAYLOAD', value: 'Up to 8.0 kg heavy ordnance / sensors' },
      { label: 'FLIGHT ENDURANCE', value: '30+ min' },
      { label: 'SENSOR SUITE', value: 'ISR Gimbal with Laser Range Finder' },
    ],
    detailedOverview:
      'Lift, Strike, Designate. Delivers heavy kinetic effect at standoff range. Capable of carrying tandem warheads against main battle tanks, heavy mortar payloads, or full-sensor day/thermal gimbals with laser designators for coordinated air strikes.',
  },
  {
    id: 'sag-net-catcher',
    num: '11',
    title: 'SAG NET CATCHER',
    category: 'COUNTER-UAS · AIR DEFENCE',
    inDevelopment: false,
    desc: 'Handheld rapid-response anti-drone net gun firing a 3.5 × 3.5 m capture net against low-altitude aerial threats.',
    whereUsedTags: [
      'Military bases',
      'Critical infrastructure',
      'Airports & airfields',
      'VIP & public events',
    ],
    image: '/images/products/SAG NET CATCHER.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'EFFECTIVE RANGE', value: '25 m direct line-of-fire' },
      { label: 'SYSTEM WEIGHT', value: '365 g ultra-lightweight launcher' },
      { label: 'DEPLOYMENT TIME', value: '0.2 seconds instant capture' },
      { label: 'NET SPAN', value: '3.5 m × 3.5 m high-strength mesh' },
    ],
    detailedOverview:
      'Capture, Neutralise, Analyse. Fires a high-strength kinetic net that entangles hostile drone rotors instantly. Completely non-lethal, preventing dangerous explosive collateral damage while preserving the enemy drone intact for tactical intelligence exploitation.',
  },
  {
    id: 'sag-prahari',
    num: '12',
    title: 'SAG PRAHARI',
    category: 'COUNTER-UAS · DETECTION',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Body-worn drone detection and directional early warning for dismounted squads.',
    whereUsedTags: [
      'Counter-terror operations',
      'Forward pickets & posts',
      'Infantry foot patrols',
      'Mountain & urban sectors',
    ],
    image: '/images/products/SAG PRAHARI.webp',
    categoryDomain: 'cuas',
    specs: [
      { label: 'DETECTION RANGE', value: 'Up to 2.5 km early warning horizon' },
      { label: 'SPECTRUM SWEEP', value: '400 MHz to 6.0 GHz continuous RF scan' },
      { label: 'OPERATOR WEIGHT', value: '<650 g MOLLE vest mountable' },
      { label: 'TACTICAL ALERTS', value: 'Silent haptic vibration, LED display, headset audio' },
    ],
    detailedOverview:
      'Ensures foot patrols and forward observation posts are never ambushed by silent hostile drones. Constantly sniffs ambient radio control frequencies, providing directional azimuth warning to the squad commander.',
  },
  {
    id: 'scout-x',
    num: '13',
    title: 'SCOUT-X',
    category: 'INTELLIGENCE & SURVEILLANCE',
    inDevelopment: false,
    desc: 'Persistent ISR quadcopter, switchable between free-flight reconnaissance and continuous 24-hr tethered overwatch.',
    whereUsedTags: [
      'Border surveillance',
      'Counter-infiltration',
      'Route reconnaissance',
      'Post overwatch',
    ],
    image: '/images/products/SCOUT-X.webp',
    categoryDomain: 'isr',
    specs: [
      { label: 'LOITER TIME', value: '55 min (Free) / 24+ Hours (Tethered Micro-Cable)' },
      { label: 'OPTICAL GIMBAL', value: 'Dual EO/MWIR Thermal Camera with 30x Optical Zoom' },
      { label: 'TELEMETRY RADIUS', value: '15 km Line-of-Sight encrypted datalink' },
      { label: 'WEATHER RESISTANCE', value: 'IP55 Certified, withstands 45 km/h gusts' },
    ],
    detailedOverview:
      'A versatile multi-domain tactical eyes-in-the-sky platform. Swaps effortlessly between free-roaming reconnaissance missions and permanent tethered high-altitude post overwatch.',
  },
  {
    id: 'sag-vtol-250',
    num: '14',
    title: 'SAG VTOL-250',
    category: 'INTELLIGENCE & SURVEILLANCE · VTOL',
    inDevelopment: false,
    desc: '2.5 m electric fixed-wing VTOL for runway-independent long-endurance ISR across contested borders.',
    whereUsedTags: [
      'Wide-area border surveillance',
      'Standoff ISR',
      'Coastal & maritime patrol',
      'Convoy route overwatch',
    ],
    image: '/images/products/SAG VTOL-250.webp',
    categoryDomain: 'isr',
    specs: [
      { label: 'WINGSPAN', value: '2.5 m Aerodynamic Carbon-Composite Airframe' },
      { label: 'FLIGHT DURATION', value: '180 minutes clean all-electric cruise' },
      { label: 'OPERATIONAL RADIUS', value: '60 km from Ground Control Station' },
      { label: 'LAUNCH & RECOVERY', value: '100% Vertical Take-off & Landing' },
    ],
    detailedOverview:
      'Blends the hovering flexibility of a multi-rotor with the high-speed transit and efficiency of a fixed-wing aircraft. Dispatched directly from unprepared mountain clearings or ship helipads for extensive reconnaissance.',
  },
  {
    id: 'hanuman-100',
    num: '15',
    title: 'HANUMAN 100',
    category: 'TACTICAL LOGISTICS · HEAVY-LIFT',
    inDevelopment: false,
    desc: 'Heavy-lift logistics UAV engineered for Himalayan high-altitude resupply missions up to 5,500 m.',
    whereUsedTags: [
      'High-altitude post resupply',
      'Forward outpost logistics',
      'Ammunition & blood replenishment',
      'Humanitarian relief',
    ],
    image: '/images/products/HANUMAN 100.webp',
    categoryDomain: 'logistics',
    specs: [
      { label: 'USEFUL LOAD', value: 'Up to 100 kg critical cargo' },
      { label: 'SERVICE CEILING', value: '5,500 m Above Sea Level (Himalayan proven)' },
      { label: 'TRANSIT RADIUS', value: '40 km round-trip combat radius' },
      { label: 'CARGO MECHANISM', value: 'Winch lowering / quick-release payload bay' },
    ],
    detailedOverview:
      'Lifeline logistics for snowbound mountain pickets and forward defence detachments. Keeps mountain troops supplied with ammunition, fresh batteries, blood packs, and critical rations without risking helicopter crews.',
  },
  {
    id: 'razor-ofc',
    num: '16',
    title: 'RAZOR OFC',
    category: 'MISSION MODULE · FIBRE-OPTIC GUIDANCE',
    inDevelopment: false,
    desc: 'Fibre-optic control module with 3–30 km micro-spools providing 100% jam-proof, zero-RF control.',
    whereUsedTags: [
      'Counter-EW strike missions',
      'High-jamming environments',
      'Subterranean & tunnel ops',
      'Zero-emission reconnaissance',
    ],
    image: '/images/products/RAZOR OFC.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'OPTICAL TETHER', value: 'Ultra-thin 3 km to 30 km high-speed micro-spool' },
      { label: 'ELECTRONIC HARDENING', value: '100% unjammable — zero RF emissions' },
      { label: 'VIDEO LATENCY', value: 'Near-zero millisecond 4K crystal-clear feed' },
      { label: 'COMPATIBILITY', value: 'Plug-and-play on Razor FPV chassis' },
    ],
    detailedOverview:
      'Eliminates the electromagnetic footprint entirely. Hostile radio frequency jammers and spoofers have zero physical effect on light traveling through glass, guaranteeing full operator command right up to impact.',
  },
  {
    id: 'swarm-bee',
    num: '17',
    title: 'SWARM BEE',
    category: 'MISSION MODULE · SWARM AUTONOMY',
    inDevelopment: false,
    desc: 'Plug-in swarm autonomy architecture enabling multi-drone collaborative attacks and distributed AI mesh.',
    whereUsedTags: [
      'Shared targeting networks',
      'Air defence saturation',
      'Multi-axis simultaneous strike',
      'Autonomous area denial',
    ],
    image: '/images/products/SWARM BEE.webp',
    categoryDomain: 'strike',
    specs: [
      { label: 'SWARM DENSITY', value: '8 to 64 coordinated autonomous nodes' },
      { label: 'DISTRIBUTED BRAIN', value: 'Decentralized Edge Mesh AI (no single point of failure)' },
      { label: 'DYNAMIC TASKING', value: 'Automatic threat re-allocation if a node is lost' },
      { label: 'INTEGRATION', value: 'Plug-and-play on any SAG sovereign avionics' },
    ],
    detailedOverview:
      'Overwhelms adversary air defence saturation limits. Swarm Bee turns a dispersed cluster of individual drones into a single thinking, self-coordinating tactical organism that attacks simultaneously from multiple directions.',
  },
  {
    id: 'sag-trinetra',
    num: '18',
    title: 'SAG TRINETRA',
    category: 'MARITIME · MINE COUNTERMEASURES',
    inDevelopment: true,
    developmentBadgeText: 'IN DEVELOPMENT',
    desc: 'Tethered mine-neutralisation underwater ROV for deep harbor and sea lane clearance down to 300 m.',
    whereUsedTags: [
      'Harbour & port clearance',
      'Sea lane & channel clearance',
      'MCM vessels & USVs',
      'Coastal infrastructure security',
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
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string, platformName?: string) => void;
}

const getProductFromHash = (): FullProductItem | null => {
  if (typeof window === 'undefined') return null;
  const rawHash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
  if (!rawHash || rawHash === 'products' || rawHash === 'products-page') return null;

  const ALIAS_MAP: Record<string, string> = {
    'sag-nirman': 'sag-nirman-army',
    'nirman': 'sag-nirman-army',
    'razor-fpv-series': 'sag-razor-10',
    'razor-10': 'sag-razor-10',
    'razor-15': 'sag-razor-15',
    'razor-18': 'sag-razor-18',
    'kavach': 'sag-kavach',
    'net-catcher': 'sag-net-catcher',
  };

  const targetId = ALIAS_MAP[rawHash] || rawHash;

  return (
    ALL_PRODUCTS.find(
      (p) =>
        p.id === targetId ||
        p.id === `sag-${targetId}` ||
        targetId === p.id.replace(/^sag-/, '') ||
        p.id.replace(/-/g, '') === targetId.replace(/-/g, '')
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
          const match =
            ALL_PRODUCTS.find((p) => p.id === newId) ||
            ALL_PRODUCTS.find((p) => p.id === `sag-${newId}`) ||
            ALL_PRODUCTS.find((p) => p.id.replace(/^sag-/, '') === newId);
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
        onNavigateContact={(title) => {
          const productToFill = title || selectedProduct.title;
          if (onNavigate) {
            onNavigate('contact', undefined, productToFill);
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
              onClick={() => (onNavigate ? onNavigate('home', '#home') : onNavigateHome?.('#home'))}
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
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-black uppercase tracking-tight text-neutral-950 leading-[1.12] mb-6"
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
                      <Shield className="w-3.5 h-3.5 text-red-400 group-hover:text-white" />
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
