import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import type { Developer } from '../data/talentData';
import { developers as allDevelopers, technologies } from '../data/talentData';
import BgImage from './BgImage';
import GradientBorderButton from './ui/GradientBorderButton';
import Heading from './ui/Heading';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';

// Badge component for developer skills/technologies
const TechBadge = ({ label }: { label: string }) => (
  <div className="mr-2 flex items-center rounded-lg border-[#1F1F1F] px-2 py-1">
    <img src="/framer-black.png" alt="" className="mr-1 h-3 w-3" />
    <span className="text-xs text-white">{label}</span>
  </div>
);

// Recommended badge component
const RecommendedBadge = () => (
  <span className="ml-2 rounded-md bg-[#333030] bg-clip-text px-1.5 py-0.5 text-xs font-medium text-transparent">
    Recommended
  </span>
);

// Developer profile card component
const DeveloperProfile = ({
  developer,
  isFirst = false,
}: {
  developer: Developer;
  isFirst?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Animation variants
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

  // Always show highlight for first item
  const shouldHighlight = isFirst || isHovered;

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
                    <GradientBorderButton>Set Interview</GradientBorderButton>
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

// No results component
const NoResults = () => (
  <div className="animate-fadeIn flex flex-col items-center justify-center py-8 text-center">
    <img src="/search.png" alt="No results" className="mb-3 h-8 w-8 opacity-30" />
    <p className="text-sm text-[#665F5F]">No matching talents found</p>
    <p className="mt-1 text-xs text-[#665F5F]">Try a different search term or category</p>
  </div>
);

const TalentAccessComponent = () => {
  const [activeJobType, setActiveJobType] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [tempSearchInput, setTempSearchInput] = useState<string>('');

  // Get top 3 talents (highest rated) from each category
  const topTalents = useMemo(() => {
    // Get all talents sorted by rating
    const sortedDevs = [...allDevelopers].sort((a, b) => (b.rating || 0) - (a.rating || 0));

    // Take top 3 overall if no category is selected and no search term
    if (!activeJobType && !searchQuery) {
      return sortedDevs.slice(0, 3);
    }

    return [];
  }, [activeJobType, searchQuery]);

  // Filtered developers based on search query and active job type
  const filteredDevelopers = useMemo(() => {
    if (topTalents.length > 0) {
      return topTalents;
    }

    let filtered = [...allDevelopers];

    // Filter by job type/category if active
    if (activeJobType !== null) {
      filtered = filtered.filter((dev) => dev.category === activeJobType);
    }

    // Filter by search query if not empty
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (dev) =>
          dev.name.toLowerCase().includes(query) ||
          dev.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    // Limit to max 3 talents total
    return filtered.slice(0, 3);
  }, [topTalents, activeJobType, searchQuery]);

  // Handle search submit
  const handleSearchSubmit = () => {
    setSearchQuery(tempSearchInput);
  };

  // Handle enter key press in search input
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  const hasResults = filteredDevelopers.length > 0;

  // Scrollbar animation variants
  const scrollbarAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <Section className="text-white" divClass="relative pt-[17rem] xl:pt-[21.5rem]">
      <BgImage
        src="section-lines/talent-section-lines.png"
        className="-top-0 left-1/2 h-[58rem] w-[calc(100%+6rem)] -translate-x-1/2 bg-top"
      />
      {/* Header Section */}
      <div className="mb-36 text-center">
        <Heading className="mb-4 pb-1" blockText="from all around the world">
          Craft the most productive team
        </Heading>

        <p className="text-[#665F5F]">
          The most complete experience for businesses & individual clients
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Section - Talent Search */}
        <OutlineBox animated className="lg:col-span-2">
          {/* Header - Center aligned */}
          <div className="flex flex-col items-center p-5 text-center">
            <img src="/cup.png" alt="Talent" className="mb-3 h-10 w-10 animate-pulse" />
            <h2 className="text-lg font-semibold">Top talent access</h2>
            <p className="mt-1 text-sm text-[#665F5F]">
              Here client can see list of top talents he can quickly contact/hire based on his needs
            </p>
          </div>

          {/* Technology filter buttons */}
          <div className="mb-4 flex flex-wrap justify-center gap-2 px-4">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                className={`mr-2 flex items-center rounded-xl px-3 py-1.5 transition-colors duration-200 hover:bg-[#252122] hover:text-white ${
                  activeJobType === tech.id
                    ? 'bg-[#252122] text-white'
                    : 'text-[#665F5F] hover:border-white hover:text-white'
                }`}
                onClick={() => setActiveJobType(activeJobType === tech.id ? null : tech.id)}
              >
                <img src={tech.icon} alt={tech.name} className="mr-2 h-4 w-4" />
                <span className="text-xs">{tech.name}</span>
              </button>
            ))}
          </div>

          {/* Inner box containing search and profiles */}
          <div className="px-4 pb-4">
            <div className="rounded-lg border border-[#1F1F1F] bg-[rgba(26,23,23,0.48)] p-3">
              {/* Search section */}
              <div className="mb-4 flex items-center">
                <div className="mr-2 flex space-x-1 rounded-lg border border-[#1F1F1F] p-2">
                  <img src="/search.png" alt="Search" className="mt-0.5 h-3 w-3" />
                  <div className="text-xs text-[#665F5F]">Search</div>
                </div>
              </div>

              {/* "What do you need?" section */}
              <div className="mb-4">
                <div className="flex items-center justify-between rounded-lg border-b border-[#1F1F1F] p-2">
                  <input
                    type="text"
                    value={tempSearchInput}
                    onChange={(e) => setTempSearchInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="What do you need?"
                    className="w-full border-none bg-transparent text-sm text-[#665F5F] focus:outline-none"
                  />
                  <div className="flex space-x-2">
                    <button
                      className="flex w-10 items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]"
                      onClick={handleSearchSubmit}
                    >
                      <img src="/Vectar.png" alt="Arrow" className="h-3 w-3" />
                    </button>
                    <button
                      className="flex items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]"
                      onClick={() => {
                        setTempSearchInput('');
                        setSearchQuery('');
                      }}
                    >
                      <span>Return</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* No results state */}
              {!hasResults && <NoResults />}

              {/* Results by category */}
              {hasResults && (
                <>
                  {/* Suggestions header */}
                  <div className="mb-2 text-xs text-[#665F5F]">
                    {searchQuery ? 'Search Results' : 'Suggestions'}
                  </div>

                  {/* Talents list container with max height and scrolling */}
                  <motion.div
                    className="custom-scrollbar max-h-[30rem] overflow-y-auto pr-1"
                    initial="hidden"
                    animate="visible"
                    variants={scrollbarAnimation}
                  >
                    {/* Talent cards with motion */}
                    <motion.div className="space-y-4">
                      {filteredDevelopers.map((dev, index) => (
                        <motion.div
                          key={dev.id}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.4,
                            ease: 'easeOut',
                            delay: index * 0.1,
                          }}
                        >
                          <DeveloperProfile developer={dev} isFirst={index === 0} />
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </>
              )}
            </div>
          </div>
        </OutlineBox>

        {/* Right Section - Globe Visualization */}
        <OutlineBox animated>
          <div className="mb-5 flex flex-col items-center p-5 text-center">
            <img src="/cup.png" alt="Talent" className="mb-3 h-10 w-10 animate-pulse" />
            <h2 className="text-lg font-semibold">Top talent access</h2>
            <p className="mt-1 max-w-md text-sm text-[#665F5F]">
              Here client can see list of top talents he can quickly contact/hire based on his needs
            </p>
          </div>
          <OutlineBox>
            <div className="flex items-center justify-center">
              <img
                src="/world.png"
                alt="Global Talent"
                className="h-[29.8rem] w-full object-cover"
              />
            </div>
          </OutlineBox>
        </OutlineBox>
      </div>

      {/* Custom scrollbar styles */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(31, 31, 31, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #4B4646;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #4B4646;
        }
      `}</style>
    </Section>
  );
};

export default TalentAccessComponent;
