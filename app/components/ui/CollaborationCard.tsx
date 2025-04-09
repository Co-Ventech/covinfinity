import React from 'react';
import GhostIcon from '../svgs/GhostIcon';

interface CollaborationCardProps {
  title: string;
  description: string;
  className?: string;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({
  title,
  description,
  className = '',
}) => {
  return (
    <div className={`relative pl-5 ${className}`}>
      {/* Vertical line */}
      <div className="absolute top-0 left-0 h-6 w-[1px] bg-[#2E2928] opacity-40"></div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Icon and Title in a row */}
        <div className="mb-4 flex items-center">
          <GhostIcon className="mr-3 h-6 w-6" />
          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>

        <p className="text-sm text-[#665F5F]">{description}</p>
      </div>
    </div>
  );
};

export default CollaborationCard;
