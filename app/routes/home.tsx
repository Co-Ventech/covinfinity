<<<<<<< Updated upstream
import BgGlow from '~/components/BgGlow';
import CaseStudiesGrid from '~/components/CaseStudiesGrid';
=======
import CaseStudiesGrid from '~/components/CaseStudiesGrid';
import ClientTestimonial from '~/components/ClientTestimonial';
>>>>>>> Stashed changes
import CollaborationChatBot from '~/components/CollaborationChatBot';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CompanySliderSection from '~/components/sections/CompanySliderSection';
<<<<<<< Updated upstream
import EcosystemSection from '~/components/sections/EcosystemSection';
=======
import TestEcosystemSection from '~/components/sections/TestEcosystemSection';
>>>>>>> Stashed changes
import ServicesSection from '~/components/ServicesSection';
import TalentAccessComponent from '~/components/TalentAccessComponent';
import TestimonialComponent from '~/components/TestimonialComponent';
import Hero from '../components/sections/Hero';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/home';
<<<<<<< Updated upstream
=======
import BgImage from '~/components/BgImage';
>>>>>>> Stashed changes

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
      <div className="my-3"></div>
      <TestimonialComponent />
<<<<<<< Updated upstream
      <div className="mt-25"></div>
      <EcosystemSection />
=======
      {/* <div className="mt-20 mb-72">
        <ClientTestimonial />
      </div> */}
      {/* <EcosystemSection /> */}
      <div className="mt-25"></div>
      <TestEcosystemSection />
>>>>>>> Stashed changes
      <div className="mb-32">
        <ServicesSection />
      </div>
      <CaseStudiesGrid />
<<<<<<< Updated upstream

      {/* BG GLOW */}
      {Array.from({ length: 3 }).map((_, i) => (
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
      ))}
=======
      <div className="absolute bottom-0 left-1/2 -z-[99] size-[200rem] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#252528] via-[#F2B397]/40 to-[#46455E] opacity-10 blur-[400px]"></div>
>>>>>>> Stashed changes
    </MainLayout>
  );
}
