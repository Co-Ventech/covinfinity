'use client';

import { motion } from 'framer-motion';
import type React from 'react';

interface SliderProps {
  children: React.ReactNode;
  direction?: 'left' | 'right';
  className?: string;
  duplicateItems?: boolean;
  duration?: number;
  pauseOnHover?: boolean;
}

export function Slider({
  children,
  direction = 'left',
  className = '',
  duplicateItems = true,
  duration = 90,
  pauseOnHover = false,
}: SliderProps) {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className="inline-block"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'linear',
          repeatType: 'loop',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        <div className="inline-block">{children}</div>
        {duplicateItems && <div className="inline-block">{children}</div>}
      </motion.div>
    </div>
  );
}

interface SliderItemProps {
  children: React.ReactNode;
  className?: string;
}

Slider.Item = function SliderItem({ children, className = '' }: SliderItemProps) {
  return <div className={`inline-block ${className}`}>{children}</div>;
};
