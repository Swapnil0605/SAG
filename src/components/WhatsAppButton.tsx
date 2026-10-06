import React, { useState } from 'react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '919113867676';
  const defaultMessage = encodeURIComponent(
    'Hello SAG Defence & Aerospace, I would like to enquire about your defence platforms and systems.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`;

  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 flex items-center group"
    >
      {/* Tooltip Label */}
      <div
        className={`mr-3 px-3.5 py-1.5 rounded-xl bg-neutral-900/95 border border-neutral-800 text-xs font-mono text-slate-200 shadow-xl backdrop-blur-md transition-all duration-300 pointer-events-none ${isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
          }`}
      >
        <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Chat on WhatsApp
        </span>
      </div>

      {/* WhatsApp Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/60 transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with SAG Defence on WhatsApp"
      >
        {/* Subtle Ambient Pulse Ring */}
        <span className="absolute inset-1 rounded-full bg-[#25D366]/30 animate-ping pointer-events-none opacity-75" />

        {/* Official WhatsApp Silhouette SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7 relative z-10 drop-shadow-sm"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.04 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.49 3.67 12.04 3.67M9.53 7.83C9.37 7.83 9.11 7.89 8.89 8.13C8.67 8.37 8.05 8.95 8.05 10.13C8.05 11.31 8.91 12.44 9.03 12.6C9.15 12.76 10.72 15.18 13.13 16.22C13.7 16.47 14.15 16.62 14.5 16.73C15.08 16.92 15.6 16.89 16.02 16.83C16.49 16.76 17.46 16.24 17.66 15.67C17.86 15.1 17.86 14.61 17.8 14.51C17.74 14.41 17.58 14.35 17.34 14.23C17.1 14.11 15.92 13.53 15.7 13.45C15.48 13.37 15.32 13.33 15.16 13.57C15 13.81 14.55 14.35 14.41 14.51C14.27 14.67 14.13 14.69 13.89 14.57C13.65 14.45 12.88 14.2 11.96 13.38C11.25 12.74 10.77 11.95 10.63 11.71C10.49 11.47 10.61 11.34 10.73 11.22C10.84 11.11 10.98 10.93 11.1 10.79C11.22 10.65 11.26 10.55 11.34 10.39C11.42 10.23 11.38 10.09 11.32 9.97C11.26 9.85 10.78 8.67 10.58 8.19C10.38 7.71 10.18 7.77 10.03 7.77C9.89 7.76 9.73 7.76 9.57 7.76L9.53 7.83Z" />
        </svg>
      </a>
    </aside>
  );
};

export default WhatsAppButton;
