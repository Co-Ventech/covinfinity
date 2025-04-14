import React from 'react';
import { FramerIcon } from './svgs';

const companies = [
  { name: 'ZenithPoint', icon: false },
  { name: 'NovaForge', icon: false },
  { name: 'Prymax Solutions', icon: true },
  { name: 'Stellaris Group', icon: false },
  { name: 'VortexWorks', icon: false },
  { name: 'Orbiton Dynamics', icon: true },
  { name: 'Infinitrix Labs', icon: false },
  { name: 'Ecliptix', icon: false },
  { name: 'Qorvex', icon: false },
];

const CompanySliderLeft = () => {
  return (
    <div className="relative mt-3 w-full overflow-hidden">
      <div className="animate-slider-left flex space-x-5">
        {/* First set of companies */}
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-[1.25rem] border border-[#FF698152] bg-[rgba(255,105,129,0.01)] px-8 py-[1.375rem]"
          >
            {/* {company.icon && <img src="framer.png" alt="icon" className="mr-2 h-5 w-5" />} */}
            {company.icon && <FramerIcon className="mr-2 h-5 w-5" />}
            <span className="whitespace-nowrap text-[#FFEBEE]">{company.name}</span>
          </div>
        ))}
        {/* Duplicate the companies for seamless effect */}
        {companies.map((company, index) => (
          <div
            key={index}
            className="flex items-center justify-center rounded-[1.25rem] border border-[#FF698152] bg-[rgba(255,105,129,0.01)] px-8 py-[1.375rem]"
          >
            {company.icon && <img src="framer.png" alt="icon" className="mr-2 h-5 w-5" />}
            <span className="whitespace-nowrap text-[#FFEBEE]">{company.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-20 mb-12 flex justify-center">
        <img src="43k-talents.png" alt="persons" className="item-center h-6" />
      </div>
    </div>
  );
};

export default CompanySliderLeft;
