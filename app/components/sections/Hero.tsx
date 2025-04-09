import React from 'react';
import { TopHeroSection, BottomHeroSection } from './HeroSections';

const Hero: React.FC = () => {
  return (
    <section className="hero-section mt-22 min-h-[50rem] text-center">
      {/* Top Section */}
      <div className="hero-top">
        <TopHeroSection />
      </div>

      {/* Middle Section - Solar System Animation */}
      <div className="hero-middle">{/* Solar System Animation will go here */}</div>

      {/* Space between sections */}
      <div className="my-52"></div>

      {/* Bottom Section */}
      <div className="hero-bottom">
        <BottomHeroSection />
      </div>
    </section>
  );
};

export default Hero;
