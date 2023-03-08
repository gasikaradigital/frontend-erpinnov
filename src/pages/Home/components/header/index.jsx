import React , {useState , useEffect} from 'react'
import {MdPlace} from 'react-icons/md'
import Anelka from '../assets/figure.jpg'
import CV from '../document/cv-Anelka.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
function Header() {   
  
  useEffect(() => {
    AOS.init({
      duration: 3000,
      delay: 200,
      easing: 'ease-in-out',
      once: true
    });
  }, []);
  
  
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const response = await fetch(CV);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "CV-anelka.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id='about' className='flex justify-center lg:h-screen bg-[#ede9fe] lg:py-8 py-5 lg:w-screen  w-96'>
      
      <div className='flex lg:flex-row flex-col bg-white shadow-xl rounded-xl  lg:ml-20 lg:mt-20 mt-16 lg:mr-20  '
       data-aos="fade-up"
       data-aos-duration="1000"
      >
        <div className='lg:w-96 lg:h-full  overflow-hidden bg-no-repeat bg-cover hover:rounded-l-xl  '>
        <img src={Anelka} alt="AnelkaPhoto" className='lg:w-96 lg:h-full h-80 w-80 lg:rounded-l-xl rounded-t-xl  hover:scale-110 transition duration-300 ease-in-out hover:rounded-l-xl ' />
        </div>
       
        <div className='lg:w-96 lg:h-full w-40 h-96 lg:m-8 m-6'>
        <p className='font-bold lg:text-5xl text-2xl text-[#3f3f46] '>JAOSOA Donga Anelka</p>
          <p className='lg:text-2xl text-sm font-bold lg:mt-8 mt-4 text-[#52525b] '>Developer Fullstack , passionate of programming langage, designers and 3D developer. I can work with group </p>
          <p className='lg:text-xl text-sm font-bold mt-5 text-[#52525b]'>Member of google developers groups GDG Mahajanga</p>
          <div className='flex flex-row lg:mt-5 mt-2'>
<MdPlace className='text-xl text-[#5b21b6] hover:underline'/>         
 <a href='https://www.google.com/maps/place/Ambohimandamina/@-15.7165647,46.3427353,17z/data=!3m1!4b1!4m6!3m5!1s0x2203fbc7d5078047:0xd2cab551c012a77b!8m2!3d-15.7165647!4d46.344924!16s%2Fg%2F11jsghnl3k'
 className='ml-1 text-[#5b21b6] hover:underline'
 >
  Ambohimandamina , Mahajanga</a>
</div>
<div>
  <button className='text-white font-bold bg-[#5b21b6] lg:mt-14 mt-2 lg:py-3 lg:px-7 px-4 lg:text-xl text-sm lg:rounded-xl py-3 rounded-lg  ml-4 '
  onClick={handleDownload} disabled={loading}
  >
    {loading ? "Downloading..." : "Download CV"}
  </button>
</div>
</div>
      </div>
    </div>
  )
}

export default Header