import React, { useState } from 'react';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-black-900 border-b border-gray-700">
      <div className="max-w-[95%] mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left side of the navbar */}
        <div className="flex space-x-8  bg-gray-900 text-white px-6 py-2 rounded-lg ">
          <div className="text-xl font-bold">Coventech</div>
          
          {/* Navbar Links with rounded boxes */}
          <div className="flex space-x-4">
            <div className="flex ">
              <img src="/Product-Icon.png" alt="" className="h-5 w-5 mt-4"/>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-gray-700 transition">Products</a>
            </div>
            <div className=" pl-2 flex bg-black rounded-lg">
            <img src="/services.png" alt="" className="h-5 w-5 mt-4"/>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-gray-700 transition">Services</a>
            </div>
            <div className="relative flex">
            <img src="/CaseStudy-Icon.png" alt="" className="h-5 w-5 mt-4"/>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="px-4 py-2 rounded-full hover:bg-gray-700 transition"
              >
                Case Studies
              </button>
              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-black text-white rounded-lg shadow-lg">
                  <a href="#" className="block px-4 py-2">Case Study 1</a>
                  <a href="#" className="block px-4 py-2">Case Study 2</a>
                  <a href="#" className="block px-4 py-2">Case Study 3</a>
                </div>
              )}
            </div> 
            <div className="flex ">
            <img src="/mirror.png" alt="" className="h-5 w-5 mt-4"/>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-gray-700 transition">About us</a>
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



