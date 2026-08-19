import React, { useState, useRef, useEffect } from 'react';
import Navbar from './components/Navbar';
import AvatarHeader from './components/AvatarHeader';
import Templates from './components/Templates';
import AdminPanel from './components/AdminPanel';
import HeroTitle from './components/HeroTitle';
import Services from './components/Services';
import OurVision from './components/OurVision';
import Creations from './components/Creations';
import Pricing from './components/Pricing';
import OurProcess from './components/OurProcess';
import About from './components/About';
import Contact from './components/Contact';
import ScrollIndicator from './components/ScrollIndicator';
import useDynamicFavicon from './hooks/useDynamicFavicon';
import useCodeProtection from './hooks/useCodeProtection';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Optimize ScrollTrigger performance on mobile/touch devices
ScrollTrigger.config({
  ignoreMobileResize: true // prevents recalculating all triggers when mobile address bar hides/shows
});

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
  if (nav) {
    nav.style.setProperty('--base', base);
    nav.style.setProperty('--text', isDark ? '#FFF8E7' : '#1B1B1B');
    nav.style.setProperty('--border', isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.06)');
  }

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
  // Mount client-side code protection / anti-debugging hook
  const isDevToolsOpen = useCodeProtection();

  // Mount the dynamic circular profile favicon generator
  useDynamicFavicon();

  // State to track current text displayed in the hero section
  const [hoveredText, setHoveredText] = useState("SEOSIX");

  const containerRef = useRef(null);

  const [currentPage, setCurrentPage] = useState('home');
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveHash(hash || '#home');
      if (hash === '#templates') {
        setCurrentPage('templates');
        window.scrollTo(0, 0);
      } else if (hash === '#admin') {
        setCurrentPage('admin');
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Smooth scroll logic to target when we navigate from templates back to a home section
  useEffect(() => {
    if (currentPage === 'home') {
      const hash = window.location.hash;
      if (hash && hash !== '#home') {
        const targetId = hash.substring(1);
        const timer = setTimeout(() => {
          const element = document.getElementById(targetId);
          if (element) {
            const trigger = ScrollTrigger.getAll().find(st => st.trigger === element && st.pin);
            const targetScroll = trigger ? trigger.start : element.offsetTop;
            window.scrollTo({
              top: targetScroll,
              behavior: 'smooth'
            });
          }
        }, 120);
        return () => clearTimeout(timer);
      }
    }
  }, [currentPage]);

  if (isDevToolsOpen) {
    return (
      <div className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-[#0d0d0d] text-white p-6 font-sans overflow-hidden select-none">
        {/* Decorative Grid and Ambient Glows */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] bg-yellow-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative max-w-lg w-full bg-[#161616]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl flex flex-col items-center gap-6">
          {/* Animated Shield/Lock Icon */}
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 animate-pulse">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-red-500/5 blur-md animate-ping" />
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-2">
            <h1 className="text-xl md:text-2xl font-bold tracking-widest text-[#FFF8E7] uppercase font-mono">
              Secure Shield Active
            </h1>
            <p className="text-xs font-semibold tracking-wider text-red-500/80 uppercase font-mono">
              Developer tools restricted
            </p>
          </div>

          {/* Message */}
          <p className="text-sm leading-relaxed text-zinc-400 font-sans">
            To safeguard our proprietary design system, custom visual shaders, and source code assets, developer tools access is restricted on this site.
          </p>

          {/* Hint / Call to action */}
          <div className="w-full h-px bg-white/10 my-2" />
          
          <p className="text-xs text-zinc-500 font-mono">
            Please close the inspect panel to return to the interactive experience.
          </p>
        </div>
      </div>
    );
  }

  // Handle smooth scroll for all anchor links and page scroll states
  useEffect(() => {
    let scrollTimeout;
    let transitionTimeout;

    const handleScroll = () => {
      if (currentPage !== 'home') return;
      if (window.innerWidth < 768) return; // Skip class toggle on mobile to prevent layout thrashing
      document.body.classList.add('is-scrolling');
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        document.body.classList.remove('is-scrolling');
      }, 150); // Debounce time to wait after scrolling stops
    };

    const handleAnchorClick = (e) => {
      const targetAnchor = e.target.closest('a');
      if (!targetAnchor) return;
      
      const href = targetAnchor.getAttribute('href');
      if (href && href.startsWith('#')) {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          
          // Find the pinning ScrollTrigger associated with this element if any
          const trigger = ScrollTrigger.getAll().find(st => st.trigger === targetElement && st.pin);
          const targetScroll = trigger ? trigger.start : targetElement.offsetTop;
          
          // If navigating to home, scroll to 0
          const scrollPos = targetId === 'home' ? 0 : targetScroll;
          
          // Only trigger curve if we actually need to scroll
          const isAlreadyAtTarget = Math.abs(window.scrollY - scrollPos) < 5;
          if (!isAlreadyAtTarget) {
            document.body.classList.add('is-scrolling');
            clearTimeout(scrollTimeout);
            clearTimeout(transitionTimeout);
            
            transitionTimeout = setTimeout(() => {
              document.body.classList.remove('is-scrolling');
            }, 800); // 800ms fallback for transition
          }
          
          window.scrollTo({
            top: scrollPos,
            behavior: 'smooth'
          });
          
          // Update URL hash without jumping
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      clearTimeout(transitionTimeout);
    };
  }, []);

  useGSAP(() => {
    // Only kill triggers associated with .pinned-section
    ScrollTrigger.getAll().forEach(trigger => {
      if (trigger.vars && (trigger.vars.trigger === ".pinned-section" || trigger.vars.id === "hero-pin")) {
        trigger.kill();
      }
    });

    if (currentPage !== 'home') {
      return;
    }

    const container = document.querySelector('.zoom-container');
    const letter = document.querySelector('.zoom-letter');

    // ONLY initialize zoom animation if container and letter are present in the DOM
    if (container && letter) {
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
          refreshPriority: 10, // Calculate homepage pin first (highest priority)
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
    }

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
    // Services (cream bg) → dark navbar (black text menu)
    ScrollTrigger.create({
      trigger: "#services",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

    // Our Process (cream bg) → dark navbar (black text menu)
    ScrollTrigger.create({
      trigger: "#process",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(true)
    });

    // Our Vision (dark bg) → light navbar (white text menu)
    ScrollTrigger.create({
      trigger: "#vision",
      start: "top 60%",
      onEnter: () => setNavTheme(false),
      onLeaveBack: () => setNavTheme(true)
    });

    // Creation (cream bg) → dark navbar (black text menu)
    ScrollTrigger.create({
      trigger: "#creation",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

    // Pricing (dark bg) → light navbar (white text menu)
    ScrollTrigger.create({
      trigger: "#pricing",
      start: "top 60%",
      onEnter: () => setNavTheme(false),
      onLeaveBack: () => setNavTheme(true)
    });

    // About Us (cream bg) → dark navbar (black text menu)
    ScrollTrigger.create({
      trigger: "#about",
      start: "top 60%",
      onEnter: () => setNavTheme(true),
      onLeaveBack: () => setNavTheme(false)
    });

    // Contact (dark bg) → light navbar (white text menu)
    ScrollTrigger.create({
      trigger: "#contact",
      start: "top 60%",
      onEnter: () => setNavTheme(false),
      onLeaveBack: () => setNavTheme(true)
    });

    // Robust, multi-stage layout refresh to handle dynamic rendering and image loading shifts
    const refreshGSAP = () => {
      ScrollTrigger.sort();
      ScrollTrigger.refresh();
    };

    window.addEventListener('load', refreshGSAP);

    // Multi-stage timeouts to handle React hydration and rendering lag
    const timeouts = [100, 300, 600, 1200, 2500, 5000].map(delay =>
      setTimeout(refreshGSAP, delay)
    );

    return () => {
      window.removeEventListener('load', refreshGSAP);
      timeouts.forEach(t => clearTimeout(t));
    };
  }, { scope: containerRef, dependencies: [currentPage] });

  return (
    <main className="relative w-screen min-h-screen bg-[#1B1B1B] select-none" ref={containerRef}>
      {/* Navigation Bar */}
      <Navbar activeHash={activeHash} />

      {currentPage === 'templates' && <Templates />}
      {currentPage === 'admin' && <AdminPanel />}

      <div style={{ display: currentPage === 'home' ? 'block' : 'none' }}>
        {/* Pinned Home Section */}
        <section id="home" className="pinned-section relative w-full h-screen bg-[#1B1B1B] flex flex-col justify-center items-center overflow-hidden" aria-label="Home / Hero">
          {/* Main content layer */}
          <div className="relative z-10 flex flex-col items-center justify-center px-4 pt-36 pb-12 w-full max-w-5xl zoom-container will-change-transform">
            <div className="w-full flex flex-col items-center justify-center">
              {/* Avatar Row */}
              <div className="avatars-container">
                <AvatarHeader setHoveredText={setHoveredText} />
              </div>

              {/* Large Title */}
              <HeroTitle hoveredText={hoveredText} />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <Services />

        {/* Our Process Section */}
        <OurProcess />

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

      {/* Floating Animated Red Scroll Indicator for All Pages & Sections */}
      <div className="fixed bottom-6 left-0 right-0 flex justify-center pointer-events-none z-50">
        <div className="pointer-events-auto">
          <ScrollIndicator 
            text="SCROLL UP" 
          />
        </div>
      </div>
    </main>
  );
}
