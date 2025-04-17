import ClientTestimonial from '~/components/ClientTestimonial';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
import EcosystemSection from '~/components/sections/EcosystemSection';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
import CaseStudiesGrid from '~/components/CaseStudiesGrid';

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
      <EcosystemSection />
      <CaseStudiesGrid />
    </MainLayout>
  );
}
