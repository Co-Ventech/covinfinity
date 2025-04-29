// components/talent/DeveloperProfile.tsx
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import type { Developer } from '../../data/talentData';
import GradientBorderButton from './GradientBorderButton';
import { RecommendedBadge } from './RecommendedBadge';
import { TechBadge } from './TechBadge';

interface DeveloperProfileProps {
  developer: Developer;
  isFirst?: boolean;
}

const containerVariants = {
  normal: { scale: 1 },
  hover: { scale: 1, transition: { duration: 0.3, ease: 'easeInOut' } },
};

const highlightVariants = {
  normal: { opacity: 0, height: 0, display: 'none' },
  hover: {
    opacity: 1,
    height: 'auto',
    display: 'block',
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
};

export const DeveloperProfile = ({ developer, isFirst = false }: DeveloperProfileProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const shouldHighlight = isFirst || isHovered;
  const navigate = useNavigate();

  const handleSetInterview = () => {
    navigate('/connect');
  };

  return (
    <motion.div
      className="relative"
      initial="normal"
      animate={shouldHighlight ? 'hover' : 'normal'}
      variants={containerVariants}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <AnimatePresence>
        {shouldHighlight ? (
          <motion.div
            className="rounded-lg bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B] p-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="rounded-[7px] bg-[#1A1717] p-3">
              <div className="flex items-start space-x-3 border-b-0 pt-3">
                <img src={developer.avatar} alt={developer.name} className="h-5 w-5 rounded-full" />
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="text-sm text-white">{developer.name}</span>
                    <RecommendedBadge />
                  </div>
                  {developer.description && (
                    <p className="mt-1 text-xs text-[#A3A3A3]">{developer.description}</p>
                  )}
                  <div className="mt-2 flex flex-wrap space-x-2">
                    {developer.skills.map((skill, index) => (
                      <TechBadge key={index} label={skill} />
                    ))}
                  </div>
                  <motion.div
                    className="mt-3 flex justify-end"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
                  >
                    <GradientBorderButton onClick={handleSetInterview}>
                      Set Interview
                    </GradientBorderButton>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            className="flex items-start space-x-3 border-b border-[#1F1F1F] p-3 last:border-b-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img src={developer.avatar} alt={developer.name} className="h-5 w-5 rounded-full" />
            <div className="flex-1">
              <div className="flex items-center">
                <span className="text-sm text-white">{developer.name}</span>
                <RecommendedBadge />
              </div>
              <div className="mt-2 flex flex-wrap space-x-2">
                {developer.skills.map((skill, index) => (
                  <TechBadge key={index} label={skill} />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
