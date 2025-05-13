import React from 'react';
import Box from '../ui/Box';

interface PortfolioCardProps {
  title: string;
  description: string;
  backgroundImage: string;
  icon?: React.ReactNode;
}

const PortfolioCard2: React.FC<PortfolioCardProps> = ({
  title,
  description,
  backgroundImage,
  icon,
}) => {
  return (
    <Box className="mx-auto max-w-sm rounded-2xl bg-[#111] p-4 text-white shadow-md">
      {/* Top image section */}
      <div className="mb-4 overflow-hidden rounded-xl">
        <img src={backgroundImage} alt="Project" className="h-[200px] w-full object-cover" />
      </div>

      {/* Icon + Title */}
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center">
          {icon ? icon : <img src="/cross-icon.png" alt="Icon" className="h-6 w-6" />}
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400">{description}</p>
    </Box>
  );
};

export default PortfolioCard2;
