import React from 'react';
import PillNav from './PillNav';
import StaggeredMenu from './StaggeredMenu';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Templates', href: '#templates' },
  { label: 'Services', href: '#services' },
  { label: 'Creation', href: '#creation' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' }
];

const socialItems = [
  { label: 'Instagram', link: 'https://instagram.com' },
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Twitter', link: 'https://twitter.com' }
];

export default function Navbar({ activeHash = '#home' }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full pointer-events-none" aria-label="Main Navigation">
      {/* Desktop: PillNav */}
      <div className="flex justify-center w-full pt-4 pointer-events-none">
        <div className="pointer-events-auto">
          <PillNav
            logo="/images/seosix_logo.jpg?v=1"
            logoAlt="SEOSIX Logo"
            items={navLinks}
            activeHref={activeHash}
            baseColor="#FFF8E7"
            pillColor="#DC143C"
            hoveredPillTextColor="#DC143C"
            pillTextColor="#FFF8E7"
            ease="power3.easeOut"
            initialLoadAnimation={true}
          />
        </div>
      </div>

      {/* Mobile: StaggeredMenu */}
      <div className="md:hidden w-full h-screen pointer-events-none" style={{ position: 'fixed', top: 0, left: 0 }}>
        <div className="pointer-events-none w-full h-full">
          <StaggeredMenu
            position="right"
            items={navLinks.map(l => ({ label: l.label, link: l.href, ariaLabel: `Go to ${l.label}` }))}
            socialItems={socialItems}
            displaySocials={true}
            displayItemNumbering={true}
            logoUrl="/images/seosix_logo.jpg?v=1"
            logoAlt="SEOSIX Logo"
            menuButtonColor="#FFF8E7"
            openMenuButtonColor="#1B1B1B"
            changeMenuColorOnOpen={true}
            colors={['#DC143C', '#b01030']}
            accentColor="#DC143C"
            isFixed={false}
            closeOnClickAway={true}
          />
        </div>
      </div>
    </nav>
  );
}
