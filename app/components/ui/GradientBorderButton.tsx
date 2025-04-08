import React from 'react';

type GradientBorderButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: React.ReactNode;
};

const GradientBorderButton: React.FC<GradientBorderButtonProps> = ({
  children = 'Wadup fam',
  className = '',
  ...rest
}) => {
  return (
    <button
      className={`relative inline-block rounded-lg bg-gradient-to-r from-[rgba(255,105,129,0.24)] from-53% to-[rgba(255,255,255,0.24)] p-[1px] ${className}`}
      {...rest}
    >
      <span className="block rounded-md bg-[#1A1A1A] px-6 py-2 text-white">{children}</span>
    </button>
  );
};

export default GradientBorderButton;
