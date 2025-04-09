import React from 'react';
import NetworkCircleIcon from '../svgs/NetworkCircleIcon';
import Polygon1 from '../svgs/Polygon1';
import Polygon2 from '../svgs/Polygon2';
import GradientBorderButton from '../ui/GradientBorderButton';
import GradientText from '../ui/GradientText';
import OutlineBox from '../ui/OutlineBox';

const Hero: React.FC = () => {
  return (
    <section className="hero-section mt-22 min-h-[50rem] text-center">
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

      {/* Space between sections */}
      <div className="my-52"></div>

      {/* Bottom Section - Logo and Testimonial */}
      <div className="hero-bottom">
        <div className="relative mx-auto max-w-max">
          <Polygon2 className="absolute bottom-0 left-1/2 z-[-1] h-[24rem] !w-[calc(100%+8rem)] -translate-x-1/2" />

          {/* Logo */}
          <img
            src="/hero-logo.png"
            alt="Coventech Logo"
            // className="mx-auto mb-14 h-[108px] w-[558px]"
            className="mx-auto mb-14 h-16"
          />

          {/* Content for bottom section */}
          <div className="mx-auto w-[38.125rem] max-w-full px-4">
            {/* Top Quote Box */}
            <OutlineBox className="h-[calc(max-content+1.25rem)] rounded-b-none border-b-0 text-center text-white">
              <h3 className="mx-auto mt-2 mb-6 max-w-[31rem] text-xl leading-relaxed font-semibold">
                “ Coventech an ecosystem where businesses meet top talent & digital solutions and
                services “
              </h3>
            </OutlineBox>

            {/* Bottom Author Box */}
            <OutlineBox className="-mt-5 flex items-center justify-between">
              <div className="flex items-center">
                <img src="james.png" alt="James W Clark" className="mr-4 h-12 w-12 rounded-full" />
                <div className="text-left">
                  <p className="text-base font-semibold text-white">James W Clark</p>
                  <p className="text-sm text-gray-500">Chief Executive Officer</p>
                </div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full">
                <NetworkCircleIcon />
              </div>
            </OutlineBox>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
