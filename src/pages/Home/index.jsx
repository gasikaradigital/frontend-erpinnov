import React from 'react'
import Contact from './components/contact'
import Header from './components/header/index'
import Navbar from './components/navbar/index'
import Skills from './components/skills'
function HomePage() {
  return (
    <div>
       <Navbar></Navbar>
       <Header></Header>
       <Contact></Contact>
       <Skills></Skills>
    </div>
  )
}

export default HomePage