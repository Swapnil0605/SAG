import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onNavigate?: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Vision', href: '#vision' },
    { label: 'Systems', href: '#products' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/90 backdrop-blur-xl border-b border-neutral-800/90 shadow-2xl py-3'
          : 'bg-gradient-to-b from-black/95 via-black/80 to-transparent py-4'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo Only */}
        <a href="#home" className="flex items-center group">
          <div className="relative flex items-center py-1.5 px-3 rounded-xl bg-white border border-neutral-200 group-hover:border-red-500/80 transition-all duration-300 shadow-sm shadow-black/40">
            <img
              src="/sag-logo-light.png"
              alt="SAG Defence and Aerospace"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[16px] font-medium text-neutral-300 hover:text-white transition-colors duration-200 tracking-wide hover:underline decoration-red-500 underline-offset-8"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="bg-red-600 hover:bg-red-700 text-white text-[14px] font-semibold px-4 py-2 rounded-xl transition-all duration-200 shadow-md shadow-red-600/25"
          >
            Request Briefing
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/98 backdrop-blur-2xl border-b border-neutral-800 px-8 py-6 z-50 shadow-2xl">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-neutral-200 hover:text-red-500 transition-colors py-1 flex items-center justify-between border-b border-neutral-800/80"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-red-600 hover:bg-red-700 text-white text-sm font-semibold py-3 rounded-xl shadow-md"
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
