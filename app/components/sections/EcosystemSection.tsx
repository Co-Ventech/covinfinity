// 'use client';

// import { motion } from 'framer-motion';
// import type React from 'react';
// import { useState } from 'react';
// import Box from '../ui/Box';
// import Section from '../ui/Section';
// import BgImage from '../BgImage';

// type Step = {
//   id: number;
//   title: string;
//   src: string;
//   description?: string;
// };

// const steps: Step[] = [
//   { id: 1, title: 'Coventech', src: '/logo-coventech.png' },
//   { id: 2, title: 'Recruitinn', src: '/logo-recruitinn.png' },
//   { id: 3, title: 'SkillBuilder', src: '/logo-skillbuilder.png' },
// ];

// // Enhanced animation variants with smoother transitions
// const imageVariants = {
//   front: {
//     scale: 1,
//     y: '0vw',
//     zIndex: 30,
//     opacity: 1,
//     filter: 'blur(0px)',
//     backdropFilter: 'blur(30px)',
//     transition: {
//       type: 'spring',
//       stiffness: 300,
//       damping: 30,
//       mass: 1,
//       duration: 0.7,
//     },
//   },
//   middle: {
//     scale: 0.97,
//     y: '-2.5vw',
//     zIndex: 20,
//     opacity: 0.9,
//     filter: 'blur(0px)',
//     backdropFilter: 'blur(30px)',
//     transition: {
//       type: 'spring',
//       stiffness: 250,
//       damping: 25,
//       mass: 1,
//       duration: 0.7,
//     },
//   },
//   back: {
//     scale: 0.94,
//     y: '-5vw',
//     zIndex: 10,
//     opacity: 0.8,
//     filter: 'blur(0px)',
//     backdropFilter: 'blur(30px)',
//     transition: {
//       type: 'spring',
//       stiffness: 200,
//       damping: 20,
//       mass: 1,
//       duration: 0.7,
//     },
//   },
// };

// // Background blur effect that follows the active card
// const blurVariants = {
//   active: {
//     opacity: 1,
//     transition: {
//       duration: 0.5,
//     },
//   },
//   inactive: {
//     opacity: 0,
//     transition: {
//       duration: 0.5,
//     },
//   },
// };

// const HeaderSection: React.FC = () => {
//   return (
//     <div className="mt-16 flex flex-col items-center justify-center text-center">
//       {/* <BgImage
//         src="section-lines/talent-section-lines.png"
//         // className="-top-22 left-1/2 h-[calc(100%+6rem)] w-[calc(100%+6rem)] -translate-x-1/2 bg-top"
//         className="-top-0 left-1/2 -z-10 h-[58rem] w-[calc(100%+6rem)] -translate-x-1/2 bg-top"
//       /> */}
//       <h2 className="bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text font-serif text-[3.2rem] font-semibold text-transparent">
//         Coventech Ecosystem
//       </h2>
//       <p className="max-w-[43rem] bg-gradient-to-br from-[#EBF5FF]/64 to-[#EBF5FF]/54 bg-clip-text text-[1rem] font-medium">
//         how it’s going to work this step’s entire flow or anything you guys want it’ll be maximum of
//         2 lines thats all
//       </p>
//     </div>
//   );
// };

// const StepsSection: React.FC = () => {
//   const [activeStep, setActiveStep] = useState<number>(1);
//   const [isAnimating, setIsAnimating] = useState<boolean>(false);

//   const handleStepChange = (stepId: number) => {
//     if (isAnimating || stepId === activeStep) return;
//     setIsAnimating(true);
//     setActiveStep(stepId);
//     // Reset animating state after animation completes
//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   // Function to determine card position based on active step
//   const getCardPosition = (cardId: number): 'front' | 'middle' | 'back' => {
//     if (cardId === activeStep) return 'front';
//     if (cardId % 3 === (activeStep + 1) % 3) return 'middle';
//     return 'back';
//   };

//   // Improved card styling with consistent blur effect
//   const getCardStyle = (cardPosition: 'front' | 'middle' | 'back') => {
//     const baseStyle =
//       'relative mx-auto rounded-t-2xl !rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl p-4 pt-6 lg:pt-none lg:p-14 rounded-t-2xl rounded-b-[4rem] border border-[#332B2B] !overflow-hidden';

