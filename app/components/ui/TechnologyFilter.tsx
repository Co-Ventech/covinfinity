import { technologies } from '~/data/talentData';

interface TechnologyFilterProps {
  activeJobType: number | null;
  onFilterChange: (id: number | null) => void;
}

export const TechnologyFilter = ({ activeJobType, onFilterChange }: TechnologyFilterProps) => (
  <div className="mb-4 flex flex-wrap justify-center gap-2 px-4">
    {technologies.map((tech) => (
      <button
        key={tech.id}
        className={`mr-2 flex items-center rounded-xl px-3 py-1.5 transition-colors duration-200 hover:bg-[#252122] hover:text-white ${
          activeJobType === tech.id
            ? 'bg-[#252122] text-white'
            : 'text-[#665F5F] hover:border-white hover:text-white'
        }`}
        onClick={() => onFilterChange(activeJobType === tech.id ? null : tech.id)}
      >
        <img src={tech.icon} alt={tech.name} className="mr-2 h-4 w-4" />
        <span className="text-xs">{tech.name}</span>
      </button>
    ))}
  </div>
);
