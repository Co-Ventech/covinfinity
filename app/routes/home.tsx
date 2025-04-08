import React from 'react';
import Navbar from '~/components/Navbar';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
import Hero from '../components/sections/Hero';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Co-Ventech - Innovative Technology Solutions' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}

// Features for the features section
const features = [
  {
    id: 1,
    title: 'Innovative Solutions',
    description: 'We develop cutting-edge technology solutions tailored to your business needs.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Expert Team',
    description: 'Our team of seasoned professionals brings years of experience to every project.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Customer-Centric',
    description: 'We put your needs first, ensuring solutions that align with your business goals.',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
        />
      </svg>
    ),
  },
];

// Testimonials for the testimonials section
const testimonials = [
  {
    id: 1,
    content:
      'Co-Ventech transformed our business with their innovative solutions. Their team was professional, responsive, and delivered beyond our expectations.',
    author: 'Jane Smith',
    role: 'CEO, TechCorp',
  },
  {
    id: 2,
    content:
      'Working with Co-Ventech was a game-changer for our company. Their expertise helped us streamline operations and increase efficiency by 40%.',
    author: 'John Doe',
    role: 'CTO, InnovateCo',
  },
  {
    id: 3,
    content:
      'The team at Co-Ventech truly understands business needs. They provided us with custom solutions that perfectly addressed our challenges.',
    author: 'Sarah Johnson',
    role: 'Operations Director, GrowthInc',
  },
];

export default function Home() {
  return (
    <MainLayout>
      <Navbar />
      <Hero />
    </MainLayout>
  );
}
