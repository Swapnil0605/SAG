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
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasTriggeredRef = useRef(false);

  // Mount safety for SSR hydration
  useEffect(() => {
    setMounted(true);
  }, []);

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

  return (
    <aside
      aria-label="Aerospace Systems Loading Screen"
      onClick={triggerReveal}
      className={`loading-screen-container ${isSlidingUp ? 'slide-up' : ''}`}
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
          <source src="/video/loader.mp4" type="video/mp4" />
        </video>
      </div>

      {/* SVG Cutout Layer - Massive Animated SAG Letters showing video inside */}
      <svg
        className="loading-cutout-layer"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="sag-video-cutout">
            <rect x="-30%" y="-30%" width="160%" height="160%" fill="#ffffff" />
            <g className="sag-text-group">
              <text
                x="960"
                y="540"
                textAnchor="middle"
                dominantBaseline="central"
                fill="#000000"
                fontSize="480"
                fontWeight="900"
                letterSpacing="0.08em"
                fontFamily="Inter, 'Segoe UI', -apple-system, Roboto, 'Arial Black', sans-serif"
              >
                SAG
              </text>
            </g>
          </mask>
        </defs>

        {/* Solid black screen with cutout SAG letters */}
        <rect
          x="-30%"
          y="-30%"
          width="160%"
          height="160%"
          fill="#000000"
          mask="url(#sag-video-cutout)"
        />

        {/* Animated glowing letter contour outline */}
        <g className="sag-outline-glow">
          <text
            x="960"
            y="540"
            textAnchor="middle"
            dominantBaseline="central"
            fill="none"
            strokeWidth="3"
            fontSize="480"
            fontWeight="900"
            letterSpacing="0.08em"
            fontFamily="Inter, 'Segoe UI', -apple-system, Roboto, 'Arial Black', sans-serif"
          >
            SAG
          </text>
        </g>
      </svg>
    </aside>
  );
};

export default LoadingScreen;
