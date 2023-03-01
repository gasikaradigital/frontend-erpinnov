import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
function Footer() {
  return (
    <div className='lg:w-full lg:h-80 bg-black flex flex-row w-96 h-40'>
      <div className='lg:mt-40 mt-14 lg:ml-14 ml-4'>
        <a href="#home" className='lg:text-2xl text-lg font-bold text-white'>Portfolio.</a>
      </div>
       <div className='flex flex-col lg:ml-40 ml-2 '>
          <a href="https://www.facebook.com/leader.poseidon"><FaFacebook className='lg:text-4xl text-2xl lg:mt-24 mt-6 lg:ml-14 ml-4 hover:text-blue-600 text-white'></FaFacebook></a>
          <a href="https://www.instagram.com/dongaanelka/"><BsInstagram className='lg:text-4xl text-2xl lg:mt-8 mt-4 lg:ml-14 ml-4 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:rounded-xl'></BsInstagram></a>
          <a href="#"><BsTwitter className='lg:text-4xl text-2xl lg:mt-8 mt-4 lg:ml-14 ml-4 hover:text-blue-500 text-white'></BsTwitter></a>
        </div>
        <div className='lg:ml-40 ml-6 flex flex-col'>
<a href="#home" className='text-white font-bold lg:mt-24 hover:underline'>Home</a>
<a href="#contact" className='text-white font-bold mt-2 hover:underline'>Contact</a>
<a href="#about" className='text-white font-bold mt-2 hover:underline'>About</a>
<a href="#skills" className='text-white font-bold mt-2 hover:underline'>Skills</a>
<a href="#services" className='text-white font-bold mt-2 hover:underline'>Services</a>

        </div>
    </div>
  )
}

export default Footer