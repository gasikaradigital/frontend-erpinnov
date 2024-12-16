import React, { useState } from 'react'
import Input from '../../components/Input'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import Checkbox, { ButtonPrimary } from '../../components/Buttons';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
    <div className='flex justify-center bg-gray-100 h-screen w-full items-center'>
   <div className='bg-white p-8 rounded-lg shadow-2xl w-1/3'>
   <div className='flex justify-center'>
    <img src={Logo} alt="loto ERP" />
   </div>
   <div className=''>
    <p className='text-gray-500'>Email</p>
   <Input
   type='email'
   placeholder={'Entre votre email'}
   ></Input>
   </div>
   <div className=' mt-4'>
  <div className='flex justify-between'>
   <p>Mot de passe</p>

    <Link to="/">Mot de passe oublié ?</Link> 
  </div>
  <Input
  type={showPassword ? 'text' : 'password'}
  placeholder={'Mot de passe'}
  icon={showPassword ? (
    <FaEye 
      onClick={togglePasswordVisibility} 
      className="cursor-pointer text-gray-500 text-xl" 
    />
  ) : (
    <FaEyeSlash 
      onClick={togglePasswordVisibility} 
      className="cursor-pointer text-gray-500 text-xl" 
    />
  )}
/>

   </div>
   <div className='mt-4'>
<Checkbox
label={'Se souvenir de moi'}
onChange={() => {}}
></Checkbox>
   </div>
   <div className='mt-4'>
 <ButtonPrimary 
 className={'w-full'}
 >Se connecter</ButtonPrimary>
   </div>
    <div className='mt-4'>
      <p className='text-center text-gray-500'>Nouveau sur notre plateforme ? <Link to='/register' className='text-[#7367f0]'>Inscrivez-vous</Link></p>
   </div>
   </div>
    </div>
    </>
  )
}
                
export default Login