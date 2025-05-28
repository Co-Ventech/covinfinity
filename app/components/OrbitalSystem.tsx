"use client"

import { motion } from "framer-motion"

interface OrbitalSystemProps {
  className?: string
  activeChat: number
  setActiveChat: (index: number) => void
  isLiveChat: boolean
}

export default function OrbitalSystem({ className = "", activeChat, setActiveChat, isLiveChat }: OrbitalSystemProps) {
  // Define 8 orbital radii (but only 7 objects, skipping index 6 which is the 7th orbit)
  const orbits = [60, 90, 120, 150, 180, 210, 240, 270]
  const objectOrbits = [0, 1, 2, 3, 4, 5, 7] // Skip index 6 (7th orbit)

  function handleClick(objectIndex: number) {
    if (objectIndex === 5 || isLiveChat) return;
    setActiveChat(objectIndex);
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="relative w-[600px] h-[600px]">
        <svg viewBox="0 0 600 600" className="w-full h-full">
          {/* Define the gradient */}
          <defs>
            {/* Active line gradient */}
            <linearGradient id="activeLineGradient" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#D0CDFF" stopOpacity="1" />
              <stop offset="50%" stopColor="#AFA1FF" stopOpacity="1" />
              <stop offset="100%" stopColor="#7169FF" stopOpacity="0" />
            </linearGradient>

            {/* Non-active line gradient */}
            <linearGradient
              id="inactiveLineGradient"
              gradientUnits="userSpaceOnUse"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#252529" stopOpacity="1" />
              <stop offset="60%" stopColor="#252529" stopOpacity="1" />
              <stop offset="100%" stopColor="#37373D" stopOpacity="1" />
            </linearGradient>

            {orbits.map((radius, index) => (
              objectOrbits.includes(index) && (
                <linearGradient
                  key={`gradient-${index}`}
                  id={`activeLineGradient-${index}`}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform={`rotate(90, 300, 300)`}
                >
                  <stop offset="0%" stopColor="#D0CDFF" stopOpacity="1" />
                  <stop offset="50%" stopColor="#AFA1FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7169FF" stopOpacity="0" />
                </linearGradient>
              )
            ))}
          </defs>

          {/* Orbital circles */}
          {orbits.map((radius, index) => (
            <motion.circle
              key={index}
              cx="300"
              cy="300"
              r={radius}
              fill="none"
              stroke={objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeChat ? `url(#activeLineGradient-${index})` : "url(#inactiveLineGradient)"}
              strokeWidth="1"
              initial={{ opacity: 0.6 }}
              animate={{
                opacity: objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeChat ? 1 : 0.6,
                scale: objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeChat ? 1.02 : 1
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}

          {/* Rotating objects */}
          {objectOrbits.map((orbitIndex, objectIndex) => {
            const radius = orbits[orbitIndex]
            const isActive = objectIndex === activeChat
            const isUserChat = objectIndex === 5

            return (
              <g key={objectIndex}>
                <g
                  style={{
                    transformOrigin: "300px 300px",
                    animation: `rotate-${objectIndex} ${45 + objectIndex * 8}s linear infinite`,
                  }}
                >
                  <motion.image
                    href={isActive ? "/orbit-active.png" : "/orbit-not-active.png"}
                    x={280 + radius}
                    y={280}
                    width="40"
                    height="40"
                    className={`${isUserChat ? '' : 'cursor-pointer'}`}
                    whileHover={isUserChat ? {} : {
                      scale: 1.15,
                      transition: { duration: 0.2 }
                    }}
                    animate={{
                      scale: isActive ? [1, 1.1, 1] : 1,
                      opacity: isActive ? 1 : isUserChat ? 0.5 : 0.8,
                    }}
                    transition={{
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                      opacity: { duration: 0.3 }
                    }}
                    onClick={() => handleClick(objectIndex)}
                  />
                </g>
              </g>
            )
          })}
        </svg>

        {/* CSS animations for rotation */}
        <style>{`
          .pause-all-animations * {
            animation-play-state: paused !important;
          }
          @keyframes rotate-0 {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          @keyframes rotate-1 {
            from { transform: rotate(150deg); }
            to { transform: rotate(510deg); }
          }
          @keyframes rotate-2 {
            from { transform: rotate(240deg); }
            to { transform: rotate(600deg); }
          }
          @keyframes rotate-3 {
            from { transform: rotate(45deg); }
            to { transform: rotate(405deg); }
          }
          @keyframes rotate-4 {
            from { transform: rotate(190deg); }
            to { transform: rotate(550deg); }
          }
          @keyframes rotate-5 {
            from { transform: rotate(300deg); }
            to { transform: rotate(660deg); }
          }
          @keyframes rotate-6 {
            from { transform: rotate(120deg); }
            to { transform: rotate(480deg); }
          }
        `}</style>
      </div>
    </div>
  )
}