//     if (cardPosition === 'front') {
//       return `${baseStyle} bg-[#1A1717]/48`;
//     } else if (cardPosition === 'middle') {
//       return `${baseStyle} bg-[#141414]`;
//     } else {
//       return `${baseStyle} bg-[#121212]`;
//     }
//   };

//   return (
//     <div className="relative">
//       <div className="mb-13 flex flex-wrap justify-center gap-3 sm:mb-20 md:gap-5 lg:mb-30">
//         {steps.map((step) => (
//           <button
//             key={step.id}
//             onClick={() => handleStepChange(step.id)}
//             disabled={isAnimating}
//             className={`flex cursor-pointer items-center gap-2.5 rounded-[2.375rem] border border-[#16181A] bg-none px-5 py-2.5 font-serif text-lg font-medium transition-all duration-300 hover:bg-[#16181A] ${
//               activeStep === step.id ? 'bg-[#16181A] text-white' : 'bg-none text-white'
//             } ${isAnimating ? 'cursor-not-allowed opacity-70' : ''}`}
//           >
//             <img src={step.src} alt="Product logo" className="h-5 w-5 object-contain" />
//             {step.title}
//           </button>
//           // <button
//           //   key={step.id}
//           //   onClick={() => handleStepChange(step.id)}
//           //   disabled={isAnimating}
//           //   className={`cursor-pointer rounded-[2.375rem] border border-[#16181A] bg-none px-5 py-2.5 font-serif text-lg font-medium transition-all duration-300 hover:bg-[#16181A] ${
//           //     activeStep === step.id ? 'bg-[#16181A] text-white' : 'bg-none text-white'
//           //   } ${isAnimating ? 'cursor-not-allowed opacity-70' : ''}`}
//           // >
//           //   {step.title}
//           // </button>
//         ))}
//       </div>

//       {/* <div className="relative max-sm:h-[53rem]  md:h-[79rem]"> */}
//       <div className="relative h-[45rem] sm:h-[68.5rem] xl:h-[81rem]">
//         <motion.div
//           className="absolute inset-0 rounded-t-2xl rounded-b-[4rem] backdrop-blur-sm"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//           style={{ zIndex: 5 }}
//         />

//         {/* Card 1 */}
//         <motion.div
//           className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
//           variants={imageVariants}
//           initial="back"
//           animate={getCardPosition(1)}
//           key="card-1"
//           onAnimationStart={() => setIsAnimating(true)}
//           onAnimationComplete={() => setIsAnimating(false)}
//         >
//           <div className={getCardStyle(getCardPosition(1))}>
//             <div className="headings mb-14">
//               <h2 className="mb-3.5 text-5xl font-semibold text-white">Schedule Your Interview</h2>
//               <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
//                 Choose your preferred time slot with our intelligent scheduling system.
//               </p>
//             </div>
//             <div className="images w-full overflow-hidden rounded-[3rem]">
//               <img
//                 src="/client-scheduling-a-call.png"
//                 alt="Client scheduling a call"
//                 className="h-fit"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Card 2 */}
//         <motion.div
//           className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
//           variants={imageVariants}
//           initial="middle"
//           animate={getCardPosition(2)}
//           key="card-2"
//         >
//           <div className={getCardStyle(getCardPosition(2))}>
//             <div className="headings mb-14">
//               <h2 className="mb-3.5 text-5xl font-semibold text-white">Meet Account Executive</h2>
//               <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
//                 Connect with your dedicated account manager to discuss your needs.
//               </p>
//             </div>
//             <div className="images w-full overflow-hidden rounded-[3rem]">
//               <img
//                 src="/client-scheduling-a-call.png"
//                 alt="Meeting with account executive"
//                 className="h-fit"
//               />
//             </div>
//           </div>
//         </motion.div>

