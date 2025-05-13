import React, { useState, useEffect } from 'react';
import { motion, useAnimate, animate } from 'framer-motion';

interface Avatar {
  id: number;
  image: string;
  name: string;
}

// Generate 22 avatars using pravatar.cc
const avatars: Avatar[] = Array.from({ length: 22 }, (_, i) => ({
  id: i + 1,
  // Using unique hash for each avatar to ensure consistent images
  image: `https://i.pravatar.cc/150?u=avatar${i + 1}`,
  name: `Talent ${i + 1}`,
}));

const Counter = ({ from, to }: { from: number; to: number }) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const controls = animate(from, to, {
      duration: 2,
      onUpdate: (value) => {
        if (scope.current) {
          scope.current.textContent = `+${Math.floor(value)}k`;
        }
      },
      ease: 'easeOut',
    });

    return () => controls.stop();
  }, [from, to]);

  return <span ref={scope}>+{from}k</span>;
};

const AvatarGroup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsVisible(true);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Set initial width
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Determine how many avatars to show based on screen width
  const getVisibleAvatars = () => {
    if (windowWidth < 640) {
      // sm breakpoint
      return 8;
    } else if (windowWidth < 768) {
      // md breakpoint
      return 12;
    }
    return avatars.length; // Show all on larger screens
  };

  const visibleAvatars = avatars.slice(0, getVisibleAvatars());

  return (
    <div className="flex items-center justify-center">
      <div className="relative flex flex-wrap items-center">
        {/* Avatar stack */}
        {visibleAvatars.map((avatar, index) => (
          <motion.div
            key={avatar.id}
            className="relative"
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: isVisible ? 1 : 0,
              opacity: isVisible ? 1 : 0,
            }}
            transition={{
              delay: index * 0.05,
              duration: 0.3,
              ease: 'easeOut',
            }}
            whileHover={{ scale: 1.1, zIndex: 30 }}
            style={{
              // marginLeft: index === 0 ? 0 : '-0.75rem',
              marginLeft: index === 0 ? 0 : '-1.2rem',
              zIndex: index, // Lower index values appear behind higher ones
            }}
          >
            <div
              className="size-10 overflow-hidden rounded-full border-2 border-[#222225] bg-white transition-transform duration-200 hover:border-[#FF8A9D]"
              title={avatar.name}
            >
              <motion.img
                src={avatar.image}
                alt={avatar.name}
                className="h-full w-full object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.parentElement!.innerHTML = avatar.name.charAt(0);
                }}
                whileHover={{ scale: 1.1 }}
              />
            </div>
          </motion.div>
        ))}

        {/* Total count text */}
        <motion.div
          // className="rounded-[2.8125rem] bg-[#202023] px-4 py-2.5 text-[0.9375rem] font-semibold text-[#F0F2FF]"
          className="rounded-[2.8125rem] border border-[#697DFF]/4 bg-gradient-to-b from-[#16181A] to-[#0F1011] px-4 py-2.5 text-[0.9375rem] font-semibold text-[#F0F2FF]"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          style={{
            marginLeft: '-0.75rem',
            zIndex: visibleAvatars.length, // Same z-index as last avatar
          }}
          whileHover={{ scale: 1.05, zIndex: 30 }}
        >
          <span className="whitespace-nowrap">
            <Counter from={0} to={43} /> talents & business coventech
          </span>
        </motion.div>
      </div>
    </div>
  );
};

export default AvatarGroup;
