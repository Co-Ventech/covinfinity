"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { aeChatData } from "~/data/chatData"

type OrbitalContextType = {
  activeObject: number
  setActiveObject: (index: number) => void
  isHovering: boolean
  setIsHovering: (state: boolean) => void
}

const OrbitalContext = createContext<OrbitalContextType | null>(null)

export function useOrbital() {
  const context = useContext(OrbitalContext)
  if (!context) {
    throw new Error("useOrbital must be used within an OrbitalSystem")
  }
  return context
}

interface OrbitalSystemProps {
  children: ReactNode
  autoRotate?: boolean
  rotationInterval?: number
  initialActive?: number
}

export function OrbitalSystem({
  children,
  autoRotate = true,
  rotationInterval = 7000,
  initialActive = 4
}: OrbitalSystemProps) {
  const [activeObject, setActiveObject] = useState(initialActive)
  const [isHovering, setIsHovering] = useState(false)
  const [isUserChatActive, setIsUserChatActive] = useState(false)

  // Function to get next valid object index
  const getNextValidIndex = (currentIndex: number) => {
    let nextIndex = (currentIndex + 1) % 7;
    // Skip index 5 (user chat) during auto rotation
    return nextIndex === 5 ? (nextIndex + 1) % 7 : nextIndex;
  };

  // Update active object handler
  const handleSetActiveObject = (index: number) => {
    setActiveObject(index);
    if (index === 5) {
      setIsUserChatActive(true);
    }
  };

  useEffect(() => {
    // Don't auto-rotate if:
    // 1. autoRotate is false
    // 2. user is hovering
    // 3. user chat is active
    if (!autoRotate || isHovering || isUserChatActive) return;

    const interval = setInterval(() => {
      setActiveObject(prev => getNextValidIndex(prev));
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [autoRotate, rotationInterval, isHovering, isUserChatActive]);

  return (
    <OrbitalContext.Provider value={{
      activeObject,
      setActiveObject: handleSetActiveObject,
      isHovering,
      setIsHovering
    }}>
      {children}
    </OrbitalContext.Provider>
  )
}

// The actual orbital visualization component
interface OrbitProps {
  className?: string
  onChatChange?: (chats: any[]) => void
}

function Orbit({ className = "", onChatChange }: OrbitProps) {
  const { activeObject, setActiveObject } = useOrbital()

  function handleClick(objectIndex: number) {
    // Prevent clicking on user chat object (index 5)
    if (objectIndex === 5) return;

    if (onChatChange) {
      onChatChange(aeChatData.at(objectIndex) || [])
    }
    setActiveObject(objectIndex)
  }

  // Define 8 orbital radii (but only 7 objects, skipping index 6 which is the 7th orbit)
  const orbits = [60, 90, 120, 150, 180, 210, 240, 270]
  const objectOrbits = [0, 1, 2, 3, 4, 5, 7] // Skip index 6 (7th orbit)

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
              stroke={objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeObject ? `url(#activeLineGradient-${index})` : "url(#inactiveLineGradient)"}
              strokeWidth="1"
              initial={{ opacity: 0.6 }}
              animate={{
                opacity: objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeObject ? 1 : 0.6,
                scale: objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeObject ? 1.02 : 1
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
          ))}

          {/* Rotating objects */}
          {objectOrbits.map((orbitIndex, objectIndex) => {
            const radius = orbits[orbitIndex]
            const isActive = objectIndex === activeObject
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

// Attach Orbit as a subcomponent
OrbitalSystem.Orbit = Orbit

export default OrbitalSystem
