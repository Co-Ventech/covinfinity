import React from 'react';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
};

const Box: React.FC<BoxProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`rounded-3xl border-[0.75rem] border-border-box bg-background-body p-3 ${className}`}
    >
      {children}
    </div>
  );
};

export default Box;
