import React from 'react';

interface CrownIconProps {
  className?: string;
}

const CrownIcon: React.FC<CrownIconProps> = ({ className }) => {
  return (
    <svg
      width="41"
      height="40"
      viewBox="0 0 41 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M37.1659 9.51715V25.4838C37.1659 30.0838 33.4326 33.8172 28.8326 33.8172H12.1659C11.3992 33.8172 10.6659 33.7171 9.94922 33.5171C8.91589 33.2338 8.58256 31.9171 9.34922 31.1505L27.0659 13.4338C27.4326 13.0671 27.9826 12.9838 28.4992 13.0838C29.0326 13.1838 29.6159 13.0338 30.0326 12.6338L34.3159 8.33382C35.8826 6.76715 37.1659 7.28382 37.1659 9.51715Z"
        fill="url(#paint0_linear_1_5641)"
      />
      <path
        d="M24.8987 12.2662L7.4487 29.7162C6.6487 30.5162 5.31536 30.3162 4.78203 29.3162C4.16536 28.1829 3.83203 26.8662 3.83203 25.4829V9.51621C3.83203 7.28288 5.11536 6.76621 6.68203 8.33288L10.982 12.6495C11.632 13.2829 12.6987 13.2829 13.3487 12.6495L19.3154 6.66621C19.9654 6.01621 21.032 6.01621 21.682 6.66621L24.9154 9.89954C25.5487 10.5495 25.5487 11.6162 24.8987 12.2662Z"
        fill="url(#paint1_linear_1_5641)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_5641"
          x1="0.5"
          y1="40"
          x2="37.6188"
          y2="-2.51546"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252528" />
          <stop offset="0.468" stopColor="#BB97F2" />
          <stop offset="0.783" stopColor="#FF7C91" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_1_5641"
          x1="0.500001"
          y1="40"
          x2="44.3361"
          y2="4.77365"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#252528" />
          <stop offset="0.468" stopColor="#BB97F2" />
          <stop offset="0.783" stopColor="#FF7C91" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CrownIcon;
