// components/talent/TalentSearchHeader.tsx
interface TalentSearchHeaderProps {
  title: string;
  description: string;
  icon?: string;
}

export const TalentSearchHeader = ({
  title,
  description,
  icon = '/cup.png',
}: TalentSearchHeaderProps) => (
  <div className="flex flex-col items-center p-5 text-center">
    <img src={icon} alt="Talent" className="mb-3 h-10 w-10 animate-pulse" />
    <h2 className="text-lg font-semibold">{title}</h2>
    <p className="mt-1 text-sm text-[#665F5F]">{description}</p>
  </div>
);
