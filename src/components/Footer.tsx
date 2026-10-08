import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about', hash?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
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
            <div className="flex items-center">
              {/* Brand Logo without any background */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.('home', '#home');
                }}
                className="cursor-pointer"
              >
                <img
                  src="/sag-logo-new.png"
                  alt="SAG Defence & Aerospace Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </a>
            </div>

            {/* Traditional Sanskrit Motto */}
            <div className="pt-2">
              <span
                className="text-[15px] sm:text-[16px] font-bold font-sans block tracking-wide"
                style={{ color: '#046a38' }}
              >
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
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  SAG RAZOR P1 (FPV)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  RAZOR OFC (Fiber Optic)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  SCOUT X (ISR Quad)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  AERON A1 (VTOL Hybrid)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  DOOM MK1 (SAM / CUAS)
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
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
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#home');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('about');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer font-semibold text-neutral-800"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#products"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#products');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  Products &amp; Catalogue
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#roadmap');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
                  Technology Roadmap
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.('home', '#contact');
                  }}
                  className="hover:text-red-600 transition-colors cursor-pointer"
                >
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
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12.5px] sm:text-[13px] font-mono text-neutral-500">
          <div className="text-center sm:text-left">
            <span>© {currentYear} SAG Defence and Aerospace Pvt Ltd. All rights reserved.</span>
          </div>
          <div className="text-center sm:text-right pr-0 sm:pr-24 lg:pr-28">
            <span>Designed and Developed by </span>
            <a
              href="https://qirotec.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-900 hover:text-red-600 font-bold underline underline-offset-4 decoration-red-500 hover:decoration-red-600 transition-colors inline-block cursor-pointer relative z-30 py-0.5"
            >
              Qiro Tech Innovation Pvt Ltd
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
