import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const DropdownMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className="mt-24 flex items-center space-x-4">
      {/* All Services Dropdown */}
      <div
        className="relative mx-4 inline-block rounded-[1.25rem] p-[1px]"
        style={{
          background: 'linear-gradient(180deg, rgba(31, 34, 36, 1) 100%, rgba(22, 24, 26, 1) 100%)',
        }}
      >
        <motion.button
          className="flex items-center rounded-[1.2rem] bg-gradient-to-b from-[#16181A] to-[#0F1011] px-6 py-3 text-[1rem] font-medium text-[#F0F2FF]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => toggleDropdown('services')}
        >
          All Services
          <motion.svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-16"
            animate={activeDropdown === 'services' ? 'open' : 'closed'}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#F0F2FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {activeDropdown === 'services' && (
            <motion.div
              className="absolute top-full left-0 z-50 mt-2 w-56 origin-top rounded-lg bg-[#1A1A1A]/50 shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2">
                {[
                  'Web Development',
                  'Mobile Apps',
                  'UI/UX Design',
                  'Cloud Services',
                  'AI Solutions',
                ].map((item, index) => (
                  <motion.div
                    key={item}
                    className="cursor-pointer rounded-md px-4 py-2 text-white hover:bg-[#212121]"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* All Categories Dropdown */}
      <div
        className="relative mx-4 inline-block rounded-[1.25rem] p-[1px]"
        style={{
          background: 'linear-gradient(180deg, rgba(31, 34, 36, 1) 100%, rgba(22, 24, 26, 1) 100%)',
        }}
      >
        <motion.button
          className="flex items-center rounded-[1.2rem] bg-gradient-to-b from-[#16181A] to-[#0F1011] px-6 py-3 font-serif text-[1rem] font-medium text-[#F0F2FF]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => toggleDropdown('categories')}
        >
          All Categories
          <motion.svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4"
            animate={activeDropdown === 'categories' ? 'open' : 'closed'}
            variants={{
              open: { rotate: 180 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.3 }}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="#F0F2FF"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </motion.button>

        <AnimatePresence>
          {activeDropdown === 'categories' && (
            <motion.div
              className="absolute top-full left-0 z-50 mt-2 w-56 origin-top rounded-lg bg-[#1A1A1A]/50 shadow-lg backdrop-blur-lg"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-2">
                {['Technology', 'Finance', 'Healthcare', 'Education', 'E-commerce'].map(
                  (item, index) => (
                    <motion.div
                      key={item}
                      className="cursor-pointer rounded-md px-4 py-2 text-white hover:bg-[#212121]"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item}
                    </motion.div>
                  )
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default DropdownMenu;
