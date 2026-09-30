import React, { useState, useEffect } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  X,
  ArrowUpRight,
} from 'lucide-react';
import {
  HUDScanHeading,
  ScaleStretchText,
  ScrollReveal,
} from './effects/TextScrollEffects';

// If you have an external Google Form, Microsoft Form, or Typeform URL, you can put it here.
// When left empty, clicking the CTA smoothly opens the briefing form modal directly on the page.
const EXTERNAL_FORM_URL = '';

export const ContactSection: React.FC = () => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'SAG RAZOR OFC (Fiber-Optic FPV Drone)',
    message: '',
  });

  // Handle ESC key and body scroll lock for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsFormModalOpen(false);
      }
    };
    if (isFormModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isFormModalOpen]);

  const handleCtaClick = () => {
    if (EXTERNAL_FORM_URL && EXTERNAL_FORM_URL.trim() !== '') {
      window.open(EXTERNAL_FORM_URL, '_blank', 'noopener,noreferrer');
    } else {
      setIsFormModalOpen(true);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsFormModalOpen(false);
      setFormData({
        name: '',
        designation: '',
        organization: '',
        email: '',
        phone: '',
        subject: 'SAG RAZOR OFC (Fiber-Optic FPV Drone)',
        message: '',
      });
    }, 3500);
  };

  return (
    <section
      id="contact"
      className="relative bg-black text-slate-100 pt-16 pb-12 md:pt-20 md:pb-14 border-b border-neutral-800/80 overflow-hidden"
    >
      {/* Background1 Video from Required Info - Firmly pinned full-bleed without drift */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-75"
        >
          <source src="/video/background1.mp4" type="video/mp4" />
        </video>
        {/* Soft, light gradient overlays so Background1 video is clearly visible while text & form remain legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        <div className="absolute inset-0 bg-black/25" />
      </div>

      {/* Blueprint grid background */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Official Contact Card Details with Scroll Reveal */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <ScrollReveal yOffset={25}>
              <div>
                <div className="flex items-center gap-3.5 mb-6">
                  <div className="p-1.5 rounded-xl bg-white border border-neutral-200 shadow-md">
                    <img
                      src="/sag-logo-light.png"
                      alt="SAG Defence and Aerospace"
                      className="h-10 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-red-500 font-bold tracking-wider block">
                      SAG DEFENCE &amp; AEROSPACE
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">
                      ADVANCED SOVEREIGN SYSTEMS DIVISION
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-semibold tracking-military uppercase text-cyan-400 font-mono">
                    OFFICIAL DEFENCE CHANNEL
                  </span>
                </div>

                {/* HUD Scan Reveal on Section Heading */}
                <div className="mb-6">
                  <HUDScanHeading
                    tag="h2"
                    className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white"
                  >
                    Connect with SAG Defence.
                  </HUDScanHeading>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  For classified technical briefings, live flight trials, procurement inquiries, or defense partnerships, connect directly with our engineering directorate.
                </p>

                {/* Direct Info List */}
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-red-500 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">Direct Line</span>
                      <a href="tel:+919113867676" className="text-sm font-bold text-white hover:text-red-400 transition-colors">
                        +91 9113867676
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-red-500 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">Technical Directorate</span>
                      <a href="mailto:cto@sagdefaero.com" className="text-sm font-bold text-white hover:text-red-400 transition-colors">
                        cto@sagdefaero.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">R&amp;D Facility &amp; Headquarters</span>
                      <p className="text-xs text-slate-300 leading-relaxed mt-0.5">
                        Kambipura village karubele road, karubele taluk, kengeri,<br />
                        Karnataka 560074, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center flex-shrink-0 text-cyan-400 shadow-xs">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-neutral-400 block">Official Portal</span>
                      <a href="https://www.sagdefaero.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-neutral-200 hover:text-cyan-400 transition-colors">
                        www.sagdefaero.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4 Pillars Badge */}
              <div className="mt-10 pt-6 border-t border-neutral-800 grid grid-cols-2 gap-3 text-[11px] font-mono uppercase text-neutral-400">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>DEFENCE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>AEROSPACE</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                  <span>TECHNOLOGY</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                  <span>ATMANIRBHAR BHARAT</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Simple Minimal CTA */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <ScrollReveal delay={0.2} yOffset={25}>
              <div className="bg-[#0d0d10]/90 border border-neutral-800 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-md">
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                    TECHNICAL BRIEFING
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                  Request a Technical Briefing.
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-lg">
                  Submit your mission requirements to connect with our engineering team for platform datasheets and flight trials.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={handleCtaClick}
                    className="inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-semibold text-sm px-7 py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 hover:shadow-red-600/50 cursor-pointer group"
                  >
                    <span>Request Briefing</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>

                  <a
                    href="tel:+919113867676"
                    className="inline-flex items-center gap-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-sm font-medium px-5 py-3.5 rounded-xl border border-neutral-800 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+91 9113867676</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Briefing Request Modal Popup */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div
            className="fixed inset-0"
            onClick={() => setIsFormModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-5 mb-6 border-b border-neutral-800">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                  <span className="text-xs font-mono uppercase text-cyan-400 font-semibold tracking-wider">
                    TECHNICAL BRIEFING FORM
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Request Platform Dossier &amp; Trials
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFormModalOpen(false)}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close form modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-white mb-2">Briefing Request Transmitted</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you. Our defense liaison unit will review your transmission and initiate contact via verified secure channels.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Col. R. Sharma / Dr. K. Rao"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                      Designation / Rank *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="e.g., Procurement Officer / Director"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="officer@mod.gov.in / name@org.com"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                      Phone / Contact *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                    Organization / Armed Forces Unit *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Indian Army / Indian Air Force / DRDO / Defence PSUs"
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                    Platform of Interest / Inquiry Scope
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 transition-colors shadow-xs cursor-pointer"
                  >
                    <option value="SAG RAZOR OFC (Fiber-Optic FPV Drone)">SAG RAZOR OFC (Fiber-Optic FPV Drone)</option>
                    <option value="SAG RAZOR P1 (FPV Combat Drone)">SAG RAZOR P1 (FPV Combat Drone)</option>
                    <option value="SCOUT-X (Tactical ISR Quadcopter)">SCOUT-X (Tactical ISR Quadcopter)</option>
                    <option value="AERON A1 (VTOL Hybrid ISR Platform)">AERON A1 (VTOL Hybrid ISR Platform)</option>
                    <option value="DOOM MK-1 (Short-Range SAM Missile)">DOOM MK-1 (Short-Range SAM Missile)</option>
                    <option value="SAG VELOCITY (Counter Drone Interceptor)">SAG VELOCITY (Counter Drone Interceptor)</option>
                    <option value="Mach 1+ Supersonic Loitering Munition Programme">Mach 1+ Supersonic Loitering Munition Programme</option>
                    <option value="Defence Corridor Strategic Partnership">Defence Corridor Strategic Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1.5 font-semibold">
                    Operational Context / Requirements
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify mission profile, environment, or evaluation timelines..."
                    className="w-full bg-black border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-neutral-500 focus:outline-none focus:border-red-500 transition-colors resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormModalOpen(false)}
                    className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 text-xs font-semibold border border-neutral-800 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-red-600 hover:bg-red-500 text-white font-semibold text-xs py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5 text-white" />
                    <span>Transmit Briefing Request</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;
