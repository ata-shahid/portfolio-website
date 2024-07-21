import React from "react";

interface SkillProps {
  title: string;
}

const Skill = ({ title }: SkillProps) => {
  return (
    <div className="mb-[2rem] md:mb-[4rem]">
      <h1 className="mt-8 uppercase font-semibold mb-4 text-xl sm:text-2xl md:text-3xl text-white">{title}</h1>
      <p className="text-[#ffffffb6] font-normal w-[80%] text-lg opacity-80">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse a ea error distinctio beatae placeat quo mollitia delectus temporibus perspiciatis alias velit possimus, odit eius fuga laboriosam assumenda iure optio.</p>
    </div>
  );
};

export default Skill;
