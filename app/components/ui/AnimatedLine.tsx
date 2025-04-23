'use client';

import React from 'react';

interface AnimatedLineProps {
  className?: string;
  width?: number;
  height?: number;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  color?: string;
}

export default function AnimatedLine({
  className = '',
  width = 100,
  height = 100,
  position = 'top-right',
  color = 'rgba(187, 151, 242, 0.47)',
}: AnimatedLineProps) {
  // Position styles
  const positionStyles = {
    'top-right': { top: 0, right: 0 },
    'top-left': { top: 0, left: 0 },
    'bottom-right': { bottom: 0, right: 0 },
    'bottom-left': { bottom: 0, left: 0 },
  };

  return (
    <div
      className={`relative ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
    >
      <div className="absolute z-10" style={positionStyles[position]}>
        <div
          className="absolute"
          style={{
            borderRight: '1px solid rgba(226,232,255,.12)',
            borderBottom: '1px solid rgba(226,232,255,.12)',
            borderBottomRightRadius: '12px',
            width: `${width}px`,
            height: `${height}px`,
          }}
        >
          <div
            className="absolute top-0 left-0 h-[calc(100%+1px)] w-[calc(100%+1px)]"
            style={{
              mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              maskComposite: 'exclude',
              padding: '0 1px 1px 0',
              borderRadius: 'inherit',
            }}
          >
            <div
              className="absolute"
              style={{
                width: '200%', // Makes animation consistent regardless of size
                height: '200%',
                bottom: '-50%',
                left: '-50%',
                background: `
                  conic-gradient(
                    transparent 0deg,
                    ${color} 20deg,
                    rgba(255, 124, 145, 0.78) 75deg,
                    transparent 15deg,
                    transparent 360deg
                  )
                `,
                animation: 'spin 15s linear infinite',
              }}
            />
          </div>
        </div>
      </div>

      {/* <style jsx global>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style> */}
    </div>
  );
}
