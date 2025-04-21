import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import ClientTestimonial from '~/components/ClientTestimonial';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
import TestEcosystemSection from '~/components/sections/TestEcosystemSection';
import ServicesSection from '~/components/ServicesSection';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Co-Ventech - Innovative Technology Solutions' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}

export default function Home() {
  return (
    <MainLayout>
      <div className="showcase relative h-max w-full">
        {/* <SpaceStars /> */}
        <Navbar />
        <Hero />
      </div>
      <div className="mt-14 mb-60">
        <CompanySliderSection />
      </div>
      <div className="mb-20">
        <CollaborationChatBot />
      </div>
      <div className="mb-30">
        <CollaborationSection />
      </div>
      <TalentAccessComponent />
      <div className="my-3"></div>
      <TestimonialComponent />
      <div className="mt-20 mb-72">
        <ClientTestimonial />
      </div>
      {/* <EcosystemSection /> */}
      <TestEcosystemSection />
      <div className="mb-32">
        <ServicesSection />
      </div>
      <CaseStudiesGrid />
      <div className="absolute bottom-0 left-1/2 -z-[99] size-[200rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#252528] via-[#F2B397]/40 to-[#46455E] opacity-5 blur-[400px]"></div>
    </MainLayout>
  );
}
