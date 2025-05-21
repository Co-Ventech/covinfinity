import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { GradientOverlay } from '~/components/ui/GradientOverlay';
import Heading from '~/components/ui/Heading';
import Section from '~/components/ui/Section';

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

  return (
    <Section className='mt-20 h-screen' divClass='size-full flex items-center justify-center'>
      <div className="grid grid-cols-[0.8fr_1fr] !w-full">
        <div className="left ml-14">
          <Heading className='pb-1 mb-10 font-semibold text-2xl' blockText='Solution & Objectives'>More Screens Showing</Heading>

          <div className="left-navigation space-y-8">
            {accordionItems.map((item, index) => (
              <div
                key={item.id}
                className="left-nav-item max-w-lg space-y-1.5 relative pl-4 cursor-pointer"
                onClick={() => setActiveIndex(index)}
              >
                <motion.div
                  className="h-6 w-[0.3125rem] rounded-4xl absolute inset-0"
                  animate={{
                    backgroundColor: activeIndex === index ? "var(--color-accordion-active, #FFD700)" : "var(--color-accordion, #333)"
                  }}
                  transition={{ duration: 0.3 }}
                />
                <h5 className='text-white font-semibold text-lg font-serif'>{item.title}</h5>
                {activeIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='font-medium'
                  >
                    {item.description}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="right min-h-[28rem] max-h-[28rem] relative">
          <AnimatePresence mode="wait">
            {accordionItems.map((item, index) => (
              activeIndex === index && (
                <motion.div
                  key={item.id}
                  className="img-wrapper relative -top-12 w-full h-[calc(100%+10rem)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <img src={item.image} alt={`case-studies${index + 1}`} className='object-cover size-full' />
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
  );
};
