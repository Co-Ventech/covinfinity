'use client';

import { useState } from 'react';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';
import Heading from './ui/Heading';
export default function ServicesSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeCard, setActiveCard] = useState(0);

  const serviceCards = [
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

  return (
    <Section>
      <div className="text-white">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <p className="mb-4 text-base font-medium tracking-[0.02em] text-[#797B8A]">
            The most complete experience for businesses & individual clients
          </p>
          <Heading
            blockText="something goes here"
            className="!mb-16 !pb-1 !font-sans !font-semibold"
          >
            Services digital solution
          </Heading>
          {/* <h1 className="mb-4 text-5xl leading-[1.1] font-semibold tracking-tight">
            Services digital solution
          </h1>
          <h1 className="mb-4 text-5xl leading-[1.1] font-semibold tracking-tight">
            something goes here
          </h1> */}
        </div>

        {/* Main Content Wrapped in OutlineBox */}
        <OutlineBox className="!rounded-3xl !border-[#31292A] !p-4">
          {/* Video Controls Section */}
          <div className="mt-20 mb-3 ml-11 flex items-center gap-4">
            <div className="h-24 w-40">
              <img
                src="/services-icon.png"
                alt="blue hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Digital Solution Section */}
          <div className="mb-6">
            <div className="mb-7 flex items-center justify-between">
              <div className="ml-11">
                <h2 className="text-xl font-semibold">Digital solution we do too</h2>
                <p className="text-base font-medium text-[#665F5F]">
                  Fintech, Category, New Category
                </p>
              </div>
              <div className="flex gap-2">
                <button className="h-8 w-8">
                  <img src="/left-arrow.png" alt="left arrow" className="h-full w-full" />
                </button>
                <button className="h-8 w-8">
                  <img src="/right-arrow.png" alt="right arrow" className="h-full w-full" />
                </button>
              </div>
            </div>

            {/* Service Cards */}
            <div
              className="w-full rounded-3xl border-[0.1125rem] border-[#272525] bg-[#1A1717]/48 bg-center p-6 lg:bg-cover"
              style={{
                backgroundImage: "url('/service-back.png')",
              }}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {serviceCards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`group relative h-[420px] cursor-pointer overflow-hidden rounded-xl transition-all duration-300 ${
                      activeCard === index ? 'bg-[#1A1A1A]' : 'bg-[#0F0F0F]'
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    {/* Phone Image - Full Height */}
                    <div className="absolute inset-0 left-1/3 h-full w-[60%]">
                      <img
                        src={card.image}
                        alt="phone mockup"
                        className={`h-full w-full object-contain transition-opacity duration-300 ${activeCard === index ? 'opacity-100' : 'opacity-40'}`}
                        style={{
                          objectPosition: 'center 15%',
                        }}
                      />
                    </div>

                    {/* Dark Overlay Gradient */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent"></div>

                    {/* Text Content Section - Bottom */}
                    <div className="absolute right-0 bottom-0 left-0 z-10 flex items-end justify-between p-6">
                      <div>
                        <p className="mb-2 text-sm text-[#665F5F]">{card.subtitle}</p>
                        <h3
                          className={`mb-1 text-xl font-semibold transition-colors duration-300 ${activeCard === index ? 'text-white' : 'text-[#A3A3A3]'}`}
                        >
                          {card.title}
                        </h3>
                        <p className="text-sm text-[#665F5F]">{card.description}</p>
                      </div>

                      {/* Plus Button */}
                      <button
                        className={`flex h-8 w-8 items-center justify-center self-end rounded-full transition-all duration-300 ${
                          activeCard === index ? 'bg-white/20' : 'bg-white/5'
                        }`}
                      >
                        <span className="text-xl text-white">+</span>
                      </button>
                    </div>

                    {/* Active Card Highlight Effect */}
                    {activeCard === index && (
                      <div className="pointer-events-none absolute inset-0">
                        <div className="absolute inset-0 bg-gradient-to-t from-[#FF6981]/5 to-transparent opacity-50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* Developer Section */}

              <div className="mx-auto mt-12 max-w-full rounded-3xl border-[0.1125rem] border-[#1F1F1F] bg-black p-6">
                <h3 className="mb-2 text-lg font-bold">Hey! Tell us all the things 👋</h3>
                <p className="mb-4 w-[40rem] text-sm text-gray-400">
                  John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js.
                  He creates clean, highly-maintainable, tested UI layouts, and loves open source.
                </p>
                <div className="mb-6 flex gap-3">
                  <button className="rounded-full border-[0.1125rem] border-[#252122] bg-none px-4 py-1 text-sm">
                    Frontend Dev
                  </button>
                  <button className="rounded-full border-[0.1125rem] border-[#252122] bg-none px-4 py-1 text-sm">
                    Frontend Dev
                  </button>
                  <button className="rounded-full border-[0.1125rem] border-[#252122] bg-none px-4 py-1 text-sm">
                    Frontend Dev
                  </button>
                </div>
                <div className="relative">
                  <div className="flex items-center rounded-lg bg-[#1A1A1A]/80 px-3 py-2 backdrop-blur-sm">
                    <div className="flex flex-1 items-center">
                      <img src="/input-icon.png" alt="Add" className="mr-2 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="I am interested in"
                        className="flex-1 bg-transparent text-[13px] text-white placeholder-[#665F5F] focus:outline-none"
                      />
                    </div>
                    <div className="flex items-center space-x-3">
                      <img src="/pen-icon.png" alt="Thumb" className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clutch Reviews Section */}
          <OutlineBox>
            <div className="mx-auto grid h-56 grid-cols-1 gap-6 md:grid-cols-2">
              <div className="">
                <img
                  src="/blue-hunt.png"
                  alt="blue hunt"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
              <div className="">
                <img
                  src="/red-hunt.png"
                  alt="red hunt"
                  className="h-full w-full rounded-2xl object-cover"
                />
              </div>
            </div>
          </OutlineBox>
        </OutlineBox>
      </div>
    </Section>
  );
}
