import React , {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
function Skills
() {

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
        <div id='skills' className='lg:w-full lg:h-screen bg-[#e4e4e7] w-96'>
 <div className='lg:p-12 p-5'>
  
  <div className='flex lg:flex-row flex-col py-12'>
    <div>

    <h1
    data-aos="zoom-in"
    data-aos-duration="900"
    className='text-2xl font-bold pl-14 ml-4  text-[#3f3f46]'>Frontend Developer</h1>
    <div
    data-aos="zoom-in"
    data-aos-duration="1000"
    className='lg:w-96 h-36 w-80 rounded-2xl shadow-2xl lg:ml-14 mt-5 bg-white p-6 '>
      <div className='flex flex-row  '>
      <p className='text-lg font-bold  ml-6 text-[#3f3f46]'>html</p>
      <div className='w-40 h-3 bg-[#5b21b6] ml-20  mt-2 rounded-full'></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>css</p>
      <div className='w-36 h-3 bg-[#3f3f46] ml-24 mt-1 rounded-full'></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>javascript</p>
      <div className='w-28 h-3 bg-[#e4e4e7] ml-10 mt-1 rounded-full'></div>
      </div>
    </div>
    <div 
    data-aos="zoom-in"
    data-aos-duration="2000"
    className='lg:w-96 w-80 h-80 rounded-2xl shadow-2xl lg:ml-14 mt-5 bg-white p-6 '>
      <div className='flex flex-row  '>
      <p className='text-lg font-bold  ml-6 text-[#3f3f46]'>React</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>tailwindcss</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Electron</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Flutter</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Boostrap</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>three.js</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Typescript</p>
      <div className=''></div>
      </div>
    </div>
    </div>
    <div>
   
    <h1
    data-aos="zoom-in"
    data-aos-duration="2500"
    className='text-2xl font-bold pl-14 ml-4 mt-5 lg:mt-0  text-[#3f3f46]'>Design UX\UI</h1>
    <div
    data-aos="zoom-in"
    data-aos-duration="3000"
    className='lg:w-96 w-80 h-20 rounded-2xl shadow-2xl lg:ml-14 mt-5 bg-white p-6 '>
      <div className='flex flex-row  '>
      <p className='text-lg font-bold  ml-6 text-[#3f3f46]'>Figma</p>
      <div className=''></div>
      </div>
    </div>
 
    <h1 
    data-aos="zoom-in"
    data-aos-duration="3500"
    className='text-2xl font-bold pl-14 ml-4 lg:mt-28  mt-5 text-[#3f3f46]'>Backend developer</h1>
    <div
    data-aos="zoom-in"
    data-aos-duration="4000"
    className='lg:w-96 w-80 h-60 rounded-2xl shadow-2xl lg:ml-14 mt-5 bg-white p-6 '>
      <div className='flex flex-row  '>
      <p className='text-lg font-bold  ml-6 text-[#3f3f46]'>Firebase</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Java</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Nodejs</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Express</p>
      <div className=''></div>
      </div>
      <div className='flex flex-row p-1 '>
      <p className='text-lg font-bold  ml-5 text-[#3f3f46]'>Php</p>
      <div className=''></div>
      </div>
    </div>
    </div>
    <div>
    <h1
    data-aos="zoom-in"
    data-aos-duration="4500"
    className='text-2xl font-bold pl-14 ml-4 mt-5 lg:mt-0 text-[#3f3f46]'>CMS</h1>
    <div 
    data-aos="zoom-in"
    data-aos-duration="5000"
    className='lg:w-96 w-80 h-20 rounded-2xl shadow-2xl lg:ml-14 mt-5 bg-white p-6 '>
      <div className='flex flex-row  '>
      <p className='text-lg font-bold  ml-6 text-[#3f3f46]'>WordPress</p>
      <div className=''></div>
      </div>
    </div>
    </div>
  </div>
 </div>
        </div>    
    </div>
  )
}

export default Skills
