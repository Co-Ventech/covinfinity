import React from 'react';

interface Card {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const SERVICE_CARDS: Card[] = [
  {
    id: 0,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/phone-mockup.png',
  },
  {
    id: 1,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/phone-mockup.png',
  },
  {
    id: 2,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/phone-mockup.png',
  },
];

const Card: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="relative flex h-96 overflow-hidden rounded-lg bg-border-box p-8 lg:h-[30rem] xl:h-[39rem]">
      {/* Phone Image - Full Height */}
      <div className="!pointer-events-none absolute -bottom-20 left-1/3 h-full w-[60%] opacity-20">
        <img
          src={card.image}
          alt="phone mockup"
          className="pointer-events-none h-full w-full object-contain"
          style={{ objectPosition: 'center 15%' }}
        />
      </div>

      {/* Dark Overlay Gradient */}
      <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-border-box from-4% via-border-box/64 via-65% to-border-box/0"></div>

      <div className="text-content z-10 mt-auto flex w-full items-center justify-end">
        <div className="content">
          <h3 className="mb-2 text-lg font-semibold">{card.title}</h3>
          {card.description && <p className="font-serif">{card.description}</p>}
        </div>
        <div className="icon ml-auto">
          <button className="flex size-10 cursor-pointer items-center justify-center rounded-full bg-[#101112] text-2xl text-[#5D6267]">
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export const ServiceCards = () => {
  return (
    <div className="mb-3 grid grid-cols-1 gap-6 md:grid-cols-3">
      {SERVICE_CARDS.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};
