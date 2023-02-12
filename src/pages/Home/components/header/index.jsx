import React , {useState} from 'react'
import {MdPlace} from 'react-icons/md'
import Anelka from '../assets/anelka-shoot.jpg'
import CV from '../document/cv-Anelka.pdf'
function Header() {   
  
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      const response = await fetch(CV);
      const blob = await response.blob();

      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = "document.pdf";
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
    <div className='flex justify-center h-screen bg-[#ede9fe] '>
      
      <div className='flex flex-row  bg-white shadow-xl rounded-xl  m-14  '>
        <img src={Anelka} alt="AnelkaPhoto" className='w-96 h-full rounded-l-xl ' />
        <div className='w-96 h-full  m-5'>
        <p className='font-bold text-5xl '>JAOSOA Donga Anelka</p>
          <p className='text-2xl font-bold mt-8 '>Developer Fullstack , passionate of programming langage, designers and 3D developer. I can work with group </p>
          <p className='text-xl font-bold mt-5'>Member of google developers groups GDG Mahajanga</p>
          <p className='text-xl font-bold mt-3 '>Member of english practice of Mahajanga EPM</p>
<div className='flex flex-row mt-5'>
<MdPlace className='text-xl text-[#5b21b6] hover:underline'/>         
 <a href='https://www.google.com/maps/place/Ambohimandamina/@-15.7165647,46.3427353,17z/data=!3m1!4b1!4m6!3m5!1s0x2203fbc7d5078047:0xd2cab551c012a77b!8m2!3d-15.7165647!4d46.344924!16s%2Fg%2F11jsghnl3k'
 className='ml-1 text-[#5b21b6] hover:underline'
 >
  Ambohimandamina , Mahajanga</a>
</div>
<div>
  <button className='text-white font-bold bg-[#5b21b6] mt-5 py-3 px-7 rounded-xl ml-4 '
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