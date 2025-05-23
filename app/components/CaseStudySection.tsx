import type { FC, ReactNode } from 'react';
import Box from './ui/Box';
import Heading from './ui/Heading';
import Section from './ui/Section';
import clsx from 'clsx';

interface CaseStudySectionProps {
  imageUrl: string;
  globePosition: 'left' | 'right';
  imagePosition: 'left' | 'right';
  className?: string;
  children: ReactNode;
}

export const CaseStudySection: FC<CaseStudySectionProps> = ({
  imageUrl,
  globePosition,
  imagePosition,
  className,
  children
}) => {
  return (
    <Section className={clsx('xl:!max-w-[110.75rem]', className)}>
      <Box className='relative overflow-hidden z-[2] py-12 grid grid-cols-2 gap-4'>
        <div className={clsx(
          "relative w-full flex items-center justify-center",
          imagePosition === 'right' && 'order-last'
        )}>
          <img
            src={imageUrl}
            alt="case-study-preview"
            className={clsx(
              imagePosition === 'left' ? 'ml-auto mr-[9%]' : 'mr-auto ml-[9%]'
            )}
          />
        </div>
        <div className="content">
          {children}
        </div>

        {/* Globe */}
        <img
          src="/case-study-globe.png"
          alt="globe"
          className={clsx(
            "absolute -bottom-60 -z-[1]",
            globePosition === 'right' ? '-right-16' : '-left-16'
          )}
        />
      </Box>
    </Section>
  );
}; 