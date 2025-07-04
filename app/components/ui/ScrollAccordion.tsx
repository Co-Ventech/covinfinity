import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

// Only register plugins on the client side
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface AccordionItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

interface ScrollAccordionProps {
  items: AccordionItem[];
  title?: string;
  blockText?: string;
  role?: 'product' | 'service';
}

export const ScrollAccordion: React.FC<ScrollAccordionProps> = ({
  items = [],
  title = "More Screens Showing",
  blockText = "Solution & Objectives",
  role = 'product',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const container = useRef<HTMLElement>(null);
  const leftNavRef = useRef<HTMLDivElement>(null);
  const rightContentRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<Array<HTMLDivElement | null>>([]);

  // Initialize section refs
  useEffect(() => {
    sectionRefs.current = Array(items.length).fill(null);
  }, [items.length]);

  // Handle manual navigation
  const handleNavClick = (index: number) => {
    // Just update the active index without scrolling
    setActiveIndex(index);

    // Removed all scrolling functionality to avoid unexpected behavior
    // Now clicking just changes the active item without affecting scroll position
  };

  useGSAP(
    () => {
      // Clear any existing ScrollTriggers
      ScrollTrigger.getAll().forEach((st) => st.kill());

      if (!container.current || !spacerRef.current) return;

      // Set a fixed height for spacer (much taller than before)
      // Using a fixed pixel value ensures consistent scroll behavior
      const spacerHeight = window.innerHeight * 3; // 3x viewport height for more space
      spacerRef.current.style.height = `${spacerHeight}px`;

      // Create custom breakpoints for smoother transitions
      // This gives more scroll space to the middle section
      const breakpoints = Array.from({ length: items.length + 1 }, (_, i) =>
        (spacerHeight * i) / items.length
      );

      // Create section triggers with custom breakpoints
      items.forEach((_, index) => {
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
          id: `section-${index}`,
        });
      });

      // Main pin trigger
      ScrollTrigger.create({
        trigger: container.current,
        start: 'top top',
        end: () => `+=${spacerRef.current?.offsetHeight || 1000}`,
        pin: true,
        pinSpacing: false,
        markers: false,
        id: 'main-pin',
      });
    },
    { scope: container, dependencies: [] }
  );

  return (
    <>
      <Section
        ref={container}
        className="my-Container  h-max md:h-[100dvh]"
        divClass="size-full flex items-center justify-center"
      >
        <div className={`flex !w-full flex-col md:grid md:grid-cols-[0.8fr_1fr] ${role === 'service' ? 'md:grid-cols-[1fr_0.8fr]' : ''}`}>
          {role === 'service' ? (
            <>
              <div
                ref={rightContentRef}
                className="right relative hidden max-h-[23rem] min-h-[23rem] md:block lg:max-h-[28rem] lg:min-h-[28rem]"
              >
                <AnimatePresence mode="wait">
                  {items.map(
                    (item, index) =>
                      activeIndex === index && (
                        <motion.div
                          key={item.id}
                          className="img-wrapper relative -top-12 h-full w-full lg:h-[calc(100%+10rem)]"
                          initial={{
                            opacity: 0,
                            x: 60,
                            scale: 0.9,
                            rotateY: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            rotateY: 0,
                            transition: {
                              type: 'spring',
                              damping: 12,
                              stiffness: 100,
                              mass: 1.2,
                              bounce: 0.4,
                              duration: 0.8,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: -40,
                            scale: 0.9,
                            rotateY: -5,
                            transition: {
                              duration: 0.3,
                              ease: 'easeOut',
                            },
                          }}
                        >
                          <motion.img
                            src={item.image}
                            alt={`${item.title} - ${item.description.split('.')[0]}`}
                            className="size-full rounded-2xl object-cover"
                            initial={{ filter: 'blur(8px)' }}
                            animate={{
                              filter: 'blur(0px)',
                              transition: {
                                delay: 0.1,
                                duration: 0.4,
                              },
                            }}
                          />
                          <GradientOverlay
                            direction="b"
                            from="background-body/0"
                            via="background-body/80 via-40%"
                            to="background-body to-90%"
                            position="absolute"
                            inset="right-0 -bottom-2"
                            size="w-full h-[calc(100%-10rem)]"
                          />
                          <GradientOverlay
                            direction="r"
                            from="background-body/0"
                            via="background-body/80 via-40%"
                            to="background-body to-90%"
                            position="absolute"
                            inset="-right-2 bottom-0"
                            size="h-[calc(100%+2rem)] w-[calc(100%-10rem)]"
                          />
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
              <div
                ref={leftNavRef}
                className="left mx-auto w-full max-w-xl px-4 text-center md:mx-0 md:ml-14 md:px-0 md:text-left"
              >
                <Heading
                  className="mb-6 pb-1 text-center text-xl font-semibold md:mb-10 md:text-left md:text-2xl"
                  blockText={blockText}
                >
                  {title}
                </Heading>

                <div className="left-navigation space-y-6 md:space-y-8">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="left-nav-item relative flex max-w-full cursor-pointer flex-col items-center space-y-1.5 md:max-w-lg md:items-start md:pl-4"
                      onClick={() => handleNavClick(index)}
                      ref={(el) => {
                        sectionRefs.current[index] = el;
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 hidden h-6 w-[0.3125rem] rounded-4xl md:block md:w-[0.3125rem]"
                        animate={{
                          backgroundColor:
                            activeIndex === index
                              ? 'var(--color-accordion-active, #FFD700)'
                              : 'var(--color-accordion, #333)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="mb-3 h-1 w-16 rounded-4xl md:hidden"
                        animate={{
                          backgroundColor:
                            activeIndex === index
                              ? 'var(--color-accordion-active, #FFD700)'
                              : 'rgba(0, 0, 0, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <h5
                        className="font-serif text-lg font-semibold"
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
                          className="px-4 text-sm font-medium md:px-0 md:text-base"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div
                ref={leftNavRef}
                className="left mx-auto w-full max-w-xl px-4 text-center md:mx-0 md:ml-14 md:px-0 md:text-left"
              >
                <Heading
                  className="mb-6 pb-1 text-center text-xl font-semibold md:mb-10 md:text-left md:text-2xl"
                  blockText={blockText}
                >
                  {title}
                </Heading>

                <div className="left-navigation space-y-6 md:space-y-8">
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className="left-nav-item relative flex max-w-full cursor-pointer flex-col items-center space-y-1.5 md:max-w-lg md:items-start md:pl-4"
                      onClick={() => handleNavClick(index)}
                      ref={(el) => {
                        sectionRefs.current[index] = el;
                      }}
                    >
                      <motion.div
                        className="absolute inset-0 hidden h-6 w-[0.3125rem] rounded-4xl md:block md:w-[0.3125rem]"
                        animate={{
                          backgroundColor:
                            activeIndex === index
                              ? 'var(--color-accordion-active, #FFD700)'
                              : 'var(--color-accordion, #333)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="mb-3 h-1 w-16 rounded-4xl md:hidden"
                        animate={{
                          backgroundColor:
                            activeIndex === index
                              ? 'var(--color-accordion-active, #FFD700)'
                              : 'rgba(0, 0, 0, 0)',
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <h5
                        className="font-serif text-lg font-semibold"
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
                          className="px-4 text-sm font-medium md:px-0 md:text-base"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div
                ref={rightContentRef}
                className="right relative hidden max-h-[23rem] min-h-[23rem] md:block lg:max-h-[28rem] lg:min-h-[28rem]"
              >
                <AnimatePresence mode="wait">
                  {items.map(
                    (item, index) =>
                      activeIndex === index && (
                        <motion.div
                          key={item.id}
                          className="img-wrapper relative -top-12 h-full w-full lg:h-[calc(100%+10rem)]"
                          initial={{
                            opacity: 0,
                            x: 60,
                            scale: 0.9,
                            rotateY: 10,
                          }}
                          animate={{
                            opacity: 1,
                            x: 0,
                            scale: 1,
                            rotateY: 0,
                            transition: {
                              type: 'spring',
                              damping: 12,
                              stiffness: 100,
                              mass: 1.2,
                              bounce: 0.4,
                              duration: 0.8,
                            },
                          }}
                          exit={{
                            opacity: 0,
                            x: -40,
                            scale: 0.9,
                            rotateY: -5,
                            transition: {
                              duration: 0.3,
                              ease: 'easeOut',
                            },
                          }}
                        >
                          <motion.img
                            src={item.image}
                            alt={`${item.title} - ${item.description.split('.')[0]}`}
                            className="size-full rounded-2xl object-cover"
                            initial={{ filter: 'blur(8px)' }}
                            animate={{
                              filter: 'blur(0px)',
                              transition: {
                                delay: 0.1,
                                duration: 0.4,
                              },
                            }}
                          />
                          <GradientOverlay
                            direction="b"
                            from="background-body/0"
                            via="background-body/80 via-40%"
                            to="background-body to-90%"
                            position="absolute"
                            inset="right-0 -bottom-2"
                            size="w-full h-[calc(100%-10rem)]"
                          />
                          <GradientOverlay
                            direction="r"
                            from="background-body/0"
                            via="background-body/80 via-40%"
                            to="background-body to-90%"
                            position="absolute"
                            inset="-right-2 bottom-0"
                            size="h-[calc(100%+2rem)] w-[calc(100%-10rem)]"
                          />
                        </motion.div>
                      )
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </div>
      </Section>
      {/* This invisible div creates the scroll height without affecting layout */}
      <div ref={spacerRef} className="spacer invisible h-0"></div>
    </>
  );
};
