import React from 'react';
import { motion } from 'framer-motion';

const avatars = [
  "/images/image1.jpg", // SEO globe logo
  "/images/image2.jpg", // Laptop screen "Build Ur Dreams With Us"
  "/images/image3.jpg", // Video timeline screen
  "/images/image4.jpg", // Mobile mock-up TSI Sports Indonesia
  "/images/image5.jpg", // Illustration of developer sleeping
  "/images/image6.jpg"  // Figma + Framer circular design screenshot
];

const hoverTexts = [
  "SEO",
  "WEB DEVELOPMENT",
  "VIDEO EDITING",
  "APP DEVELOPMENT",
  "AI SOLUTION",
  "UIUX DESIGN"
];

export default function AvatarHeader({ setHoveredText }) {
  return (
    <div className="flex flex-col items-center select-none w-full">
      {/* Helper Hover Label */}
      <span className="font-school font-black text-xs sm:text-sm tracking-widest text-[#DC143C] uppercase mb-4 animate-pulse select-none pointer-events-none">
        › hover me ‹
      </span>

      <div 
        className="relative flex items-center justify-center gap-3 md:gap-4 pb-4 z-20 select-none"
        onMouseLeave={() => setHoveredText("SEOSIX")}
      >
        {avatars.map((url, i) => (
          <motion.div
            key={i}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border border-neutral-800 shadow-xl cursor-pointer"
            whileHover={{
              scale: 1.15,
              rotate: (i % 2 === 0 ? 3 : -3),
              borderColor: "#007AFF" // Highlight with theme blue color on hover
            }}
            whileTap={{
              scale: 1.15,
              rotate: (i % 2 === 0 ? 3 : -3),
              borderColor: "#007AFF"
            }}
            onMouseEnter={() => setHoveredText(hoverTexts[i])}
            onTouchStart={() => setHoveredText(hoverTexts[i])}
            onClick={() => setHoveredText(hoverTexts[i])}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 15
            }}
          >
            <img
              src={url}
              alt={`Project Avatar ${i + 1}`}
              className="w-full h-full object-cover select-none pointer-events-none"
              width="80"
              height="80"
              loading="eager"
              decoding="async"
              fetchpriority={i === 0 ? "high" : "auto"}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
