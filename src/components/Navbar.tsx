import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage?: 'home' | 'about' | 'contact' | 'products';
  onNavigate?: (page: 'home' | 'about' | 'contact' | 'products', hash?: string) => void;
}

interface ProductDropdownItem {
  name: string;
  category: string;
  tag: string;
  href: string;
  hash: string;
  image: string;
}

const PRODUCTS_LIST: ProductDropdownItem[] = [
  {
    name: 'Project Yamraj',
    category: 'Supersonic Loitering Munition',
    tag: 'SUPERSONIC',
    href: '/products#yamraj',
    hash: '#yamraj',
    image: '/images/products/project-yamraj.webp',
  },
  {
    name: 'Doom MK-1',
    category: 'Short Range Mobile Air Defence',
    tag: 'SHORAD / SAM',
    href: '/products#doom-mk1',
    hash: '#doom-mk1',
    image: '/images/products/doom-mk1.webp',
  },
  {
    name: 'SAG Kavach',
    category: 'Layered Counter-Drone Shield',
    tag: 'CUAS SHIELD',
    href: '/products#sag-kavach',
    hash: '#sag-kavach',
    image: '/images/products/sag-kavach.webp',
  },
  {
    name: 'SAG Nirman',
    category: 'Battlefield Drone Factory',
    tag: 'MANUFACTURING',
    href: '/products#sag-nirman',
    hash: '#sag-nirman',
    image: '/images/products/SAG NIRMAN.webp',
  },
  {
    name: 'SAG Vajra UGV',
    category: 'Autonomous Ground Robot',
    tag: 'UGV ROBOTICS',
    href: '/products#sag-vajra-ugv',
    hash: '#sag-vajra-ugv',
    image: '/images/products/SAG VAJRA UGV.webp',
  },
  {
    name: 'Razor FPV Series',
    category: 'Tactical Strike & ISR Drones',
    tag: 'FPV STRIKE',
    href: '/products#razor-fpv-series',
    hash: '#razor-fpv-series',
    image: '/images/products/RAZOR FPV SERIES.webp',
  },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentPage = 'home',
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Lock background scrolling and attach ESC listener when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setMobileMenuOpen(false);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        document.body.style.overflow = '';
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

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
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            onNavigate?.('home', '#home');
          }}
          className="flex items-center group cursor-pointer"
        >
          <img
            src="/sag-logo-new.png"
            alt="SAG Aerospace and Defence Pvt Ltd"
            className="h-11 sm:h-14 md:h-[65px] lg:h-[70px] w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('home', '#home');
            }}
            className={`text-[16px] transition-colors duration-200 tracking-wide underline-offset-8 cursor-pointer ${
              currentPage === 'home'
                ? 'font-bold text-neutral-950 underline decoration-red-600'
                : 'font-semibold text-neutral-700 hover:text-neutral-950 hover:underline decoration-red-600'
            }`}
          >
            Home
          </a>

          <a
            href="/about"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('about');
            }}
            className={`text-[16px] transition-colors duration-200 tracking-wide underline-offset-8 cursor-pointer ${
              currentPage === 'about'
                ? 'font-bold text-neutral-950 underline decoration-red-600'
                : 'font-semibold text-neutral-700 hover:text-neutral-950 hover:underline decoration-red-600'
            }`}
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
              href="/products"
              onClick={(e) => {
                e.preventDefault();
                setDesktopDropdownOpen(false);
                onNavigate?.('products');
              }}
              className={`inline-flex items-center gap-1.5 text-[16px] transition-colors duration-200 tracking-wide underline-offset-8 py-2 cursor-pointer ${
                currentPage === 'products'
                  ? 'font-bold text-neutral-950 underline decoration-red-600'
                  : 'font-semibold text-neutral-700 hover:text-neutral-950 hover:underline decoration-red-600'
              }`}
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
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200 w-[560px] max-w-[calc(100vw-2rem)]"
              >
                <div className="bg-white rounded-2xl border border-neutral-200 shadow-2xl p-4 overflow-hidden">
                  {/* 2-Column Grid of Products */}
                  <div className="grid grid-cols-2 gap-2">
                    {PRODUCTS_LIST.map((prod) => (
                      <a
                        key={prod.name}
                        href={prod.href}
                        onClick={(e) => {
                          e.preventDefault();
                          setDesktopDropdownOpen(false);
                          onNavigate?.('products', prod.hash);
                        }}
                        className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-neutral-50 border border-transparent hover:border-neutral-200 transition-all group cursor-pointer"
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
                      href="/products"
                      onClick={(e) => {
                        e.preventDefault();
                        setDesktopDropdownOpen(false);
                        onNavigate?.('products');
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors cursor-pointer"
                    >
                      <span>View all products &rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('contact');
            }}
            className={`text-[16px] transition-colors duration-200 tracking-wide underline-offset-8 cursor-pointer ${
              currentPage === 'contact'
                ? 'font-bold text-neutral-950 underline decoration-red-600'
                : 'font-semibold text-neutral-700 hover:text-neutral-950 hover:underline decoration-red-600'
            }`}
          >
            Contact
          </a>
        </div>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/contact"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.('contact');
            }}
            className="bg-red-600 hover:bg-red-700 text-white text-[16px] font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-red-600/20 cursor-pointer"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden p-2 rounded-xl bg-neutral-100 border border-neutral-200 text-neutral-800 hover:text-red-600 hover:bg-neutral-200 focus:outline-none cursor-pointer transition-colors"
          aria-label="Open Navigation"
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile Off-Canvas Drawer matching reference screenshot */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          mobileMenuOpen ? 'pointer-events-auto opacity-100 visible' : 'pointer-events-none opacity-0 invisible'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className={`absolute inset-0 bg-neutral-950/60 backdrop-blur-xs transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer Panel */}
        <aside
          className={`absolute inset-y-0 left-0 w-[84%] max-w-[340px] bg-white h-full flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out transform ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Top Header: Brand Name + Circular Close Button */}
          <div className="flex items-center justify-between px-6 py-4 sm:py-5 border-b border-slate-100">
            <div className="flex items-center gap-2.5">
              <img
                src="/sag-logo-new.png"
                alt="SAG Aerospace and Defence Pvt Ltd"
                className="h-8 w-auto object-contain"
              />
              <span className="font-extrabold text-neutral-900 tracking-wider uppercase text-xs sm:text-[13px] leading-tight">
                SAG AEROSPACE &amp; DEFENCE
              </span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer flex-shrink-0"
              aria-label="Close navigation"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links with dividers */}
          <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
            {/* HOME */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('home', '#home');
              }}
              className={`mobile-drawer-nav-item transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-red-50/80 text-red-600'
                  : 'text-neutral-900 hover:bg-slate-50 hover:text-red-600'
              }`}
            >
              <span>HOME</span>
            </a>

            {/* ABOUT US */}
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('about');
              }}
              className={`mobile-drawer-nav-item transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-red-50/80 text-red-600'
                  : 'text-neutral-900 hover:bg-slate-50 hover:text-red-600'
              }`}
            >
              <span>ABOUT US</span>
            </a>

            {/* PRODUCTS Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                className={`mobile-drawer-nav-item transition-colors cursor-pointer ${
                  currentPage === 'products'
                    ? 'text-red-600'
                    : 'text-neutral-900 hover:bg-slate-50 hover:text-red-600'
                }`}
              >
                <span>PRODUCTS</span>
                <ChevronDown
                  className={`w-4 h-4 text-neutral-500 transition-transform duration-200 ${
                    mobileProductsOpen ? 'rotate-180 text-red-600' : ''
                  }`}
                />
              </button>
              {mobileProductsOpen && (
                <div className="bg-slate-50/80 px-4 py-3 space-y-2 border-t border-slate-100">
                  {PRODUCTS_LIST.map((prod) => (
                    <a
                      key={prod.name}
                      href={prod.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileProductsOpen(false);
                        onNavigate?.('products', prod.hash);
                      }}
                      className="flex items-center gap-3 py-2 px-2 rounded-lg hover:bg-white text-neutral-700 hover:text-red-600 group cursor-pointer transition-colors"
                    >
                      <div className="w-9 h-9 rounded bg-white border border-neutral-200 p-0.5 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={prod.image}
                          alt={prod.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-bold text-neutral-900 group-hover:text-red-600 block truncate">
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
                      href="/products"
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileMenuOpen(false);
                        setMobileProductsOpen(false);
                        onNavigate?.('products');
                      }}
                      className="text-xs font-bold text-red-600 flex items-center justify-between py-1.5 px-2 cursor-pointer"
                    >
                      <span>View all products &rarr;</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* CONTACT */}
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('contact');
              }}
              className={`mobile-drawer-nav-item transition-colors cursor-pointer ${
                currentPage === 'contact'
                  ? 'bg-red-50/80 text-red-600'
                  : 'text-neutral-900 hover:bg-slate-50 hover:text-red-600'
              }`}
            >
              <span>CONTACT</span>
            </a>
          </div>

          {/* Bottom CTA Button */}
          <div className="mobile-drawer-cta-container border-t border-slate-100 bg-white">
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                onNavigate?.('contact');
              }}
              className="w-full bg-[#E5252A] hover:bg-red-700 active:scale-[0.98] text-white font-bold py-4 px-5 rounded-xl shadow-lg shadow-red-600/30 flex items-center justify-center gap-1.5 uppercase text-xs sm:text-sm tracking-wide transition-all cursor-pointer"
            >
              <span>Contact Us</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
