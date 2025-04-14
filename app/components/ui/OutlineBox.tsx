import React from 'react';

type OutlineBoxProps = {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
};

const OutlineBox: React.FC<OutlineBoxProps> = ({ children, className = '', animated = false }) => {
  if (animated) {
    return (
      <div className={`animated-border-wrapper relative rounded-3xl ${className}`}>
        <div className="animated-border-gradient"></div>
        <div className="animated-border-content">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-3xl border-[0.1125rem] border-[#1F1F1F] p-3 ${className}`}>
      {children}
    </div>
  );
};

export default OutlineBox;
