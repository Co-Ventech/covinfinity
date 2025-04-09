import React from 'react';
import CrownIcon from '../svgs/CrownIcon';
import CollaborationCard from '../ui/CollaborationCard';
import ParticleCluster from '../ui/ParticleCluster';

// Collaboration items data
const collabItems = Array(6).fill({
  title: 'Collaborate everything',
  description: 'From deployments to tasks, work with your team every step of the way.',
});

const CollaborationSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden py-20">
      {/* Horizontal gradient line at top */}
      <div className="absolute top-[10%] right-0 left-0 z-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

      {/* Particle clusters positioned outside the grid layout */}
      <div className="absolute bottom-[10%] left-[10%] z-0">
        <ParticleCluster />
      </div>

      <div className="absolute right-[15%] bottom-[5%] z-0">
        <ParticleCluster />
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

        {/* Horizontal gradient line */}
        <div className="mb-16 h-px w-full bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

        {/* Cards grid with responsive spacing */}
        <div className="relative z-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          {collabItems.map((item, index) => (
            <CollaborationCard
              key={index}
              title={item.title}
              description={item.description}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollaborationSection;
