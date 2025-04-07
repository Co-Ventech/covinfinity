import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    products: false,
    services: false,
    caseStudies: false,
  });

  const toggleDropdown = (section) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-black-900 border-b border-gray-700">
      <div className="max-w-[95%] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side of the navbar */}
        <div className="flex space-x-24 bg-gray-900 text-white px-6 py-2 rounded-lg ">
          <div className="flex">
            <img src="/logo.png" alt="" className="h-8 w-8 mt-2" />
            <span className="text-xl ml-3 font-bold">Coventech</span>
          </div>

          {/* Navbar Links with rounded boxes */}
          <div className="flex space-x-3">
            {/* Products Dropdown */}
            <div className="relative flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/Product-Icon.png" alt="" className="h-5 w-5 mt-4" />
              <button
                onClick={() => toggleDropdown('products')}
                className="pl-2 pr-4 py-2 flex items-center"
              >
                Products
                <img
                  src={isDropdownOpen.products ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="h-2.5 w-3.5 ml-4 mt-1"
                />
              </button>
              {isDropdownOpen.products && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-black text-white rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2">Product 1</a>
                  <a href="#" className="block px-4 py-2">Product 2</a>
                  <a href="#" className="block px-4 py-2">Product 3</a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative bg-black pl-2 flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/services.png" alt="" className="h-5 w-5 mt-4" />
              <button
                onClick={() => toggleDropdown('services')}
                className="pl-2 pr-4 py-2 flex items-center"
              >
                Services
                <img
                  src={isDropdownOpen.services ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="h-2.5 w-3.5 ml-4 mt-1"
                />
              </button>
              {isDropdownOpen.services && (
                <div className="absolute top-full left-0 mt-2 w-40 bg-black text-white rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2">Service 1</a>
                  <a href="#" className="block px-4 py-2">Service 2</a>
                  <a href="#" className="block px-4 py-2">Service 3</a>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div className="relative flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/CaseStudy-Icon.png" alt="" className="h-5 w-5 mt-4" />
              <button
                onClick={() => toggleDropdown('caseStudies')}
                className="pl-2 pr-4 px-4 py-2 flex items-center"
              >
                Case Studies
                <img
                  src={isDropdownOpen.caseStudies ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="h-2.5 w-3.5 ml-3 mt-1"
                />
              </button>
              {isDropdownOpen.caseStudies && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-black text-white rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2">Case Study 1</a>
                  <a href="#" className="block px-4 py-2">Case Study 2</a>
                  <a href="#" className="block px-4 py-2">Case Study 3</a>
                </div>
              )}
            </div>

            {/* About Us Link */}
            <div className="flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/mirror.png" alt="" className="h-5 w-5 mt-4" />
              <a href="#" className="pl-2 pr-4 py-2 transition">About us</a>
            </div>
          </div>
        </div>

        {/* Right side of the navbar */}
        <div className="bg-gray-500 p-2 rounded-lg">
          <div className="flex space-x-6 rounded-lg bg-gray-900 px-6 py-2">
            <button className="text-white flex items-center space-x-2 hover:text-gray-500">
              <span>Sign in</span>
            </button>
            <button className="bg-gray-700 text-white px-6 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-600">
              <span className='bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent'>Get Started</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




