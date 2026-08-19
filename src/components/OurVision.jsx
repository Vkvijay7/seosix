import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const visionTexts = [
  "Engineered Differently",
  "Continuous Innovation",
  "Design with Precision",
  "Expand Technical Limits",
  "Architect the Future"
];

// Split text into individual character spans for GSAP animation
function SplitText({ text, textRef }) {
  return (
    <h3
      ref={textRef}
      className="vision-text absolute inset-0 flex items-center justify-center"
      style={{ fontFamily: 'var(--font-school)' }}
    >
      <span className="flex flex-wrap items-center justify-center gap-x-[0.15em] px-4">
        {text.split(' ').map((word, wIdx) => (
          <span key={wIdx} className="inline-flex whitespace-nowrap">
            {word.split('').map((char, cIdx) => (
              <span
                key={`${wIdx}-${cIdx}`}
                className="vision-char inline-block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white will-change-transform"
                style={{ lineHeight: 1, color: '#ffffff' }}
              >
                {char}
              </span>
            ))}
            {wIdx < text.split(' ').length - 1 && (
              <span className="vision-char inline-block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white" style={{ lineHeight: 1, width: '0.3em', color: '#ffffff' }}>
                &nbsp;
              </span>
            )}
          </span>
        ))}
      </span>
    </h3>
  );
}

function OurVision() {
  const sectionRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalTexts = visionTexts.length;
    const ctx = gsap.context(() => {
      // Set ALL chars to scattered/hidden initially
      textRefs.current.forEach(el => {
        if (!el) return;
        const chars = el.querySelectorAll('.vision-char');
        gsap.set(chars, {
          opacity: 0,
          y: () => gsap.utils.random(-250, 250),
          x: () => gsap.utils.random(-500, 500),
          rotation: () => gsap.utils.random(-120, 120),
          scale: 0
        });
      });

      // Build master timeline pinned to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${totalTexts * 120}%`,
          pin: true,
          scrub: 0.8
        }
      });

      textRefs.current.forEach((el, i) => {
        if (!el) return;
        const chars = gsap.utils.toArray(el.querySelectorAll('.vision-char'));
        if (!chars.length) return;

        const pos = i * 1.2; // Each text gets 1.2 units of timeline

        // Phase 1: Assemble — chars fly in from random positions
        tl.to(chars, {
          opacity: 1,
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          duration: 0.4,
          stagger: { each: 0.012, from: 'random' },
          ease: 'back.out(1.4)'
        }, pos);

        // Phase 2: Scatter out (skip for last text — stays visible)
        if (i < totalTexts - 1) {
          tl.to(chars, {
            opacity: 0,
            x: () => gsap.utils.random(-600, 600),
            y: () => gsap.utils.random(-300, 300),
            rotation: () => gsap.utils.random(-180, 180),
            scale: 0,
            duration: 0.35,
            stagger: { each: 0.01, from: 'random' },
            ease: 'power3.in'
          }, pos + 0.75);
        }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision"
      ref={sectionRef}
      className="curved-section relative w-full h-screen bg-[#1B1B1B] overflow-hidden"
    >
      {/* Section Label */}
      <header className="absolute top-[calc(2rem+var(--curve-height))] left-0 right-0 z-30 flex justify-center pointer-events-none">
        <h2
          className="vision-label text-xs font-semibold tracking-[4px] text-white uppercase italic"
          style={{ fontFamily: 'var(--font-custom)', color: '#ffffff' }}
        >
          Our Vision
        </h2>
      </header>

      {/* Vision Texts — stacked absolutely, centered */}
      <div className="relative w-full h-full">
        {visionTexts.map((text, i) => (
          <SplitText
            key={i}
            text={text}
            textRef={el => { textRefs.current[i] = el; }}
          />
        ))}
      </div>

      {/* Subtle bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1B1B1B] to-transparent pointer-events-none z-10" />
    </section>
  );
}

export default React.memo(OurVision);
