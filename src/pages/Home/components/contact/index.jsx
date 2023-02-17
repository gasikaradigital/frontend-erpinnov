import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
function Contact() {
  return (
    <div className='h-screen w-full bg-[#e4e4e7] p-32 flex flex-row '>
       <div className='shadow-2xl w-80 h-96  ml-60 bg-white rounded-xl  '>
        <h1 className='text-3xl font-bold py-8 ml-14 text-[#3f3f46] '>Contact me</h1>
        <div>
          <a href="#" className='flex flex-row ml-5 text-2xl font-bold mt-10 text-[#3f3f46]'><FiPhoneCall className='mr-5 font-bold'></FiPhoneCall> +261 32 57 390 58</a>
        </div>
        <div>
          <a href="#" className='flex flex-row ml-5 font-bold mt-8 text-[#3f3f46]'><AiOutlineMail className='mr-5 font-bold text-2xl'></AiOutlineMail>thelegendanelka@gmail.com</a>
        </div>
        <div className='flex flex-row'>
          <a href="https://www.facebook.com/leader.poseidon"><FaFacebook className='text-4xl mt-16 ml-10 hover:text-blue-600 text-[#3f3f46]'></FaFacebook></a>
          <a href="https://www.instagram.com/dongaanelka/"><BsInstagram className='text-4xl mt-16 ml-14 text-[#3f3f46] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:rounded-xl'></BsInstagram></a>
          <a href="#"><BsTwitter className='text-4xl mt-16 ml-14 hover:text-blue-500 text-[#3f3f46]'></BsTwitter></a>

        </div>

       </div>
       <div>
<div className='ml-32'>
  <input type="text" placeholder='Your Name' className='bg-white py-2 px-6  rounded-xl shadow-2xl' />  
</div>
<div className='ml-32'>
  <input type="Email" placeholder='Your Email' className='bg-white py-2 px-6  rounded-xl shadow-2xl mt-8' />  
</div>
<div className='ml-32'>
  <input type="text" placeholder='Your Message' className='bg-white px-6 h-40  rounded-xl shadow-2xl mt-8' />  
</div>

<div className='ml-32 mt-8'>
 <button type='submit' className='bg-[#5b21b6] text-white w-40 h-12 text-center font-bold rounded-xl'>Send</button>
</div>
        </div>
    </div>
  )
}

export default Contact