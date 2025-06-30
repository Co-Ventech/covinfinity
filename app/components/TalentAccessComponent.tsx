import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { developers as allDevelopers } from '../data/talentData';
import BgImage from './BgImage';
import { DeveloperProfile } from './ui/DeveloperProfile';
import Heading from './ui/Heading';
import { NoResults } from './ui/NoResults';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';
import { TalentSearchHeader } from './ui/TalentSearchHeader';
import { TalentSearchInput } from './ui/TalentSearchInput';
import { TechnologyFilter } from './ui/TechnologyFilter';
import Box from './ui/Box';
import { GradientOverlay } from './ui/GradientOverlay';

const TalentAccessComponent = () => {
  const [activeJobType, setActiveJobType] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const topTalents = useMemo(() => {
    const sortedDevs = [...allDevelopers].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (!activeJobType && !searchQuery) {
      return sortedDevs.slice(0, 2);
    }
    return [];
  }, [activeJobType, searchQuery]);

  const filteredDevelopers = useMemo(() => {
    if (topTalents.length > 0) {
      return topTalents;
    }

    let filtered = [...allDevelopers];

    if (activeJobType !== null) {
      filtered = filtered.filter((dev) => dev.category === activeJobType);
    }

    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (dev) =>
          dev.name.toLowerCase().includes(query) ||
          dev.skills.some((skill) => skill.toLowerCase().includes(query))
      );
    }

    return filtered.slice(0, 3);
  }, [topTalents, activeJobType, searchQuery]);

  const hasResults = filteredDevelopers.length > 0;

  const scrollbarAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <Section className="text-white xl:mt-12" divClass="relative pt-32 xl:pt-44">
      <BgImage
        src="section-lines/talent-section-lines-3rd.png"
        className="xl:top-0 left-1/2 -z-10 h-[58rem] w-[calc(100%+3.5rem)] -translate-x-1/2 !bg-contain"
      />

      {/* Header Section */}
      <div className="mb-14 text-center">
        <Heading className="mb-4 pb-1" blockText=" Anywhere in the World">
        Build Your Global Dream Team
        </Heading>
        <p className="text-[#665F5F]">
        The ultimate experience for businesses and individual clients, connecting you with top talent.

        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Section - Talent Search */}
        <Box className="lg:col-span-2">
          <TalentSearchHeader
            title="Talent at Your Fingertips"
            description="Access top professionals worldwide. Quickly hire the right talent for your needs"
          />

          <TechnologyFilter activeJobType={activeJobType} onFilterChange={setActiveJobType} />

          {/* Inner box containing search and profiles */}
          <div className="">
            {/* <div className="rounded-lg border border-[#1F1F1F] bg-[rgba(26,23,23,0.48)] p-3"> */}
            <Box.Inner>
              {/* Search section */}
              <div className="mb-4 flex items-center">
                <div className="mr-2 flex space-x-1 rounded-lg border border-[#1F1F1F] p-2">
                  <img src="/search.png" alt="Search" className="mt-0.5 h-3 w-3" />
                  <div className="text-xs text-[#665F5F]">Search</div>
                </div>
              </div>

              <TalentSearchInput onSearch={setSearchQuery} onClear={() => setSearchQuery('')} />

              {/* No results state */}
              {!hasResults && <NoResults />}

              {/* Results */}
              {hasResults && (
                <>
                  <div className="mb-2 text-xs text-[#665F5F]">
                    {searchQuery ? 'Search Results' : 'Suggestions'}
                  </div>

                  <motion.div
                    className="custom-scrollbar max-h-[22rem] min-h-[22rem] overflow-y-auto pr-1"
                    initial="hidden"
                    animate="visible"
                    variants={scrollbarAnimation}
                  >
                    <div className="space-y-4">
                      {filteredDevelopers.map((dev, index) => {
                        return <DeveloperProfile key={index} developer={dev} />;
                      })}
                    </div>
                  </motion.div>
                </>
              )}
            </Box.Inner>
          </div>
        </Box>

        {/* Right Section - Globe Visualization */}
        <Box className="relative overflow-hidden">
          <div className="mb-5 flex flex-col items-center p-5 text-center">
            <img src="/globle-ai-icon.png" alt="Talent" className="mb-3 h-10 w-10 animate-pulse" />
            <h2 className="text-lg font-semibold">AE & Client Chat Interactive</h2>
            <p className="mt-1 max-w-md text-sm text-[#665F5F]">
              Here client can see list of top talents he can quickly contact/hire based on his needs
            </p>
          </div>
          {/* Globe */}
          <div className="w-[calc(100%+1.5rem)] absolute -bottom-60 left-1/2 -translate-1/2 flex items-center justify-center">
            <video
              autoPlay
              muted
              playsInline
              preload="auto"
              ref={(ref) => {
                if (ref) {
                  ref.onended = () => {
                    ref.currentTime = 0;
                    ref.play();
                  };
                }
              }}
              className="pointer-events-none h-[29.8rem] w-full object-cover "
            >
              <source src="/Globe.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Overlays */}
          <GradientOverlay
            direction="r"
            from="background-body"
            to="background-body/0"
            className="!w-[7.625rem] !top-[unset] !bottom-0 !h-[calc(100%-10rem)]"
          />
          <GradientOverlay
            direction="r"
            from="background-body/0"
            to="background-body"
            className="!w-[7.625rem] !top-[unset] !left-[unset] !right-0 !bottom-0 !h-[calc(100%-10rem)]"
          />
          <GradientOverlay
            direction="b"
            from="background-body/0"
            to="background-body"
            className="!h-[7.625rem] !top-[unset] !bottom-0"
          />
        </Box>
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
