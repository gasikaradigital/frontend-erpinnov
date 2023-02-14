import React from 'react'
import Web from '../assets/web.png'
import Design from '../assets/design.png'
import Photographer from '../assets/photographer.png'

function Services() {
  return (
    <div className='w-full h-screen bg-[#ede9fe]'>
<h1 className='text-4xl font-bold p-14 ml-14 text-[#3f3f46]'>My services</h1>
<div className='flex flex-row'>
<div className='w-96 h-96 shadow-xl rounded-2xl ml-14 mt-10 bg-white p-2 '>
<img src={Web} alt="web" />
<div>
  <h1 className='text-3xl font-bold text-center text-[#3f3f46]'>Fullstack developer</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>Web developer, app developper, desktop developper, 3D developper</p>
</div>
</div>

<div className='w-96 h-96 shadow-xl rounded-2xl ml-14 mt-10 bg-white p-2 '>
<img src={Design} alt="design" className='w-80' />
<div>
<h1 className='text-3xl font-bold text-center text-[#3f3f46]'>UX/UI designer</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>Web designer, app designer, desktop designer</p>
</div>
</div>

<div className='w-96 h-96 shadow-xl rounded-2xl ml-14 mt-10 bg-white p-2'>
<img src={Photographer} alt="photographe" className='w-60 h-60' />
<div>
<h1 className='text-3xl font-bold text-center text-[#3f3f46]'>Video/Photographer</h1>
<p className='text-xl font-bold p-6 text-[#52525b] text-center'>youtuber, Photo session</p>
</div>
</div>
</div>
    </div>
  )
}

export default Services