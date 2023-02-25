import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Anelka from '../assets/anelka-r.png';
import {FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion'
function Navbar() {

  return (
    <div>
         <div>
            <div id='home' className='flex flex-col    w-full h-screen  '>
              <div className="flex flex-row w-full h-16 shadow-lg fixed  bg-white  ">              
                 <div className='p-5'>
                <a href="#home" className='flex flex-row text-3xl  font-bold text-[#3f3f46] '><p className='font-bold text-[#5b21b6] text-3xl '>P</p>ortfolio.</a>
                </div>
                <div className='flex justify-center ml-60 '>
                <div className='p-5'>
<a  href="#home" className=' font-bold text-xl text-[#3f3f46] '  >Home</a>
                </div>
                <div className='p-5'>
<a href="#contact" className=' font-bold text-xl text-[#3f3f46] '>Contact</a>
                </div>
                <div className='p-5 '>
<a href="#about" className=' font-bold text-xl text-[#3f3f46]'>About</a>
                </div>
                <div className='p-5'>
<a href="#skills" className=' font-bold text-xl text-[#3f3f46]'>Skills</a>
                </div>
                <div className='p-5'>
<a href="#services" className=' font-bold text-xl text-[#3f3f46]'>Services</a>
                </div>
                <div className='pl-5 py-5 flex flex-row ml-40'>
                  <AiFillLinkedin className=' text-2xl text-[#5b21b6]' />
<a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className=' font-bold text-xl ml-2 cursor-pointer text-[#3f3f46]'>LinkdIn</a>
                </div>
                </div>
        
                <div className='pl-5 py-5 flex flex-row'>
                <BsGithub className=' text-2xl text-[#5b21b6]'/>
<a href="https://github.com/Kanel04" className=' font-bold text-xl ml-2 cursor-pointer text-[#3f3f46]'> GitHuB</a>
                </div>
                </div>
            <div className='flex flex-row'>
            <div 
     
            className='bg-[#5b21b6] w-96 h-96 mt-24 ml-40 rounded-full shadow-xl '>
                  <p className='text-9xl font-bold  text-white text-center mt-24 ml-14 flex flex-row  '>I'm <p className='text-white font-bold text-5xl mt-20 ml-24 '>a</p> </p>
            </div>
            <div className='mt-40 '>
              <p className='flex flex-row font-bold text-5xl bg-black w-80 h-80 rounded-full py-24 text-white mt-5'><p className='text-[#5b21b6] font-bold text-5xl ml-6'>F</p>ullstack <p className='text-[#5b21b6] ml-12 font-bold text-5xl flex flex-row mt-8'><p className='text-white font-bold text-5xl ml-1'>D</p>eveloper</p></p>
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