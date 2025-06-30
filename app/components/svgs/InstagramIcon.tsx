import React from 'react';

interface InstagramIconProps {
  className?: string;
}

const InstagramIcon: React.FC<InstagramIconProps> = ({ className }) => {
  return (
    <svg
    width="37"
    height="37"
    viewBox="0 0 37 37"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circular border/background to match TwitterIcon */}
      <circle
        cx="18.5"
        cy="18.5"
        r="17.5"
        fill="none"
        stroke="#D0DAF5"
        strokeWidth="1.5"
        opacity="0.1"
      />
      {/* Instagram icon path, centered and scaled for 37x37 */}
      <g>
        <rect x="10" y="10" width="17" height="17" rx="5" stroke="#D0DAF5" strokeWidth="1.5" fill="none" />
        <circle cx="18.5" cy="18.5" r="3.5" stroke="#D0DAF5" strokeWidth="1.5" fill="none" />
        <circle cx="24.2" cy="13.8" r="1" fill="#D0DAF5" />
      </g>
    </svg>
  );
};

export default InstagramIcon; 