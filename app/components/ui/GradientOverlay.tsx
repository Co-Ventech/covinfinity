'use client';

import type React from 'react';

type GradientDirection = 't' | 'b' | 'l' | 'r' | 'tl' | 'tr' | 'bl' | 'br';

interface GradientOverlayProps {
  direction?: GradientDirection;
  from?: string; // e.g., "background-body" or "background-body from-30%"
  via?: string; // e.g., "background-body/80 via-40%"
  to?: string; // e.g., "background-body/0 to-100%"
  className?: string;
  position?: 'absolute' | 'fixed' | 'relative';
  inset?: string;
  size?: string;
  zIndex?: string;
  blendMode?: string;
}

export function GradientOverlay({
  direction = 't',
  from = 'background-body',
  via,
  to = 'background-body/0',
  className = '',
  position = 'absolute',
  inset = 'inset-0',
  size = 'w-full h-full',
  zIndex = 'z-0',
  blendMode = '',
}: GradientOverlayProps) {
  return (
    <div
      className={`pointer-events-none ${position} ${inset} ${size} ${zIndex} ${blendMode} bg-gradient-to-${direction} ${from ? `from-${from}` : ''} ${via ? `via-${via}` : ''} ${to ? `to-${to}` : ''} ${className} `}
      aria-hidden="true"
    />
  );
}
