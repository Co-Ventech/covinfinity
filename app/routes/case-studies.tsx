import type { FC } from 'react';
import DropdownMenu from '~/components/DropdownMenu';
import LogoGrid from '~/components/LogoGrid';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import Box from '~/components/ui/Box';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/case-studies';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Covinfinity | Custom Software Development Company in USA' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}

const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] w-full !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
  </Box>
);

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="showcase relative h-max w-full space-y-[10rem]">
        {/* Background images behind navbar */}
        <div className="absolute inset-0 z-0 flex justify-between">
          {/* Left image with gradient overlay */}
          <div className="relative h-[20rem] w-1/4 overflow-hidden rounded-lg">
            <img
              src="/case-studies1.png"
              alt="Case study 1"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, #0F1011 0%, #0F1011 20%, rgba(15, 16, 17, 0.8) 50%, rgba(15, 16, 17, 0) 100%)',
              }}
            ></div>
          </div>

          {/* Center image with gradient overlay */}
          <div className="relative ml-6 h-[20rem] w-1/2 overflow-hidden rounded-lg">
            <img
              src="/case-studies2.png"
              alt="Case study 2"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, #0F1011 0%, #0F1011 20%, rgba(15, 16, 17, 0.8) 50%, rgba(15, 16, 17, 0) 100%)',
              }}
            ></div>
          </div>

          {/* Right image with gradient overlay */}
          <div className="relative ml-6 h-[20rem] w-1/4 overflow-hidden rounded-lg">
            <img
              src="/case-studies3.png"
              alt="Case study 3"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to bottom, #0F1011 0%, #0F1011 20%, rgba(15, 16, 17, 0.8) 50%, rgba(15, 16, 17, 0) 100%)',
              }}
            ></div>
          </div>
        </div>
        <Navbar />

        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="w-full">
            <div className="relative">
              {/* Text content with overlay images */}
              <div className="relative z-10 mx-auto max-w-[80%] text-center xl:max-w-[75rem]">
                <h1
                  className="mb-6 bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text text-[2.5rem] font-semibold text-transparent sm:text-5xl md:text-[3.5rem] xl:text-[4.2rem]"
                  style={{
                    fontFamily: 'Poppins',
                    letterSpacing: '-1%',
                    lineHeight: '110%',
                    textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                  }}
                >
                  Real Stories. Bold Shifts. Welcome to the new era of storytelling
                </h1>
                <p
                  className="mx-auto mb-4 max-w-[70%] text-base text-[#EBF5FF]/56 sm:text-lg md:mb-6 md:text-[1.2rem]"
                  style={{ fontFamily: 'Poppins', lineHeight: '110%' }}
                >
                  The best apps in the AI era aren't solo experiences—they're built for
                  collaboration. Coventech delivers customizable, pre-built features to power them.
                </p>
              </div>

              {/* Images overlaying the text */}
              <div className="absolute -top-20 left-0 h-[22rem] w-1/2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/30"></div>
                <img
                  src="/case-studies-hero1.png"
                  alt="Cost"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -top-20 right-0 h-[22rem] w-1/2 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-black/30"></div>
                <img
                  src="/case-studies-hero2.png"
                  alt="Cost"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <DropdownMenu />
      <div className="mt-8">
        <CardGridSection />
      </div>

      <div className="mx-auto mt-12 flex items-center justify-center p-4 md:mt-24 md:p-6">
        <div className="mx-auto text-center">
          <div className="mb-6 flex justify-center md:mb-8">
            <img src="/u-icon.png" alt="" className="w-16 md:w-auto" />
          </div>

          <div className="mx-auto mb-6 max-w-full px-4 md:mb-8 xl:max-w-[89rem]">
            <h1
              className="bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl lg:text-[3.125rem]"
              style={{ letterSpacing: '-1%', lineHeight: '110%' }}
            >
              Award Winning Design – Development <br />
              Development by Coventech
            </h1>
          </div>

          <div className="mx-auto mb-8 max-w-full px-4 md:mb-10 md:max-w-2xl lg:max-w-4xl">
            <p
              className="mb-4 text-base text-[#EBF5FF]/56 sm:text-lg md:mb-6 md:text-[1.25rem]"
              style={{ fontFamily: 'Poppins', lineHeight: '110%' }}
            >
              The best apps in the AI era aren't solo experiences — they're built for collaboration.
              <br className="hidden sm:block" />
              Coventech delivers customizable, pre-built features to power them.
            </p>
          </div>

          {/* Clutch Reviews Section */}
          <div className="flex w-full items-center justify-between gap-4 px-10">
            <ImageBox src="/blue-hunt.png" alt="blue hunt" />
            <ImageBox src="/red-hunt.png" alt="red hunt" />
          </div>
        </div>
      </div>
      <LogoGrid />
    </MainLayout>
  );
}
