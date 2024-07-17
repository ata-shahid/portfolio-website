import React, { useState } from 'react'
import Navbar from '@/components/Navbar/Navbar'
import MobileNav from '@/components/MobileNav/MobileNav';
import Hero from '@/components/Hero/Hero';

const HomePage = () => {

  const [nav, setNav]= useState(false);
  const openNav=()=> setNav(true);
  const closeNav=()=> setNav(false);

  return (
    <div className='overflow-x-hidden'>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Navbar openNav={openNav}/>
      {/** Hero Section */}
      <Hero/>
    </div>
  )
}

export default HomePage
