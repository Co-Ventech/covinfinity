import { useState } from 'react';
import { ProductIcon, CaseStudyIcon, BuyCryptoIcon, MirrorIcon } from './svgs';
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from './ui/GradientText';

type DropdownSections = 'products' | 'services' | 'caseStudies';

// Animation variants defined outside component to prevent recreating on each render
const dropdownVariants = {
  hidden: {
    opacity: 0,
    y: -5,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      type: 'spring',
      stiffness: 500,
      damping: 30,
    },
  },
  exit: {
    opacity: 0,
    y: -5,
    scale: 0.95,
    transition: { duration: 0.2 },
  },
};

const iconVariants = {
  hover: { scale: 1.15, transition: { duration: 0.2 } },
  initial: { scale: 1, transition: { duration: 0.2 } },
};

const navItemVariants = {
  hover: {
    backgroundColor: '#212121',
    transition: { duration: 0.3 },
  },
  initial: {
    backgroundColor: 'transparent',
    transition: { duration: 0.3 },
  },
};

const arrowVariants = {
  open: { rotate: 180, transition: { duration: 0.3 } },
  closed: { rotate: 0, transition: { duration: 0.3 } },
};

const menuItemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
  hover: {
    backgroundColor: '#212121',
    scale: 1.05,
    filter: 'brightness(1.2)',
    borderRadius: '0.375rem',
    transition: { duration: 0.2 },
  },
};

