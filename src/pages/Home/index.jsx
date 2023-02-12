import React from 'react'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header/index'
import Navbar from './components/navbar/index'
import Services from './components/services'
import Skills from './components/skills'
function HomePage() {
  return (
    <div>
       <Navbar></Navbar>
       <Header></Header>
       <Contact></Contact>
       <Skills></Skills>
       <Services></Services>
       <Footer></Footer>
    </div>
  )
}

export default HomePage