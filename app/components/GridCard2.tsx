import React from 'react';
import PortfolioCard from './ui/PortfolioCard';
import PortfolioCard2 from './ui/PortfolioCard2';
import type GridCard1 from './GridCard1';

const GridCard2 = () => {
  const portfolioItems = [
    {
      title: 'AR-Powered Gold Training App Improving Skills',
      description:
        'Frontend Developer specialized in many tech and worked with xyz company graduated from xyc with xyz experience',
      backgroundImage: '/card-grid1.png',
    },
    {
      title: 'Party Shark',
      description:
        'party-shark Event Management App for Socializing Enthusiasts. Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },
    // Repeat or add more items as needed
  ];

  return (
    <section className="py-10">
      <div className="mx-auto max-w-[85%] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <PortfolioCard2
                  title={item.title}
                  description={item.description}
                  backgroundImage={item.backgroundImage}
                />
              ) : (
                <PortfolioCard2
                  title={item.title}
                  description={item.description}
                  backgroundImage={item.backgroundImage}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridCard2;
