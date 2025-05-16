import BgImage from './BgImage';

interface CaseStudyShowcaseImagesProps {
  className?: string;
}

export default function CaseStudyShowcaseImages({ className = '' }: CaseStudyShowcaseImagesProps) {
  return (
    <div className={className}>
      <div className="image-wrapper relative max-h-[51.5rem] min-h-[51.5rem] w-full">
        <BgImage src="case-study-showcase-image-temp-2.png" />
      </div>
    </div>
  );
}
