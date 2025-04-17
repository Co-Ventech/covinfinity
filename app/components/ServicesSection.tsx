"use client"

import { useState } from "react"
import OutlineBox from "./ui/OutlineBox"
import Section from "./ui/Section"
export default function ServicesSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeCard, setActiveCard] = useState(0)

  const serviceCards = [
    {
      id: 0,
      title: "Quality Assurance",
      subtitle: "Something qa line goes here",
      description: "Title goes here",
      image: "/phone-mockup.png"
    },
    {
      id: 1,
      title: "Quality Assurance",
      subtitle: "Something qa line goes here",
      description: "Title goes here",
      image: "/phone-mockup.png"
    },
    {
      id: 2,
      title: "Quality Assurance",
      subtitle: "Something qa line goes here",
      description: "Title goes here",
      image: "/phone-mockup.png"
    }
  ]

  return (
    <Section>
    <div className="bg-black text-white  p-6 md:p-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-16 pt-8">
        <p className="text-[#665F5F] text-xs mb-4 tracking-[0.02em]">
          The most complete experience for businesses & individual clients
        </p>
        <h1 className="text-5xl font-semibold leading-[1.1] mb-4 tracking-tight">
          Services digital solution
        </h1>
        <h1 className="text-5xl font-semibold leading-[1.1] mb-4 tracking-tight">
          something goes here
        </h1>
      </div>

      {/* Main Content Wrapped in OutlineBox */}
      <OutlineBox>
        {/* Video Controls Section */}
        <div className=" mx-auto mb-8 flex items-center gap-4">
          <div className="w-36 h-[5.2rem]">
            <img
              src='/services-icon.png'
              alt="blue hunt"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Digital Solution Section */}
        <div className="mx-auto mb-12">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h2 className="text-xl font-semibold">Digital solution we do too</h2>
              <p className="text-[#665F5F] text-sm">Fintech, Category, New Category</p>
            </div>
            <div className="flex gap-2">
              <button className="w-8 h-8 ">
                <img
                  src='/left-arrow.png'
                  alt="left arrow"
                  className="h-full w-full"
                />
              </button>
              <button className="w-8 h-8 ">
                <img
                  src='/right-arrow.png'
                  alt="right arrow"
                  className="h-full w-full"
                />
              </button>
            </div>
          </div>

          {/* Service Cards */}
         <div className="w-full p-5 rounded-3xl border-[0.1125rem] border-[#1F1F1F] lg:bg-cover bg-center"
          style={{
            backgroundImage: "url('/service-back.png')"
          }}

         >
            <div className="  grid grid-cols-1 md:grid-cols-3 gap-6"
              >
              
              {serviceCards.map((card, index) => (
                <div 
                  key={card.id} 
                  className={`relative group cursor-pointer transition-all duration-300 rounded-xl overflow-hidden h-[420px]
                    ${activeCard === index 
                      ? 'bg-[#1A1A1A]' 
                      : 'bg-[#0F0F0F]'}`}
                  onClick={() => setActiveCard(index)}
                >
                  {/* Phone Image - Full Height */}
                  <div className="absolute inset-0 left-1/3 w-[60%] h-full">
                    <img 
                      src={card.image} 
                      alt="phone mockup" 
                      className={`h-full w-full object-contain transition-opacity duration-300
                        ${activeCard === index ? 'opacity-100 ' : 'opacity-40'}`}
                      style={{
                        objectPosition: 'center 15%'
                      }}
                    />
                  </div>
                  
                  {/* Dark Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-[#000000]/80 to-transparent pointer-events-none"></div>

                  {/* Text Content Section - Bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 flex justify-between items-end">
                    <div>
                      <p className="text-[#665F5F] text-sm mb-2">{card.subtitle}</p>
                      <h3 className={`text-xl font-semibold mb-1 transition-colors duration-300
                        ${activeCard === index ? 'text-white' : 'text-[#A3A3A3]'}`}>
                        {card.title}
                      </h3>
                      <p className="text-[#665F5F] text-sm">{card.description}</p>
                    </div>
                    
                    {/* Plus Button */}
                    <button 
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 self-end
                        ${activeCard === index 
                          ? 'bg-white/20' 
                          : 'bg-white/5'}`}
                    >
                      <span className="text-xl text-white">+</span>
                    </button>
                  </div>

                 

                  {/* Active Card Highlight Effect */}
                  {activeCard === index && (
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-t from-[#FF6981]/5 to-transparent opacity-50" />
                    </div>
                  )}
                </div>
              ))}
            </div>
             {/* Developer Section */}
             
        <div className="max-w-full   mt-12 mx-auto rounded-3xl border-[0.1125rem] border-[#1F1F1F] bg-black  p-6">
          <h3 className="text-lg font-bold mb-2">Hey! Tell us all the things 👋</h3>
          <p className="w-[40rem] text-gray-400 text-sm mb-4">
            John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js. He creates clean,
            highly-maintainable, tested UI layouts, and loves open source.
          </p>
          <div className="flex gap-3 mb-6">
            <button className="px-4 py-1 bg-none border-[0.1125rem] border-[#252122] rounded-full text-sm">Frontend Dev</button>
            <button className="px-4 py-1 bg-none border-[0.1125rem] border-[#252122]  rounded-full text-sm">Frontend Dev</button>
            <button className="px-4 py-1 bg-none border-[0.1125rem] border-[#252122]  rounded-full text-sm">Frontend Dev</button>
          </div>
          <div className="relative">
            <div className="flex items-center px-3 py-2 rounded-lg bg-[#1A1A1A]/80 backdrop-blur-sm">
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
          <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 h-56">
            <div className="">
              <img
                src='/blue-hunt.png'
                alt="blue hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
            <div className="">
              <img
                src='/red-hunt.png'
                alt="red hunt"
                className="h-full w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </OutlineBox>
      </OutlineBox>
    </div>
    </Section>
  )
}