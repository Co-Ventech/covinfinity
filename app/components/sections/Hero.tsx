import type React from 'react';
import { TopHeroSection, BottomHeroSection } from './HeroSections';

const Hero: React.FC = () => {
  return (
    <section className="hero-section flex flex-col items-center text-center">
      {/* Solar System with Overlaid Text */}
      <div className="hero-content relative flex h-[40rem] w-full items-center justify-center sm:h-[50rem] md:h-[60rem] lg:h-[80rem]">
        {/* Top Text Section - Absolutely positioned */}
        <div className="absolute top-[4rem] right-0 left-0 z-10 px-4 sm:top-[6rem] md:top-[8rem] lg:top-20">
          <TopHeroSection />
        </div>

        {/* Video Background */}
        <video
          autoPlay
          muted
          playsInline
          preload="auto"
          ref={(ref) => {
            if (ref) {
              ref.onended = () => {
                ref.currentTime = 0;
                ref.play();
              };
            }
          }}
          className="pointer-events-none absolute top-0 left-0 z-[-1] h-full w-full object-contain opacity-70"
        >
          <source src="/hero-globe.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-auto object-contain"
        >
          <source src="/hero-globe.mp4" type="video/mp4" />
        </video> */}

        {/* Bottom Text Section - Absolutely positioned */}
        <div className="absolute right-0 bottom-5 left-0 z-10 px-4">
          <BottomHeroSection />
        </div>
      </div>
    </section>
  );
};

export default Hero;
