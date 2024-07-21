import React from 'react'
import Skill from './Skill'
import Language from './Language'

const Skills = () => {
  return (
    <div className='pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]'>
      <h1 className='heading'>Education &amp; <span className='text-yellow-400'>Skills</span></h1>
      <div className='w-[80%] mx-auto pt-[4rem] md:pt:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
        <div >
            <Skill title="React Developer"/>
            <Skill title= "UI/UX Designer"/>
            <Language skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
        </div>
        <div >
        <Skill title="React Developer"/>
            <Skill title= "UI/UX Designer"/>
           <Language skill1="html" skill2="css" skill3="javascript" level1="w-[91%]" level2="w-[88%]" level3="w-[80%]"/>
        </div>

      </div>
    </div>
  )
}

export default Skills
