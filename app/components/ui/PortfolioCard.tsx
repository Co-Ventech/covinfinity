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
    <Box className="">
      <div className="mb-4 flex items-center gap-4">
        <div className="h-10 w-10">
          <img src="/cross-icon.png" alt="Icon" className="" />
        </div>

        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="mb-6 text-sm text-gray-400">{description}</p>

      {/* Single image display */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={backgroundImage}
          alt={`Project screenshot`}
          className="h-[200px] w-full rounded-md object-cover"
        />
      </div>
    </Box>
  );
};

export default PortfolioCard;
