import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { InlineWidget } from 'react-calendly';
import BgImage from '~/components/BgImage';
import Navbar from '~/components/Navbar';
import Box from '~/components/ui/Box';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/book-a-demo';

export function meta({ }: Route.MetaArgs) {
  return [
    { title: 'Schedule a Meeting - Covinfinity' },
    {
      name: 'description',
      content:
        'Schedule a personalized meeting with our team to discuss your project needs and explore custom software solutions for your business.',
    },
  ];
}

export default function BookADemo() {
  const [isLoading, setIsLoading] = useState(true);

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  useEffect(() => {
    // Simulating loading state for the Calendly widget
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Style settings to match the site theme
  const pageSettings = {
    backgroundColor: '1A1717',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: 'FF7C91', // From the gradient color
    textColor: 'FFFFFF',
  };

  return (
    <MainLayout>
      <div className="relative">
        <Navbar />
        <Section className="text-white" divClass="relative pt-32 xl:pt-44">
          <BgImage
            src="section-lines/talent-section-lines-3rd.png"
            className="xl:top-0 left-1/2 -z-10 h-[58rem] w-[calc(100%+3.5rem)] -translate-x-1/2 !bg-contain"
          />

          {/* Header Section */}
          <div className="mb-14 text-center">
            <Heading
              className="mb-4 pb-1"
              blockText="with our Account Executive"
            >
              Schedule a Meeting
            </Heading>
            <p className="mx-auto max-w-[45rem] text-[#665F5F] text-base font-medium">
              Select a convenient time slot for your meeting. Our account executive will help you
              explore how our services can meet your specific needs and requirements.
            </p>
          </div>

          {/* Calendar Widget Section */}
          <Box className="relative overflow-hidden">
            <GradientOverlay
              direction="r"
              from="background-body/50"
              to="background-body/0"
              className="pointer-events-none absolute inset-0 z-10"
            />
            <AnimatePresence mode="wait">
              {isLoading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex h-[600px] items-center justify-center"
                >
                  <div className="flex flex-col items-center">
                    <div className="relative h-16 w-16">
                      <div className="absolute inset-0 animate-spin rounded-full border-t-2 border-b-2 border-[#FF7C91]"></div>
                      <div className="animate-spin-slow absolute inset-0 rounded-full border-r-2 border-l-2 border-[#BB97F2]"></div>
                    </div>
                    <p className="mt-4 text-[#665F5F]">Loading scheduler...</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="calendly"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-0"
                >
                  <InlineWidget
                    url={calendlyUrl}
                    styles={{ height: '700px', width: '100%' }}
                    pageSettings={pageSettings}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </Section>
      </div>
    </MainLayout>
  );
}
