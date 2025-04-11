import CompanySliderLeft from '~/components/CompanySliderLeft';
import CompanySliderRight from '~/components/CompanySliderRight';
import Navbar from '~/components/Navbar';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';

import CollaborationChatBot from '~/components/CollaborationChatBot';
import CollaborationSection from '~/components/sections/CollaborationSection';
import Hero from '../components/sections/Hero';
import TestimonialComponent from '~/components/TestimonialComponent';
import TalentAccessComponent from '~/components/TalentAccessComponent';

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
      <Navbar />
      <Hero />
      <CompanySliderRight />
      <CompanySliderLeft />
      <CollaborationChatBot />
      <CollaborationSection />
      <TalentAccessComponent />
      <TestimonialComponent />
    </MainLayout>
  );
}