//         {/* Card 3 */}
//         <motion.div
//           className="absolute top-0 right-0 left-0 w-full rounded-t-2xl rounded-b-[4rem]"
//           variants={imageVariants}
//           initial="front"
//           animate={getCardPosition(3)}
//           key="card-3"
//         >
//           <div className={getCardStyle(getCardPosition(3))}>
//             <div className="headings mb-14">
//               <h2 className="mb-3.5 text-5xl font-semibold text-white">Start Development</h2>
//               <p className="max-w-[56rem] font-medium text-[#C3C3C3]">
//                 Begin your journey with our expert development team.
//               </p>
//             </div>
//             <div className="images w-full overflow-hidden rounded-[3rem]">
//               <img
//                 src="/client-scheduling-a-call.png"
//                 alt="Development process"
//                 className="h-fit"
//               />
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const EcosystemSection: React.FC = () => {
//   return (
//     <Section>
//       <Box>
//         <div className="sm:mb-8">
//           <HeaderSection />
//         </div>
//         <StepsSection />
//       </Box>
//     </Section>
//   );
// };

// export default EcosystemSection;


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
    scale: 0.97,
    y: "-2.5vw",
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
    scale: 0.94,
    y: "-5vw",
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
  altraback: {
    scale: 0.91,
    y: "-7.5vw",
    zIndex: 10,
    opacity: 0.7,
    filter: "blur(0px)",
    backdropFilter: "blur(30px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 15,
      mass: 1,
      duration: 0.7,
    },
  },
}

const HeaderSection: React.FC = () => {
  return (
    <div className="mt-16 flex flex-col items-center justify-center text-center">
      <h2 className="bg-gradient-to-r from-[#FFFFFF] to-[#CCCCCC] bg-clip-text font-serif text-[3.2rem] font-semibold text-transparent">
        Coventech Ecosystem
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

  const handleStepChange = (stepId: number) => {
    if (isAnimating || stepId === activeStep) return
    setIsAnimating(true)
    setActiveStep(stepId)
    // Reset animating state after animation completes
    setTimeout(() => setIsAnimating(false), 800)
  }

  // Fixed function to determine card position based on active step
  const getCardPosition = (cardId: number): "front" | "middle" | "back" | "altraback" => {
    // Calculate the relative position of each card from the active step
    const totalCards = steps.length
    const relativePosition = (cardId - activeStep + totalCards) % totalCards

    switch (relativePosition) {
      case 0:
        return "front" // Active card
      case 1:
        return "middle" // Next card
      case 2:
        return "back" // Second next card
      case 3:
        return "altraback" // Third next card
      default:
        return "altraback"
    }
  }

  // Improved card styling with consistent blur effect
  const getCardStyle = (cardPosition: "front" | "middle" | "back" | "altraback") => {
    const baseStyle =
      "relative mx-auto rounded-t-2xl !rounded-b-2xl md:rounded-b-3xl lg:rounded-b-4xl p-4 pt-6 lg:pt-none lg:p-14 rounded-t-2xl rounded-b-[4rem] border border-[#332B2B] !overflow-hidden"

    if (cardPosition === "front") {
      return `${baseStyle} bg-[#1A1717]/48`
    } else if (cardPosition === "middle") {
      return `${baseStyle} bg-[#141414]`
    } else if (cardPosition === "back") {
      return `${baseStyle} bg-[#121212]`
    } else {
      return `${baseStyle} bg-[#0F0F0F]`
    }
  }

  // Card content data
  const cardContent = [
    {
      title: "Schedule Your Interview",
      description: "Choose your preferred time slot with our intelligent scheduling system.",
      image: "/client-scheduling-a-call.png",
      alt: "Client scheduling a call",
    },
    {
      title: "Meet Account Executive",
      description: "Connect with your dedicated account manager to discuss your needs.",
      image: "/client-scheduling-a-call.png",
      alt: "Meeting with account executive",
    },
    {
      title: "Start Development",
      description: "Begin your journey with our expert development team.",
      image: "/client-scheduling-a-call.png",
      alt: "Development process",
    },
    {
      title: "Launch & Support",
      description: "Deploy your solution and receive ongoing support from our team.",
      image: "/client-scheduling-a-call.png",
      alt: "Launch and support",
    },
  ]

  return (
    <div className="relative">
      <div className="mb-13 flex flex-wrap justify-center gap-3 sm:mb-20 md:gap-5 lg:mb-30">
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

      <div className="relative h-[45rem] sm:h-[68.5rem] xl:h-[81rem]">
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
              <div className="headings mb-14">
                <h2 className="mb-3.5 text-5xl font-semibold text-white">{cardContent[index].title}</h2>
                <p className="max-w-[56rem] font-medium text-[#C3C3C3]">{cardContent[index].description}</p>
              </div>
              <div className="images w-full overflow-hidden rounded-[3rem]">
                <img
                  src={cardContent[index].image || "/placeholder.svg"}
                  alt={cardContent[index].alt}
                  className="h-fit w-full object-cover"
                />
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