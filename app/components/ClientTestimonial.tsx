'use client';

import { useState, useEffect, useRef } from 'react';

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: 'John',
      time: '2:14 PM',
      image: '/john.png',
      message:
        'our hiring process so on and on and we landed 4 really talented individuals just in 24 hours',
      date: 'Wed, Aug 24',
      action: 'Click to action',
      backContent: 'Additional information about John and his experience with our service.',
    },
    {
      name: 'Tejas',
      time: '1:14 PM',
      image: '/john.png',
      message:
        'our hiring process so on and on and we landed 4 really talented individuals just in 24 hours',
      date: 'Thu, Aug 25',
      action: 'Create issue on Linear',
      backContent:
        'More details about Tejas and how our platform helped streamline their workflow.',
    },
    {
      name: 'Sarah',
      time: '11:32 AM',
      image: '/sarah.png',
      message:
        'our hiring process so on and on and we landed 4 really talented individuals just in 24 hours',
      date: 'Fri, Aug 26',
      action: 'View deployment',
      backContent: "Sarah's full testimonial about how our service exceeded her expectations.",
    },
  ];

  // Set up automatic card rotation
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000); // Change card every 3 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  return (
    <div className="relative flex min-h-[600px] w-full flex-col items-center justify-center px-4 py-16 text-center text-white">
      {/* Logo */}
      <div className="mb-6">
        <img src="/crown.png" alt="Crown" className="h-12 w-auto" />
      </div>

      {/* Heading */}
      <h2 className="mb-3 text-2xl font-medium">Client review saying something</h2>

      {/* Subheading */}
      <p className="mx-auto mb-10 max-w-xl text-sm leading-relaxed text-gray-400">
        how much time & money they saved with us such as "our hiring process so on and on and we
        landed 4 really talented individuals just in 24 hours
      </p>

      {/* Date with parallel lines */}
      <div className="mb-8 flex items-center gap-4">
        <div className="h-px w-16 bg-[#262224]"></div>
        <p className="text-sm whitespace-nowrap text-[#262224]">{testimonials[activeIndex].date}</p>
        <div className="h-px w-16 bg-[#262224]"></div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative mx-auto mt-20 h-[220px] w-full max-w-xl md:max-w-xl lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
        <div className="relative h-full w-full">
          {testimonials.map((testimonial, index) => {
            // Calculate position based on active index
            const isActive = index === activeIndex;
            const position = (index - activeIndex + testimonials.length) % testimonials.length;

            return (
              <div
                key={index}
                className="absolute w-full"
                style={{
                  zIndex: isActive ? 30 : 20 - position,
                  transform: `translateY(${position === 0 ? 0 : position === 1 ? -15 : position === 2 ? -30 : 0}px) 
                              translateX(${position === 0 ? 0 : position === 1 ? 2 : position === 2 ? 2 : 0}px) 
                              scale(${1 - position * 0.05})`,
                  opacity: position > 2 ? 0 : 1 - position * 0.2,
                  transformOrigin: 'center top',
                  transition: 'all 0.5s ease',
                }}
              >
                {/* Card with solid background to prevent transparency */}
                <div className="relative rounded-xl border border-gray-800 bg-[#1A1717]/80 p-6 shadow-lg backdrop-blur-2xl">
                  {/* Solid background layer to prevent transparency */}
                  <div
                    className={`absolute inset-0 rounded-xl bg-[#1A1717]/24 ${!isActive ? 'bg-[#1A1717]/48 backdrop-blur-3xl' : 'backdrop-blur-2xl'}`}
                  ></div>

                  {/* Card content */}
                  <div className="relative z-10 flex items-start gap-4">
                    {/* Profile Image */}
                    <div className="h-9 w-9 flex-shrink-0 overflow-hidden rounded-full bg-gray-600">
                      <img
                        src={testimonial.image || '/placeholder.svg'}
                        alt={testimonial.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="mb-1 flex items-center gap-2">
                        <span className="text-sm font-semibold text-white">{testimonial.name}</span>
                        <span className="text-xs text-gray-500">{testimonial.time}</span>
                      </div>
                      <p className="text-sm text-gray-400">{testimonial.message}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="relative z-10 mt-4 flex items-center justify-start">
                    {/* <span className="text-xs text-gray-600">
                      Auto-rotating
                    </span> */}
                    <button className="ml-auto rounded-lg bg-[#222222] px-4 py-2 text-xs text-white transition-colors hover:bg-[#333333]">
                      {testimonial.action}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
