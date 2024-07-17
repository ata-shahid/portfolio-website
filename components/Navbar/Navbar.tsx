import React from 'react'
import { Bars3Icon } from '@heroicons/react/16/solid'

interface NavbarProps {
  openNav:()=>void;
}
const Navbar = ({openNav}: NavbarProps) => {
  return (
    <div className='w-[100%] sticky z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
      <h1 className=' flex-[0.6] cursor-pointer text-white font-bold text-2xl'>Portfolio</h1>
      
      <div className='nav-link text-white'>Home</div >
      <div className='nav-link text-white'>About</div >
      <div className='nav-link text-white'>Projects</div >
      <div className='nav-link text-white'>Services</div >
      <div className='nav-link text-white'>Contact</div >
      <div onClick={openNav}>
        <Bars3Icon className='w-8 md:hidden h-8 cursor-pointer text-yellow-300'/>
      </div>

      </div>
      
    </div>
  )
}

export default Navbar
