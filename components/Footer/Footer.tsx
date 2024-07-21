import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'

// LinkedIn SVG icon
const LinkedInIcon = () => (
  <svg className="w-8 h-8 text-black" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.349c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75 1.75.785 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.349h-3v-5.5c0-1.38-1.12-2.5-2.5-2.5s-2.5 1.12-2.5 2.5v5.5h-3v-10h3v1.357c.878-.685 2.029-1.357 3.5-1.357 2.481 0 4.5 2.019 4.5 4.5v5.5z"/>
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
            <MapPinIcon className="md:w-[2.5rem] md:h-[2.5rem] w-[2rem] h-[2rem] text-black"/>
          </div>
          <div className='border rounded-lg border-white bg-slate-700 flex flex-wrap p-2 items-center justify-start'>
            <h1 className='text-xl mb-[0.2rem] font-semibold text-[#0BC5EA]'>Location</h1>
            <p className='text-lg w-[90%] text-white'>Wiesbaden, Germany</p>
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
