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
    <section className="relative w-full py-20">
      {/* Background dots/particles effect */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-10">
        <div className="absolute top-10 left-10 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute top-20 right-20 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute bottom-40 left-40 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute right-80 bottom-20 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute top-60 left-80 h-1 w-1 rounded-full bg-white"></div>
        <div className="absolute right-40 bottom-60 h-1 w-1 rounded-full bg-white"></div>
      </div>

      <div className="container-narrow">
        {/* Section header */}
        <div className="relative z-10 mb-16 text-center">
          <div className="mb-3 flex justify-center">
            <CrownIcon className="h-10 w-10" />
          </div>
          <h3 className="mb-2 text-xl font-semibold">Collaborate everything</h3>
          <p className="mx-auto text-base font-medium text-[#4B4646]">
            From deployments to tasks, work with your team every step of the way.
          </p>
        </div>

        {/* Horizontal divider line */}
        <div className="mb-16 h-px w-full bg-gray-800"></div>

        {/* Cards grid - simple 3x2 grid */}
        <div className="relative z-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {collabItems.map((item, index) => (
            <CollaborationCard key={index} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
