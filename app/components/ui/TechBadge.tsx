// components/talent/TechBadge.tsx
interface TechBadgeProps {
  label: string;
  icon?: string;
}

export const TechBadge = ({ label, icon = '/framer-black.png' }: TechBadgeProps) => (
  <div className="mr-2 flex items-center rounded-lg border-[#1F1F1F] px-2 py-1">
    <img src={icon} alt="" className="mr-1 h-3 w-3" />
    <span className="text-xs text-white">{label}</span>
  </div>
);
