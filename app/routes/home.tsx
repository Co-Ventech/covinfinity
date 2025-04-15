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
      <CompanySliderSection />
      <CollaborationChatBot />
      <TalentAccessComponent />
      <TestimonialComponent />
      <ClientTestimonial />
    </MainLayout>
  );
}
