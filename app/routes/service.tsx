import type { FC } from 'react';
import CaseStudyShowcaseImages from '~/components/CaseStudyShowcaseImages';
import DropdownMenu from '~/components/DropdownMenu';
import LogoGrid from '~/components/LogoGrid';
import Navbar from '~/components/Navbar';
import CardGridSection from '~/components/sections/CardGrid';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/service';
export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Service - Co-Ventech' },
    {
      name: 'description',
      content: 'Explore the service offered by Co-Ventech',
    },
  ];
}

const ImageBox: FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <Box className="!h-[16.25rem] w-full !p-0">
    <img src={src} alt={alt} className="h-full w-full rounded-2xl object-cover" loading="lazy" />
  </Box>
);

export default function Servic() {
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

        {/* Hanzala services Remaining Design here */}

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
    </MainLayout>
  );
}
