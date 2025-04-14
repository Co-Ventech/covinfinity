import React from 'react';

interface CaseStudyIconProps {
  className?: string;
}

const CaseStudyIcon: React.FC<CaseStudyIconProps> = ({ className }) => {
  return (
    <svg
      width="23"
      height="22"
      viewBox="0 0 23 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M13.2371 13.75H4.95959C3.29125 13.75 2.22792 11.9625 3.03458 10.4959L5.17042 6.60918L7.16875 2.97001C8.00292 1.45751 10.1846 1.45751 11.0188 2.97001L13.0263 6.60918L13.9888 8.36001L15.1621 10.4959C15.9688 11.9625 14.9054 13.75 13.2371 13.75Z"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21.0929 14.2083C21.0929 17.4992 18.4254 20.1667 15.1346 20.1667C11.8438 20.1667 9.17627 17.4992 9.17627 14.2083C9.17627 14.0525 9.18544 13.9058 9.1946 13.75H13.2371C14.9054 13.75 15.9688 11.9625 15.1621 10.4958L13.9888 8.36C14.3554 8.28666 14.7404 8.25 15.1346 8.25C18.4254 8.25 21.0929 10.9175 21.0929 14.2083Z"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CaseStudyIcon;
