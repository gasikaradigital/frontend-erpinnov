import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
function Contact() {
  return (
    <div className='h-screen w-full '>
       
        
          <div>
          <div className='ml-32 mt-24'>
      <a href="https://www.facebook.com/leader.poseidon/" className=' text-3xl font-bold flex flex-row text-blue-500 hover:underline '><FaFacebook className=' text-4xl   mr-5'/>
      Facebook</a>
      </div>  
        <div className='ml-32 mt-5'>
        <a href="https://www.instagram.com/dongaanelka/" className='hover:underline text-3xl font-bold flex flex-row bg-clip-text text-pink-500 bg-gradient-to-r from-pink-500 to-violet-500 '><BsInstagram className=' text-4xl  mr-5 '/>
        Instagram
        </a>
        </div>
        <div className='ml-32 mt-5'>
        <a href="#" className=' text-green-500 text-3xl font-bold flex flex-row '><BsWhatsapp className=' text-4xl  mr-5'/>
        +261 32 57 390 58
        </a>
        </div>
          </div>
          <div>
          <div className='ml-32 mt-5'>
        <a href="#" className=' text-3xl font-bold flex flex-row  '><AiOutlineMail className=' text-4xl  mr-5'/>
        thelegendanelka@gmail.com
        </a>
        </div>
        <div className='ml-32 mt-5'>
        <a href="#" className=' text-3xl font-bold flex flex-row  '><FiPhoneCall className=' text-4xl mt-6 mr-5'/>
        +261 32 57 390 58
        </a>
        <p className=' text-3xl font-bold ml-14 '>+261 34 45 925 05</p>
        </div>
          </div>
        
      
    </div>
  )
}

export default Contact