import React from 'react';
import SectionBgLines from '../SectionBgLines';
import CrownIcon from '../svgs/CrownIcon';
import CollaborationCard from '../ui/CollaborationCard';
import Section from '../ui/Section';
import BgImage from '../BgImage';

// Collaboration items data
const collabItems = [
  {
    title: 'QA Manual and Automation Testing',
    description: 'Ensuring Quality at Every Step',
    icon: '/qa-icon.png',
  },
  {
    title: 'Cybersecurity',
    description: 'Protecting What Matters Most',
    icon: '/cyber-icon.png',
  },
  {
    title: 'DevOps and Cloud Solutions',
    description: 'Streamlining Operations for Maximum Efficiency',
    icon: '/devops-icon.png',
  },
  {
    title: 'Software Development',
    description: 'Building the Future, One Line at a Time',
    icon: '/development-icon.png',
  },
  {
    title: 'UI/UX Designing',
    description: 'Crafting Experiences That Engage',
    icon: '/ui-icon.png',
  },
  {
    title: 'Project Management',
    description: 'Turning Ideas into Reality',
    icon: '/pm-icon.png',
  },
];

const CollaborationSection: React.FC = () => {
  return (
    <Section divClass="relative" className="mt-16">
      {/* Section header */}
      {/* <div className="relative z-10 mb-10 text-center sm:mb-20 md:mb-40"> */}
      <div className="relative z-10 mb-[3rem] text-center">
        <div className="mb-3 flex justify-center">
          <img src="/puzzel.png" alt="box-icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        </div>
        <h3 className="mb-2 text-lg font-semibold sm:text-xl">End-to-End Collaboration Made Simple</h3>
        <p className="mx-auto text-sm font-medium text-[#4B4646] sm:text-base md:max-w-2xl">
        From deployments to tasks, ensure smooth teamwork throughout every step.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="containe-cards relative pt-19 pb-24">
        <div className="relative z-10 grid grid-cols-2 justify-items-center gap-y-5 px-10 sm:grid-cols-2 md:grid-cols-3">
          {collabItems.map((item, index) => (
            <CollaborationCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              className="w-full max-w-[90%] sm:max-w-[80%] md:max-w-none"
            />
          ))}
        </div>

        {/* Lines */}
        <BgImage
          // src="/section-lines/collaborate-lines.png"
          // src="section-lines/collaborate-lines.png"
          src="section-lines/collaborate-lines-2nd.png"
          className="!top-0 !left-1/2 w-[calc(100%+4.8rem)] !-translate-x-1/2 !bg-contain"
        />
      </div>
    </Section>
  );
};

export default CollaborationSection;
