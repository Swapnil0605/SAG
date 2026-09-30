import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/* =========================================================================
   1. HERO: Sliced Character Kinetic Velocity Reveal
   Splits text into individual characters that emerge from behind masked vertical
   slits with 3D rotation, unblurring from 10px to 0px with micro-staggers.
   ========================================================================= */
interface HeroKineticTitleProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
  accentWord?: string;
}

export const HeroKineticTitle: React.FC<HeroKineticTitleProps> = ({
  children,
  className = '',
  tag: Tag = 'h1',
  accentWord = '',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = el.querySelectorAll('.kinetic-char');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        chars,
        {
          opacity: 0,
          y: '120%',
          rotateX: -45,
          scale: 0.85,
          filter: 'blur(8px)',
        },
        {
          opacity: 1,
          y: '0%',
          rotateX: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.95,
          stagger: 0.02,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const words = children.split(' ');
  const Component = Tag as any;

  return (
    <Component ref={containerRef} className={`${className} perspective-1000`}>
      {words.map((word, wIdx) => {
        const isAccent = accentWord && word.toLowerCase().includes(accentWord.toLowerCase());
        return (
          <span
            key={wIdx}
            className={`inline-block mr-[0.28em] whitespace-nowrap overflow-hidden align-top ${
              isAccent ? 'text-red-500' : ''
            }`}
          >
            {word.split('').map((char, cIdx) => (
              <span key={cIdx} className="inline-block overflow-hidden align-top">
                <span className="kinetic-char inline-block will-change-transform transform-gpu">
                  {char}
                </span>
              </span>
            ))}
          </span>
        );
      })}
    </Component>
  );
};

/* =========================================================================
   2. VISION & DOCTRINE: Kinetic Stretch & Velocity Scrub
   Text dynamically stretches along the Y-axis and widens tracking on scroll scrub,
   embodying supersonic acceleration and breaking the sound barrier.
   ========================================================================= */
interface SpeedStretchHeadingProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export const SpeedStretchHeading: React.FC<SpeedStretchHeadingProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
}) => {
  const elRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          scaleY: 1.5,
          letterSpacing: '0.08em',
          skewX: -5,
          opacity: 0.4,
          transformOrigin: 'bottom left',
        },
        {
          scaleY: 1.0,
          letterSpacing: '-0.02em',
          skewX: 0,
          opacity: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 55%',
            scrub: 1.1,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const Component = Tag as any;
  return (
    <Component ref={elRef} className={`will-change-transform ${className}`}>
      {children}
    </Component>
  );
};

/* =========================================================================
   3. PRODUCTS CATALOGUE: Word-by-Word Scrub Glow Highlight
   Words start in translucent dim slate and sequentially illuminate to pure
   radiant white with tactical glow as the user scrolls into the section.
   ========================================================================= */
interface ScrubWordGlowProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export const ScrubWordGlow: React.FC<ScrubWordGlowProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.scrub-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0.22,
          filter: 'blur(3px)',
          color: '#64748B',
          scale: 0.96,
        },
        {
          opacity: 1,
          filter: 'blur(0px)',
          color: '#FFFFFF',
          scale: 1,
          stagger: 0.12,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 45%',
            scrub: 0.8,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const words = children.split(' ');
  const Component = Tag as any;

  return (
    <Component ref={containerRef} className={className}>
      {words.map((word, idx) => (
        <span
          key={idx}
          className="scrub-word inline-block mr-[0.26em] last:mr-0 will-change-transform transition-colors duration-150"
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

/* =========================================================================
   4. TECHNOLOGY ROADMAP: Horizontal Parallax Stream
   Headings and milestone numerals drift horizontally in multi-plane depth
   as scroll progress advances.
   ========================================================================= */
interface HorizontalStreamHeadingProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
  driftDistance?: number;
}

export const HorizontalStreamHeading: React.FC<HorizontalStreamHeadingProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
  driftDistance = 45,
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          x: -driftDistance,
          opacity: 0.4,
          filter: 'blur(4px)',
        },
        {
          x: 0,
          opacity: 1,
          filter: 'blur(0px)',
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            end: 'top 50%',
            scrub: 1.2,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children, driftDistance]);

  const Component = Tag as any;
  return (
    <div className="overflow-hidden">
      <Component ref={containerRef} className={`will-change-transform ${className}`}>
        {children}
      </Component>
    </div>
  );
};

/* =========================================================================
   5. LEADERSHIP: Perspective 3D Flip Reveal
   Words snap into focus with isometric 3D perspective rotation, symbolizing
   military precision, structural fortitude, and discipline.
   ========================================================================= */
interface Perspective3DRevealProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export const Perspective3DReveal: React.FC<Perspective3DRevealProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const words = el.querySelectorAll('.flip-word');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        words,
        {
          opacity: 0,
          rotateX: 65,
          rotateY: -15,
          y: 45,
          filter: 'blur(6px)',
          transformOrigin: 'top center',
        },
        {
          opacity: 1,
          rotateX: 0,
          rotateY: 0,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.08,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  const words = children.split(' ');
  const Component = Tag as any;

  return (
    <Component
      ref={containerRef}
      className={`${className}`}
      style={{ perspective: '1200px' }}
    >
      {words.map((word, idx) => (
        <span
          key={idx}
          className="flip-word inline-block mr-[0.28em] last:mr-0 will-change-transform transform-gpu"
        >
          {word}
        </span>
      ))}
    </Component>
  );
};

/* =========================================================================
   6. CONTACT: HUD Scan Reveal
   Heading emerges with animated tactical HUD corner brackets and radar line sweep.
   ========================================================================= */
interface HUDScanHeadingProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3';
}

