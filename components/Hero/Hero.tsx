import React, { useState, useEffect, useRef } from "react";
import Particle from "../Particle/Particle";
import TextEffect from "../TextEffect/TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleDownload = (language: string) => {
    const link = document.createElement('a');
    link.href = language === 'EN' ? '/cv/Resume_EN.pdf' : '/cv/Resume_DE.pdf';
    link.download = language === 'EN' ? 'Resume_EN.pdf' : 'Resume_DE.pdf';
    link.click();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  return (
    <div className="relative h-[100vh] bg-[#0d1218] mt-[5vh] bg-cover bg-center flex flex-col items-center justify-center lg:flex-row md:flex-row">
      <Particle />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 w-[90%] sm:w-[80%] mx-auto flex flex-col items-center lg:flex-row md:flex-row gap-6 h-full lg:items-center md:items-center mt-16 lg:mt-0 md:mt-0">
        <div className="flex flex-col items-center lg:flex-1 md:flex-1 lg:justify-start md:justify-start lg:order-2 md:order-2 mt-4 lg:mt-0 md:mt-0">
          <div className="relative w-[10rem] h-[10rem] sm:w-[15rem] sm:h-[15rem] md:w-[20rem] md:h-[20rem] lg:w-[48rem] lg:h-[48rem] rounded-full p-[2px] bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-full blur-md"></div>
            <div className="relative w-full h-full bg-[#0d1218] rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              
              <Image
                src="/images/pic.png"
                alt="profile pic"
                fill
                priority
                sizes="100%"
                className="object-cover rounded-full mt-14"

              />
              
            </div>
          </div>
        </div>
        <div className="text-center lg:text-left md:text-left flex-1 mt-4 lg:mt-0 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold mb-4">
            Hello, I&apos;m <span className="text-yellow-400">Shahid!</span>
          </h1>
          <TextEffect />
          <p className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-xl text-[#ffffff92]">
            Als Medieninformatik-Student mit Fokus auf Front-End-Entwicklung und UI/UX-Design habe ich umfassende Kenntnisse in React, Next.js, Tailwind CSS und Figma. Ich gestalte intuitive und ansprechende Benutzeroberflächen. Lassen Sie uns innovative digitale Lösungen entwickeln!
          </p>
          <div className="mt-4 sm:mt-6 md:mt-8 flex flex-col space-y-4 sm:space-y-6 md:space-y-6 lg:space-y-6 sm:flex-row md:flex-row lg:flex-row items-center sm:space-x-6 md:space-x-6 lg:space-x-6 relative">
            <div className="relative" ref={dropdownRef}>
              <button
                className={`px-3 py-2 sm:px-6 sm:py-3 md:px-6 md:py-3 lg:px-6 lg:py-3 hover:bg-yellow-400 transition-all duration-200 text-sm sm:text-base md:text-base lg:text-base font-bold bg-[#0BC5EA] text-black items-center flex space-x-2 rounded-xl w-full ${dropdownOpen ? 'rounded-b-none' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-5 lg:h-5 text-black" />
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 right-0 -mt-1 rounded-b-xl shadow-lg bg-[#084C61] ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <button
                      onClick={() => handleDownload('EN')}
                      className="block px-4 py-2 text-sm text-white hover:bg-[#0BC5EA] hover:text-black w-full text-left"
                      role="menuitem"
                    >
                      Resume (English)
                    </button>
                    <button
                      onClick={() => handleDownload('DE')}
                      className="block px-4 py-2 rounded-b-lg text-sm text-white hover:bg-[#0BC5EA] hover:text-black w-full text-left"
                      role="menuitem"
                    >
                      Resume (Deutsch)
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
