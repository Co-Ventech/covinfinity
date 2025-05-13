import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
import TestEcosystemSection from '~/components/sections/TestEcosystemSection';
import ServicesSection from '~/components/ServicesSection';
import { Starfield } from '~/components/StarField';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
import CardGridSection from '~/components/sections/CardGrid';

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
        <div className="absolute inset-0 z-0 flex justify-between  " >
          <div className="relative w-1/4 h-[20rem]">
            {/* Left background image */}
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <img src="/case-studies1.png" alt="Cost" className="" />
            
          </div>
          <div className="relative ml-6 w-1/2 h-[20rem]">
            {/* Center background image */}
             <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <img src="/case-studies2.png" alt="Cost" className="" />
          </div>
          <div className="relative ml-6 w-1/4 h-[20rem]">
            {/* Right background image */}
            <div className="absolute inset-0 bg-black/20 rounded-lg"></div>
            <img src="/case-studies3.png" alt="Cost" className="" />
          </div>
        </div>

        <Navbar />
        
        {/* Hero Section */}
        <div className="relative z-10 pt-32 pb-20 ">
          <div className="w-full">
            <div className="relative">
              {/* Text content with overlay images */}
              <div className="relative z-10 text-center w-[80%] mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Red Stories. Bold Shifts. Welcome to the new era of storytelling
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                  The best apps in the AI era aren't solo experiences—they're built for collaboration.
                  Coventech delivers customizable, pre-built features to power them.
                </p>
               
              </div>
              
              {/* Images overlaying the text */}
              <div className="absolute -top-20 left-0 w-1/2 h-[22rem] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                <img src="/case-studies-hero1.png" alt="Cost" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -top-20 right-0 w-1/2 h-[22rem] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-black/30"></div>
                 <img src="/case-studies-hero2.png" alt="Cost" className="w-full h-full object-cover" />
              </div>
            </div>
          
          </div>
        </div>
      </div>
      <div className="mt-14">
        <CardGridSection/>
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
