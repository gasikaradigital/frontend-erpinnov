import React , {useState , useEffect, useRef} from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {AiOutlineMail} from 'react-icons/ai'
import {FiPhoneCall} from 'react-icons/fi'
import axios from "axios";
import  toast  from 'react-hot-toast';
import {BASE_URL} from '../../../../constant/index';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [email, setEmail] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e3v9o1n', 'template_5vuhydv', form.current, 'Vwpy6ku1xrCMrByMv')
      .then((result) => {
          console.log(result.text);
          alert("message send");
                setName("");
                setEmail("");
                setMessage("");
      }, (error) => {
          console.log(error.text);
          alert("error")
      });
  };

  return (
    <div id='contact' className='lg:h-screen lg:w-screen bg-[#e4e4e7] lg:p-32 p-6 flex lg:flex-row flex-col w-96'>
       <div 
       data-aos="fade-right"
       data-aos-duration="1000"
       className='shadow-2xl lg:mt-4 mt-14 lg:w-80 lg:h-96 w-60 p-2 h-60 lg:ml-60 ml-12 bg-white rounded-xl  '>
        <h1 className='lg:text-3xl text-xl font-bold lg:py-8 py-4 ml-14 text-[#3f3f46] '>Contact me</h1>
        <div>
          <a href="#" className='flex flex-row lg:ml-5 ml-2 lg:text-2xl text-lg font-bold lg:mt-10 mt-2 text-[#3f3f46]'><FiPhoneCall className='mr-5 font-bold'></FiPhoneCall> +261 32 57 390 58</a>
        </div>
        <div className=''>
          <a href="#" className='flex flex-row lg:ml-5 ml-2 font-bold lg:mt-8 mt-5 lg:text-[15px] text-[13px] text-[#3f3f46]'><AiOutlineMail className='lg:mr-5 mr-2 font-bold text-2xl'></AiOutlineMail>thelegendanelka@gmail.com</a>
        </div>
        <div className='flex flex-row m-2'>
          <a href="https://www.facebook.com/leader.poseidon"><FaFacebook className='text-4xl lg:mt-16 mt-6 lg:ml-10 ml-4  hover:text-blue-600 text-[#3f3f46]'></FaFacebook></a>
          <a href="https://www.instagram.com/dongaanelka/"><BsInstagram className='text-4xl lg:mt-16 mt-6 ml-9 text-[#3f3f46] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white hover:rounded-xl'></BsInstagram></a>
          <a href="https://twitter.com/DongaAnelka"><BsTwitter className='text-4xl lg:mt-16 mt-6 ml-9 hover:text-blue-500 text-[#3f3f46]'></BsTwitter></a>

        </div>

       </div>
       <form 
        data-aos="fade-left"
        data-aos-duration="1000"
        ref={form} onSubmit={sendEmail}>    
        <div className='lg:ml-32 ml-12'>
<div className='   mt-5'>
  <input type="text" placeholder='Your Name' className='bg-white py-2 lg:px-6 px-3  rounded-xl shadow-2xl' 
   name="user_name"
   value={name}
   onChange={(e) => setName(e.target.value)}
  />  
</div>
<div className=''>
  <input type="Email" placeholder='Your Email' className='bg-white py-2 lg:px-6 px-3 rounded-xl shadow-2xl mt-8'
 name="user_email"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
  />  
</div>
<div className=''>
  <input type="text" placeholder='Your Message' className='bg-white lg:px-6 px-3 h-40  rounded-xl shadow-2xl mt-8'
  name="message"
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