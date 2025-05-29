import React from 'react';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/about';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'About - Covinfinity | Custom Software Development Company' },
    {
      name: 'description',
      content: 'Learn about Covinfinity, our mission, values, and how we empower businesses with cutting-edge technology solutions.',
    },
  ];
}

export default function About() {
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white">
            About Co-Ventech
          </h1>

          <div className="prose dark:prose-invert max-w-none">
            <p className="mb-6 text-lg">
              Co-Ventech is a forward-thinking technology company dedicated to providing innovative
              solutions for businesses of all sizes.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Mission</h2>
            <p>
              Our mission is to empower businesses with cutting-edge technology solutions that drive
              growth, efficiency, and success. We believe in collaborative development, transparent
              practices, and sustainable innovation.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Team</h2>
            <p>
              Our diverse team brings together experts from various fields of technology, business,
              and design. With our combined experience and passion for excellence, we deliver
              solutions that exceed expectations.
            </p>

            <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Values</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Innovation:</strong> We constantly seek new ways to solve complex problems.
              </li>
              <li>
                <strong>Collaboration:</strong> We believe in the power of teamwork and partnership.
              </li>
              <li>
                <strong>Integrity:</strong> We operate with honesty, transparency, and ethical
                practices.
              </li>
              <li>
                <strong>Excellence:</strong> We strive for the highest quality in everything we do.
              </li>
              <li>
                <strong>Sustainability:</strong> We consider the long-term impact of our solutions.
              </li>
            </ul>

            <h2 className="mt-8 mb-4 text-2xl font-semibold">Our History</h2>
            <p>
              Founded in 2023, Co-Ventech has quickly established itself as a leader in the
              technology industry. From our humble beginnings, we've grown into a company that
              serves clients across the globe.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
