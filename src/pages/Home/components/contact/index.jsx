import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
function Contact() {
  return (
    <div className='h-screen w-full bg-[#171717]'>
        <h1 className='text-white font-bold text-3xl text-center py-9'>Contact</h1>
        <div className='flex flex-row'>
          <div>
          <div className='ml-32'>
      <a href="https://www.facebook.com/leader.poseidon/" className='text-white text-3xl font-bold flex flex-row  '><FaFacebook className='text-white text-4xl   mr-5'/>
      Facebook</a>
      </div>  
        <div className='ml-32 mt-5'>
        <a href="https://www.instagram.com/dongaanelka/" className='text-white text-3xl font-bold flex flex-row '><BsInstagram className='text-white text-4xl  mr-5'/>
        Instagram
        </a>
        </div>
        <div className='ml-32 mt-5'>
        <a href="#" className='text-white text-3xl font-bold flex flex-row '><BsWhatsapp className='text-white text-4xl  mr-5'/>
        +261 32 57 390 58
        </a>
        </div>
          </div>
          <div>
          <div className='ml-32'>
        <a href="#" className='text-white text-3xl font-bold flex flex-row '><AiOutlineMail className='text-white text-4xl  mr-5'/>
        thelegendanelka@gmail.com
        </a>
        </div>
        <div className='ml-32 mt-5'>
        <a href="#" className='text-white text-3xl font-bold flex flex-row '><FiPhoneCall className='text-white text-4xl mt-6 mr-5'/>
        +261 32 57 390 58
        </a>
        <p className='text-white text-3xl font-bold ml-14 '>+261 34 45 925 05</p>
        </div>
          </div>
        </div>
      
    </div>
  )
}

export default Contact