import { motion } from 'framer-motion';
import React, { useState } from 'react';
import Section from '../ui/Section';
import Logo from '../ui/Logo';

// Define step types for type safety
type Step = {
  id: number;
  title: string;
  description?: string;
};

const steps: Step[] = [
  { id: 1, title: 'Recruitinn' },
  { id: 2, title: 'Skillbuilder' },
  { id: 3, title: 'Coventel' },
  // { id: 4, title: 'Frontend Dev' },
  // { id: 5, title: 'Frontend Dev' },
  // { id: 6, title: 'Frontend Dev' },
  // { id: 7, title: 'Frontend Dev' },
];

// Animation variants for the image stack
const imageVariants = {
  front: { scale: 1, y: 0, zIndex: 30, opacity: 1, transition: { duration: 0.5 } },
  middle: { scale: 0.97, y: 40, zIndex: 20, opacity: 0.9, transition: { duration: 0.5 } },
  back: { scale: 0.94, y: 80, zIndex: 10, opacity: 0.8, transition: { duration: 0.5 } },
};

// Header Section Component
const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <p className="mb-0.5 text-[0.9375rem] font-medium text-[#484952]">
        Making top talent & top client possible driven by AI
      </p>
      <div className="flex items-center justify-center gap-3.5 px-3 py-2">
        <Logo className="h-[3.75rem] w-[3.6875rem]" />
        <h2 className="text-5xl font-semibold">Coventech Ecosystem</h2>
      </div>
      <p className="max-w-[29rem] text-base text-[#797B8A]">
        something goes here some kind of text about ecosystem that'll get correct or I have to
        design you one space
      </p>
    </div>
  );
};

// Steps and Animation Section Component
const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const handleStepChange = (stepId: number) => {
    setActiveStep(stepId);
  };

  return (
    <div>
      {/* Tabbed interface for steps */}
      <div className="mb-20 flex flex-wrap justify-center gap-3 md:gap-5">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => handleStepChange(step.id)}
            className={`cursor-pointer rounded-[50px] bg-none px-5 py-2.5 text-lg font-semibold transition-all duration-300 ${
              activeStep === step.id
                ? 'bg-[#252122] text-white'
                : 'bg-none text-white hover:bg-[#252122]'
            }`}
          >
            {step.title}
          </button>
        ))}
      </div>

      {/* Stacked Sections Container */}
      <div className="relative h-[88rem] pb-20">
        <motion.div
          className="absolute top-0 right-0 left-0 w-full"
          custom={1}
          variants={imageVariants}
          initial="back"
          animate={activeStep % 3 === 1 ? 'front' : activeStep % 3 === 2 ? 'middle' : 'back'}
        >
          <div className="relative mx-auto rounded-t-2xl rounded-b-4xl bg-[rgba(26,23,23,0.85)] p-14 backdrop-blur-md">
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Schedule Your Interview</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Choose your preferred time slot with our intelligent scheduling system. Our
                AI-powered platform makes it easy to find the perfect time.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              {/* border-[0.75rem] border-[#212121] */}
              <img src="/client-scheduling-a-call.png" alt="" className="h-fit" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 left-0 w-full"
          custom={2}
          variants={imageVariants}
          initial="middle"
          animate={activeStep % 3 === 2 ? 'front' : activeStep % 3 === 0 ? 'middle' : 'back'}
        >
          <div className="relative mx-auto rounded-t-2xl rounded-b-4xl bg-[rgba(26,23,23,0.85)] p-14 backdrop-blur-md">
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Meet Account Executive</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Connect with your dedicated account manager to discuss your needs and explore how we
                can help achieve your goals.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              {/* border-[0.75rem] border-[#212121] */}
              <img src="/client-scheduling-a-call.png" alt="" className="h-fit" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-0 right-0 left-0 w-full"
          custom={3}
          variants={imageVariants}
          initial="front"
          animate={activeStep % 3 === 0 ? 'front' : activeStep % 3 === 1 ? 'middle' : 'back'}
        >
          <div className="relative mx-auto rounded-t-2xl rounded-b-4xl bg-[rgba(26,23,23,0.85)] p-14 backdrop-blur-md">
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Start Development</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Begin your journey with our expert development team and experience our cutting-edge
                technology firsthand.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              {/* border-[0.75rem] border-[#212121] */}
              <img src="/client-scheduling-a-call.png" alt="" className="h-fit" />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

// Main EcosystemSection Component
const EcosystemSection: React.FC = () => {
  return (
    <Section>
      <div className="mb-14">
        <HeaderSection />
      </div>
      <StepsSection />
    </Section>
  );
};

export default EcosystemSection;
