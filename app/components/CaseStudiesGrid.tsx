'use client';

import React, { useState } from 'react';
import Button from './ui/Button';

// Define types for the image data
interface ImageData {
  src: string;
  alt: string;
  className?: string;
  filter?: string;
}

// Define props for the case study item component
interface CaseStudyItemProps {
  image: ImageData;
  className?: string;
}

// Reusable component for each grid item
const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ image, className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        className={`h-full w-full object-cover ${image.filter || ''}`}
      />
    </div>
  );
};

// Main component
const CaseStudiesGrid: React.FC = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Define all images used in the grid
  const images: Record<string, ImageData> = {
    canyon: {
      src: '/rawcaster.png',
      alt: 'Canyon view',
    },
    slotCanyon: {
      src: '/case-studies-grid-02.png',
      alt: 'Slot canyon',
    },
    plane: {
      src: '/humanity-with-ai.png',
      alt: 'Abandoned plane',
    },
    grayscale: {
      src: '/imperva.png',
      alt: 'Grayscale',
    },
    landscape: {
      src: '/case-studies-grid-03.png',
      alt: 'Landscape Photography',
    },
    landscape2: {
      src: '/case-studies-grid-08.png',
      alt: 'Landscape Photography',
    },
    brownAndWhiteRockFormation: {
      src: '/ride.png',
      alt: 'Brown and white rock formation',
    },
    greenTreeDuringDaytime: {
      src: '/diwander.png',
      alt: 'Green Tree During Daytime',
    },
    theLightIsShiningOnTheRockFormations: {
      src: '/case-studies-grid-09.png',
      alt: 'the-light-is-shining-on-the-rock-formations',
    },
    cafe: {
      src: '/case-studies-grid-10.png',
      alt: 'Cafe',
    },
    greenAndYellowLeavesInCloseUpPhotography: {
      src: '/blackcard.png',
      alt: 'Green And Yellow Leaves In Close Up Photography',
    },
    blackSamsung: {
      src: '/case-studies-grid-12.png',
      alt: 'Black Samsung',
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Grid layout */}
      <div className="gap-0.1875rem absolute inset-0 -z-[1] grid grid-cols-[0.223fr_0.126fr_0.262fr_0.262fr_0.125fr] grid-rows-6 gap-3">
        {/* Left column */}
        <CaseStudyItem image={images.canyon} className="col-span-1 row-span-4" />
        <CaseStudyItem image={images.slotCanyon} className="col-span-1 row-span-2" />

        {/* Second column */}
        <CaseStudyItem
          image={images.landscape}
          className="col-span-1 row-span-2 h-[calc(100%-2rem)]"
        />
        <CaseStudyItem image={images.grayscale} className="col-span-1 row-span-2" />

        {/* Center column */}
        <CaseStudyItem
          image={images.brownAndWhiteRockFormation}
          className="col-span-1 row-span-3"
        />
        <CaseStudyItem image={images.greenTreeDuringDaytime} className="col-span-1 row-span-4" />

        {/* Fourth column */}
        <CaseStudyItem
          image={images.landscape2}
          className="relative col-span-1 row-span-2 -mt-8 h-[calc(100%+2rem)]"
        />
        <CaseStudyItem
          image={images.theLightIsShiningOnTheRockFormations}
          className="col-span-1 row-span-2"
        />
        <CaseStudyItem image={images.cafe} className="col-span-1 row-span-3" />

        {/* Right column */}
        <CaseStudyItem image={images.plane} className="col-span-1 row-span-3" />
        <CaseStudyItem
          image={images.greenAndYellowLeavesInCloseUpPhotography}
          className="col-span-1 row-span-3"
        />
        <CaseStudyItem image={images.blackSamsung} className="col-span-1 row-span-3" />
      </div>

      {/* Dark Overlay with Gradient */}
      <div className="absolute inset-0 z-[1] flex items-center justify-center">
        <div className="max-w-xl px-4 text-center">
          {/* Small Label */}
          <p className="mb-3 text-base font-medium tracking-widest text-[#504444]">Case Studies</p>

          {/* Bold Heading */}
          <h1 className="mb-8 text-5xl font-semibold tracking-tight text-white">
            Made by Coventech
          </h1>

          {/* Minimal Button */}
          {/* <GradientBorderButton>Launch Covinfinity</GradientBorderButton> */}
          <Button>Case Studies</Button>
        </div>
      </div>

      {/* overlay */}
      <div className="pointer-events-none absolute inset-0 z-[0] size-full bg-gradient-to-b from-background-body via-background-body/32 to-background-body"></div>
    </div>
  );
};

export default CaseStudiesGrid;
