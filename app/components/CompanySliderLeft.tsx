import React from 'react';

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
    <div className="relative overflow-hidden w-full mt-5">
      <div className="flex space-x-12 animate-slider-left">
        {/* First set of companies */}
        {companies.map((company, index) => (
          <div key={index} className="flex items-center px-12 py-6 w-auto bg-black border border-[#FF698152] rounded-4xl"> 
          
            {company.icon && <img src="framer.png" alt="icon" className="mr-1" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
        {/* Duplicate the companies for seamless effect */}
        {companies.map((company, index) => (
          <div key={index + 100} className="flex items-center w-auto px-12 py-6 bg-black border border-[#FF698152] rounded-4xl">
            {company.icon && <img src="framer.png" alt="icon" className="mr-1" />}
            <span className="text-white">{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanySliderLeft;

