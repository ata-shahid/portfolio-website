import React, { useState } from "react";
import Particle from "../Particle/Particle";
import TextEffect from "../TextEffect/TextEffect";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";

const Hero = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDownload = (language: string) => {
    const link = document.createElement('a');
    link.href = language === 'EN' ? '/cv/Resume_EN.pdf' : '/cv/Resume_DE.pdf';
    link.download = language === 'EN' ? 'Resume_EN.pdf' : 'Resume_DE.pdf';
    link.click();
  };

  return (
    <div className="relative h-[100vh] bg-[#0d1218] mt-[5vh] bg-cover bg-center flex items-center justify-center">
      <Particle />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 w-[80%] mx-auto flex flex-col lg:flex-row gap-6 h-full items-center">
        <div className="text-center lg:text-left flex-1">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            Hello, I&apos;m <span className="text-yellow-400">Shahid!</span>
          </h1>

          <TextEffect />
          <p className="mt-8 text-left text-sm md:text-lg lg:text-xl text-[#ffffff92]">
            Als Medieninformatik-Student mit Fokus auf Front-End-Entwicklung und UI/UX-Design habe ich umfassende Kenntnisse in React, Next.js, Tailwind CSS und Figma. Ich gestalte intuitive und ansprechende Benutzeroberflächen. Lassen Sie uns innovative digitale Lösungen entwickeln!
          </p>

          <div className="mt-8 flex flex-col space-y-6 sm:space-y-0 sm:flex-row items-center sm:space-x-6 relative">
            <div className="relative">
              <button
                className={`px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-lg font-bold bg-[#0BC5EA] text-black items-center flex space-x-2 rounded-xl w-full ${dropdownOpen ? 'rounded-b-none' : ''}`}
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <p>Download Resume</p>
                <ArrowDownTrayIcon className="w-6 h-7 text-black" />
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
        <div className="hidden lg:flex flex-1 relative mx-auto lg:mx-0 items-center justify-center -mt-8">
          <div className="w-[24rem] h-[24rem] lg:w-[30rem] lg:h-[30rem] rounded-full p-[2px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
            <div className="relative w-full h-full bg-[#0d1218] rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <Image
                src="/images/pic.png"
                alt="profile pic"
                fill
                priority
                sizes="100%"
                className="object-cover rounded-full transform translate-y-9"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
