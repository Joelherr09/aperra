import React from 'react'
import Logo from '../assets/Logo.png'
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='bg-[#C85C5C] w-full md:max-h-[65px] items-center py-2 fixed top-0'>
        
        <nav className=' flex flex-col md:flex-row w-[90%] md:gap-4 gap-2 mx-auto justify-between'>
                <img src={Logo} className='h-[50px] w-[190px] mx-auto' alt="" />
                <div className='bg-[#FBD148] rounded-[50px] w-full max-w-[300px] mx-auto px-4  flex items-center justify-center'>
                    <FaSearch size={30}/>
                    <input type="text" className='font-bold bg-[#FBD148] rounded-[50px] py-2 h-full w-full text-center' value=" Busca ID de la Placa" />
                </div>
                
                <ul className='flex items-center mx-auto gap-8 text-2xl text'>
                    <li>Nosotros</li>
                    <li>Contacto</li>
                </ul>
        </nav>

    </div>
  )
}

export default Navbar