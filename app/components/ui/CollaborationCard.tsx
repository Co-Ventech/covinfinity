import React from 'react';
import GhostIcon from '../svgs/GhostIcon';


interface CollaborationCardProps {
  title: string;
  description: string;
  icon: string; // image path
  className?: string;
}

const CollaborationCard: React.FC<CollaborationCardProps> = ({
  title,
  description,
  icon,
  className = '',
}) => {
  // Format the description text with line breaks
  const formatDescription = (text: string) => {
    // Break after "with your"
    return text
      .replace('with your', 'with your<br>')
      .split('<br>')
      .map((part, index) => (
        <React.Fragment key={index}>
          {index > 0 && <br />}
          {part}
        </React.Fragment>
      ));
  };

  return (
    <div className={`relative pl-5 ${className}`}>
      {/* Single vertical line shown in reference */}
      <div className="absolute top-0 left-0 h-6 w-[1px] bg-[#2E2928] opacity-40"></div>

      {/* Content */}
      <div className="flex flex-col">
        {/* Icon and Title in a row */}
        <div className="mb-2 flex items-center">
          <img src={icon} alt={title + ' icon'} className="mr-3 h-6 w-6 object-contain" />
          <h3 className="text-base font-semibold text-white">{title}</h3>
        </div>

        <p className="text-sm leading-relaxed text-[#665F5F]">{formatDescription(description)}</p>
      </div>
    </div>
  );
};

export default CollaborationCard;
