'use client';

import React, { useState, useEffect, useRef } from 'react';
import './LoadingScreen.css';

interface LoadingScreenProps {
  minDuration?: number; // Minimum time in ms before transition if video is short/cached
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({
  minDuration = 2200,
  onLoaded,
}) => {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('INITIALIZING AVIONICS');
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasFinishedRef = useRef(false);

  // Mount safety for SSR hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll while loader is active
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

  const finishLoading = () => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;
    setProgress(100);
    setStatusMessage('SYSTEMS OPERATIONAL // ALL CHECKS PASSED');

    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setIsRemoved(true);
        if (onLoaded) onLoaded();
      }, 700);
    }, 300);
  };

  // Video time update to advance progress smoothly
  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || !video.duration || Number.isNaN(video.duration)) return;

    const percent = Math.min(99, Math.floor((video.currentTime / video.duration) * 100));
    setProgress((prev) => Math.max(prev, percent));

    if (percent < 25) {
      setStatusMessage('INITIALIZING AVIONICS & SENSORS');
    } else if (percent < 50) {
      setStatusMessage('CALIBRATING SUPERSONIC FLIGHT ENVELOPE');
    } else if (percent < 75) {
      setStatusMessage('LOADING TACTICAL TELEMETRY MATRIX');
    } else {
      setStatusMessage('SYNCHRONIZING DEFENCE NETWORK');
    }
  };

  // Video ended event
  const handleVideoEnded = () => {
    finishLoading();
  };

  // Fallback timer in case video autoplay is delayed or restricted by browser
  useEffect(() => {
    if (!mounted) return;

    const startTime = Date.now();
    const interval = setInterval(() => {
      if (hasFinishedRef.current) {
        clearInterval(interval);
        return;
      }

      const elapsed = Date.now() - startTime;
      const simulatedPercent = Math.min(99, Math.floor((elapsed / minDuration) * 100));

      setProgress((prev) => Math.max(prev, simulatedPercent));

      if (elapsed >= minDuration + 800) {
        clearInterval(interval);
        finishLoading();
      }
    }, 40);

    return () => clearInterval(interval);
  }, [mounted, minDuration]);

  if (!mounted || isRemoved) {
    return null;
  }

  return (
    <aside
      aria-label="Aerospace Systems Loading Screen"
      aria-live="polite"
      className={`loading-screen-container ${isFadingOut ? 'fading-out' : ''}`}
    >
      {/* Fullscreen Video Loader (Clean without boxes or grids) */}
      <div className="loading-video-wrapper">
        <video
          ref={videoRef}
          autoPlay
          muted
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleVideoEnded}
          className="loading-video-element"
        >
          <source src="/video/loader.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Skip Button (Top Right) */}
      <button
        type="button"
        onClick={finishLoading}
        className="absolute top-6 right-6 z-30 px-3 py-1.5 rounded-lg bg-black/60 hover:bg-neutral-900 border border-white/10 text-neutral-300 hover:text-white text-[11px] font-mono transition-all cursor-pointer shadow-lg backdrop-blur-md flex items-center gap-1.5"
        aria-label="Skip Loading Screen"
      >
        <span>SKIP</span>
        <span className="text-[9px] text-cyan-400">ESC ➔</span>
      </button>

      {/* Bottom Loading Progress UI */}
      <div className="loading-ui-bottom z-20">
        <div className="w-full flex items-center justify-between text-xs font-mono mb-2 drop-shadow-md">
          <span className="text-white/90 font-medium tracking-wider flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {statusMessage}
          </span>
          <span className="text-white font-bold text-sm tracking-widest font-mono">
            {progress}%
          </span>
        </div>

        {/* Progress Track & Fill */}
        <div className="loading-progress-track mb-3">
          <div
            className="loading-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Technical Sub-label */}
        <div className="w-full flex items-center justify-between text-[10px] font-mono text-neutral-400 drop-shadow-sm">
          <span>LAT 12.87°N / LON 77.49°E</span>
          <span className="tracking-military uppercase text-cyan-400 font-semibold">
            DEFEND • DETER • LEAD
          </span>
          <span className="text-neutral-300">SEC: ATMANIRBHAR</span>
        </div>
      </div>
    </aside>
  );
};

export default LoadingScreen;
