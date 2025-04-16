import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, className = '' }) => {
  return (
    <section className={`relative w-full overflow-hidden ${className}`}>
      <div className="mx-auto w-full max-w-[100rem]">{children}</div>
    </section>
  );
};

export default Section;
