import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Anelka from '../assets/anelka-r.png'
function Navbar() {
  return (
    <div>
         <div>
            <div className='flex flex-col    w-full h-screen  '>
              <div className="flex flex-row w-full h-16 shadow-lg fixed  bg-white">              
                 <div className='p-5'>
                <a href="#" className='flex flex-row text-3xl  font-bold'><p className='font-bold text-[#5b21b6] text-3xl'>P</p>ortfolio.</a>
                </div>
                <div className='flex justify-center ml-60 '>
                <div className='p-5'>
<a href="#" className=' font-bold text-xl '>Home</a>
                </div>
                <div className='p-5'>
<a href="#" className=' font-bold text-xl'>Contact</a>
                </div>
                <div className='p-5'>
<a href="#" className=' font-bold text-xl'>About</a>
                </div>
                <div className='p-5'>
<a href="#" className=' font-bold text-xl'>Skills</a>
                </div>
                <div className='p-5'>
<a href="#" className=' font-bold text-xl'>Services</a>
                </div>
                <div className='pl-5 py-5 flex flex-row ml-40'>
                  <AiFillLinkedin className=' text-2xl text-[#5b21b6]' />
<a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className=' font-bold text-xl ml-2 cursor-pointer'>Linkdin</a>
                </div>
                </div>
        
                <div className='pl-5 py-5 flex flex-row'>
                <BsGithub className=' text-2xl text-[#5b21b6]'/>
<a href="https://github.com/Kanel04" className=' font-bold text-xl ml-2 cursor-pointer'> GitHuB</a>
                </div>
                </div>
            <div className='flex flex-row'>
            <div className='bg-[#5b21b6] w-96 h-96 mt-24 ml-60 rounded-full shadow-xl'>
                  <p className='text-9xl font-bold  text-white text-center mt-24 ml-14'>I'm</p>
            </div>
            <div className='mt-40 '>
              <p className='flex flex-row font-bold text-5xl bg-black w-80 h-80 rounded-full py-24 text-white mt-5'><p className='text-[#5b21b6] font-bold text-5xl ml-6'>D</p>eveloper <p className='text-[#5b21b6] ml-7 font-bold text-5xl flex flex-row mt-8'><p className='text-white font-bold text-5xl'>F</p>ullstack</p></p>
            </div>
            <div className="ml-24">
              <img src={Anelka} alt="photo" />
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar