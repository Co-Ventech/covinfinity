import type { FC } from 'react';
import LogoGrid from '~/components/LogoGrid';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import Box from '~/components/ui/Box';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';

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
              <div className="relative z-10 mx-auto w-[80%] text-center">
                <h1
                  className="mb-6 font-semibold text-[#CCCCCC] xl:text-[4rem] 2xl:text-[4.5rem]"
                  style={{ fontFamily: 'Poppins', letterSpacing: '-1%', lineHeight: '110%' }}
                >
                  Red Stories. Bold Shifts. Welcome to the new era of storytelling
                </h1>
                <p className="mx-auto mb-8 w-[50%] text-gray-300">
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

      <div className="mt-14">
        <CardGridSection />
      </div>

      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img src="/u-icon.png" alt="" />
          </div>

          <div className="mb-12">
            <h1
              className="mb-2 text-[50.45px] font-semibold text-[#CCCCCC]"
              style={{ fontFamily: 'Poppins', letterSpacing: '-1%', lineHeight: '110%' }}
            >
              Award Winning Design – Development
            </h1>
            <h1
              className="mb-2 text-[50.45px] font-semibold text-[#CCCCCC]"
              style={{ fontFamily: 'Poppins', letterSpacing: '-1%', lineHeight: '110%' }}
            >
              Development by Coventech
            </h1>
          </div>

          <div className="mx-auto mb-16">
            <p
              className="mb-6 text-[24px] text-[#CCCCCC]"
              style={{ fontFamily: 'Poppins', lineHeight: '110%' }}
            >
              The best apps in the AI era aren't solo experiences — they're built for collaboration.
              <br />
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
