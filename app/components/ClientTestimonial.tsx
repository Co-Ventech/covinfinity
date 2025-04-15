"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials = [
    {
      name: "John",
      time: "2:14 PM",
      image: "/john.png",
      message: "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours",
      date: "Wed, Aug 24",
      action: "Click to action",
    },
    {
      name: "Tejas",
      time: "1:14 PM",
      image: "/john.png",
      message: "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours",
      date: "Thu, Aug 25",
      action: "Create issue on Linear",
    },
    {
      name: "Sarah",
      time: "11:32 AM",
      image: "/sarah.png",
      message: "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours",
      date: "Fri, Aug 26",
      action: "View deployment",
    },
  ]

  return (
    <div className="relative w-full min-h-[600px] flex flex-col items-center justify-center text-center text-white px-4 py-16 bg-black">
      {/* Logo */}
      <div className="mb-6">
        <img src="/crown.png" alt="Crown" className="h-12 w-auto" />
      </div>

      {/* Heading */}
      <h2 className="text-2xl font-medium mb-3">Client review saying something</h2>

      {/* Subheading */}
      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm leading-relaxed">
      how much time & money they saved with us such as "our hiring process so on and on and we landed 4 really talented individuals just in 24 hours 
      </p>

      {/* Date with parallel lines */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-px bg-[#262224]"></div>
        <p className="text-sm text-[#262224] whitespace-nowrap">{testimonials[activeIndex].date}</p>
        <div className="w-16 h-px bg-[#262224]"></div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative h-[220px] mt-20 w-full max-w-xl mx-auto perspective-1000">
        <div className="relative w-full h-full">
          {testimonials.map((testimonial, index) => {
            // Calculate position based on active index
            const isActive = index === activeIndex
            const position = (index - activeIndex + testimonials.length) % testimonials.length

            return (
              <motion.div
                key={index}
                className="absolute w-full"
                initial={false}
                animate={{
                  zIndex: isActive ? 30 : 20 + position,
                  y: position === 0 ? 0 : position === 1 ? -15 : position === 2 ? -30 : 0,
                  x: position === 0 ? 0 : position === 1 ? 2 : position === 2 ? 2 : 0,
                  scale: 1 - position * 0.05,
                  opacity: position > 2 ? 0 : 1 - position * 0.2,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
                onClick={() => setActiveIndex(index)}
                style={{
                  transformOrigin: "center top",
                  cursor: isActive ? "default" : "pointer",
                }}
              >
                {/* Background blur layer - only for non-active cards */}
                {!isActive && (
                  <div className={`absolute inset-0 rounded-xl backdrop-blur-md ${
                    position === 1 ? 'bg-[#111111]/90' : 'bg-[#111111]/80  backdrop-blur-md'
                  }`} />
                )}

                {/* Main Card */}
                <div className={`relative z-10 border border-gray-800 rounded-xl p-6 ${
                  isActive ? 'bg-[#111111]/80 backdrop-blur-3xl' : 'bg-transparent backdrop-blur-3xl'
                }`}>
                  <div className="flex gap-4 items-start">
                    {/* Profile Image */}
                    <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-600 flex-shrink-0">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-white">{testimonial.name}</span>
                        <span className="text-xs text-gray-500">{testimonial.time}</span>
                      </div>
                      <p className="text-sm text-gray-400">{testimonial.message}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex justify-between mt-4">
                    {!isActive && <span className="text-xs text-gray-600">Click to bring to front</span>}
                    {isActive && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveIndex((activeIndex + 1) % testimonials.length)
                        }}
                        className="text-xs text-gray-600 hover:text-gray-400"
                      >
                        Next card →
                      </button>
                    )}
                    <button className="px-4 py-2 rounded-lg text-xs text-white bg-[#222222] hover:bg-[#333333] transition-colors">
                      {testimonial.action}
                    </button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}


