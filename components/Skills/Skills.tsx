import React from 'react'
import Skill from './Skill'
import Language from './Language'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education &amp; <span className='text-yellow-400'>Skills</span></h1>
      <div className='flex flex-wrap w-[80%] mx-auto pt-[4rem] md:pt:pt-[8rem] gap-[2rem] items-center'>
        <div className='flex-1'>
          <Skill title="Front-End Development"/>
          <Skill title= "UI/UX Design"/>
          <Language skill1="TypeScript" skill2="Tailwind CSS" skill3="Figma" level1="w-[85%]" level2="w-[80%]" level3="w-[90%]"/>
        </div>
        <div className='flex-1'>
          <Skill title="React & Next.js"/>
          <Skill title= "Back-End Development"/>
          <Language skill1="React & Next.js" skill2="Node.js" skill3="Adobe Creative Suite" level1="w-[90%]" level2="w-[75%]" level3="w-[85%]"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
