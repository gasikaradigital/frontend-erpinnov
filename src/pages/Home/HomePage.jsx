import React from 'react'
import { ButtonPrimary, ButtonSecondary, LinkButton } from '../../components/Buttons'
import { Navbar } from '../../components/Navbar/Navbar'
import { CiUser } from "react-icons/ci";
import Logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import Erp from '../../assets/site.png'
import Testimonials from './Testimonials';
import PricingSection from './PricingSection';
import ModulesSection from './ModulesSection';
import FQA from './FQA';
import PopularArticles from './PopularArticles';
import ContactForm from './ContactForm';
import Footer from './Footer';
function HomePage() {

  let navigate = useNavigate();

// Navanbar content
const NavbarContent =(
  <div>

        <div class="max-w-7xl mx-auto flex items-center justify-between">
          
            <div >
              <img src={Logo} alt="logo ERP" />
            </div>
            <div class="flex items-center space-x-4">
                <a href="#" class="text-gray-800">Accueil</a>
                <a href="#" class="text-gray-800">Tarif</a>
                <a href="#" class="text-gray-800">FAQ</a>
                <a href="#" class="text-gray-800">Actu</a>
                <a href="#" class="text-gray-800">Contact</a>
        </div>
        
        < LinkButton className={`flex justify-between  items-center`}
        page={'/login'}
         >
                <CiUser className='text-xl font-semibold' />
                  Votre Espace Client</LinkButton>
    </div>
  </div>
)


  return (
    <>  
    <div className='w-full bg-[#f6edff] h-screen bg-white flex  justify-center'>
    <div className='fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md h-32 z-40'></div>
      <Navbar
        content={NavbarContent}
        className={`w-full p-8`}
      />
<div className='w-full h-screen flex-col'>
<div className='w-full bg-[#f6edff] p-14 rounded-b-xl h-full rounded-b-xl flex justify-between items-center'>
      <div className=' w-1/2 h-full flex flex-col justify-center items-center'>
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 min-h-screen p-8">
  <div className="mt-40 max-w-2xl mx-auto">
    <h1 className="text-4xl font-bold mb-4">
      <span className="bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">ERP Innov</span>
    </h1>
    
    <h2 className="text-5xl font-bold mb-6">
      <span className="text-teal-500">La Gestion</span>
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Intelligente à</span>
      <br/>
      <span className="text-teal-500">Portée de</span>
      <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"> Main</span>
    </h2>

    <p className="text-gray-600 text-md mb-8">Simplifiez, Innovez, Prospérez</p>

    <div className="flex gap-4 flex-wrap">
      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-medium hover:shadow-lg transition-all duration-300">
        Je teste gratuitement
      </button>
      
      <button className="px-6 py-3 bg-white text-blue-500 rounded-full font-medium border-2 border-blue-500 hover:shadow-lg transition-all duration-300">
        J'assiste à une démo
      </button>
    </div>
  </div>
</div>
      </div>
      <div className='w-1/2 h-full flex flex-col justify-center items-center bg-[#f6edff]'>
      <div className='bg-white p-8 rounded-lg shadow-2xl '>
      <img src={Erp} alt=" ERP image" />
      </div>
      </div>
</div>

        <div className='w-full h-96 bg-gray-800'>
<Testimonials></Testimonials>
        </div>
        <div className='w-full h-96 bg-gray-800 mt-96'>
<PricingSection></PricingSection>
        </div>
        <div className='w-full h-96 bg-gray-800 mt-[600px]'>
<ModulesSection></ModulesSection>
        </div>
        
        <div className='w-full h-96 bg-gray-800 mt-[600px]'>
      <FQA></FQA>
        </div>
         
        <div className='w-full h-96 bg-gray-800 mt-[600px]'>
        <PopularArticles></PopularArticles>
        </div>
        
        <div className='w-full h-96 bg-gray-800 mt-[600px]'>
        <ContactForm></ContactForm>
        </div>
        <div className='w-full h-96 bg-gray-800 mt-[600px]'>
       <Footer></Footer>
        </div>
</div>
    </div>
    </>
  )
}

export default HomePage
