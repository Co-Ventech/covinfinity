import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
import SpaceStars from '~/components/SpaceStars';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
import ClientTestimonial from '~/components/ClientTestimonial';
import EcosystemSection from '~/components/sections/EcosystemSection';
import ServicesSection from '~/components/ServicesSection';
import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import CollaborationSection from '~/components/sections/CollaborationSection';


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
        <Navbar />
        <Hero />
      </div>
      <div className="mt-14 mb-60">
        <CompanySliderSection />
      </div>
      <div className="mb-20 ">
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
      <div className="mb-32">
        <ServicesSection />
      </div>
      <CaseStudiesGrid />
    </MainLayout>
  );
}
