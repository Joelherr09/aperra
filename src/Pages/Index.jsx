import React from 'react'
import Navbar from '../Components/Navbar'
import CuadroLogin from '../Components/CuadroLogin'
import './css/Index.css'

const Index = () => {
  return (
    <div className='fondo-aperra h-[100vh] md:mt-[65px] mt-[160px] pt-3'>
        <Navbar/>

        <CuadroLogin/>
    </div>
  )
}

export default Index