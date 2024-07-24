import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/16/solid'
import Link from 'next/link'
import React from 'react'
import GitHub from '../Icons/GitHub'
import LinkedIn from '../Icons/LinkedIn'
import { BsTwitterX } from 'react-icons/bs'


const Contact = () => {
  return (
    <div className='pt-[4rem] pb-16 bg-[#09101a]'>
      <h1 className='heading'>Con<span className='text-yellow-400'>tact</span></h1>
      <div className='mt-10 pt-8'>
      <div className='flex border-b-[1px] pb-[6rem] border-gray-400 w-[80%] mx-auto gap-12 justify-between'>
        <div className='flex items-center space-x-6'>
          <div className='md:w-[5rem] md:h-[5rem] w-[5rem] h-[5rem] flex items-center justify-center rounded-full bg-[#0BC5EA]'>
            <GitHub />
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
            <LinkedIn />
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
            <BsTwitterX />
          </div>
          <div className='border rounded-lg border-white bg-slate-700 flex flex-wrap p-2 items-center justify-start'>
            <h1 className='text-xl mb-[0.2rem] font-semibold text-[#0BC5EA]'>X</h1>
            <p className='text-lg w-[90%] text-white'>
              <Link href="https://x.com/AtaulShahid" target="_blank" rel="noopener noreferrer" className='hover:text-yellow-400 cursor-pointer'>Click Me</Link>
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

export default Contact
