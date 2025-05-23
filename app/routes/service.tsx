import type { FC } from 'react';
import { CaseStudySection } from '~/components/CaseStudySection';
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
      <CaseStudySection
        imageUrl="/bykea-mobile.png"
        imagePosition="left"
        globePosition="right"
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7' blockText='background'>
          <span className='text-bykea'>
            bykea
          </span>
        </Heading>
        <p className='font-medium text-3xl max-w-[39.125rem] leading-[1.48]'>
          As one of the top ride-hailing and logistics platforms in Pakistan, Bykea deals with vast amounts of user data and financial transactions every day. With their rapid growth, ensuring the security of their digital infrastructure became a critical priority. The company needed to safeguard their platform to maintain trust, prevent breaches, and comply with stringent data protection regulations.
        </p>
      </CaseStudySection>

      {/* Two */}
      <CaseStudySection
        imageUrl="/example-one.png"
        imagePosition="right"
        globePosition="left"
        className="mt-20 !ml-auto"
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7'>
          The
          <span className='ml-2.5 text-bykea'>
            problem
          </span>
        </Heading>
        <p> <span>(</span>Enhancing Cybersecurity<span className='text-bykea'>)</span></p>
        <p className='font-medium text-3xl max-w-[39.125rem] leading-[1.48]'>
          A leading e-commerce platform faced challenges with their legacy payment processing system. They needed a modern, secure, and scalable solution that could handle growing transaction volumes while providing a seamless customer experience. Our team stepped in to revolutionize their payment infrastructure.
        </p>
      </CaseStudySection>

      {/* Three */}
      <CaseStudySection
        imageUrl="/example-two.png"
        imagePosition="left"
        globePosition="right"
        className="mt-20"
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7' blockText='background'>
          <span className='text-secondary'>
            example two
          </span>
        </Heading>
        <p className='font-medium text-3xl max-w-[39.125rem] leading-[1.48]'>
          A healthcare startup required a HIPAA-compliant telemedicine platform to connect patients with healthcare providers. They needed robust video conferencing, secure data handling, and integrated electronic health records. Our development team delivered a comprehensive solution that transformed their digital healthcare delivery.
        </p>
      </CaseStudySection>

      {/* Four */}
      <CaseStudySection
        imageUrl="/example-three.png"
        imagePosition="right"
        globePosition="left"
        className="mt-20 !ml-auto"
      >
        <Heading className='uppercase font-semibold text-6xl mb-12 mt-7' blockText='background'>
          <span className='text-accent'>
            example three
          </span>
        </Heading>
        <p className='font-medium text-3xl max-w-[39.125rem] leading-[1.48]'>
          An established financial institution wanted to modernize their customer service with AI-powered chatbots. They needed a solution that could handle complex queries, integrate with their existing systems, and provide 24/7 support. Our team developed an intelligent chatbot that revolutionized their customer interaction.
        </p>
      </CaseStudySection>

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
