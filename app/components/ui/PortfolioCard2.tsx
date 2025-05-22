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
    <Box className="mx-auto rounded-2xl bg-[#111] !p-0 text-white shadow-md">
      {/* Top image section */}
      <div className="mb-12 overflow-hidden rounded-xl">
        <img src={backgroundImage} alt="Project" className="h-[150px] w-full object-cover" />
      </div>

      {/* Icon + Title */}
      <div className="mx-6 mb-2 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center">
          {icon ? icon : <img src="/cross-icon.png" alt="Icon" className="w-full" />}
        </div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {/* Description */}
      <p className="mx-6 mb-6 w-[80%] text-[1rem] font-medium text-[#EBF5FF]/56">{description}</p>
    </Box>
  );
};

export default PortfolioCard2;
