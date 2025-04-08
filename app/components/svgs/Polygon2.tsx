import React from 'react';

interface Polygon2Props {
  className?: string;
  radialColor?: string;
}

const Polygon2: React.FC<Polygon2Props> = ({ className, radialColor = '#171719' }) => {
  return (
    <svg
      width="1114"
      height="724"
      viewBox="0 0 1114 724"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_1_12063)">
        <path d="M557 80L1033.31 644L80.686 644L557 80Z" fill="url(#paint0_linear_1_12063)" />
      </g>
      <defs>
        <filter
          id="filter0_f_1_12063"
          x="0.686035"
          y="0"
          width="1112.63"
          height="724"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_12063" />
        </filter>
        <linearGradient
          id="paint0_linear_1_12063"
          x1="557"
          y1="644.669"
          x2="557"
          y2="80"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={radialColor} />
          <stop offset="1" stopColor={radialColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Polygon2;
