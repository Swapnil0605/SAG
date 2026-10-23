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

interface ContactSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onNavigate }) => {
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    designation: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'Project Yamraj (Mach 1+ Supersonic Loitering Munition)',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('https://formsubmit.co/ajax/contactus@sagdefaero.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          designation_or_rank: formData.designation,
          organization: formData.organization,
          email: formData.email,
          phone: formData.phone,
          platform_of_interest: formData.subject,
          operational_requirements: formData.message || 'No additional notes provided.',
          _subject: `New Inquiry via Home Page: ${formData.subject} - ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status ${response.status}`);
      }

      setIsSubmitting(false);
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
          subject: 'Project Yamraj (Mach 1+ Supersonic Loitering Munition)',
          message: '',
        });
      }, 4000);
    } catch (err: any) {
      console.error('Submission failed:', err);
      setIsSubmitting(false);
      setSubmitError(
        'Submission failed over current network. Please write directly to contactus@sagdefaero.com.'
      );
    }
  };

  return (
    <section
      id="contact"
      className="relative text-slate-100 min-h-[70vh] md:min-h-[80vh] py-24 md:py-32 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: 'rgb(10, 13, 14)' }}
    >
      {/* Background Video – Tinted to RGB(10, 13, 14) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ backgroundColor: 'rgb(10, 13, 14)' }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80 filter brightness-105"
        >
          <source src="/video/background1.mp4" type="video/mp4" />
        </video>
        {/* Soft RGB(10, 13, 14) overlay so background video is clearly visible */}
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(10, 13, 14, 0.45)' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center">
        <ScrollReveal yOffset={25}>
          {/* Top Tag */}
          <div className="mb-3">
            <span className="text-xs sm:text-sm font-mono font-bold tracking-[0.25em] uppercase text-slate-300 block">
              CONTACT US // REACH OUT
            </span>
          </div>

          {/* Main Title */}
          <h2 className="text-3xl xs:text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-tight mb-5">
            <span className="text-white drop-shadow-sm">GET IN </span>
            <span className="text-white drop-shadow-sm">TOUCH</span>
          </h2>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10">
            Have questions, partnership proposals, or product enquiries? Reach out to our team directly.
          </p>

          {/* Two CTA Action Buttons with matching brand colors */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 mb-10 sm:mb-12 w-full max-w-xs sm:max-w-none mx-auto">
            <button
              type="button"
              onClick={handleCtaClick}
              className="w-full sm:w-auto text-center justify-center bg-red-600 hover:bg-red-500 text-white font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl shadow-xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-200 hover:scale-105 cursor-pointer"
            >
              Enquire Now
            </button>

            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.('contact');
              }}
              className="w-full sm:w-auto text-center justify-center bg-neutral-900 hover:bg-neutral-800 text-white font-semibold text-sm sm:text-base px-8 py-3.5 rounded-xl border border-neutral-700 transition-all duration-200 hover:scale-105 shadow-sm cursor-pointer"
            >
              Contact Us
            </a>
          </div>

          {/* Sovereign Motto Accent */}
          <div className="flex items-center justify-center">
            <span className="text-xs sm:text-base text-red-500 font-bold tracking-military uppercase">
              DEFEND • DETER • LEAD
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Briefing Request Modal Popup */}
      {isFormModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md">
          {/* Backdrop click to close */}
          <div
            className="fixed inset-0"
            onClick={() => setIsFormModalOpen(false)}
            aria-hidden="true"
          />

          <div className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0d0d10] border border-neutral-800 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-10 shadow-2xl text-slate-100">
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 sm:pb-5 mb-5 sm:mb-6 border-b border-neutral-800">
              <div className="pr-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse shrink-0" />
                  <span className="text-[10px] sm:text-xs font-mono uppercase text-slate-300 font-semibold tracking-wider">
                    TECHNICAL BRIEFING FORM
                  </span>
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-white">
                  Request Platform Dossier &amp; Trials
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsFormModalOpen(false)}
                className="p-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
                aria-label="Close form modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {submitted ? (
              <div className="py-10 sm:py-12 text-center">
                <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 text-emerald-400 mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl font-bold text-white mb-2">Briefing Request Transmitted</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
                  Thank you. Your dossier request has been dispatched to <span className="text-emerald-400 font-mono font-bold">contactus@sagdefaero.com</span>. Our defense liaison unit will initiate contact via verified secure channels.
                </p>
              </div>
            ) : (
              <form
                id="contactFormModal"
                action="https://formsubmit.co/contactus@sagdefaero.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* FormSubmit Config */}
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input
                  type="hidden"
                  name="_subject"
                  value={`New Inquiry via Home Page: ${formData.subject} - ${formData.name || 'New Lead'}`}
                />

                {submitError && (
                  <div className="p-3.5 rounded-xl bg-red-950/70 border border-red-700/60 text-red-300 text-xs leading-relaxed">
                    <p className="font-bold text-red-200 mb-1">Transmission Alert</p>
                    <p className="mb-2">{submitError}</p>
                    <a
                      href="mailto:contactus@sagdefaero.com"
                      className="text-red-400 underline font-mono hover:text-white"
                    >
                      Click here to email contactus@sagdefaero.com directly
                    </a>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Col. R. Sharma / Dr. K. Rao"
                      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Designation / Rank *
                    </label>
                    <input
                      type="text"
                      name="designation_or_rank"
                      required
                      value={formData.designation}
                      onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                      placeholder="e.g., Procurement Officer / Director"
                      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Official Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="officer@mod.gov.in / name@org.com"
                      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                      Phone / Contact *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98XXXXXXXX"
                      className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Organization / Armed Forces Unit *
                  </label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g., Indian Army / Indian Air Force / DRDO / Defence PSUs"
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Platform of Interest / Inquiry Scope
                  </label>
                  <select
                    name="platform_of_interest"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors shadow-xs cursor-pointer"
                  >
                    <option value="Project Yamraj (Mach 1+ Supersonic Loitering Munition)">Project Yamraj (Mach 1+ Supersonic Loitering Munition)</option>
                    <option value="Doom MK-1 (Short Range Mobile Air Defence)">Doom MK-1 (Short Range Mobile Air Defence)</option>
                    <option value="SAG Kavach (Layered Counter-Drone Shield)">SAG Kavach (Layered Counter-Drone Shield)</option>
                    <option value="SAG Nirman (Battlefield Drone Factory)">SAG Nirman (Battlefield Drone Factory)</option>
                    <option value="SAG Vajra UGV (Autonomous Combat & Logistics Ground Robot)">SAG Vajra UGV (Autonomous Combat & Logistics Ground Robot)</option>
                    <option value="Razor FPV Series (Combat & Strike FPV Drones)">Razor FPV Series (Combat & Strike FPV Drones)</option>
                    <option value="SAG Razor OFC (Fibre-Optic Strike Drone)">SAG Razor OFC (Fibre-Optic Strike Drone)</option>
                    <option value="SAG Net Catcher (Pneumatic Kinetic Interceptor)">SAG Net Catcher (Pneumatic Kinetic Interceptor)</option>
                    <option value="Scout X (Tactical ISR Quadcopter)">Scout X (Tactical ISR Quadcopter)</option>
                    <option value="Hanuman-100 (Tactical Cargo Logistics UAV)">Hanuman-100 (Tactical Cargo Logistics UAV)</option>
                    <option value="Swarm Bee (Autonomous AI Swarm Strike)">Swarm Bee (Autonomous AI Swarm Strike)</option>
                    <option value="SAG VTOL-250 (Long-Endurance Hybrid ISR)">SAG VTOL-250 (Long-Endurance Hybrid ISR)</option>
                    <option value="SAG Trinetra (Naval Mine Neutralization ROV)">SAG Trinetra (Naval Mine Neutralization ROV)</option>
                    <option value="SAG Prahari (Autonomous Perimeter Sentry Robot)">SAG Prahari (Autonomous Perimeter Sentry Robot)</option>
                    <option value="Defence Corridor Strategic Partnership">Defence Corridor Strategic Partnership</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-slate-300 mb-1.5 font-semibold">
                    Operational Context / Requirements
                  </label>
                  <textarea
                    name="operational_requirements"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify mission profile, environment, or evaluation timelines..."
                    className="w-full bg-neutral-900/90 border border-neutral-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none shadow-xs"
                  />
                </div>

                <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setIsFormModalOpen(false)}
                    className="px-5 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-slate-300 text-xs font-semibold border border-neutral-800 transition-colors cursor-pointer text-center"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 sm:flex-none px-6 bg-red-600 hover:bg-red-500 active:scale-[0.98] text-white font-semibold text-xs py-3 rounded-xl transition-all duration-200 shadow-lg shadow-red-600/30 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5 text-white" />
                        <span>Transmit Briefing Request</span>
                      </>
                    )}
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
