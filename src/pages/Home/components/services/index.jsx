import React from 'react'
import Web from '../assets/web.png'
import Design from '../assets/design.png'
import Photographer from '../assets/photographer.png'

function Services() {
  return (
    <div id='services' className='lg:w-screen lg:h-screen bg-[#ede9fe] w-96'>
<div className='flex lg:flex-row flex-col lg:p-28 p-5'>
<div className='lg:w-96 lg:h-96 w-60 h-60 shadow-xl rounded-2xl lg:ml-6 ml-12 lg:mt-10 mt-16 bg-white p-2 '>
<img src={Web} alt="web" />
<div>
  <h1 className='lg:text-3xl text-lg font-bold text-center text-[#3f3f46]'>Developer Fullstack</h1>
<p className='lg:text-xl text-sm font-bold lg:p-6 p-2 text-[#52525b] text-center'>Web developer, app developer, desktop developer, 3D developer</p>
</div>
</div>

<div className='lg:w-96 lg:h-96 w-60 h-60 shadow-xl rounded-2xl lg:ml-14 ml-12 lg:mt-10 mt-5 bg-white p-2 '>
<img src={Design} alt="design" className='w-80 h-1/2' />
<div className='lg:mt-8 mt-2'>
<h1 className='lg:text-3xl text-lg font-bold text-center text-[#3f3f46]'>UX/UI designer</h1>
<p className='lg:text-xl text-sm font-bold lg:p-6 p-2 text-[#52525b] text-center'>Web designer, app designer, desktop designer</p>
</div>
</div>

<div className='lg:w-96 lg:h-96 w-60 h-60 shadow-xl rounded-2xl lg:ml-14 lg:mt-10 ml-12 mt-5 bg-white p-2'>
<img src={Photographer} alt="photographe" className='w-80 h-1/2 ml-2' />
<div className='lg:mt-8 mt-2'>
<h1 className='lg:text-3xl text-lg font-bold text-center text-[#3f3f46]'>Video/Photographer</h1>
<p className='lg:text-xl text-sm font-bold lg:p-6 p-2 text-[#52525b] text-center'>youtuber, Photo session</p>
</div>
</div>
</div>
    </div>
  )
}

export default Services