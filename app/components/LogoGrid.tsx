import React, { useEffect, useState } from 'react';

const useIsSmallScreen = () => {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 1020px)');
    const handleChange = () => setIsSmall(mediaQuery.matches);

    handleChange(); // Initial check
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return isSmall;
};

const LogoGrid: React.FC = () => {
  const isSmallScreen = useIsSmallScreen();
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
   const logosToDisplay = isSmallScreen ? logos.slice(0, 6) : logos;
  return (
    <div className="pb-12 pt-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative flex items-center justify-center my-12">
  {/* Left line */}
  <div 
    className="h-px flex-grow"
    style={{
      background: 'linear-gradient(to right, transparent, #252729)'
    }}
  ></div>
  
  {/* Heading text */}
  <h2 className="mx-4 whitespace-nowrap text-center text-sm font-bold text-[#EBF5FF]/24">
    Trusted by the world's most innovative AI-Native companies
  </h2>
  
  {/* Right line */}
  <div 
    className="h-px flex-grow"
    style={{
      background: 'linear-gradient(to left, transparent, #252729)'
    }}
  ></div>
</div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {logosToDisplay.map((logo, index) => (
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
