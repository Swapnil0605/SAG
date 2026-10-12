import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface CarouselItem {
  title: string;
  description?: string;
  image?: string;
  code?: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
  border?: string;
  badge?: string;
  [key: string]: any;
}

export interface CarouselProps {
  items: CarouselItem[];
  baseWidth?: number;
  aspectRatio?: number;
  effect?: 'tilt' | 'slide' | 'fade';
  indicator?: 'dots' | 'numbers' | 'none';
  frame?: boolean;
  arrows?: boolean;
  loop?: boolean;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  theme?: 'dark' | 'light';
  radius?: number;
  round?: boolean;
  className?: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  baseWidth = 300,
  aspectRatio = 1.05,
  effect = 'tilt',
  indicator = 'dots',
  frame = true,
  arrows = false,
  loop = false,
  autoplay = false,
  autoplayDelay = 4250,
  pauseOnHover = false,
  theme = 'dark',
  radius = 10,
  round = false,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalItems = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev < totalItems - 1) return prev + 1;
      return loop ? 0 : (autoplay ? 0 : prev);
    });
  }, [totalItems, loop, autoplay]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => {
      if (prev > 0) return prev - 1;
      return loop ? totalItems - 1 : prev;
    });
  }, [totalItems, loop]);

  // Autoplay handler
  useEffect(() => {
    if (!autoplay || totalItems <= 1) return;
    if (pauseOnHover && isHovered) return;

    const timer = setInterval(() => {
      nextSlide();
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, pauseOnHover, isHovered, nextSlide, totalItems]);

  // Touch and mouse drag handlers
  const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    setDragStartX(clientX);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
    if (dragStartX === null || !isDragging) return;
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const diff = clientX - dragStartX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const threshold = 45;
    if (dragOffset < -threshold) {
      nextSlide();
    } else if (dragOffset > threshold) {
      prevSlide();
    }
    setDragStartX(null);
    setDragOffset(0);
    setIsDragging(false);
  };

  // Card dimensions based on baseWidth and aspectRatio
  const cardWidth = Math.min(baseWidth, 340);
  const cardHeight = Math.round(cardWidth * (aspectRatio || 1.05));
  const cardRadius = round ? `${radius * 1.5}px` : `${radius}px`;

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex flex-col items-center justify-center overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleTouchEnd();
      }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleTouchStart}
      onMouseMove={handleTouchMove}
      onMouseUp={handleTouchEnd}
    >
      {/* 3D Perspective Stage */}
      <div
        className="relative w-full flex items-center justify-center"
        style={{
          height: `${cardHeight + 40}px`,
          perspective: effect === 'tilt' ? '1200px' : 'none',
          perspectiveOrigin: 'center center',
        }}
      >
        {items.map((item, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);

          // Calculate interactive styles for tilt effect
          let translateX = offset * (cardWidth * 0.72) + (isDragging ? dragOffset * 0.75 : 0);
          let scale = 1 - absOffset * 0.12;
          let rotateY = offset * -20;
          let opacity = 1 - absOffset * 0.35;
          let zIndex = 30 - absOffset * 5;

          if (absOffset > 2) {
            opacity = 0;
            zIndex = 0;
          }

          const isCurrent = index === currentIndex;
          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="absolute top-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer"
              style={{
                width: `${cardWidth}px`,
                height: `${cardHeight}px`,
                transform: `translateX(${translateX}px) scale(${Math.max(scale, 0.75)}) ${
                  effect === 'tilt' ? `rotateY(${rotateY}deg) translateZ(${-absOffset * 60}px)` : ''
                }`,
                opacity: Math.max(opacity, 0),
                zIndex,
                transformStyle: 'preserve-3d',
                borderRadius: cardRadius,
              }}
            >
              {/* Card Container Frame */}
              <div
                className={`relative w-full h-full p-6 sm:p-7 flex flex-col justify-between overflow-hidden shadow-2xl transition-all duration-300 ${
                  frame
                    ? theme === 'dark'
                      ? 'bg-gradient-to-b from-[#13181c] via-[#0d1114] to-[#080b0d] border border-neutral-800'
                      : 'bg-white border border-neutral-200'
                    : ''
                } ${isCurrent ? 'ring-1 ring-red-500/40 shadow-red-950/30' : ''}`}
                style={{
                  borderRadius: cardRadius,
                }}
              >
                {/* Optional background image banner */}
                {item.image && (
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-20 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080b0d] via-[#080b0d]/80 to-transparent" />
                  </div>
                )}

                {/* Subtle Glow Accent */}
                <div className="absolute -right-12 -top-12 w-44 h-44 rounded-full bg-red-600/10 blur-2xl pointer-events-none" />

                {/* Card Top: Icon & Tactical Code */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    {Icon ? (
                      <div className={`p-3 rounded-2xl ${
                        theme === 'light'
                          ? 'bg-neutral-50 border border-neutral-200 shadow-sm'
                          : 'bg-neutral-900/90 border border-neutral-700/80 shadow-md'
                      }`}>
                        <Icon className={`w-5 h-5 ${item.color || 'text-red-500'}`} />
                      </div>
                    ) : (
                      <div className={`w-10 h-10 rounded-2xl ${
                        theme === 'light'
                          ? 'bg-neutral-100 border border-neutral-200'
                          : 'bg-neutral-900 border border-neutral-800'
                      }`} />
                    )}

                    <span className={`text-[11px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-md border ${
                      theme === 'light'
                        ? 'text-neutral-500 bg-neutral-100 border-neutral-200'
                        : 'text-neutral-400 bg-neutral-900/80 border-neutral-800'
                    }`}>
                      {item.code || `0${index + 1}`}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-black uppercase tracking-tight mb-3 ${
                    theme === 'light' ? 'text-neutral-950' : 'text-white'
                  }`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal ${
                    theme === 'light' ? 'text-neutral-600' : 'text-neutral-300'
                  }`}>
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Sovereign Mandate Status Bar */}
                <div className={`relative z-10 pt-4 mt-4 border-t flex items-center justify-between text-[11px] font-mono ${
                  theme === 'light'
                    ? 'border-neutral-200 text-neutral-500'
                    : 'border-neutral-800/80 text-neutral-400'
                }`}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                    <span>{item.badge || 'SOVEREIGN MANDATE'}</span>
                  </div>
                  <span className={`${theme === 'light' ? 'text-neutral-400' : 'text-neutral-500'} font-bold`}>{index + 1}/{totalItems}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Optional Navigation Arrows */}
      {arrows && totalItems > 1 && (
        <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex items-center justify-between pointer-events-none z-30">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
            className="p-2 rounded-full bg-neutral-900/80 border border-neutral-700 text-white pointer-events-auto hover:bg-red-600 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            ←
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
            className="p-2 rounded-full bg-neutral-900/80 border border-neutral-700 text-white pointer-events-auto hover:bg-red-600 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            →
          </button>
        </div>
      )}

      {/* Indicator Dots */}
      {indicator === 'dots' && totalItems > 1 && (
        <div className="relative z-20 flex items-center justify-center gap-2 mt-6">
          {items.map((_, dotIdx) => (
            <button
              key={dotIdx}
              type="button"
              aria-label={`Go to slide ${dotIdx + 1}`}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              className={`transition-all duration-300 cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-6 h-2 rounded-full bg-red-600 shadow-md shadow-red-600/50'
                  : theme === 'light'
                  ? 'w-2 h-2 rounded-full bg-neutral-300 hover:bg-neutral-400'
                  : 'w-2 h-2 rounded-full bg-neutral-700 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>
      )}

      {/* Swipe Hint for mobile users */}
      <div className="mt-3 text-[11px] font-mono tracking-wider text-neutral-500 uppercase flex items-center gap-1.5">
        <span>← SWIPE CARDS →</span>
      </div>
    </div>
  );
};

export default Carousel;
