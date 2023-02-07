import React from 'react'
import Action from '../assets/React.png'
import Electron from "../assets/electron.png"
import Node from "../assets/nodejs.png"
import Mongo from "../assets/MongoDB.png"
import Mysql from "../assets/MySQL.png"
import Flutter from "../assets/flutter.png"
import Php from "../assets/php.png"
function Skills
() {
  return (
    <div>
        <div className='w-full h-screen '>
          <div>
            <h1 className='text-center text-4xl mt-14 font-bold'>Skills</h1>
            <div className='flex flex-row mt-9'>
              <img src={Action} alt="Reactphoto" className='w-60 h-32 ml-11' />
              <img src={Electron} alt="electron" className='w-32 h-32 ml-5' />
              <img src={Node} alt="node" className='w-60 h-32 ml-5' />
              <img src={Mongo} alt="Mongo" className='w-60 h-32 ml-5 mb-3' />
              <img src={Mysql} alt="Mysql" className='w-60 h-28 ml-5 mb-3' />
              <img src={Flutter} alt="flutter" className='w-28 h-28 ml-9 mb-3' />
            </div>
            <div>
<img src={Php} alt="phpPhoto" />
            </div>
          </div>
        </div>    
    </div>
  )
}

export default Skills
