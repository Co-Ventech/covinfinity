import React from 'react';
import SectionBgLines from '../SectionBgLines';
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
    <Section divClass="relative">
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

      {/* Cards Grid */}
      <div className="containe-cards relative pb-45">
        <SectionBgLines
          imageUrl="/section-lines/collaborate-lines.png"
          className="!-top-20 !w-[calc(100%+3.5rem)] bg-[length:100%_100%] bg-no-repeat"
        />

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-y-10 px-10 justify-items-center">
          {collabItems.map((item, index) => (
            <CollaborationCard
              key={index}
              title={item.title}
              description={item.description}
              className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-none"
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default CollaborationSection;

