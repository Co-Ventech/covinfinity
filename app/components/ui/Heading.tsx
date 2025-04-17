import React from 'react';
import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  blockText?: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

/**
 * Reusable gradient heading component with consistent styling
 */
const Heading: React.FC<HeadingProps> = ({
  children,
  size = 'xl',
  blockText,
  className = '',
  as: Component = 'h1',
}) => {
  // Base styles that are consistent across all headings
  const baseStyles =
    'bg-gradient-to-br from-[#F0EBFF] to-[#ADA9B8] bg-clip-text font-serif font-semibold text-transparent';

  // Size variations
  const sizeClass =
    size === 'sm'
      ? 'text-2xl'
      : size === 'md'
        ? 'text-3xl'
        : size === 'lg'
          ? 'text-4xl'
          : 'text-5xl';

  return (
    <Component className={`${baseStyles} ${sizeClass} ${className}`}>
      {children}
      {blockText && <span className="block">{blockText}</span>}
    </Component>
  );
};

export default Heading;
