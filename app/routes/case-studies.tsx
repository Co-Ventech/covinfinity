import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import CollaborationSection from '~/components/sections/CollaborationSection';
import TestEcosystemSection from '~/components/sections/EcosystemSection';
import ServicesSection from '~/components/ServicesSection';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
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

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="showcase relative h-max w-full space-y-[10rem]">
        {/* Background images behind navbar */}
        <div className="absolute inset-0 z-0 flex justify-between">
          <div className="relative h-[20rem] w-1/4">
            {/* Left background image */}
            <div className="absolute inset-0 rounded-lg bg-black/20"></div>
            <img src="/case-studies1.png" alt="Cost" className="" />
          </div>
          <div className="relative ml-6 h-[20rem] w-1/2">
            {/* Center background image */}
            <div className="absolute inset-0 rounded-lg bg-black/20"></div>
            <img src="/case-studies2.png" alt="Cost" className="" />
          </div>
          <div className="relative ml-6 h-[20rem] w-1/4">
            {/* Right background image */}
            <div className="absolute inset-0 rounded-lg bg-black/20"></div>
            <img src="/case-studies3.png" alt="Cost" className="" />
          </div>
        </div>

        <Navbar />

        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20">
          <div className="w-full">
            <div className="relative">
              {/* Text content with overlay images */}
              <div className="relative z-10 mx-auto w-[80%] text-center">
                <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl">
                  Red Stories. Bold Shifts. Welcome to the new era of storytelling
                </h1>
                <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-300">
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
      <div className="mb-20">
        <CollaborationChatBot />
      </div>
      <div className="">
        <CollaborationSection />
      </div>
      <TalentAccessComponent />
      {/* comment testimoniasl */}
      <div className="sm:my-3"></div>
      <TestimonialComponent />
      <div className="mt-25"></div>
      <TestEcosystemSection />
      <div className="mb-32">
        <ServicesSection />
      </div>
      <CaseStudiesGrid />

      {/* BG GLOW */}
      {/* {Array.from({ length: 3 }).map((_, i) => (
        <BgGlow
          key={i}
          className={
            i === 0
              ? '!top-40 !left-[unset] !translate-x-[unset]'
              : i === 1
                ? '!top-1/2 -translate-y-1/2'
                : '!bottom-0'
          }
        />
      ))} */}
    </MainLayout>
  );
}
