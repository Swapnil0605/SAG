import React from 'react';

const PDF_STRATEGIC_HIGHLIGHTS = [
  'SOVEREIGN DEFENCE TECHNOLOGY',
  'CLOSING THE SPEED GAP',
  'MACH 1+ SUPERSONIC CLASS',
  'DEFEND • DETER • LEAD',
  'ATMANIRBHAR BHARAT',
  'GNSS-DENIED AUTONOMOUS NAVIGATION',
  'FASTER • STRONGER • AHEAD',
  'ZERO-RF OPTICAL TETHER',
  'DISCIPLINED • FOCUSED • MISSION READY',
  'AI-BASED TARGET LOCKING',
  'WARTIME-SCALE PRODUCTION IN INDIA',
  'MIL-STD-810G & MIL-STD-461E COMPLIANT',
  'CLOSER THREATS • STRONGER DEFENCE',
  'SUB-2M TERMINAL PRECISION CEP',
  'FASTER RESPONSE • SAFER SKIES',
  'PRECISION TECHNOLOGY • A STRONGER TOMORROW',
];

export const SlidingTicker: React.FC = () => {
  return (
    <div
      id="ticker"
      aria-label="SAG Defence strategic doctrines and sovereign capabilities ticker"
      className="relative w-full overflow-hidden bg-[#07090e] border-y border-neutral-800 py-3.5 select-none z-20 group"
    >
      {/* Subtle top & bottom luminous hairline guides */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent" />

      {/* Smooth left & right edge fades */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#07090e] via-[#07090e]/95 to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#07090e] via-[#07090e]/95 to-transparent z-10" />

      {/* Infinite Horizontal Sliding Ticker Track */}
      <div className="ticker-track flex w-max items-center">
        {[...PDF_STRATEGIC_HIGHLIGHTS, ...PDF_STRATEGIC_HIGHLIGHTS].map((text, idx) => (
          <div key={idx} className="flex items-center gap-6 sm:gap-8 mx-4 sm:mx-6">
            {/* Strategic Word / Motto */}
            <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.2em] sm:tracking-[0.24em] text-slate-100 uppercase whitespace-nowrap transition-colors duration-200 hover:text-sky-300">
              {text}
            </span>

            {/* Glowing Tactical Star Reticle Divider */}
            <div className="flex items-center justify-center shrink-0">
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-3.5 h-3.5 text-sky-400 drop-shadow-[0_0_8px_rgba(56,189,248,0.9)]"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M8 0L9.5 6.5L16 8L9.5 9.5L8 16L6.5 9.5L0 8L6.5 6.5L8 0Z" />
                </svg>
                <span className="absolute w-1 h-1 rounded-full bg-white" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SlidingTicker;


