import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-16 md:pt[8rem] pb-4'>
        <h1 className='heading'>Proj<span className='text-yellow-400'>ects</span></h1>

        <div className='w-[80%] pt-8 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" layout="fill" className="object-contain"/>

                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" layout="fill" className="object-contain"/>

                </div>
            </div>
            <div>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" layout="fill" className="object-contain"/>

                </div>
            </div>

           
            
        </div>

        
    </div>
  )
}

export default Projects
