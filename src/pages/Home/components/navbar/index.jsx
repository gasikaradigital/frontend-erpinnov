import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Anelka from '../assets/anelka-r.png';
import {FaBars} from 'react-icons/fa';
import {motion} from 'framer-motion'
function Navbar() {
  function Menu(e){
    let list = document.querySelector('ul');
    e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
  }
  return (
    <div>
         <div>
            <div id='home' className='flex flex-col    lg:w-full w-96   lg:h-screen  '>
              <div className="flex flex-row lg:w-full lg:h-16 lg:w-full w-96 shadow-lg fixed  bg-white h-16 ">              
                 <div className='p-5'>
                <a href="#home" className='flex flex-row lg:text-3xl text-xl font-bold text-[#3f3f46] '><p className='font-bold text-[#5b21b6] lg:text-3xl text-xl '>P</p>ortfolio.</a>
                </div>
                <div className='flex lg:flex-row flex-col lg:justify-center lg:ml-60 flex-col '>
                <div className='p-5'>
<a  href="#home" className=' font-bold lg:text-xl text-[#3f3f46] '  >Home</a>
                </div>
                <div className='p-5'>
<a href="#contact" className=' font-bold lg:text-xl text-[#3f3f46] '>Contact</a>
                </div>
                <div className='p-5 '>
<a href="#about" className=' font-bold lg:text-xl text-[#3f3f46]'>About</a>
                </div>
                <div className='p-5'>
<a href="#skills" className=' font-bold lg:text-xl text-[#3f3f46]'>Skills</a>
                </div>
                <div className='p-5'>
<a href="#services" className=' font-bold lg:text-xl text-[#3f3f46]'>Services</a>
                </div>
                <div className='pl-5 py-5 flex flex-row lg;ml-40 xl:ml-40  '>
                  <AiFillLinkedin className=' lg:text-2xl text-xl text-[#5b21b6]' />
<a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className=' font-bold lg:text-xl ml-2 cursor-pointer text-[#3f3f46]'>LinkdIn</a>
                </div>
                <div className='pl-5 py-5 flex flex-row'>
                <BsGithub className=' lg:text-2xl text-xl text-[#5b21b6]'/>
<a href="https://github.com/Kanel04" className=' font-bold lg:text-xl ml-2 cursor-pointer text-[#3f3f46]'> GitHuB</a>
                </div>
                </div>
        
             
                <FaBars  className=' text-2xl mt-5  lg:hidden ml-24 text-[#3f3f46] ' >  </FaBars>
                </div>
            <div className='flex lg:flex-row flex-col justify-center m-5 w-96 lg:w-screen'>
            <div 
     
            className='bg-[#5b21b6] lg:w-96 lg:h-96 w-60 h-60  lg:mt-24 mt-32 ml-40 mt-24 rounded-full shadow-xl '>
                  <p className='lg:text-9xl text-4xl font-bold  text-white text-center lg:mt-24 mt-24  ml-14 flex flex-row  '>I'm <p className='text-white font-bold lg:text-5xl lg:mt-20 lg:ml-24 mt-1 ml-2 text-3xl '>a</p> </p>
            </div>
            <div className='lg:mt-40  '>
              <p className='flex flex-row font-bold lg:text-5xl text-4xl bg-black lg:w-80 lg:h-80 w-60 h-60  rounded-full py-24 text-white mt-5'><p className='text-[#5b21b6] font-bold lg:text-5xl text-4xl ml-6'>F</p>ullstack <p className='text-[#5b21b6] lg:ml-12 ml-6 font-bold lg:text-5xl text-4xl flex flex-row mt-8'><p className='text-white font-bold lg:text-5xl text-4xl ml-1'>D</p>eveloper</p></p>
            </div>
            <div className="lg:ml-24">
              <img src={Anelka} alt="photo" />
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar