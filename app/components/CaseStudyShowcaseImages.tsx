import BgImage from "./BgImage";
import { GradientOverlay } from "./ui/GradientOverlay";

interface CaseStudyShowcaseImagesProps {
  className?: string;
}

export default function CaseStudyShowcaseImages({ className = '' }: CaseStudyShowcaseImagesProps) {
  return (
    <div className={className}>
      {/* <div className="image-wrapper relative max-h-[51.5rem] min-h-[51.5rem] w-full">
        
      </div> */}
      <div className="grid grid-cols-8 relative grid-rows-6 gap-6 max-h-[51.5rem] min-h-[51.5rem] w-full">
        <div className="col-span-2 row-span-3 bg-yellow-300 rounded-3xl relative"> <BgImage src="services-grid-01.png" />  </div>
        <div className="col-span-4 row-span-3 col-start-3 bg-green-500 rounded-3xl relative"> <BgImage src="services-grid-02.png" /> </div>
        <div className="col-span-2 row-span-3 col-start-7 bg-red-400 rounded-3xl relative"> <BgImage src="services-grid-03.png" /> </div>
        <div className="col-span-4 row-span-3 row-start-4 bg-amber-950 rounded-3xl relative"> <BgImage src="services-grid-04.png" /> </div>
        <div className="col-span-4 row-span-3 col-start-5 row-start-4 bg-blue-900 rounded-3xl relative"> <BgImage src="services-grid-05.png" /> </div>

        {/* Overlays */}

        <GradientOverlay
          direction="r"
          from="background-body"
          to="background-body/0"
          className="clip-path-right !w-[31.25rem]"
        />
        <GradientOverlay
          direction="r"
          from="background-body"
          to="background-body/0"
          className="clip-path-right !w-[31.25rem] left-[unset] !right-0 rotate-180"
        />
        <GradientOverlay
          direction="r"
          from="background-body"
          to="background-body/0"
          className="clip-path-bottom !w-full !h-[300px] !left-0 !top-[unset] bottom-0"
        />
      </div>
    </div>
  );
}
