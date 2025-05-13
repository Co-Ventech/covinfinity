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
      <div className="flex items-center gap-4 mb-4">
          <div className="h-10 w-10 ">
            <img src="/cross-icon.png" alt="Icon" className="" />
          </div>
       
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-gray-400 text-sm mb-6">{description}</p>

      {/* Single image display */}
      <div className="rounded-lg overflow-hidden">
        <img
          src={backgroundImage}
          alt={`Project screenshot`}
          className="rounded-md object-cover w-full h-[200px]"
        />
      </div>
    </Box>
  );
};

export default PortfolioCard;
