import React from 'react';
import CrownIcon from '../svgs/CrownIcon';
import CollaborationCard from '../ui/CollaborationCard';

// Collaboration items data
const collabItems = Array(6).fill({
  title: 'Collaborate everything',
  description: 'From deployments to tasks, work with your team every step of the way.',
});

const CollaborationSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-20">
      <div className="container-narrow">
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

        {/* Parent flex container for all cards */}
        <div className="relative z-10 flex flex-wrap gap-y-10 px-10">
          {/* First row with flex layout for cards */}
          <div className="mb-10 flex w-full justify-between">
            {/* Left aligned */}
            <div className="flex-0-0-30 flex justify-start" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[0].title}
                description={collabItems[0].description}
                className="h-full"
              />
            </div>

            {/* Center aligned */}
            <div className="flex-0-0-30 flex justify-center" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[1].title}
                description={collabItems[1].description}
                className="h-full"
              />
            </div>

            {/* Right aligned */}
            <div className="flex-0-0-30 flex justify-end" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[2].title}
                description={collabItems[2].description}
                className="h-full"
              />
            </div>
          </div>

          {/* Second row with flex layout for cards */}
          <div className="flex w-full justify-between">
            {/* Left aligned */}
            <div className="flex-0-0-30 flex justify-start" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[3].title}
                description={collabItems[3].description}
                className="h-full"
              />
            </div>

            {/* Center aligned */}
            <div className="flex-0-0-30 flex justify-center" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[4].title}
                description={collabItems[4].description}
                className="h-full"
              />
            </div>

            {/* Right aligned */}
            <div className="flex-0-0-30 flex justify-end" style={{ flex: '0 0 30%' }}>
              <CollaborationCard
                title={collabItems[5].title}
                description={collabItems[5].description}
                className="h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
