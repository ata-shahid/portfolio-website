import React from "react";

interface SkillProps {
  title: string;
  description: string;
}

const Skill = ({ title, description }: SkillProps) => {
  return (
    <div className="mb-[2rem] md:mb-[4rem] flex flex-col justify-start h-[200px]">
      <h1 className="mt-8 uppercase font-semibold mb-4 text-xl sm:text-2xl md:text-3xl text-white">{title}</h1>
      <p className="text-[#ffffffb6] font-normal w-[80%] text-lg opacity-80">
        {description}
      </p>
    </div>
  );
};

export default Skill;