export const HUDScanHeading: React.FC<HUDScanHeadingProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scanLineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    const scanLine = scanLineRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      tl.fromTo(
        el,
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.85, ease: 'power3.out' }
      );

      if (scanLine) {
        tl.fromTo(
          scanLine,
          { left: '-10%', opacity: 1 },
          { left: '110%', opacity: 0, duration: 1.1, ease: 'power2.inOut' },
          '-=0.5'
        );
      }
    }, el);

    return () => ctx.revert();
  }, [children]);

  const Component = Tag as any;

  return (
    <div ref={containerRef} className="relative inline-block overflow-hidden py-1">
      <Component className={className}>{children}</Component>
      {/* Tactical radar scan line */}
      <div
        ref={scanLineRef}
        className="absolute inset-y-0 w-12 bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent pointer-events-none transform -skew-x-12"
      />
    </div>
  );
};

/* =========================================================================
   7. FOOTER: Radiant Sanskrit Motto Tracking
   Subtle expansion of letter spacing with sovereign cyan luminescence on scroll.
   ========================================================================= */
interface SanskritRadiantProps {
  children: string;
  className?: string;
}

export const SanskritRadiantMotto: React.FC<SanskritRadiantProps> = ({
  children,
  className = '',
}) => {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          letterSpacing: '0.02em',
          filter: 'drop-shadow(0 0 0px rgba(56, 189, 248, 0))',
          opacity: 0.6,
        },
        {
          letterSpacing: '0.08em',
          filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.4))',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [children]);

  return (
    <span ref={elRef} className={`inline-block will-change-transform ${className}`}>
      {children}
    </span>
  );
};

/* =========================================================================
   Standard Utilities: SplitRevealText, ParallaxText, ScaleStretchText, ScrollReveal
   (Preserved for flexible reuse)
   ========================================================================= */
interface SplitRevealProps {
  children: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  delay?: number;
  splitBy?: 'words' | 'chars';
}

export const SplitRevealText: React.FC<SplitRevealProps> = ({
  children,
  className = '',
  tag: Tag = 'h2',
  delay = 0,
  splitBy = 'words',
}) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const items = el.querySelectorAll('.split-unit');

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          opacity: 0,
          y: '100%',
          rotateX: -25,
          filter: 'blur(6px)',
        },
        {
          opacity: 1,
          y: '0%',
          rotateX: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: splitBy === 'chars' ? 0.025 : 0.07,
          ease: 'power3.out',
          delay,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, splitBy]);

  const renderContent = () => {
    if (splitBy === 'chars') {
      return children.split('').map((char, index) => (
        <span key={index} className="inline-block overflow-hidden align-top">
          <span className="split-unit inline-block will-change-transform">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ));
    }

    const words = children.split(' ');
    return words.map((word, index) => (
      <span key={index} className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0">
        <span className="split-unit inline-block will-change-transform">
          {word}
        </span>
      </span>
    ));
  };

  const Component = Tag as any;
  return (
    <Component ref={containerRef} className={className}>
      {renderContent()}
    </Component>
  );
};

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  direction?: 'vertical' | 'horizontal';
}

export const ParallaxText: React.FC<ParallaxProps> = ({
  children,
  speed = -25,
  className = '',
  direction = 'vertical',
}) => {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      if (direction === 'vertical') {
        gsap.fromTo(
          el,
          { y: -speed * 0.5 },
          {
            y: speed * 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      } else {
        gsap.fromTo(
          el,
          { x: -speed * 0.5 },
          {
            x: speed * 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, el);

    return () => ctx.revert();
  }, [speed, direction]);

  return (
    <div ref={targetRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

interface ScaleStretchProps {
  children: React.ReactNode;
  className?: string;
  scaleYFrom?: number;
  scaleYTo?: number;
  letterSpacingFrom?: string;
  letterSpacingTo?: string;
}

export const ScaleStretchText: React.FC<ScaleStretchProps> = ({
  children,
  className = '',
  scaleYFrom = 1.35,
  scaleYTo = 1.0,
  letterSpacingFrom = '0.08em',
  letterSpacingTo = '-0.02em',
}) => {
  const stretchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stretchRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          scaleY: scaleYFrom,
          letterSpacing: letterSpacingFrom,
          transformOrigin: 'bottom center',
        },
        {
          scaleY: scaleYTo,
          letterSpacing: letterSpacingTo,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 55%',
            scrub: 0.8,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [scaleYFrom, scaleYTo, letterSpacingFrom, letterSpacingTo]);

  return (
    <div ref={stretchRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
};

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  blur?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 0.85,
  yOffset = 35,
  blur = 8,
}) => {
  const revealRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = revealRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: 0,
          y: yOffset,
          filter: `blur(${blur}px)`,
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, duration, yOffset, blur]);

  return (
    <div ref={revealRef} className={className}>
      {children}
    </div>
  );
};
