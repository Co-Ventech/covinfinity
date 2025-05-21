import { useParams } from 'react-router';
import type { Route } from './+types/case-study';

import Navbar from '~/components/Navbar';
import CustomIcon from '~/components/svgs/CustomIcon';
import Box from '~/components/ui/Box';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { Slider } from '~/components/ui/Slider';
import { MainLayout } from '~/layouts/MainLayout';
import { Accordion } from '~/components/Accordiant';

const techStack = [
  {
    name: 'Swift',
    image: '/swift.png',
  },
  {
    name: 'laravel',
    image: '/laravel.png',
  },
  {
    name: 'tech',
    image: '/logo-tech.png',
  },
  {
    name: 'tech O',
    image: '/logo-tech-1.png',
  },
];

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Covinfinity | Case Study' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions on Other Routes',
    },
  ];
}

interface BoxTopContent {
  icon?: React.ReactNode;
  heading?: string;
  text?: string;
}

function BoxTopContent({
  icon = <CustomIcon />,
  heading = 'Lorem ipsum dolor sit.',
  text = 'Frontend Developer specialized in many tech and worked with xyz company graduated from xyc with xyz experience',
}) {
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
  const { case_study_id } = useParams();
  //console.log(case_study_id)

  return (
    <MainLayout>
      <Navbar />
      <Section className="page-3-section pt-20">
        <Heading className="pb-3 lg:!text-7xl" blockText="for Improving Skills">
          AR-Powered Golf Training App
        </Heading>
        <p className="my-6 max-w-[46.875rem] font-serif text-xl font-medium">
          {' '}
          The best apps in the AI era aren’t solo experiences — they’re built for collaboration.
          Coventech delivers customizable, pre-built features to power them.{' '}
        </p>
        <button className="flex cursor-pointer rounded bg-gradient-to-r from-[#1F2224] to-[#16181A] to-70% px-5 py-2.5 font-medium transition hover:opacity-90">
          <span className="bg-gradient-to-r from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
            lorem ipsum.
          </span>
        </button>
      </Section>
      {/* Showcase IMAGE */}
      <div className="showcase-image-container !pointer-events-none relative h-[55rem]">
        <img
          src="/golf-training-app-dashboard.png"
          alt="Overflowing Image"
          className="pointer-events-none absolute -top-[8.5rem] -right-16"
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
          inset="-top-40 right-[6.875rem]"
          size="h-[calc(100%+10rem)] w-80"
          className="origin-right skew-x-22 transform"
        />
      </div>
      {/* Following Section */}
      <Section>
        <Heading className="pb-3 !text-center lg:!text-6xl" blockText="Stacks and Duration">
          About The Challenge, Location, Tech
        </Heading>{' '}
        <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
          The best apps in the AI era aren&apos;t solo experiences — they&apos;re built for
          collaboration. Coventech delivers customizable, pre-built features to power them.
        </p>
        <div className="grid grid-cols-1 grid-rows-[1fr_0.5fr_0.5fr] gap-6 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-[1.5fr_1fr]">
          <Box className="relative overflow-hidden p-8 md:col-span-1 md:row-span-2">
            <BoxTopContent />
            <div className="image-wrapper relative max-h-[34rem]">
              <img
                src="/dashboard-normal.png"
                alt="Dashboard the second"
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
              heading="Tech Stack"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero at alias repellendus,
              aliquam eligendi cum."
            />
            <div className="pl-5">
              <Slider className="mt-8 mb-14 divide-x-8">
                {techStack.map((tech) => (
                  <Slider.Item key={tech.name} className="mx-4 flex items-center justify-center">
                    <img src={tech.image} alt={tech.name} className="size-20" />
                  </Slider.Item>
                ))}
              </Slider>
              <p className="no-color text-sm font-medium text-[#878D93]">
                Duration: <span className="text-white">3 months</span>
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
              heading="Something About Client"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi laudantium, sunt a facilis eos!"
            />
            <p className="no-color absolute bottom-4 left-8 mt-auto text-sm font-medium text-[#878D93]">
              Location: <span className="text-white">California, United States</span>
            </p>

            <img
              src="/case-study-globe.png"
              alt="Client location on actual Globe"
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

      {/* Goals Section */}
      {/* <Section className="mt-40">
        <Heading className="mb-6 pb-2 lg:text-7xl" blockText="& Objectives">
          Product Goals
        </Heading>
        <p className="max-w-3xl font-serif text-xl font-medium">
          The best apps in the AI era aren't solo experiences — they're built for collaboration.
          Coventech delivers customizable, pre-built features to power them.
        </p>
      </Section> */}
      <Section className='mt-20 h-screen' divClass='size-full flex items-center justify-center'>
        <div className="grid grid-cols-[0.8fr_1fr] !w-full">
          <div className="left ml-14">
            <Heading className='pb-1 mb-10 font-semibold text-2xl' blockText='Solution & Objectives'>More Screens Showing</Heading>

            <div className="left-navigation space-y-8">
              <div className="left-nav-item max-w-lg space-y-1.5 relative pl-4">
                <div className="h-6 w-[0.3125rem] rounded-4xl bg-accordion-active absolute inset-0"></div>
                <h5 className='text-white font-semibold text-lg font-serif'>Lorem ipsum dolor sit.</h5>
                <p className='font-medium'>Thanks, Sarah. I appreciate your responsiveness and support. Looking forward to seeing these changes in action!</p>
              </div>
              <div className="left-nav-item max-w-lg space-y-1.5 relative pl-4">
                <div className="h-6 w-[0.3125rem] rounded-4xl bg-accordion absolute inset-0"></div>
                <h5 className='text-white font-semibold text-lg font-serif'>Lorem ipsum dolor sit.</h5>

              </div>
              <div className="left-nav-item max-w-lg space-y-1.5 relative pl-4">
                <div className="h-6 w-[0.3125rem] rounded-4xl bg-accordion absolute inset-0"></div>
                <h5 className='text-white font-semibold text-lg font-serif'>Lorem ipsum dolor sit.</h5>

              </div>
            </div>

          </div>
          <div className="right min-h-[28rem] max-h-[28rem] relative">
            <div className="img-wrapper relative -top-12 w-full ">
              <img src="/dashboard-normal.png" alt="case-studies1" />
              <GradientOverlay
                direction="b"
                from="background-body/0"
                via='background-body/80 via-40%'
                to="background-body to-90%"
                position="absolute"
                inset="right-0 bottom-0"
                size='w-full h-[calc(100%-10rem)]'
              />
              <GradientOverlay
                direction="r"
                from="background-body/0"
                via='background-body/80 via-40%'
                to="background-body to-90%"
                position="absolute"
                inset="right-0 bottom-0"
                size='h-full w-[calc(100%-10rem)]'
              />
            </div>
          </div>
        </div>
      </Section>

    </MainLayout>
  );
}
