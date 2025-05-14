import React from 'react';

const LogoGrid: React.FC = () => {
  const logos = [
    { name: 'Company 1', src: '/logo1.png' },
    { name: 'Company 2', src: '/logo2.png' },
    { name: 'Company 3', src: '/logo3.png' },
    { name: 'Company 4', src: '/logo4.png' },
    { name: 'Company 5', src: '/logo5.png' },
    { name: 'Company 6', src: '/logo6.png' },
    { name: 'Company 1', src: '/logo7.png' },
    { name: 'Company 2', src: '/logo8.png' },
    { name: 'Company 3', src: '/logo6.png' },
    { name: 'Company 4', src: '/logo9.png' },
    { name: 'Company 5', src: '/logo10.png' },
    { name: 'Company 6', src: '/logo11.png' },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-bold mb-12 text-[#EBF5FF]/24">
         Trusted by the world’s most innovative AI-Native comapnies
        </h2>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logos.map((logo, index) => (
            <div key={index} className="col-span-1 flex justify-center items-center">
              <img
                className="h-12 object-contain opacity-70 hover:opacity-100 transition-opacity"
                src={logo.src}
                alt={logo.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoGrid;
