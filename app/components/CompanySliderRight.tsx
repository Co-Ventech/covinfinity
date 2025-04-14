import React from 'react';
import { FramerIcon } from './svgs';

const companies = [
  { name: 'Nexora', icon: false },
  { name: 'Aurionix', icon: false },
  { name: 'Zylotech', icon: true },
  { name: 'Qorvex', icon: false },
  { name: 'Lumivra', icon: false },
  { name: 'Truvora', icon: false },
  { name: 'QuantumEdge', icon: true },
  { name: 'AxiomCore', icon: false },
  { name: 'Vireon', icon: false },
  { name: 'Qorvex', icon: false },
  { name: 'Lumivra', icon: true },
];

const CompanySliderRight = () => {
  return (
    <div className="relative mt-4 w-full overflow-hidden">
      <div className="animate-slider-right flex space-x-5">
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
            <span className="text-[#FFEBEE]">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySliderRight;
