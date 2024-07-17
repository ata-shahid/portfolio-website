import React from "react";
import Particle from "../Particle/Particle";
import TextEffect from "../TextEffect/TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative h-[88vh] bg-[#0d1218] bg-cover bg-center flex items-center justify-center">
      <Particle />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      <div className="relative z-10 w-[80%] mx-auto grid lg:grid-cols-2 gap-6 h-full items-center">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-4">
            HI, I&apos;M <span className="text-yellow-400">SHAHID!</span>
          </h1>
          <TextEffect />
        </div>
        <div className="relative mx-auto lg:mx-0 flex items-center justify-center">
          <div className="w-[24rem] h-[24rem] lg:w-[30rem] lg:h-[30rem] rounded-full p-[2px] bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700">
            <div className="relative w-full h-full bg-[#0d1218] rounded-full flex items-center justify-center overflow-hidden shadow-2xl">
              <Image 
                src="/images/pic.png" 
                alt="profile pic" 
                layout="fill" 
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
