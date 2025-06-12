
import React from 'react';
import BgImage from '~/components/BgImage';
import Navbar from '~/components/Navbar';
import Button from '~/components/ui/Button';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { ROUTES } from '~/constants/routes';
import { MainLayout } from '~/layouts/MainLayout';


export function meta() {
  return [
    { title: '404 Not Found - Covinfinity' },
    {
      name: 'description',
      content: 'The page you are looking for could not be found.',
    },
  ];
}

const NotFoundRoute: React.FC = () => {
  return (
    <MainLayout>
      <div className="relative">
        <Navbar />
        <Section className="text-white" divClass="relative pt-32 xl:pt-44">
          <BgImage
            src="section-lines/talent-section-lines-3rd.png"
            className="xl:top-0 left-1/2 -z-10 h-[58rem] w-[calc(100%+3.5rem)] -translate-x-1/2 !bg-contain"
          />

          <div className="flex flex-col items-center justify-center text-center">
            {/* 404 Number */}
            <div className="relative mb-8">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-bold text-[#1A1717]/10">
                404
              </span>
              <Heading className="pb-2 relative text-6xl md:text-7xl" blockText="Page Not Found">
                Oops!
              </Heading>
            </div>

            {/* Description */}
            <p className="mb-12 max-w-[45rem] text-[#665F5F] text-lg font-medium">
              The page you are looking for might have been removed, had its name changed, or is
              temporarily unavailable.
            </p>

            {/* Navigation Links */}
            <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">

              <Button to={ROUTES.HOME}>
                Back to Home
              </Button>
              {/* <Link
                to={ROUTES.CONTACT}
                className="rounded-lg border border-[#665F5F] px-8 py-3 font-medium text-[#665F5F] transition-all hover:border-white hover:text-white"
              >
                Contact Support
              </Link> */}
            </div>

            {/* Additional Links */}
            {/* <div className="mt-16 flex flex-wrap justify-center gap-6 text-[#665F5F]">
              <Link to={ROUTES.SERVICES} className="hover:text-white">
                Our Services
              </Link>
              <Link to={ROUTES.CASE_STUDIES} className="hover:text-white">
                Case Studies
              </Link>
              <Link to={ROUTES.BOOK_A_DEMO} className="hover:text-white">
                Book a Demo
              </Link>
            </div> */}
          </div>
        </Section>
      </div>
    </MainLayout>
  );
}

export default NotFoundRoute;



