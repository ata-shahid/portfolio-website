import React from 'react'
import Skill from './Skill'
import Language from './Language'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education &amp; <span className='text-yellow-400'>Skills</span></h1>
      
      {/* Text Containers Row */}
      <div className='flex flex-wrap w-[80%] mx-auto pt-[1rem] md:pt-[2rem] gap-[2rem] items-start mt-8'>
        <div className='flex-1'>
          <Skill 
            title="Front-End Development" 
            description="Experience with HTML, CSS, and JavaScript. Proficient in creating responsive and interactive web applications."
          />
          <Skill 
            title="UI/UX Design" 
            description="Skilled in designing user-friendly interfaces with tools like Sketch, Figma, and Adobe XD. Focus on user experience and accessibility."
          />
        </div>
        <div className='flex-1'>
          <Skill 
            title="React & Next.js" 
            description="Developed multiple projects using React and Next.js. Expertise in building dynamic, high-performance web applications."
          />
          <Skill 
            title="Back-End Development" 
            description="Proficient in server-side technologies such as Node.js, Express, and databases like MongoDB and MySQL."
          />
        </div>
      </div>
      
      {/* Bars Containers Row */}
      <div className='flex flex-wrap w-[80%] mx-auto  gap-[2rem] items-start mt-8'>
        <div className='flex-1'>
          <Language 
            skill1="TypeScript" 
            skill2="Tailwind CSS" 
            skill3="Figma" 
            level1="w-[85%]" 
            level2="w-[80%]" 
            level3="w-[90%]" 
          />
        </div>
        <div className='flex-1'>
          <Language 
            skill1="React & Next.js" 
            skill2="Node.js" 
            skill3="Adobe Creative Suite" 
            level1="w-[90%]" 
            level2="w-[75%]" 
            level3="w-[85%]" 
          />
        </div>
      </div>
      
    </div>
  )
}

export default Skills;
