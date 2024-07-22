import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="bg-[#192330] pb-12 pt-16 md:pt-[8rem] min-h-[90vh] flex"> 
      <div className="flex flex-col md:flex-row w-[80%] mx-auto gap-[3rem] items-center">
        <div className="flex-1">
          <h1 className="text-2xl font-bold uppercase text-[#0BC5EA] mb-4">
            About Me
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl md:lead-[3rem] leadind-[2rem] capitalize mb-[3rem]  font-bold text-white">
            Turning Concepts into{" "}
            <span className="text-yellow-400">Reality</span>
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <p className="text-xl text-slate-300 w-[80%]">
              Fasziniert von der Verbindung von Kreativität und Technologie,
              arbeite ich mit einem Auge für Design und Benutzerfreundlichkeit
              daran, digitale Lösungen zu schaffen, die schön und einfach zu
              bedienen sind. Das Ziel ist es, durch neue Ideen digitale Produkte
              zu entwickeln, die Menschen inspirieren und begeistern. Die
              Inspiration wird aus den kleinen Dingen des Alltags, der Natur und
              den unendlichen Möglichkeiten der digitalen Welt geschöpft.
            </p>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-start mt-[2rem] lg:mt-0">
          <div className="relative lg:w-[500px] lg:h-[500px] w-[300px] h-[300px]">
            <Image
              src="/images/about.jpg"
              alt="user"
              fill
              priority
              sizes="100%"
              className="relative t-[11] w-[100%] object-contain h-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
