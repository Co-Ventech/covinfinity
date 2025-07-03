import React from 'react';
import Section from '../ui/Section';
import CollaborationCard from '../ui/CollaborationCard';
import BgImage from '../BgImage';

// Props for the OutcomesSection
interface OutcomeItem {
  title: string;
  description: string;
  icon: string; // Placeholder for now, e.g. '/placeholder-icon.png'
}

interface OutcomesSectionProps {
  heading?: string;
  subheading?: string;
  outcomes: OutcomeItem[];
  bgImageSrc?: string;
}

const OutcomesSection: React.FC<OutcomesSectionProps> = ({
  heading = 'Outcomes',
  subheading = 'Delivered measurable results and business impact',
  outcomes,
  bgImageSrc = 'section-lines/collaborate-lines-2nd.png',
}) => {
  return (
    <Section divClass="relative" className="mt-16">
      {/* Section header */}
      <div className="relative z-10 mb-[3rem] text-center">
        <div className="mb-3 flex justify-center">
          {/* Placeholder icon for Outcomes */}
          <img src="/outcomes-icon.png" alt="outcomes-icon" className="h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10" />
        </div>
        <h3 className="mb-2 text-lg font-semibold sm:text-xl">{heading}</h3>
        <p className="mx-auto text-sm font-medium text-[#4B4646] sm:text-base md:max-w-2xl">
          {subheading}
        </p>
      </div>

      {/* Cards Grid */}
      <div className="containe-cards relative pt-19 pb-24">
        <div className="relative z-10 grid grid-cols-2 justify-items-center gap-y-5 px-10 sm:grid-cols-2 md:grid-cols-3">
          {outcomes.map((item, index) => (
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

export default OutcomesSection; 