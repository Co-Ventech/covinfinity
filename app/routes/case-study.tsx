import { useParams } from 'react-router';
import Navbar from '~/components/Navbar';
import CustomIcon from '~/components/svgs/CustomIcon';
import Box from '~/components/ui/Box';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { Slider } from '~/components/ui/Slider';
import { MainLayout } from '~/layouts/MainLayout';
import type { Route } from './+types/home';

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

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Covinfinity | Case Study' },
    {
      name: 'description',
      content: 'Empowering businesses with cutting-edge technology solutions on Other Routes',
    },
  ];
}

interface BoxTopContent {
  icon: () => void;
  heading: string;
  text: string;
}

function BoxTopContent<BoxTopContent>({
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

        {/* <div className="section-image !pointer-events-none relative -z-10 -mx-6 h-[23rem] overflow-visible md:h-[35rem] lg:-mx-16 lg:h-[55rem]">
          <div
            className="absolute inset-0 h-[calc(100%+22rem)] w-[calc(100%+12rem)] bg-[url('/golf-training-app-dashboard.png')] bg-cover bg-left-top bg-no-repeat"
            style={{
              left: '-5rem',
              top: '-15rem',
            }}
          ></div>
          <div className="absolute -top-52 -right-24 h-[calc(100%+10rem)] w-80 origin-right skew-x-22 transform bg-gradient-to-r from-background-body/0 via-background-body/80 to-background-body"></div>
        </div> */}
      </Section>
      {/* Showcase IMAGE */}
      <div className="showcase-image-container !pointer-events-none relative h-[55rem]">
        <img
          src="/golf-training-app-dashboard.png"
          alt="Overflowing Image"
          className="pointer-events-none absolute -top-[8.5rem] -right-16"
        />
        <div className="absolute right-0 -bottom-[13.3rem] h-[35.375rem] w-full bg-gradient-to-t from-background-body from-30% via-background-body/80 via-40% to-background-body/0 to-100%"></div>
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
        <div className="grid grid-cols-3 grid-rows-2 gap-6">
          <Box className="col-span-2 row-span-2 overflow-hidden p-8">
            <BoxTopContent />
            <div className="image-wrapper relative max-h-[34rem]">
              <img
                src="/dashboard-the-second.png"
                alt="Dashboard the second"
                className="cursor-poin pointer-events-none object-cover"
              />
              <div className="absolute -bottom-50 -left-12 h-[373px] w-[calc(100%+15rem)] bg-background-body blur-3xl">
                {' '}
              </div>
            </div>
          </Box>
          <Box className="relative col-start-3 overflow-hidden">
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
            {/* Right overlay shadow */}
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-[7.625rem] bg-gradient-to-l from-background-body to-background-body/0"></div>
          </Box>

          <Box className="relative z-10 col-start-3 row-start-2 max-h-[23.4375rem] overflow-hidden">
            <BoxTopContent
              heading="Something About Client"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus modi laudantium, sunt a facilis eos!"
            />
            <div className="flex h-[calc(100%-7rem)] w-full pl-5">
              <p className="no-color mt-auto text-sm font-medium text-[#878D93]">
                Location: <span className="text-white">California, United States</span>
              </p>
            </div>
            {/* Right overlay shadow */}
            <img
              src="/case-study-globe.png"
              alt="Client location on actual Globe"
              className="absolute -right-[5.1875rem] -bottom-[11.5rem] -z-[2]"
            />
            <div className="pointer-events-none absolute right-0 bottom-0 h-full w-[7.625rem] bg-gradient-to-l from-background-body to-background-body/0"></div>
          </Box>
        </div>
      </Section>

      {/* Challenge section */}
      {/* <div className="relative -top-14">
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
            <Box className="col-span-2 row-span-2 overflow-hidden p-8">
              <BoxTopContent />
              <div className="image-wrapper relative max-h-[34rem]">
                <img
                  src="/dashboard-the-second.png"
                  alt="Dashboard the second"
                  className="cursor-poin pointer-events-none object-cover"
                />
                <div className="absolute -bottom-50 -left-12 h-[373px] w-[calc(100%+15rem)] bg-background-body blur-3xl">
                  {' '}
                </div>
              </div>
            </Box>
            <Box className="col-start-3">
              <BoxTopContent />
            </Box>
            <Box className="col-start-3 row-start-2">ko</Box>
          </div>
        </Section>
      </div> */}
    </MainLayout>
  );
}
