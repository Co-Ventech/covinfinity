import React from 'react';
import PortfolioCard2 from './ui/PortfolioCard2';

const GridCard1 = () => {
  const portfolioItems = [
     {
      title: 'Party Shark',
      description:
        'party-shark Event Management App for Socializing Enthusiasts. Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },
    {
      title: 'Party Shark',
      description:
        'party-shark Event Management App for Socializing Enthusiasts. Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },
     {
      title: 'Party Shark',
      description:
        'party-shark Event Management App for Socializing Enthusiasts. Party Shark is an app designed for young partygoers',
      backgroundImage: '/card-grid2.png',
    },
  ];

  return (
    <section className="">
      <div className="max-W-[75%] mx-auto px-4 sm:px-6 lg:px-8">
      
        <div className="flex flex-col md:flex-row gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex-1"> {/* Each card takes equal space */}
              <PortfolioCard2
                title={item.title}
                description={item.description}
                backgroundImage={item.backgroundImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GridCard1;