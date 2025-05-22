import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
import EcosystemSection from '~/components/sections/EcosystemSection';
import ServicesSection from '~/components/ServicesSection';
import { Starfield } from '~/components/StarField';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
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

export default function Home() {
  return (
    <MainLayout>
      <div className="showcase relative h-max w-full">
        {/* <SpaceStars /> */}
        <Starfield count={250} />
        <Navbar />
        <Hero />
      </div>
      <div className="mt-14">
        <CompanySliderSection />
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
      <div className="mt-6"></div>
      <EcosystemSection />
      <div className="mb-32">
        <ServicesSection />
      </div>
      <CaseStudiesGrid />
    </MainLayout>
  );
}