// NavItem component for better reusability
const NavItem = ({
  icon,
  label,
  hasDropdown = false,
  isOpen = false,
  onClick,
  dropdownItems = [],
  hideIcon = false,
}: {
  icon?: React.ReactNode;
  label: string;
  hasDropdown?: boolean;
  isOpen?: boolean;
  onClick?: () => void;
  dropdownItems?: string[];
  hideIcon?: boolean;
}) => {
  return (
    <motion.div
      className="relative flex items-center justify-center gap-2 rounded-[0.625rem] px-3 py-2 font-serif text-base font-medium text-white"
      initial="initial"
      whileHover="hover"
      variants={navItemVariants}
    >
      {icon && !hideIcon && <motion.div variants={iconVariants}>{icon}</motion.div>}

      {hasDropdown ? (
        <button onClick={onClick} className="flex items-center font-serif">
          {label}
          <motion.svg
            width="10"
            height="6"
            viewBox="0 0 10 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-1.5 w-2"
            animate={isOpen ? 'open' : 'closed'}
            variants={arrowVariants}
          >
            <path
              d="M1 1L5 5L9 1"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </button>
      ) : (
        <motion.a href="#" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          {label}
        </motion.a>
      )}

      {hasDropdown && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute top-full left-0 z-50 mt-2 w-40 overflow-hidden rounded-lg bg-[#1A1A1A]/50 text-white shadow-lg backdrop-blur-lg"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={dropdownVariants}
            >
              {dropdownItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  className="block px-4 py-2"
                  custom={index}
                  variants={menuItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
};

const mobileMenuVariants = {
  hidden: {
    x: '100%',
    transition: { duration: 0.3, ease: 'easeInOut' }
  },
  visible: {
    x: 0,
    transition: { duration: 0.3, ease: 'easeInOut' }
  }
};

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    products: false,
    services: false,
    caseStudies: false,
  });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState<string | null>(null);

  const toggleDropdown = (section: DropdownSections) => {
    setIsDropdownOpen((prevState) => ({
      ...Object.keys(prevState).reduce(
        (acc, key) => {
          acc[key as DropdownSections] =
            key === section ? !prevState[key as DropdownSections] : false;
          return acc;
        },
        {} as Record<DropdownSections, boolean>
      ),
    }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileDropdownOpen(null);
    }
  };

  const toggleMobileDropdown = (section: string) => {
    setMobileDropdownOpen(mobileDropdownOpen === section ? null : section);
  };

  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex space-x-19 rounded-[0.625rem] bg-[#1A1A1A] px-3.5 py-2 text-white">
        <motion.div
          className="logo-navbar flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/logo-navbar.png" alt="" className="h-9 w-[11.625rem]" />
        </motion.div>

        {/* Desktop Navigation - hidden on mobile */}
        <div className="hidden lg:flex px-1 py-0.5">
          <NavItem
            icon={<ProductIcon className="size-[1.375rem]" />}
            label="Products"
            hasDropdown={true}
            isOpen={isDropdownOpen.products}
            onClick={() => toggleDropdown('products')}
            dropdownItems={['Product 1', 'Product 2', 'Product 3']}
          />

          <NavItem
            icon={<BuyCryptoIcon className="size-[1.375rem]" />}
            label="Services"
            hasDropdown={true}
            isOpen={isDropdownOpen.services}
            onClick={() => toggleDropdown('services')}
            dropdownItems={['Service 1', 'Service 2', 'Service 3']}
          />

          <NavItem
            icon={<CaseStudyIcon className="size-[1.375rem]" />}
            label="Case Studies"
            hasDropdown={true}
            isOpen={isDropdownOpen.caseStudies}
            onClick={() => toggleDropdown('caseStudies')}
            dropdownItems={['Case Study 1', 'Case Study 2', 'Case Study 3']}
          />

          <NavItem icon={<MirrorIcon className="size-[1.375rem]" />} label="About us" />
        </div>
      </div>

      {/* Desktop Right Side - hidden on mobile */}
      <div className="hidden lg:block rounded-[0.875em] bg-[#1A1A1A] p-2">
        <div className="flex space-x-0.5 rounded-[0.625rem] bg-[#212121] p-1">
          <NavItem
            icon={<MirrorIcon className="size-[1.375rem]" />}
            label="Sign in"
            hideIcon={true}
          />
          <div className="get-started rounded-lg bg-[#1A1A1A] px-3 py-2.5">
            Get Started
          </div>
        </div>
      </div>

      {/* Mobile Menu Button - visible only on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="lg:hidden rounded-lg bg-[#1A1A1A] p-2 text-white"
      >
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isMobileMenuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMobileMenu}
            />
            
            {/* Menu Panel */}
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed right-0 top-0 h-full w-72 bg-[#1A1A1A]/90 backdrop-blur-md p-6 z-50 lg:hidden"
            >
              <div className="flex flex-col space-y-4 text-white">
                {/* Products Section */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => toggleMobileDropdown('products')}
                    className="flex items-center justify-between py-2 hover:bg-[#212121] rounded-lg px-2"
                  >
                    <span className="text-lg font-semibold">Products</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        mobileDropdownOpen === 'products' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'products' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {['Product 1', 'Product 2', 'Product 3'].map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block pl-6 py-2 hover:bg-[#212121] rounded-lg"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Services Section */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => toggleMobileDropdown('services')}
                    className="flex items-center justify-between py-2 hover:bg-[#212121] rounded-lg px-2"
                  >
                    <span className="text-lg font-semibold">Services</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        mobileDropdownOpen === 'services' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'services' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {['Service 1', 'Service 2', 'Service 3'].map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block pl-6 py-2 hover:bg-[#212121] rounded-lg"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Case Studies Section */}
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={() => toggleMobileDropdown('caseStudies')}
                    className="flex items-center justify-between py-2 hover:bg-[#212121] rounded-lg px-2"
                  >
                    <span className="text-lg font-semibold">Case Studies</span>
                    <svg
                      className={`w-5 h-5 transform transition-transform ${
                        mobileDropdownOpen === 'caseStudies' ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {mobileDropdownOpen === 'caseStudies' && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        {['Case Study 1', 'Case Study 2', 'Case Study 3'].map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="block pl-6 py-2 hover:bg-[#212121] rounded-lg"
                          >
                            {item}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="#" className="py-2 hover:bg-[#212121] rounded-lg px-2">
                  About us
                </a>

                <div className="pt-4 border-t border-gray-700">
                  <a href="#" className="block py-2 hover:bg-[#212121] rounded-lg px-2">
                    Sign in
                  </a>
                  <a href="#" className="block py-2 hover:bg-[#212121] rounded-lg px-2">
                    Get Started
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
