'use client';

import { motion } from 'framer-motion';
import type React from 'react';
import { useState } from 'react';
import Box from '../ui/Box';
import Section from '../ui/Section';
import BgImage from '../BgImage';


type Step = {
  id: number
  title: string
  src: string
  description?: string
}

const steps: Step[] = [
  { id: 1, title: "Coventech", src: "/logo-coventech.png" },
  { id: 2, title: "Recruitinn", src: "/logo-recruitinn.png" },
  { id: 3, title: "SkillBuilder", src: "/logo-skillbuilder.png" },
  { id: 4, title: "CovenTal", src: "/covental.png" },
]

// Enhanced animation variants with smoother transitions
const imageVariants = {
  front: {
    scale: 1,
    y: "0vw",
    zIndex: 40,
    opacity: 1,
    filter: "blur(0px)",
    backdropFilter: "blur(30px)",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.7,
    },
  },
  middle: {
    scale: 0.93,
    y: "-1.8vw",
    zIndex: 30,
    opacity: 0.9,
    filter: "blur(0px)",
    backdropFilter: "blur(30px)",
    transition: {
      type: "spring",
      stiffness: 250,
      damping: 25,
      mass: 1,
      duration: 0.7,
    },
  },
  back: {
    scale: 0.87,
    y: "-3.5vw",
    zIndex: 20,
    opacity: 0.8,
    filter: "blur(0px)",
    backdropFilter: "blur(30px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
      mass: 1,
      duration: 0.7,
    },
  },
}

const HeaderSection: React.FC = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center text-center">
      <h2 className="bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text font-serif text-[3.2rem] font-semibold text-transparent">
       Co-Ventech Ecosystem
      </h2>
      <p className="max-w-[28rem] bg-gradient-to-br from-[#EBF5FF]/64 to-[#EBF5FF]/54 bg-clip-text font-medium text-[1rem]">
        A Dynamic Trio of Innovations to Bridge Skill Gaps and Streamline Recruitment
      </p>
    </div>
  )
}

const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [isAnimating, setIsAnimating] = useState<boolean>(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState<boolean>(false)

  const handleStepChange = (stepId: number) => {
    if (isAnimating || stepId === activeStep) return
    setIsAnimating(true)
    setActiveStep(stepId)
    // Reset video state when changing steps
    setIsVideoPlaying(false)
    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 800)
  }

  const handleVideoClick = (stepId: number) => {
    // Only allow video play for the active step
    if (stepId === activeStep) {
      setIsVideoPlaying(!isVideoPlaying)
    }
  }

  // Fixed function to determine card position based on active step
  const getCardPosition = (cardId: number): "front" | "middle" | "back" => {
    // Calculate the relative position of each card from the active step
    const totalCards = steps.length;
    const relativePosition = (cardId - activeStep + totalCards) % totalCards;

    switch (relativePosition) {
      case 0:
        return "front"; // Active card
      case 1:
        return "middle"; // Next card
      case 2:
        return "back"; // Second next card
      default:
        return "back";
    }
  };

  // Improved card styling with consistent blur effect
  const getCardStyle = (cardPosition: "front" | "middle" | "back") => {
    const baseStyle =
      "relative mx-auto rounded-t-2xl !rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl p-4 pt-6 lg:pt-none lg:p-6 rounded-t-2xl rounded-b-[4rem] !overflow-hidden border-[2px] border-[#1A1A1A]"

    if (cardPosition === "front") {
      return `${baseStyle}`
    } else if (cardPosition === "middle") {
      return `${baseStyle}`
    } else {
      return `${baseStyle}`
    }
  }

  // Card content data
  const cardContent = [
    {
      title: "Coventech Platform",
      description: "Experience our comprehensive development and technology solutions platform.",
      video: "/Co Infinity Dark Mode Video 3.mp4",
      alt: "Coventech platform demo",
      type: "video",
      thumbnail: "/co-ventech-thumbnail.png"
    },
      
    
    {
      title: "Recruitinn Platform",
      description: "Discover our advanced recruitment and talent acquisition platform.",
      video: "/Recruitinn English Version Dark Mode Video.mp4",
      alt: "Recruitinn platform demo",
      type: "video",
      thumbnail: "/recruitin-thumbnail.png"
    },
    {
      title: "SkillBuilder Platform",
      description: "Experience our advanced skill development platform with interactive learning modules.",
      video: "/Skill Builder 1 Dark Mode.mp4",
      alt: "SkillBuilder platform demo",
      type: "video",
      thumbnail: "/skillbuilder-thumbnail.png"
    },
    {
      title: "CovenTal Platform",
      description: "Explore our AI-powered conversational platform for enhanced communication.",
      video: "/Covental Dark Mode Video 2.mp4",
      alt: "CovenTal platform demo",
      type: "video",
      thumbnail: "/covental-thumbnail.png"
    },
  ]

  return (
    <div className="relative">
      <div className="mb-13 flex flex-wrap justify-center gap-3 sm:mb-20 md:gap-5 lg:mb-24">
        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => handleStepChange(step.id)}
            disabled={isAnimating}
            className={`flex cursor-pointer items-center gap-2.5 rounded-[2.375rem] border border-[#16181A] bg-none px-5 py-2.5 font-serif text-lg font-medium transition-all duration-300 hover:bg-[#16181A] ${activeStep === step.id ? "bg-[#16181A] text-white" : "bg-none text-white"
              } ${isAnimating ? "cursor-not-allowed opacity-70" : ""}`}
          >
            <img src={step.src || "/placeholder.svg"} alt="Product logo" className="h-5 w-5 object-contain" />
            {step.title}
          </button>
        ))}
      </div>

      <div className="relative h-[31rem] sm:h-[44.5rem] xl:h-[41.8rem]">
        <motion.div
          className="absolute inset-0 rounded-t-2xl rounded-b-[4rem] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ zIndex: 5 }}
        />

        {/* Render all 4 cards */}
        {steps.map((step, index) => (
          <motion.div
            key={`card-${step.id}`}
            className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
            variants={imageVariants}
            initial={getCardPosition(step.id)}
            animate={getCardPosition(step.id)}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            <div className={getCardStyle(getCardPosition(step.id))}>
              <div className="images w-full overflow-hidden rounded-[1rem]">
                {step.id === activeStep && (
                  <div className="relative cursor-pointer" onClick={() => handleVideoClick(step.id)}>
                    {!isVideoPlaying || step.id !== activeStep ? (
                      <div className="relative">
                        {cardContent[index].thumbnail ? (
                          <img
                            src={cardContent[index].thumbnail}
                            alt={`${cardContent[index].title} thumbnail`}
                            className="w-full h-[220px] sm:h-[500px] object-cover rounded-lg"
                          />
                        ) : (
                          <video
                            src={cardContent[index].video}
                            className="w-full h-[220px] sm:h-[500px] object-cover rounded-lg"
                            muted
                            loop
                          />
                        )}
                        {step.id === activeStep && (
                          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                              <svg
                                className="ml-1 h-8 w-8 text-white"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <video
                        src={cardContent[index].video}
                        className="w-full h-[220px] sm:h-[500px] object-cover rounded-lg"
                        autoPlay
                        controls
                        loop
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const EcosystemSection: React.FC = () => {
  return (
    <Section>
      <Box>
        <div className="sm:mb-8">
          <HeaderSection />
        </div>
        <StepsSection />
      </Box>
    </Section>
  );
};

export default EcosystemSection;