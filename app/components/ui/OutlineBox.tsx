import React from 'react';

type OutlineBoxProps = {
  children: React.ReactNode;
  className?: string;
};

const OutlineBox: React.FC<OutlineBoxProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-3xl border-[0.1125rem] border-[#1F1F1F] p-3 ${className}`}>
      {children}
    </div>
  );
};

export default OutlineBox;
