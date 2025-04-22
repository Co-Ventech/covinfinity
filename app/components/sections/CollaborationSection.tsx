import React from 'react';
import CrownIcon from '../svgs/CrownIcon';
import CollaborationCard from '../ui/CollaborationCard';
import Section from '../ui/Section';

// Collaboration items data
const collabItems = Array(6).fill({
  title: 'Collaborate everything',
  description: 'From deployments to tasks, work with your team every step of the way.',
});

const CollaborationSection: React.FC = () => {
  return (
    <Section>
      {/* Section header */}
      <div className="relative z-10 mb-10 text-center sm:mb-20 md:mb-40">
        <div className="mb-3 flex justify-center">
          <CrownIcon className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        </div>
        <h3 className="mb-2 text-lg font-semibold sm:text-xl">Collaborate everything</h3>
        <p className="mx-auto text-sm font-medium text-[#4B4646] sm:text-base md:max-w-2xl">
          From deployments to tasks, work with your team every step of the way.
        </p>
      </div>

      {/* Cards Grid - 2 columns on sm and below, 3 columns on md and above */}
      <div className="relative z-10">
        <div className="grid grid-cols-2 gap-4 px-4 sm:gap-6 sm:px-6 md:grid-cols-3 md:gap-8 md:px-10 lg:gap-10">
          {collabItems.map((item, index) => (
            <CollaborationCard
              key={index}
              title={item.title}
              description={item.description}
              className="h-full w-full"
            />
          ))}
        </div>
        
        {/* Lines */}
        <div className="line pointer-events-none absolute -top-1/4 left-0 h-12 w-full rounded-2xl border border-b-0 border-[#2E2928] bg-transparent sm:-top-1/3 sm:h-16 md:-top-2/5 md:h-24" />
      </div>
    </Section>
  );
};

export default CollaborationSection;
