import React, { useState } from 'react';
import OutlineBox from './ui/OutlineBox';
import { Button } from './ui/Button';

// Developer type representing a developer profile
interface Developer {
  id: number;
  name: string;
  avatar: string;
  skills: string[];
  description?: string;
}

// Badge component for developer skills/technologies
const TechBadge = ({ label }: { label: string }) => (
  <div className="flex items-center px-2 py-1 mr-2   border-[#1F1F1F] rounded-lg">
    <img src="/framer-black.png" alt="" className="w-3 h-3 mr-1" />
    <span className="text-xs text-white">{label}</span>
  </div>
);

// Developer profile card component
const DeveloperProfile = ({ developer, detailed = false }: { developer: Developer; detailed?: boolean }) => (
  <div className="flex items-start space-x-3 py-3 border-b border-[#1F1F1F] last:border-b-0">
    <img src={developer.avatar} alt={developer.name} className="w-5 h-5 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">{developer.name}</span>
        {detailed && (
          <div className="p-[1px] rounded-md bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B]">
            <Button className="text-xs bg-[#1A1717] px-3 py-1 rounded-[3px]">
                Set Interview
            </Button>
          </div>
        )}
      </div>
      {detailed && developer.description && (
        <p className="text-xs text-[#A3A3A3] mt-1">{developer.description}</p>
      )}
      <div className="flex mt-2 space-x-2">
        {developer.skills.map((skill, index) => (
          <TechBadge key={index} label={skill} />
        ))}
      </div>
    </div>
  </div>
);

const TalentAccessComponent = () => {
  const [activeJobType, setActiveJobType] = useState<number | null>(null);
  
  // Sample developers data
  const developers: Developer[] = [
    {
      id: 1,
      name: 'John',
      avatar: '/john.png',
      skills: ['React', 'JavaScript', 'NodeJS'],
      description: 'John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js. He creates user-friendly interfaces, thrives in teams, and loves open-source.'
    },
    {
      id: 2,
      name: 'John',
      avatar: '/john.png',
      skills: ['Frontend Dev', 'Frontend Dev', 'Frontend Dev']
    },
    {
      id: 3,
      name: 'John',
      avatar: '/john.png',
      skills: ['Frontend Dev', 'Frontend Dev', 'Frontend Dev']
    }
  ];

  // Technology categories with available icons
  const technologies = [
    { id: 1, name: 'AI Engineer', icon: '/framer.png' },
    { id: 2, name: 'Frontend Dev', icon: '/framer-black.png' },
    { id: 3, name: 'Backend Dev', icon: '/framer-black.png' },
    { id: 4, name: 'Android Dev', icon: '/framer-black.png' },
    { id: 5, name: 'iOS Engineer', icon: '/framer-black.png' }
  ];

  return (
    <div className="text-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-white mb-4">
            Craft the{' '}
            <span className="bg-gradient-to-r from-[#FF6981] to-purple-400 bg-clip-text text-transparent">
              most productive
            </span>{' '}
            team
            <br />
            from all around the world
          </h1>
          <p className="text-[#665F5F]">The most complete experience for businesses & individual clients</p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Section - Talent Search */}
          <OutlineBox className="lg:col-span-2" animated>
            {/* Header - Center aligned */}
            <div className="p-5 flex flex-col items-center text-center">
              <img src="/cup.png" alt="Talent" className="w-10 h-10 mb-3" />
              <h2 className="text-lg font-semibold">Top talent access</h2>
              <p className="text-sm text-[#665F5F] mt-1 ">
                Here client can see list of top talents he can quickly contact/hire based on his needs
              </p>
            </div>

            {/* Technology filter buttons */}
            <div className="flex justify-center px-4 gap-2 mb-4">
              {technologies.map(tech => (
                <button 
                  key={tech.id}
                  className={`flex items-center px-3 py-1.5 mr-2 rounded-xl transition-colors duration-200 hover:bg-[#252122] hover:text-white ${
                    activeJobType === tech.id 
                      ? ' text-white bg-black ' 
                      : ' text-[#665F5F] hover:border-white hover:text-white'
                  }`}
                  onMouseEnter={() => setActiveJobType(tech.id)}
                  onMouseLeave={() => setActiveJobType(null)}
                >
                  <img src={tech.icon} alt={tech.name} className="w-4 h-4 mr-2" />
                  <span className="text-xs">{tech.name}</span>
                </button>
              ))}
            </div>

            {/* Inner box containing search and profiles */}
            <div className="px-4 pb-4">
              <div className="border border-[#1F1F1F] rounded-lg bg-[rgba(26,23,23,0.48)] p-3">
                {/* Search section */}
                <div className="flex items-center mb-4">
                  <div className="p-2 flex space-x-1  border border-[#1F1F1F] rounded-lg mr-2">
                    <img src="/search.png" alt="Search" className="w-3 h-3 mt-0.5" />
                    <div className="text-xs text-[#665F5F]">Search</div>
                  </div>
                 
                </div>

                {/* "What do you need?" section */}
                <div className="mb-4">
                  <div className="flex justify-between items-center border-b border-[#1F1F1F] rounded-lg p-2">
                    <input
                      type="text"
                      placeholder="What do you need?"
                      className="bg-transparent border-none text-sm text-[#665F5F] focus:outline-none w-full"
                    />
                    <div className="flex space-x-2">
                    <button className="flex items-center w-10 bg-transparent border border-[#1F1F1F] rounded px-3 py-1 text-xs text-[#665F5F]">
                      <img src="/Vectar.png" alt="Arrow" className="w-3 h-3" />
                    </button>
                    <button className="flex items-center bg-transparent border border-[#1F1F1F] rounded px-3 py-1 text-xs text-[#665F5F]">
                      
                      <span>Return</span>
                    </button>
                    </div>
                  </div>
                </div>

                {/* Suggestions header - moved outside */}
                <div className="text-xs text-[#665F5F] mb-2">Suggestions</div>
                
                {/* Detailed developer profile with gradient border */}
                <div className="p-[1px] rounded-lg bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B]">
                  <div className="bg-[#1A1717] p-3 rounded-[7px]">
                    <div className="text-xs text-[#665F5F] mb-1">Recommended</div>
                    <DeveloperProfile developer={developers[0]} detailed={true} />
                  </div>
                </div>

                {/* Regular developer profiles */}
                <div className="mt-3">
                  {developers.slice(1).map(dev => (
                    <DeveloperProfile key={dev.id} developer={dev} />
                  ))}
                </div>
              </div>
            </div>
          </OutlineBox>

          {/* Right Section - Globe Visualization */}
          <OutlineBox  animated>
            <div className="p-5 mb-5 flex flex-col items-center text-center">
              <img src="/cup.png" alt="Talent" className="w-10 h-10 mb-3" />
              <h2 className="text-lg font-semibold">Top talent access</h2>
              <p className=" text-sm text-[#665F5F] mt-1 max-w-md">
                Here client can see list of top talents he can quickly contact/hire based on his needs
              </p>
            </div>
            <OutlineBox>
            <div className="flex items-center justify-center">
              <img src="/world.png" alt="Global Talent" className="w-full h-[29.8rem] object-contain" />
            </div>
            </OutlineBox>
          </OutlineBox>
        </div>
      </div>
    </div>
  );
};

export default TalentAccessComponent; 