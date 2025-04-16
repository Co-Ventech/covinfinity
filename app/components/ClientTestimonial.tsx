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
      how much time & money they saved with us such as “our hiring process so on and on and we landed 4 really talented individuals just in 24 hours 
      </p>

      {/* Date with parallel lines */}
      <div className="flex items-center gap-4 mb-8">
        <div className="w-16 h-px bg-gray-700"></div>
        <p className="text-sm text-gray-500 whitespace-nowrap">{testimonials[activeIndex].date}</p>
        <div className="w-16 h-px bg-gray-700"></div>
      </div>

      {/* Stacked Cards Container */}
      <div className="relative h-[220px] w-full max-w-xl mx-auto perspective-1000">
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
                  zIndex: isActive ? 30 : 10 - position,
                  y: position === 0 ? 0 : position === 1 ? 20 : position === 2 ? 40 : 0,
                  x: position === 0 ? 0 : position === 1 ? 10 : position === 2 ? 20 : 0,
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
                {/* Background stacked layers */}
                <div className="absolute -top-6 right-3 w-full h-32 rounded-lg border border-gray-700 bg-black opacity-20 z-0" />
                <div className="absolute bg-[#111111]/80 -top-3 right-2 w-full h-36 rounded-lg border border-gray-700 opacity-20 z-0" />

                {/* Main Card */}
                <div className="relative z-10 bg-[#111111]/80 border border-gray-800 rounded-xl p-6 backdrop-blur-sm">
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

      {/* Navigation dots */}
      <div className="flex gap-2 mt-12">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === activeIndex ? "bg-white" : "bg-gray-700 hover:bg-gray-500"
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


