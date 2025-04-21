"use client"

import React from 'react'

interface CommunicateDotsProps {
  className?: string
  width?: number | string
  height?: number | string
  backgroundImage?: string
  animationDuration?: number
  animationDelay?: number
  reverse?: boolean
  position?: 'absolute' | 'relative' | 'fixed' | 'static'
  top?: number | string
  left?: number | string
  zIndex?: number
}

const CommunicateDots: React.FC<CommunicateDotsProps> = ({
  className = '',
  width = '100%',
  height = '242px',
  backgroundImage = '/build/q-00f00965.png',
  animationDuration = 5,
  animationDelay = 0,
  reverse = false,
  position = 'relative',
  top = 'auto',
  left = 'auto',
  zIndex = 1
}) => {
  return (
    <div 
      className={`communicate-dots-wrapper ${className}`}
      style={{
        position: position,
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        overflow: 'hidden',
        isolation: 'isolate',
        top: typeof top === 'number' ? `${top}px` : top,
        left: typeof left === 'number' ? `${left}px` : left,
        zIndex: zIndex
      }}
    >
      {/* First dots layer */}
      <div 
        className="communicate-dots lazy-background-image lazy-background-image-maskImage"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maskImage: `url(${backgroundImage})`,
          WebkitMaskImage: `url(${backgroundImage})`,
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          overflow: 'hidden',
          '--background-image': `url(${backgroundImage})`
        }}
      >
        <div 
          style={{
            height: '200px',
            animation: `communicate-dots ${animationDuration}s cubic-bezier(0.6, 0.6, 0, 1) infinite`,
            animationDelay: `${animationDelay}s`,
            transform: 'translateY(0)',
          }}
        />
      </div>

      {/* Second dots layer (reversed) */}
      <div 
        className="communicate-dots lazy-background-image lazy-background-image-maskImage"
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          maskImage: `url(${backgroundImage})`,
          WebkitMaskImage: `url(${backgroundImage})`,
          maskSize: 'cover',
          WebkitMaskSize: 'cover',
          overflow: 'hidden',
          marginTop: '24px',
          transform: 'rotate(-180deg)',
          '--background-image': `url(${backgroundImage})`
        }}
      >
        <div 
          style={{
            height: '200px',
            animation: `communicate-dots ${animationDuration}s cubic-bezier(0.6, 0.6, 0, 1) infinite`,
            animationDelay: `${animationDelay + 0.5}s`,
          }}
        />
      </div>

      {/* Add the keyframes animation to the document */}
      <style jsx global>{`
        @keyframes communicate-dots {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(200px);
          }
        }
      `}</style>
    </div>
  )
}

export default CommunicateDots 