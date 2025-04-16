import React from 'react';

interface FramerIconProps {
  className?: string;
  currentColor?: string;
}

const FramerIcon: React.FC<FramerIconProps> = ({ className, currentColor = '#F0F2FF' }) => {
  return (
    <svg
      className={className}
      width="33"
      height="32"
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 13.9869V21.9069C6.5 22.3202 6.68666 22.7202 6.99333 22.9869L14.14 29.1069C15.0733 29.9069 16.5 29.2402 16.5 28.0269V22.5603H23.0467C24.3133 22.5603 24.9534 21.0269 24.06 20.1202L16.5 12.5603H7.92668C7.14001 12.5469 6.5 13.1869 6.5 13.9869Z"
        fill={currentColor}
      />
      <path
        d="M25.0731 2.54688H9.95306C8.6864 2.54688 8.04638 4.08019 8.93972 4.98686L16.4997 12.5469H25.0731C25.8597 12.5469 26.4997 11.9069 26.4997 11.1202V3.97355C26.4997 3.18688 25.8597 2.54688 25.0731 2.54688Z"
        fill={currentColor}
      />
    </svg>
  );
};

export default FramerIcon;
