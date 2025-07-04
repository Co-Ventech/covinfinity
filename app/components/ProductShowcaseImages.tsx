import BgImage from './BgImage';

interface ProductShowcaseImagesProps {
  className?: string;
  slug: string;
}

const IMAGE_MAP: Record<string, string> = {
  recruitinn: 'recruitinn-dashboard1.png',
  skillbuilder: 'skillbuilder-hero.png',
  covental: 'co-vental3.png',
};

export default function ProductShowcaseImages({ className = '', slug }: ProductShowcaseImagesProps) {
  const imageSrc = IMAGE_MAP[slug] || ''; // fallback image
  return (
    <div className={className}>
      <div className="image-wrapper relative max-h-[51.5rem] min-h-[51.5rem] w-full">
        <BgImage src={imageSrc} />
      </div>
    </div>
  );
}
