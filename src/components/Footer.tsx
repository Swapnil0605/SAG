import React from 'react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="text-neutral-700 border-t border-neutral-200 relative overflow-hidden"
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 pb-10 border-b border-neutral-200">
          {/* Col 1 & 2: Brand & Sanskrit Motto */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">
              {/* Brand Logo without any background */}
              <img
                src="/sag-logo-new.png"
                alt="SAG Defence & Aerospace Logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
              <div>
                <span className="text-[17px] font-black tracking-tight text-neutral-950 block leading-none">
                  SAG
                </span>
                <span className="text-[13.5px] font-bold tracking-military uppercase text-red-600 mt-1 block">
                  DEFENCE AND AEROSPACE
                </span>
              </div>
            </div>

            {/* Traditional Sanskrit Motto */}
            <div className="pt-2">
              <span className="text-[15px] text-red-600 font-bold font-sans block tracking-wide">
                नवोन्मेष तन्त्रज्ञाना भ्यां राष्ट्रसेवा
              </span>
              <span className="text-[13px] text-neutral-500 font-mono italic block mt-0.5">
                National Service Through Innovative Technology
              </span>
            </div>

            <p className="text-[13px] text-neutral-600 leading-relaxed max-w-sm pt-1">
              Creating world class defence and aerospace products from Bharat for the world through indigenous engineering, disciplined innovation, and uncompromising reliability.
            </p>

            <div className="pt-2 flex items-center gap-3 text-[12px] font-mono">
              <span className="px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-neutral-800 shadow-xs font-semibold">
                MAKE IN INDIA
              </span>
              <span className="px-3 py-1 rounded-lg bg-red-50 border border-red-200 text-red-600 font-semibold">
                ATMANIRBHAR BHARAT
              </span>
            </div>
          </div>

          {/* Col 3: Systems Portfolio */}
          <div>
            <h4 className="text-[14px] font-bold font-mono tracking-military uppercase text-neutral-950 mb-4">
              DEFENCE SYSTEMS
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-600 font-mono">
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  SAG RAZOR P1 (FPV)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  RAZOR OFC (Fiber Optic)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  SCOUT X (ISR Quad)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  AERON A1 (VTOL Hybrid)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  DOOM MK1 (SAM / CUAS)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  SAG VELOCITY (Interceptor)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <h4 className="text-[14px] font-bold font-mono tracking-military uppercase text-neutral-950 mb-4">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5 text-[13px] text-neutral-600 font-mono">
              <li>
                <a href="#home" className="hover:text-red-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-red-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-red-600 transition-colors">
                  Products &amp; Catalogue
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-red-600 transition-colors">
                  Technology Roadmap
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-red-600 transition-colors">
                  Contact &amp; Inquiries
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Registered Office */}
          <div>
            <h4 className="text-[14px] font-bold font-mono tracking-military uppercase text-neutral-950 mb-4">
              HEADQUARTERS
            </h4>
            <div className="space-y-3 text-[13px] text-neutral-600">
              <p className="leading-relaxed">
                SAG Defence and Aerospace Pvt Ltd<br />
                Ground Floor, 43, above Arvind Book House,<br />
                near BMTC Bus Stop, BHCS Layout,<br />
                Chandra Layout, Bengaluru,<br />
                Karnataka 560040, India
              </p>
              <div className="pt-2 text-[13px] font-mono space-y-1">
                <p className="text-neutral-900 font-medium">
                  Direct:{' '}
                  <a href="tel:+919113867676" className="hover:text-red-600 transition-colors font-semibold">
                    +91 9113867676
                  </a>
                </p>
                <p>
                  <a href="mailto:contactus@sagdefaero.com" className="text-red-600 font-semibold hover:underline">
                    contactus@sagdefaero.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[13px] font-mono text-neutral-500">
          <div className="text-center sm:text-left w-full">
            <span>© {currentYear} SAG Defence and Aerospace Pvt Ltd. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
