import React from 'react';
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

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
    image: '/software2nd1.png',
  },
  {
    id: 1,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/qa2nd2.png',
  },
  {
    id: 2,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/ui-ux2nd.png',
  },
  {
    id: 3,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/devops2nd.png',
  },
  {
    id: 4,
    title: 'Quality Assurance',
    subtitle: 'Something qa line goes here',
    description: 'Title goes here',
    image: '/cyber2nd.png',
  },
];

const Card: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="relative flex h-96 overflow-hidden rounded-lg bg-border-box  lg:h-[30rem] xl:h-[39rem]">
      {/* Phone Image - Full Height */}
      <div className="!pointer-events-none absolute w-full  h-full  opacity-20">
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
    <div className="mb-3">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {SERVICE_CARDS.map((card) => (
          <SwiperSlide key={card.id} className="">
            <Card card={card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};