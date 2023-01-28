import React from 'react'
import {MdPlace} from 'react-icons/md'
import Anelka from '../assets/anelka.jpg'
function Header() {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
  return (
    <div className='h-screen'>
      
      <div className='flex flex-row'>
        <img src={Anelka} alt="AnelkaPhoto" className='w-96 h-full ml-60' />
        <div className='w-96 h-full'>
        <h1 className='font-bold text-5xl py-9'>About me</h1>
        <p className='font-bold text-5xl '>I'm Developer Fullstack,</p>
          <p className='text-2xl font-bold mt-3 '> passionate of programming langage, designers and 3D developer. I can work with group </p>
          <p className='text-xl font-bold mt-5'>Member of google developers groups GDG Mahajanga</p>
          <p className='text-xl font-bold mt-3 '>Member of english practice of Mahajanga EPM</p>
<div className='flex flex-row mt-5'>
<MdPlace className='text-xl text-red-700'/>         
 <a href='https://www.google.com/maps/place/Ambohimandamina/@-15.7165647,46.3427353,17z/data=!3m1!4b1!4m6!3m5!1s0x2203fbc7d5078047:0xd2cab551c012a77b!8m2!3d-15.7165647!4d46.344924!16s%2Fg%2F11jsghnl3k'
 className='ml-1 text-red-700'
 >
  Ambohimandamina , Mahajanga</a>
</div>
</div>
      </div>
    </div>
  )
}

export default Header