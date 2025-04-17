import React from 'react';
import NetworkCircleIcon from '../svgs/NetworkCircleIcon';
import Polygon1 from '../svgs/Polygon1';
import Polygon2 from '../svgs/Polygon2';
import GradientBorderButton from '../ui/GradientBorderButton';
import GradientText from '../ui/GradientText';
import OutlineBox from '../ui/OutlineBox';
import Heading from '../ui/Heading';

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

// Top hero section with heading and CTA
export const TopHeroSection: React.FC = () => (
  <PolygonSection
    polygonComponent={Polygon1}
    polygonClassName="top-3.5 left-1/2 h-[25rem] !w-[calc(100%+5rem)] -translate-x-1/2"
  >
    <Heading className="mb-3.5" blockText="and Services">
      Coventech Products
    </Heading>

    <p className="mb-6">
      Some lorem ipsum text goes here <span className="block"> says no one </span>
    </p>
    <GradientBorderButton>
      Launch Covinfinity
      {/* <span className="block bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
        Launch Covinfinity
      </span> */}
    </GradientBorderButton>
  </PolygonSection>
);

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
    <OutlineBox className="rounded-b-none border-b-0 text-center text-white">
      <h3 className="mx-auto mt-2 mb-6 max-w-[31rem] text-xl leading-relaxed font-semibold">
        " {quote} "
      </h3>
    </OutlineBox>

    <OutlineBox className="-mt-5 flex items-center justify-between">
      <div className="flex items-center">
        <img src={author.image} alt={author.name} className="mr-4 h-12 w-12 rounded-full" />
        <div className="text-left">
          <p className="text-base font-semibold text-white">{author.name}</p>
          <p className="text-sm text-gray-500">{author.title}</p>
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
      quote="Coventech an ecosystem where businesses meet top talent & digital solutions and services"
      author={{
        name: 'James W Clark',
        title: 'Chief Executive Officer',
        image: 'james.png',
      }}
      icon={<NetworkCircleIcon />}
    />
  </PolygonSection>
);
