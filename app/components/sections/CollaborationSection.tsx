import React from 'react';
import CrownIcon from '../svgs/CrownIcon';
import CollaborationCard from '../ui/CollaborationCard';
import Section from '../ui/Section';
import SectionBgLines from '../SectionBGLines';

// Collaboration items data
const collabItems = Array(6).fill({
  title: 'Collaborate everything',
  description: 'From deployments to tasks, work with your team every step of the way.',
});

const CollaborationSection: React.FC = () => {
  return (
    <Section divClass="relative">
      {/* Section header */}
      <div className="relative z-10 mb-40 text-center">
        <div className="mb-3 flex justify-center">
          <CrownIcon className="h-10 w-10" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">Collaborate everything</h3>
        <p className="mx-auto text-base font-medium text-[#4B4646]">
          From deployments to tasks, work with your team every step of the way.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="containe-cards relative pb-45">
        {/* Lines */}
        <SectionBgLines
          imageUrl="/section-lines/collaborate-lines.png"
          className="!-top-20 !w-[calc(100%+3.5rem)] bg-contain bg-no-repeat"
          // lg:-top-20 lg:bg-[length:100%_100%]
        />
        <div className="relative z-10 flex flex-wrap justify-between gap-y-10 px-10">
          {collabItems.map((item, index) => (
            <div
              key={index}
              className={`flex-0-0-30 flex ${
                index % 3 === 0
                  ? 'justify-start'
                  : index % 3 === 1
                    ? 'justify-center'
                    : 'justify-end'
              }`}
              style={{ flex: '0 0 30%' }}
            >
              <CollaborationCard
                title={item.title}
                description={item.description}
                className="h-full"
              />
            </div>
          ))}
          {/* Lines */}
          {/* <div className="line pointer-events-none absolute -top-2/5 left-0 h-24 w-full rounded-2xl border border-b-0 border-[#2E2928] bg-transparent" /> */}
        </div>
      </div>
    </Section>
  );
};

export default CollaborationSection;
