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
    <div className="relative overflow-hidden w-full mt-3">
      <div className="flex space-x-5 animate-slider-left">
        {/* First set of companies */}
        {companies.map((company, index) => (
          <div key={index} className="flex items-center justify-center px-12 py-4 bg-black border border-[#FF698152] rounded-3xl">
          {company.icon && <img src="framer.png" alt="icon" className="w-5 h-5 mr-2" />}
          <span className="text-white whitespace-nowrap">{company.name}</span>
        </div>
        ))}
        {/* Duplicate the companies for seamless effect */}
        {companies.map((company, index) => (
          <div key={index} className="flex items-center justify-center px-12 py-4 bg-black border border-[#FF698152] rounded-3xl">
          {company.icon && <img src="framer.png" alt="icon" className="w-5 h-5 mr-2" />}
          <span className="text-white whitespace-nowrap ">{company.name}</span>
        </div>
        ))}
      </div>
      <div className='flex justify-center mt-20 mb-12'>
      <img src="43k-talents.png" alt="persons" className="item-center h-6 " />
      </div>
    </div>
  );
};

export default CompanySliderLeft;

