import React from "react";

interface SkillProps {
  title: string;
  description: string;
}

const Skill = ({ title, description }: SkillProps) => {
  return (
    <div className="flex flex-col h-full">
      <h1 className="uppercase font-semibold mb-4 text-xl sm:text-2xl md:text-3xl text-white">{title}</h1>
      <p className="text-[#ffffffb6] font-normal text-lg opacity-80">{description}</p>
    </div>
  );
};

export default Skill;
