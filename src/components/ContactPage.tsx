import React, { useState } from 'react';
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
  Radio,
} from 'lucide-react';

interface ContactPageProps {
  onNavigateHome?: (hash?: string) => void;
}

const PLATFORMS_LIST = [
  'SAG RAZOR OFC (Fiber Optic FPV Drone)',
  'Project Yamraj (Mach 1+ Supersonic Loitering Munition)',
  'SAG RAZOR P1 (Kamikaze Strike Drone)',
  'SCOUT X (Tactical Border ISR Quad)',
  'AERON A1 (Long-Endurance Hybrid VTOL)',
  'DOOM MK1 (Short Range SAM / C-UAS)',
  'SAG VELOCITY (Kinetic Interceptor)',
  'Sovereign Avionics & Edge AI Payload R&D',
  'General Procurement / Corporate Inquiry',
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

export const ContactPage: React.FC<ContactPageProps> = () => {
  const [formData, setFormData] = useState({
    name: '',
    rankOrTitle: '',
    organization: '',
    email: '',
    phone: '',
    platform: PLATFORMS_LIST[0],
    engagementType: ENGAGEMENT_TYPES[0],
    message: '',
  });

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
      `Hello SAG Defence, my name is ${formData.name || 'an authorized representative'}${
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
        className="relative w-full border-b border-neutral-200 pt-28 sm:pt-32 pb-16 sm:pb-20 select-none"
        style={{ backgroundColor: '#ffffff' }}
      >
        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-neutral-900">
          <div className="max-w-4xl mx-auto text-center">
            {/* Top Indicator Beacon */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-mono font-bold uppercase tracking-wider text-neutral-700 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>COMMAND CHANNELS // DEFENCE PROCUREMENT</span>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-neutral-950 mb-6 leading-[1.08]">
              CONTACT <span className="text-red-600">SAG DEFENCE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto font-normal">
              Direct mission liaison for armed forces directorates, security agencies, global allies, and aerospace technology partners.
            </p>

            {/* Telemetry Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-mono">
              <div className="px-3.5 py-1.5 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 font-semibold flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-neutral-500" />
                <span>HQ: BENGALURU, INDIA</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-red-50 border border-red-200 text-red-700 font-semibold flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-red-600" />
                <span>ENCRYPTED DIRECT LIAISON</span>
              </div>
              <div className="px-3.5 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-emerald-600" />
                <span>IDDM / ATMANIRBHAR BHARAT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* =========================================================================
            2. PRIMARY INTERACTIVE BRIEFING FORM & DIRECT CHANNELS GRID
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

          {/* Left Column (7 cols): Formal Technical Briefing Form */}
          <div className="lg:col-span-7 bg-[#0d1012] border border-neutral-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="mb-8">
              <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
                OFFICIAL ENGAGEMENT
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                REQUEST TECHNICAL BRIEFING
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                Provide your requirements below. Our technical directorate will review your mission parameters and respond within 24 operational hours.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 px-6 text-center rounded-2xl bg-emerald-950/30 border border-emerald-800/60 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase text-white mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-xs sm:text-sm text-emerald-200/90 max-w-md mx-auto leading-relaxed mb-6 font-mono">
                  Your briefing request has been logged into our secure command registry. A technical director will contact you through your verified channels.
                </p>
                <div className="text-[11px] font-mono text-neutral-400">
                  REFERENCE ID: <span className="text-emerald-400 font-bold">SAG-LIAISON-{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name & Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
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
                        className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      <User className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
                      Rank / Designation
                    </label>
                    <input
                      type="text"
                      value={formData.rankOrTitle}
                      onChange={(e) =>
                        setFormData({ ...formData, rankOrTitle: e.target.value })
                      }
                      placeholder="e.g. Wing Commander / Project Lead"
                      className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Organization & Official Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
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
                        className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      <Building className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
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
                        className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                      />
                      <Mail className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Direct Phone */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
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
                      className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors"
                    />
                    <Phone className="w-4 h-4 text-neutral-500 absolute right-3.5 top-3.5 pointer-events-none" />
                  </div>
                </div>

                {/* Platform Focus */}
                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
                    Defence System / Program of Interest *
                  </label>
                  <div className="relative">
                    <select
                      value={formData.platform}
                      onChange={(e) =>
                        setFormData({ ...formData, platform: e.target.value })
                      }
                      className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl px-4 py-3 text-sm text-white outline-none transition-colors appearance-none cursor-pointer"
                    >
                      {PLATFORMS_LIST.map((p) => (
                        <option
                          key={p}
                          value={p}
                          className="bg-[#12161a] text-white py-2"
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
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-2 font-semibold">
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
                              ? 'bg-red-950/70 border-red-500 text-red-300 font-bold shadow-md shadow-red-950/50'
                              : 'bg-[#12161a] border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-700'
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
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-neutral-300 mb-1.5 font-semibold">
                    Operational Requirements / Scope Brief
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide mission operational environment (high-altitude, desert, maritime, EW-saturated), payload requirements, or trial parameters..."
                    className="w-full bg-[#12161a] border border-neutral-700/80 focus:border-red-500 rounded-xl p-4 text-sm text-white placeholder-neutral-500 outline-none transition-colors resize-none leading-relaxed"
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:flex-1 bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white font-bold text-sm uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>TRANSMITTING BRIEFING...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SUBMIT BRIEFING REQUEST</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppClick}
                    className="w-full sm:w-auto bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-mono font-bold text-xs uppercase px-4 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
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
            <div className="bg-[#0d1012] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-red-500">
                  HEADQUARTERS &amp; R&amp;D
                </span>
                <span className="px-2 py-0.5 rounded bg-neutral-900 border border-neutral-800 text-[10px] font-mono text-neutral-400">
                  PIN 560040
                </span>
              </div>

              <h3 className="text-xl font-bold uppercase text-white mb-3">
                SAG Defence and Aerospace Pvt Ltd
              </h3>

              <div className="flex items-start gap-3 text-neutral-300 text-xs sm:text-sm leading-relaxed mb-5">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p>
                  Ground Floor, 43, above Arvind Book House,<br />
                  near BMTC Bus Stop, BHCS Layout,<br />
                  Chandra Layout, Bengaluru,<br />
                  Karnataka 560040, India
                </p>
              </div>

              {/* Action buttons for address */}
              <div className="flex items-center gap-2 pt-2 border-t border-neutral-800">
                <button
                  type="button"
                  onClick={() => copyToClipboard(addressText, setCopiedAddress)}
                  className="flex-1 py-2 px-3 rounded-lg bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-xs font-mono text-neutral-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">COPIED</span>
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
                  className="flex-1 py-2 px-3 rounded-lg bg-red-950/40 hover:bg-red-900/60 border border-red-900/50 text-xs font-mono text-red-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>GOOGLE MAPS</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Styled Interactive Map Frame */}
              <div className="mt-5 rounded-2xl overflow-hidden border border-neutral-800 relative aspect-[16/9] shadow-inner bg-neutral-900">
                <iframe
                  title="SAG Defence Headquarters Chandra Layout Bengaluru"
                  src="https://maps.google.com/maps?q=12.9602,77.5255&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale contrast-125 opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  loading="lazy"
                />
                <div className="absolute top-2 left-2 pointer-events-none">
                  <span className="px-2 py-0.5 rounded bg-black/80 border border-neutral-700 text-[10px] font-mono text-white">
                    CHANDRA LAYOUT // BLR
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Direct Communications */}
            <div className="bg-[#0d1012] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-widest uppercase text-emerald-400 block mb-1">
                SECURE COMMUNICATIONS
              </span>

              {/* Telephone */}
              <div className="p-3.5 rounded-2xl bg-[#12161a] border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-red-950/50 border border-red-900/50 text-red-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      DIRECT OPERATIONS
                    </span>
                    <a
                      href={`tel:${phoneText}`}
                      className="text-sm font-mono font-bold text-white hover:text-red-400 transition-colors block truncate"
                    >
                      {phoneText}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(phoneText, setCopiedPhone)}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Official Email */}
              <div className="p-3.5 rounded-2xl bg-[#12161a] border border-neutral-800 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-xl bg-emerald-950/50 border border-emerald-900/50 text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                      OFFICIAL INQUIRIES
                    </span>
                    <a
                      href={`mailto:${emailText}`}
                      className="text-sm font-mono font-bold text-white hover:text-emerald-400 transition-colors block truncate"
                    >
                      {emailText}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(emailText, setCopiedEmail)}
                  className="p-2 rounded-lg bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                  title="Copy Email"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Operating Hours */}
              <div className="p-3.5 rounded-2xl bg-[#12161a] border border-neutral-800 flex items-center gap-3">
                <div className="p-2 rounded-xl bg-sky-950/50 border border-sky-900/50 text-sky-400">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block">
                    OPERATIONAL TIMINGS
                  </span>
                  <span className="text-xs font-mono text-neutral-200 block">
                    Mon – Sat: 09:00 – 18:30 IST
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 block mt-0.5">
                    ● Emergency Defence Support: Active 24/7
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            3. STRATEGIC PROCUREMENT & VERIFICATION PROTOCOLS (3 CARDS)
            ========================================================================= */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold tracking-[0.25em] uppercase text-red-500 block mb-2">
              COMPLIANCE &amp; CAPABILITY
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-white tracking-tight">
              PROCUREMENT STANDARDS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0d1012] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="p-2.5 rounded-xl bg-red-950/40 border border-red-900/40 text-red-500 w-fit mb-5">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase text-white mb-2">
                  IDDM &amp; MAKE IN INDIA
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  100% indigenous intellectual property across airframe aerodynamics, flight avionics, and cryptographic flight firmware. Fully compliant with DAP-2020 IDDM provisions.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-400">
                <span>DAP 2020 IDDM COMPLIANT</span>
              </div>
            </div>

            <div className="bg-[#0d1012] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-900/40 text-emerald-500 w-fit mb-5">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase text-white mb-2">
                  FLIGHT TRIALS &amp; USER EVALUATION
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Field evaluations and live weapon trials conducted at verified firing ranges in coordination with user command headquarters. High-altitude, desert, and tropical test logs available.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-emerald-400">
                <span>MULTI-TERRAIN VALIDATED</span>
              </div>
            </div>

            <div className="bg-[#0d1012] border border-neutral-800 rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-700 transition-colors">
              <div>
                <div className="p-2.5 rounded-xl bg-sky-950/40 border border-sky-900/40 text-sky-500 w-fit mb-5">
                  <Lock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold uppercase text-white mb-2">
                  SUPPLY CHAIN SECURITY
                </h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Complete elimination of vulnerable foreign components in critical flight computers, optical fiber spools, and terminal guidance microelectronics. Zero backdoors.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-sky-400">
                <span>ZERO FOREIGN BACKDOORS</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            4. FREQUENTLY ASKED QUESTIONS ACCORDION
            ========================================================================= */}
        <div className="max-w-3xl mx-auto">
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

      </div>
    </div>
  );
};

export default ContactPage;
