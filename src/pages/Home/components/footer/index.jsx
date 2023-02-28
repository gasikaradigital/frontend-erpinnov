import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
function Footer() {
  return (
    <div className='lg:w-full lg:h-80 bg-black flex flex-row w-96'>
      <div className='mt-40 ml-14'>
        <a href="#home" className='text-2xl font-bold text-white'>Portfolio.</a>
      </div>
       <div className='flex flex-col ml-40 '>
          <a href="https://www.facebook.com/leader.poseidon"><FaFacebook className='text-4xl mt-24 ml-14 hover:text-blue-600 text-white'></FaFacebook></a>
          <a href="https://www.instagram.com/dongaanelka/"><BsInstagram className='text-4xl mt-8 ml-14 text-white hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:rounded-xl'></BsInstagram></a>
          <a href="#"><BsTwitter className='text-4xl mt-8 ml-14 hover:text-blue-500 text-white'></BsTwitter></a>
        </div>
        <div className='ml-40 flex flex-col'>
<a href="#home" className='text-white font-bold mt-24 hover:underline'>Home</a>
<a href="#contact" className='text-white font-bold mt-2 hover:underline'>Contact</a>
<a href="#about" className='text-white font-bold mt-2 hover:underline'>About</a>
<a href="#skills" className='text-white font-bold mt-2 hover:underline'>Skills</a>
<a href="#services" className='text-white font-bold mt-2 hover:underline'>Services</a>

        </div>
    </div>
  )
}

export default Footer