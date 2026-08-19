import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollIndicator Component
 * Permanent looping fade-in/fade-out animation with RED text and an upward hand gesture.
 * Visible across all pages/sections as requested.
 */
export default function ScrollIndicator({ 
  targetId = '',
  text = 'SCROLL UP',
  className = ''
}) {
  const handleClick = () => {
    if (targetId) {
      const target = document.getElementById(targetId);
      if (target) {
        const offset = target.offsetTop || window.innerHeight;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
        return;
      }
    }
    // Fallback: scroll down 1 viewport height
    window.scrollBy({
      top: window.innerHeight * 0.85,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div
      animate={{
        opacity: [0.25, 1, 0.25],
        y: [4, -8, 4]
      }}
      transition={{
        duration: 2.4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label="Scroll up / swipe to explore"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleClick(); }}
      className={`scroll-indicator cursor-pointer flex flex-col items-center gap-1.5 select-none transition-transform duration-300 hover:scale-110 active:scale-95 z-50 ${className}`}
    >
      {/* Hand Gesture Icon in Vivid Red with Glow */}
      <div className="relative flex items-center justify-center p-1">
        <svg 
          className="w-6 h-6 sm:w-7 sm:h-7 text-[#DC143C] drop-shadow-[0_2px_12px_rgba(220,20,60,0.6)]" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.8" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          {/* Animated upward motion indicator line & arrow */}
          <path d="M12 2v5" strokeDasharray="1.5 1.5" />
          <path d="m9.5 4.5 2.5-2.5 2.5 2.5" />
          
          {/* Pointing Index Finger / Swiping Hand Gesture */}
          <path d="M10 9.5V4.5a1.5 1.5 0 0 1 3 0v5" />
          <path d="M13 9.5V7.5a1.5 1.5 0 0 1 3 0v2.5" />
          <path d="M16 11a1.5 1.5 0 0 1 3 0v3a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5V10a1.5 1.5 0 0 1 3 0v2" />
        </svg>
      </div>

      {/* Red Text with High-Contrast Text Shadow */}
      <span className="font-school text-[#DC143C] text-[11px] sm:text-xs font-black tracking-[0.25em] uppercase text-center drop-shadow-[0_2px_10px_rgba(220,20,60,0.4)]">
        {text}
      </span>
    </motion.div>
  );
}
