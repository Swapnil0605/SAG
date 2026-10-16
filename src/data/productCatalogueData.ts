export interface TelemetryBadge {
  title: string;
  subtitle: string;
  iconName: 'crosshair' | 'zap' | 'feather' | 'database' | 'shield' | 'radio' | 'clock' | 'target' | 'compass' | 'weight' | 'cpu';
}

export interface OperatingStep {
  num: string;
  title: string;
  phase: string;
  desc: string;
  details: string;
}

export interface SpecItem {
  label: string;
  value: string;
}

export interface DeploymentDomain {
  name: string;
  role: string;
  desc: string;
}

export interface DetailedProduct {
  id: string;
  num: string;
  title: string;
  category: string;
  categoryDomain: string;
  tagline: string;
  leadDescription: string;
  pillars: [string, string, string];
  heroImage: string;
  heroImagePosition?: string;
  statusBadge: string;
  mottoQuote: string;
  telemetryBadges: TelemetryBadge[];
  howItOperates: OperatingStep[];
  specialSection?: {
    tag: string;
    title: string;
    subtitle?: string;
    description: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  specs: SpecItem[];
  idealFor: DeploymentDomain[];
}

export const CATALOGUE_PRODUCTS: Record<string, DetailedProduct> = {
  'sag-net-catcher': {
    id: 'sag-net-catcher',
    num: '03',
    title: 'SAG NET CATCHER',
    category: 'COUNTER-UAS & AIR DEFENCE',
    categoryDomain: 'cuas',
    tagline: 'CAPTURE | NEUTRALISE | ANALYSE',
    leadDescription:
      'A handheld, rapid-response anti-drone net gun that fires a high-strength capture net against low-altitude aerial threats at close range. Neutralises rogue UAS without explosive hazard or fragmentation risk.',
    pillars: ['DEFEAT', 'DISRUPT', 'DETER'],
    heroImage: '/images/products/SAG NET CATCHER.webp',
    heroImagePosition: 'center center',
    statusBadge: 'ACTIVE PRODUCTION',
    mottoQuote: 'A SAFER SKIES FOR A STRONGER TOMORROW',
    telemetryBadges: [
      { title: 'NON-LETHAL', subtitle: 'Target capture', iconName: 'target' },
      { title: 'RAPID RESPONSE', subtitle: '0.2s deployment', iconName: 'zap' },
      { title: 'LIGHTWEIGHT', subtitle: '365 g portable', iconName: 'feather' },
      { title: 'INTACT RECOVERY', subtitle: 'For intelligence', iconName: 'database' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'DETECT & AIM',
        phase: 'ACQUISITION',
        desc: 'Operator visually detects the hostile drone and aims the launcher line-of-sight.',
        details: 'Zero warm-up time required. Completely passive optical alignment leaves zero RF footprint.',
      },
      {
        num: '02',
        title: 'LAUNCH',
        phase: 'RAPID FIRING',
        desc: 'Press the trigger to fire a high-strength net canister towards the target.',
        details: 'High-pressure clean pneumatic propulsion activates in milliseconds without muzzle flash.',
      },
      {
        num: '03',
        title: 'CAPTURE',
        phase: 'KINETIC IMMOBILISATION',
        desc: 'The net rapidly expands to 3.5m × 3.5m and entangles the drone, immobilising its rotors.',
        details: 'High-tensile polymer matrix instantly wraps motor cowlings and propellers, neutralizing lift.',
      },
      {
        num: '04',
        title: 'RECOVER',
        phase: 'FORENSIC EXPLOITATION',
        desc: 'The captured drone falls safely to the ground for forensic analysis and exploitation.',
        details: 'No blast shockwave. Onboard flight logs, SD cards, and firmware are recovered 100% intact.',
      },
    ],
    specialSection: {
      tag: 'ADVANCED TACTICAL CAPABILITY',
      title: 'DRONE-TO-DRONE INTERCEPT METHOD',
      subtitle: '(OPTIONAL INTEGRATION)',
      description:
        'The same net technology can be integrated on an interceptor drone for extended reach and higher altitude engagements.',
      items: [
        {
          title: 'Extended Engagement Range',
          desc: 'Mounting on an interceptor UAV multiplies coverage beyond ground range to higher altitude perimeters.',
        },
        {
          title: 'Effective Against Multi-Rotor UAVs',
          desc: 'Tested against fast-moving racing quads, commercial drones, and custom improvised multi-rotors.',
        },
        {
          title: 'Non-Explosive Solution',
          desc: 'Clean kinetic entwinement eliminates risks to nearby personnel, structures, and critical equipment.',
        },
        {
          title: 'Enables Intelligence Recovery',
          desc: 'Intact recovery preserves flight controller logs, GPS waypoints, and launch coordinate forensics.',
        },
      ],
    },
    specs: [
      { label: 'System Type', value: 'Handheld net catcher gun (net launcher)' },
      { label: 'System Weight', value: '365 g' },
      { label: 'Net Dimensions', value: '3.5 m × 3.5 m high-strength polymer matrix' },
      { label: 'Deployment Time', value: '0.2 seconds' },
      { label: 'Effective Engagement Range', value: '25 m direct operational radius' },
      { label: 'Primary Use Case', value: 'Close-range rogue UAS neutralisation' },
      { label: 'Operational Scope', value: 'Static security / tactical response / force protection' },
      { label: 'Target Compatibility', value: 'Class-1 micro & mini multi-rotor drones' },
      { label: 'Indigenisation Level', value: '100% Indian Sovereign IP (IDDM Compliant)' },
    ],
    idealFor: [
      {
        name: 'Military Bases & Outposts',
        role: 'Perimeter defence & guard posts',
        desc: 'Safeguards forward operating bases, vehicle parking bays, and arms stores from low-altitude snooping.',
      },
      {
        name: 'Critical Infrastructure',
        role: 'Refineries, power stations & dams',
        desc: 'Eliminates explosive collateral hazards around combustible fuel tanks and sensitive electrical yards.',
      },
      {
        name: 'Airports & Flight Paths',
        role: 'Runway & approach safety',
        desc: 'Captures errant quadcopters threatening jet engines without creating dangerous metal fragments over runways.',
      },
      {
        name: 'Public Venues & State Events',
        role: 'VIP security & crowd protection',
        desc: 'Enables safe drone takedowns above civilian gatherings without loud concussions, fires, or shrapnel.',
      },
    ],
  },

  'razor-10': {
    id: 'razor-10',
    num: '04',
    title: 'SAG RAZOR 10',
    category: 'RAZOR SERIES · FPV PLATFORMS',
    categoryDomain: 'strike',
    tagline: 'STRIKE | OBSERVE | ADAPT',
    leadDescription:
      'A compact 10-inch FPV quadcopter for close-range strike and reconnaissance, with plug-in ISR camera modules and add-on modules for GNSS-denied and jammed environments.',
    pillars: ['FIND', 'FIX', 'FINISH'],
    heroImage: '/images/products/RAZOR FPV SERIES.webp',
    heroImagePosition: 'center 38%',
    statusBadge: 'FIELD VALIDATED',
    mottoQuote: 'SMALL DRONE. DECISIVE EDGE.',
    telemetryBadges: [
      { title: '10 KM', subtitle: 'Range envelope', iconName: 'compass' },
      { title: '50 MIN', subtitle: 'Endurance window', iconName: 'clock' },
      { title: 'GNSS-DENIED', subtitle: '4-element CRPA ready', iconName: 'shield' },
      { title: 'JAM-RESISTANT', subtitle: 'Frequency hopping link', iconName: 'radio' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'LAUNCH',
        phase: 'RAPID DEPLOYMENT',
        desc: 'Operator deploys RAZOR 10 in under 5 minutes and selects mission payload.',
        details: 'Toolless arm assembly and instant hot-swap battery latch for rapid re-engagement.',
      },
      {
        num: '02',
        title: 'NAVIGATE',
        phase: 'RESILIENT GUIDANCE',
        desc: 'Add-on 4-element CRPA antenna module keeps GPS/GNSS lock in jammed environments.',
        details: 'Filters multi-directional electronic warfare noise while tracking sovereign NavIC signals.',
      },
      {
        num: '03',
        title: 'CONNECT',
        phase: 'FREQUENCY HOPPING',
        desc: 'Add-on frequency-hopping module keeps control and video link alive under intense RF jamming.',
        details: 'Continual pseudo-random channel shifts across 400 MHz to 5.8 GHz spectrum bands.',
      },
      {
        num: '04',
        title: 'EXECUTE',
        phase: 'TERMINAL ENGAGEMENT',
        desc: 'Operator-in-the-loop control delivers the mission — ISR, anti-personnel or anti-armour.',
        details: 'Sub-millisecond video feed allows surgical dive-bombing onto vehicle hatches and bunkers.',
      },
    ],
    specialSection: {
      tag: 'MISSION MODULE ECOSYSTEM',
      title: 'MISSION CAPABILITIES & MODULES',
      description: 'Plug-and-play modules allow rapid field conversion between precision kinetic strike and persistent reconnaissance.',
      items: [
        {
          title: 'Anti-Personnel Precision Strike',
          desc: 'Direct surgical engagement of fortified enemy positions, trenches, and defensive pillboxes.',
        },
        {
          title: 'Anti-Armour Top Attack',
          desc: 'High-speed diving profile strikes vulnerable engine decks and turret rings of armoured vehicles.',
        },
        {
          title: 'Day & Night Optical ISR',
          desc: 'Plug-in M1 to M4 camera pods with dual electro-optical daylight and high-resolution thermal sensors.',
        },
        {
          title: 'Fibre-Optic Control Compatible',
          desc: 'Directly accepts RAZOR OFC spools for 100% RF-silent, completely unjammable flight.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'FPV quadcopter — compact multirotor' },
      { label: 'Frame Size', value: '10-inch high-modulus carbon fibre chassis' },
      { label: 'Operational Range', value: '10 km line-of-sight' },
      { label: 'Endurance', value: 'Up to 50 min (payload dependent)' },
      { label: 'Maximum Payload', value: '1.5 kg combat warhead / sensor pod' },
      { label: 'Mission Roles', value: 'Anti-personnel, anti-armour, tactical ISR' },
      { label: 'ISR Camera Modules', value: 'M1, M2, M3, M4 hot-swap options' },
      { label: 'Add-on Modules', value: '4-element CRPA (GNSS-denied), frequency hopping transceiver' },
      { label: 'Fibre-Optic Compatibility', value: 'Compatible with RAZOR OFC spool modules' },
      { label: 'Tethered Operation', value: 'Compatible with SAG Tether Drone System' },
    ],
    idealFor: [
      {
        name: 'Special Forces & Commandos',
        role: 'Deep tactical reconnaissance & strike',
        desc: 'Compact rucksack form factor allows dismounted teams to carry multiple ready-to-fly platforms.',
      },
      {
        name: 'High-Altitude Border Patrols',
        role: 'Valley surveillance & ridge clearing',
        desc: 'High thrust-to-weight ratio ensures agile flight in thin mountain air above 4,000 m.',
      },
      {
        name: 'Urban Warfare Units',
        role: 'Room breaching & building overwatch',
        desc: 'Low acoustic signature and tight turning radius allow nimble navigation between urban alleys.',
      },
      {
        name: 'Mechanized Infantry Columns',
        role: 'Scout ahead of armored advance',
        desc: 'Identifies hidden ambush positions and anti-tank teams before main combat elements arrive.',
      },
    ],
  },

  'razor-15': {
    id: 'razor-15',
    num: '05',
    title: 'SAG RAZOR 15',
    category: 'RAZOR SERIES · FPV PLATFORMS',
    categoryDomain: 'strike',
    tagline: 'STRIKE | INTERCEPT | SUSTAIN',
    leadDescription:
      'A 15-inch multi-role FPV quadcopter for strike, reconnaissance, counter-drone net capture and cargo delivery, with add-on modules for GNSS-denied and jammed environments.',
    pillars: ['FIND', 'FIX', 'FINISH'],
    heroImage: '/images/products/RAZOR FPV SERIES.webp',
    heroImagePosition: 'center 38%',
    statusBadge: 'ACTIVE PRODUCTION',
    mottoQuote: 'ONE PLATFORM. EVERY MISSION.',
    telemetryBadges: [
      { title: '15 KM', subtitle: 'Range envelope', iconName: 'compass' },
      { title: '30+ MIN', subtitle: 'Endurance window', iconName: 'clock' },
      { title: 'GNSS-DENIED', subtitle: 'CRPA anti-jam', iconName: 'shield' },
      { title: 'JAM-RESISTANT', subtitle: 'Frequency hopping', iconName: 'radio' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'CONFIGURE',
        phase: 'MISSION ADAPTATION',
        desc: 'Operator fits the mission payload: warhead, ISR camera, net launcher or cargo pod.',
        details: 'Universal multi-point quick release mechanism accepts 3 kg payloads in under 60 seconds.',
      },
      {
        num: '02',
        title: 'NAVIGATE',
        phase: 'ALL-WEATHER ROUTING',
        desc: 'Add-on 4-element CRPA antenna module keeps GPS/GNSS lock in jammed environments.',
        details: 'High-efficiency carbon propellers maintain rock-solid stability even in gusty 45 km/h winds.',
      },
      {
        num: '03',
        title: 'CONNECT',
        phase: 'RESILIENT TELEMETRY',
        desc: 'Add-on frequency-hopping module keeps control and video link alive under intense RF jamming.',
        details: 'Long-range bidirectional transceiver maintains clear 1080p video feed out to 15 km.',
      },
      {
        num: '04',
        title: 'EXECUTE',
        phase: 'MISSION DELIVERY',
        desc: 'Operator-in-the-loop control delivers surgical mission across a 15 km operational perimeter.',
        details: 'Precision payload release or direct kinetic top-attack impact at speeds exceeding 130 km/h.',
      },
    ],
    specialSection: {
      tag: 'MULTI-ROLE ADAPTABILITY',
      title: '5 SPECIALIZED MISSION CONFIGURATIONS',
      description: 'Engineered as a force multiplier that swaps between 5 distinct battlefield profiles without depot servicing.',
      items: [
        {
          title: 'Anti-Armour Strike',
          desc: 'Delivers heavy shaped charges capable of defeating modern composite and reactive armor.',
        },
        {
          title: 'Counter-UAS Net Launcher',
          desc: 'Carries an airborne net launcher pod to actively hunt and snare hostile drones in mid-flight.',
        },
        {
          title: 'Tactical Cargo Delivery',
          desc: 'Rapid resupply of ammunition, blood units, and encrypted batteries to isolated frontline posts.',
        },
        {
          title: 'Stabilised Day/Night ISR',
          desc: 'Continuous real-time optical surveillance up to 4K resolution with pan-tilt stabilized gimbal.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'FPV quadcopter — medium multirotor' },
      { label: 'Frame Size', value: '15-inch reinforced composite airframe' },
      { label: 'Operational Range', value: '15 km extended radius' },
      { label: 'Endurance', value: '30+ min (mission payload dependent)' },
      { label: 'Maximum Payload', value: '3 kg tactical payload' },
      { label: 'Mission Roles', value: 'Anti-personnel, anti-armour, ISR, C-UAS net launcher, cargo' },
      { label: 'ISR Camera Modules', value: 'M4, M5, M6 stabilized optical pods' },
      { label: 'Add-on Modules', value: '4-element CRPA (GNSS-denied), frequency hopping (jammed RF)' },
      { label: 'Fibre-Optic Control', value: 'Compatible with RAZOR OFC module family' },
      { label: 'Tethered Operation', value: 'Compatible with SAG Tether Drone System' },
    ],
    idealFor: [
      {
        name: 'Battalion Mortar & Artillery Teams',
        role: 'Forward observation & strike',
        desc: 'Provides immediate visual battle damage assessment and secondary precision strike capability.',
      },
      {
        name: 'Air Base & Radar Site Security',
        role: 'Airborne interceptor patrols',
        desc: 'Interviews and neutralises rogue quadcopters before they breach sensitive runways.',
      },
      {
        name: 'Island & Coastal Defence Outposts',
        role: 'Maritime approach surveillance',
        desc: 'Salt-spray resistant coating and high payload allows extended patrols over coastal inlets.',
      },
      {
        name: 'Disaster & Combat Medical Units',
        role: 'Urgent medical resupply',
        desc: 'Flies emergency tourniquets and plasma packs directly into contested hot zones.',
      },
    ],
  },

  'razor-18': {
    id: 'razor-18',
    num: '06',
    title: 'SAG RAZOR 18',
    category: 'RAZOR SERIES · HEAVY-LIFT FPV',
    categoryDomain: 'strike',
    tagline: 'LIFT | STRIKE | DESIGNATE',
    leadDescription:
      'The heavy-lift member of the RAZOR series: an 18-inch FPV quadcopter carrying up to 8 kg for strike, full-sensor ISR, counter-drone net capture and cargo, with add-on modules for GNSS-denied and jammed environments.',
    pillars: ['FIND', 'FIX', 'FINISH'],
    heroImage: '/images/products/RAZOR FPV SERIES.webp',
    heroImagePosition: 'center 38%',
    statusBadge: 'HEAVY IMPACT CLASS',
    mottoQuote: 'HEAVY LIFT. HARD HITTING.',
    telemetryBadges: [
      { title: '20 KM', subtitle: 'Range envelope', iconName: 'compass' },
      { title: '8 KG', subtitle: 'Heavy payload', iconName: 'weight' },
      { title: 'GNSS-DENIED', subtitle: 'CRPA multi-band', iconName: 'shield' },
      { title: 'JAM-RESISTANT', subtitle: 'Frequency hopping', iconName: 'radio' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'CONFIGURE',
        phase: 'HEAVY ARSENAL FIT',
        desc: 'Operator fits the mission payload up to 8 kg: warhead, ISR gimbal with laser rangefinder, net launcher or cargo pod.',
        details: 'Reinforced carbon spar arms absorb heavy payload recoil and high aerodynamic stress.',
      },
      {
        num: '02',
        title: 'NAVIGATE',
        phase: 'DEEP PENETRATION',
        desc: 'Add-on 4-element CRPA antenna module keeps GPS/GNSS lock in jammed environments.',
        details: 'Advanced inertial navigation algorithms maintain flight path even under total satellite signal loss.',
      },
      {
        num: '03',
        title: 'CONNECT',
        phase: 'HIGH-POWER LINK',
        desc: 'Add-on frequency-hopping module keeps control and high-def video link alive under intense RF jamming.',
        details: 'High-gain directional ground antenna station tracking provides uninterrupted control to 20 km.',
      },
      {
        num: '04',
        title: 'EXECUTE',
        phase: 'DECISIVE NEUTRALISATION',
        desc: 'Operator-in-the-loop control delivers the mission across a 20 km operational perimeter.',
        details: 'Destroys reinforced concrete fortifications and heavy armoured vehicles with massive payload delivery.',
      },
    ],
    specialSection: {
      tag: 'SUPERIOR COMBAT CAPACITY',
      title: 'HEAVY PAYLOAD & TARGET DESIGNATION',
      description: 'Enables dismounted troops to project the kinetic firepower of heavy artillery with surgical unmanned accuracy.',
      items: [
        {
          title: 'Heavy Top-Attack Munitions',
          desc: 'Carries tandem HEAT charges and multi-mortar drop racks up to 8 kg total payload weight.',
        },
        {
          title: 'Full-Sensor ISR & Laser Designation',
          desc: 'High-magnification electro-optical turret with integrated laser target designator for precision weapons.',
        },
        {
          title: 'Extreme High-Altitude Post Resupply',
          desc: 'Carries heavy batteries, ammunition crates, and radio relays to snow-bound Himalayan outposts.',
        },
        {
          title: 'Multi-Drone Net Launcher',
          desc: 'Capable of mounting multi-barrel pneumatic net deployment canisters for multi-target C-UAS defence.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'FPV quadcopter — heavy-lift multirotor' },
      { label: 'Frame Size', value: '18-inch ultra-rigid industrial carbon frame' },
      { label: 'Operational Range', value: '20 km deep penetration radius' },
      { label: 'Endurance', value: '30+ min (depends on payload weight)' },
      { label: 'Maximum Payload Capacity', value: '8 kg heavy combat payload' },
      { label: 'Mission Roles', value: 'Anti-personnel, anti-armour, ISR, C-UAS net launcher, heavy cargo' },
      { label: 'ISR Camera Modules', value: 'M5, M6, M7, M8 high-spec optical & thermal turrets' },
      { label: 'Add-on Modules', value: '4-element CRPA (GNSS-denied), frequency hopping (jammed RF)' },
      { label: 'Fibre-Optic Control', value: 'Compatible with RAZOR OFC heavy spool modules' },
      { label: 'Tethered Operation', value: 'Compatible with SAG Tether Drone System' },
    ],
    idealFor: [
      {
        name: 'Strike Corps & Armoured Formations',
        role: 'Anti-armour interdiction',
        desc: 'Defeats enemy main battle tanks and command vehicles well ahead of friendly lines.',
      },
      {
        name: 'High-Altitude Mountain Corps',
        role: 'Isolated post sustainment & bunker busting',
        desc: 'Flies heavy ammunition and stores across inaccessible mountain gorges where mules cannot travel.',
      },
      {
        name: 'Forward Fire Support Bases',
        role: 'Precision loitering bombardment',
        desc: 'Provides commanders with an on-demand heavy guided weapon without firing expensive missile rounds.',
      },
      {
        name: 'Special Operations Groups',
        role: 'Covert target designation & interdiction',
        desc: 'Operates deep behind enemy lines with laser illumination for friendly aircraft precision bombs.',
      },
    ],
  },

  'razor-ofc': {
    id: 'razor-ofc',
    num: '07',
    title: 'SAG RAZOR OFC',
    category: 'RAZOR SERIES · MISSION MODULE',
    categoryDomain: 'strike',
    tagline: 'RF-SILENT | JAM-RESISTANT | MISSION-READY',
    leadDescription:
      'A fibre-optic control module family for RAZOR 10, RAZOR 15 and RAZOR 18. It replaces the radio link with a micro-thin fibre-optic spool for RF-silent, jam-resistant real-time control and video in contested and heavily jammed environments.',
    pillars: ['CONNECT', 'CONTROL', 'CONQUER'],
    heroImage: '/images/products/RAZOR OFC.webp',
    heroImagePosition: 'center 26%',
    statusBadge: 'ZERO RF SIGNATURE',
    mottoQuote: 'UNJAMMABLE. UNTRACEABLE.',
    telemetryBadges: [
      { title: 'RF-SILENT', subtitle: 'Zero emissions link', iconName: 'shield' },
      { title: 'JAM-PROOF', subtitle: 'Immune to EW jammers', iconName: 'target' },
      { title: 'ZERO LATENCY', subtitle: 'Crystal 4K video', iconName: 'zap' },
      { title: '3–30 KM', subtitle: 'Micro-spool family', iconName: 'compass' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'SELECT',
        phase: 'SPOOL SPECIFICATION',
        desc: 'Choose the optical spool length (3 km to 30 km) to match mission range and platform.',
        details: 'Ultra-pure micro-glass fibre core engineered for zero optical attenuation over full spool length.',
      },
      {
        num: '02',
        title: 'MOUNT',
        phase: 'QUICK INTERFACE',
        desc: 'Fit the OFC module quickly to RAZOR 10, RAZOR 15 or RAZOR 18 via secure bayonet lock.',
        details: 'Self-tensioned payout dispensing guide prevents knots or line snagging during violent combat maneuvers.',
      },
      {
        num: '03',
        title: 'FLY OVER FIBRE',
        phase: 'RF-SILENT FLIGHT',
        desc: 'Control commands and video travel through the fibre spool with zero radio emission.',
        details: 'Hostile electronic warfare direction-finding equipment cannot detect or geolocate the drone.',
      },
      {
        num: '04',
        title: 'OPERATE IN JAMMING',
        phase: 'TOTAL PENETRATION',
        desc: 'The optical datalink remains 100% operational where radio drones completely fail.',
        details: 'Even under the strongest radar jammers, video and flight controls maintain zero packet loss.',
      },
    ],
    specialSection: {
      tag: 'TACTICAL RANGE MATRIX',
      title: 'MODULAR SPOOL RANGE OPTIONS',
      description: 'Available in 8 distinct mission spool lengths matched to operational tactical distances:',
      items: [
        {
          title: 'Close-Quarter Urban Recon (3 km - 7 km)',
          desc: 'Lightweight spools for building-to-building flight, tunnel penetration, and trench surveillance.',
        },
        {
          title: 'Frontline EW Contested Strike (10 km - 15 km)',
          desc: 'Standard tactical strike perimeter against high-value jammers, radar arrays, and mobile headquarters.',
        },
        {
          title: 'Deep Battlefield Interdiction (20 km - 30 km)',
          desc: 'Long-range optical spool reels for deep penetration into enemy rear logistical bases and depots.',
        },
        {
          title: 'Complete Ground Station Decoupling',
          desc: 'No radio antenna mast required at operator post, ensuring zero electronic beacon signature for enemy counter-battery fire.',
        },
      ],
    },
    specs: [
      { label: 'Module Type', value: 'Fibre-optic control and high-def video spool pod' },
      { label: 'Compatible Platforms', value: 'RAZOR 10, RAZOR 15, RAZOR 18' },
      { label: 'Spool Lengths Available', value: '3 km, 5 km, 7 km, 10 km, 15 km, 20 km, 25 km, 30 km' },
      { label: 'Control & Video Link', value: 'RF-silent real-time bidirectional optical transmission' },
      { label: 'Guidance Architecture', value: 'Operator-in-the-loop control over micro-fibre' },
      { label: 'EW Resilience', value: '100% immune to RF jamming, spoofing and EMP' },
      { label: 'RF Emission Footprint', value: 'Zero RF emission (undetectable by RF spectrum analyzers)' },
      { label: 'Integration Role', value: 'Mission module for contested-environment operations' },
    ],
    idealFor: [
      {
        name: 'Heavily Contested Frontline EW Zones',
        role: 'Overcoming multi-megawatt jamming fields',
        desc: 'Penetrates deep into electronic warfare bubbles where all conventional drones lose control.',
      },
      {
        name: 'Tunnel & Underground Reconnaissance',
        role: 'Subterranean exploration',
        desc: 'Flies into concrete bunkers, cave systems, and drainage canals where radio waves cannot penetrate.',
      },
      {
        name: 'Covert Border Security',
        role: 'Silent standoff surveillance',
        desc: 'Ensures the launch site cannot be discovered by enemy electronic intelligence surveillance.',
      },
      {
        name: 'Naval Anti-Electronic Warfare',
        role: 'Ship-to-shore silent strike',
        desc: 'Unaffected by heavy naval shipboard radar interference and GPS-spoofing coastal stations.',
      },
    ],
  },

  'scout-x': {
    id: 'scout-x',
    num: '08',
    title: 'SAG SCOUT-X',
    category: 'INTELLIGENCE & SURVEILLANCE',
    categoryDomain: 'isr',
    tagline: 'WATCH | TRACK | PERSIST',
    leadDescription:
      'An ISR quadcopter combining free flight and continuous tethered operation for persistent monitoring and mission-critical border security.',
    pillars: ['OBSERVE', 'DETECT', 'DENY'],
    heroImage: '/images/products/SCOUT-X.webp',
    heroImagePosition: 'center 24%',
    statusBadge: 'MULTI-ROLE ISR',
    mottoQuote: 'EYES ON THE BORDER. ALWAYS.',
    telemetryBadges: [
      { title: '90 MIN', subtitle: 'Free flight time', iconName: 'clock' },
      { title: '24+ HR', subtitle: 'Continuous tethered', iconName: 'zap' },
      { title: '20 KM', subtitle: 'Encrypted radius', iconName: 'compass' },
      { title: 'GNSS-DENIED', subtitle: 'Anti-jam navigation', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'DEPLOY',
        phase: 'INSTANT LAUNCH',
        desc: 'VTOL launch; ready to fly in under 5 minutes from transport hardcase.',
        details: 'Ruggedized all-weather carbon construction operates in rain, snow, and dense desert dust storms.',
      },
      {
        num: '02',
        title: 'PATROL / HOVER',
        phase: 'PERSISTENT OVERWATCH',
        desc: 'Free flight for up to 90 minutes, or tethered for 24+ hours with the SAG Tether Drone System.',
        details: 'Micro-tether cable delivers continuous power and secure high-bandwidth fiber data directly from ground generator.',
      },
      {
        num: '03',
        title: 'OBSERVE',
        phase: 'DUAL EO/IR SENSING',
        desc: 'Full HD daylight camera and 640 × 512 thermal EO/IR sensor spot human movement up to 4 km away.',
        details: 'Automated AI motion detection highlights moving vehicles and dismounted personnel automatically.',
      },
      {
        num: '04',
        title: 'SHARE',
        phase: 'TACTICAL BROADCAST',
        desc: 'Encrypted AES-256 full-motion video and telemetry stream to the tactical ground station.',
        details: 'Directly relays coordinates to artillery fire control networks and brigade command dashboards.',
      },
    ],
    specialSection: {
      tag: 'DUAL-OPERATIONAL MODALITY',
      title: 'FREE FLIGHT & 24+ HOUR TETHERED MODES',
      description: 'Switches seamlessly between roaming multi-kilometer route reconnaissance and permanent stationary base overwatch.',
      items: [
        {
          title: 'Permanent Border Overwatch (Tethered Mode)',
          desc: 'Hover continuously at 100-150 m altitude for 24+ hours, providing persistent round-the-clock perimeter radar and optical view.',
        },
        {
          title: 'Counter-Infiltration Patrols (Free Flight)',
          desc: 'Long 90-minute free flight sorties scout rugged valleys and mountain passes for unauthorized troop movements.',
        },
        {
          title: 'Route Reconnaissance for Convoys',
          desc: 'Escorts logistical and VIP convoys, inspecting culverts and blind corners for ambushes and improvised explosive devices.',
        },
        {
          title: 'Tactical Forward Post Overwatch',
          desc: 'Provides isolated Himalayan forward pickets with permanent thermal eyes looking across high-altitude ridgelines.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'Tactical ISR quadcopter' },
      { label: 'Operational Range', value: '20 km line-of-sight' },
      { label: 'Endurance', value: '90 min free flight; 24+ hr continuous tethered (extendable per mission)' },
      { label: 'Maximum Take-off Weight', value: '8 kg' },
      { label: 'Payload Capacity', value: 'Up to 1.5–2 kg modular ISR payload' },
      { label: 'Maximum Speed', value: '60 km/h' },
      { label: 'Operational Altitude', value: 'Up to 5,000 m AMSL' },
      { label: 'Day / Night Camera', value: '1920 × 1080p (2K/4K options) / 640 × 512p thermal EO/IR gimbal' },
      { label: 'Navigation Resilience', value: 'GNSS-denied navigation through jamming and spoofing' },
      { label: 'Data Link Security', value: 'Encrypted RF, AES-256; mesh-capable multi-asset coordination' },
      { label: 'Military Standards', value: 'IP55; MIL-STD-461E; MIL-STD-810G certified' },
    ],
    idealFor: [
      {
        name: 'Border Security Forces',
        role: 'Continuous international border surveillance',
        desc: 'Prevents covert infiltration across porous forested or riverine border zones day and night.',
      },
      {
        name: 'High-Altitude Forward Bases',
        role: 'Permanent aerial observation post',
        desc: 'Tethered 24/7 overwatch replaces risky observation bunker personnel exposed to sniper fire.',
      },
      {
        name: 'Convoy Protection Units',
        role: 'Route reconnaissance and escort',
        desc: 'Flies 2 km ahead of supply trucks to confirm bridges and gorges are clear of hostile ambushes.',
      },
      {
        name: 'Disaster & Emergency Response',
        role: 'Search & rescue monitoring',
        desc: 'Spots survivors under avalanche snow or flood waters using high-sensitivity thermal infrared.',
      },
    ],
  },

  'hanuman-100': {
    id: 'hanuman-100',
    num: '09',
    title: 'SAG HANUMAN 100',
    category: 'LOGISTICS & HEAVY-LIFT UAVS',
    categoryDomain: 'logistics',
    tagline: 'LIFT | CARRY | DELIVER',
    leadDescription:
      'A heavy-lift aerial-delivery platform for defence logistics and humanitarian missions, including rapid supply to frontline locations with limited or zero ground access.',
    pillars: ['SUPPLY', 'SUSTAIN', 'SUPPORT'],
    heroImage: '/images/products/HANUMAN 100.webp',
    heroImagePosition: 'center 26%',
    statusBadge: '80 KG HEAVY LIFT',
    mottoQuote: 'WHERE ROADS END, WE DELIVER.',
    telemetryBadges: [
      { title: '80 KG', subtitle: 'Cargo payload', iconName: 'weight' },
      { title: '10 KM', subtitle: 'Flight radius', iconName: 'compass' },
      { title: 'RTK ACCURACY', subtitle: 'Precision landing', iconName: 'target' },
      { title: '5,000 M', subtitle: 'Operating ceiling', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'LOAD',
        phase: 'CARGO FAST-LATCH',
        desc: 'Load up to 80 kg of essential supplies, ammunition, or batteries into the rugged belly cargo bay.',
        details: 'Self-balancing cargo winch and quick-release pallet harness allow 2-minute ground turnarounds.',
      },
      {
        num: '02',
        title: 'LIFT OFF',
        phase: 'AUTONOMOUS VERTICAL CLIMB',
        desc: 'VTOL launch from unprepared rocky terrain; ready to take off in under 5 minutes.',
        details: 'Multi-rotor coaxial powertrain generates immense static lift even in thin mountain air at 5,000 m.',
      },
      {
        num: '03',
        title: 'FLY',
        phase: 'AUTONOMOUS NAVIGATION',
        desc: 'GNSS waypoint navigation with LiDAR obstacle avoidance; streams live video and payload telemetry.',
        details: 'Pre-programmed return-to-base and automated emergency autorotation protocols safeguard mission cargo.',
      },
      {
        num: '04',
        title: 'DELIVER',
        phase: 'RTK PRECISION TOUCHDOWN',
        desc: 'RTK precision landing at destination post, or automated cable lowering without landing.',
        details: 'Touchdown accuracy within 10 cm on tiny helicopter pads, snow ridges, or naval ship decks.',
      },
    ],
    specialSection: {
      tag: 'SOVEREIGN LOGISTICAL ARTERY',
      title: 'EXPEDITIONARY LOGISTICS USE CASES',
      description: 'Replaces dangerous mule trains and high-risk helicopter sorties in extreme alpine and island terrains.',
      items: [
        {
          title: 'High-Altitude Forward Post Resupply',
          desc: 'Delivers daily food rations, kerosene fuel containers, and artillery shells to snow-bound Himalayan posts.',
        },
        {
          title: 'Combat Casualty Medical Evacuation',
          desc: 'Delivers blood plasma and emergency trauma kits to combat paramedics within minutes of an engagement.',
        },
        {
          title: 'Island & Coastal Outpost Transit',
          desc: 'Connects remote offshore lighthouses and naval radar detachments cut off by monsoon seas.',
        },
        {
          title: 'Humanitarian Disaster Relief',
          desc: 'Airdrops survival kits and satellite communicators to villages isolated by landslides and bridge collapse.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'Heavy-lift logistical multirotor UAV' },
      { label: 'Operational Range', value: '10 km fully loaded mission radius' },
      { label: 'Endurance', value: '40–50 min unloaded; 25–35 min at maximum 80 kg payload' },
      { label: 'Maximum Take-off Weight (MTOW)', value: '200 kg heavy-lift class' },
      { label: 'Payload Capacity', value: 'Up to 80 kg cargo' },
      { label: 'Cruising Speed', value: '60 km/h' },
      { label: 'Operational Altitude', value: 'Up to 5,000 m AMSL' },
      { label: 'Navigation & Guidance', value: 'GNSS waypoint, RTK precision landing, LiDAR obstacle avoidance, EW compliant' },
      { label: 'Data Link Security', value: 'Encrypted RF, AES-256; telemetry, payload status and live forward video' },
      { label: 'Launch Configuration', value: 'VTOL; under 5 minutes to set up from transport frame' },
      { label: 'Military Standards', value: 'IP55; MIL-STD-461E; MIL-STD-810G certified' },
    ],
    idealFor: [
      {
        name: 'Himalayan High-Altitude Posts',
        role: 'Winter cutoff resupply',
        desc: 'Maintains daily supply link to mountain passes when snow roads are completely blocked.',
      },
      {
        name: 'Island & Archipelago Bases',
        role: 'Inter-island maritime shuttles',
        desc: 'Rapid transfers of spare engine parts and munitions between naval outposts.',
      },
      {
        name: 'Disaster Relief Task Forces',
        role: 'Flood and earthquake survival drops',
        desc: 'Delivers clean water purification equipment and rations directly into severed towns.',
      },
      {
        name: 'Forward Fire Outposts & Gun Positions',
        role: 'On-demand ammunition resupply',
        desc: 'Delivers mortar rounds and rocket canisters directly into gun pits under artillery fire.',
      },
    ],
  },

  'swarm-bee': {
    id: 'swarm-bee',
    num: '10',
    title: 'SAG SWARM BEE',
    category: 'MISSION MODULE · SWARM AUTONOMY',
    categoryDomain: 'strike',
    tagline: 'CONNECT | COORDINATE | CONVERGE',
    leadDescription:
      'A plug-in swarm module that turns any SAG drone into an autonomous node of an AI-enabled swarm. Drones share targets, split search areas, avoid mid-air collisions and strike from every direction simultaneously.',
    pillars: ['SWARM', 'SURROUND', 'STRIKE'],
    heroImage: '/images/products/SWARM BEE.webp',
    heroImagePosition: 'center 24%',
    statusBadge: 'SWARM AUTONOMY AI',
    mottoQuote: 'MANY DRONES. ONE MIND.',
    telemetryBadges: [
      { title: 'PLUG-IN', subtitle: 'Universal module', iconName: 'cpu' },
      { title: 'ALL SAG', subtitle: 'Platform cross-compat', iconName: 'shield' },
      { title: 'SELF-HEALING', subtitle: 'Decentralized mesh', iconName: 'radio' },
      { title: '360° STRIKE', subtitle: 'Omni-directional', iconName: 'crosshair' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'FIT',
        phase: 'HARDWARE PLUG-IN',
        desc: 'Fit the SWARM BEE module onto any SAG drone (RAZOR 10, 15, 18, SCOUT-X, VTOL-250).',
        details: 'Self-identifying module communicates instantly with the flight controller over high-speed CAN bus.',
      },
      {
        num: '02',
        title: 'LINK',
        phase: 'DECENTRALIZED MESH',
        desc: 'Drones join an encrypted, self-healing peer-to-peer radio mesh and share position and target telemetry.',
        details: 'If any individual drone is neutralized, the remaining swarm automatically reorganizes within 50 ms.',
      },
      {
        num: '03',
        title: 'ASSIGN',
        phase: 'DISTRIBUTED AI TASKING',
        desc: 'Onboard edge AI dynamically allocates search grids, target priority, and attack trajectories across the swarm.',
        details: 'No central ground control vulnerability; computation is distributed equally across all flying nodes.',
      },
      {
        num: '04',
        title: 'CONVERGE',
        phase: 'MULTI-AXIS SATURATION',
        desc: 'Drones converge simultaneously on hostile assets from multiple directions to overwhelm local air defences.',
        details: 'Synchronized terminal impact leaves enemy short-range air defence radars completely saturated.',
      },
    ],
    specialSection: {
      tag: 'DEFENCE OBLITERATION GEOMETRY',
      title: 'STRIKE FROM EVERY DIRECTION AT ONCE',
      description: 'Simultaneous multi-axis attack completely overwhelms target active protection systems and leaves zero escape angles:',
      items: [
        {
          title: 'Top-Attack Dive Angle',
          desc: 'High-speed vertical dive penetrates thin roof and turret armor at maximum kinetic terminal velocity.',
        },
        {
          title: 'Front & Rear Flanking Vectors',
          desc: 'Simultaneous low-altitude frontal and rear strikes pin defensive gun turrets and block retreat corridors.',
        },
        {
          title: 'Left & Right Side Pinning Fire',
          desc: 'Saturates defensive radar tracking channels with simultaneous multi-aspect targets.',
        },
        {
          title: 'Self-Organizing Formations',
          desc: 'Adaptive V-shape, circular containment perimeter, and linear sweeping patterns managed automatically.',
        },
      ],
    },
    specs: [
      { label: 'Module Type', value: 'Plug-in autonomous swarm intelligence module' },
      { label: 'Compatible Platforms', value: 'RAZOR 10, RAZOR 15, RAZOR 18, SCOUT-X, SAG VTOL-250' },
      { label: 'Swarm Intelligence Architecture', value: 'Centralised, distributed, or hybrid edge AI' },
      { label: 'Autonomy Level', value: 'Assisted / semi-autonomous / fully autonomous operation' },
      { label: 'Formation Modes', value: 'V-shape, line, circular, and adaptive dynamic clustering' },
      { label: 'Collision Avoidance', value: 'Microsecond inter-drone and obstacle avoidance algorithms' },
      { label: 'Task Allocation', value: 'Dynamic mission re-assignment in real-time' },
      { label: 'Strike Geometry', value: 'Simultaneous multi-directional: front, back, left, right, top' },
      { label: 'Communication / Data Link', value: 'Encrypted, self-healing mesh radio; peer-to-peer relay across swarm' },
      { label: 'Launch & Deployment', value: 'Sequential or simultaneous salvo deployment' },
    ],
    idealFor: [
      {
        name: 'Penetrating Layered Air Defences',
        role: 'Salvo saturation strikes',
        desc: 'Overwhelms missile and gun-based point defence systems with too many simultaneous targets to track.',
      },
      {
        name: 'Armored Column Interdiction',
        role: 'Simultaneous multi-vehicle neutralisation',
        desc: 'Destroys command vehicles, air defence radars, and supply tankers in a coordinated 10-second strike.',
      },
      {
        name: 'Wide-Area Sector Reconnaissance',
        role: 'Distributed perimeter search',
        desc: 'A swarm of 12 drones sweeps a 50 square km sector in a fraction of the time taken by a single UAV.',
      },
      {
        name: 'Counter-Swarm Aerial Intercept',
        role: 'Defensive swarm screening',
        desc: 'Creates a cooperative airborne intercept barrier to catch incoming enemy drone waves.',
      },
    ],
  },

  'sag-vajra-ugv': {
    id: 'sag-vajra-ugv',
    num: '11',
    title: 'SAG VAJRA UGV',
    category: 'UNMANNED GROUND SYSTEMS',
    categoryDomain: 'ground-maritime',
    tagline: 'CARRY | CLEAR | COMBAT',
    leadDescription:
      'An autonomous tactical ground platform for multi-mission support, casualty evacuation and hazardous-area combat operations across varied terrain.',
    pillars: ['MOVE', 'PROTECT', 'PREVAIL'],
    heroImage: '/images/products/SAG VAJRA UGV.webp',
    heroImagePosition: '65% 62%',
    statusBadge: 'AUTONOMOUS TACTICAL UGV',
    mottoQuote: 'UNMANNED. UNSTOPPABLE.',
    telemetryBadges: [
      { title: '500 KG', subtitle: 'Payload capacity', iconName: 'weight' },
      { title: '100 KM', subtitle: 'Operational range', iconName: 'compass' },
      { title: '3-4 HR', subtitle: 'Continuous endurance', iconName: 'clock' },
      { title: 'AI SLAM', subtitle: 'Autonomous navigation', iconName: 'cpu' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'PLAN',
        phase: 'MISSION INITIALISATION',
        desc: 'Operator sets the mission parameters; onboard AI plans and optimizes route across rough terrain.',
        details: 'Considers gradient slope, ground soil firmness, and terrain cover to minimize visual detection.',
      },
      {
        num: '02',
        title: 'NAVIGATE',
        phase: 'AUTONOMOUS TRANSIT',
        desc: 'All-terrain chassis drives autonomously with 3D LiDAR SLAM and machine-learning obstacle avoidance.',
        details: 'Follow-me tetherless soldier mode and waypoint patrol execute seamlessly without GPS.',
      },
      {
        num: '03',
        title: 'EXECUTE',
        phase: 'MODULAR COMBAT ACTION',
        desc: 'Carries out the fitted mission: casualty evacuation, demining/EOD, missile launch or armed overwatch.',
        details: 'Quick-change bolt-on mission decks swap combat roles in under 15 minutes at forward depot.',
      },
      {
        num: '04',
        title: 'REPORT',
        phase: 'ENCRYPTED TELEMETRY',
        desc: 'Encrypted real-time telemetry and 360° multispectral video stream to tactical command.',
        details: 'Enables high-bandwidth beyond-line-of-sight remote weapon station control by squad commander.',
      },
    ],
    specialSection: {
      tag: 'MODULAR COMBAT ARCHITECTURE',
      title: '4 SPECIALIZED MISSION MODULE DECKS',
      description: 'Adaptable chassis accepts four dedicated military mission modules:',
      items: [
        {
          title: 'Casualty Evacuation (CASEVAC)',
          desc: 'Armored stretcher deck extracts wounded soldiers under heavy enemy fire without risking medics.',
        },
        {
          title: 'EOD & Autonomous Demining',
          desc: 'High-torque robotic manipulator arm and subsurface ground penetrating radar detect and neutralize mines.',
        },
        {
          title: 'Mobile C-UAS Missile Launcher',
          desc: 'Mounts 4 to 8 canister surface-to-air missile launchers for mobile column air defence protection.',
        },
        {
          title: 'Remote Weapon Station (RWS)',
          desc: 'Stabilized 7.62mm / 12.7mm machine gun mount with thermal night sight for defensive perimeter security.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'AI-enabled autonomous tactical UGV' },
      { label: 'Operational Range', value: '100 km cross-country mission radius' },
      { label: 'Endurance', value: '3–4 hours continuous high-tempo operation' },
      { label: 'Payload Capacity', value: '500 kg combat equipment / munitions' },
      { label: 'Autonomous Navigation', value: '3D LiDAR SLAM, autonomous path planning, adaptive route optimization' },
      { label: 'AI Intelligence', value: 'ML threat recognition, terrain analysis, mission-adaptive behavior' },
      { label: 'Mobility & Drivetrain', value: 'High-mobility all-terrain 4x4 chassis with active adaptive suspension' },
      { label: 'Sensor Suite', value: 'Integrated multisensor 360° thermal/optical array and obstacle LiDAR' },
      { label: 'Mission Modules Available', value: 'CASEVAC; EOD/demining; C-UAS missile launch; Remote Weapon Station' },
      { label: 'Communication Link', value: 'Encrypted tactical mesh comms, real-time telemetry, extended-range command' },
      { label: 'Power Architecture', value: 'Autonomous battery management and endurance optimization' },
    ],
    idealFor: [
      {
        name: 'Frontline Combat Casualty Evacuation',
        role: 'Extraction under direct fire',
        desc: 'Drives directly into active kill zones to retrieve fallen soldiers safely.',
      },
      {
        name: 'Combat Engineering & Demining',
        role: 'Minefield breach and explosive clearance',
        desc: 'Clears improvised explosive devices on convoy tracks with zero human physical exposure.',
      },
      {
        name: 'Air Base Munitions Loading & FOD Patrol',
        role: 'Sortie turnaround acceleration',
        desc: 'Transfers heavy munitions from revetments to fighter aircraft and inspects runways for debris.',
      },
      {
        name: 'Forward Infantry Platoon Resupply',
        role: 'Autonomous robotic mule',
        desc: 'Carries heavy mortar ammunition, anti-tank missiles, and tactical water packs behind foot soldiers.',
      },
    ],
  },

  'doom-mk1': {
    id: 'doom-mk1',
    num: '12',
    title: 'SAG DOOM MK-1',
    category: 'AIR DEFENCE & SHORT-RANGE SAM',
    categoryDomain: 'air-defence',
    tagline: 'DETECT | LAUNCH | DESTROY',
    leadDescription:
      'A short-range air-defence missile system integrating a vehicle-mounted multi-canister launcher and rapid-response kinetic engagement capability.',
    pillars: ['DEFEND', 'DENY', 'DESTROY'],
    heroImage: '/images/products/DOOM MK-1.webp',
    heroImagePosition: 'center 18%',
    statusBadge: 'SHORAD // SAM SYSTEM',
    mottoQuote: 'NOTHING GETS THROUGH.',
    telemetryBadges: [
      { title: '2–5 KM', subtitle: 'Engagement range', iconName: 'compass' },
      { title: '<7 SEC', subtitle: 'Reaction speed', iconName: 'zap' },
      { title: '<2 M CEP', subtitle: 'Surgical accuracy', iconName: 'crosshair' },
      { title: '5,000 M', subtitle: 'Engagement ceiling', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'DETECT',
        phase: 'RADAR & OPTICAL CUE',
        desc: 'A hostile loitering munition or strike drone is detected, classified, and tracked by tracking radar.',
        details: 'Multi-target search radar detects micro-RCS radar cross-section threats at ranges beyond 10 km.',
      },
      {
        num: '02',
        title: 'LAUNCH',
        phase: 'RAPID SALVO IGNITION',
        desc: 'The missile leaves the truck-mounted canister in under 7 seconds from initial threat confirmation.',
        details: 'Cold-gas or quick-eject booster clears launcher prior to main rocket motor ignition.',
      },
      {
        num: '03',
        title: 'GUIDE',
        phase: 'SUPERSONIC HOMING',
        desc: 'Dual-pulse solid rocket motor with responsive aerodynamic fin control steers aggressively to target.',
        details: 'High-G maneuvering fins track evasive maneuvers and diving kamikaze drone profiles.',
      },
      {
        num: '04',
        title: 'INTERCEPT',
        phase: 'KINETIC FRAGMENTATION',
        desc: 'Radio-frequency proximity fuze detonates the pre-fragmented high-explosive warhead at intercept point.',
        details: 'High-density tungsten fragment cloud ensures complete destruction of hostile wings, motors, and explosives.',
      },
    ],
    specialSection: {
      tag: 'MOBILE FRONTLINE AIR UMBRELLA',
      title: 'AIR DEFENCE MISSION DOMAINS',
      description: 'Mounted on robust pickup and tactical truck chassis for high-speed motorized escort and rapid base redeployment:',
      items: [
        {
          title: 'Air Base & Radar Site Point Defence',
          desc: 'Intercepts coordinated loitering munition swarms targeting aircraft hangars and air-defence radar domes.',
        },
        {
          title: 'High-Altitude Forward Post Protection',
          desc: 'Compact launcher can be airlifted to isolated mountain posts guarding vital passes and ridges.',
        },
        {
          title: 'Mobile Combat Convoy Escort',
          desc: 'Moves with advancing mechanized infantry columns, providing immediate shoot-on-the-move air cover.',
        },
        {
          title: 'Strategic Energy & Command Infrastructure',
          desc: 'Forms an impenetrable close-in kinetic shield around refineries, government secretariats, and dams.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'Short-range surface-to-air missile (SHORAD / SAM)' },
      { label: 'Mission Role', value: 'Point and area defence against loitering munitions & strike UAVs' },
      { label: 'Engagement Range', value: '2–5 km extended short-range engagement envelope' },
      { label: 'Engagement Altitude', value: '50 m to 5,000 m flight ceiling' },
      { label: 'Accuracy', value: 'CEP <2 m at maximum engagement range' },
      { label: 'Propulsion System', value: 'Dual-pulse solid rocket motor with aerodynamic fin control' },
      { label: 'Warhead Architecture', value: 'Pre-fragmented HE, 0.5–1.5 kg with active proximity fuze' },
      { label: 'Launch Configuration', value: 'Vehicle/truck-mounted multi-canister rapid salvo launcher' },
      { label: 'Reaction Time', value: '<7 seconds from target detection to missile ejection' },
    ],
    idealFor: [
      {
        name: 'Military Airfields & Fighter Hangars',
        role: 'Hostile loitering munition interception',
        desc: 'Guards parked multi-million dollar fighter jets from low-flying suicide drones.',
      },
      {
        name: 'Corps Headquarters & Command Bunkers',
        role: 'High-value asset protection',
        desc: 'Prevents precision strikes from targeting general staff command posts.',
      },
      {
        name: 'High-Risk Armored Convoys',
        role: 'Motorized column air escort',
        desc: 'Protects fuel tankers, ammunition transports, and troop carriers from ambushes.',
      },
      {
        name: 'Nuclear & Hydroelectric Plants',
        role: 'Homeland critical asset shield',
        desc: 'Destroys hostile drone attacks before they can impact containment structures.',
      },
    ],
  },

  'sag-vtol-250': {
    id: 'sag-vtol-250',
    num: '13',
    title: 'SAG VTOL-250',
    category: 'INTELLIGENCE & SURVEILLANCE',
    categoryDomain: 'isr',
    tagline: 'RISE | CRUISE | WATCH',
    leadDescription:
      'A 2.5 m carbon-fibre electric VTOL for long-endurance standoff ISR and wide-area surveillance. It takes off and lands vertically with no runway or launcher, then cruises on the wing for up to 4 hours.',
    pillars: ['SEE', 'FAR', 'BEYOND'],
    heroImage: '/images/products/SAG VTOL-250.webp',
    heroImagePosition: 'center 32%',
    statusBadge: 'STANDOFF ISR VTOL',
    mottoQuote: 'HOURS ON STATION. MILES AHEAD.',
    telemetryBadges: [
      { title: '4 HOURS', subtitle: 'Cruise endurance', iconName: 'clock' },
      { title: '2.5 M', subtitle: 'Wingspan width', iconName: 'compass' },
      { title: 'NO RUNWAY', subtitle: 'True vertical VTOL', iconName: 'feather' },
      { title: '4,800 M', subtitle: 'Flight ceiling', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'TAKE OFF',
        phase: 'VERTICAL DEPLOYMENT',
        desc: 'Vertical take-off from any clearing; zero runway, launch catapult, or parachute required.',
        details: 'Quad-rotor vertical lift motors lift the airframe smoothly even from tight forest clearings.',
      },
      {
        num: '02',
        title: 'TRANSITION',
        phase: 'WINGBORNE FLIGHT',
        desc: 'Converts seamlessly to ultra-efficient fixed-wing cruise using forward pusher propeller.',
        details: 'Automated flight computer transitions aerodynamic surfaces smoothly without altitude loss.',
      },
      {
        num: '03',
        title: 'SURVEIL',
        phase: 'DEEP STANDOFF SENSING',
        desc: 'Wide-area ISR with M6 4K optical zoom, M7 hybrid zoom, or M8 dual-sensor with laser rangefinder.',
        details: 'Provides crystal clear real-time video of enemy artillery positions 20 km behind the border.',
      },
      {
        num: '04',
        title: 'RECOVER',
        phase: 'PRECISION PINPOINT LANDING',
        desc: 'Returns and lands vertically with pinpoint accuracy at the designated launch point.',
        details: 'No belly landing damage; protects sensitive optical sensor turrets throughout mission lifetime.',
      },
    ],
    specialSection: {
      tag: 'OPTICAL SENSOR OPTIONS',
      title: 'M6, M7 & M8 PAYLOAD TURRETS',
      description: 'Quick-change nose turrets tailored for different operational observation requirements:',
      items: [
        {
          title: 'M6 Sensor Pod',
          desc: '4K / 8 MP high-resolution daylight sensor with 30x digital magnification for ultra-wide area mapping.',
        },
        {
          title: 'M7 Sensor Pod',
          desc: '2K / 4 MP dual sensor with 30x hybrid (10x optical) zoom for long-distance vehicle identification.',
        },
        {
          title: 'M8 Sensor Pod',
          desc: '2K optical + 640 × 512 thermal infrared + integrated laser rangefinder (LRF 905nm, 5 m to 1 km precision).',
        },
        {
          title: 'Compact Field Logistics',
          desc: 'Entire system packs down into a single ruggedized transport case (1,300 × 530 × 470 mm) for light vehicle transport.',
        },
      ],
    },
    specs: [
      { label: 'Platform Type', value: 'Electric fixed-wing VTOL UAV' },
      { label: 'Wingspan / Length', value: '2,500 mm / 1,260 mm' },
      { label: 'Airframe Construction', value: 'Full aviation-grade carbon fibre composite' },
      { label: 'Maximum Take-off Weight', value: '15 kg (0–3,000 m AMSL)' },
      { label: 'Recommended Payload', value: '1.2 kg (excluding battery)' },
      { label: 'Endurance', value: '4 h (no payload); 3.5 h (with 1.2 kg payload)' },
      { label: 'Speed', value: 'Max cruise 26 m/s (~94 km/h); stall speed 15.5 m/s (~56 km/h)' },
      { label: 'Maximum Flight Altitude', value: '4,800 m ceiling' },
      { label: 'Wind Resistance', value: 'Fixed-wing 10.8–13.8 m/s; VTOL mode 5.5–7.9 m/s' },
      { label: 'Operating Temperature', value: '−20 °C to +45 °C' },
      { label: 'Sensor Camera Modules', value: 'M6, M7, M8 stabilized payload pods' },
      { label: 'Transport Case Footprint', value: '1,300 × 530 × 470 mm' },
    ],
    idealFor: [
      {
        name: 'International Border Surveillance',
        role: 'Continuous 4-hour patrol sorties',
        desc: 'Monitors hundreds of kilometers of border fence line on a single battery charge.',
      },
      {
        name: 'Standoff Reconnaissance Over Hostile Territory',
        role: 'Deep ISR outside SAM reach',
        desc: 'Watches enemy supply dumps from 15 km away without entering air defence engagement zones.',
      },
      {
        name: 'Maritime Coastal Patrols',
        role: 'Creek and coastline overwatch',
        desc: 'Tracks suspicious fishing trawlers and smugglers across mangrove creeks and open seas.',
      },
      {
        name: 'Convoy Route Early Warning',
        role: 'Long-range route overwatch',
        desc: 'Flies 20 km ahead of armored battle groups to detect enemy roadblocks and ambushes.',
      },
    ],
  },

  'sag-trinetra': {
    id: 'sag-trinetra',
    num: '14',
    title: 'SAG TRINETRA',
    category: 'MARITIME SYSTEMS · MINE COUNTERMEASURES',
    categoryDomain: 'ground-maritime',
    tagline: 'LOCATE | NEUTRALISE | REPEAT',
    leadDescription:
      'An indigenous, reusable, tethered underwater vehicle that neutralises multiple sea mines in a single sortie, without surfacing or reloading between targets. Platform-agnostic: launches from any naval vessel with a standard winch or davit.',
    pillars: ['CLEAR', 'SECURE', 'PROTECT'],
    heroImage: '/images/products/SAG TRINETRA.webp',
    heroImagePosition: '68% 36%',
    statusBadge: 'SUBSEA MINE CLEARANCE',
    mottoQuote: 'CLEAR WATERS. SAFE PASSAGE.',
    telemetryBadges: [
      { title: 'MULTI-SHOT', subtitle: 'Up to 3 charges', iconName: 'target' },
      { title: 'TETHERED', subtitle: 'Unlimited power', iconName: 'zap' },
      { title: '300 M', subtitle: 'Operational depth', iconName: 'compass' },
      { title: 'OPERATOR LOOP', subtitle: 'Human confirmation', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'DEPLOY',
        phase: 'OVER-THE-SIDE LAUNCH',
        desc: 'Launched from the host vessel by winch or davit to a reported sea mine contact coordinate.',
        details: 'Can be deployed from dedicated mine countermeasures vessels, patrol boats, or unmanned surface vessels.',
      },
      {
        num: '02',
        title: 'REACQUIRE',
        phase: 'SONAR & CAMERA VERIFICATION',
        desc: 'Onboard high-frequency sonar and low-light optical camera relocate the target mine.',
        details: 'Operator on host vessel visually identifies mine type (moored, bottom, or drifting) on high-res screen.',
      },
      {
        num: '03',
        title: 'PLACE & RETREAT',
        phase: 'CHARGE ATTACHMENT',
        desc: 'The ROV attaches a shaped neutralization charge and retreats to a safe standoff distance.',
        details: 'Pneumatic clamp attaches disruptor charge directly to mine casing or mooring cable.',
      },
      {
        num: '04',
        title: 'NEXT TARGET',
        phase: 'CONTINUOUS SORTIE',
        desc: 'Proceeds straight to the next confirmed mine contact — up to 3 per sortie — with zero resurfacing.',
        details: 'Multiplies harbour clearance speed threefold compared to single-shot expendable mine disposal vehicles.',
      },
    ],
    specialSection: {
      tag: 'INTEGRATED MCM ARCHITECTURE',
      title: 'COOPERATIVE MINE COUNTERMEASURES',
      description: 'Works seamlessly with SAG MATSYA USV or any naval mothership for remote subsea clearance:',
      items: [
        {
          title: 'Harbour & Port Entrance Clearance',
          desc: 'Ensures commercial shipping lanes and naval fleet anchorages are safe from enemy offensive minefields.',
        },
        {
          title: 'Strategic Sea Lanes of Communication (SLOC)',
          desc: 'Clears navigational choke points and strait approaches for battle groups and merchant convoys.',
        },
        {
          title: 'Tether-Powered Unlimited Mission Endurance',
          desc: 'Power and fiber-optic data piped down umbilical cable enables days of subsea searching without battery recharge.',
        },
        {
          title: 'High-Frequency Forward Sonar',
          desc: 'Navigates murky, zero-visibility coastal waters and silt-laden river estuaries with acoustic imaging.',
        },
      ],
    },
    specs: [
      { label: 'System Type', value: 'Tethered, reusable subsea mine-neutralisation ROV' },
      { label: 'Operational Depth', value: '300 m depth rating' },
      { label: 'Vehicle Length', value: 'Approx. 2.5–3 m hydrodynamic hull' },
      { label: 'Forward Speed', value: 'Up to 5–6 knots vector control' },
      { label: 'Charges per Sortie', value: 'Up to 3 modular shaped neutralization charge modules' },
      { label: 'Mission Endurance', value: 'Effectively unlimited (continuous tether-powered)' },
      { label: 'Sensor Suite', value: 'High-frequency forward-looking imaging sonar & low-light 4K camera' },
      { label: 'Control Architecture', value: 'Remote operator station; human confirmation at every target engagement' },
      { label: 'Launch & Recovery', value: 'Platform-agnostic; standard shipboard/USV winch or davit' },
      { label: 'Indigenous Content', value: '70%+ at prototype, 85%+ at final delivery (Make in India IDDM)' },
    ],
    idealFor: [
      {
        name: 'Naval Mine Countermeasures Squadrons',
        role: 'Fleet channel demining',
        desc: 'Rapidly clears naval task force egress routes from submarine and surface-laid sea mines.',
      },
      {
        name: 'Major Commercial Harbours & Ports',
        role: 'Harbour safety & route opening',
        desc: 'Protects container terminals and oil tanker jetties from asymmetric underwater sabotage.',
      },
      {
        name: 'Offshore Energy & Pipeline Protection',
        role: 'Subsea asset inspection',
        desc: 'Inspects deepwater gas pipelines, internet cables, and drilling platforms for limpet mines.',
      },
      {
        name: 'Coast Guard Security Divisions',
        role: 'Coastal security & anti-sabotage',
        desc: 'Provides rapid emergency response to unexploded ordnance and washed-up sea mines along beaches.',
      },
    ],
  },

  'sag-prahari': {
    id: 'sag-prahari',
    num: '15',
    title: 'SAG PRAHARI',
    category: 'COUNTER-UAS · DETECTION & EARLY WARNING',
    categoryDomain: 'cuas',
    tagline: 'DETECT | TRIANGULATE | ALERT',
    leadDescription:
      'A body-worn, dual-modality drone detection system for the dismounted squad. Wideband SDR catches radio-controlled drones; a passive acoustic array catches RF-silent, fibre-optic drones; a squad mesh fuses bearings into one located threat coordinate.',
    pillars: ['SENSE', 'SHARE', 'SURVIVE'],
    heroImage: '/images/products/SAG PRAHARI.webp',
    heroImagePosition: '58% 48%',
    statusBadge: 'BODY-WORN C-UAS',
    mottoQuote: 'EVERY SOLDIER A SENSOR.',
    telemetryBadges: [
      { title: '30 MHz–6 GHz', subtitle: 'Wideband SDR sweep', iconName: 'radio' },
      { title: 'ACOUSTIC', subtitle: 'Catches silent OFC drones', iconName: 'target' },
      { title: 'SQUAD MESH', subtitle: 'LoRa triangulation', iconName: 'cpu' },
      { title: 'PASSIVE', subtitle: 'Zero RF emission', iconName: 'shield' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'DETECT',
        phase: 'DUAL-MODALITY DETECTION',
        desc: 'Each soldier unit sweeps 30 MHz–6 GHz by SDR and listens for rotor acoustic harmonics.',
        details: 'Passive acoustic microphone array detects fibre-optic and autonomous drones that emit zero radio signals.',
      },
      {
        num: '02',
        title: 'SHARE',
        phase: 'LORA SQUAD MESH',
        desc: 'Threat type, azimuth bearing, and GPS position are shared automatically across the squad mesh.',
        details: 'Sub-gigahertz tactical LoRa mesh operates reliably in dense jungles, ravines, and concrete urban rubble.',
      },
      {
        num: '03',
        title: 'TRIANGULATE',
        phase: 'AUTOMATED ALGORITHMIC FIX',
        desc: 'Bearings from multiple soldiers are fused mathematically into one computed ground threat location.',
        details: 'Triangulation pinpoints drone launch point and flight azimuth with 3-dimensional accuracy.',
      },
      {
        num: '04',
        title: 'ALERT',
        phase: 'INSTANT TACTICAL WARNING',
        desc: 'Every soldier gets the threat bearing and elevation on chest display with audible and silent haptic alert.',
        details: 'Gives dismounted infantry 30 to 45 seconds of crucial early warning to seek cover or aim weapons.',
      },
    ],
    specialSection: {
      tag: 'CLOSING THE DETECTION GAP',
      title: 'RF-ONLY DETECTORS VS SAG PRAHARI',
      description: 'Why conventional radio scanners fail against modern asymmetric threats:',
      items: [
        {
          title: 'Continuous Wideband Spectrum (30 MHz - 6 GHz)',
          desc: 'Catches non-standard frequencies, frequency-hopping controllers, and improvised analogue video signals.',
        },
        {
          title: 'Acoustic Harmonics Catch RF-Silent & Fibre Drones',
          desc: 'Propeller motor acoustic signature is tracked even when hostile drones emit zero radio frequencies.',
        },
        {
          title: 'Squad-Level Triangulated Position Fix',
          desc: 'Multiple soldier angles intersect to calculate the exact GPS coordinates of the approaching drone.',
        },
        {
          title: 'Modular Dismounted Wearability',
          desc: 'Compact Backpack Sensor Pod connects to lightweight Chest-Mounted Display with zero soldier mobility penalty.',
        },
      ],
    },
    specs: [
      { label: 'System Type', value: 'Body-worn, squad-networked C-UAS detection suite' },
      { label: 'RF / SDR Coverage', value: '30 MHz – 6 GHz (continuous wideband monitoring)' },
      { label: 'RF Detection Range', value: '> 1 km early warning horizon' },
      { label: 'Acoustic Detection Range', value: '150–300 m typical (up to 500 m in low-noise rural environments)' },
      { label: 'Acoustic Sensor Band', value: '70 Hz – 2000 Hz rotor harmonic acoustic frequency array' },
      { label: 'Squad Networking Mesh', value: 'LoRa mesh, 8–10 units linked at 50–100 m tactical spacing' },
      { label: 'Multi-Target Tracking', value: '>= 10 simultaneous contacts (RF channels)' },
      { label: 'Total System Weight', value: '1.2 – 1.8 kg (ergonomically distributed on MOLLE vest)' },
      { label: 'Operating Mode', value: 'Fully passive, receive-only (EMCON silent - undetectable)' },
      { label: 'Indigenous Content', value: '70%+ at prototype, 85%+ at final delivery (Make in India IDDM)' },
    ],
    idealFor: [
      {
        name: 'Dismounted Infantry & Counter-Terror Squads',
        role: 'Early warning during search and cordons',
        desc: 'Alerts soldiers to overhead grenade-dropping quadcopters before they enter visual range.',
      },
      {
        name: 'Forward Pickets & Isolated Bunker Posts',
        role: 'Continuous 360° perimeter hearing',
        desc: 'Guards soldiers sleeping in forward positions against silent midnight drone ambushes.',
      },
      {
        name: 'Convoy Escort Foot Soldiers',
        role: 'High-threat route clearing',
        desc: 'Detects loitering drones hovering over mountain passes waiting for vehicles to enter choke points.',
      },
      {
        name: 'Special Forces Deep Reconnaissance',
        role: 'Passive intelligence gathering',
        desc: 'Zero-emission EMCON design ensures the team cannot be detected by enemy radio direction-finders.',
      },
    ],
  },

  'yamraj': {
    id: 'yamraj',
    num: '01',
    title: 'PROJECT YAMRAJ',
    category: 'FLAGSHIP PROGRAMME · SUPERSONIC STRIKE',
    categoryDomain: 'strike',
    tagline: 'PENETRATE | STRIKE | DOMINATE',
    leadDescription:
      'Indigenous supersonic loitering munition — our flagship programme. Mach 1+ class, rotating detonation engine, and all-Indian sovereign aerospace design engineered to decisively reach tactical targets before they can relocate.',
    pillars: ['DEFEND', 'DETER', 'LEAD'],
    heroImage: '/images/products/PROJECT_YAMRAJ_HERO.webp',
    heroImagePosition: '62% 45%',
    statusBadge: 'FLAGSHIP PROGRAMME · IN DEVELOPMENT',
    mottoQuote: 'CLOSING THE SPEED GAP. STRIKING WITHOUT WARNING.',
    telemetryBadges: [
      { title: 'MACH 1+', subtitle: 'Supersonic sprint', iconName: 'zap' },
      { title: 'RDE ENGINE', subtitle: 'Rotating detonation', iconName: 'cpu' },
      { title: 'SOVEREIGN IP', subtitle: '100% Indian design', iconName: 'shield' },
      { title: 'STANDOFF', subtitle: 'Penetration strike', iconName: 'crosshair' },
    ],
    howItOperates: [
      {
        num: '01',
        title: 'BOOST & CRUISE',
        phase: 'CANISTER LAUNCH',
        desc: 'Launched from ground canister or air platform; accelerates rapidly to high-altitude transit.',
        details: 'High-power solid booster initiates rapid climb prior to rotating detonation engine ignition.',
      },
      {
        num: '02',
        title: 'SUPERSONIC SPRINT',
        phase: 'SPEED ADVANTAGE',
        desc: 'Cruises at supersonic Mach 1+ speeds, shrinking enemy reaction time to mere seconds.',
        details: 'Advanced aerodynamic wedge airframe minimizes thermal drag and radar reflection signature.',
      },
      {
        num: '03',
        title: 'AUTONOMOUS TERMINAL LOCK',
        phase: 'PRECISION SEEKER',
        desc: 'Multispectral autonomous seeker acquires target even through smoke, camouflage, and jamming.',
        details: 'Onboard neural processor verifies target identity against stored 3D CAD military models.',
      },
      {
        num: '04',
        title: 'KINETIC NEUTRALISATION',
        phase: 'DEVASTATING IMPACT',
        desc: 'Terminal supersonic dive delivers penetrating kinetic and explosive destruction.',
        details: 'Enormous kinetic energy ensures destruction of deep command bunkers and hardened missile shelters.',
      },
    ],
    specs: [
      { label: 'System Class', value: 'Supersonic Loitering Munition' },
      { label: 'Speed Class', value: 'Mach 1+ Supersonic Intercept Sprint' },
      { label: 'Propulsion Mechanism', value: 'Rotating Detonation Engine (RDE)' },
      { label: 'Design Architecture', value: '100% Indian Sovereign IP' },
      { label: 'Mission Profile', value: 'Rapid Standoff Deep Penetration & Precision Strike' },
      { label: 'Guidance Suite', value: 'Multi-mode autonomous seeker & anti-jam GPS/NavIC/INS' },
      { label: 'Development Status', value: 'Programme in Development' },
    ],
    idealFor: [
      {
        name: 'Enemy Integrated Air Defence Radar Sites',
        role: 'SEAD / DEAD rapid neutralization',
        desc: 'Destroys high-value radar emitters before they can shut down or relocate.',
      },
      {
        name: 'Hardened Command & Control Bunkers',
        role: 'Deep bunker penetration',
        desc: 'Combines supersonic kinetic energy with penetrating warheads to defeat reinforced concrete.',
      },
      {
        name: 'Mobile Ballistic Missile Launchers',
        role: 'Time-critical target interdiction',
        desc: 'Strikes mobile missile erectors while they are setting up in firing positions.',
      },
      {
        name: 'Forward Operational Airfields',
        role: 'Runway & aircraft neutralization',
        desc: 'Renders enemy forward runways unusable during the opening minutes of combat.',
      },
    ],
  },
};
