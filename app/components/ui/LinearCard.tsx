import { type FC } from 'react';

const LinearCard: FC = () => {
  return (
    <div className="my-4 ml-4.5 rounded-lg border-[0.1125rem] border-[#414143] bg-[rgba(26,23,23,0.48)] py-2">
      <div className="mb-2 flex items-center space-x-2 border-b border-[#414143]">
        <div className="mb-2 flex items-center space-x-2 px-2">
          <img src="/plus-icon.png" alt="Linear" className="h-4 w-4" />
          <span className="text-sm text-white">Linear</span>
        </div>
        <img src="/ai-arrow.png" alt="Close" className="mr-2 mb-2 ml-auto h-4 w-4" />
      </div>
      <div className="mt-1.5 ml-2 space-y-1.5">
        <p className="text-[13px] font-medium text-[#A3A3A3]">
          Asana for project management, and I can set up a shared workspace for us
        </p>
        <p className="text-[13px] text-[#665F5F]">
          everything set up by the end of the day and send you an update
        </p>
      </div>
      <div className="mt-3 flex items-center border-t border-[#414143] text-[11px] text-[#665F5F]">
        <div className="mt-1 ml-2 flex items-center">
          <span>iOS-21</span>
          <span className="mx-1.5">•</span>
          <img src="/framer-black.png" alt="iOS" className="mr-[0.1rem] h-3 w-3" />
          <span>Mobile</span>
          <span className="mx-1.5">•</span>
        </div>
        <div className="mt-0.5 flex items-center space-x-1">
          <img src="/sarah.png" alt="Sarah" className="h-3 w-3 rounded-full" />
          <span>Sarah</span>
        </div>
      </div>
    </div>
  );
};

export default LinearCard;
