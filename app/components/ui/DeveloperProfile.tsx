// components/talent/DeveloperProfile.tsx
import { motion } from 'framer-motion';
import { ROUTES } from '~/constants/routes';
import type { Developer } from '../../data/talentData';
import { RecommendedBadge } from './RecommendedBadge';
import { TechBadge } from './TechBadge';

interface DeveloperProfileProps {
  developer: Developer;
  isFirst?: boolean;
}

export const DeveloperProfile = ({ developer, isFirst = false }: DeveloperProfileProps) => {

  const handleSetInterview = () => {
    // Open the connect page in a new tab
    window.location.href = ROUTES.BOOK_A_DEMO;
  };
  const shouldHighlight = true;

  return (
    <div className="rounded-xl p-3 hover:bg-background-body">
      <div className="flex items-start space-x-3 border-b-0 pt-3">
        <img src={developer.avatar} alt={developer.name} className="h-5 w-5 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center">
            <span className="text-sm text-white">{developer.name}</span>
            <RecommendedBadge />
          </div>
          {developer.description && (
            <p className="mt-1 max-w-xl text-xs text-[#A3A3A3]">{developer.description}</p>
          )}
          <div className="mt-2 flex flex-wrap space-x-2">
            {developer.skills.map((skill, index) => (
              <TechBadge key={index} label={skill} />
            ))}
          </div>
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
          >
            <button
              onClick={handleSetInterview}
              className="flex cursor-pointer rounded bg-gradient-to-r from-[#1F2224] to-[#16181A] to-70% px-5 py-2.5 font-medium transition hover:opacity-90"
            >
              <span className="bg-gradient-to-r from-[#FFFFFF] to-[#676767] bg-clip-text text-transparent">
                Set Interview
              </span>
              <img src="/right-icon.png" alt="arrow-icon" className="mt-2 ml-2 h-2 w-2" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
