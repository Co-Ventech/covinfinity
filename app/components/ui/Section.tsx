import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  divClass?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '', divClass = '' }) => {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div className={`relative mx-auto w-full max-w-[83rem] px-4 xl:max-w-[100rem] ${divClass}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
