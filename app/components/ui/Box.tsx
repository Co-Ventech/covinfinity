import React from 'react';

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

type BoxInnerProps = {
  children: React.ReactNode;
  className?: string;
};

const Box: React.FC<BoxProps> & { Inner: React.FC<BoxInnerProps> } = ({
  children,
  className = '',
}) => {
  return (
    <div
      className={`rounded-3xl border-[0.75rem] border-border-box bg-background-body p-3 ${className}`}
    >
      {children}
    </div>
  );
};

const BoxInner: React.FC<BoxInnerProps> = ({ children, className = '' }) => {
  return <div className={`rounded-[0.625rem] bg-border-box p-3 ${className}`}>{children}</div>;
};

Box.Inner = BoxInner;

export default Box;
