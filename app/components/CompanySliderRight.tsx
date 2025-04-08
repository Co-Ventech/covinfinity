import React from 'react';

const companies = [
  { name: 'Nexora', icon: false },
  { name: 'Aurionix', icon: false },
  { name: 'Zylotech', icon: false },
  { name: 'Qorvex', icon: false },
  { name: 'Lumivra', icon: false },
  { name: 'Truvora', icon: false },
  { name: 'QuantumEdge', icon: false },
  { name: 'AxiomCore', icon: false },
  { name: 'Vireon', icon: false },
  { name: 'Qorvex', icon: false },
  { name: 'Lumivra', icon: false },
];

const CompanySliderRight = () => {
  return (
    <div className="relative overflow-hidden w-full mt-5">
      <div className="flex space-x-12 animate-slider-right ">
        {/* First set of companies */}
        {companies.map((company, index) => (
          <div key={index} className="flex items-center px-12 py-6 bg-black border border-[#FF698152] rounded-4xl">
            {company.icon && <img src="framer.png" alt="icon" className="mr-1" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
        {/* Duplicate the companies for seamless effect */}
        {companies.map((company, index) => (
          <div key={index + 100} className="flex items-center px-12 py-6 bg-black border border-[#FF698152] rounded-4xl">
            {company.icon && <img src="framer.png" alt="icon" className="mr-1" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySliderRight;