import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "CAF Civil Services",
    category: "Construction & Engineering",
    link: "https://seosixofficial.github.io/construction1/",
    image: "/images/civil.jpg",
    description: "Premium infrastructure and engineering layouts built for civil execution."
  },
  {
    id: 2,
    title: "TakeWake Cafe",
    category: "Cafe & Coffee Shop",
    link: "https://seosixofficial.github.io/cafe/",
    image: "/images/takewake.jpg",
    description: "Bespoke digital branding and menu platform for a premium specialty coffee shop."
  },
  {
    id: 3,
    title: "Tek Monk",
    category: "Screen Mirroring App",
    link: "https://screenmirror-59eb6.web.app/",
    image: "/images/tekmonk.jpg",
    description: "High-performance mirroring application interface designed for seamless connectivity."
  },
  {
    id: 4,
    title: "Smartbill",
    category: "Retail Billing Software",
    link: "https://seosixofficial.github.io/smartbill_site/",
    image: "/images/smartbill.jpg",
    description: "Custom SaaS billing platform UI focused on conversion and enterprise management."
  },
  {
    id: 5,
    title: "Udhayam Grocery Store",
    category: "E-Commerce & Retail",
    link: "https://udhayam-three.vercel.app/",
    image: "/images/udhayam.jpg",
    description: "Modern online grocery ordering system with highly optimized shopping workflows."
  },
  {
    id: 6,
    title: "Aslam Civil Construction",
    category: "Engineering & Construction",
    link: "https://aslam-chi.vercel.app/",
    image: "/images/aslam.jpg",
    description: "Premium structural builder landing page featuring immersive layouts and custom portfolios."
  }
];

