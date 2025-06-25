import type { FC } from 'react';
import { ServiceSection } from '~/components/ServiceSection';
import CaseStudyShowcaseImages from '~/components/CaseStudyShowcaseImages';
import Navbar from '~/components/Navbar';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/service';
import { ScrollAccordion } from '~/components/ui/ScrollAccordion';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import { Slider } from '~/components/ui/Slider';
import { useParams } from 'react-router';
import { SERVICES } from '~/data/serviceData';
import CompanySliderSection from '~/components/sections/CompanySliderSection';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Services - Covinfinity | Custom Software Development Company' },
    {
      name: 'description',
      content: 'Explore our comprehensive range of software development services including custom development, QA & testing, UI/UX design, DevOps, and cybersecurity solutions.',
    },
  ];
}

const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] w-full !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
  </Box>
);

function BoxTopContent({ heading, text }: { heading: string; text: string }) {
  return (
    <div className="wrap max-w-[42rem] space-y-3 px-5">
      <div className="flex items-center justify-start gap-3.5">
        <span className="font-serif text-xl font-semibold">{heading}</span>
      </div>
      <p>{text}</p>
    </div>
  );
}

export default function Servic() {
  const { slug } = useParams();
  const serviceData = SERVICES.find((service) => service.slug === slug);
  if (!serviceData) {
    return <div>Service not found</div>;
  }
  return (
    <MainLayout>
      <div className="case-studies relative">
        <Navbar />
        <CaseStudyShowcaseImages className="pointer-events-none absolute inset-0" />
      </div>
      <Section className="second-section mt-[27rem]">
        <div className="text-center">
          <Heading
            className="!from-[#FFFFFF] !to-[#CCCCCC] pb-6 font-serif text-[2.5rem] font-semibold text-transparent sm:text-5xl md:text-[3.5rem] xl:text-[4.2rem]"
            blockText="to the new era of storytelling"
          >
            Real Stories. Bold Shifts. Welcome
          </Heading>
          <p
            className="mx-auto mb-4 max-w-[45rem] font-serif text-base font-medium sm:text-lg md:mb-6 md:text-[1.2rem]"
            style={{ lineHeight: '110%' }}
          >
            The best apps in the AI era aren't solo experiences—they're built for collaboration.
            Coventech delivers customizable, pre-built features to power them.
          </p>
        </div>
      </Section>

    

    {/* Stacks and Duration Section (dynamic by slug) */}
    <Section>
      <div className="grid grid-cols-1 grid-rows-[1fr_0.5fr_0.5fr] gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1.5fr_1fr]">
        <Box className="relative overflow-hidden p-8 md:col-span-1 md:row-span-2">
          <BoxTopContent
            heading={`About ${serviceData.name}`}
            text={serviceData.subheading}
          />
          <div className="image-wrapper relative max-h-[34rem]">
            <img
              src={serviceData.showcaseImage}
              alt={`${serviceData.name} Overview`}
              className="cursor-poin max--w-[calc(100%+23rem)] pointer-events-none relative top-8 left-4 min-w-[calc(100%+23rem)] object-cover"
            />
          </div>
          <GradientOverlay
            position="absolute"
            inset="-bottom-50 -left-12"
            size="h-[373px] w-[calc(100%+15rem)]"
            className="!bg-background-body blur-3xl"
          />
        </Box>
        <Box className="relative max-h-[23.4375rem] overflow-hidden md:col-start-2">
          <BoxTopContent
            heading="Tech Stack & Achievements"
            text={`${serviceData.name} leverages cutting-edge technology to deliver innovative solutions and achieve remarkable results.`}
          />
          <div className="pl-5">
            <Slider className="mt-8 mb-14 divide-x-8">
              {[
                { name: 'React', image: '/logo-tech.png' },
                { name: 'Node.js', image: '/logo-tech-1.png' },
                { name: 'MongoDB', image: '/logo-tech.png' },
                { name: 'AWS', image: '/logo-tech-1.png' }
              ].map((tech) => (
                <Slider.Item key={tech.name} className="mx-4 flex items-center justify-center">
                  <img src={tech.image} alt={tech.name} className="size-20" />
                </Slider.Item>
              ))}
            </Slider>
            <p className="no-color text-sm font-medium text-[#878D93]">
              Duration: <span className="text-white">2+ years</span>
            </p>
          </div>
          <GradientOverlay
            direction="l"
            from="background-body"
            to="background-body/0"
            position="absolute"
            inset="right-0 bottom-0"
            size="h-full w-[7.625rem]"
            className="pointer-events-none"
          />
        </Box>

        <Box className="relative z-10 max-h-[23.4375rem] overflow-hidden md:col-start-2 md:row-start-2">
          <BoxTopContent
            heading="Market Impact"
            text="Revolutionizing recruitment with AI-powered talent matching and streamlined hiring processes."
          />
          <p className="no-color absolute bottom-4 left-8 mt-auto text-sm font-medium text-[#878D93]">
            Location: <span className="text-white">Global</span>
          </p>

          <img
            src="/case-study-globe.png"
            alt={`${serviceData.name}'s global presence`}
            className="absolute -right-[5.1875rem] -bottom-[11.5rem] -z-[2] xl:-bottom-72"
          />
          <GradientOverlay
            direction="l"
            from="background-body"
            to="background-body/0"
            position="absolute"
            inset="right-0 bottom-0"
            size="h-full w-[7.625rem]"
            className="pointer-events-none"
          />
        </Box>
      </div>
    </Section>

    {/* ScrollAccordion with case study solutions */}
    <ScrollAccordion
        items={serviceData.solutions}
        title="Solutions & Impact"
        blockText="Key Achievements"
        role="service"
      />

<div className="mt-5">
        <CompanySliderSection role="service" />
      </div>
    <Section>
      <div className="mx-auto mt-12 flex items-center justify-center p-4 !px-0 md:mt-24 md:p-6">
        <div className="mx-auto text-center">
          {/* Clutch Reviews Section */}
          <div className="flex w-full items-center justify-between gap-4">
            <ImageBox src="/blue-hunt.png" alt="blue hunt" />
            <ImageBox src="/red-hunt.png" alt="red hunt" />
          </div>
        </div>
      </div>
      {/* <LogoGrid /> */}
    </Section>
  </MainLayout >
);
}
