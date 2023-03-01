import React , {useState} from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import axios from "axios";
import { toast } from 'react-toastify';
function Contact() {

  const [recipient, setRecipient] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/contact/sendemail', {
        recipient: recipient,
        subject: subject,
        message: message,
      });
      console.log(response);
      toast.success("successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Error");
    }
  };
  return (
    <div id='contact' className='lg:h-screen lg:w-screen bg-[#e4e4e7] lg:p-32 p-6 flex lg:flex-row flex-col w-96'>
       <div className='shadow-2xl lg:w-80 lg:h-96 w-60 p-2 h-60 lg:ml-60 ml-12 bg-white rounded-xl  '>
        <h1 className='lg:text-3xl text-xl font-bold lg:py-8 py-4 ml-14 text-[#3f3f46] '>Contact me</h1>
        <div>
          <a href="#" className='flex flex-row ml-5 lg:text-2xl text-lg font-bold lg:mt-10 mt-2 text-[#3f3f46]'><FiPhoneCall className='mr-5 font-bold'></FiPhoneCall> +261 32 57 390 58</a>
        </div>
        <div>
          <a href="#" className='flex flex-row lg:ml-5  font-bold lg:mt-8 mt-2 text-[#3f3f46]'><AiOutlineMail className='lg:mr-5 font-bold text-2xl'></AiOutlineMail>thelegendanelka@gmail.com</a>
        </div>
        <div className='flex flex-row m-2'>
          <a href="https://www.facebook.com/leader.poseidon"><FaFacebook className='text-4xl lg:mt-16 mt-12 lg:ml-10  hover:text-blue-600 text-[#3f3f46]'></FaFacebook></a>
          <a href="https://www.instagram.com/dongaanelka/"><BsInstagram className='text-4xl lg:mt-16 mt-12 ml-14 text-[#3f3f46] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:rounded-xl'></BsInstagram></a>
          <a href="#"><BsTwitter className='text-4xl lg:mt-16 mt-12 ml-14 hover:text-blue-500 text-[#3f3f46]'></BsTwitter></a>

        </div>

       </div>
       <form onSubmit={handleSubmit}>      
        <div className='lg:ml-32 ml-12'>
<div className='   mt-5'>
  <input type="text" placeholder='Your Name' className='bg-white py-2 lg:px-6 px-3  rounded-xl shadow-2xl' 
  
  />  
</div>
<div className=''>
  <input type="Email" placeholder='Your Email' className='bg-white py-2 lg:px-6 px-3 rounded-xl shadow-2xl mt-8'
  value={recipient}
  onChange={(e) => setRecipient(e.target.value)}
  />  
</div>
<div className=''>
  <input type="text" placeholder='Your Message' className='bg-white lg:px-6 px-3 h-40  rounded-xl shadow-2xl mt-8'
   value={message}
   onChange={(e) => setMessage(e.target.value)}
  />  
</div>

<div className='lg:ml-32 ml-2 mt-8'>
 <button type='submit' className='bg-[#5b21b6] text-white w-40 h-12 text-center font-bold rounded-xl'>Send</button>
</div>
        </div>
        </form>

    </div>
  )
}

export default Contact