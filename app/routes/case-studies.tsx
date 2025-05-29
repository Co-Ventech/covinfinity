import type { FC } from 'react';
import CaseStudyShowcaseImages from '~/components/CaseStudyShowcaseImages';
import DropdownMenu from '~/components/DropdownMenu';
import LogoGrid from '~/components/LogoGrid';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/case-studies';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Case Studies - Covinfinity | Custom Software Development Success Stories' },
    {
      name: 'description',
      content: 'Discover how Covinfinity has helped businesses transform through innovative software solutions. Read our detailed case studies and success stories.',
    },
  ];
}

const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] w-full !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
  </Box>
);

export default function CaseStudies() {
  return (
    <MainLayout>
      <div className="case-studies relative">
        <CaseStudyShowcaseImages className="pointer-events-none absolute inset-0" />
        <Navbar />
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
        <DropdownMenu />
        <div className="mt-8">
          <CardGridSection />
        </div>
        <div className="mx-auto mt-12 flex items-center justify-center p-4 !px-0 md:mt-24 md:p-6">
          <div className="mx-auto text-center">
            <div className="mb-6 flex justify-center md:mb-8">
              <img src="/u-icon.png" alt="" className="w-16 md:w-auto" />
            </div>

            <div className="mx-auto mb-6 max-w-full px-4 md:mb-8 xl:max-w-[89rem]">
              <h1
                className="bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl lg:text-[3.125rem]"
                style={{ letterSpacing: '-1%', lineHeight: '110%' }}
              >
                Award Winning Design – Development <br />
                Development by Coventech
              </h1>
            </div>

            <div className="mx-auto mb-8 max-w-full px-4 md:mb-10 md:max-w-2xl lg:max-w-4xl">
              <p
                className="mb-4 text-base text-[#EBF5FF]/56 sm:text-lg md:mb-6 md:text-[1.25rem]"
                style={{ fontFamily: 'Poppins', lineHeight: '110%' }}
              >
                The best apps in the AI era aren't solo experiences — they're built for
                collaboration.
                <br className="hidden sm:block" />
                Coventech delivers customizable, pre-built features to power them.
              </p>
            </div>

            {/* Clutch Reviews Section */}
            <div className="flex w-full items-center justify-between gap-4">
              <ImageBox src="/blue-hunt.png" alt="blue hunt" />
              <ImageBox src="/red-hunt.png" alt="red hunt" />
            </div>
          </div>
        </div>
        <LogoGrid />
      </Section>
    </MainLayout>
  );
}
