import React, { useState, useEffect } from 'react';
import {
  Send,
  CheckCircle,
  X,
} from 'lucide-react';
import { ScrollReveal } from './effects/TextScrollEffects';

// If you have an external Google Form, Microsoft Form, or Typeform URL, you can put it here.
// When left empty, clicking the CTA smoothly opens the briefing form modal directly on the page.
const EXTERNAL_FORM_URL: string = '';

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
      className="relative bg-black text-slate-100 min-h-[75vh] md:min-h-[85vh] py-24 md:py-32 flex items-center justify-center overflow-hidden"
    >
      {/* Background Video spanning the whole screen / full section */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video/background1.mp4" type="video/mp4" />
        </video>
        {/* Seamless stealth gradient overlays for typography contrast and smooth blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/50 to-black/90" />
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black via-black/95 to-transparent z-[2]" />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Blueprint grid subtle overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-15 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <ScrollReveal yOffset={25}>
          {/* Top Tag matching website theme */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/70 border border-neutral-800 backdrop-blur-md mb-6 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-military uppercase text-cyan-400">
              GET IN TOUCH
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-5 drop-shadow-2xl">
            Stay Connected
          </h2>

          {/* Subtitle Description */}
          <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 drop-shadow-md">
            Stay updated with technical briefings, live flight trials, and sovereign defence opportunities at SAG Defence and Aerospace.
          </p>

          {/* Two CTA Action Buttons with matching brand colors */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 mb-12">
            <button
              type="button"
              onClick={handleCtaClick}
              className="bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Enquire Now
            </button>

            <a
              href="tel:+919113867676"
              className="bg-black/60 hover:bg-neutral-900 text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-xl border border-neutral-700/90 transition-all duration-200 hover:scale-105 backdrop-blur-md cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Sovereign Motto Accent */}
          <div className="flex items-center justify-center">
            <span className="text-sm sm:text-base text-red-500 font-bold tracking-military uppercase drop-shadow-md">
              DEFEND • DETER • LEAD
            </span>
          </div>
        </ScrollReveal>
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
                    <option value="Project Yamraj (Mach 1+ Supersonic Loitering Munition)">Project Yamraj (Mach 1+ Supersonic Loitering Munition)</option>
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
