import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
function Navbar() {
  return (
    <div>
         <div>
            <div className='flex flex-row bg-hero-image w-full h-96  '>
                <div className='p-5'>
                <a href="#" className='text-3xl text-white font-bold'>Portfolio.</a>
                </div>
                <div className='flex justify-center ml-96 '>
                <div className='p-5'>
<a href="#" className='text-white font-bold text-xl'>Contact</a>
                </div>
                <div className='p-5'>
<a href="#" className='text-white font-bold text-xl'>About</a>
                </div>
                <div className='pl-5 py-5 flex flex-row'>
                  <AiFillLinkedin className='text-white text-2xl' />
<a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className='text-white font-bold text-xl ml-2 cursor-pointer'>Linkdin</a>
                </div>
                </div>
        
                <div className='pl-5 py-5 flex flex-row'>
                <BsGithub className='text-white text-2xl'/>
<a href="https://github.com/Kanel04" className='text-white font-bold text-xl ml-2 cursor-pointer'> GitHuB</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar