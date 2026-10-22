import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Shield,
  Send,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
  Lock,
  ChevronDown,
  Building,
  User,
} from 'lucide-react';

interface ContactPageProps {
  onNavigateHome?: (hash?: string) => void;
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string) => void;
  selectedPlatform?: string;
}

const PLATFORMS_LIST = [
  'Project Yamraj (Mach 1+ Supersonic Loitering Munition)',
  'Doom MK-1 (Short Range Mobile Air Defence)',
  'SAG Kavach (Layered Counter-Drone Shield)',
  'SAG Nirman (Deployable Drone Factory & Spares Workshop)',
  'SAG Vajra UGV (Autonomous Tactical Ground Robot)',
  'SAG Razor 10 (10-Inch Multi-Role FPV Quadcopter)',
  'SAG Razor 15 (15-Inch Multi-Role Strike & C-UAS)',
  'SAG Razor 18 (18-Inch Heavy-Lift FPV Quadcopter)',
  'SAG Net Catcher (Handheld Anti-Drone Net Gun)',
  'SAG Prahari (Body-Worn Squad Drone Detection)',
  'Scout-X (Persistent Border Reconnaissance Quad)',
  'SAG VTOL-250 (Long-Endurance Fixed-Wing VTOL)',
  'Hanuman 100 (High-Altitude Heavy-Lift UAV)',
  'Razor OFC (Jam-Proof Fibre-Optic Control Module)',
  'Swarm Bee (Plug-in Swarm Autonomy Architecture)',
  'SAG Trinetra (Tethered Underwater MCM ROV)',
  'General Procurement / Defence Corridor Partnership',
];

const ENGAGEMENT_TYPES = [
  'Operational Flight Trial',
  'Procurement RFP / RFI',
  'Joint Systems Development',
  'Technical Briefing Request',
  'Supply Chain Partnership',
];

const FAQS = [
  {
    q: 'How can armed forces or security agencies schedule a live flight demonstration?',
    a: 'Official trial requests must be submitted through an authorized defence command email or formal letter of intent. Our flight operations team coordinates trial dates at designated military proving grounds or authorized test ranges.',
  },
  {
    q: 'Are all SAG platforms compliant with Make-in-India and IDDM guidelines?',
    a: 'Yes. All SAG platforms, including airframes, encrypted avionics, flight-control firmware, and autonomous algorithms, are 100% indigenously designed, engineered, and fabricated in India under IDDM (Indigenously Designed, Developed, and Manufactured) provisions.',
  },
  {
    q: 'Can SAG customize payload mounts and optical sensors for specific operational requirements?',
    a: 'Absolutely. We provide modular, customizable sensor and warhead interfaces (thermal/MWIR, daylight EO/IR, laser rangefinders, RF sniffers, and custom payloads) with rapid hardware-in-the-loop turnaround.',
  },
  {
    q: 'What data security and non-disclosure protocols are maintained during briefings?',
    a: 'All technical interactions, performance data sharing, and engineering exchanges are safeguarded under strict bilateral non-disclosure agreements (NDAs) and sovereign cryptographic compliance.',
  },
];

const findMatchingPlatform = (rawName?: string | null): string => {
  if (!rawName) return PLATFORMS_LIST[0];
  const cleaned = rawName.toLowerCase().replace(/[^a-z0-9]/g, '');

  const match = PLATFORMS_LIST.find((p) => {
    const pCleaned = p.toLowerCase().replace(/[^a-z0-9]/g, '');
    return pCleaned.includes(cleaned) || cleaned.includes(pCleaned.slice(0, 10));
  });

  if (match) return match;

  if (cleaned.includes('yamraj')) return PLATFORMS_LIST[0];
  if (cleaned.includes('doom')) return PLATFORMS_LIST[1];
  if (cleaned.includes('kavach')) return PLATFORMS_LIST[2];
  if (cleaned.includes('nirman')) return PLATFORMS_LIST[3];
  if (cleaned.includes('vajra')) return PLATFORMS_LIST[4];
  if (cleaned.includes('razor10')) return PLATFORMS_LIST[5];
  if (cleaned.includes('razor15')) return PLATFORMS_LIST[6];
  if (cleaned.includes('razor18')) return PLATFORMS_LIST[7];
  if (cleaned.includes('razor')) return PLATFORMS_LIST[5];
  if (cleaned.includes('netcatcher') || cleaned.includes('cather') || cleaned.includes('catcher')) return PLATFORMS_LIST[8];
  if (cleaned.includes('prahari')) return PLATFORMS_LIST[9];
  if (cleaned.includes('scout')) return PLATFORMS_LIST[10];
  if (cleaned.includes('vtol')) return PLATFORMS_LIST[11];
  if (cleaned.includes('hanuman')) return PLATFORMS_LIST[12];
  if (cleaned.includes('ofc') || cleaned.includes('fiber') || cleaned.includes('fibre')) return PLATFORMS_LIST[13];
  if (cleaned.includes('swarm') || cleaned.includes('bee')) return PLATFORMS_LIST[14];
  if (cleaned.includes('trinetra')) return PLATFORMS_LIST[15];

  return PLATFORMS_LIST[0];
};

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onNavigate,
  selectedPlatform,
}) => {
  const getInitialPlatform = () => {
    if (selectedPlatform) return findMatchingPlatform(selectedPlatform);
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('platform') || params.get('program');
      if (q) return findMatchingPlatform(q);
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('platform=')) {
        return findMatchingPlatform(hash.split('platform=')[1]);
      }
    }
    return PLATFORMS_LIST[0];
  };

  const [formData, setFormData] = useState({
    name: '',
    rankOrTitle: '',
    organization: '',
    email: '',
    phone: '',
    platform: getInitialPlatform(),
    engagementType: ENGAGEMENT_TYPES[0],
    message: '',
  });

  useEffect(() => {
    if (selectedPlatform) {
      setFormData((prev) => ({
        ...prev,
        platform: findMatchingPlatform(selectedPlatform),
      }));
    } else if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const q = params.get('platform') || params.get('program');
      if (q) {
        setFormData((prev) => ({
          ...prev,
          platform: findMatchingPlatform(q),
        }));
      }
    }
  }, [selectedPlatform]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const addressText =
    'Ground Floor, 43, above Arvind Book House, near BMTC Bus Stop, BHCS Layout, Chandra Layout, Bengaluru, Karnataka 560040, India';
  const phoneText = '+91 9113867676';
  const emailText = 'contactus@sagdefaero.com';
  const googleMapsUrl =
    'https://www.google.com/maps/search/?api=1&query=SAG+Defence+and+Aerospace+Pvt+Ltd+Chandra+Layout+Bengaluru';

  const copyToClipboard = (
    text: string,
    setCopied: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          rankOrTitle: '',
          organization: '',
          email: '',
          phone: '',
          platform: PLATFORMS_LIST[0],
          engagementType: ENGAGEMENT_TYPES[0],
          message: '',
        });
      }, 5000);
    }, 1200);
  };

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      `Hello SAG Aerospace and Defence, my name is ${formData.name || 'an authorized representative'}${
        formData.organization ? ` from ${formData.organization}` : ''
      }. I would like to request technical details regarding ${formData.platform}.`
    );
    window.open(`https://wa.me/919113867676?text=${text}`, '_blank');
  };

  return (
    <div
      className="min-h-screen text-slate-100 font-sans selection:bg-red-600 selection:text-white relative overflow-x-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* =========================================================================
          1. HERO / COMMAND MASTHEAD (Clean Full-Width White Background)
          ========================================================================= */}
      <section
        className="relative w-full border-b border-neutral-200 pt-28 sm:pt-32 pb-16 sm:pb-20 select-none bg-white"
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-500 mb-6">
              <button
                type="button"
                onClick={() => (onNavigate ? onNavigate('home', '#home') : onNavigateHome?.('#home'))}
                className="hover:text-red-600 transition-colors cursor-pointer"
              >
                HOME
              </button>
              <span className="text-neutral-400">/</span>
              <span className="text-red-600 font-bold">CONTACT</span>
            </div>

            {/* Top Indicator Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-6 max-w-full">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span className="truncate">COMMAND CHANNELS // DEFENCE PROCUREMENT</span>
            </div>

            {/* Main Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-neutral-950 mb-6 leading-[1.12]">
              CONTACT <span className="text-red-600">SAG AEROSPACE AND DEFENCE PVT LTD</span>
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Direct mission liaison for armed forces directorates, security agencies, global allies, and aerospace technology partners.
            </p>

            {/* Telemetry Pills */}
            <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 text-[11px] sm:text-xs font-mono">
              <div className="px-3 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 font-semibold flex items-center gap-1.5 sm:gap-2">
                <Building className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
                <span>HQ: BENGALURU, INDIA</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 font-semibold flex items-center gap-1.5 sm:gap-2">
                <Lock className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span>ENCRYPTED DIRECT LIAISON</span>
              </div>
              <div className="px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-1.5 sm:gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>IDDM / ATMANIRBHAR BHARAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. PRIMARY INTERACTIVE BRIEFING FORM & DIRECT CHANNELS GRID (WHITE BACKGROUND)
          ========================================================================= */}
      <section className="relative w-full bg-white border-b border-neutral-200 py-12 sm:py-20 select-none">
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

            {/* Left Column (7 cols): Formal Technical Briefing Form */}
            <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-xl relative overflow-hidden">
              <div className="mb-6 sm:mb-8">
                <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-600 block mb-2">
                  OFFICIAL ENGAGEMENT
                </span>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-neutral-950 tracking-tight">
                  REQUEST TECHNICAL BRIEFING
                </h2>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  Provide your requirements below. Our technical directorate will review your mission parameters and respond within 24 operational hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 px-6 text-center rounded-2xl bg-emerald-50 border border-emerald-200 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-neutral-950 mb-2">
                    TRANSMISSION RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-emerald-900/90 max-w-md mx-auto leading-relaxed mb-6 font-mono">
                    Your briefing request has been logged into our secure command registry. A technical director will contact you through your verified channels.
                  </p>
                  <div className="text-[11px] font-mono text-neutral-600">
                    REFERENCE ID: <span className="text-emerald-700 font-bold">SAG-LIAISON-{Math.floor(100000 + Math.random() * 900000)}</span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Title */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="e.g. Rahul Sharma"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all"
                        />
                        <User className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                        Rank / Designation
                      </label>
                      <input
                        type="text"
                        value={formData.rankOrTitle}
                        onChange={(e) =>
                          setFormData({ ...formData, rankOrTitle: e.target.value })
                        }
                        placeholder="e.g. Wing Commander / Project Lead"
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Organization & Official Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                        Organization / Command *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          required
                          value={formData.organization}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              organization: e.target.value,
                            })
                          }
                          placeholder="e.g. Indian Army / DRDO / Allied Force"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all"
                        />
                        <Building className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                        Official Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="officer@domain.gov.in"
                          className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all"
                        />
                        <Mail className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* Direct Phone */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                      Direct Phone / Secure Mobile *
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98765 43210"
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all"
                      />
                      <Phone className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Platform Focus */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                      Defence System / Program of Interest *
                    </label>
                    <div className="relative">
                      <select
                        value={formData.platform}
                        onChange={(e) =>
                          setFormData({ ...formData, platform: e.target.value })
                        }
                        className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl px-4 py-3 text-sm text-neutral-900 outline-none transition-all appearance-none cursor-pointer"
                      >
                        {PLATFORMS_LIST.map((p) => (
                          <option
                            key={p}
                            value={p}
                            className="bg-white text-neutral-900 py-2"
                          >
                            {p}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-neutral-400 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  {/* Nature of Engagement Pills */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-2 font-bold">
                      Nature of Engagement
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {ENGAGEMENT_TYPES.map((type) => {
                        const isSelected = formData.engagementType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setFormData({ ...formData, engagementType: type })
                            }
                            className={`text-xs font-mono px-3 py-1.5 rounded-lg border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-red-50 border-red-500 text-red-700 font-bold shadow-sm'
                                : 'bg-neutral-50 border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-100'
                            }`}
                          >
                            {type}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Operational Requirements Message */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-700 mb-1.5 font-bold">
                      Operational Requirements / Scope Brief
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Provide mission operational environment (high-altitude, desert, maritime, EW-saturated), payload requirements, or trial parameters..."
                      className="w-full bg-neutral-50 border border-neutral-300 focus:border-red-600 focus:bg-white focus:ring-2 focus:ring-red-600/10 rounded-xl p-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-all resize-none leading-relaxed"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-red-600/25 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>SUBMITTING...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>SUBMIT</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleWhatsAppClick}
                      className="w-full sm:w-auto bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/40 text-[#128C7E] font-mono font-bold text-xs uppercase px-4 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>DIRECT WHATSAPP</span>
                    </button>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-neutral-500 flex items-center gap-2 justify-center">
                    <Lock className="w-3 h-3 text-neutral-400" />
                    <span>All communications safeguarded under strict NDA &amp; sovereign defence protocols.</span>
                  </div>
                </form>
              )}
            </div>

            {/* Right Column (5 cols): Direct Headquarters & Interactive Hub */}
            <div className="lg:col-span-5 space-y-6">

              {/* Card 1: Registered Headquarters & Map */}
              <div className="bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl relative overflow-hidden">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-red-600">
                    HEADQUARTERS &amp; R&amp;D
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-neutral-100 border border-neutral-200 text-[10px] font-mono text-neutral-600 font-semibold">
                    PIN 560040
                  </span>
                </div>

                <h3 className="text-xl font-bold uppercase text-neutral-950 mb-3">
                  SAG Aerospace and Defence Pvt Ltd
                </h3>

                <div className="flex items-start gap-3 text-neutral-600 text-xs sm:text-sm leading-relaxed mb-5">
                  <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p>
                    Ground Floor, 43, above Arvind Book House,<br />
                    near BMTC Bus Stop, BHCS Layout,<br />
                    Chandra Layout, Bengaluru,<br />
                    Karnataka 560040, India
                  </p>
                </div>

                {/* Action buttons for address */}
                <div className="flex items-center gap-2 pt-2 border-t border-neutral-100">
                  <button
                    type="button"
                    onClick={() => copyToClipboard(addressText, setCopiedAddress)}
                    className="flex-1 py-2 px-3 rounded-lg bg-neutral-100 hover:bg-neutral-200 border border-neutral-200 text-xs font-mono text-neutral-800 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-700 font-semibold">COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>COPY ADDRESS</span>
                      </>
                    )}
                  </button>

                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-lg bg-red-50 hover:bg-red-100 border border-red-200 text-xs font-mono text-red-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>GOOGLE MAPS</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                {/* Styled Interactive Map Frame */}
                <div className="mt-5 rounded-2xl overflow-hidden border border-neutral-200 relative aspect-[16/9] shadow-inner bg-neutral-100">
                  <iframe
                    title="SAG Aerospace and Defence Headquarters Chandra Layout Bengaluru"
                    src="https://maps.google.com/maps?q=12.9602,77.5255&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    className="w-full h-full border-0 filter opacity-95 hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute top-2 left-2 pointer-events-none">
                    <span className="px-2 py-0.5 rounded bg-white/90 backdrop-blur border border-neutral-200 text-[10px] font-mono text-neutral-800 font-semibold shadow-sm">
                      CHANDRA LAYOUT // BLR
                    </span>
                  </div>
                </div>
              </div>

              {/* Card 2: Direct Communications */}
              <div className="bg-white border border-neutral-200 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl space-y-4">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-700 block mb-1">
                  SECURE COMMUNICATIONS
                </span>

                {/* Telephone */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-red-50 border border-red-200 text-red-600">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                        DIRECT OPERATIONS
                      </span>
                      <a
                        href={`tel:${phoneText}`}
                        className="text-sm font-mono font-bold text-neutral-900 hover:text-red-600 transition-colors block truncate"
                      >
                        {phoneText}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(phoneText, setCopiedPhone)}
                    className="p-2 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                    title="Copy Phone Number"
                  >
                    {copiedPhone ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Official Email */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                        OFFICIAL INQUIRIES
                      </span>
                      <a
                        href={`mailto:${emailText}`}
                        className="text-sm font-mono font-bold text-neutral-900 hover:text-emerald-700 transition-colors block truncate"
                      >
                        {emailText}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(emailText, setCopiedEmail)}
                    className="p-2 rounded-lg bg-white hover:bg-neutral-100 border border-neutral-200 text-neutral-600 hover:text-neutral-900 transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Operating Hours */}
                <div className="p-3.5 rounded-2xl bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-sky-50 border border-sky-200 text-sky-600">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                      OPERATIONAL TIMINGS
                    </span>
                    <span className="text-xs font-mono text-neutral-800 font-semibold block">
                      Mon – Sat: 09:00 – 18:30 IST
                    </span>
                    <span className="text-[10px] font-mono text-emerald-700 font-semibold block mt-0.5">
                      ● Emergency Defence Support: Active 24/7
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          3. FREQUENTLY ASKED QUESTIONS ACCORDION
          ========================================================================= */}
      <section className="relative w-full py-16 sm:py-24" style={{ backgroundColor: 'rgb(10, 13, 14)' }}>
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              FREQUENT INQUIRIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
              ENGAGEMENT FAQ
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-[#0d1012] border border-neutral-800 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-900/50 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-bold text-white">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-neutral-400 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-red-500' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-400 leading-relaxed border-t border-neutral-800/60 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
