import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fontSizes = {
  "SEO": "text-[21vw]",
  "AI SOLUTION": "text-[13vw]",
  "AI-SOLUTION": "text-[13vw]",
  "UIUX DESIGN": "text-[13vw]",
  "UI/UX DESIGN": "text-[13vw]",
  "VIDEO EDITING": "text-[11vw]",
  "WEB DEVELOPMENT": "text-[10vw]",
  "APP DEVELOPMENT": "text-[10vw]"
};

export default function HeroTitle({ hoveredText = "SEOSIX" }) {
  const isHovered = hoveredText !== "SEOSIX";
  
  // Resolve size class with fallback
  const sizeClass = fontSizes[hoveredText.toUpperCase()] || "text-[12vw]";

  // Animation variants for the base SEOSIX text (Layer A)
  const seosixContainerVariants = {
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    },
    hidden: {
      opacity: 0,
      scale: 1.25, // Scale up when hovered
      y: -40,      // Move up slightly
      filter: "blur(4px)",
      transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] }
    }
  };

  // Animation variants for the service text block (Layer B)
  const serviceContainerVariants = {
    hidden: { 
      y: 100, // Slide up from 100px below instead of full height for a gentler transition
      opacity: 0 
    },
    visible: { 
      y: 0, 
      opacity: 1 
    }
  };

  return (
    <div className="relative flex items-center justify-center mt-[4vw] h-[30vw] select-none z-10 w-full pointer-events-none">
      
      {/* LAYER A: SEOSIX BASE TEXT */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center w-full h-full"
        variants={seosixContainerVariants}
        animate={isHovered ? "hidden" : "visible"}
        initial="visible"
      >
        <h1 className="font-thunder text-[#FFF8E7] text-[21vw] leading-none font-normal uppercase text-center flex justify-center items-center flex-nowrap gap-[0.06em] w-full max-w-full">
          <span className="inline-block origin-bottom scale-y-[1.3] whitespace-nowrap">
            <span className="fade-letter inline-block origin-bottom">S</span>
            <span className="fade-letter inline-block origin-bottom">E</span>
            <span className="fade-letter inline-block origin-bottom">O</span>
            <span className="zoom-letter inline-block origin-bottom">S</span>
            <span className="fade-letter inline-block origin-bottom">I</span>
            <span className="fade-letter inline-block origin-bottom">X</span>
          </span>
        </h1>
      </motion.div>

      {/* LAYER B: SERVICE HOVER TEXT */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            key={hoveredText} // Re-triggers animation when user hovers from one image to another
            className="absolute inset-0 flex items-center justify-center w-full h-full hover-service-text"
            variants={serviceContainerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
          >
            {/* Displayed in text-[#f1ff0a] as requested */}
            <h2 className={`font-thunder text-[#f1ff0a] ${sizeClass} leading-none font-normal uppercase text-center flex justify-center items-center flex-nowrap whitespace-nowrap gap-[0.06em] w-full max-w-full`}>
              {hoveredText.split(" ").map((word, wordIdx) => (
                <React.Fragment key={wordIdx}>
                  {wordIdx > 0 && <span className="inline-block w-[0.22em]" />}
                  <span className="inline-block origin-bottom scale-y-[1.3]">{word}</span>
                </React.Fragment>
              ))}
            </h2>
          </motion.div>
        )}
      </AnimatePresence>
      
    </div>
  );
}
