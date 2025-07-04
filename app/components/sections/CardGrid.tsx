import React from 'react';
import PortfolioCard from '../ui/PortfolioCard';
import GridCard1 from '../GridCard1';
import GridCard2 from '../GridCard2';
import GridCard3 from '../GridCard3';

const CardGridSection = () => {
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
      {/* <div className="mx-auto px-4 sm:px-6 lg:px-8"> */}
      <div className="">
        <GridCard1 />
        <GridCard2 />
        <GridCard3 />
      </div>
    </section>
  );
};

export default CardGridSection;
