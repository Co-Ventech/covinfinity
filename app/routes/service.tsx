import type { FC } from 'react';
import { ServiceSection } from '~/components/ServiceSection';
import CaseStudyShowcaseImages from '~/components/CaseStudyShowcaseImages';
import Navbar from '~/components/Navbar';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/service';
export function meta({ }: Route.MetaArgs) {
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
      </Section>

      {/* One */}
      <ServiceSection
        imageUrl="/bykea-mobile.png"
        imagePosition="left"
        boxClassName='!mr-auto'
        globeClassName='-right-[4rem] -bottom-[17rem]'
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7' blockText='background'>
          <span className='text-bykea'>
            bykea
          </span>
        </Heading>
        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          As one of the top ride-hailing and logistics platforms in Pakistan, Bykea deals with vast amounts of user data and financial transactions every day. With their rapid growth, ensuring the security of their digital infrastructure became a critical priority. The company needed to safeguard their platform to maintain trust, prevent breaches, and comply with stringent data protection regulations.
        </p>
      </ServiceSection>

      {/* Two */}
      <ServiceSection
        imageUrl="/bykea-rides.png"
        imagePosition="right"
        className="mt-20 !ml-auto"
        boxClassName="!px-4 xl:!px-12 !ml-auto"
        globeClassName="-bottom-[25rem] left-1/2 -translate-x-1/2"
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7'>
          The
          <span className='ml-2.5 text-bykea'>
            problem
          </span>
        </Heading>
        <p className='no-color font-extrabold text-base mb-8'> <span className='text-bykea'>(</span>Enhancing Cybersecurity<span className='text-bykea'>)</span></p>
        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Legacy payment processing system faced scalability and security challenges.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Growing transaction volumes demanded a modern, secure solution.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Customer experience needed seamless integration with security measures.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Infrastructure required complete modernization for future scaling.
          </span>
          <span className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Payment system transformation was critical for business growth.
          </span>
        </p>
      </ServiceSection>

      {/* Three */}
      <ServiceSection
        imageUrl="/bykea-services.png"
        imagePosition="left"
        className="mt-20"
        boxClassName="!px-4 xl:!px-20 !mr-auto"
        globeClassName='bottom-[8rem] left-[6rem] rotate-[70deg]'
      >
        <div className="flex flex-col gap-12 rotate 2xl:relative 2xl:-left-8">
          <div className="flex items-start gap-6">
            <span className="flex flex-shrink-0 size-12 items-center justify-center rounded-full bg-bykea text-xl font-medium text-white">1</span>
            <div className="">
              <Heading as="h3" className='upper'>Initial Consultation with <span className='text-bykea'>Bykea's</span> Team</Heading>
              <p className="text-[#B5BDC4] text-base font-medium mt-4">We met with Bykea's leadership to discuss their key concerns and security requirements. The focus was on fortifying their digital infrastructure and protecting sensitive data.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <span className="flex flex-shrink-0 size-12 items-center justify-center rounded-full bg-bykea text-xl font-medium text-white">2</span>
            <div className="">
              <Heading as="h3" className='uppercase'>Vulnerability Assessment & <span className='text-bykea'>Penetration Testing</span></Heading>
              <p className="text-[#B5BDC4] text-base font-medium mt-4">Our team conducted a thorough penetration test and vulnerability assessment, focusing on their core infrastructure and network systems. Using industry-leading tools, we pinpointed potential security gaps.</p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <span className="flex flex-shrink-0 size-12 items-center justify-center rounded-full bg-bykea text-xl font-medium text-white">3</span>
            <div className="">
              <Heading as="h3" className='upper'>Delivered <span className='text-bykea'>Actionable </span> Insights</Heading>
              <p className="text-[#B5BDC4] text-base font-medium mt-4">Within 48 hours, Co-Ventech provided a comprehensive report, outlining the vulnerabilities found and offering clear recommendations to mitigate each risk. We worked closely with Bykea's technical team to implement these changes quickly and effectively.</p>
            </div>
          </div>
        </div>
      </ServiceSection>

      {/* Four */}
      <ServiceSection
        imageUrl="/bykea-ride-types.png"
        imagePosition="right"
        className="mt-20 !ml-auto"
        boxClassName="!px-4 xl:!px-20 !ml-auto"
        globeClassName='-bottom[21rem] -left-[7rem] rotate-[70deg]'
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7'>
          The
          <span className='ml-2.5 text-bykea'>
            Journey
          </span>
        </Heading>

        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Bykea recognized the need for more than basic protection—a proactive and thorough cybersecurity strategy.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            They entrusted Co-Ventech to deliver this advanced security solution.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            The engagement lasted only a few days but yielded significant, lasting results.
          </span>
          <span className="flex items-start gap-4 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            After an initial assessment and detailed reporting, Co-Ventech collaborated closely with Bykea's team to implement robust security measures.
          </span>
          <span className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Efforts included uncovering hidden security threats and fortifying digital infrastructure.
          </span>
          <span className="flex items-start gap-4">
            <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
            Co-Ventech helped Bykea navigate the evolving cybersecurity landscape and emerge stronger than ever.
          </span>
        </p>
      </ServiceSection>

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
