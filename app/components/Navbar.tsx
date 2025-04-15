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
      className="relative flex items-center justify-center gap-2 rounded-[0.625rem] px-3 py-2 text-base font-medium text-white"
      initial="initial"
      whileHover="hover"
      variants={navItemVariants}
    >
      {icon && !hideIcon && <motion.div variants={iconVariants}>{icon}</motion.div>}

      {hasDropdown ? (
        <button onClick={onClick} className="flex items-center">
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
              className="absolute top-full left-0 z-50 mt-2 w-40 overflow-hidden rounded-lg bg-[#1A1A1A] text-white shadow-lg backdrop-blur-lg"
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

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    products: false,
    services: false,
    caseStudies: false,
  });

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

  return (
    <div className="flex items-center justify-between p-8">
      <div className="flex space-x-19 rounded-[0.625rem] bg-[#1A1A1A] p-3.5 text-white">
        <motion.div
          className="logo-navbar flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img src="/logo-navbar.png" alt="" className="w- h-9 w-[11.625rem]" />
        </motion.div>

        {/* Navbar Links with rounded boxes */}
        <div className="flex px-1 py-0.5">
          {/* Products Dropdown */}
          <NavItem
            icon={<ProductIcon className="size-[1.375rem]" />}
            label="Products"
            hasDropdown={true}
            isOpen={isDropdownOpen.products}
            onClick={() => toggleDropdown('products')}
            dropdownItems={['Product 1', 'Product 2', 'Product 3']}
          />

          {/* Services Dropdown */}
          <NavItem
            icon={<BuyCryptoIcon className="size-[1.375rem]" />}
            label="Services"
            hasDropdown={true}
            isOpen={isDropdownOpen.services}
            onClick={() => toggleDropdown('services')}
            dropdownItems={['Service 1', 'Service 2', 'Service 3']}
          />

          {/* Case Studies Dropdown */}
          <NavItem
            icon={<CaseStudyIcon className="size-[1.375rem]" />}
            label="Case Studies"
            hasDropdown={true}
            isOpen={isDropdownOpen.caseStudies}
            onClick={() => toggleDropdown('caseStudies')}
            dropdownItems={['Case Study 1', 'Case Study 2', 'Case Study 3']}
          />

          {/* About Us Link */}
          <NavItem icon={<MirrorIcon className="size-[1.375rem]" />} label="About us" />
        </div>
      </div>
      {/* Right side of the navbar */}
      <div className="rounded-[0.875em] bg-[#1A1A1A] p-2">
        <div className="flex space-x-0.5 rounded-[0.625rem] bg-[#212121] p-1">
          <NavItem
            icon={<MirrorIcon className="size-[1.375rem]" />}
            label="Sign in"
            hideIcon={true}
          />

          <div className="get-started rounded-lg bg-[#1A1A1A] px-3 py-2.5">
            Get Started
            {/* <GradientText className="font-medium">Get Started</GradientText> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
