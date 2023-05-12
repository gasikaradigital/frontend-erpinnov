import React , {useState , useEffect} from 'react'
import { BsGithub } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import Anelka from '../assets/anelka-r.png';
import {FaBars} from 'react-icons/fa';
import {IoMdClose} from 'react-icons/io';
import {motion} from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typed from 'react-typed';
function Navbar() {

  
  
const [show , setshow]= useState(false);
const [isOpen, setIsOpen] = useState(false);

function showNavbar(){
  
  const nav = document.getElementById("navbar");
  const ClassList = nav.classList ;
  nav.classList.remove("hidden");
  ClassList.add("bg-white h-96 w-96");
} 
useEffect(() => {
  AOS.init({
    duration: 3000,
    delay: 200,
    easing: 'ease-in-out',
    once: true
  });
}, []);






  return (
    <div>
         <div>
            <div id='home' className='flex flex-col    lg:w-full w-96   lg:h-screen  '>
              <div className="flex flex-row lg:w-full lg:h-16 lg:w-full w-96 shadow-lg fixed opacity-100 z-10  bg-white h-16 ">              
                 <div className='p-5'>
                <a href="#home" className='flex flex-row lg:text-3xl text-xl font-bold text-[#3f3f46] '><p className='font-bold text-[#5b21b6] lg:text-3xl text-xl '>P</p>ortfolio.</a>
                </div>
                <div id='navbar' className={`md:flex lg:flex-row  lg:justify-center lg:ml-60 ${show?'flex-col':'hidden'} `}>
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
        
             <button 
             type='button'
             onClick={() => setIsOpen(!isOpen)}
             className="block text-white hover:text-gray-100 focus:text-gray-100 focus:outline-none"
             >
              {isOpen ? (<div className='bg-white w-96 rounded-l-xl lg:hidden'>
                   <div id='navbar' className={`md:flex lg:flex-row  lg:justify-center lg:ml-60 mr-28  `}>
                   <IoMdClose className=' text-2xl mt-5  lg:hidden ml-[200px] text-[#3f3f46] '></IoMdClose>
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
                   <div className='pl-5 py-5 flex flex-row lg;ml-40 xl:ml-40    '>
                     <AiFillLinkedin className=' lg:text-2xl text-xl text-[#5b21b6] ml-16' />
   <a href="https://www.linkedin.com/in/anelka-donga-289b8122a/" className=' font-bold lg:text-xl ml-2 cursor-pointer text-[#3f3f46]'>LinkdIn</a>
                   </div>
                   <div className='pl-5 py-5 flex flex-row ml-16'>
                   <BsGithub className=' lg:text-2xl text-xl text-[#5b21b6]'/>
   <a href="https://github.com/Kanel04" className=' font-bold lg:text-xl ml-2 cursor-pointer text-[#3f3f46]'> GitHuB</a>
                   </div>
                   </div>              
                
                </div>
                 ) : (
             <FaBars   className=' text-2xl mt-5  lg:hidden ml-[200px] text-[#3f3f46] '  >  </FaBars>
             )}


             </button>
                              </div>
            <div 
           
            className='flex lg:flex-row flex-col justify-center m-5 w-96 lg:w-full '>
            <div 
     data-aos="fade-up"
     data-aos-duration="1000"
            className='bg-[#5b21b6] lg:w-96 lg:h-96 w-60 h-60  lg:mt-24 mt-32 ml-28 mt-24 rounded-full shadow-xl '>
                  <p className='lg:text-9xl text-4xl font-bold  text-white text-center lg:mt-24 mt-24  ml-14 flex flex-row  '>I'm <p className='text-white font-bold lg:text-5xl lg:mt-20 lg:ml-24 mt-1 ml-2 text-3xl '>a</p> </p>
            </div>
            <div className='lg:mt-40  '>
              <p className='flex flex-row font-bold lg:text-5xl text-4xl bg-black lg:w-80 lg:h-80 w-60 h-60  rounded-full py-24 px-4 text-white mt-5'
              data-aos="fade-up"
              data-aos-duration="3000"
              >
                <p ><Typed strings={[
              'Fullstack Developer',
              'UX\UI Designer',  
              ]} typeSpeed={80} className='text-white font-bold lg:text-5xl text-center text-4xl p-10 ml-6' 
              backSpeed={90}
              loop
              ></Typed></p> <p className='text-[#5b21b6] lg:ml-12 md:ml-6 font-bold lg:text-5xl text-4xl flex flex-row mt-8'
                 data-aos="fade-up"
                 data-aos-duration="4000"
                ></p></p>
            </div>
            <div className=""
            data-aos="fade-up"
            data-aos-duration="5000"
            >
              <img src={Anelka} alt="photo" />
            </div>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar