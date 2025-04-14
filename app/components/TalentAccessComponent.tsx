import { useState } from 'react';
import OutlineBox from './ui/OutlineBox';
import Section from './ui/Section';

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
  <div className="mr-2 flex items-center rounded-lg border-[#1F1F1F] px-2 py-1">
    <img src="/framer-black.png" alt="" className="mr-1 h-3 w-3" />
    <span className="text-xs text-white">{label}</span>
  </div>
);

// Developer profile card component
const DeveloperProfile = ({
  developer,
  detailed = false,
}: {
  developer: Developer;
  detailed?: boolean;
}) => (
  <div className="flex items-start space-x-3 border-b border-[#1F1F1F] py-3 last:border-b-0">
    <img src={developer.avatar} alt={developer.name} className="h-5 w-5 rounded-full" />
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <span className="text-sm text-white">{developer.name}</span>
        {detailed && (
          <div className="rounded-md bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B] p-[1px]">
            <button className="rounded-[3px] bg-[#1A1717] px-3 py-1 text-xs">
              <span className="bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
                {' '}
                Set Interview
              </span>
            </button>
          </div>
        )}
      </div>
      {detailed && developer.description && (
        <p className="mt-1 text-xs text-[#A3A3A3]">{developer.description}</p>
      )}
      <div className="mt-2 flex space-x-2">
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
      description:
        'John is a front-end developer skilled in HTML, CSS, JavaScript, React, and Vue.js. He creates user-friendly interfaces, thrives in teams, and loves open-source.',
    },
    {
      id: 2,
      name: 'John',
      avatar: '/john.png',
      skills: ['Frontend Dev', 'Frontend Dev', 'Frontend Dev'],
    },
    {
      id: 3,
      name: 'John',
      avatar: '/john.png',
      skills: ['Frontend Dev', 'Frontend Dev', 'Frontend Dev'],
    },
  ];

  // Technology categories with available icons
  const technologies = [
    { id: 1, name: 'AI Engineer', icon: '/framer.png' },
    { id: 2, name: 'Frontend Dev', icon: '/framer-black.png' },
    { id: 3, name: 'Backend Dev', icon: '/framer-black.png' },
    { id: 4, name: 'Android Dev', icon: '/framer-black.png' },
    { id: 5, name: 'iOS Engineer', icon: '/framer-black.png' },
  ];

  return (
    <Section className="text-white">
      {/* Header Section */}
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-semibold text-white">
          Access to{' '}
          <span className="bg-gradient-to-r from-[#FF6981] to-purple-400 bg-clip-text text-transparent">
            top talent
          </span>
        </h1>
        <p className="text-[#665F5F]">Find and hire specialized engineers for your project needs</p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Left Section - Talent Search */}
        <OutlineBox animated className="lg:col-span-2">
          {/* Header - Center aligned */}
          <div className="flex flex-col items-center p-5 text-center">
            <img src="/cup.png" alt="Talent" className="mb-3 h-10 w-10" />
            <h2 className="text-lg font-semibold">Top talent access</h2>
            <p className="mt-1 text-sm text-[#665F5F]">
              Here client can see list of top talents he can quickly contact/hire based on his needs
            </p>
          </div>

          {/* Technology filter buttons */}
          <div className="mb-4 flex justify-center gap-2 px-4">
            {technologies.map((tech) => (
              <button
                key={tech.id}
                className={`mr-2 flex items-center rounded-xl px-3 py-1.5 transition-colors duration-200 hover:bg-[#252122] hover:text-white ${
                  activeJobType === tech.id
                    ? 'bg-black text-white'
                    : 'text-[#665F5F] hover:border-white hover:text-white'
                }`}
                onMouseEnter={() => setActiveJobType(tech.id)}
                onMouseLeave={() => setActiveJobType(null)}
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
                    placeholder="What do you need?"
                    className="w-full border-none bg-transparent text-sm text-[#665F5F] focus:outline-none"
                  />
                  <div className="flex space-x-2">
                    <button className="flex w-10 items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]">
                      <img src="/Vectar.png" alt="Arrow" className="h-3 w-3" />
                    </button>
                    <button className="flex items-center rounded border border-[#1F1F1F] bg-transparent px-3 py-1 text-xs text-[#665F5F]">
                      <span>Return</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Suggestions header - moved outside */}
              <div className="mb-2 text-xs text-[#665F5F]">Suggestions</div>

              {/* Detailed developer profile with gradient border */}
              <div className="rounded-lg bg-gradient-to-r from-[#FF7C91] via-[#BB97F2] to-[#332B2B] p-[1px]">
                <div className="rounded-[7px] bg-[#1A1717] p-3">
                  <div className="mb-1 text-xs text-[#665F5F]">Recommended</div>
                  <DeveloperProfile developer={developers[0]} detailed={true} />
                </div>
              </div>

              {/* Regular developer profiles */}
              <div className="mt-3">
                {developers.slice(1).map((dev) => (
                  <DeveloperProfile key={dev.id} developer={dev} />
                ))}
              </div>
            </div>
          </div>
        </OutlineBox>

        {/* Right Section - Globe Visualization */}
        <OutlineBox animated>
          <div className="mb-5 flex flex-col items-center p-5 text-center">
            <img src="/cup.png" alt="Talent" className="mb-3 h-10 w-10" />
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
                className="h-[29.8rem] w-full object-contain"
              />
            </div>
          </OutlineBox>
        </OutlineBox>
      </div>
    </Section>
  );
};

export default TalentAccessComponent;
