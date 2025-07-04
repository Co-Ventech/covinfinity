import { useCallback } from 'react';
import { useParams } from 'react-router';
import Navbar from '~/components/Navbar';
import CollaborationSection from '~/components/sections/CollaborationSection';
import CustomIcon from '~/components/svgs/CustomIcon';
import Box from '~/components/ui/Box';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import { ScrollAccordion } from '~/components/ui/ScrollAccordion';
import Section from '~/components/ui/Section';
import { Slider } from '~/components/ui/Slider';
import { CASE_STUDIES } from '~/data/caseStudiesPagesData';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/test-case-study';
import { ServiceSection } from '~/components/ServiceSection';
import OutcomesSection from '~/components/sections/OutcomesSection';

const CASE_STUDY_IMAGES: Record<string, string[]> = {
  bykea: ['/bykea-img-1.png', '/bykea-rides.png', '/bykea-im3.png', '/bykea-img4.png'],
  bluefin: ['/blufin-img1.png', '/bluefin-img2.png', '/blufin-img3.png', '/bluefin-img4.png'],
  rawcaster: ['/rawcaster-img1.png', '/rawcaster-img2.png', '/rawcaster-img3.png', '/rawcaster-img4.png'],
};
const CASE_STUDY_COLORS: Record<string, string> = {
  bykea: 'bykea', // green
  bluefin: 'bluefin', // blue (define .text-bluefin in your CSS if not present)
  rawcaster: 'rawcaster', // pink (define .text-rawcaster in your CSS if not present)
};

export function meta({ params }: Route.MetaArgs) {
  const caseStudy = CASE_STUDIES.find((study) => study.slug === params.slug);
  return [
    { title: `Covinfinity | ${caseStudy?.title || 'Case Study'}` },
    {
      name: 'description',
      content: caseStudy?.description || 'Empowering businesses with cutting-edge technology solutions',
    },
  ];
}

interface BoxTopContent {
  icon?: React.ReactNode;
  heading: string;
  text: string;
}

function BoxTopContent({
  icon = <CustomIcon />,
  heading,
  text
}: BoxTopContent) {
  return (
    <div className="wrap max-w-[42rem] space-y-3 px-5">
      <div className="flex items-center justify-start gap-3.5">
        {icon}
        <h3 className="font-serif text-xl font-semibold">{heading}</h3>
      </div>
      <p className="">{text}</p>
    </div>
  );
}

