import React from 'react'
import Skill from './Skill'
import Language from './Language'

const Skills = () => {
  return (
    <div className='pt-[2rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education &amp; <span className='text-yellow-400'>Skills</span></h1>
      
      {/* Text Containers Row */}
<div className='flex flex-wrap w-[80%] mx-auto pt-[1rem] md:pt-[2rem] gap-[2rem] items-start mt-8'>
  <div className='flex-1'>
    <Skill 
      title="Frontend-Entwicklung" 
      description="Entwicklung responsiver Webanwendungen und intuitiver Benutzeroberflächen zur Verbesserung der Nutzererfahrung."
    />
    <Skill 
      title="UI/UX Design" 
      description="Erstellung ästhetischer und funktionaler Designs durch Nutzerforschung und iteratives Prototyping."
    />
  </div>
  <div className='flex-1'>
    <Skill 
      title="React & Next.js" 
      description="Entwicklung von Webanwendungen mit modernen Frameworks. Erstellung flexibler und leistungsstarker Frontend-Lösungen."
    />
    <Skill 
      title="Back-End Entwicklung" 
      description="Integration von Datenbanken und APIs zur Unterstützung von Webanwendungen."
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