export default function Creations() {
  const [cards, setCards] = useState(projects);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dragDirection, setDragDirection] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  // Card stack configuration
  const offset = 8;
  const scaleStep = 0.05;
  const dimStep = 0.2;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring',
    stiffness: 180,
    damping: 24
  };

  const moveToEnd = () => {
    setCards(prev => [...prev.slice(1), prev[0]]);
    setCurrentIndex(prev => (prev + 1) % projects.length);
  };

  const moveToStart = () => {
    setCards(prev => [prev[prev.length - 1], ...prev.slice(0, -1)]);
    setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
  };

  const handleDragEnd = (_, info) => {
    const velocity = info.velocity.y;
    const offsetVal = info.offset.y;

    if (Math.abs(offsetVal) > swipeThreshold || Math.abs(velocity) > 400) {
      if (offsetVal < 0 || velocity < 0) {
        setDragDirection('up');
        setTimeout(() => {
          moveToEnd();
          setDragDirection(null);
        }, 150);
      } else {
        setDragDirection('down');
        setTimeout(() => {
          moveToStart();
          setDragDirection(null);
        }, 150);
      }
    }
    dragY.set(0);
  };

  const handleCardClick = (link) => {
    window.open(link, '_blank', 'noopener,noreferrer');
  };

  return (
    <section 
      id="creation" 
      className="curved-section w-full bg-[#FFF8E7] text-black py-24 md:py-32 px-6 md:px-12 select-none relative overflow-hidden"
    >
      <style>{`
        /* Creations 3D Card Stack Styles */
        .creations-stack-container {
          position: relative;
          width: 320px;
          height: 245px;
          margin: 40px auto;
          z-index: 10;
        }

        @media (min-width: 640px) {
          .creations-stack-container {
            width: 500px;
            height: 375px;
          }
        }

        .creations-stack-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(220, 20, 60, 0.06) 0%, rgba(220, 20, 60, 0) 70%);
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          filter: blur(40px);
          pointer-events: none;
          z-index: 1;
        }

        .creations-card-badge {
          position: absolute;
          top: 16px;
          left: 16px;
          color: #DC143C;
          padding: 6px 14px;
          border-radius: 9999px;
          font-size: 0.65rem;
          font-weight: 800;
          letter-spacing: 0.15em;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          z-index: 3;
        }
      `}</style>

      {/* Background Accent Gradients */}
      <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 rounded-full bg-[#DC143C]/3 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center w-full">
          <span className="text-[#DC143C] font-semibold tracking-wider text-xs sm:text-sm uppercase block mb-3">
            Portfolio
          </span>
          <h2 className="font-school font-black text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase leading-none tracking-tight">
            SELECTED — WORK
          </h2>
        </div>

        {/* 3D Curved Stack Layout */}
        <div className="relative w-full flex items-center justify-center py-10 z-10">
          <div className="creations-stack-glow" />

          {/* Navigation - Left Arrow */}
          <motion.button
            onClick={moveToStart}
            aria-label="Previous project"
            className="absolute left-4 lg:left-24 p-3.5 sm:p-4 rounded-full bg-white border border-[#1B1B1B]/8 shadow-lg hover:border-[#DC143C]/20 hover:text-[#DC143C] transition-colors duration-200 z-20 cursor-pointer"
            whileHover={{ scale: 1.1, x: -4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft size={20} />
          </motion.button>

          {/* Navigation - Right Arrow */}
          <motion.button
            onClick={moveToEnd}
            aria-label="Next project"
            className="absolute right-4 lg:right-24 p-3.5 sm:p-4 rounded-full bg-white border border-[#1B1B1B]/8 shadow-lg hover:border-[#DC143C]/20 hover:text-[#DC143C] transition-colors duration-200 z-20 cursor-pointer"
            whileHover={{ scale: 1.1, x: 4 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Active Card Stack Viewport */}
          <div className="creations-stack-container">
            <ul className="relative w-full h-full m-0 p-0">
              <AnimatePresence>
                {cards.map((project, i) => {
                  const isFront = i === 0;
                  const brightness = Math.max(0.4, 1 - i * dimStep);
                  const baseZ = cards.length - i;

                  return (
                    <motion.li
                      key={project.id}
                      className="absolute w-full h-full list-none overflow-hidden border border-[#1B1B1B]/8"
                      style={{
                        borderRadius: "2rem",
                        cursor: isFront ? 'grab' : 'auto',
                        touchAction: 'none',
                        boxShadow: isFront
                          ? '0 30px 60px rgba(0, 0, 0, 0.2)'
                          : '0 15px 30px rgba(0, 0, 0, 0.08)',
                        rotateX: isFront ? rotateX : 0,
                        transformPerspective: 1000
                      }}
                      animate={{
                        top: `${i * -offset}%`,
                        scale: 1 - i * scaleStep,
                        filter: `brightness(${brightness})`,
                        zIndex: baseZ,
                        opacity: dragDirection && isFront ? 0 : 1
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.8,
                        transition: { duration: 0.2 }
                      }}
                      transition={spring}
                      drag={isFront ? 'y' : false}
                      dragConstraints={{ top: 0, bottom: 0 }}
                      dragElastic={0.7}
                      onDrag={(_, info) => {
                        if (isFront) {
                          dragY.set(info.offset.y);
                        }
                      }}
                      onDragEnd={handleDragEnd}
                      whileDrag={
                        isFront
                          ? {
                              zIndex: cards.length + 1,
                              cursor: 'grabbing',
                              scale: 1.05,
                            }
                          : {}
                      }
                      onHoverStart={() => isFront && setShowInfo(true)}
                      onHoverEnd={() => setShowInfo(false)}
                      onClick={() => isFront && handleCardClick(project.link)}
                    >
                      {/* Top Category Badge */}
                      {isFront && (
                        <div className="creations-card-badge">
                          <span>0{project.id}</span>
                          <span className="opacity-40 mx-1.5">/</span>
                          <span>{project.category}</span>
                        </div>
                      )}

                      {/* Cover Project Image */}
                      <img
                        src={project.image}
                        alt={`${project.title} - ${project.category} Digital Platform`}
                        className="w-full h-full object-cover pointer-events-none select-none"
                        draggable={false}
                      />
                      
                      {/* Card Hover Information Overlay */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2.5 z-10"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ 
                          opacity: isFront && showInfo ? 1 : 0.85,
                          y: 0
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div>
                          <h3 className="text-white font-black text-xl sm:text-2xl uppercase tracking-tight leading-tight">
                            {project.title}
                          </h3>
                          <p className="text-[#DC143C] font-bold text-xs uppercase tracking-wider mt-0.5">
                            {project.category}
                          </p>
                        </div>
                        
                        {isFront && showInfo && (
                          <motion.p 
                            className="text-neutral-300 text-xs sm:text-sm leading-relaxed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                          >
                            {project.description}
                          </motion.p>
                        )}

                        {isFront && (
                          <div className="bg-[#DC143C] text-white font-extrabold uppercase text-[10px] tracking-wider py-2.5 px-4 rounded-xl flex items-center justify-center gap-1.5 transition duration-300 shadow-[0_4px_12px_rgba(220,20,60,0.2)] select-none hover:bg-[#b01030] self-start cursor-pointer mt-1">
                            <span>Visit Website</span>
                            <ExternalLink size={11} className="mt-0.5" />
                          </div>
                        )}
                      </motion.div>
                    </motion.li>
                  );
                })}
              </AnimatePresence>
            </ul>
          </div>
        </div>

        {/* Progress Tracker Dots */}
        <div className="flex gap-2.5 z-20 mt-12">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                // Shift stack directly to target card index
                const offsetShift = (i - currentIndex + projects.length) % projects.length;
                let newCards = [...cards];
                for (let j = 0; j < offsetShift; j++) {
                  newCards = [...newCards.slice(1), newCards[0]];
                }
                setCards(newCards);
                setCurrentIndex(i);
              }}
              aria-label={`Go to project ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === currentIndex
                  ? 'bg-black w-8'
                  : 'bg-black/20 hover:bg-black/40 w-1.5'
              }`}
            />
          ))}
        </div>

        {/* Interaction Info Guide */}
        <p className="text-[#1B1B1B]/40 text-xs tracking-wider uppercase font-semibold text-center mt-6">
          ↕️ Drag card up/down to swipe • Click front card to visit website
        </p>
      </div>
    </section>
  );
}
