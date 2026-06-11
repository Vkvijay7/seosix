import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import AvatarHeader from './components/AvatarHeader';
import HeroTitle from './components/HeroTitle';
import Services from './components/Services';
import OurVision from './components/OurVision';
import Creations from './components/Creations';
import Pricing from './components/Pricing';
import About from './components/About';
import Contact from './components/Contact';
import useDynamicFavicon from './hooks/useDynamicFavicon';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Helper: smoothly transition navbar to dark or light theme
function setNavTheme(isDark) {
  const base = isDark ? '#1B1B1B' : '#FFF8E7';
  gsap.to('.pill-logo, .pill-nav-items', {
    backgroundColor: base,
    duration: 0.5,
    ease: 'power2.inOut',
    overwrite: 'auto'
  });
  // Also update the hover circle via inline CSS variable on .pill-nav
  const nav = document.querySelector('.pill-nav');
  if (nav) nav.style.setProperty('--base', base);

  // Update mobile StaggeredMenu toggle button color
  const smToggle = document.querySelector('.sm-toggle');
  if (smToggle) {
    gsap.to(smToggle, {
      color: isDark ? '#1B1B1B' : '#FFF8E7',
      duration: 0.5,
      ease: 'power2.inOut',
      overwrite: 'auto'
    });
  }
}

export default function App() {
  // Mount the dynamic circular profile favicon generator
  useDynamicFavicon();

  // State to track current text displayed in the hero section
  const [hoveredText, setHoveredText] = useState("SEOSIX");

  const containerRef = useRef(null);

  useGSAP(() => {
    const container = document.querySelector('.zoom-container');
    const letter = document.querySelector('.zoom-letter');
    if (!container || !letter) return;

    // Calculate origin and centering offsets dynamically
    const getOriginAndOffsets = () => {
      const containerRect = container.getBoundingClientRect();
      const letterRect = letter.getBoundingClientRect();
      
      const originX = (letterRect.left + letterRect.width / 2) - containerRect.left;
      const originY = (letterRect.top + letterRect.height / 2) - containerRect.top;

      const windowCenterX = window.innerWidth / 2;
      const windowCenterY = window.innerHeight / 2;
      const letterCenterX = letterRect.left + letterRect.width / 2;
      const letterCenterY = letterRect.top + letterRect.height / 2;

      return {
        origin: `${originX}px ${originY}px`,
        x: windowCenterX - letterCenterX,
        y: windowCenterY - letterCenterY
      };
    };

    // Main pinned scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".pinned-section",
        start: "top top",
        end: "+=125%", // Shorter scroll duration for a more responsive feel
        pin: true,
        scrub: 1, // Smooth scrub inertia for a fluid transition
        invalidateOnRefresh: true, // Recalculates offsets on window resize
        refreshPriority: 2, // Calculate homepage pin first
      }
    });

    tl.set(".zoom-container", { transformOrigin: () => getOriginAndOffsets().origin }, 0)
      .to(".avatars-container", { opacity: 0, scale: 0.95, duration: 0.2 }, 0)
      .set(".avatars-container", { visibility: "hidden", immediateRender: false }, 0.2)
      .to(".hover-service-text", { opacity: 0, duration: 0.2 }, 0)
      .set(".hover-service-text", { visibility: "hidden", immediateRender: false }, 0.2)
      .to(".fade-letter", { opacity: 0, scale: 0.75, filter: "blur(6px)", duration: 0.25 }, 0)
      .to(".fixed", { opacity: 0, duration: 0.15 }, 0) // Fade out floating navbar instantly
      .set(".fixed", { visibility: "hidden", immediateRender: false }, 0.15)
      .to(".zoom-container", {
        scale: 90, // Scale the entire container up to zoom into S
        x: () => getOriginAndOffsets().x,
        y: () => getOriginAndOffsets().y,
        duration: 1,
        ease: "power1.in" // Accelerates at the end to shoot through the screen
      }, 0)
      .to(".pinned-section", {
        backgroundColor: "#FFF8E7",
        duration: 0.7,
        ease: "power2.inOut"
      }, 0.25);

    // Fade the navbar back in when we reach the Services section
    gsap.to(".fixed", {
      scrollTrigger: {
        trigger: "#services",
        start: "top 70%",
        end: "top 25%",
        scrub: true,
      },
      opacity: 1,
      visibility: "visible"
    });

    // ─── Navbar Color Change Triggers ─────────────────────────
    // Services (cream bg) → dark navbar
    ScrollTrigger.create({
      trigger: "#services",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

    // Our Vision (dark bg) → light navbar
    ScrollTrigger.create({
      trigger: "#vision",
      start: "top 60%",
      onEnter: () => setNavTheme(false),
      onLeaveBack: () => setNavTheme(true)
    });

    // Creations → check its bg (assuming dark → stays light nav)
    // Pricing → dark navbar (user requested)
    ScrollTrigger.create({
      trigger: "#pricing",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

    // About → revert to light if dark bg
    ScrollTrigger.create({
      trigger: "#about",
      start: "top 60%",
      onEnter: () => setNavTheme(false),
      onLeaveBack: () => setNavTheme(true)
    });

    // Contact → dark navbar (user requested)
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

  }, { scope: containerRef });

  return (
    <div className="relative w-screen min-h-screen bg-[#1B1B1B] select-none" ref={containerRef}>
      {/* Navigation Bar */}
      <Navbar />

      {/* Pinned Home Section */}
      <div id="home" className="pinned-section relative w-full h-screen bg-[#1B1B1B] flex flex-col justify-center items-center overflow-hidden">
        {/* Main content layer */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-12 w-full max-w-5xl zoom-container">
          <div className="w-full flex flex-col items-center justify-center">
            {/* Avatar Row */}
            <div className="avatars-container">
              <AvatarHeader setHoveredText={setHoveredText} />
            </div>

            {/* Large Title */}
            <HeroTitle hoveredText={hoveredText} />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <Services />

      {/* Our Vision Section */}
      <OurVision />

      {/* Creations Section */}
      <Creations />

      {/* Pricing Section */}
      <Pricing />

      {/* About Us Section */}
      <About />

      {/* Contact Us & Footer Section */}
      <Contact />
    </div>
  );
}
