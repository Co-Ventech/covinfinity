import React from 'react';
import Polygon1 from '../svgs/Polygon1';
import Polygon2 from '../svgs/Polygon2';
import GradientBorderButton from '../ui/GradientBorderButton';
import GradientText from '../ui/GradientText';

const Hero: React.FC = () => {
  return (
    // test styles
    <section className="hero-section mt-22 min-h-[50rem] text-center">
      {/* <section className="hero-section text-center"> */}
      {/* Top Section - Current Content */}
      <div className="hero-top">
        <div className="triangle-wtapper relative mx-auto max-w-max">
          <Polygon1 className="absolute top-3.5 left-1/2 z-[-1] h-[25rem] !w-[calc(100%+5rem)] -translate-x-1/2" />
          <h1 className="mb-3.5 text-5xl font-semibold">
            Coventech Products
            <span className="block">
              <GradientText>and Services</GradientText>
            </span>
          </h1>
          <p className="mb-6">
            Some lorem ipsum text goes here <span className="block"> says no one </span>
          </p>
          <GradientBorderButton>
            <span className="block bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
              Launch Covinfinity
            </span>
          </GradientBorderButton>
        </div>
      </div>

      {/* Middle Section - Solar System Animation */}
      <div className="hero-middle">{/* Solar System Animation will go here */}</div>

      {/* test */}
      <div className="my-72"></div>

      {/* Bottom Section - To be implemented */}
      <div className="hero-bottom">
        {/* Bottom content will go here */}

        <div className="triangle-wtapper relative mx-auto max-w-max">
          <Polygon2 className="absolute bottom-3.5 left-1/2 z-[-1] h-[23rem] !w-[calc(100%+5rem)] -translate-x-1/2" />
          <h1 className="mb-3.5 text-5xl font-semibold">
            Coventech Products
            <span className="block">
              <GradientText>and Services</GradientText>
            </span>
          </h1>
          <p className="mb-6">
            Some lorem ipsum text goes here <span className="block"> says no one </span>
          </p>
          <GradientBorderButton>
            <span className="block bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
              Launch Covinfinity
            </span>
          </GradientBorderButton>
        </div>
      </div>
    </section>
  );
};

export default Hero;
