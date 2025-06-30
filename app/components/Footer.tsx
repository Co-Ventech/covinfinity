import { FacebookIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './svgs';
import { ROUTES } from '~/constants/routes';
import { NavLink } from 'react-router';

export default function Footer() {
  return (
    <footer className="w-full bg-[#111012] px-4 py-28 text-center text-white">
      <div className="mx-auto max-w-6xl space-y-14">
        {/* Social Media Icons */}
        <div className="mx-auto flex w-full max-w-[20.125em] min-w-[20.125em] justify-between space-x-6">
          <a 
            href="https://www.linkedin.com/company/co-ventech/" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Visit our LinkedIn page"
          >
            <LinkedinIcon />
            <span className="sr-only">LinkedIn</span>
          </a>
         <a 
            href="https://x.com/Co_VenTech?t=YmGv2PNJH2uS-YCn1SBzaA&s=09" 
            target="_blank"
            rel="noopener noreferrer"
            className="transition-opacity hover:opacity-80"
            aria-label="Visit our Twitter page"
          >
            <TwitterIcon />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            <FacebookIcon />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="#" className="transition-opacity hover:opacity-80">
            <InstagramIcon/>
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mx-auto w-full max-w-[38.25rem] min-w-[38.25rem]">
          <ul className="flex flex-wrap justify-between gap-x-4 gap-y-2 sm:gap-x-8">
            <li>
              <NavLink to={ROUTES.LOGIN} className="inline-block py-2 hover:underline">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.REGISTER} className="inline-block py-2 hover:underline">
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.SERVICES} className="inline-block py-2 hover:underline">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.CASE_STUDIES} className="inline-block py-2 hover:underline">
                Case Studies
              </NavLink>
            </li>
            {/* <li>
              <NavLink to={ROUTES.ABOUT} className="inline-block py-2 hover:underline">
                About
              </NavLink>
            </li> */}
          </ul>
        </nav>

        {/* Address */}
        <div className="text-[#908484]">
          Headquarter (USA, Texas office): 5900 Balcones Drive Austin, TX, United States 78731
        </div>
      </div>
    </footer>
  );
}
