'use client';

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  brightness: number;
}

export function Starfield({ count = 200 }) {
  const [stars, setStars] = useState<Star[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate random stars
    const newStars: Star[] = [];
    for (let i = 0; i < count; i++) {
      // Create a more natural distribution of star sizes
      // Most stars are small, fewer are medium, very few are large
      let size;
      const sizeRandom = Math.random();
      if (sizeRandom > 0.97) {
        size = Math.random() * 1 + 2; // Large stars (3%)
      } else if (sizeRandom > 0.85) {
        size = Math.random() * 0.7 + 1.3; // Medium stars (12%)
      } else {
        size = Math.random() * 0.8 + 0.5; // Small stars (85%)
      }

      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size,
        delay: Math.random() * 30, // More varied delays
        duration: Math.random() * 8 + 7, // Much slower animations (7-15 seconds)
        brightness: Math.random() * 0.5 + 0.5, // Varied brightness
      });
    }
    setStars(newStars);
  }, [count]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Background stars (non-animated) for more depth */}
      {Array.from({ length: count * 2 }).map((_, i) => (
        <div
          key={`bg-star-${i}`}
          className="absolute rounded-full bg-white/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 0.8 + 0.2}px`,
            height: `${Math.random() * 0.8 + 0.2}px`,
          }}
        />
      ))}

      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.brightness * 0.7,
            boxShadow:
              star.size > 1.5
                ? `0 0 ${star.size * 2}px ${star.size / 2}px rgba(255,255,255,${star.brightness * 0.4})`
                : `0 0 ${star.size}px ${star.size / 3}px rgba(255,255,255,${star.brightness * 0.3})`,
          }}
          animate={{
            opacity: [star.brightness * 0.7, star.brightness, star.brightness * 0.7],
            scale: [1, star.size > 1.5 ? 1.15 : 1.1, 1],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
