// components/BookDemoPopup.tsx
import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '~/components/ui/Box';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Section from '~/components/ui/Section';

interface BookDemoPopupProps {
  onClose: () => void;
}

const BookDemoPopup: React.FC<BookDemoPopupProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'calendar'>('form');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    services: ''
  });

  // Disable body scroll when popup is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('calendar');
  };

  const calendlyUrl = import.meta.env.VITE_CALENDLY_URL;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const pageSettings = {
    backgroundColor: '#1A1717',
    hideEventTypeDetails: false,
    hideLandingPageDetails: false,
    primaryColor: '#FF7C91',
    textColor: '#FFFFFF',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="relative w-full z-50 max-w-3xl rounded-2xl bg-gradient-to-br from-[#232526] to-[#414345] p-0 shadow-2xl border border-[#FF7C91]/30 animate-fade-in">
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-50 text-2xl text-gray-300 hover:text-white focus:outline-none"
        >
          ✕
        </button>

        {step === 'form' ? (
          <div className="flex flex-col items-center px-10 py-12">
            {/* Decorative header */}
            <div className="flex flex-col items-center mb-8">
              {/* Example logo/icon, replace src as needed */}
              <div className="w-16 h-16 mb-2 flex items-center justify-center rounded-full bg-gradient-to-tr from-[#FF7C91] to-[#BB97F2] shadow-lg">
                <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#fff" fillOpacity=".1"/><path d="M10 16h12M16 10v12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h2 className="text-3xl font-extrabold text-white mb-1 text-center">Tell us about your company</h2>
              <p className="text-[#FF7C91] font-medium">Step 1 of 2</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-2xl space-y-6">
              <div className="relative">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Company's Name"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2A2525] border border-gray-700 text-white focus:border-[#FF7C91] focus:ring-2 focus:ring-[#FF7C91] transition placeholder-gray-400 text-lg shadow-sm"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7C91]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M3 17V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 17v-4h2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="industry"
                  value={formData.industry}
                  onChange={handleInputChange}
                  placeholder="Industry"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2A2525] border border-gray-700 text-white focus:border-[#FF7C91] focus:ring-2 focus:ring-[#FF7C91] transition placeholder-gray-400 text-lg shadow-sm"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#BB97F2]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="services"
                  value={formData.services}
                  onChange={handleInputChange}
                  placeholder="Services you're looking for"
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-[#2A2525] border border-gray-700 text-white focus:border-[#FF7C91] focus:ring-2 focus:ring-[#FF7C91] transition placeholder-gray-400 text-lg shadow-sm"
                  required
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#FF7C91]">
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </span>
              </div>
              <button
                type="submit"
                className="w-full mt-2 rounded-lg bg-gradient-to-r from-[#FF7C91] to-[#BB97F2] px-5 py-3 text-lg font-semibold text-white shadow-lg hover:scale-105 hover:shadow-2xl transition flex items-center justify-center gap-2"
              >
                Continue to Book a Meeting
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M5 10h10M10 5l5 5-5 5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
            </form>
          </div>
        ) : (
          <Section className="text-white" divClass="relative pt-8 z-50">
            <Box className="relative overflow-hidden">
              <GradientOverlay
                direction="r"
                from="background-body/50"
                to="background-body/0"
                className="pointer-events-none absolute inset-0 z-50"
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
                    <button
                      onClick={onClose}
                      className="absolute right-2 top-2 z-50 rounded-full bg-black bg-opacity-60 px-3 py-1 text-lg text-white hover:bg-opacity-90 focus:outline-none"
                      style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
                    >
                      ✕
                    </button>
                    <div className="w-full z-40" style={{ position: 'relative' }}>
                      <InlineWidget
                        url={calendlyUrl}
                        styles={{
                          height: 'min(700px, 90vh)',
                          width: '100%',
                          minHeight: '400px',
                          maxHeight: '90vh',
                        }}
                        pageSettings={pageSettings}
                        iframeTitle="Calendly Scheduling"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </Section>
        )}
      </div>
    </div>
  );
};

export default BookDemoPopup;
