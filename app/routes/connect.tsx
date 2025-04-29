import { InlineWidget } from 'react-calendly';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MainLayout } from '../layouts/MainLayout';
import type { Route } from './+types/connect';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'Schedule a Meeting - Covinfinity' },
    {
      name: 'description',
      content:
        'Schedule a personalized meeting with our team to discuss your project needs and explore custom software solutions for your business.',
    },
  ];
}

export default function Connect() {
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
      <div className="min-h-screen bg-[#110E0E] text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="mb-8 bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B] bg-clip-text text-3xl font-bold text-transparent">
            Schedule an Interview with Account Executive
          </h1>

          <div className="mb-4">
            <p className="text-[#A3A3A3]">
              Select a convenient time slot for your interview. Our account executive will help you
              explore how our services can meet your specific needs and requirements.
            </p>
          </div>

          <div className="rounded-lg bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B] p-[1px]">
            <div className="relative rounded-[7px] bg-[#1A1717] p-4 md:p-6">
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
                      <p className="mt-4 text-[#A3A3A3]">Loading scheduler...</p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="calendly"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <InlineWidget
                      url={calendlyUrl}
                      styles={{ height: '700px', width: '100%' }}
                      pageSettings={pageSettings}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
