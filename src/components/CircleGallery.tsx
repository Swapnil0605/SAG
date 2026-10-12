import React, { useState, useEffect, useRef, useCallback } from 'react';

export interface CircleGalleryItem {
  title: string;
  code?: string;
  description?: string;
  icon?: React.ComponentType<{ className?: string }>;
  color?: string;
  gradient?: string;
  image?: string;
  badge?: string;
  [key: string]: any;
}

export interface CircleGalleryProps {
  items: CircleGalleryItem[];
  radiusPercent?: number;
  throwResistance?: number;
  itemWidth?: number;
  itemHeight?: number;
  itemScale?: number;
  enableDrag?: boolean;
  autoSpin?: number;
  className?: string;
  onItemClick?: (index: number, item: CircleGalleryItem) => void;
}

export const CircleGallery: React.FC<CircleGalleryProps> = ({
  items,
  radiusPercent = 20,
  throwResistance = 0.35,
  itemWidth = 260,
  itemHeight = 350,
  itemScale = 1,
  enableDrag = true,
  autoSpin = 6, // degrees per second
  className = '',
  onItemClick,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [angle, setAngle] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // References for physics and animation
  const angleRef = useRef(0);
  const velocityRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef<{
    pointerAngle: number;
    angleOnStart: number;
    lastPointerAngle: number;
    lastTime: number;
    pointerX: number;
  }>({
    pointerAngle: 0,
    angleOnStart: 0,
    lastPointerAngle: 0,
    lastTime: 0,
    pointerX: 0,
  });

  const totalItems = items.length;

  // Sync angleRef with state on initial render
  useEffect(() => {
    angleRef.current = angle;
  }, []);

  // Calculate container center coordinates
  const getCenter = useCallback(() => {
    if (!containerRef.current) return { cx: 0, cy: 0 };
    const rect = containerRef.current.getBoundingClientRect();
    return {
      cx: rect.left + rect.width / 2,
      cy: rect.top + rect.height / 2,
    };
  }, []);

  // Compute pointer angle relative to center in degrees
  const getPointerAngle = useCallback(
    (clientX: number, clientY: number) => {
      const { cx, cy } = getCenter();
      const dx = clientX - cx;
      const dy = clientY - cy;
      return (Math.atan2(dy, dx) * 180) / Math.PI;
    },
    [getCenter]
  );

  // Pointer drag start
  const handlePointerDown = (e: React.PointerEvent) => {
    if (!enableDrag) return;
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);

    const pointerAngle = getPointerAngle(e.clientX, e.clientY);
    isDraggingRef.current = true;
    setIsDragging(true);

    velocityRef.current = 0;
    dragStartRef.current = {
      pointerAngle,
      angleOnStart: angleRef.current,
      lastPointerAngle: pointerAngle,
      lastTime: performance.now(),
      pointerX: e.clientX,
    };
  };

  // Pointer drag move
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;

    const now = performance.now();
    const currentPointerAngle = getPointerAngle(e.clientX, e.clientY);

    // Calculate angular delta with wrapping correction (-180 to 180)
    let delta = currentPointerAngle - dragStartRef.current.lastPointerAngle;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    // Linear drag influence for intuitive horizontal trackpad / touch gestures
    const deltaX = e.clientX - dragStartRef.current.pointerX;
    dragStartRef.current.pointerX = e.clientX;
    const linearDelta = deltaX * 0.15;

    const blendedDelta = delta * 0.8 + linearDelta * 0.2;

    angleRef.current += blendedDelta;
    setAngle(angleRef.current);

    // Track instantaneous angular velocity
    const dt = Math.max(now - dragStartRef.current.lastTime, 8);
    const instantVelocity = (blendedDelta / dt) * 16.67; // normalize to 60fps frame delta
    velocityRef.current = velocityRef.current * 0.4 + instantVelocity * 0.6;

    dragStartRef.current.lastPointerAngle = currentPointerAngle;
    dragStartRef.current.lastTime = now;
  };

  // Pointer drag end (release inertia)
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    try {
      (e.target as HTMLElement).releasePointerCapture?.(e.pointerId);
    } catch {}

    isDraggingRef.current = false;
    setIsDragging(false);

    // Clamp maximum initial throw velocity
    const maxVelocity = 28;
    velocityRef.current = Math.max(
      -maxVelocity,
      Math.min(maxVelocity, velocityRef.current)
    );
  };

  // Main animation frame loop for inertia deceleration & continuous auto-spin
  useEffect(() => {
    let animId: number;

    const animate = (time: number) => {
      if (lastTimeRef.current === null) {
        lastTimeRef.current = time;
      }
      const dt = Math.min((time - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = time;

      if (!isDraggingRef.current) {
        // Apply inertia friction decay
        if (Math.abs(velocityRef.current) > 0.04) {
          angleRef.current += velocityRef.current;
          // Throw resistance determines deceleration rate (0.35 default)
          const friction = Math.pow(1 - throwResistance * 0.08, dt * 60);
          velocityRef.current *= friction;
        } else {
          velocityRef.current = 0;
          // Idle auto-spin when not dragging or hovering
          if (autoSpin !== 0 && !isHovered) {
            angleRef.current += autoSpin * dt;
          }
        }

        setAngle(angleRef.current);
      }

      // Update active front-facing card (card closest to angle 90 deg / bottom-front)
      const normalizedAngle = ((angleRef.current % 360) + 360) % 360;
      const step = 360 / Math.max(totalItems, 1);
      // Front item is closest to 90 degrees
      const frontIndex =
        Math.round((90 - normalizedAngle + 720) / step) % totalItems;
      setActiveIndex(frontIndex);

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [throwResistance, autoSpin, isHovered, totalItems]);

  // Rotate smoothly to bring a specific card directly to front
  const rotateToCard = (targetIndex: number) => {
    const step = 360 / totalItems;
    const targetAngle = 90 - targetIndex * step;
    let delta = ((targetAngle - angleRef.current) % 360);
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;

    velocityRef.current = delta * 0.18;
    onItemClick?.(targetIndex, items[targetIndex]);
  };

  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Responsive card dimensions and orbit radius based on viewport
  const effectiveWidth = windowWidth < 640 ? Math.min(itemWidth, 210) : itemWidth;
  const effectiveHeight = windowWidth < 640 ? Math.min(itemHeight, 290) : itemHeight;
  const baseRadius = Math.round(
    Math.min(effectiveWidth, effectiveHeight) * (radiusPercent / 20)
  );

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      className={`relative w-full flex flex-col items-center justify-center select-none overflow-hidden touch-none ${
        isDragging ? 'cursor-grabbing' : 'cursor-grab'
      } ${className}`}
      style={{ minHeight: '580px' }}
    >
      {/* Background Ambience Disc */}
      <div className="absolute w-[460px] sm:w-[540px] h-[460px] sm:h-[540px] rounded-full bg-gradient-to-br from-red-600/10 via-purple-600/5 to-transparent blur-3xl pointer-events-none" />

      {/* Central Rotating Stage */}
      <div className="relative w-full h-[480px] sm:h-[520px] flex items-center justify-center">
        {items.map((item, index) => {
          const step = 360 / totalItems;
          const cardAngle = angle + index * step;
          const cardAngleRad = (cardAngle * Math.PI) / 180;

          // Position cards along the circular orbit
          const x = Math.round(Math.cos(cardAngleRad) * baseRadius);
          const y = Math.round(Math.sin(cardAngleRad) * baseRadius);

          // Card tangential tilt: smoothly rotates with orbit position matching the sample fan layout
          const tiltDeg = ((cardAngle % 360) + 360) % 360;
          const normalizedTilt = (tiltDeg > 180 ? tiltDeg - 360 : tiltDeg) * 0.22;

          // Depth / scale / z-index layering (cards in bottom half are closer to front)
          const depth = Math.sin(cardAngleRad); // -1 (top) to +1 (bottom front)
          const scale = (0.92 + depth * 0.1) * itemScale;
          const zIndex = Math.round(20 + depth * 15) + (index === activeIndex ? 10 : 0);
          const isFront = index === activeIndex;

          const Icon = item.icon;

          return (
            <div
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                rotateToCard(index);
              }}
              style={{
                width: `${effectiveWidth}px`,
                height: `${effectiveHeight}px`,
                transform: `translate(${x}px, ${y}px) rotate(${normalizedTilt}deg) scale(${scale})`,
                zIndex,
                transition: isDragging
                  ? 'none'
                  : 'transform 0.15s ease-out, box-shadow 0.3s ease',
              }}
              className="absolute rounded-[26px] overflow-hidden cursor-pointer shadow-2xl transition-all duration-300 group"
            >
              {/* Card Container Frame */}
              <div
                className={`relative w-full h-full p-6 flex flex-col justify-between overflow-hidden rounded-[26px] border ${
                  isFront
                    ? 'border-white/40 ring-2 ring-red-500/50 shadow-2xl shadow-red-950/60'
                    : 'border-white/10 shadow-black/80'
                }`}
              >
                {/* Vibrant Abstract Fluid Wave Background matching sample image */}
                <div className="absolute inset-0 z-0">
                  {item.gradient ? (
                    <div className={`w-full h-full bg-gradient-to-br ${item.gradient}`} />
                  ) : index === 0 ? (
                    // PIL-01 DEFEND: Crimson / Purple Neon Flow
                    <div className="w-full h-full bg-gradient-to-br from-[#7f1d1d] via-[#991b1b] to-[#4c0519]">
                      <div className="absolute inset-0 bg-radial from-[#dc2626]/80 via-transparent to-transparent" />
                      <div
                        className="absolute -right-8 -top-8 w-48 h-48 rounded-full bg-[#f43f5e]/40 blur-2xl"
                        style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 70%' }}
                      />
                    </div>
                  ) : index === 1 ? (
                    // PIL-02 DETER: Orange / Magenta Wave
                    <div className="w-full h-full bg-gradient-to-br from-[#ea580c] via-[#c2410c] to-[#7c2d12]">
                      <div className="absolute inset-0 bg-radial from-[#fb923c]/80 via-transparent to-transparent" />
                      <div
                        className="absolute -left-10 -bottom-10 w-52 h-52 rounded-full bg-[#fbbf24]/30 blur-2xl"
                        style={{ borderRadius: '60% 40% 30% 70% / 50% 60% 40% 50%' }}
                      />
                    </div>
                  ) : index === 2 ? (
                    // PIL-03 LEAD: Royal Blue / Violet Flow
                    <div className="w-full h-full bg-gradient-to-br from-[#1d4ed8] via-[#2563eb] to-[#1e1b4b]">
                      <div className="absolute inset-0 bg-radial from-[#38bdf8]/70 via-transparent to-transparent" />
                      <div
                        className="absolute right-0 top-1/4 w-44 h-44 rounded-full bg-[#818cf8]/40 blur-2xl"
                        style={{ borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%' }}
                      />
                    </div>
                  ) : (
                    // PIL-04 SELF-RELIANCE: Emerald / Teal Wave
                    <div className="w-full h-full bg-gradient-to-br from-[#047857] via-[#065f46] to-[#022c22]">
                      <div className="absolute inset-0 bg-radial from-[#34d399]/70 via-transparent to-transparent" />
                      <div
                        className="absolute -left-6 -top-6 w-48 h-48 rounded-full bg-[#10b981]/40 blur-2xl"
                        style={{ borderRadius: '45% 55% 40% 60% / 55% 45% 60% 40%' }}
                      />
                    </div>
                  )}

                  {/* Dark Vignette Overlay for High-Contrast Text Legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
                </div>

                {/* Card Top: Corner Number Code (PIL-01 / 005 style) & Icon */}
                <div className="relative z-10 flex items-center justify-between">
                  {/* Bold White Number like "005", "006" in reference */}
                  <span className="font-mono text-sm sm:text-base font-black tracking-widest text-white drop-shadow-md">
                    {item.code || `00${index + 1}`}
                  </span>

                  {Icon && (
                    <div className="p-2 rounded-xl bg-black/40 backdrop-blur-md border border-white/20 text-white shadow-md">
                      <Icon className="w-4 h-4" />
                    </div>
                  )}
                </div>

                {/* Card Center: Title & Description */}
                <div className="relative z-10 mt-auto pt-6">
                  <h4 className="text-2xl font-black uppercase text-white tracking-tight leading-tight mb-2 drop-shadow-md">
                    {item.title}
                  </h4>
                  <p className="text-xs text-neutral-200/90 leading-relaxed font-normal line-clamp-3">
                    {item.description}
                  </p>
                </div>

                {/* Card Bottom: Sovereign Mandate Bar */}
                <div className="relative z-10 pt-3 mt-4 border-t border-white/20 flex items-center justify-between text-[10px] font-mono text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                    <span>{item.badge || 'SOVEREIGN MANDATE'}</span>
                  </div>
                  <span className="font-bold text-white/90">0{index + 1}/04</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Interactive Controls & Active Pillar Detail Pill */}
      <div className="relative z-30 mt-6 flex flex-col items-center gap-4 max-w-lg px-4 text-center">
        {/* Quick Pillar Selector Pills (1, 2, 3, 4) */}
        <div className="flex items-center gap-2 bg-neutral-900/90 border border-neutral-800 p-1.5 rounded-full shadow-xl">
          {items.map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => rotateToCard(idx)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider transition-all duration-300 cursor-pointer ${
                idx === activeIndex
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/40 ring-1 ring-red-400'
                  : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
              }`}
            >
              {item.code || `0${idx + 1}`}
            </button>
          ))}
        </div>

        {/* Drag Inertia Hint */}
        <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 flex items-center gap-2">
          <span>← DRAG OR FLICK TO SPIN WHEEL →</span>
        </div>
      </div>
    </div>
  );
};

export default CircleGallery;
