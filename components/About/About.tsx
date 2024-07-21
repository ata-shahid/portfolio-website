import { ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#121121] pb-12 pt-16 md:pt-[8rem]">
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-2xl font-bold uppercase text-[#0BC5EA] mb-4">
            About Me
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl md:lead-[3rem] leadind-[2rem] capitalize mb-[3rem]  font-bold text-white">
          Turning Concepts into  <span className="text-yellow-400">Reality</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-xl text-slate-300 w-[80%]">
            Fasziniert von der Verbindung von Kreativität und Technologie, arbeite ich mit einem Auge für Design und Benutzerfreundlichkeit daran, digitale Lösungen zu schaffen, die schön und einfach zu bedienen sind. Das Ziel ist es, durch neue Ideen digitale Produkte zu entwickeln, die Menschen inspirieren und begeistern. Die Inspiration wird aus den kleinen Dingen des Alltags, der Natur und den unendlichen Möglichkeiten der digitalen Welt geschöpft.







            </p>
          </div>
         
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
