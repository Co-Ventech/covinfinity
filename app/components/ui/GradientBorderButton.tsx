import { button } from 'framer-motion/client';
import React from 'react';
import GradientText from './GradientText';

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
      className={`relative cursor-pointer rounded-[0.625rem] bg-gradient-to-tr from-[rgba(105,125,255,0.24)] to-[rgba(255,255,255,0.24)] p-[1.5px] font-serif text-base font-medium ${className}`}
      {...rest}
    >
      <span className="block rounded-[0.5rem] bg-[#1A1A1A] px-[1.125rem] py-2.5">
        <GradientText>{children}</GradientText>
      </span>
    </button>
  );
};

export default GradientBorderButton;
