import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-12 pt-16 md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-xl font-bold uppercase text-[#0BC5EA] mb-4">
            About Me
          </h1>
          <h2 className="text-2xl md:text-4xl lg:text-5xl md:lead-[3rem] leadind-[2rem] capitalize mb-[3rem]  font-bold text-white">
            Transforming <span className="text-yellow-400">Visions</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-xl text-slate-300 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores consequuntur, dolore consectetur quo facere est
              voluptates doloribus expedita eligendi excepturi vero nesciunt ut
              officiis atque praesentium quis distinctio. Inventore, ipsam.
            </p>
          </div>
          <button className="px-8 hover:bg-yellow-400 transition-all duration-200 py-4 text-lg font-bold bg-[#0BC5EA] text-black items-center flex space-x-2 rounded-xl">
            <p>Download Resume</p>
            <ArrowDownTrayIcon className="w-6 h-7 text-black" />
          </button>
        </div>
        <div className="lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative">
          <Image
            src="/images/about.jpg"
            alt="user"
            layout="fill"
            objectFit="contain"
            className="relative t-[11] w-[100%] object-contain h-[100%]"
          />
          <div className="absolute w-[100%] h-[100%] z-[10] gb-[#0BC5EA] top-[-2rem] right[-2rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
