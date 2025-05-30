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

  return (
    <MainLayout>
      <Navbar />
      <Section className="page-3-section pt-20">
        <Heading className="pb-3 lg:!text-7xl" blockText="Case Study">
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
      <div className="showcase-image-container !pointer-events-none relative h-[30rem] md:h-[35rem] lg:h-[43rem] xl:h-[55rem]">
        <img
          src={caseStudyData.showcaseImage}
          alt={`${caseStudyData.title} Dashboard`}
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
          inset="-top-40 right-[5rem] md:right-[6.875rem]"
          size="h-[calc(100%+10rem)] w-96"
          className="origin-right skew-x-22 transform"
        />
      </div>
      {/* Following Section */}
      <Section>
        <Heading className="pb-3 !text-center lg:!text-6xl" blockText="Stacks and Duration">
          About The Challenge, Location, Tech
        </Heading>
        <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
          {caseStudyData.description}
        </p>
        <div className="grid grid-cols-1 grid-rows-[1fr_0.5fr_0.5fr] gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1.5fr_1fr]">
          <Box className="relative overflow-hidden p-8 md:col-span-1 md:row-span-2">
            <BoxTopContent
              heading={`About ${caseStudyData.title.split('-')[0]}`}
              text={caseStudyData.description}
            />
            <div className="image-wrapper relative max-h-[34rem]">
              <img
                src={caseStudyData.showcaseImage}
                alt={`${caseStudyData.title} Overview`}
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
              text={`${caseStudyData.title.split('-')[0]} leverages cutting-edge technology to deliver innovative solutions and achieve remarkable results in ${caseStudyData.location}.`}
            />
            <div className="pl-5">
              <Slider className="mt-8 mb-14 divide-x-8">
                {caseStudyData.techStack.map((tech) => (
                  <Slider.Item key={tech.name} className="mx-4 flex items-center justify-center">
                    <img src={tech.image} alt={tech.name} className="size-20" />
                  </Slider.Item>
                ))}
              </Slider>
              <p className="no-color text-sm font-medium text-[#878D93]">
                Duration: <span className="text-white">{caseStudyData.duration}</span>
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
              text={`${caseStudyData.solutions[0].description}`}
            />
            <p className="no-color absolute bottom-4 left-8 mt-auto text-sm font-medium text-[#878D93]">
              Location: <span className="text-white">{caseStudyData.location}</span>
            </p>

            <img
              src="/case-study-globe.png"
              alt={`${caseStudyData.title}'s presence in ${caseStudyData.location}`}
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
        items={caseStudyData.solutions}
        title="Solutions & Impact"
        blockText="Key Achievements"
      />

      <CollaborationSection />
    </MainLayout>
  );
}