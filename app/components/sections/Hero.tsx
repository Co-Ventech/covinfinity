import type React from "react";
import { TopHeroSection, BottomHeroSection } from "./HeroSections";

const Hero: React.FC = () => {
  return (
    <section className="hero-section flex flex-col items-center text-center">
      {/* Solar System with Overlaid Text */}
      <div className="hero-content relative w-full flex justify-center items-center
         lg:h-[80rem] md:h-[60rem] sm:h-[50rem] h-[40rem]">
        
        {/* Top Text Section - Absolutely positioned */}
        <div className="absolute  lg:top-[10rem] md:top-[8rem] sm:top-[6rem] top-[4rem] left-0 right-0 z-10 px-4">
          <TopHeroSection />
        </div>

        {/* Solar System Image */}
        <img 
          src="/products.png" 
          className="h-full w-auto object-contain" 
          alt="Solar System Animation" 
        />

        {/* Bottom Text Section - Absolutely positioned */}
        <div className="absolute bottom-5 left-0 right-0 z-10 px-4">
          <BottomHeroSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
