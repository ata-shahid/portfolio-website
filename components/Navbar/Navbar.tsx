import React from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon } from '@heroicons/react/16/solid';

interface NavbarProps {
  openNav: () => void;
}

const Navbar = ({ openNav }: NavbarProps) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className=' flex-[0.6] text-white font-bold text-2xl'>Portfolio</h1>

        <Link to="hero" smooth={true} duration={900} className='nav-link text-white'>Home</Link>
        <Link to="about" smooth={true} duration={900} className='nav-link text-white'>About</Link>
        <Link to="projects" smooth={true} duration={900} className='nav-link text-white'>Projects</Link>
        <Link to="skills" smooth={true} duration={900} className='nav-link text-white'>Skills</Link>
        <Link to="contact" smooth={true} duration={900} className='nav-link text-white'>Contact</Link>
        <div onClick={openNav}>
          <Bars3Icon className='w-8 md:hidden h-8 cursor-pointer text-yellow-300' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
