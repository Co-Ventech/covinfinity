import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

const GradientText: React.FC<GradientTextProps> = ({ children, className = '' }) => {
  return (
    <span
      className={`bg-gradient-to-r from-[#FF6981] to-white bg-clip-text font-serif text-transparent ${className}`}
    >
      {children}
    </span>
  );
};

export default GradientText;
