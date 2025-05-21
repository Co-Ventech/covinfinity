import { AnimatePresence, motion } from 'framer-motion';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useEffect, useRef, useState } from 'react';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';

import { useGSAP } from '@gsap/react';

// Register plugins
gsap.registerPlugin(ScrollTrigger, useGSAP);

// Demo content items
const accordionItems = [
  {
    id: 1,
    title: "Inline-Text Something",
    description: "Thanks, Sarah. I appreciate your responsiveness and support. Looking forward to seeing these changes in action!",
    image: "/dashboard-normal.png"
  },
  {
    id: 2,
    title: "Dummy Heading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/case-studies3.png"
  },
  {
    id: 3,
    title: "Dummy Heading",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    image: "/case-studies2.png"
  }
];

export const ScrollAccordion: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const container = useRef<HTMLElement>(null);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = Array(accordionItems.length).fill(null);
  }, []);

  // Handle manual navigation
  const handleNavClick = (index: number) => {
    // Just update the active index without scrolling
    setActiveIndex(index);

    // Removed all scrolling functionality to avoid unexpected behavior
    // Now clicking just changes the active item without affecting scroll position
  };

  useGSAP(() => {
    // Clear any existing ScrollTriggers
    ScrollTrigger.getAll().forEach(st => st.kill());

    if (!container.current || !spacerRef.current) return;

    // Set a fixed height for spacer (much taller than before)
    // Using a fixed pixel value ensures consistent scroll behavior
    const spacerHeight = window.innerHeight * 3; // 3x viewport height for more space
    spacerRef.current.style.height = `${spacerHeight}px`;

    // Create custom breakpoints for smoother transitions
    // This gives more scroll space to the middle section
    const breakpoints = [
      0,                    // Start
      spacerHeight * 0.33,   // First transition (40%)
      spacerHeight * 0.8,   // Second transition (60%)
      spacerHeight          // End (100%)
    ];

    // Create section triggers with custom breakpoints
    accordionItems.forEach((_, index) => {
      // Use custom breakpoints for each section
      const startOffset = breakpoints[index];
      const endOffset = breakpoints[index + 1];

      // Create a trigger for this section
      ScrollTrigger.create({
        trigger: container.current,
        start: `top+=${startOffset} top`,
        end: `top+=${endOffset} top`,
        onEnter: () => setActiveIndex(index),
        onEnterBack: () => setActiveIndex(index),
        // markers: index === 0 ? true : false, // Only show markers for first section in development
        markers: false,
        id: `section-${index}`
      });
    });

    // Main pin trigger
    ScrollTrigger.create({
      trigger: container.current,
      start: "top top",
      end: () => `+=${spacerRef.current?.offsetHeight || 1000}`,
      pin: true,
      pinSpacing: false,
      markers: false,
      id: "main-pin"
    });

  }, { scope: container, dependencies: [] });

  return (
    <>
      <Section ref={container} className='my-Container mt-20 h-[100dvh]' divClass='size-full flex items-center justify-center'>
        <div className="flex flex-col md:grid md:grid-cols-[0.8fr_1fr] !w-full">
          <div ref={leftNavRef} className="left ml-4 md:ml-14">
            <Heading className='pb-1 mb-6 md:mb-10 font-semibold text-xl md:text-2xl' blockText='Solution & Objectives'>More Screens Showing</Heading>

            <div className="left-navigation space-y-6 md:space-y-8">
              {accordionItems.map((item, index) => (
                <div
                  key={item.id}
                  className="left-nav-item max-w-full md:max-w-lg space-y-1.5 relative pl-4 cursor-pointer"
                  onClick={() => handleNavClick(index)}
                  ref={(el) => {
                    sectionRefs.current[index] = el;
                  }}
                >
                  <motion.div
                    className="h-6 w-[0.3125rem] rounded-4xl absolute inset-0"
                    animate={{
                      backgroundColor: activeIndex === index ? "var(--color-accordion-active, #FFD700)" : "var(--color-accordion, #333)"
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <h5
                    className='font-semibold text-lg font-serif'
                    style={{ color: activeIndex === index ? '#FFFFFF' : '#EBF5FF' }}
                  >
                    {item.title}
                  </h5>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className='font-medium text-sm md:text-base'
                    >
                      {item.description}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div ref={rightContentRef} className="right min-h-[23rem] max-h-[23rem] lg:min-h-[28rem] lg:max-h-[28rem] relative hidden md:block">
            <AnimatePresence mode="wait">
              {accordionItems.map((item, index) => (
                activeIndex === index && (
                  <motion.div
                    key={item.id}
                    className="img-wrapper relative -top-12 w-full h-full lg:h-[calc(100%+10rem)]"
                    initial={{
                      opacity: 0,
                      x: 60,
                      scale: 0.9,
                      rotateY: 10
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                      scale: 1,
                      rotateY: 0,
                      transition: {
                        type: "spring",
                        damping: 12,
                        stiffness: 100,
                        mass: 1.2,
                        bounce: 0.4,
                        duration: 0.8
                      }
                    }}
                    exit={{
                      opacity: 0,
                      x: -40,
                      scale: 0.9,
                      rotateY: -5,
                      transition: {
                        duration: 0.3,
                        ease: "easeOut"
                      }
                    }}
                  >
                    <motion.img
                      src={item.image}
                      alt={`case-studies${index + 1}`}
                      className='object-cover size-full rounded-2xl'
                      initial={{ filter: "blur(8px)" }}
                      animate={{
                        filter: "blur(0px)",
                        transition: {
                          delay: 0.1,
                          duration: 0.4
                        }
                      }}
                    />
                    <GradientOverlay
                      direction="b"
                      from="background-body/0"
                      via='background-body/80 via-40%'
                      to="background-body to-90%"
                      position="absolute"
                      inset="right-0 -bottom-2"
                      size='w-full h-[calc(100%-10rem)]'
                    />
                    <GradientOverlay
                      direction="r"
                      from="background-body/0"
                      via='background-body/80 via-40%'
                      to="background-body to-90%"
                      position="absolute"
                      inset="-right-2 bottom-0"
                      size='h-[calc(100%+2rem)] w-[calc(100%-10rem)]'
                    />
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Section>
      {/* This invisible div creates the scroll height without affecting layout */}
      <div ref={spacerRef} className="spacer invisible h-0"></div>
    </>
  );
};