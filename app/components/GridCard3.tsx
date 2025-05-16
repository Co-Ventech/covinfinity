import PortfolioCard2 from './ui/PortfolioCard2';
import React, { useEffect, useState } from 'react';

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1020px)');
    const handleChange = () => setIsSmall(mediaQuery.matches);

    handleChange(); // Initial check
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isSmall;
};

const GridCard1 = () => {
  const isSmallScreen = useIsSmallScreen();
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
  const allportfolioItems = isSmallScreen ? portfolioItems.slice(0, 2) : portfolioItems;

  return (
    <section className="">
      {/* <div className="max-W-[75%] mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="">
        <div className="flex flex-col gap-8 md:flex-row">
          {allportfolioItems.map((item, index) => (
            <div key={index} className="flex-1">
              {' '}
              {/* Each card takes equal space */}
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
