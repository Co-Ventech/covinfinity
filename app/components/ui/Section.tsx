import React, { forwardRef } from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  divClass?: string;
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ children, className = '', divClass = '' }, ref) => {
    return (
      <section ref={ref} className={`relative w-full overflow-hidden ${className}`}>
        <div className={`relative mx-auto w-full max-w-[83rem] px-4 xl:max-w-[100rem] ${divClass}`}>
          {children}
        </div>
      </section>
    );
  }
);

Section.displayName = 'Section';

export default Section;
