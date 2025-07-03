// components/BookDemoPopup.tsx
import React, { useState, useEffect } from 'react';
import { InlineWidget } from 'react-calendly';
import { AnimatePresence, motion } from 'framer-motion';
import Box from '~/components/ui/Box';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Section from '~/components/ui/Section';
import BgImage from '~/components/BgImage';

interface BookDemoPopupProps {
  onClose: () => void;
}

const FORM_STEPS = [
  {
    name: 'companyName',
    placeholder: "What's your company's name?",
    icon: (
      <span className="mr-2 text-[#FF7C91]">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M3 17V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 17v-4h2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </span>
    ),
  },
  {
    name: 'industry',
    placeholder: 'What industry are you in?',
    icon: (
      <span className="mr-2 text-[#BB97F2]">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M10 3v14M3 10h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </span>
    ),
  },
  {
    name: 'services',
    placeholder: "What services are you looking for?",
    icon: (
      <span className="mr-2 text-[#FF7C91]">
        <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10h12M10 4v12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      </span>
    ),
  },
];

const BookDemoPopup: React.FC<BookDemoPopupProps> = ({ onClose }) => {
  const [step, setStep] = useState<'form' | 'calendar'>('form');
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    services: ''
  });
  const [formStep, setFormStep] = useState(0);
  const [inputValue, setInputValue] = useState('');

  // Disable body scroll when popup is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleBarInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleBarFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const stepKey = FORM_STEPS[formStep].name;
    setFormData(prev => ({ ...prev, [stepKey]: inputValue }));
    setInputValue('');
    if (formStep < FORM_STEPS.length - 1) {
      setFormStep(formStep + 1);
    } else {
      setStep('calendar');
    }
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
      <Box className={`relative ${step === 'form' ? 'w-full max-w-3xl' : 'w-screen h-[80vh] max-w-5xl mx-auto sm:mx-8 md:mx-12 flex flex-col justify-start shadow-2xl rounded-2xl overflow-hidden bg-background-body'}`}>
        {/* Decorative BgImage for style */}
        <BgImage
          src="section-lines/collaborate-lines-2nd.png"
          className="absolute inset-0 w-full h-full !-z-10 !bg-contain opacity-60"
        />
        <button
          onClick={onClose}
          className={`absolute ${step === 'form' ? 'right-6' : 'right-8'} top-6 z-50 text-2xl focus:outline-none text-[#FF7C91] hover:text-[#D7263D] transition-colors`}
        >
          ✕
        </button>

        {step === 'form' ? (
          <div className="flex flex-col items-center px-10 py-12">
            {/* Decorative header */}
            <div className="flex flex-col items-center mb-8">
              <div className="w-12 h-12 ">
                <img src="/box.png" alt="Box Icon" className="w-full h-full object-contain" />
              </div>
              <h2 className="text-3xl font-extrabold text-white m-4 text-center">Tell us about your company</h2>
              <p className="text-[#FF7C91] font-medium">Step {formStep + 1} of {FORM_STEPS.length}</p>
            </div>
            <form onSubmit={handleBarFormSubmit} className="w-full max-w-xl">
              <div className="flex items-center rounded-lg bg-[#101112] p-4">
                <div className="flex flex-1 items-center text-sm font-medium text-[#EBF5FF]">
                  {FORM_STEPS[formStep].icon}
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleBarInputChange}
                    placeholder={FORM_STEPS[formStep].placeholder}
                    className="flex-1 bg-transparent text-sm text-white placeholder-[#EBF5FF] focus:outline-none"
                    required
                  />
                </div>
                <div className="flex items-center space-x-3">
                  <button type="submit">
                    <img src="/send-2.png" alt="Next" className="size-6 object-contain" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="flex flex-col h-full w-full">
            <div className="flex-1 relative overflow-hidden h-full w-full">
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
                    className="flex h-full items-center justify-center"
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
                    className="relative z-0 h-full w-full"
                  >
                    <div className="w-full h-full z-40" style={{ position: 'relative', height: '100%' }}>
                      <InlineWidget
                        url={calendlyUrl}
                        styles={{
                          height: '100%',
                          width: '100%',
                          minHeight: '400px',
                          maxHeight: '100%',
                        }}
                        pageSettings={pageSettings}
                        iframeTitle="Calendly Scheduling"
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        )}
      </Box>
    </div>
  );
};

export default BookDemoPopup;
