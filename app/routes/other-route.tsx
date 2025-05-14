import Navbar from '~/components/Navbar';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/home';
import Box from '~/components/ui/Box';
import CustomIcon from '~/components/svgs/CustomIcon';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Covinfinity | Other Route' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions on Other Routes',
    },
  ];
}

export default function OtherRoute() {
  return (
    <MainLayout>
      <Navbar />
      <Section className="page-3-section pt-20">
        <Heading className="pb-3 lg:!text-6xl" blockText="for Improving Skills">
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

        <div className="section-image !pointer-events-none relative -z-10 -mx-6 h-[23rem] overflow-visible md:h-[35rem] lg:-mx-16 lg:h-[55rem]">
          {/* Background image container with overlapping effect */}
          <div
            className="absolute inset-0 h-[calc(100%+22rem)] w-[calc(100%+12rem)] bg-[url('/golf-training-app-dashboard.png')] bg-cover bg-left-top bg-no-repeat"
            style={{
              left: '-5rem',
              top: '-15rem',
              //   clipPath: 'inset(10% 0 15% 0)', // Softens overlap edges
            }}
          ></div>
          <div className="absolute -top-52 -right-24 h-[calc(100%+10rem)] w-80 origin-right skew-x-22 transform bg-gradient-to-r from-background-body/0 via-background-body/80 to-background-body"></div>
        </div>
      </Section>

      {/* Challenge section */}
      <div className="relative -top-14">
        <div className="absolute inset-0 h-50 w-[calc(100%+12rem)] bg-gradient-to-b from-background-body/0 via-background-body/80 via-20% to-background-body"></div>
        <Section>
          <Heading className="pb-3 !text-center lg:!text-6xl" blockText="Stacks and Duration">
            About The Challenge, Location, Tech
          </Heading>{' '}
          <p className="mx-auto my-6 max-w-[46.875rem] text-center font-serif text-xl font-medium">
            The best apps in the AI era aren&apos;t solo experiences — they&apos;re built for
            collaboration. Coventech delivers customizable, pre-built features to power them.
          </p>
          <div className="grid grid-cols-3 grid-rows-2 gap-6">
            <Box className="col-span-2 row-span-2 p-8">
              <div className="flex items-center justify-start px-5">
                <CustomIcon />
                <h3 className="font-serif text-xl font-semibold">Lorem ipsum dolor sit.</h3>
              </div>
            </Box>
            <Box className="col-start-3">2</Box>
            <Box className="col-start-3 row-start-2">3</Box>
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}