export default function CaseStudy() {
  const { slug } = useParams();
  const caseStudyData = CASE_STUDIES.find((caseStudy) => caseStudy.slug === slug);

  const onLaunchProject = useCallback(() => {
    if (caseStudyData?.link) {
      window.location.href = caseStudyData.link;
    }
  }, [caseStudyData]);

  if (!caseStudyData) {
    return <div>Case study not found</div>;
  }

  const images = CASE_STUDY_IMAGES[caseStudyData.slug] || [];
  const colorClass = CASE_STUDY_COLORS[caseStudyData.slug] || 'bykea';

  // Service card data for outcomes (order: Software Development, QA & Test Automation, UI/UX Designing, DevOps, Cybersecurity)
  const serviceOutcomes = [
    {
      title: 'Software Development',
      description: 'From deployments to task, work with your team every step of the way.',
      icon: '/software-service2.png',
    },
    {
      title: 'QA & Test Automation',
      description: 'From deployments to task, work with your team every step of the way.',
      icon: '/qa2nd.png',
    },
    {
      title: 'UI/UX Designing',
      description: 'From deployments to task, work with your team every step of the way.',
      icon: '/ui-ux2nd.png',
    },
    {
      title: 'DevOps',
      description: 'From deployments to task, work with your team every step of the way.',
      icon: '/devops2nd.png',
    },
    {
      title: 'Cybersecurity',
      description: 'From deployments to task, work with your team every step of the way.',
      icon: '/cyber2nd.png',
    },
  ];

  return (
    <MainLayout>
      <Navbar />
      <Section className="page-3-section pt-20 mx-12">
        <Heading className="pb-3 lg:!text-7xl max-w-[70rem]" blockText="">
          {caseStudyData.title}
        </Heading>
        <p className="my-6 max-w-[46.875rem] font-serif text-xl font-medium">
          {caseStudyData.description}
        </p>
        <button
          onClick={onLaunchProject}
          className="flex cursor-pointer rounded bg-gradient-to-r from-[#1F2224] to-[#16181A] to-70% px-5 py-2.5 font-medium transition hover:opacity-90"
        >
          <span className="bg-gradient-to-r from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
            Launch Project
          </span>
        </button>
      </Section>
      {/* Showcase IMAGE */}
      <div className="showcase-image-container mt-20 ml-[5rem]  !pointer-events-none relative h-[30rem] md:h-[35rem] lg:h-[43rem] xl:h-[55rem] ">
        <img
          src={caseStudyData.showcaseImage ? caseStudyData.showcaseImage : ''}
          alt={caseStudyData.title ? caseStudyData.title + ' Overview' : 'Overview'}
          className="pointer-events-none absolute -top-[3rem] md:-top-20 md:-left-8 lg:-top-[7rem] lg:left-0 xl:-top-36 2xl:-top-[8rem] 2xl:-right-8 2xl:left-[unset]"
        />
        <GradientOverlay
          direction="t"
          from="background-body from-30%"
          via="background-body/80 via-40%"
          to="background-body/0 to-100%"
          position="absolute"
          inset="right-0 -bottom-[13.3rem]"
          size="h-[35.375rem] w-full"
        />
        <GradientOverlay
          direction="r"
          from="background-body/0"
          via="background-body/80"
          to="background-body"
          position="absolute"
          inset="-top-40 right-[1rem] md:right-[-4rem]"
          size="h-[calc(100%+10rem)] w-96"
          className="origin-right skew-x-22 transform"
        />
      </div>
       {/* One */}
       <Section className=" pb-0 w-[300] sm:max-w-[600px] md:max-w-[700px] lg:max-w-[1208px] max-h-[158px] mx-auto mb-16">
        <Heading className="text-center text-2xl md:text-5xl lg:!text-7xl font-semibold">
          {(() => {
            let baseText = '';
            let coloredWord = '';
            if (caseStudyData.slug === 'bykea') {
              baseText = 'Penetration Testing & Vulnerability Assessment for ';
              coloredWord = 'BYKEA';
            } else if (caseStudyData.slug === 'bluefin') {
              baseText = 'Application Testing & Cybersecurity Implementation for ';
              coloredWord = 'BLUEFIN';
            } else if (caseStudyData.slug === 'rawcaster') {
              baseText = 'Penetration Testing & Vulnerability Assessment for ';
              coloredWord = 'RAWCASTER';
            }
            return <><span>{baseText}</span><span className={`text-${colorClass}`}>{coloredWord}</span></>;
          })()}
        </Heading>
      </Section>
       <ServiceSection
        imageUrl={images[0] || ''}
        imagePosition="left"
        boxClassName='!mr-auto'
        globeClassName='-right-[4rem] -bottom-[17rem]'
      >
        <Heading className={`uppercase font-semibold text-6xl mb-12 mt-7`} blockText='background'>
          <span className={`text-${colorClass}`}>
            {caseStudyData.slug ? caseStudyData.slug.toUpperCase() : ''}
          </span>
        </Heading>
        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          {caseStudyData.background || ''}
        </p>
      </ServiceSection>

         {/* Two */}
         <ServiceSection
        imageUrl={images[1] || ''}
        imagePosition="right"
        className="mt-20 !ml-auto"
        boxClassName="!px-4 xl:!px-12 !ml-auto"
        globeClassName="-bottom-[25rem] left-1/2 -translate-x-1/2"
      >
        <Heading className={`uppercase font-semibold text-6xl mb-12 mt-7`}>
          The
          <span className={`ml-2.5 text-${colorClass}`}>problem</span>
        </Heading>
        <p className='no-color font-extrabold text-base mb-8'>
          <span className={`text-${colorClass}`}>
            ({caseStudyData.title ? caseStudyData.title.split(' for ')[0] : ''})
          </span>
        </p>
        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          {caseStudyData.problem && caseStudyData.problem.map((item, idx) => (
            <span key={idx} className="flex items-start gap-4 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
              {item}
            </span>
          ))}
        </p>
      </ServiceSection>

      {/* Three */}
      <ServiceSection
        imageUrl={images[2] || ''}
        imagePosition="left"
        className="mt-20"
        boxClassName="!px-4 xl:!px-20 !mr-auto"
        globeClassName='bottom-[8rem] left-[6rem] rotate-[70deg]'
      >
        <div className="flex flex-col gap-12 rotate 2xl:relative 2xl:-left-8">
          {[0, 1, 2].map((idx) => {
            const impl = caseStudyData.implementation && caseStudyData.implementation[idx];
            const heading = impl && typeof impl === 'object' && impl.heading ? impl.heading : `Step ${idx + 1}`;
            const subtext = impl && typeof impl === 'object' && impl.text ? impl.text : (typeof impl === 'string' ? impl : 'No details provided.');
            return (
              <div key={idx} className="flex items-start gap-6">
                <span className={`flex flex-shrink-0 size-12 items-center justify-center rounded-full bg-${colorClass} text-xl font-medium text-white`}>{idx + 1}</span>
                <div className="">
                  <Heading as="h3" className={`upper text-${colorClass}`}>{heading}</Heading>
                  <p className="text-[#B5BDC4] text-base font-medium mt-4">{subtext}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ServiceSection>

        {/* Four */}
        <ServiceSection
        imageUrl={images[3] || ''}
        imagePosition="right"
        className="mt-20 !ml-auto"
        boxClassName="!px-4 xl:!px-20 !ml-auto"
        globeClassName='-bottom[21rem] -left-[7rem] rotate-[70deg]'
      >
        <Heading className={`uppercase font-semibold text-6xl mb-12 mt-7`}>
          The
          <span className={`ml-2.5 text-${colorClass}`}>Journey</span>
        </Heading>
        <p className='font-medium text-base max-w-[39.125rem] leading-[1.48]'>
          {caseStudyData.journey && caseStudyData.journey.map((item, idx) => (
            <span key={idx} className="flex items-start gap-4 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#B5BDC4] mt-2 flex-shrink-0"></span>
              {item}
            </span>
          ))}
        </p>
        <div className="mt-8">
          <Heading as="h4" className="text-xl font-bold mb-2">Impact</Heading>
          <ul className="list-disc pl-6 text-base text-[#B5BDC4]">
            {caseStudyData.impact && caseStudyData.impact.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      </ServiceSection>

      {/* Dynamic Case Study Details Section */}
      {/* <Section>
        <Heading className="pb-3 mt-32
         !text-center lg:!text-6xl" blockText="Stacks and Duration">
          About The Challenge, Location, Tech
        </Heading>
        <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
          {caseStudyData.description}
        </p>
        <div className="grid grid-cols-1 grid-rows-[1fr_0.5fr_0.5fr] gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1.5fr_1fr]">
          <Box className="relative overflow-hidden p-8 md:col-span-1 md:row-span-2">
            <BoxTopContent
              heading={`About ${caseStudyData.title.split('-')[0]}`}
              text={caseStudyData.background || ''}
            />
            <div className="image-wrapper relative max-h-[34rem]">
              <img
                src={caseStudyData.showcaseImage ? caseStudyData.showcaseImage : ''}
                alt={caseStudyData.title ? caseStudyData.title + ' Overview' : 'Overview'}
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
              text={`${caseStudyData.title.split('-')[0]} leverages cutting-edge technology to deliver innovative solutions and achieve remarkable results${caseStudyData.location ? ` in ${caseStudyData.location}` : ''}.`}
            />
            <div className="pl-5">
              <Slider className="mt-8 mb-14 divide-x-8">
                {caseStudyData.techStack && caseStudyData.techStack.map((tech) => (
                  <Slider.Item key={tech.name} className="mx-4 flex items-center justify-center">
                    <img src={tech.image || ''} alt={String(tech.name || '')} className="size-20" />
                  </Slider.Item>
                ))}
              </Slider>
              <p className="no-color text-sm font-medium text-[#878D93]">
                {caseStudyData.duration && (
                  <>
                    Duration: <span className="text-white">{caseStudyData.duration}</span>
                  </>
                )}
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
              text={caseStudyData.impact && caseStudyData.impact.join(' | ') || ''}
            />
            {caseStudyData.location && (
              <p className="no-color absolute bottom-4 left-8 mt-auto text-sm font-medium text-[#878D93]">
                Location: <span className="text-white">{caseStudyData.location}</span>
              </p>
            )}
            <img
              src="/case-study-globe.png"
              alt={
                (caseStudyData.title ? caseStudyData.title : '') +
                "'s presence" +
                (caseStudyData.location ? ` in ${caseStudyData.location ? caseStudyData.location : ''}` : '')
              }
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
      </Section> */}

      {/* Outcomes Section (after main details, before CollaborationSection) */}
      <div className='mx-12'>
      <OutcomesSection
        heading="Outcomes"
        subheading="Delivered measurable results and business impact"
        outcomes={caseStudyData.outcomes || []}
      />
      </div>

     
    </MainLayout>
  );
}