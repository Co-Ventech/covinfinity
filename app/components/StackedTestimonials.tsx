import React, { useState } from 'react';
import Section from './ui/Section';

interface Testimonial {
  id: number;
  name: string;
  time: string;
  message: string;
  avatar: string;
  actionType?: string;
  actionLabel?: string;
}

const StackedTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "John",
      time: "2:14 PM",
      message: "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours",
      avatar: "/john.png",
      actionType: "Create issue on Linear",
      actionLabel: "IOS-21"
    },
    {
      id: 2,
      name: "Tejas",
      time: "1:14 PM",
      message: "Our Command K menu doesn't trigger when I'm focused on a text field.",
      avatar: "/sarah.png",
      actionType: "Create issue on Linear",
      actionLabel: "IOS-22"
    },
    {
      id: 3,
      name: "Sarah",
      time: "11:32 AM",
      message: "The collaboration has been seamless, and the results speak for themselves!",
      avatar: "/sarah.png",
      actionType: "Deploy to production",
      actionLabel: "frontend-app"
    }
  ];

  const handleCardClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleNextCard = () => {
    setActiveIndex((activeIndex + 1) % testimonials.length);
  };

  return (
    <Section>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-white mb-4">
            What our{' '}
            <span className="bg-gradient-to-r from-[#FF6981] to-purple-400 bg-clip-text text-transparent">
              clients
            </span>{' '}
            say
          </h1>
          <p className="text-[#665F5F]">The most complete experience for businesses & individual clients</p>
        </div>

        {/* Date with parallel lines */}
        <div className="flex items-center justify-center my-8">
          <div className="h-[1px] w-16 bg-[#2E2928]"></div>
          <span className="mx-4 text-[#665F5F] text-sm">Wed, Aug 24</span>
          <div className="h-[1px] w-16 bg-[#2E2928]"></div>
        </div>

        {/* Stacked Cards Container */}
        <div className="relative h-[220px] w-full max-w-xl mx-auto perspective-1000">
          <div className="relative w-full h-full">
            {testimonials.map((testimonial, index) => {
              // Calculate position based on active index
              const isActive = index === activeIndex;
              const position = (index - activeIndex + testimonials.length) % testimonials.length;

              return (
                <div
                  key={index}
                  className={`absolute w-full transition-all duration-500 ${
                    position > 2 ? 'opacity-0' : `opacity-${100 - position * 20}`
                  }`}
                  style={{
                    zIndex: isActive ? 30 : 10 - position,
                    transform: `translateY(${position * 20}px) translateX(${position * 10}px) scale(${1 - position * 0.05})`,
                    top: 0,
                    cursor: isActive ? 'default' : 'pointer',
                  }}
                  onClick={() => !isActive && handleCardClick(index)}
                >
                  {/* Background stacked layers - positioned at top */}
                  <div className="absolute -top-6 right-3 w-full h-32 rounded-lg border border-gray-700 bg-black opacity-20 z-0" />
                  <div className="absolute -top-3 right-2 w-full h-36 rounded-lg border border-gray-700 bg-[#111111]/80 opacity-20 z-0" />

                  {/* Main Card */}
                  <div className="relative z-10 bg-[#111111]/80 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
                    <div className="flex gap-4 items-start">
                      {/* Profile Image */}
                      <div className="w-9 h-9 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-semibold text-white">{testimonial.name}</span>
                          <span className="text-xs text-[#665F5F]">{testimonial.time}</span>
                        </div>
                        <p className="text-sm text-[#A3A3A3]">{testimonial.message}</p>
                      </div>
                    </div>

                    {/* Action Section */}
                    <div className="flex justify-between mt-4">
                      {!isActive && <span className="text-xs text-[#665F5F]">Click to bring to front</span>}
                      {isActive && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleNextCard();
                          }}
                          className="text-xs text-[#665F5F] hover:text-white"
                        >
                          Next card →
                        </button>
                      )}
                      
                      <div className="flex items-center text-xs">
                        <button className="px-4 py-2 rounded-lg text-white bg-[#222222] hover:bg-[#333333] transition-colors">
                          {testimonial.actionType || "View details"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex gap-2 mt-12 justify-center">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === activeIndex ? "bg-white" : "bg-[#2E2928] hover:bg-[#665F5F]"
              }`}
              onClick={() => handleCardClick(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default StackedTestimonials; 