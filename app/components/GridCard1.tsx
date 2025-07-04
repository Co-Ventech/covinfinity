import React from 'react';
import PortfolioCard from './ui/PortfolioCard';

const GridCard1 = () => {
  const portfolioItems = [
    {
      title: 'AR-Powered Gold Training App',
      description:
        'Frontend Developer specialised in many tech and worked with xyz company graduated from xyc with xyz experience',
      backgroundImage: '/card-grid1.png',
    },
    {
      title: 'AR-Powered Gold Training App',
      description:
        'Frontend Developer specialised in many tech and worked with xyz company graduated from xyc with xyz experience',
      backgroundImage: '/card-grid1.png',
    },
  ];

  return (
    <section className="">
      <div className="mx-auto">
        <div className="flex flex-col gap-8 md:flex-row">
          {portfolioItems.map((item, index) => (
            <div key={index} className="flex-1">
              {' '}
              {/* Each card takes equal space */}
              <PortfolioCard
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
