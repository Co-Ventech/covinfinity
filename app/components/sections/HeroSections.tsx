import React from 'react';
import NetworkCircleIcon from '../svgs/NetworkCircleIcon';
import Polygon1 from '../svgs/Polygon1';
import Polygon2 from '../svgs/Polygon2';
import Button from '../ui/Button';
import GradientText from '../ui/GradientText';
import Heading from '../ui/Heading';
import OutlineBox from '../ui/OutlineBox';
import { ROUTES } from '~/constants/routes';
import BookDemoPopup from '../BookDemoPopup';
import { useState } from 'react';

// Reusable component for polygon-backed sections
interface PolygonSectionProps {
  children: React.ReactNode;
  polygonComponent: React.ComponentType<{ className?: string }>;
  className?: string;
  polygonClassName?: string;
}


export const PolygonSection: React.FC<PolygonSectionProps> = ({
  children,
  polygonComponent: PolygonComponent,
  className = '',
  polygonClassName = '',
}) => (
  <div className={`relative mx-auto max-w-max ${className}`}>
    <PolygonComponent className={`absolute z-[-1] ${polygonClassName}`} />
    {children}
  </div>
);

// Update your TopHeroSection component
export const TopHeroSection: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <PolygonSection
      polygonComponent={Polygon1}
      polygonClassName="top-3.5 left-1/2 h-[25rem] !w-[calc(100%+5rem)] -translate-x-1/2"
    >
      <Heading className="mb-3.5 lg:!text-6xl" blockText="Human-Led Innovation">
      Where AI Meets Next-Gen
      </Heading>

      <p className="!mx-auto mb-6 !max-w-[38rem] font-serif text-xl font-medium">
        <GradientText className="!from-[#EBF5FF]/56 !to-[#EBF5FF]/48 to-20%">
        Co-Ventech's customizable features merge AI with human expertise to drive smarter, more impactful solutions for your business.
        </GradientText>
      </p>

      <div className="flex justify-center gap-4">
        <Button onClick={() => setShowPopup(true)}>Book a demo</Button>

        <a href="https://app.co-ventech.com/signup" target="_blank" rel="noopener noreferrer">
          <button className="flex rounded animate-pulse px-5 py-2.5 font-medium transition hover:opacity-90">
            <span className="bg-gradient-to-r from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
              Start today for free
            </span>
            <img src="/right-icon.png" alt="arrow-icon" className="mt-2 ml-2 h-2 w-2" />
          </button>
        </a>
      </div>

      {showPopup && <BookDemoPopup onClose={() => setShowPopup(false)} />}
    </PolygonSection>
  );
};

// Reusable testimonial component
interface TestimonialProps {
  quote: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
  icon?: React.ReactNode;
}

export const Testimonial: React.FC<TestimonialProps> = ({ quote, author, icon }) => (
  <div className="mx-auto w-[38.125rem] max-w-full px-4">
    <OutlineBox className="rounded-b-none border-b-0 !border-border-gradiant-color-2nd text-center text-white">
      <h3 className="mx-auto mt-2 mb-6 max-w-[31rem] font-serif text-xl leading-relaxed font-semibold">
        " {quote} "
      </h3>
    </OutlineBox>

    <OutlineBox className="-mt-5 flex items-center justify-between !border-border-gradiant-color-2nd">
      <div className="flex items-center">
        <img src={author.image} alt={author.name} className="mr-4 h-12 w-12 rounded-full" />
        <div className="text-left">
          {/* <h5 className="text-[1.2rem] font-semibold">{author.name}</h5> */}
          <p className="no-color text-[1.2rem] font-semibold text-white">{author.name}</p>
          <p className="text-[1.2rem] font-medium">{author.title}</p>
        </div>
      </div>
      {icon && (
        <div className="flex h-10 w-10 items-center justify-center rounded-full">{icon}</div>
      )}
    </OutlineBox>
  </div>
);

// Bottom hero section with logo and testimonial
export const BottomHeroSection: React.FC = () => (
  <PolygonSection
    polygonComponent={Polygon2}
    polygonClassName="bottom-0 left-1/2 h-[24rem] !w-[calc(100%+8rem)] -translate-x-1/2"
  >
    <img src="/hero-logo.png" alt="Coventech Logo" className="mx-auto mb-14 h-16" />

    <Testimonial
      quote="With Co-Ventech, businesses access top talent and the right digital solutions, creating the perfect environment for success and growth."
      author={{
        name: 'Jane Doe',
        title: 'CTO of Neusolme',
        image: 'james.png',
      }}
      icon={<NetworkCircleIcon />}
    />
  </PolygonSection>
);
