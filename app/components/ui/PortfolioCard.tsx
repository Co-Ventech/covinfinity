import React from 'react';
import Box from '../ui/Box';

interface PortfolioCardProps {
  title: string;
  description: string;
  backgroundImage: string; // Changed from backgroundImages (array) to backgroundImage (string)
  icon?: React.ReactNode;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({
  title,
  description,
  backgroundImage, // Changed prop name
  icon,
}) => {
  return (
    <Box className="!p-0">
      <div className="mb-2 mt-6  px-6 flex items-center gap-4">
        <div className="h-10 w-10">
          <img src="/cross-icon.png" alt="Icon" className="" />
        </div>

        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mb-8 px-6 text-sm max-w-[90%] text-[#EBF5FF]/56 font-medium">{description}</p>

      {/* Single image display */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={backgroundImage}
          alt={`Project screenshot`}
          className="rounded-md object-cover w-full h-[180px]"
        />
      </div>
    </Box>
  );
};

export default PortfolioCard;
