import React from 'react';
import { TopHeroSection, BottomHeroSection } from './HeroSections';

const Hero: React.FC = () => {
  return (
    <section className="hero-section mt-22 text-center">
      {/* Top Section */}
      <div className="hero-top">
        <TopHeroSection />
      </div>

      {/* Middle Section - Solar System Animation */}
      <div className="hero-middle h-[20rem]">{/* Solar System Animation will go here */}</div>

      {/* Bottom Section */}
      <div className="hero-bottom">
        <BottomHeroSection />
      </div>
    </section>
  );
};

export default Hero;
