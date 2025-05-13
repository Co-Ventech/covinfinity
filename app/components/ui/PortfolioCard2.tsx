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
    <Box className="bg-[#111] rounded-2xl p-4 text-white shadow-md max-w-sm mx-auto">
      {/* Top image section */}
      <div className="rounded-xl overflow-hidden mb-4">
        <img
          src={backgroundImage}
          alt="Project"
          className="w-full h-[200px] object-cover"
        />
      </div>

      {/* Icon + Title */}
      <div className="flex items-center gap-3 mb-2">
        <div className="h-8 w-8 flex items-center justify-center">
          {icon ? (
            icon
          ) : (
            <img src="/cross-icon.png" alt="Icon" className="w-6 h-6" />
          )}
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400">{description}</p>
    </Box>
  );
};

export default PortfolioCard2;
