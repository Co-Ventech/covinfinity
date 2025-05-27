"use client"

import { createContext, useContext, useState, useEffect } from "react"
import type { ReactNode } from "react"

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

  useEffect(() => {
    if (!autoRotate || isHovering) return
    const interval = setInterval(() => {
      setActiveObject((prev) => (prev + 1) % 7)
    }, rotationInterval)
    return () => clearInterval(interval)
  }, [autoRotate, rotationInterval, isHovering])

  return (
    <OrbitalContext.Provider value={{ activeObject, setActiveObject, isHovering, setIsHovering }}>
      {children}
    </OrbitalContext.Provider>
  )
}

// The actual orbital visualization component
function Orbit() {
  const { activeObject, setActiveObject, isHovering, setIsHovering } = useOrbital()

  // Define 8 orbital radii (but only 7 objects, skipping index 6 which is the 7th orbit)
  const orbits = [60, 90, 120, 150, 180, 210, 240, 270]
  const objectOrbits = [0, 1, 2, 3, 4, 5, 7] // Skip index 6 (7th orbit)

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className={`relative w-[600px] h-[600px] ${isHovering ? 'pause-all-animations' : ''}`}>
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
            <circle
              key={index}
              cx="300"
              cy="300"
              r={radius}
              fill="none"
              stroke={objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeObject ? `url(#activeLineGradient-${index})` : "url(#inactiveLineGradient)"}
              strokeWidth="1"
              opacity={objectOrbits.includes(index) && objectOrbits.indexOf(index) === activeObject ? "1" : "0.8"}
              className="transition-all duration-300"
            />
          ))}

          {/* Rotating objects */}
          {objectOrbits.map((orbitIndex, objectIndex) => {
            const radius = orbits[orbitIndex]
            const isActive = objectIndex === activeObject

            return (
              <g key={objectIndex}>
                {/* Rotating container */}
                <g
                  style={{
                    transformOrigin: "300px 300px",
                    animation: `rotate-${objectIndex} ${45 + objectIndex * 8}s linear infinite`,
                    animationPlayState: isHovering ? 'paused' : 'running'
                  }}
                >
                  <image
                    href={isActive ? "/orbit-active.png" : "/orbit-not-active.png"}
                    x={280 + radius}
                    y={280}
                    width="40"
                    height="40"
                    className="cursor-pointer transition-opacity duration-300"
                    style={{
                      filter: isActive ? 'brightness(1.2)' : 'none',
                      opacity: isActive ? '1' : '0.8'
                    }}
                    onClick={() => setActiveObject(objectIndex)}
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
