import React from 'react';

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
    <div className="relative overflow-hidden w-full mt-4">
      <div className="flex space-x-5 animate-slider-right ">
        {/* First set of companies */}
        {companies.map((company, index) => (
          <div key={index} className="flex items-center justify-center px-12 py-4 bg-black border border-[#FF698152] rounded-3xl">
            {company.icon && <img src="framer.png" alt="icon" className="w-5 h-5 mr-2" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
        {/* Duplicate the companies for seamless effect */}
        {companies.map((company, index) => (
          <div key={index + 100} className="flex items-center justify-center px-12 py-4 bg-black border border-[#FF698152] rounded-3xl">
            {company.icon && <img src="framer.png" alt="icon" className="w-5 h-5 mr-2" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySliderRight;