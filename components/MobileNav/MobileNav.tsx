import { XMarkIcon } from '@heroicons/react/16/solid';
import React from 'react';
import { Link } from 'react-scroll';

interface MobileNavProps {
  nav: boolean;
  
  closeNav: () => void;

}

const MobileNav = ({ nav, closeNav }: MobileNavProps) => {
  const navAnimation = nav ? 'translate-x-0' : 'translate-x-[-100%]';
  const offsetValue= -70;
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[100000] bg-[#09101a]`}>
      <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
        <Link to="hero" smooth={true} duration={500} className='nav-link-mobile' onClick={closeNav} offset={offsetValue}>Home</Link>
        <Link to="about" smooth={true} duration={500} className='nav-link-mobile' onClick={closeNav} offset={offsetValue}>About</Link>
        <Link to="projects" smooth={true} duration={500} className='nav-link-mobile' onClick={closeNav} offset={offsetValue}>Projects</Link>
        <Link to="skills" smooth={true} duration={500} className='nav-link-mobile' onClick={closeNav} offset={offsetValue}>Skills</Link>
        <Link to="contact" smooth={true} duration={500} className='nav-link-mobile' onClick={closeNav} offset={offsetValue}>Contact</Link>
      </div>
      <div onClick={closeNav} className='absolute z-[100000000] cursor-pointer top-8 right-8 w-8 h-8 text-yellow-400'>
        <XMarkIcon />
      </div>
    </div>
  );
}

export default MobileNav;
