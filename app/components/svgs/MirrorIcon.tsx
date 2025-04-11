import React from 'react';

interface MirrorIconProps {
  className?: string;
}

const MirrorIcon: React.FC<MirrorIconProps> = ({ className }) => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.9865 15C14.6684 15 17.6532 12.0152 17.6532 8.33332C17.6532 4.65142 14.6684 1.66666 10.9865 1.66666C7.30459 1.66666 4.31982 4.65142 4.31982 8.33332C4.31982 12.0152 7.30459 15 10.9865 15Z"
        fill="white"
      />
      <path
        d="M15.9863 18.9583H5.98633C5.64466 18.9583 5.36133 18.675 5.36133 18.3333C5.36133 17.9917 5.64466 17.7083 5.98633 17.7083H15.9863C16.328 17.7083 16.6113 17.9917 16.6113 18.3333C16.6113 18.675 16.328 18.9583 15.9863 18.9583Z"
        fill="white"
      />
    </svg>
  );
};

export default MirrorIcon;
