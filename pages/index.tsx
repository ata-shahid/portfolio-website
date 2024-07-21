import React, { useState } from "react";
import Navbar from "@/components/Navbar/Navbar";
import MobileNav from "@/components/MobileNav/MobileNav";
import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";

const HomePage = () => {
  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
    <div className="overflow-x-hidden">
      <div>
        {/* Navbar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Navbar openNav={openNav} />
        {/* Hero Section */}
        <Hero />
        <div className="relative z-30">
          {/** About */}

          <About />
          <Skills/>
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;
