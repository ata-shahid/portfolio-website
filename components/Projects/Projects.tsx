import React from 'react'
import Image from 'next/image'

const Projects = () => {
  return (
    <div className='bg-[#02050a] pt-12 md:pt-[6rem] md:pb-12 pb-4'>
        <h1 className='heading'>Proj<span className='text-yellow-400'>ects</span></h1>

        <div className='w-[80%] pt-8 mx-auto flex flex-wrap gap-16 mt-8'>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill sizes='100%' priority className="object-contain"/>
                </div>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill
                    priority sizes='100%' className="object-contain"/>
                </div>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill
                    priority sizes='100%' className="object-contain"/>
                </div>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill
                    priority sizes='100%' className="object-contain"/>
                </div>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill
                    priority sizes='100%' className="object-contain"/>
                </div>
            </div>
            <div className='flex-1 min-w-[300px]'>
                <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-full h-[200px] md:h-[300px]'>
                    <Image src="/images/about.jpg" alt="project" fill
                    priority sizes='100%' className="object-contain"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects