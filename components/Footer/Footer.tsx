import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

// LinkedIn SVG icon
const LinkedInIcon = () => (
  <svg className="w-8 h-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.349c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.349h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.357c.878-.685 2.029-1.357 3.5-1.357 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
  </svg>
)
// GitHub SVG icon
const GitHubIcon = () => (
  <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .5a12 12 0 00-3.793 23.392c.6.11.793-.26.793-.577 0-.285-.01-1.04-.015-2.04-3.222.7-3.904-1.554-3.904-1.554-.546-1.386-1.334-1.755-1.334-1.755-1.091-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.073 1.837 2.816 1.306 3.504.998.108-.776.42-1.306.764-1.607-2.57-.293-5.272-1.284-5.272-5.718 0-1.263.453-2.297 1.196-3.106-.12-.293-.518-1.472.113-3.07 0 0 .974-.313 3.195 1.185a11.13 11.13 0 012.91-.392 11.12 11.12 0 012.909.392c2.22-1.498 3.193-1.185 3.193-1.185.632 1.598.234 2.777.114 3.07.744.809 1.195 1.843 1.195 3.106 0 4.444-2.705 5.423-5.284 5.71.431.372.817 1.106.817 2.23 0 1.612-.014 2.912-.014 3.31 0 .319.192.69.8.573A12 12 0 0012 .5z"/>
  </svg>
)

const Footer = () => {
  return (
    <div className='pt-[8rem] pb-16 bg-[#192330]'>
      <h1 className='heading'>Con<span className='text-yellow-400'>tact</span></h1>
      <div className='mt-10 pt-8'>
      <div className='flex border-b-[1px] pb-[6rem] border-gray-400 w-[80%] mx-auto gap-12 justify-between'>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#0BC5EA]'>
            <GitHubIcon />
          </div>
          <div className='border rounded-lg border-white bg-slate-700 flex flex-wrap p-2 items-center justify-start'>
            <h1 className='text-xl mb-[0.2rem] font-semibold text-[#0BC5EA]'>GitHub</h1>
            <p className='text-lg w-[90%] text-white'>
              <Link href="https://github.com/ata-shahid" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 cursor-pointer'>Click Me</Link>
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#0BC5EA]'>
            <LinkedInIcon />
          </div>
          <div className='border rounded-lg border-white bg-slate-700 flex flex-wrap p-2 items-center justify-start'>
            <h1 className='text-xl mb-[0.2rem] font-semibold text-[#0BC5EA]'>LinkedIn</h1>
            <p className='text-lg w-[90%] text-white'>
              <Link href="https://www.linkedin.com/in/ataul-shahid-a66888229/" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 cursor-pointer'>Click Me</Link>
            </p>
          </div>
        </div>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#0BC5EA]'>
            <EnvelopeIcon className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] text-black"/>
          </div>
          <div className='border rounded-lg border-white bg-slate-700 flex flex-wrap p-2 items-center justify-start'>
            <h1 className='text-xl mb-[0.2rem] font-semibold text-[#0BC5EA]'>Email</h1>
            <p className='text-lg w-[90%] text-white'>atashahid@web.de</p>
          </div>
        </div>
      </div>
      </div>

      <div className='flex flex-col mt-[2rem] w-[80%] mx-auto items-center'>
        <div className='text-lg mb-8 md:mb-0 text-white opacity-50 text-center'>
         &copy; 2024 Ataul Shahid | All Rights Reserved
        </div>
      </div>
    </div>
  )
}

export default Footer
