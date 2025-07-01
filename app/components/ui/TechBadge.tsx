// components/talent/TechBadge.tsx
import type { SkillWithIcon } from '~/data/talentData';

interface TechBadgeProps {
  label: string | SkillWithIcon;
  icon?: string;
}

export const TechBadge = ({ label, icon }: TechBadgeProps) => {
  let displayLabel: string;
  let displayIcon: string | undefined;

  if (typeof label === 'object') {
    displayLabel = label.label;
    displayIcon = label.icon || icon || '/framer-black.png';
  } else {
    displayLabel = label;
    displayIcon = icon || '/framer-black.png';
  }

  return (
    <div className="mr-2 flex items-center rounded-lg border-[#1F1F1F] px-2 py-1">
      <img src={displayIcon} alt="" className="mr-1 h-5 w-5" />
      <span className="text-xs text-white">{displayLabel}</span>
    </div>
  );
};
