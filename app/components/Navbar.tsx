import React, { useState } from 'react';
import { Link } from 'react-router';
import { ThemeToggle } from './ui/ThemeToggle';

type DropdownSections = 'products' | 'services' | 'caseStudies';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    products: false,
    services: false,
    caseStudies: false,
  });

  const toggleDropdown = (section: DropdownSections) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div className="bg-black-900 border-b border-gray-700">
      <div className="mx-auto flex max-w-[98%] items-center justify-between px-2 py-2">
        {/* Left side of the navbar */}
        <div className="flex space-x-12 rounded-xl bg-[#1A1A1A] px-6 py-1 text-white">
          <div className="flex">
            <img src="/logo.png" alt="" className="mt-2.5 h-4 w-4" />
            <span className="ml-2 mt-1 text-lg font-semibold">Coventech</span>
          </div>

          {/* Navbar Links with rounded boxes */}
          <div className="flex space-x-0.5">
            {/* Products Dropdown */}
            <div className="relative flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/Product-Icon.png" alt="" className="mt-3 h-3.5 w-3.5" />
              <button
                onClick={() => toggleDropdown('products')}
                className="flex items-center py-2 pr-3 pl-1.5"
              >
                Products
                <img
                  src={isDropdownOpen.products ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="mt-1 ml-2 h-1.5 w-2"
                />
              </button>
              {isDropdownOpen.products && (
                <div className="absolute top-full left-0 mt-2 w-40 rounded-lg bg-black text-white shadow-lg">
                  <a href="#" className="block px-4 py-2">
                    Product 1
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Product 2
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Product 3
                  </a>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div className="relative flex rounded-lg bg-[#212121] pl-2 hover:bg-[#1E1E1E]">
              <img src="/services.png" alt="" className="mt-3.5 h-3.5 w-3.5" />
              <button
                onClick={() => toggleDropdown('services')}
                className="flex items-center py-2 pr-3 pl-1"
              >
                Services
                <img
                  src={isDropdownOpen.services ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="mt-1 ml-2 h-1.5 w-2"
                />
              </button>
              {isDropdownOpen.services && (
                <div className="absolute top-full left-0 mt-2 w-40 rounded-lg bg-black text-white shadow-lg">
                  <a href="#" className="block px-4 py-2">
                    Service 1
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Service 2
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Service 3
                  </a>
                </div>
              )}
            </div>

            {/* Case Studies Dropdown */}
            <div className="relative flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/CaseStudy-Icon.png" alt="" className="mt-3 h-3.5 w-3.5" />
              <button
                onClick={() => toggleDropdown('caseStudies')}
                className="flex items-center  px-4 py-2 pr-3 pl-1"
              >
                Case Studies
                <img
                  src={isDropdownOpen.caseStudies ? '/up-arrow.png' : '/down-arrow.png'}
                  alt="dropdown arrow"
                  className="mt-1 ml-2 h-1.5 w-2"
                />
              </button>
              {isDropdownOpen.caseStudies && (
                <div className="absolute top-full left-0 mt-2 w-52 rounded-lg bg-black text-white shadow-lg">
                  <a href="#" className="block px-4 py-2">
                    Case Study 1
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Case Study 2
                  </a>
                  <a href="#" className="block px-4 py-2">
                    Case Study 3
                  </a>
                </div>
              )}
            </div>

            {/* About Us Link */}
            <div className="flex rounded-lg hover:bg-[#1E1E1E]">
              <img src="/mirror.png" alt="" className="mt-3.5 h-3 w-3.5" />
              <a href="#" className="py-2 pr-3 pl-1 transition">
                About us
              </a>
            </div>
          </div>
        </div>

        {/* Right side of the navbar */}
        <div className="rounded-xl bg-[#1A1A1A] p-1">
          <div className="flex space-x-3 rounded-xl bg-[#212121] py-1 pr-2 pl-5">
            <button className="flex items-center  text-white hover:text-gray-500">
              <span>Sign in</span>
            </button>
            <button className="flex items-center  rounded-lg bg-[#1A1A1A] px-2 py-1 text-white hover:bg-gray-600">
              <span className="bg-gradient-to-r from-[#FF6981] to-white bg-clip-text text-transparent">
                Get Started
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
