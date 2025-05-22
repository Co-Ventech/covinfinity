import BgImage from './BgImage';

interface ProductShowcaseImagesProps {
  className?: string;
}

export default function CaseStudyShowcaseImages({ className = '' }: ProductShowcaseImagesProps) {
  return (
    <div className={className}>
      <div className="image-wrapper relative max-h-[51.5rem] min-h-[51.5rem] w-full">
        <BgImage src="productShowCase-image.png" />
      </div>
    </div>
  );
}
