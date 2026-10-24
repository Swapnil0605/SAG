'use client';

import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  duration?: number; // Time in ms before upward curtain reveal
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  duration = 3800,
  onLoaded,
}) => {
  const [mounted, setMounted] = useState(false);
  const [isSlidingUp, setIsSlidingUp] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const [isPortrait, setIsPortrait] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768 || window.innerWidth < window.innerHeight;
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredRef = useRef(false);

  // Mount safety for SSR hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Track portrait vs landscape for responsive SVG cutout
  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerWidth < 768 || window.innerWidth < window.innerHeight);
    };
    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Ensure video attempts to play with full mobile browser compatibility
  useEffect(() => {
    if (mounted && videoRef.current) {
      const v = videoRef.current;
      v.defaultMuted = true;
      v.muted = true;
      v.setAttribute('playsinline', 'true');
      v.setAttribute('webkit-playsinline', 'true');
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay policy or low power mode restriction, silent fallback
        });
      }
    }
  }, [mounted]);

  // Prevent background scroll while loader is visible
  useEffect(() => {
    if (!isRemoved) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isRemoved]);

  const triggerReveal = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // Start upward slide transition
    setIsSlidingUp(true);

    // After the slide-up animation finishes, unmount and notify parent
    setTimeout(() => {
      setIsRemoved(true);
      if (onLoaded) onLoaded();
    }, 950);
  };

  // Keyboard shortcut (ESC or Space) or click to instantly reveal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === ' ') {
        triggerReveal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto trigger reveal after duration
  useEffect(() => {
    if (!mounted) return;

    const timer = setTimeout(() => {
      triggerReveal();
    }, duration);

    return () => clearTimeout(timer);
  }, [mounted, duration]);

  if (!mounted || isRemoved) {
    return null;
  }

  // Dynamic geometry: adapts seamlessly between Mobile Portrait (9:16) and Desktop Landscape (16:9)
  const viewBox = isPortrait ? '0 0 1080 1920' : '0 0 1920 1080';
  const cx = isPortrait ? 540 : 960;
  const cy = isPortrait ? 960 : 540;
  const fontSize = isPortrait ? 290 : 520;
  const transformOrigin = isPortrait ? '540px 960px' : '960px 540px';

  return (
    <aside
      aria-label="Aerospace Systems Loading Screen"
      onClick={triggerReveal}
      className={`loading-screen-container ${isSlidingUp ? 'slide-up' : ''} ${isPortrait ? 'is-portrait' : 'is-landscape'}`}
    >
      {/* Background Video Layer */}
      <div className="loading-video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onEnded={triggerReveal}
          className="loading-video-element"
        >
          <source src="/video/loader.webm" type="video/webm" />
        </video>
      </div>

      {/* SVG Cutout Layer — Responsive Animated SAG Letters showing video inside */}
      <svg
        className="loading-cutout-layer"
        viewBox={viewBox}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="sagvideocutout">
            <rect x="-40%" y="-40%" width="180%" height="180%" fill="#ffffff" />
            <g className="sag-text-group" style={{ transformOrigin }}>
              <text
                x={cx}
                y={cy}
                textAnchor="middle"
                dominantBaseline="central"
                fill="#000000"
                fontSize={fontSize}
                fontWeight="900"
                letterSpacing={isPortrait ? '0.06em' : '0.08em'}
                fontFamily="Inter, 'Segoe UI', -apple-system, Roboto, 'Arial Black', sans-serif"
              >
                SAG
              </text>
            </g>
          </mask>
        </defs>

        {/* Solid black screen with cutout SAG letters */}
        <rect
          x="-40%"
          y="-40%"
          width="180%"
          height="180%"
          fill="#000000"
          mask="url(#sagvideocutout)"
        />

        {/* Animated glowing letter contour outline */}
        <g className="sag-outline-glow" style={{ transformOrigin }}>
          <text
            x={cx}
            y={cy}
            textAnchor="middle"
            dominantBaseline="central"
            fill="none"
            strokeWidth={isPortrait ? '2.5' : '3.5'}
            fontSize={fontSize}
            fontWeight="900"
            letterSpacing={isPortrait ? '0.06em' : '0.08em'}
            fontFamily="Inter, 'Segoe UI', -apple-system, Roboto, 'Arial Black', sans-serif"
          >
            SAG
          </text>
        </g>
      </svg>

      {/* Tap anywhere to skip prompt badge at bottom */}
      <div className="loading-skip-hint">
        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
        <span>TAP TO ENTER</span>
      </div>
    </aside>
  );
};

export default LoadingScreen;
