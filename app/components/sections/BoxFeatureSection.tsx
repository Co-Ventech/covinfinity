import React from 'react';
import Box from '../ui/Box';
import { GradientOverlay } from '../ui/GradientOverlay';

export type Feature = {
  title: string;
  description: string;
  icon: string; // image path or SVG
  image: string; // image path
};

export const BoxFeatureSection: React.FC<{ features: Feature[] }> = ({ features }) => {
  return (
    <section className="flex justify-center items-center w-full my-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.slice(0, 4).map((feature, idx) => (
          <Box
            key={feature.title + idx}
            className="w-[35.3125rem] h-[27.3125rem] flex flex-col justify-between p-6 relative overflow-hidden"
          >
            {/* Gradient Overlays */}
            <GradientOverlay
              direction="b"
              from="background-body/0"
              via="background-body/80 via-40%"
              to="background-body to-90%"
              position="absolute"
              inset="right-0 -bottom-2"
              size="w-full h-[calc(100%-10rem)]"
            />
            <GradientOverlay
              direction="r"
              from="background-body/0"
              via="background-body/80 via-40%"
              to="background-body to-90%"
              position="absolute"
              inset="-right-2 bottom-0"
              size="h-[calc(100%+2rem)] w-[calc(100%-10rem)]"
            />
            <div>
              <div className="flex items-center gap-3 mb-3">
                <img src={feature.icon} alt={feature.title + ' icon'} className="w-8 h-8" />
                <span className="text-white font-semibold text-xl">{feature.title}</span>
              </div>
              <p className="text-[#A3A6AA] text-base font-medium mb-6">
                {feature.description}
              </p>
            </div>
            <div className="w-full h-full">
              <img
                src={feature.image}
                alt={feature.title + ' showcase'}
                className="rounded-xl object-contain w-full h-full"
                loading="lazy"
              />
            </div>
          </Box>
        ))}
      </div>
    </section>
  );
};

export default BoxFeatureSection; 