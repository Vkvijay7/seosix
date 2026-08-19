import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    num: "01",
    label: "STRATEGY",
    title: "Strategy",
    desc: "We establish critical brand goals, structure information architecture, and outline technical requirements to guide all subsequent stages.",
    tags: ["BRAND STRATEGY", "MESSAGING", "ROADMAP"]
  },
  {
    num: "02",
    label: "DESIGN",
    title: "Design",
    desc: "We design clean, intuitive interfaces and build comprehensive design systems that ensure brand consistency.",
    tags: ["UI DESIGN", "UX DESIGN", "VISUAL SYSTEM"]
  },
  {
    num: "03",
    label: "DEVELOPMENT",
    title: "Development",
    desc: "Our development team engineers responsive, high-performance web structures optimized for speed, accessibility, and clean search indexability.",
    tags: ["FRONTEND", "BACKEND", "INTEGRATION"]
  },
  {
    num: "04",
    label: "LAUNCH",
    title: "Launch",
    desc: "We execute quality assurance testing, finalize optimization tasks, and deploy your site to global edge networks for maximum availability.",
    tags: ["QUALITY ASSURANCE", "SEO OPTIMIZED", "DEPLOYMENT"]
  }
];

export default function OurProcess() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1000);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const st = ScrollTrigger.create({
      id: "process-scroll",
      trigger: sectionRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        const p = self.progress;
        // Map 0 -> 1 progress directly to 0 -> 3 step index smoothly
        const sIdx = Math.max(0, Math.min(processSteps.length - 1, p * (processSteps.length - 1)));
        setScrollIndex(sIdx);
      }
    });

    return () => {
      st.kill();
    };
  }, { scope: sectionRef });

  const activeIndex = Math.min(
    processSteps.length - 1,
    Math.max(0, Math.round(scrollIndex))
  );

  const handleBadgeClick = (idx) => {
    // 1. Immediately switch state to give instant visual feedback
    setScrollIndex(idx);

    // 2. Smoothly scroll page to match step progress
    if (sectionRef.current) {
      const st = ScrollTrigger.getAll().find(t => t.trigger === sectionRef.current);
      if (st && st.start !== undefined && st.end !== undefined) {
        const targetProgress = idx / (processSteps.length - 1);
        const targetScroll = st.start + targetProgress * (st.end - st.start);
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      } else {
        const offset = sectionRef.current.offsetTop;
        const total = sectionRef.current.offsetHeight - window.innerHeight;
        const targetScroll = offset + (idx / (processSteps.length - 1)) * total;
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="process" 
      className="relative w-full select-none bg-[#FFF8E7]"
      style={{ height: '400vh' }}
    >
      <style>{`
        /* Process Section Circular Style */
        .process-circular-section {
          width: 100%;
          max-width: 1100px;
          margin: 40px auto;
          position: relative;
          z-index: 10;
          overflow: visible;
        }

        .process-glow {
          position: absolute;
          width: 450px;
          height: 450px;
          background: radial-gradient(circle, rgba(255, 94, 43, 0.08) 0%, rgba(255, 94, 43, 0) 70%);
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 1;
        }

        .process-circular-viewport {
          position: relative;
          width: 100%;
          height: 480px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 20px;
          z-index: 5;
        }

        @media (min-width: 640px) {
          .process-circular-viewport {
            height: 540px;
          }
        }

        .process-circular-badge-wrapper {
          position: absolute;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 40;
          transform-origin: center center;
          will-change: transform, opacity;
        }

        .process-circular-badge {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-school);
          font-weight: 800;
          font-size: 1.1rem;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        @media (min-width: 640px) {
          .process-circular-badge {
            width: 60px;
            height: 60px;
            border-radius: 16px;
            font-size: 1.25rem;
          }
        }

        .process-circular-badge.active {
          background-color: #FF5E2B;
          color: #ffffff;
          box-shadow: 0 8px 20px rgba(255, 94, 43, 0.3);
        }

        .process-circular-badge.inactive {
          background-color: #ffffff;
          color: #a3a3a3;
          border: 1px solid rgba(0, 0, 0, 0.08);
        }

        .process-circular-badge.inactive:hover {
          color: #000000;
          border-color: rgba(0, 0, 0, 0.2);
          transform: scale(1.05);
        }

        .process-details-container {
          margin-top: 180px;
          width: 100%;
          max-width: 600px;
          padding: 0 20px;
          z-index: 40;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        @media (min-width: 640px) {
          .process-details-container {
            margin-top: 230px;
          }
        }
      `}</style>

      {/* Sticky Content Wrapper */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center items-center py-20 md:py-28 px-6 md:px-12 overflow-hidden bg-[#FFF8E7]">
        
        {/* Our Process Section - Circular Arc Slider */}
        <div className="process-circular-section select-none w-full flex flex-col items-center">
          <div className="process-glow" />
          
          {/* Title Header */}
          <div className="z-10 mb-4 px-4 text-center">
            <span className="text-[#FF5E2B] font-semibold tracking-widest text-xs sm:text-sm uppercase block mb-2">
              › Process ‹
            </span>
            <h2 className="font-school font-black text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-neutral-900 leading-none mb-4">
              A collaborative approach
            </h2>

            {/* Quick Step Selector Pills */}
            <div className="flex items-center gap-2 z-20 flex-wrap justify-center">
              {processSteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => handleBadgeClick(idx)}
                  className={`px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold font-school uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? 'bg-[#FF5E2B] text-white shadow-[0_4px_14px_rgba(255,94,43,0.35)] scale-105'
                      : 'bg-black/5 hover:bg-black/10 text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {step.num} {step.title}
                </button>
              ))}
            </div>
          </div>

          {/* Circular Viewport */}
          <div className="process-circular-viewport relative w-full overflow-hidden flex flex-col items-center justify-start">
            
            {/* Circular Path Line */}
            <div 
              className="absolute border border-[#FF5E2B]/25 rounded-full pointer-events-none"
              style={{
                width: windowWidth < 640 ? 600 : 960,
                height: windowWidth < 640 ? 600 : 960,
                top: windowWidth < 640 ? 80 : 90,
                left: '50%',
                transform: 'translateX(-50%)',
                boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.01)'
              }}
            />

            {/* Badges Along the Arc */}
            {processSteps.map((step, idx) => {
              const active = idx === activeIndex;
              // Spacing: 30 degrees on desktop, 36 on mobile. Radius: 480px on desktop, 300px on mobile
              const radius = windowWidth < 640 ? 300 : 480;
              const angleStep = windowWidth < 640 ? 36 : 30;
              const angle = (idx - scrollIndex) * angleStep;
              const angleRad = (angle * Math.PI) / 180;
              const xVal = radius * Math.sin(angleRad);
              const yVal = radius * (1 - Math.cos(angleRad));
              const yOffset = windowWidth < 640 ? 80 : 90;

              return (
                <motion.div
                  key={idx}
                  className="process-circular-badge-wrapper cursor-pointer group"
                  style={{ zIndex: 60 }}
                  animate={{
                    x: xVal,
                    y: yVal + yOffset,
                    rotate: angle,
                    scale: active ? 1.12 : 0.88,
                    opacity: Math.abs(idx - scrollIndex) <= 1.5 ? 1 : 0.4
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 26,
                    mass: 0.5
                  }}
                  onClick={() => handleBadgeClick(idx)}
                >
                  {active && (
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#FF5E2B] uppercase mb-1.5 pointer-events-none select-none">
                      STEP
                    </span>
                  )}
                  <div
                    className={`process-circular-badge ${active ? 'active' : 'inactive'} group-hover:scale-105`}
                  >
                    {step.num}
                  </div>
                </motion.div>
              );
            })}

            {/* Active step details - using key to animate when index changes */}
            <div className="process-details-container">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="flex flex-col items-center w-full"
                >
                  <h3 className="text-2xl sm:text-3xl font-school font-extrabold text-neutral-900 uppercase tracking-tight mb-2">
                    {processSteps[activeIndex].title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm max-w-md leading-relaxed font-semibold">
                    {processSteps[activeIndex].desc}
                  </p>
                  
                  {/* Tags Section */}
                  <div className="w-full border-y border-dashed border-black/10 py-3.5 my-5 flex justify-center gap-3 sm:gap-4 flex-wrap text-[10px] sm:text-xs font-black tracking-widest text-neutral-600 uppercase">
                    {processSteps[activeIndex].tags.map((tag, tIdx) => (
                      <span key={tIdx} className="flex items-center gap-3 sm:gap-4">
                        {tIdx > 0 && <span className="text-neutral-300 font-normal">•</span>}
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>

                  {/* Start Your Project button */}
                  <a 
                    href="#contact" 
                    className="bg-[#FF5E2B] hover:bg-[#e04d20] text-white font-extrabold uppercase tracking-widest px-7 py-3 sm:px-8 sm:py-3.5 rounded-xl transition-all duration-300 shadow-[0_4px_12px_rgba(255,94,43,0.15)] hover:shadow-[0_8px_20px_rgba(255,94,43,0.3)] hover:scale-[1.03] cursor-pointer text-xs sm:text-sm mt-1 z-50 relative"
                  >
                    Start your project
                  </a>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
