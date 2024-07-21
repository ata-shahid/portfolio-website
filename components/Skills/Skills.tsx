import React from 'react'
import Skill from './Skill'
import Language from './Language'

const Skills = () => {
  return (
    <div className='pt-[rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education &amp; <span className='text-yellow-400'>Skills</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] mt-4'>
        <div className='flex flex-col justify-between space-y-8'>
          <Skill title="Front-End Development" description="Erfahrung in der Entwicklung benutzerfreundlicher und ansprechender Front-End-Lösungen mit modernen Technologien wie TypeScript, React, Next.js, und Tailwind CSS."/>
          <Skill title="UI/UX Design" description="Kompetent im Entwerfen intuitiver Benutzeroberflächen und ansprechender Benutzererlebnisse mit Figma und Adobe Creative Suite (After Effects, Illustrator, Photoshop)."/>
          <Language skill1="TypeScript" skill2="Tailwind CSS" skill3="Figma" level1="w-[85%]" level2="w-[85%]" level3="w-[90%]"/>
        </div>
        <div className='flex flex-col justify-between space-y-8'>
          <Skill title="React & Next.js" description="Spezialisiert auf die Entwicklung von dynamischen Webanwendungen mit React und Next.js."/>
          <Skill title="Back-End Development" description="Kenntnisse in der Back-End-Entwicklung mit Node.js und TypeScript."/>
          <Language skill1="React & Next.js" skill2="Node.js" skill3="Adobe Creative Suite" level1="w-[85%]" level2="w-[70%]" level3="w-[85%]"/>
        </div>
      </div>
    </div>
  )
}

export default Skills
