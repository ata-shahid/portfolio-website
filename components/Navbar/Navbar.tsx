import React from 'react'
import NavLinks from './NavLinks'
import { Bars3Icon } from '@heroicons/react/16/solid'

const Navbar = () => {
  return (
    <div className='w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md'>
      <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
      <h1 className=' flex-[0.6] cursor-pointer text-white font-bold text-2xl'>Portfolio</h1>
      
      <NavLinks>Home</NavLinks>
      <NavLinks>About</NavLinks>
      <NavLinks>Projects</NavLinks>
      <NavLinks>Services</NavLinks>
      <NavLinks>Contact</NavLinks>
      <div>
        <Bars3Icon className='w-8 md:hidden h-8 cursor-pointer text-yellow-300'/>
      </div>

      </div>
      
    </div>
  )
}

export default Navbar
