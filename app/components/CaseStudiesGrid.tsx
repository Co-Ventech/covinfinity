'use client';

import React, { useState } from 'react';
import GradientBorderButton from './ui/GradientBorderButton';

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
      src: 'https://images.unsplash.com/photo-1478264635837-66efba4b74ba?q=80&w=2059&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Canyon view',
    },
    slotCanyon: {
      src: 'https://images.unsplash.com/photo-1558624634-1720391434ca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Slot canyon',
    },
    plane: {
      src: 'https://plus.unsplash.com/premium_photo-1664361480604-e7932dfff91c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Abandoned plane',
    },
    grayscale: {
      src: 'https://images.unsplash.com/photo-1583587446563-7b9d93c74ae5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Grayscale',
    },
    landscape: {
      src: 'https://images.unsplash.com/photo-1520799829090-f89dd6df5c71?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Landscape Photography',
    },
    brownAndWhiteRockFormation: {
      src: 'https://images.unsplash.com/photo-1603585514260-3500b8a9a6a9?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Brown and white rock formation',
    },
    greenTreeDuringDaytime: {
      src: 'https://images.unsplash.com/photo-1566868570094-276146cf3592?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Green Tree During Daytime',
    },
    theLightIsShiningOnTheRockFormations: {
      src: 'https://images.unsplash.com/photo-1491590197864-41e7697a0c87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'the-light-is-shining-on-the-rock-formations',
    },
    cafe: {
      src: 'https://images.unsplash.com/photo-1600375544722-e147b216c23c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Cafe',
    },
    greenAndYellowLeavesInCloseUpPhotography: {
      src: 'https://images.unsplash.com/photo-1628964297457-29555e670359?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Green And Yellow Leaves In Close Up Photography',
    },
    blackSamsung: {
      src: 'https://images.unsplash.com/photo-1584824308820-99af1d0f9239?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
        <CaseStudyItem image={images.landscape} className="col-span-1 row-span-2" />
        <CaseStudyItem image={images.grayscale} className="col-span-1 row-span-2" />

        {/* Center column */}
        <CaseStudyItem
          image={images.brownAndWhiteRockFormation}
          className="col-span-1 row-span-3"
        />
        <CaseStudyItem image={images.greenTreeDuringDaytime} className="col-span-1 row-span-4" />

        {/* Fourth column */}
        <CaseStudyItem image={images.landscape} className="col-span-1 row-span-2" />
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
          <GradientBorderButton>Launch Covinfinity</GradientBorderButton>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 z-[0] size-full bg-gradient-to-b from-[#171416] via-[#151315]/32 to-[#131113]/70"></div>
    </div>
  );
};

export default CaseStudiesGrid;
