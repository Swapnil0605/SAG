import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ChevronRight, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

interface ProductDropdownItem {
  name: string;
  category: string;
  tag: string;
  href: string;
  image: string;
}

const PRODUCTS_LIST: ProductDropdownItem[] = [
  {
    name: 'SAG RAZOR P1',
    category: 'Kamikaze FPV Strike Drone',
    tag: 'STRIKE',
    href: '#products',
    image: '/images/products/sag-razor-p1.png',
  },
  {
    name: 'SAG RAZOR OFC',
    category: 'Fiber Optic Jam Proof FPV',
    tag: 'FIBER OPTIC',
    href: '#products',
    image: '/images/products/razor-ofc-1.png',
  },
  {
    name: 'SCOUT X',
    category: 'Persistent Border ISR Quadcopter',
    tag: 'ISR QUAD',
    href: '#products',
    image: '/images/products/scout-x.png',
  },
  {
    name: 'AERON A1',
    category: 'Long Endurance Hybrid VTOL',
    tag: 'VTOL MALE',
    href: '#products',
    image: '/images/products/aeron-a1.png',
  },
  {
    name: 'DOOM MK1',
    category: 'Short Range Surface to Air Missile',
    tag: 'SAM / CUAS',
    href: '#products',
    image: '/images/products/doom-mk1.png',
  },
  {
    name: 'SAG VELOCITY',
    category: 'High Speed Kinetic Interceptor',
    tag: 'CUAS INTERCEPT',
    href: '#products',
    image: '/images/products/sag-velocity.png',
  },
];

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopDropdownOpen(false);
    }, 180);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-neutral-200 shadow-xs ${
        scrolled ? 'py-1.5' : 'py-2.5'
      }`}
      style={{ backgroundColor: 'rgb(255, 255, 255)' }}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Logo without background */}
        <a href="#home" className="flex items-center group">
          <img
            src="/sag-logo-new.png"
            alt="SAG Defence and Aerospace"
            className="h-14 sm:h-16 md:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            className="text-[16px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 tracking-wide hover:underline decoration-red-600 underline-offset-8"
          >
            Home
          </a>

          <a
            href="#about"
            className="text-[16px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 tracking-wide hover:underline decoration-red-600 underline-offset-8"
          >
            About Us
          </a>

          {/* Products with Interactive Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href="#products"
              onClick={() => setDesktopDropdownOpen(false)}
              className="inline-flex items-center gap-1.5 text-[16px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 tracking-wide hover:underline decoration-red-600 underline-offset-8 py-2"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                  desktopDropdownOpen ? 'rotate-180 text-red-600' : ''
                }`}
              />
            </a>

            {/* Desktop Dropdown Flyout Panel */}
            {desktopDropdownOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                style={{ width: '560px' }}
              >
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl p-4 overflow-hidden">
                  {/* 2-Column Grid of Products */}
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCTS_LIST.map((prod) => (
                      <a
                        key={prod.name}
                        href={prod.href}
                        onClick={() => setDesktopDropdownOpen(false)}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group"
                      >
                        <div className="w-12 h-10 rounded-lg bg-neutral-100 border border-neutral-200 p-1 flex items-center justify-center flex-shrink-0 group-hover:border-red-300">
                          <img
                            src={prod.image}
                            alt={prod.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between gap-1">
                            <span className="text-[13.5px] font-bold text-neutral-900 group-hover:text-red-600 transition-colors truncate">
                              {prod.name}
                            </span>
                          </div>
                          <span className="text-[11px] text-neutral-500 block truncate">
                            {prod.category}
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Dropdown Footer CTA */}
                  <div className="mt-2.5 pt-2.5 border-t border-neutral-100 flex items-center justify-end">
                    <a
                      href="#products"
                      onClick={() => setDesktopDropdownOpen(false)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                    >
                      <span>Explore Full Systems Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="#roadmap"
            className="text-[16px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 tracking-wide hover:underline decoration-red-600 underline-offset-8"
          >
            Roadmap
          </a>

          <a
            href="#contact"
            className="text-[16px] font-semibold text-neutral-700 hover:text-neutral-950 transition-colors duration-200 tracking-wide hover:underline decoration-red-600 underline-offset-8"
          >
            Contact
          </a>
        </div>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white text-[16px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-red-600/20"
          >
            Request Briefing
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 hover:text-red-600 hover:bg-neutral-200 focus:outline-none cursor-pointer transition-colors"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-full left-0 w-full border-b border-neutral-200 px-6 py-6 z-50 shadow-lg max-h-[85vh] overflow-y-auto"
          style={{ backgroundColor: 'rgb(255, 255, 255)' }}
        >
          <div className="flex flex-col space-y-3">
            <a
              href="#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-neutral-800 hover:text-red-600 transition-colors py-1.5 flex items-center justify-between border-b border-neutral-100"
            >
              <span>Home</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-neutral-800 hover:text-red-600 transition-colors py-1.5 flex items-center justify-between border-b border-neutral-100"
            >
              <span>About Us</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>

            {/* Mobile Products Accordion */}
            <div className="border-b border-neutral-100 pb-1.5">
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className="w-full text-[16px] font-semibold text-neutral-800 hover:text-red-600 transition-colors py-1.5 flex items-center justify-between cursor-pointer"
              >
                <span>Products &amp; Systems</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-400 transition-transform duration-200 ${
                    mobileProductsOpen ? 'rotate-180 text-red-600' : ''
                  }`}
                />
              </button>

              {mobileProductsOpen && (
                <div className="pl-3 pr-1 pt-2 pb-1 space-y-2 bg-neutral-50 rounded-xl my-1 border border-neutral-100">
                  {PRODUCTS_LIST.map((prod) => (
                    <a
                      key={prod.name}
                      href={prod.href}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                      className="flex items-center gap-2.5 py-1.5 text-neutral-700 hover:text-red-600 transition-colors group"
                    >
                      <div className="w-8 h-8 rounded bg-white border border-neutral-200 p-0.5 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-[13px] font-bold text-neutral-900 group-hover:text-red-600 block truncate">
                          {prod.name}
                        </span>
                        <span className="text-[10px] text-neutral-500 block truncate">
                          {prod.category}
                        </span>
                      </div>
                    </a>
                  ))}
                  <div className="pt-2 border-t border-neutral-200">
                    <a
                      href="#products"
                      onClick={() => {
                        setMobileMenuOpen(false);
                        setMobileProductsOpen(false);
                      }}
                      className="text-xs font-bold text-red-600 flex items-center gap-1 py-1"
                    >
                      <span>Explore Complete Catalogue</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#roadmap"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-neutral-800 hover:text-red-600 transition-colors py-1.5 flex items-center justify-between border-b border-neutral-100"
            >
              <span>Roadmap</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[16px] font-semibold text-neutral-800 hover:text-red-600 transition-colors py-1.5 flex items-center justify-between border-b border-neutral-100"
            >
              <span>Contact</span>
              <ChevronRight className="w-4 h-4 text-neutral-400" />
            </a>

            <div className="pt-3 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-red-600 hover:bg-red-700 text-white text-[16px] font-semibold py-3 rounded-xl shadow-md"
              >
                Request Briefing
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
