import React from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Code, Smartphone, Film, Paintbrush, TrendingUp, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const bentoHighlights = [
  {
    title: "Stunning 3D Animations",
    desc: "We craft immersive browser webscapes using Three.js, shaders, and visual physics that elevate brand perception instantly.",
    color: "#DC143C"
  },
  {
    title: "High-End Website Engineering",
    desc: "100% custom React and Next.js platforms built with structural SEO optimization and high-fidelity micro-animations.",
    color: "#ffffff"
  },
  {
    title: "Cinematic Video Editing",
    desc: "Commercial-grade video production featuring narrative hooks, custom motion graphics, and audio engineering.",
    color: "#DC143C"
  }
];

const techCards = [
  { name: "HTML5", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS3", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "Tailwind CSS", img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "ReactJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "NextJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "ThreeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg", invert: true },
  { name: "Framer Motion", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
  { name: "NodeJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "ExpressJS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", invert: true },
  { name: "MongoDB", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "SQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
  { name: "Python", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "SpringBoot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" },
  { name: "Supabase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" },
  { name: "REST API", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "React Native", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" }
];


const marqueeServices = [
  { name: "Web Development", icon: Code },
  { name: "App Development", icon: Smartphone },
  { name: "Video Editing", icon: Film },
  { name: "UI/UX Design", icon: Paintbrush },
  { name: "SEO Domination", icon: TrendingUp },
  { name: "Creative Branding", icon: Zap }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.215, 0.610, 0.355, 1.000]
    }
  }
};

export default function About() {
  return (
    <section 
      id="about" 
      className="curved-section relative flex flex-col justify-center items-center bg-[#FFF8E7] py-24 md:py-32 px-6 md:px-12 select-none overflow-hidden min-h-screen"
    >
      {/* CSS Styles injection for custom animations, 3D carousel, and tooltips */}
      <style>{`
        .about-header {
          text-align: center;
          max-width: 900px;
          margin-bottom: 60px;
          z-index: 10;
        }

        .about-bento-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
          width: 100%;
          max-width: 1100px;
          margin-bottom: 80px;
          z-index: 10;
        }

        .about-bento-card {
          background: rgba(15, 15, 15, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 30px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03);
          transition: border-color 0.3s, transform 0.3s;
        }

        .about-bento-card:hover {
          border-color: rgba(220, 20, 60, 0.3);
          transform: translateY(-4px);
        }

        /* 3D CAROUSEL SCENE */
        .ts-3d-scene {
          overflow: hidden;
          perspective: 35em;
          mask-image: linear-gradient(90deg, transparent, #000 15% 85%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 15% 85%, transparent);
          width: 100%;
          max-width: 100vw;
          position: relative;
          padding: 60px 0;
          display: flex;
          justify-content: center;
          z-index: 10;
          font-size: 16px;
        }

        @media (max-width: 1024px) {
          .ts-3d-scene { font-size: 13px; }
        }
        @media (max-width: 768px) {
          .ts-3d-scene { font-size: 10px; }
          .ts-card-info {
            color: #ea5358 !important; /* Always show text on mobile/tablet */
            padding: 8px 6px !important; /* Reduce padding on mobile */
          }
          .ts-3d-card .padding-icon {
            padding: 6px !important;
          }
          .ts-3d-card .title {
            margin-top: 4px !important;
          }
        }
        @media (max-width: 480px) {
          .ts-3d-scene { font-size: 9px; }
        }

        .ts-3d-a3d {
          display: grid;
          place-self: center;
          transform-style: preserve-3d;
          animation: ry-loop 32s linear infinite;
          will-change: transform;
        }

        @keyframes ry-loop {
          0% {
            transform: rotateY(0deg);
          }
          100% {
            transform: rotateY(360deg);
          }
        }

        /* Continuous rotation without hover interruptions as per user request */
        .ts-3d-a3d:hover {
          animation-play-state: running; 
        }

        .ts-3d-card {
          --background: linear-gradient(to left, #f7ba2b 0%, #ea5358 100%);
          --w: 12em;
          --n: 24;
          --ba: calc(360deg / var(--n));
          grid-area: 1 / 1;
          width: var(--w);
          aspect-ratio: 7 / 10;
          padding: 5px;
          border-radius: 1rem;
          overflow: visible; /* CRITICAL for the glow effect to show outside card bounds */
          background: #f7ba2b;
          background: var(--background);
          position: relative;
          z-index: 1;
          transform-style: preserve-3d;
          transform: rotateY(calc(var(--i) * var(--ba))) translateZ(-52.5em);
          cursor: pointer;
          will-change: transform;
        }

        .ts-3d-card::after {
          position: absolute;
          content: "";
          top: 30px;
          left: 0;
          right: 0;
          z-index: -1;
          height: 100%;
          width: 100%;
          transform: scale(0.8);
          filter: blur(25px);
          background: #f7ba2b;
          background: var(--background);
          transition: opacity .5s;
          pointer-events: none;
        }

        .ts-card-info {
          --color: #ffffff;
          background: var(--color);
          color: var(--color); /* Invisible by default to match background */
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
          overflow: visible;
          border-radius: .7rem;
          padding: 16px 12px;
          position: relative;
          transition: color 1s;
        }

        .ts-3d-card .title {
          font-weight: bold;
          letter-spacing: .1em;
          font-size: 0.95em;
          margin-top: 10px;
          text-align: center;
          width: 100%;
          word-break: break-word;
        }

        /* Hover states */
        .ts-3d-card:hover::after {
          opacity: 0;
        }

        .ts-3d-card:hover .ts-card-info {
          color: #ea5358; /* Fades text to high-contrast crimson/rose on white background */
        }

        .ts-3d-card:hover .tech-icon {
          transform: scale(1.12);
        }

        .ts-3d-card .padding-icon {
          width: 100%;
          height: 60%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 12px;
        }

        .ts-3d-card .tech-icon {
          width: 100%;
          height: auto;
          max-height: 100px;
          object-fit: contain;
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.15));
          transition: transform 0.4s ease;
        }

        .ts-3d-card .tech-icon.invert-icon {
          /* No inversion needed on white cards, standard black logos contrast perfectly */
          filter: drop-shadow(0 8px 12px rgba(0,0,0,0.15));
        }

        .ts-3d-card .overlay-badge {
          position: absolute;
          top: 8px;
          right: 8px;
          color: #fff;
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 0.6rem;
          font-weight: 800;
          background: rgba(0, 0, 0, 0.7); /* Dark background for high-contrast readability on white card */
          border: 1px solid rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(5px);
          opacity: 0.7;
          pointer-events: none;
        }

        /* Tooltip Social Buttons */
        .about-socials-container {
          margin-top: 60px;
          display: flex;
          justify-content: center;
          z-index: 10;
        }

        .example-2 {
          list-style: none;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          margin: 0;
        }

        .example-2 .icon-content {
          margin: 0 10px;
          position: relative;
        }

        .example-2 .icon-content .tooltip {
          position: absolute;
          top: -30px;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          padding: 6px 10px;
          border-radius: 5px;
          opacity: 0;
          visibility: hidden;
          font-size: 14px;
          font-weight: 700;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .example-2 .icon-content:hover .tooltip {
          opacity: 1;
          visibility: visible;
          top: -50px;
        }

        .example-2 .icon-content a {
          position: relative;
          overflow: hidden;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          color: #fff;
          background-color: #1c1c1c;
          border: 1px solid rgba(255, 255, 255, 0.1);
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .example-2 .icon-content a svg {
          position: relative;
          z-index: 1;
          width: 20px;
          height: 20px;
          fill: currentColor;
          transition: transform 0.3s;
        }

        .example-2 .icon-content a:hover svg {
          transform: scale(1.1);
        }

        .example-2 .icon-content a .filled {
          position: absolute;
          top: auto;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 0;
          transition: all 0.3s ease-in-out;
          z-index: 0;
        }

        .example-2 .icon-content a:hover .filled {
          height: 100%;
        }

        .example-2 .icon-content a[data-social="linkedin"] .filled,
        .example-2 .icon-content a[data-social="linkedin"]~.tooltip {
          background-color: #0274b3;
        }

        .example-2 .icon-content a[data-social="github"] .filled,
        .example-2 .icon-content a[data-social="github"]~.tooltip {
          background-color: #24262a;
        }

        .example-2 .icon-content a[data-social="instagram"] .filled,
        .example-2 .icon-content a[data-social="instagram"]~.tooltip {
          background-color: #bc2a8d;
        }

        .example-2 .icon-content a[data-social="youtube"] .filled,
        .example-2 .icon-content a[data-social="youtube"]~.tooltip {
          background-color: #ff0000;
        }

        /* Floating background circles */
        .about-circles {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .about-circles li {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background-color: #DC143C;
          background-image: linear-gradient(225deg, #DC143C 0%, #800c22 60%, rgba(0, 0, 0, 0.8) 100%);
          animation: about-float-up 25s linear infinite;
          bottom: -150px;
          border-radius: 50%;
          opacity: 0.12;
        }

        .about-circles li:nth-child(1) { left: 25%; width: 80px; height: 80px; animation-delay: 0s; }
        .about-circles li:nth-child(2) { left: 10%; width: 25px; height: 25px; animation-delay: 2s; animation-duration: 12s; }
        .about-circles li:nth-child(3) { left: 70%; width: 30px; height: 30px; animation-delay: 4s; }
        .about-circles li:nth-child(4) { left: 40%; width: 60px; height: 60px; animation-delay: 0s; animation-duration: 18s; }
        .about-circles li:nth-child(5) { left: 65%; width: 20px; height: 20px; animation-delay: 0s; }
        .about-circles li:nth-child(6) { left: 75%; width: 110px; height: 110px; animation-delay: 3s; }
        .about-circles li:nth-child(7) { left: 35%; width: 130px; height: 130px; animation-delay: 7s; }
        .about-circles li:nth-child(8) { left: 50%; width: 25px; height: 25px; animation-delay: 15s; animation-duration: 45s; }
        .about-circles li:nth-child(9) { left: 20%; width: 15px; height: 15px; animation-delay: 2s; animation-duration: 35s; }
        .about-circles li:nth-child(10) { left: 85%; width: 120px; height: 120px; animation-delay: 0s; animation-duration: 11s; }

        @keyframes about-float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.12;
            border-radius: 50%;
          }
          50% {
            opacity: 0.18;
          }
          100% {
            transform: translateY(-1200px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }



        /* Services Infinite Marquee Styles */
        .about-services-marquee {
          width: 100vw;
          overflow: hidden;
          position: relative;
          padding: 30px 0;
          background: rgba(255, 255, 255, 0.015);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          margin-top: 20px;
          margin-bottom: 60px;
          z-index: 10;
        }

        .about-marquee-track {
          display: flex;
          width: max-content;
          animation: marquee-left 28s linear infinite;
        }

        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.3333%);
          }
        }

        .about-marquee-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 0 35px;
          color: #000000;
          font-weight: 800;
          letter-spacing: 0.12em;
          font-size: 1.05rem;
          text-transform: uppercase;
        }

        .about-marquee-icon {
          color: #DC143C; /* Brand Crimson Red */
          width: 20px;
          height: 20px;
        }
      `}</style>

      {/* Giant SEOSIX Header Container */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="w-full flex flex-col items-center justify-center text-center z-10 px-4 mb-8"
      >
        <motion.span 
          variants={fadeUpVariants}
          className="text-[#DC143C] font-semibold tracking-wider text-xs sm:text-sm uppercase block mb-4"
        >
          About Us
        </motion.span>
        <motion.h2 
          variants={fadeUpVariants}
          className="font-school font-black text-[15vw] sm:text-[13.5vw] leading-[0.8] tracking-tighter uppercase select-none mb-6 text-black"
        >
          SEO<span className="text-[#DC143C]">SIX</span>
        </motion.h2>
        <motion.p 
          variants={fadeUpVariants}
          className="text-neutral-800 font-semibold max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed mb-8"
        >
          We provide premier web developer near me solutions, custom mobile app development, and technical SEO optimization in Dindigul, Chennai, Coimbatore, and globally.
        </motion.p>
        
        {/* Hire Us CTA Button */}
        <motion.a 
          variants={fadeUpVariants}
          href="https://api.whatsapp.com/send?phone=919000000000&text=Hi%2C%20I%20would%20like%20to%20hire%20you%20to%20build%20my%20dream%20website%21"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#DC143C] hover:bg-[#b01030] text-white font-extrabold uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 shadow-[0_10px_20px_rgba(220,20,60,0.25)] hover:shadow-[0_15px_30px_rgba(220,20,60,0.45)] hover:scale-105 cursor-pointer"
        >
          Work With Us to Build Your Dream Platform
        </motion.a>
      </motion.div>

      {/* Looping Services Marquee Track */}
      <div className="about-services-marquee select-none w-full">
        <div className="about-marquee-track">
          {[...marqueeServices, ...marqueeServices, ...marqueeServices].map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="about-marquee-item">
                <IconComponent className="about-marquee-icon" />
                <span>{item.name}</span>
              </div>
            );
          })}
        </div>
      </div>




      {/* Tech Stack Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="text-center z-10 mb-8"
      >
        <h3 className="text-[#DC143C] font-extrabold text-4xl sm:text-5xl uppercase tracking-tight">
          OUR TECH STACK
        </h3>
        <p className="text-neutral-500 text-xs sm:text-sm uppercase tracking-widest mt-2">
          Click to inspect
        </p>
      </motion.div>

      {/* 3D Rotating Curved Carousel Scene */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="ts-3d-scene"
      >
        <div className="ts-3d-a3d" style={{ '--n': 24 }}>
          {techCards.map((card, idx) => (
            <div 
              key={idx} 
              className="ts-3d-card" 
              style={{ '--i': idx }}
            >
              <div className="ts-card-info">
                <span className="overlay-badge">Click me</span>
                <div className="padding-icon">
                  <img 
                    src={card.img} 
                    alt={card.name} 
                    className={`tech-icon ${card.invert ? 'invert-icon' : ''}`}
                    draggable="false"
                    width="48"
                    height="48"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2 className="title">{card.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tooltip Social Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="about-socials-container"
      >
        <ul className="example-2">
          <li className="icon-content">
            <a 
              href="https://www.linkedin.com/in/seo-six" 
              aria-label="LinkedIn" 
              data-social="linkedin" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <svg viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
            </a>
            <div className="tooltip">LinkedIn</div>
          </li>
          <li className="icon-content">
            <a 
              href="https://github.com/seosixofficial" 
              aria-label="GitHub" 
              data-social="github" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <svg viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </a>
            <div className="tooltip">GitHub</div>
          </li>
          <li className="icon-content">
            <a 
              href="https://www.instagram.com/seosix_official?igsh=MTR6M2E1d3pnNnp6bQ==" 
              aria-label="Instagram" 
              data-social="instagram" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <svg viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12.1 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
            </a>
            <div className="tooltip">Instagram</div>
          </li>
          <li className="icon-content">
            <a 
              href="https://youtube.com/@seosixofficial?si=1tVTHBnldvxD1v4k" 
              aria-label="Youtube" 
              data-social="youtube" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="filled"></div>
              <svg viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.781 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </a>
            <div className="tooltip">Youtube</div>
          </li>
        </ul>
      </motion.div>

      {/* Glowing Ambient Particles Background */}
      <ul className="about-circles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>
  );
}
