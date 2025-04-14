import React from 'react';
import { Link } from 'react-router';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
import { ROUTES } from '../constants/routes';
import Navbar from '~/components/Navbar';
import CompanySliderRight from '~/components/CompanySliderRight';
import CompanySliderLeft from '~/components/CompanySliderLeft';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import Hero from '../components/sections/Hero';
import CollaborationChatBot from '~/components/CollaborationChatBot';
import TestimonialComponent from '~/components/TestimonialComponent';
import SpaceHero from '~/components/SpaceHero';

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
        <SpaceHero />
        <Navbar />
        <Hero />
      </div>
      <CompanySliderRight />
      <CompanySliderLeft />
      <CollaborationChatBot />
      <TalentAccessComponent />
      <TestimonialComponent />
    </MainLayout>
  );
}
