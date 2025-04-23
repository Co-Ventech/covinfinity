'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import Logo from '../ui/Logo';

// Simple Section component to replace the missing import
const Section: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <section className="container mx-auto px-4 py-16">{children}</section>;
};

type Step = {
  id: number;
  title: string;
  description?: string;
};

const steps: Step[] = [
  { id: 1, title: 'Recruitinn' },
  { id: 2, title: 'Skillbuilder' },
  { id: 3, title: 'Coventel' },
];

// Enhanced animation variants with smoother transitions
const imageVariants = {
  front: {
    scale: 1,
    y: 0,
    zIndex: 30,
    opacity: 1,
    filter: 'blur(0px)',
    backdropFilter: 'blur(30px)',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.7,
    },
  },
  middle: {
    scale: 0.97,
    y: -40,
    zIndex: 20,
    opacity: 0.9,
    filter: 'blur(0px)',
    backdropFilter: 'blur(30px)',
    transition: {
      type: 'spring',
      stiffness: 250,
      damping: 25,
      mass: 1,
      duration: 0.7,
    },
  },
  back: {
    scale: 0.94,
    y: -80,
    zIndex: 10,
    opacity: 0.8,
    filter: 'blur(0px)',
    backdropFilter: 'blur(30px)',
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 20,
      mass: 1,
      duration: 0.7,
    },
  },
};

// Background blur effect that follows the active card
const blurVariants = {
  active: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  inactive: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

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

const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const handleStepChange = (stepId: number) => {
    if (isAnimating || stepId === activeStep) return;
    setIsAnimating(true);
    setActiveStep(stepId);
    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 800);
  };

  // Function to determine card position based on active step
  const getCardPosition = (cardId: number): 'front' | 'middle' | 'back' => {
    if (cardId === activeStep) return 'front';
    if (cardId % 3 === (activeStep + 1) % 3) return 'middle';
    return 'back';
  };

  // Improved card styling with consistent blur effect
  const getCardStyle = (cardPosition: 'front' | 'middle' | 'back') => {
    const baseStyle =
      'relative mx-auto rounded-t-2xl rounded-b-4xl p-14 rounded-t-2xl rounded-b-[4rem] border border-[#332B2B] !overflow-hidden';

    if (cardPosition === 'front') {
      return `${baseStyle} bg-[#1A1717]/48`;
    } else if (cardPosition === 'middle') {
      return `${baseStyle} bg-[#141414]`;
    } else {
      return `${baseStyle} bg-[#121212]`;
    }
  };

  return (
<<<<<<< Updated upstream
    <div className="relative">
      <div className="mb-20 flex flex-wrap justify-center gap-3 md:gap-5">
=======
    <div>
      <div className="mb-56 sm:mb-28  md:mb-20 flex flex-wrap justify-center gap-3 md:gap-5">
>>>>>>> Stashed changes
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => handleStepChange(step.id)}
            disabled={isAnimating}
            className={`cursor-pointer rounded-[50px] bg-none px-5 py-2.5 text-lg font-semibold transition-all duration-300 ${
              activeStep === step.id
                ? 'bg-[#252122] text-white'
                : 'bg-none text-white hover:bg-[#252122]'
            } ${isAnimating ? 'cursor-not-allowed opacity-70' : ''}`}
          >
            {step.title}
          </button>
        ))}
      </div>

<<<<<<< Updated upstream
      <div className="relative h-[75rem]">
        {/* Backdrop blur effect that follows the active card */}
        <motion.div
          className="absolute inset-0 rounded-t-2xl rounded-b-[4rem] backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 5 }}
        />

=======
      {/* <div className="relative h-[88rem]"> */}
      <div className="relative  mb-20 h-[88rem]">
>>>>>>> Stashed changes
        {/* Card 1 */}
        <motion.div
          className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
          variants={imageVariants}
          initial="back"
          animate={getCardPosition(1)}
          key="card-1"
          onAnimationStart={() => setIsAnimating(true)}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div className={getCardStyle(getCardPosition(1))}>
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Schedule Your Interview</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Choose your preferred time slot with our intelligent scheduling system.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              <img
                src="/client-scheduling-a-call.png"
                alt="Client scheduling a call"
                className="h-fit"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
          variants={imageVariants}
          initial="middle"
          animate={getCardPosition(2)}
          key="card-2"
        >
          <div className={getCardStyle(getCardPosition(2))}>
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Meet Account Executive</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Connect with your dedicated account manager to discuss your needs.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              <img
                src="/client-scheduling-a-call.png"
                alt="Meeting with account executive"
                className="h-fit"
              />
            </div>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
          variants={imageVariants}
          initial="front"
          animate={getCardPosition(3)}
          key="card-3"
        >
          <div className={getCardStyle(getCardPosition(3))}>
            <div className="headings mb-14">
              <h2 className="mb-3.5 text-5xl font-semibold text-white">Start Development</h2>
              <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
                Begin your journey with our expert development team.
              </p>
            </div>
            <div className="images w-full overflow-hidden rounded-[3rem]">
              <img
                src="/client-scheduling-a-call.png"
                alt="Development process"
                className="h-fit"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

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
