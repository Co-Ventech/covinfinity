import React from 'react';

interface Polygon1Props {
  className?: string;
}

const Polygon1: React.FC<Polygon1Props> = ({ className }) => {
  return (
    <svg
      width="770"
      height="522"
      viewBox="0 0 770 522"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter="url(#filter0_f_1_12062)">
        <path
          d="M385 442L80.159 80.5L689.841 80.5001L385 442Z"
          fill="url(#paint0_linear_1_12062)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_12062"
          x="0.15918"
          y="0.5"
          width="769.682"
          height="521.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_1_12062" />
        </filter>
        <linearGradient
          id="paint0_linear_1_12062"
          x1="385"
          y1="80.0712"
          x2="385"
          y2="442"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#171719" />
          <stop offset="1" stopColor="#171719" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Polygon1;
