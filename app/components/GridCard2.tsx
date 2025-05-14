import React from 'react';
import PortfolioCard from './ui/PortfolioCard';
import PortfolioCard2 from './ui/PortfolioCard2';

const GridCard2 = () => {
  const portfolioItems = [
   {
      title: 'Party Shark',
      description: 'Party-shark Event Management App for Socializing Enthusiasts Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },

    {
      title: 'AR-Powered Gold Training App Improving Skills',
      description: 'Frontend Developer specialized in many tech and worked with xyz company graduated from xyc with xyz experience',
      backgroundImage: '/card-grid1.png',
    },
    {
      title: 'Party Shark',
      description: 'Party-shark Event Management App for Socializing Enthusiasts Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },
  ];

  return (
    <section className="py-10">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-7 gap-4">
          {/* First large card spanning two columns */}
          <div className="col-span-2 col-start-1">
            <PortfolioCard2
              title={portfolioItems[0].title}
              description={portfolioItems[0].description}
              backgroundImage={portfolioItems[0].backgroundImage}
            />
          </div>
          
          {/* First small card in top right */}
          <div className="col-span-3 col-start-3">
            <PortfolioCard
              title={portfolioItems[1].title}
              description={portfolioItems[1].description}
              backgroundImage={portfolioItems[1].backgroundImage}
            />
          </div>
          
          {/* Second small card in bottom right */}
          <div className="col-span-2 col-start-6">
            <PortfolioCard2
              title={portfolioItems[2].title}
              description={portfolioItems[2].description}
              backgroundImage={portfolioItems[2].backgroundImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridCard2;

